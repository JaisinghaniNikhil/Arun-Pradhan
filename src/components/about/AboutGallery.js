"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "../../data/content";
import FadeIn from "../FadeIn";
import "./AboutGallery.css";

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
function useAutoSlide(ref, enabled, interval = 3500, resumeDelay = 4000) {
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

    return () => {
      clearInterval(timer);
      clearTimeout(resumeTimer);
      io.disconnect();
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resumeSoon);
      el.removeEventListener("touchcancel", resumeSoon);
    };
  }, [ref, enabled, interval, resumeDelay]);
}

export default function AboutGallery() {
  const g = content.about.gallery;

  // Hooks must run before the early return below
  const isMobile = useMediaQuery("(max-width: 640px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const gridRef = useRef(null);
  useAutoSlide(gridRef, isMobile && !reducedMotion);

  // No photos added yet? Then the whole section stays hidden.
  if (!g || !g.items || g.items.length === 0) return null;

  return (
    // id="achievements" lets other pages link straight to this section
    <section className="gal section" id="achievements">
      <div className="container">
        {/* ---------- Heading ---------- */}
        <FadeIn>
          <p className="gal-label">{g.label}</p>
          <h2 className="gal-title">
            {g.heading} <span className="accent-dark">{g.accent}</span>
          </h2>
        </FadeIn>

        {/* ---------- One card per photo or certificate ---------- */}
        <div className="gal-grid" ref={gridRef}>
          {g.items.map((item, index) => (
            <FadeIn
              key={item.image}
              delay={isMobile ? 0 : (index % 3) * 0.12}
              className="gal-cell"
            >
              {/* clicking opens the full image in a new tab (simple "enlarge") */}
              <a
                href={item.image}
                target="_blank"
                rel="noopener noreferrer"
                className="gal-card"
                aria-label={`View larger: ${item.title}`}
              >
                <div className={`gal-img-box ${item.type === "certificate" ? "gal-cert" : ""}`}>
                  <img src={item.image} alt={item.alt || item.title} loading="lazy" />
                </div>

                <div className="gal-info">
                  {/* "2019 · MDRT" (skips whatever is missing) */}
                  <p className="gal-year">{[item.year, item.by].filter(Boolean).join(" · ")}</p>
                  <h3>{item.title}</h3>
                  {item.caption && <p className="gal-caption">{item.caption}</p>}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {g.note && <p className="gal-note">{g.note}</p>}
      </div>
    </section>
  );
} 