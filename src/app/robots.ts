import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const normalizedSiteUrl = (configuredSiteUrl || "https://preparatedian2026.vercel.app").replace(
  /\/+$/,
  ""
);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${normalizedSiteUrl}/sitemap.xml`,
  };
}
