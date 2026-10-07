import Link from "next/link";
import { content } from "../data/content";
import FadeIn from "./FadeIn";
import "./Mentoring.css";

export default function Mentoring() {
  const m = content.mentoring;

  return (
    <section className="mentor">
      <div className="mentor-inner">
        <FadeIn>
          <h2>
            {m.headline} <span className="accent">{m.accent}</span>
          </h2>
          <p>{m.text}</p>
          {/* #mentoring jumps to the full Mentoring section on the About page (we build it later) */}
          <Link href="/about#mentoring" className="btn btn-outline">
            {m.button}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}