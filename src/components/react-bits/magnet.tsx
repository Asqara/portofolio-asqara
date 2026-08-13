"use client";

// Adapted from React Bits Magnet (MIT + Commons Clause).
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Magnet({ children, padding = 70, strength = 4, className = "" }: { children: React.ReactNode; padding?: number; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (reduced) return;
    const move = (event: MouseEvent) => {
      if (!ref.current) return;
      const bounds = ref.current.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      if (Math.abs(centerX - event.clientX) < bounds.width / 2 + padding && Math.abs(centerY - event.clientY) < bounds.height / 2 + padding) setPosition({ x: (event.clientX - centerX) / strength, y: (event.clientY - centerY) / strength });
      else setPosition({ x: 0, y: 0 });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [padding, reduced, strength]);
  return <div ref={ref} className={`magnet ${className}`}><div style={{ transform: `translate3d(${position.x}px,${position.y}px,0)`, transition: "transform .35s cubic-bezier(.22,1,.36,1)", willChange: "transform" }}>{children}</div></div>;
}
