import { useExtracted } from "next-intl";
import { SectionLabel } from "../ui/section-label";
import { LiquidFill } from "../motion/liquid-fill";

export function Contact() {
  const t = useExtracted();
  return <section className="contact bordered-section" id="contact" aria-labelledby="contact-title"><div className="site-shell contact__grid"><div><SectionLabel number="13" label={t("CONTACT / OPEN CHANNEL")} /><h2 id="contact-title">{t("LET'S BUILD")}<br />{t("SOMETHING")}<br /><span>{t("USEFUL.")}</span></h2></div><div className="contact__body"><p>{t("Open to software engineering opportunities, technical collaborations, and ambitious systems.")}</p><a href="mailto:Alfath.asqartsani@gmail.com" className="button button--primary liquid-control liquid-surface"><LiquidFill color="violet" intensity="strong" duration={1.05} /><span>{t("START A CONVERSATION")} ↗</span></a><div className="contact__links"><a className="liquid-control liquid-surface" href="https://github.com/Asqara" target="_blank" rel="noreferrer"><LiquidFill color="violet" intensity="strong" duration={.95} /><span>GITHUB ↗</span></a><a className="liquid-control liquid-surface" href="https://www.linkedin.com/in/asqaraa" target="_blank" rel="noreferrer"><LiquidFill color="violet" intensity="strong" duration={.95} /><span>LINKEDIN ↗</span></a><a className="liquid-control liquid-surface" href="mailto:Alfath.asqartsani@gmail.com"><LiquidFill color="violet" intensity="strong" duration={.95} /><span>EMAIL ↗</span></a></div></div></div></section>;
}
