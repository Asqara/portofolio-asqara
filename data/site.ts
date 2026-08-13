import { useExtracted } from "next-intl";

export function useSiteData() {
  const t = useExtracted("site-data");
  return {
    name: "Alfath Asqar Tsani", mark: "ASQARA", title: "Software Engineer",
    description: t("Computer Science student and software engineer working across full-stack applications, data infrastructure, and production systems."),
    location: t("Bogor, Indonesia"), timezone: "UTC+7", email: "Alfath.asqartsani@gmail.com",
    github: "https://github.com/Asqara", linkedin: "https://www.linkedin.com/in/asqaraa",
    availability: t("Open to opportunities"), focus: t("Platform Engineering")
  };
}
