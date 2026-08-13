import { useExtracted } from "next-intl";
import { SectionLabel } from "../ui/section-label";

const principleTypes = ["cube", "target", "data", "pulse", "grid"] as const;

function PrincipleSymbol({ type }: { type: string }) {
  if (type === "target") return <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="7"/><path d="M24 2v12M24 34v12M2 24h12M34 24h12"/></svg>;
  if (type === "data") return <svg viewBox="0 0 48 48"><path d="M8 10h32v8H8zM8 22h32v8H8zM8 34h32v6H8z"/><path d="M14 10v30M34 10v30"/></svg>;
  if (type === "pulse") return <svg viewBox="0 0 48 48"><path d="M2 25h10l5-13 9 25 6-16 4 4h10"/></svg>;
  if (type === "grid") return <svg viewBox="0 0 48 48"><path d="M7 7h14v14H7zM27 7h14v14H27zM7 27h14v14H7zM27 27h14v14H27z"/><path d="M14 3v8M34 37v8M3 14h8M37 34h8"/></svg>;
  return <svg viewBox="0 0 48 48"><path d="M24 4 42 14v20L24 44 6 34V14zM6 14l18 10 18-10M24 24v20"/></svg>;
}

export function Principles() {
  const t = useExtracted();
  const principles = [
    [t("SYSTEMS THINKING"), t("Architecture before complexity.")],
    [t("REAL USERS"), t("Build around real operational problems.")],
    [t("DATA FIRST"), t("Reliable systems require structured data.")],
    [t("PRODUCTION MATTERS"), t("Software is unfinished until it survives production.")],
    [t("FUNCTION OVER NOISE"), t("Interfaces should communicate before they decorate.")]
  ];
  return <section className="principles bordered-section" aria-labelledby="principles-title"><div className="site-shell"><SectionLabel number="02" label={t("ENGINEERING PRINCIPLES")} /><h2 className="sr-only" id="principles-title">{t("Engineering principles")}</h2><div className="principles__grid">{principles.map(([title, body], index) => <article key={title}><PrincipleSymbol type={principleTypes[index]}/><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></section>;
}
