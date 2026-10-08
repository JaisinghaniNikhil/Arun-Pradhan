import { content } from "../../data/content";
import FadeIn from "../FadeIn";
import "../Mentoring.css";   // re-uses the blue band styles from the home page

export default function AboutMentoring() {
  const m = content.about.mentoring;

  // the button opens WhatsApp with a ready-made message about mentoring
  const message = "Hello Arun, I would like to know about mentoring for new Advisors.";
  const link = `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    // id="mentoring" is what the home page's "Learn About Mentoring" button jumps to
    <section className="mentor" id="mentoring">
      <div className="mentor-inner">
        <FadeIn>
          <h2>
            {m.heading} <span className="accent">{m.accent}</span>
          </h2>
          <p>{m.text}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            {m.button}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}