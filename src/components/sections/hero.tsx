import { useExtracted } from "next-intl";
import { HeroSystemVisual } from "../system/hero-system-visual";
import { ExternalLink } from "../ui/external-link";
import { SectionLabel } from "../ui/section-label";
import { AnimatedHeroTitle } from "../motion/animated-hero-title";
import { DecryptedText } from "../react-bits/decrypted-text";
import { LiquidFill } from "../motion/liquid-fill";

export function Hero() {
  const t = useExtracted();
  return (
    <section className="hero site-shell" aria-labelledby="hero-title">
      <div className="hero__copy">
        <SectionLabel number="01" label={t("SYSTEMS / SOFTWARE / INFRASTRUCTURE")} />
        <AnimatedHeroTitle lines={[t("SYSTEMS"), t("BUILT FOR"), t("REAL USE.")]} ariaLabel={t("Systems built for real use")} />
        <p className="hero__eyebrow"><DecryptedText text={t("FULL-STACK · DATA · PRODUCTION")} speed={28} encryptedClassName="is-encrypted" /></p>
        <p className="hero__body">{t("Software engineer working across full-stack applications, data infrastructure, and production systems.")}</p>
        <div className="hero__actions">
          <a href="#work" className="button button--primary liquid-control liquid-surface"><LiquidFill color="violet" intensity="strong" duration={1.05} /><span>{t("EXPLORE WORK")}</span><span>↗</span></a>
          <ExternalLink href="https://github.com/Asqara" className="button button--ghost">{t("VIEW GITHUB")}</ExternalLink>
        </div>
      </div>
      <HeroSystemVisual />
      <aside className="hero__rail" aria-hidden="true"><span>2026</span><span>{t("SOFTWARE ENGINEERING / BOGOR")}</span><span>SCN_01</span></aside>
    </section>
  );
}
