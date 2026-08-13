"use client";

import { useEffect, useRef, useState } from "react";
import { useExtracted } from "next-intl";
import { projects } from "@/lib/projects";
import { Link } from "@/i18n/navigation";
import { ProjectCard } from "../project/project-card";
import { SectionLabel } from "../ui/section-label";
import { LiquidFill } from "../motion/liquid-fill";

export function SelectedWork() {
  const t = useExtracted();
  const featured = projects.filter((project) => project.featured);
  const railRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  function moveRail(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>(".project-card");
    const step = card ? card.offsetWidth + 1 : rail.clientWidth * 0.75;
    const reachedEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - step * 0.35;
    const reachedStart = rail.scrollLeft <= step * 0.35;

    if (direction === 1 && reachedEnd) rail.scrollTo({ left: 0, behavior: "smooth" });
    else if (direction === -1 && reachedStart) rail.scrollTo({ left: rail.scrollWidth, behavior: "smooth" });
    else rail.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  useEffect(() => {
    if (paused) return;
    const interval = window.setInterval(() => moveRail(1), 1000);
    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <section className="selected-work bordered-section" id="work" aria-labelledby="work-title">
      <div className="site-shell selected-work__inner">
        <div className="section-heading-row"><SectionLabel number="03" label={t("SELECTED WORK")} /><Link className="section-action liquid-control liquid-surface" href="/work"><LiquidFill color="violet" intensity="strong" duration={.95} /><span>{t("VIEW ALL")} / {projects.length.toString().padStart(2,"0")} ↗</span></Link></div>
        <div className="selected-work__title-row">
          <h2 id="work-title" className="section-title">{t("SELECTED")}<br />{t("SYSTEMS.")}</h2>
          <div className="selected-work__controls" aria-label={t("Selected systems carousel controls")}>
            <span>{t("AUTO SCROLL")} / {paused ? t("PAUSED") : t("ACTIVE")}</span>
            <button className="liquid-control liquid-surface" type="button" onClick={() => moveRail(-1)} aria-label={t("Previous project")}><LiquidFill color="violet" intensity="strong" duration={.8} /><span>←</span></button>
            <button className="liquid-control liquid-surface" type="button" onClick={() => moveRail(1)} aria-label={t("Next project")}><LiquidFill color="violet" intensity="strong" duration={.8} /><span>→</span></button>
          </div>
        </div>
      </div>
      <div
        className="selected-project-rail"
        ref={railRef}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
        aria-label={t("Selected systems")}
      >
        {featured.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </section>
  );
}
