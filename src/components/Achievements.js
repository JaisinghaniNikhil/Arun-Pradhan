import { content } from "../data/content";
import FadeIn from "./FadeIn";
import "./Achievements.css";

export default function Achievements() {
  const a = content.achievements;

  return (
    <section className="ach section">
      <div className="container">
        {/* ---------- Heading ---------- */}
        <FadeIn>
          <p className="ach-label">{a.label}</p>
          <h2 className="ach-title">
            {a.heading} <span className="accent-dark">{a.accent}</span>
          </h2>
        </FadeIn>

        {/* ---------- Achievement columns ---------- */}
        <div className="ach-grid">
          {a.items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.15} className="ach-cell">
              <div className="ach-item">
                <p className="ach-name">{item.title}</p>
                <p className="ach-value">{item.value}</p>
                <p className="ach-text">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}