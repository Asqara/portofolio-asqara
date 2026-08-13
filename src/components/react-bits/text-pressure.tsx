"use client";

// Adapted from React Bits TextPressure (MIT + Commons Clause).
import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

export function TextPressure({ text, className = "" }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spansRef = useRef<Array<HTMLSpanElement | null>>([]);
  const pointer = useRef<Point>({ x: 0, y: 0 });
  const smooth = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    pointer.current = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    smooth.current = { ...pointer.current };
    const trackPointer = (event: PointerEvent) => { pointer.current = { x: event.clientX, y: event.clientY }; };
    window.addEventListener("pointermove", trackPointer, { passive: true });
    let frame = 0;
    const animate = () => {
      smooth.current.x += (pointer.current.x - smooth.current.x) / 12;
      smooth.current.y += (pointer.current.y - smooth.current.y) / 12;
      const bounds = container.getBoundingClientRect();
      const maxDistance = Math.max(bounds.width * .52, 1);
      spansRef.current.forEach((span) => {
        if (!span) return;
        const char = span.getBoundingClientRect();
        const dx = smooth.current.x - (char.left + char.width / 2);
        const dy = smooth.current.y - (char.top + char.height / 2);
        const pressure = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / maxDistance);
        const weight = Math.round(320 + pressure * 580);
        const stretch = .76 + pressure * .34;
        const lift = pressure * -4;
        span.style.fontVariationSettings = `'wght' ${weight}`;
        span.style.transform = `translateY(${lift}px) scaleX(${stretch})`;
        span.style.opacity = `${.56 + pressure * .44}`;
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("pointermove", trackPointer); };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`text-pressure ${className}`}
      aria-label={text}
    >
      {text.split("").map((character, index) => <span key={`${character}-${index}`} ref={(element) => { spansRef.current[index] = element; }} aria-hidden="true">{character === " " ? "\u00a0" : character}</span>)}
    </div>
  );
}
