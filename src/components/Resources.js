import Link from "next/link";
import { content } from "../data/content";
import FadeIn from "./FadeIn";
import "./Resources.css";

export default function Resources() {
  const r = content.resources;

  return (
    <section className="res section">
      <div className="container">
        <FadeIn>
          <p className="res-label">{r.label}</p>
          <h2 className="res-title">
            {r.heading} <span className="accent-dark">{r.accent}</span>
          </h2>
        </FadeIn>

        <div className="res-grid">
          {r.items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.15} className="res-cell">
              <Link href={item.href} className="res-card">
                {/* thumbnail (skipped if no image path is written in content.js) */}
                {item.image && (
                  <div className="res-thumb">
                    <img src={item.image} alt={item.imageAlt || ""} className="res-thumb-img" loading="lazy" />
                  </div>
                )}

                <div className="res-body">
                  <p className="res-category">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p className="res-text">{item.text}</p>
                  <span className="res-more">{r.readMore}</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="res-button-wrap">
          <Link href="/resources" className="btn btn-sky">
            {r.button}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
