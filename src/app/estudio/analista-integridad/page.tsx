import type { Metadata } from "next";
import StudyAnalistaIntegridadClient from "./StudyAnalistaIntegridadClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

export const metadata: Metadata = {
  title: "Estudio Analista V Integridad | Prepárate DIAN",
  description:
    "Guía de estudio con preguntas oficiales del Código de Integridad DIAN.",
  alternates: {
    canonical: `${siteUrl}/estudio/analista-integridad`,
  },
  openGraph: {
    title: "Estudio Analista V Integridad | Prepárate DIAN",
    description: "Valores públicos y juramento de integridad DIAN.",
    url: `${siteUrl}/estudio/analista-integridad`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Analista V Integridad",
    description: "Valores públicos y juramento de integridad DIAN.",
    images: ["/og.png"],
  },
};

export default function StudyAnalistaIntegridadPage() {
  return <StudyAnalistaIntegridadClient />;
}
