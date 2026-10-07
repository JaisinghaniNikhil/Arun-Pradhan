"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

// Shows a number that counts up from 0 when it scrolls into view.
// Example: <CountUp value={6000} suffix="+" />  ->  counts to 6,000+
export default function CountUp({ value, suffix = "" }) {
  const ref = useRef(null);                          // points at the <span> below
  const isInView = useInView(ref, { once: true });   // true when visible (only once)
  const [display, setDisplay] = useState(0);         // the number currently shown

  useEffect(() => {
    if (!isInView) return; // do nothing until the number is on screen

    // framer-motion's animate() goes from 0 to value in 1.8 seconds
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop(); // clean up if the page changes
  }, [isInView, value]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {display.toLocaleString("en-IN")}
      <span className="stat-suffix">{suffix}</span>
    </span>
  );
}