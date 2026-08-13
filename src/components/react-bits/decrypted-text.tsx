"use client";

// Adapted from React Bits DecryptedText (MIT + Commons Clause).
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type DecryptedTextProps = {
  text: string;
  speed?: number;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover";
};

export function DecryptedText({ text, speed = 32, characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_/.+", className = "", encryptedClassName = "", animateOn = "view" }: DecryptedTextProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: .7 });
  const [display, setDisplay] = useState(text);
  const [revealed, setRevealed] = useState(text.length);
  const chars = useMemo(() => characters.split(""), [characters]);

  const run = useCallback(() => {
    if (reduced) return;
    setRevealed(0);
    let pointer = 0;
    const timer = window.setInterval(() => {
      pointer += 1;
      setRevealed(pointer);
      setDisplay(text.split("").map((char, index) => char === " " || index < pointer ? char : chars[Math.floor(Math.random() * chars.length)]).join(""));
      if (pointer >= text.length) { window.clearInterval(timer); setDisplay(text); }
    }, speed);
    return () => window.clearInterval(timer);
  }, [chars, reduced, speed, text]);

  useEffect(() => {
    if (animateOn !== "view" || !inView) return;
    const kickoff = window.setTimeout(run, 0);
    return () => window.clearTimeout(kickoff);
  }, [animateOn, inView, run]);

  return (
    <motion.span ref={ref} className="decrypted-text" onMouseEnter={animateOn === "hover" ? run : undefined}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display.split("").map((char, index) => <span key={`${index}-${char}`} className={index < revealed ? className : encryptedClassName}>{char}</span>)}</span>
    </motion.span>
  );
}
