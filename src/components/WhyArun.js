"use client"; // uses state (which tab is selected), so it runs in the browser

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { content } from "../data/content";
import FadeIn from "./FadeIn";
import "./WhyArun.css";

export default function WhyArun() {
  const { whyArunHeading: head, whyArun: tabs } = content;

  const [active, setActive] = useState(0);   // 0 = first tab
  const current = tabs[active];
  const hasPhoto = Boolean(current.image);   // no "image" line = old number block

  return (
    <section className="why section">
      <div className="container">
        <FadeIn>
          <p className="why-label">{head.label}</p>
          <h2 className="why-title">
            {head.heading} <span className="accent-dark">{head.accent}</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="why-card">
            {/* LEFT: tabs on top, content below */}
            <div className="why-left">
              <div className="why-tabs" role="tablist">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.tab}
                    id={`why-tab-${index}`}
                    role="tab"
                    aria-selected={active === index}
                    aria-controls={`why-panel-${index}`}
                    className={`why-tab ${active === index ? "why-tab-active" : ""}`}
                    onClick={() => setActive(index)}
                  >
                    {tab.tab}
                  </button>
                ))}
              </div>

              <motion.div
                key={active}
                className="why-text"
                role="tabpanel"
                id={`why-panel-${active}`}
                aria-labelledby={`why-tab-${active}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3>{current.heading}</h3>
                <p>{current.text}</p>
                <Link href="/about" className="why-link">
                  {head.linkText}
                </Link>
              </motion.div>
            </div>

            {/* RIGHT: photo (or the numbered navy block if there is no photo) */}
            <div className={`why-visual ${hasPhoto ? "why-visual-photo" : ""}`}>
              {hasPhoto ? (
                // key={active} fades the new photo in every time you switch tabs
                <motion.div
                  key={active}
                  className="why-photo-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={current.image} alt={current.imageAlt || ""} className="why-photo" />
                  <span className="why-photo-label">{current.tab}</span>
                </motion.div>
              ) : (
                <>
                  <motion.span
                    key={active}
                    className="why-number"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    aria-hidden="true"
                  >
                    0{active + 1}
                  </motion.span>
                  <p className="why-visual-label" aria-hidden="true">
                    {current.tab}
                  </p>
                </>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
