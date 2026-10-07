import FadeIn from "./FadeIn";
import "./PageHeader.css";

// The navy banner at the top of inner pages (Services, About, Resources, Contact).
// Usage: <PageHeader label="..." heading="..." accent="..." text="..." image="/images/xyz.webp" />
// "image" is optional. Without it you get the plain navy banner.
export default function PageHeader({ label, heading, accent, text, image, imageAlt = "" }) {
  return (
    <section className="ph">
      <div className="container">
        <FadeIn>
          <div className={`ph-card ${image ? "ph-card-image" : ""}`}>
            {/* photo on the right side, fading into the navy on its left edge */}
            {image && <img src={image} alt={imageAlt} className="ph-img" />}

            <div className="ph-content">
              {label && <p className="ph-label">{label}</p>}
              <h1>
                {heading} <span className="accent">{accent}</span>
              </h1>
              {text && <p className="ph-text">{text}</p>}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
