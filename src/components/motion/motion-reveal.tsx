"use client";

import { motion, useReducedMotion } from "framer-motion";

type MotionRevealProps = {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
};

export function MotionReveal({ children, direction = "up", delay = 0, className = "" }: MotionRevealProps) {
  const reduced = useReducedMotion();
  const offset = direction === "left" ? { x: 54, y: 0 } : direction === "right" ? { x: -54, y: 0 } : { x: 0, y: 54 };

  return (
    <motion.div
      className={`motion-reveal ${className}`}
      initial={reduced ? false : { opacity: 0, ...offset, clipPath: "inset(0 0 16% 0)" }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0, y: 0, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
