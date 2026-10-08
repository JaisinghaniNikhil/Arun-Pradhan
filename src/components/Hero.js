"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "../data/content";
import CountUp from "./CountUp";
import "./Hero.css";

export default function Hero() {
  const { hero, stats, whatsappNumber, Coordinator[Advisor]Name } = content;

  // Clicking the button opens WhatsApp with a ready-made message
  const message = "Hello Arun, I would like to talk about insurance.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="hero">
      <div className="container">
        {/* ONE navy panel holds everything: text + stats on the left, portrait on the right */}
        <div className="hero-panel">
          {/* ---------- Left: headline, text, button, stats ---------- */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1>
              {hero.headline} <span className="accent">{hero.accent}</span>
            </h1>
            <p className="hero-lead">{hero.text}</p>

            <div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                {hero.button}
              </a>
            </div>

            {/* the three numbers now sit INSIDE the panel */}
            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <div className="stat-number">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ---------- Right: portrait ---------- */}
          <motion.div
            className="hero-photo-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* "fill" makes the image fill its column; CSS decides how it is cropped */}
            <Image
              src="/images/arun-hero.webp"
              alt={`${Coordinator[Advisor]Name}, LIC and health insurance Coordinator[Advisor]`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              className="hero-photo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}