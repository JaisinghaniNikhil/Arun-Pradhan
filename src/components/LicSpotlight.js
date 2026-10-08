import Link from "next/link";
import CountUp from "./CountUp";
import FadeIn from "./FadeIn";
import { content } from "../data/content";
import "./LicSpotlight.css";

export default function LicSpotlight() {
  const ls = content.licSpotlight;
  const a = ls.anniversary;

  return (
    <section className="ls section">
      <div className="container">
        {/* ---------- Heading ---------- */}
        <FadeIn>
          <p className="ls-label">{ls.label}</p>
          <h2 className="ls-title">
            {ls.heading} <span className="accent-dark">{ls.accent}</span>
          </h2>
        </FadeIn>

        {/* ---------- The "70 years" panel (built from text, no image) ---------- */}
        <FadeIn delay={0.1}>
          <div className="ls-anniv">
            <div className="ls-70">
              <span className="ls-70-num">
                <CountUp value={a.value} />
              </span>
              <span className="ls-70-label">{a.valueLabel}</span>
            </div>

            <div>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          </div>
        </FadeIn>

        {/* ---------- Poster cards (hidden while the list is empty) ---------- */}
        {ls.creatives.length > 0 && (
          <>
            <h3 className="ls-sub">{ls.creativesTitle}</h3>
            <div className="ls-grid">
              {ls.creatives.map((item, index) => (
                <FadeIn key={item.image} delay={index * 0.12} className="ls-cell">
                  {/* the whole card is one link to the Services page */}
                  <Link href={item.href || "/services"} className="ls-card">
                    <img src={item.image} alt={item.alt || item.title} loading="lazy" />

                    <div className="ls-card-text">
                      <h4>{item.title}</h4>
                      {item.caption && <p>{item.caption}</p>}
                      {item.note && <p className="ls-card-note">{item.note}</p>}

                      {/* looks like a button, but is part of the card's link */}
                      <span className="btn btn-gold ls-card-btn">
                        {item.buttonText || ls.creativesButton}
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </>
        )}

        <p className="ls-disclaimer">{ls.disclaimer}</p>
      </div>
    </section>
  );
}