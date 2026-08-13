"use client";

import { useExtracted, useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { LiquidFill } from "../motion/liquid-fill";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useExtracted();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  return (
    <div className={`language-switcher ${pending ? "is-pending" : ""}`} aria-label={t("Select language")}>
      {(["en", "id"] as const).map((item) => (
        <button type="button" key={item} className={`liquid-control liquid-surface ${locale === item ? "is-active" : ""}`} aria-pressed={locale === item} aria-label={item === "en" ? t("Switch to English") : t("Switch to Indonesian")} disabled={pending || locale === item} onClick={() => startTransition(() => router.replace(pathname, { locale: item, scroll: false }))}>
          <LiquidFill color="violet" intensity="strong" duration={.9} />
          <span>{item.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
