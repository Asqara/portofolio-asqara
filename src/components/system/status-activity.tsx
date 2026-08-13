"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { useExtracted } from "next-intl";
import activityData from "../../../public/lottie/activity.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function StatusActivity() {
  const t = useExtracted();
  const reduced = useReducedMotion();
  return <div className="status-activity" aria-label={t("Animated system activity signal")}><div><span>{t("ACTIVITY_STREAM")}</span><b>{t("LIVE")}</b></div><Lottie animationData={activityData} loop={!reduced} autoplay={!reduced} aria-hidden="true" /></div>;
}
