import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { content } from "../data/content";
import FadeIn from "./FadeIn";
import "./Insurers.css";

// Checks if a logo file really exists inside the "public" folder.
// If it doesn't, we show the insurer's short name as text instead of a broken image.
const logoExists = (src) =>
  Boolean(src) && fs.existsSync(path.join(process.cwd(), "public", src));

export default function Insurers() {
  const ins = content.insurers;

  return (
    <section className="ins section">
      <div className="container">
        {/* ---------- Heading ---------- */}
        <FadeIn>
          <p className="ins-label">{ins.label}</p>
          <h2 className="ins-title">
            {ins.heading} <span className="accent-dark">{ins.accent}</span>
          </h2>
        </FadeIn>

        <div className="ins-grid">
          {ins.items.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.15} className="ins-cell">
              <article className="ins-card">
                <div className="ins-logo-box">
                  {logoExists(item.logo) ? (
                    <img src={item.logo} alt={`${item.name} logo`} className="ins-logo" loading="lazy" />
                  ) : (
                    <span className="ins-wordmark">{item.short}</span>
                  )}
                </div>

                <p className="ins-type">{item.type}</p>
                <h3>{item.name}</h3>
                <p className="ins-text">{item.text}</p>

                <Link href="/services" className="ins-link">
                  {ins.linkText}
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>

        <p className="ins-note">{ins.note}</p>
      </div>
    </section>
  );
}