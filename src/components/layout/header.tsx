"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useExtracted } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MobileNav } from "./mobile-nav";
import { SystemClock } from "../system/system-clock";
import { LanguageSwitcher } from "../ui/language-switcher";
import { ThemeToggle } from "../ui/theme-toggle";
import { LiquidFill } from "../motion/liquid-fill";

export function Header() {
  const t = useExtracted();
  const links = [[t("WORK"), "/#work"], [t("EXPERIENCE"), "/#experience"], [t("SYSTEM"), "/#system"], [t("ABOUT"), "/#about"], [t("CONTACT"), "/#contact"]] as const;
  const { scrollY, scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const rawHeight = useTransform(scrollY, [0, 120], [76, 58], { clamp: true });
  const height = useSpring(rawHeight, { stiffness: 190, damping: 28, mass: .5 });
  const utilityOpacity = useTransform(scrollY, [0, 110], [1, .62], { clamp: true });
  const markRotate = useTransform(scrollY, [0, 120], [0, 45], { clamp: true });
  return (
    <motion.header className="site-header" style={reduced ? undefined : { height }}>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <div className="site-header__inner site-shell">
        <Link href="/" className="wordmark" aria-label={t("Alfath home")}><motion.span className="wordmark__symbol" aria-hidden="true" style={reduced ? undefined : { rotate: markRotate }}></motion.span><span>ASQARA<span className="accent">.TECH</span></span></Link>
        <nav className="desktop-nav" aria-label={t("Primary navigation")}>{links.map(([label, href], index) => <Link href={href} key={href}><span>{label}</span>{index < links.length - 1 && <i>/</i>}</Link>)}</nav>
        <motion.div className="header-utility" style={reduced ? undefined : { opacity: utilityOpacity }}><SystemClock /></motion.div>
        <LanguageSwitcher /><ThemeToggle />
        <motion.a className="header-cta liquid-control liquid-surface" href="mailto:Alfath.asqartsani@gmail.com"><LiquidFill color="violet" intensity="strong" duration={1.05} /><span>{t("START A PROJECT")}</span><span>↗</span></motion.a>
        <MobileNav />
      </div>
    </motion.header>
  );
}
