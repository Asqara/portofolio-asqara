"use client";

// Adapted from React Bits ScrollVelocity (MIT + Commons Clause).
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

function useElementWidth(ref: React.RefObject<HTMLSpanElement | null>) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const update = () => ref.current && setWidth(ref.current.offsetWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [ref]);
  return width;
}

function VelocityLine({ text, velocity, reverse = false }: { text: string; velocity: number; reverse?: boolean }) {
  const reduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const copyRef = useRef<HTMLSpanElement>(null);
  const copyWidth = useElementWidth(copyRef);
  const direction = useRef(reverse ? -1 : 1);
  const x = useTransform(baseX, (value) => {
    if (!copyWidth) return "0px";
    const wrapped = (((value + copyWidth) % copyWidth) + copyWidth) % copyWidth - copyWidth;
    return `${wrapped}px`;
  });

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    const move = direction.current * velocity * (delta / 1000);
    baseX.set(baseX.get() + move + direction.current * move * Math.abs(factor));
  });

  return <div className="velocity-line"><motion.div className="velocity-line__track" style={{ x }}>{Array.from({ length: 6 }).map((_, index) => <span ref={index === 0 ? copyRef : undefined} key={index}>{text}<i>✣</i></span>)}</motion.div></div>;
}

export function EngineeringVelocity() {
  return <section className="engineering-velocity" aria-label="Engineering disciplines"><VelocityLine text="FULL-STACK / PLATFORM / DATA / PRODUCTION" velocity={34} /><VelocityLine text="DESIGN THE INTERFACE / OPERATE THE SYSTEM" velocity={25} reverse /></section>;
}
