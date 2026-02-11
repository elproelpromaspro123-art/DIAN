import type { Metadata } from "next";
import StudyGestorIntegridadClient from "./StudyGestorIntegridadClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

export const metadata: Metadata = {
  title: "Estudio Gestor I Integridad | Prepárate DIAN",
  description:
    "Guía de estudio con preguntas oficiales del Código de Ética DIAN.",
  alternates: {
    canonical: `${siteUrl}/estudio/gestor-integridad`,
  },
  openGraph: {
    title: "Estudio Gestor I Integridad | Prepárate DIAN",
    description: "Ética pública y principios del Código de Ética DIAN.",
    url: `${siteUrl}/estudio/gestor-integridad`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Gestor I Integridad",
    description: "Ética pública y principios del Código de Ética DIAN.",
    images: ["/og.png"],
  },
};

export default function StudyGestorIntegridadPage() {
  return <StudyGestorIntegridadClient />;
}
