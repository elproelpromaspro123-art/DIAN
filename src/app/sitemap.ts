import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl = (configuredSiteUrl || "https://preparatedian2026.vercel.app").replace(/\/+$/, "");
const lastModified = new Date("2026-02-13");

const coreRoutes = [
  "/estudio/analista-v",
  "/estudio/gestor-i",
  "/simulacro/analista-v",
  "/simulacro/gestor-i",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...coreRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
