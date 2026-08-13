import { useExtracted } from "next-intl";

export function useExperience() {
  const t = useExtracted("experience-data");
  return [
    { period: t("2025 — Present"), role: t("Information Systems Coordinator"), organization: "OMB IPB 63 × Agrisymphony 2026" },
    { period: t("2025 — Present"), role: t("Web Developer"), organization: "Code Panda" },
    { period: "2025", role: t("Web Developer"), organization: "Agrisymphony" },
    { period: "2025", role: t("Head of Research & Development"), organization: "Ormawa Eksekutif PKU IPB" },
    { period: "2024", role: t("Data Operations"), organization: "Balai Penyuluhan Pertanian Bekri" }
  ];
}
