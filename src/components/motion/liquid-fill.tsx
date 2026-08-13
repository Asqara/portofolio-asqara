"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type LiquidFillProps = {
  direction?: "left-to-right" | "right-to-left";
  color?: "violet" | "lime";
  intensity?: "subtle" | "medium" | "strong";
  delay?: number;
  duration?: number;
  className?: string;
};

const wave = {
  start: "M24 0 C18 12 22 25 15 38 C8 51 20 62 14 76 C10 86 16 94 12 100 L24 100 Z",
  active: "M24 0 C12 11 21 24 10 39 C3 53 18 64 9 78 C5 88 14 95 8 100 L24 100 Z",
  settle: "M24 0 C19 13 21 26 16 40 C11 53 19 66 14 79 C11 89 16 96 13 100 L24 100 Z"
};

export function LiquidFill({ direction = "left-to-right", color = "violet", intensity = "subtle", delay = 0, duration = 1.5, className = "" }: LiquidFillProps) {
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const host = rootRef.current?.parentElement;
    if (!host) return;
    const canActivate = () => !(host instanceof HTMLButtonElement && host.disabled);
    const enter = () => { if (canActivate()) setHovered(true); };
    const leave = () => setHovered(false);
    const focusIn = () => { if (canActivate()) setHovered(true); };
    const focusOut = (event: FocusEvent) => {
      if (!host.contains(event.relatedTarget as Node | null)) setHovered(false);
    };
    host.addEventListener("pointerenter", enter);
    host.addEventListener("pointerleave", leave);
    host.addEventListener("focusin", focusIn);
    host.addEventListener("focusout", focusOut);
    return () => {
      host.removeEventListener("pointerenter", enter);
      host.removeEventListener("pointerleave", leave);
      host.removeEventListener("focusin", focusIn);
      host.removeEventListener("focusout", focusOut);
    };
  }, []);

  return (
    <span ref={rootRef} className={`liquid-fill liquid-fill--${color} liquid-fill--${intensity} ${className}`} data-direction={direction} aria-hidden="true">
      <motion.span
        className="liquid-fill__body"
        initial={false}
        animate={reduced ? { width: "0%", opacity: 0 } : { width: hovered ? "100%" : "0%", opacity: hovered ? 1 : 0 }}
        transition={{ width: { duration: hovered ? duration : .62, delay: hovered ? delay : 0, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: .16, delay: hovered ? delay : 0 } }}
      >
        <svg className="liquid-fill__edge" viewBox="0 0 24 100" preserveAspectRatio="none">
          <motion.path
            d={wave.settle}
            initial={false}
            animate={reduced ? { d: wave.settle } : hovered ? { d: [wave.start, wave.active, wave.settle] } : { d: wave.start }}
            transition={hovered ? { duration: duration + .18, delay, times: [0, .56, 1], ease: [0.22, 1, 0.36, 1] } : { duration: .42, ease: "easeOut" }}
          />
        </svg>
      </motion.span>
    </span>
  );
}
