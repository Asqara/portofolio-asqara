"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useExtracted } from "next-intl";
import { LiquidFill } from "../motion/liquid-fill";

export function ArchitectureDiagram() {
  const t = useExtracted();
  const reduced = useReducedMotion();
  const layers = [
    ["01", t("CLIENTS"), t("Web · Mobile · Operators")], ["02", t("WEB APPLICATIONS"), t("Next.js · React · Interfaces")],
    ["03", t("APPLICATION SERVICES"), t("Business logic · RBAC · Integrations")], ["04", "POSTGRESQL + REDIS", t("Persistent data · Cache · Sessions")],
    ["05", "DOCKER", t("Containerized services")], ["06", "KUBERNETES / k3s", t("Orchestration · Routing · Recovery")]
  ];
  return <div className="architecture">{layers.map(([number, title, description], index) => <div className="architecture__row liquid-surface" key={title}><LiquidFill color={index === 5 ? "lime" : "violet"} intensity="subtle" /><span>{number}</span><strong>{title}</strong><p>{description}</p><i className={index === 5 ? "is-live" : ""} />{index < layers.length - 1 && <motion.b aria-hidden="true" animate={reduced ? undefined : { y: [0, 5, 0], opacity: [.35, 1,.35] }} transition={{ duration: 2, repeat: Infinity, delay: index * .2 }}>↓</motion.b>}</div>)}</div>;
}
