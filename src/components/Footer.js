import Link from "next/link";
import { content } from "../data/content";
import "./Footer.css";

// Returns true only if a value is filled in (not empty, not a "TODO" placeholder)
const has = (value) => value && !value.startsWith("TODO");

export default function Footer() {
  const { footer: f, ConsultantName, tagline, phone, nav } = content;

  return (
    <footer className="footer">
      <div className="container">
        {/* ---------- Three columns ---------- */}
        <div className="footer-grid">
          {/* 1. Name + quote */}
          <div>
            <p className="footer-name">{ConsultantName}</p>
            <p className="footer-tag">{tagline}</p>
            <blockquote className="footer-quote">{f.quote}</blockquote>
          </div>

          {/* 2. Page links */}
          <div>
            <h4 className="footer-heading">{f.quickLinksTitle}</h4>
            <ul className="footer-list">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact details (each line shows only if it is filled in) */}
          <div>
            <h4 className="footer-heading">{f.contactTitle}</h4>
            <ul className="footer-list">
              {has(f.address) && <li>{f.address}</li>}
              {has(phone) && (
                <li>
                  <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a>
                </li>
              )}
              {has(f.email) && (
                <li>
                  <a href={`mailto:${f.email}`}>{f.email}</a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* ---------- Google Map (only if a link is added) ---------- */}
        {has(f.mapEmbedUrl) && (
          <div className="footer-map">
            <iframe
              src={f.mapEmbedUrl}
              title={`Office location of ${ConsultantName}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* ---------- Bottom bar: legal text ---------- */}
        <div className="footer-bottom">
          <p className="footer-disclaimer">{f.disclaimer}</p>
          {has(f.licenseLine) && <p className="footer-disclaimer">{f.licenseLine}</p>}

          <div className="footer-meta">
            <span>
              © {new Date().getFullYear()} {ConsultantName}. All rights reserved.
            </span>
            <span>{f.credit}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}