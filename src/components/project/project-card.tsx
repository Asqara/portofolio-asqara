"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useExtracted } from "next-intl";
import type { PointerEvent } from "react";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/lib/types";
import { useProjectCopy } from "../../../data/project-copy";
import { LiquidFill } from "../motion/liquid-fill";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useExtracted();
  const copy = useProjectCopy(project.slug);
  const reduced = useReducedMotion();
  const cursorX = useSpring(useMotionValue(-100), { stiffness: 520, damping: 38 });
  const cursorY = useSpring(useMotionValue(-100), { stiffness: 520, damping: 38 });
  const handleMove = (event: PointerEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    cursorX.set(event.clientX - bounds.left); cursorY.set(event.clientY - bounds.top);
  };
  const href = `/work/${project.slug}`;
  return (
    <motion.article className="project-card" initial={reduced ? false : { opacity: 0, y: 30 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }} transition={{ duration: .58, delay: index * .08, ease: [0.22,1,.36,1] }}>
      <Link href={href} className="project-card__media" aria-label={t("View {title} case study", { title: project.title })} onPointerMove={handleMove}>
        <motion.div className="project-card__image" whileHover={reduced ? undefined : { scale: 1.025 }} transition={{ duration: .42, ease: [0.22,1,.36,1] }}><Image src={project.image} alt={copy.imageAlt} width={1600} height={1000} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw" /></motion.div>
        <span className="project-card__scan" aria-hidden="true" /><motion.span className="media-cursor" style={{ x: cursorX, y: cursorY }} aria-hidden="true">{t("VIEW")} ↗</motion.span>
      </Link>
      <div className="project-card__head"><span>0{index + 1}</span><h3><Link href={href}>{project.title}</Link></h3><Link href={href} aria-label={t("Open {title}", { title: project.title })} className="project-card__arrow liquid-control liquid-surface"><LiquidFill color="violet" intensity="strong" duration={.75} /><span>↗</span></Link></div>
      <p>{copy.shortDescription}</p><div className="project-card__meta"><span>{copy.category}</span><span>{project.year}</span></div>
      <div className="project-card__stack">{project.stack.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div>
    </motion.article>
  );
}
