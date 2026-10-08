import Link from "next/link";
import { content } from "../data/content";
import FadeIn from "./FadeIn";
import "./ClosingCTA.css";

export default function ClosingCTA() {
  const { closingCta: cta, AdvisorName, tagline, whatsappNumber } = content;

  // the gold button opens WhatsApp with a ready-made message
  const message = "Hello Arun, I would like to talk about insurance.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="cta">
      <div className="container">
        <FadeIn>
          <div className="cta-card">
            {/* ---------- Left: heading, text, two buttons ---------- */}
            <div>
              <h2>
                {cta.heading} <span className="accent">{cta.accent}</span>
              </h2>
              <p>{cta.text}</p>

              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-outline">
                  {cta.secondaryButton}
                </Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  {cta.primaryButton}
                </a>
              </div>
            </div>

            {/* ---------- Right: name + tagline (acts like a logo) ---------- */}
            <div className="cta-brand">
              <p className="cta-brand-name">{AdvisorName}</p>
              <p className="cta-brand-tag">{tagline}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}