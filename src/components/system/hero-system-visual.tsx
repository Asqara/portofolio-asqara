"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useExtracted } from "next-intl";
import type { PointerEvent } from "react";
import { TextPressure } from "../react-bits/text-pressure";

export function HeroSystemVisual() {
  const t = useExtracted();
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 85, damping: 18, mass: .7 });
  const smoothY = useSpring(pointerY, { stiffness: 85, damping: 18, mass: .7 });
  const rotateY = useTransform(smoothX, [-1, 1], [-13, 13]);
  const rotateX = useTransform(smoothY, [-1, 1], [10, -10]);
  const imageX = useTransform(smoothX, [-1, 1], [-16, 16]);
  const imageY = useTransform(smoothY, [-1, 1], [-12, 12]);
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - .5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - .5) * 2);
  };
  const reset = () => { pointerX.set(0); pointerY.set(0); };

  return (
    <div className="hero-visual hero-visual--3d" aria-label={t("Interactive 3D cartoon software engineer")} onPointerMove={move} onPointerLeave={reset}>
      
      <motion.div className="core-object" style={{ rotateX, rotateY, x: imageX, y: imageY, transformPerspective: 1100 }}>
        <motion.div animate={reduced ? undefined : { y: [-5, 5, -5] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
          <Image src="https://cdn.asqara.tech/projects/hero-engineer-3d.png" alt={t("Stylized 3D software engineer holding a laptop")} width={1024} height={1536} priority sizes="(max-width: 900px) 100vw, 50vw" />
        </motion.div>
      </motion.div>
      <div className="core-pressure"><TextPressure text={t("FULL STACK DEVELOPER")} /></div>
      <div className="hero-visual__caption">{t("// MOVE POINTER TO DIRECT")}</div>
    </div>
  );
}
