import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://asqara.dev";
  return [{ url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }, { url: `${base}/work`, lastModified: new Date(), changeFrequency: "monthly", priority: .8 }, ...projects.map((project) => ({ url: `${base}/work/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .7 }))];
}
