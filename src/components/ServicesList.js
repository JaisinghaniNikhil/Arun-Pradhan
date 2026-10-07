"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "../data/content";
import { plans, planCategories } from "../data/plans";
import { filterPlans, matchesCategory, makeAskLink } from "../data/plan-utils";
import "./ServicesList.css";

const PAGE_SIZE = 9;

/* Returns true when the media query matches (used to run the slider on mobile only). */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return matches;
}

/*
  Smooth auto-advance for a horizontally scrolling, scroll-snapped row.
  - Pauses while the user touches it, resumes a few seconds after they stop
  - Pauses when off-screen or when the browser tab is hidden
  - Loops back to the first card at the end
*/
function useAutoSlide(ref, enabled, resetKey, interval = 3500, resumeDelay = 4000) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: "auto" });
    if (!enabled) return;

    let paused = false;
    let onScreen = true;
    let resumeTimer;

    const pause = () => {
      paused = true;
      clearTimeout(resumeTimer);
    };
    const resumeSoon = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
      }, resumeDelay);
    };

    const tick = () => {
      if (paused || !onScreen || document.hidden) return;
      const cards = el.children;
      if (cards.length < 2) return;

      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      const step = cards[0].offsetWidth + gap;
      const next = (Math.round(el.scrollLeft / step) + 1) * step;
      el.scrollTo({ left: next, behavior: "smooth" });
    };

    const timer = setInterval(tick, interval);
    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
    io.observe(el);

    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resumeSoon, { passive: true });
    el.addEventListener("touchcancel", resumeSoon, { passive: true });
    el.addEventListener("focusin", pause);
    el.addEventListener("focusout", resumeSoon);

    return () => {
      clearInterval(timer);
      clearTimeout(resumeTimer);
      io.disconnect();
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resumeSoon);
      el.removeEventListener("touchcancel", resumeSoon);
      el.removeEventListener("focusin", pause);
      el.removeEventListener("focusout", resumeSoon);
    };
  }, [ref, enabled, resetKey, interval, resumeDelay]);
}

export default function ServicesList() {
  const s = content.servicesPage;
  const reducedMotion = useReducedMotion();
  const [provider, setProvider] = useState("LIC");
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const isMobile = useMediaQuery("(max-width: 640px)");
  const gridRef = useRef(null);
  useAutoSlide(gridRef, isMobile && !reducedMotion, `${provider}-${filter}-${query}`);

  const available = filterPlans(plans, { provider, query });
  const filtered = available.filter((plan) => matchesCategory(plan, filter));
  const shown = filtered.slice(0, visible);
  const categories = planCategories.filter((category) =>
    plans.some((plan) =>
      (provider === "All" || plan.provider === provider) && matchesCategory(plan, category)
    )
  );
  const chooseProvider = (name) => {
    setProvider(name);
    setFilter("All");
    setVisible(PAGE_SIZE);
  };
  const reset = () => {
    setProvider("LIC");
    setFilter("All");
    setQuery("");
    setVisible(PAGE_SIZE);
  };

  return (
    <section className="sl section" aria-label="Explore insurance plans">
      <div className="container">
        <div className="sl-toolbar">
          <div className="sl-provider" role="group" aria-label="Insurance provider">
            {["LIC", "Care Health", "All"].map((name) => (
              <button type="button" key={name} aria-pressed={provider === name}
                className={`sl-provider-btn ${provider === name ? "is-active" : ""}`}
                onClick={() => chooseProvider(name)}>
                {name === "All" ? "All providers" : name}
              </button>
            ))}
          </div>
          <label className="sl-search">
            <span>Find a plan</span>
            <input type="search" value={query} placeholder="Plan name, number or UIN"
              onChange={(event) => { setQuery(event.target.value); setVisible(PAGE_SIZE); }} />
          </label>
        </div>

        <div className="sl-chips" role="group" aria-label="Plan category">
          {["All", ...categories].map((name) => (
            <button type="button" key={name} aria-pressed={filter === name}
              className={`sl-chip ${filter === name ? "sl-chip-active" : ""}`}
              onClick={(event) => {
                setFilter(name);
                setVisible(PAGE_SIZE);
                event.currentTarget.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
              }}>
              {name} <span className="sl-chip-count">{available.filter((p) => matchesCategory(p, name)).length}</span>
            </button>
          ))}
        </div>

        <p className="sl-count" role="status" aria-live="polite" aria-atomic="true">
          Showing {shown.length} of {filtered.length} products
        </p>

        {filtered.length === 0 ? (
          <div className="sl-empty">
            <p>{s.empty || "No plans match your search."}</p>
            <button type="button" className="sl-reset" onClick={reset}>Reset filters</button>
          </div>
        ) : (
          <motion.div ref={gridRef} key={`${provider}-${filter}`} className="sl-grid"
            initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.25 }}>
            {shown.map((plan) => {
              const askUrl = makeAskLink(content.whatsappNumber, plan);
              return (
                <article key={plan.id} className="sl-card" aria-labelledby={`title-${plan.id}`}>
                  <div className={`sl-image-wrap sl-image-${plan.imageKind || "brochure"}`}>
                    {/* Plain img supports bundled WebP without Next image configuration. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={plan.image} alt={plan.imageAlt} className="sl-image"
                      width="600" height="360" loading="lazy" decoding="async"
                      onError={(event) => {
                        const fallback = plan.provider === "Care Health"
                          ? "/images/plans/care-logo.webp" : "/images/plans/lic-logo.webp";
                        if (event.currentTarget.dataset.fallback) return;
                        event.currentTarget.dataset.fallback = "true";
                        event.currentTarget.src = fallback;
                        event.currentTarget.alt = `${plan.provider} logo`;
                      }} />
                    <span className="sl-image-caption">
                      {plan.imageKind === "logo" ? plan.provider : plan.imageKind === "poster" ? "Official product poster" : "Official brochure preview"}
                    </span>
                  </div>
                  <div className="sl-card-body">
                    <div className="sl-meta">
                      <span>{plan.category} · {plan.provider}</span>
                      {plan.planNo && <span className="sl-planno">Plan {plan.planNo}</span>}
                    </div>
                    <h3 id={`title-${plan.id}`}>{plan.name}</h3>
                    {plan.uin && <p className="sl-uin">UIN: {plan.uin}</p>}
                    {(plan.onlineOnly || plan.kind === "rider" || plan.kind === "group" || plan.kind === "specialist") && (
                      <p className="sl-badge">{plan.onlineOnly ? "Online only" : plan.kind === "rider" ? "Optional rider" : plan.kind === "group" ? "For eligible groups" : "GIFT City product"}</p>
                    )}
                    <p className="sl-tagline">{plan.tagline}</p>
                    {plan.points?.length > 0 && (
                      <ul className="sl-points">{plan.points.map((point) => <li key={point}>{point}</li>)}</ul>
                    )}
                    <div className="sl-actions">
                      {plan.url && <a href={plan.url} target="_blank" rel="noopener noreferrer"
                        className="sl-know" aria-label={`Official details for ${plan.name} (opens in a new tab)`}>
                        {s.knowMore || "Know more"} <span aria-hidden="true">↗</span>
                      </a>}
                      {askUrl && <a href={askUrl} target="_blank" rel="noopener noreferrer"
                        className="btn btn-gold sl-ask" aria-label={`Ask Arun about ${plan.name} on WhatsApp`}>
                        {s.askButton || "Ask Arun"}
                      </a>}
                    </div>
                    {plan.brochureUrl && <a className="sl-brochure" href={plan.brochureUrl}
                      target="_blank" rel="noopener noreferrer" aria-label={`Read the official brochure for ${plan.name} (opens in a new tab)`}>
                      Read official brochure ↗
                    </a>}
                  </div>
                </article>
              );
            })}
          </motion.div>
        )}
        {filtered.length > visible && (
          <div className="sl-more">
            <button type="button" className="btn sl-more-btn" onClick={() => setVisible((count) => count + PAGE_SIZE)}>
              {s.showMore || "Show more"} ({filtered.length - shown.length} remaining)
            </button>
          </div>
        )}
        <p className="sl-note">Benefits, eligibility and availability depend on the insurer’s current policy terms.
          Riders require an eligible base policy. Online-only plans are purchased directly from LIC.</p>
      </div>
    </section>
  );
}