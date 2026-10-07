import Link from "next/link";
import { content } from "../data/content";
import FadeIn from "./FadeIn";
import "./ServicesPreview.css";

export default function ServicesPreview() {
  const { servicesPreview: sp } = content;

  // true only if an image path is written in content.js
  const hasPhoto = Boolean(sp.image);

  return (
    <section className="sp section">
      <div className={`container sp-grid ${hasPhoto ? "" : "sp-grid-nophoto"}`}>
        {/* ---------- Left: family photo (skipped if the file is missing) ---------- */}
        {hasPhoto && (
          <FadeIn className="sp-photo-cell">
            <div className="sp-photo">
              <img src={sp.image} alt={sp.imageAlt || ""} className="sp-photo-img" loading="lazy" />
            </div>
          </FadeIn>
        )}

        {/* ---------- Right: heading on top, navy panel below (overlaps the photo) ---------- */}
        <div className="sp-right">
          <FadeIn className="sp-header">
            <p className="sp-label">{sp.label}</p>
            <h2>
              {sp.heading} <span className="accent-dark">{sp.accent}</span>
            </h2>
            <p className="sp-text">{sp.text}</p>
            <Link href="/services" className="btn btn-gold">
              {sp.button}
            </Link>
          </FadeIn>

          <FadeIn delay={0.2} className="sp-panel-wrap">
            <div className="sp-panel">
              {sp.items.map((item) => (
                <Link href="/services" key={item.title} className="sp-item">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}