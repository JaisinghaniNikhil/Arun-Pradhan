"use client";

import { motion } from "framer-motion";

// Wrap anything in <FadeIn> and it fades in + slides up
// when it scrolls into view. We reuse this in every section.
export default function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // play once, when 20% is visible
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}
