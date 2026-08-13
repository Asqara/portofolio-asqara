"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      autoToggle: true,
      anchors: { offset: -64, duration: 1.1 },
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: .9,
      stopInertiaOnNavigate: true,
      respectReducedMotion: true
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
