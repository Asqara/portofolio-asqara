import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getExtracted, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getExtracted();
  const canonical = locale === routing.defaultLocale ? "/" : `/${locale}`;

  return {
    metadataBase: new URL("https://asqara.tech"),
    title: { default: t("Alfath Asqar Tsani — Software Engineer"), template: `%s — Alfath Asqar Tsani` },
    description: t("Portfolio of Alfath Asqar Tsani, a computer science student and software engineer working across full-stack development, data infrastructure, and production systems."),
    alternates: { canonical, languages: { en: "/", id: "/id", "x-default": "/" } },
    openGraph: { title: t("Alfath Asqar Tsani — Software Engineer"), description: t("Full-stack applications, data infrastructure, and production systems."), url: canonical, siteName: "Alfath_ Portfolio", locale: locale === "id" ? "id_ID" : "en_US", type: "website" },
    twitter: { card: "summary_large_image", title: t("Alfath Asqar Tsani — Software Engineer"), description: t("Full-stack applications, data infrastructure, and production systems.") }
  };
}

const personSchema = {
  "@context": "https://schema.org", "@type": "Person", name: "Alfath Asqar Tsani", url: "https://asqara.tech",
  sameAs: ["https://github.com/Asqara", "https://www.linkedin.com/in/asqaraa"], jobTitle: "Software Engineer",
  alumniOf: { "@type": "CollegeOrUniversity", name: "IPB University" },
  address: { "@type": "PostalAddress", addressLocality: "Bogor", addressCountry: "ID" }
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages();
  const t = await getExtracted();

  return (
    <html lang={locale} suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <SmoothScroll />
            <a className="skip-link" href="#main-content">{t("Skip to content")}</a>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
