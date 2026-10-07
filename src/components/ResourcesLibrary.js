import Link from "next/link";
import FadeIn from "./FadeIn";
import { resourceFaqs, resourceGuides } from "../data/resources";
import "./ResourcesLibrary.css";

export default function ResourcesLibrary() {
  return (
    <>
      <section className="rl-intro section">
        <div className="container rl-intro-inner">
          <FadeIn>
            <p className="rl-eyebrow">A clear place to start</p>
            <h2>Useful answers for the decisions <span className="accent-dark">ahead</span></h2>
            <p className="rl-lede">Explore straightforward guides to life cover, health insurance and retirement planning. Use them to prepare questions and compare options with more confidence.</p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <a className="rl-jump" href="#common-questions">Have a question? See the FAQs <span aria-hidden="true">↓</span></a>
          </FadeIn>
        </div>
      </section>

      <section className="rl-guides section" aria-labelledby="rl-guides-title">
        <div className="container">
          <FadeIn>
            <p className="rl-eyebrow">The guide library</p>
            <h2 className="rl-section-title" id="rl-guides-title">Explore a topic</h2>
          </FadeIn>
          <div className="rl-guide-grid">
            {resourceGuides.map((guide, index) => (
              <FadeIn key={guide.id} delay={index * 0.1} className="rl-guide-cell">
                <a href={`#${guide.id}`} className="rl-guide-card">
                  <span className="rl-guide-category">{guide.category}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.summary}</p>
                  <span className="rl-guide-link">Read the guide <span aria-hidden="true">↓</span></span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="rl-articles section" aria-label="Insurance and planning guides">
        <div className="container rl-article-list">
          {resourceGuides.map((guide, index) => (
            <article className={`rl-article ${index % 2 ? "rl-article-reverse" : ""}`} id={guide.id} key={guide.id}>
              <FadeIn className="rl-article-image-wrap">
                <img src={guide.image} alt={guide.imageAlt} className="rl-article-image" loading="lazy" />
              </FadeIn>
              <FadeIn delay={0.08} className="rl-article-copy">
                <p className="rl-guide-category">{guide.category}</p>
                <h2>{guide.title}</h2>
                <p className="rl-article-intro">{guide.intro}</p>
                <div className="rl-points">
                  {guide.points.map((point) => (
                    <div className="rl-point" key={point.title}>
                      <h3>{point.title}</h3>
                      <p>{point.text}</p>
                    </div>
                  ))}
                </div>
                <p className="rl-takeaway"><strong>Keep in mind</strong>{guide.takeaway}</p>
              </FadeIn>
            </article>
          ))}
        </div>
      </section>

      <section className="rl-faq section" id="common-questions" aria-labelledby="rl-faq-title">
        <div className="container rl-faq-layout">
          <FadeIn>
            <p className="rl-eyebrow">A little more clarity</p>
            <h2 id="rl-faq-title">Common questions</h2>
            <p>Still deciding where to begin? These answers can help you prepare for a conversation.</p>
            <Link href="/contact" className="btn btn-sky rl-faq-cta">Ask Arun a question</Link>
          </FadeIn>
          <div className="rl-faq-list">
            {resourceFaqs.map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 0.08}>
                <details className="rl-faq-item">
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
