"use client";

import { useState } from "react";
import { useExtracted } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { LiquidFill } from "../motion/liquid-fill";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useExtracted();
  const links = [["01", t("WORK"), "/#work"], ["02", t("SYSTEM"), "/#system"], ["03", t("EXPERIENCE"), "/#experience"], ["04", t("ABOUT"), "/#about"], ["05", t("CONTACT"), "/#contact"]] as const;

  return (
    <div className="mobile-nav">
      <button className="mobile-nav__toggle liquid-control liquid-surface" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu">
        <LiquidFill color="violet" intensity="strong" duration={.9} />
        <span>{open ? t("CLOSE") : t("MENU")}</span><span aria-hidden="true">{open ? "×" : "＋"}</span>
      </button>
      <AnimatePresence>
      {open && (
        <motion.div className="mobile-nav__panel" id="mobile-menu" initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: .42, ease: [0.16, 1, 0.3, 1] }}>
          <p>/ {t("NAVIGATION")}</p>
          <nav aria-label={t("Mobile navigation")}>
            {links.map(([number, label, href], index) => <motion.div key={href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .08 + index * .045 }}><Link href={href} onClick={() => setOpen(false)}><span>{number}</span><span>{label}</span><span aria-hidden="true">↘</span></Link></motion.div>)}
          </nav>
          <div className="mobile-nav__meta">
            <a href="https://github.com/Asqara" target="_blank" rel="noreferrer">GITHUB ↗</a>
            <a href="https://www.linkedin.com/in/asqaraa" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
            <span>BOGOR · UTC+7</span>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
