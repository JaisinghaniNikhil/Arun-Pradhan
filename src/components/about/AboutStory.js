import { content } from "../../data/content";
import FadeIn from "../FadeIn";
import "./AboutStory.css";

// The navy "wording" panel shown on the left when there is no photo.
// It is built from text, so it stays sharp on every screen.
// Everything in it comes from content.js (name, tagline, quote, logos).
function QuotePanel() {
  const { advisorName, tagline, footer, insurers } = content;

  return (
    <div className="qp">
      <div>
        <p className="qp-eyebrow">The story behind</p>
        <p className="qp-name">{advisorName}</p>
        <p className="qp-tag">{tagline}</p>
      </div>

      <blockquote className="qp-quote">
        <span className="qp-mark" aria-hidden="true">
          “
        </span>
        {footer.quote}
      </blockquote>

      <div className="qp-foot">
        <p className="qp-assoc">Associated with</p>
        <div className="qp-logos">
          {insurers.items.map((item) => (
            <div key={item.short} className="qp-logo">
              <img src={item.logo} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AboutStory() {
  const { story, journey } = content.about;

  return (
    <>
      {/* =============== 1. Who is Arun: panel (or photo) + text =============== */}
      <section className="story section">
        <div className="container story-grid">
          <FadeIn>
            {/* a photo path in content.js = photo; empty ("") = the wording panel */}
            {story.image ? (
              <div className="story-frame">
                <img src={story.image} alt={story.imageAlt} className="story-photo" />
              </div>
            ) : (
              <QuotePanel />
            )}
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="story-label">{story.label}</p>
            <h2>
              {story.heading} <span className="accent-dark">{story.accent}</span>
            </h2>
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="story-text">
                {paragraph}
              </p>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* =============== 2. Journey: vertical timeline =============== */}
      <section className="journey section">
        <div className="container">
          <FadeIn>
            <p className="story-label journey-label">{journey.label}</p>
            <h2 className="journey-title">
              {journey.heading} <span className="accent-dark">{journey.accent}</span>
            </h2>
          </FadeIn>

          <div className="journey-list">
            {journey.items.map((item) => (
              <FadeIn key={item.title} className="journey-item">
                <p className="journey-when">{item.when}</p>
                <div className="journey-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}