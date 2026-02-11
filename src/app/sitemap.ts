import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

const lastModified = new Date("2026-02-11");
const monthly = "monthly" as const;

const simulacroRoutes = [
  "analista-basicas",
  "analista-comportamentales",
  "analista-integridad",
  "gestor-basicas",
  "gestor-comportamentales",
  "gestor-integridad",
];

const estudioRoutes = [
  "analista-basicas",
  "analista-comportamentales",
  "analista-integridad",
  "gestor-basicas",
  "gestor-comportamentales",
  "gestor-integridad",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...simulacroRoutes.map((route) => ({
      url: `${siteUrl}/simulacro/${route}`,
      lastModified,
      changeFrequency: monthly,
      priority: 0.7,
    })),
    ...estudioRoutes.map((route) => ({
      url: `${siteUrl}/estudio/${route}`,
      lastModified,
      changeFrequency: monthly,
      priority: 0.7,
    })),
  ];
}
