import { useExtracted } from "next-intl";

export function useEducation() {
  const t = useExtracted("education-data");
  return {
    institution: "IPB University",
    degree: t("B.Sc. Computer Science"),
    gpa: "3.80 / 4.00",
    graduation: t("Expected 2028"),
    recognition: t("Yayasan Alumni Peduli IPB Scholarship"),
    certification: { issuer: "BNSP", title: t("Web Developer Competency Certification"), organization: t("Badan Nasional Sertifikasi Profesi") }
  };
}
