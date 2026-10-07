"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play, Quote } from "lucide-react";
import { content } from "../data/content";
import "./Testimonials.css";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const items = content.testimonials.reviewSlots;
  const autoplayPaused = manuallyPaused || isHovered || isFocused;

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(motionPreference.matches);
    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (autoplayPaused || reducedMotion) return undefined;

    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setActiveIndex((index) => (index + 1) % items.length);
      }
    }, 6200);

    return () => window.clearInterval(timer);
  }, [autoplayPaused, items.length, reducedMotion]);

  const showPrevious = () => setActiveIndex((index) => (index - 1 + items.length) % items.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % items.length);

  return (
    <section className="testimonials section" aria-labelledby="testimonials-title">
      <div className="container testimonials-inner">
        <div className="testimonials-heading">
          <p className="testimonials-label">{content.testimonials.label}</p>
          <h2 id="testimonials-title">{content.testimonials.heading} <span>{content.testimonials.accent}</span></h2>
          <p className="testimonials-intro">{content.testimonials.intro}</p>
        </div>

        <div
          className="testimonials-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client feedback"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false);
          }}
        >
          <div className="testimonials-window" aria-live="off">
            <div className="testimonials-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {items.map((item, index) => (
                <article
                  className="testimonials-slide"
                  key={item.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${items.length}`}
                  aria-hidden={index !== activeIndex}
                >
                  <div className="testimonials-card">
                    <div className="testimonials-card-top">
                      <span className="testimonials-step">{item.label}</span>
                      <Quote className="testimonials-quote-mark" size={36} strokeWidth={1.25} aria-hidden="true" />
                    </div>
                    <div className="testimonials-card-copy">
                      <p className="testimonials-card-kicker">{item.status}</p>
                      <h3>{content.testimonials.cardTitle}</h3>
                      <p className="testimonials-card-text">{content.testimonials.cardText}</p>
                    </div>
                    <div className="testimonials-card-bottom">
                      <span className="testimonials-brand">{content.testimonials.cardFooter}</span>
                      <span className="testimonials-count">{String(index + 1).padStart(2, "0")} <span>/ {String(items.length).padStart(2, "0")}</span></span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="testimonials-controls">
            <div className="testimonials-dots" aria-label="Choose a review slot">
              {items.map((item, index) => (
                <button
                  className={`testimonials-dot ${index === activeIndex ? "is-active" : ""}`}
                  key={item.id}
                  type="button"
                  aria-label={`Show review slot ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <div className="testimonials-arrows">
              <button type="button" className="testimonials-arrow" onClick={showPrevious} aria-label="Previous review"><ArrowLeft size={17} /></button>
              <button type="button" className="testimonials-arrow" onClick={showNext} aria-label="Next review"><ArrowRight size={17} /></button>
              <button
                type="button"
                className="testimonials-arrow testimonials-play"
                onClick={() => {
                  setManuallyPaused((paused) => !paused);
                  setIsHovered(false);
                  setIsFocused(false);
                }}
                aria-label={manuallyPaused || reducedMotion ? "Resume automatic reviews" : "Pause automatic reviews"}
              >
                {manuallyPaused || reducedMotion ? <Play size={15} /> : <Pause size={15} />}
              </button>
            </div>
          </div>
        </div>
        <p className="testimonials-note">{content.testimonials.note}</p>
      </div>
    </section>
  );
}
