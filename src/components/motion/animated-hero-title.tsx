"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedHeroTitle({ lines, ariaLabel }: { lines: readonly string[]; ariaLabel: string }) {
  const reduced = useReducedMotion();
  return (
    <h1 id="hero-title" aria-label={ariaLabel}>
      {lines.map((line, lineIndex) => (
        <span className={`hero-title__line ${lineIndex === 2 ? "hero-title__line--accent" : ""}`} key={`${line}-${lineIndex}`}>
          <motion.span initial={reduced ? false : { y: "115%", rotate: 2 }} animate={reduced ? undefined : { y: "0%", rotate: 0 }} transition={{ duration: .9, delay: .12 + lineIndex * .12, ease: [0.16, 1, 0.3, 1] }}>{line}</motion.span>
        </span>
      ))}
    </h1>
  );
}
