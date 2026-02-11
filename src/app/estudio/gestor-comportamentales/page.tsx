import type { Metadata } from "next";
import StudyGestorComportamentalesClient from "./StudyGestorComportamentalesClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

export const metadata: Metadata = {
  title: "Estudio Gestor I Comportamentales | Prepárate DIAN",
  description:
    "Guía de estudio con preguntas oficiales de competencias comportamentales para Gestor I.",
  alternates: {
    canonical: `${siteUrl}/estudio/gestor-comportamentales`,
  },
  openGraph: {
    title: "Estudio Gestor I Comportamentales | Prepárate DIAN",
    description: "Competencias conductuales alineadas al diccionario DIAN.",
    url: `${siteUrl}/estudio/gestor-comportamentales`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Gestor I Comportamentales",
    description: "Competencias conductuales alineadas al diccionario DIAN.",
    images: ["/og.png"],
  },
};

export default function StudyGestorComportamentalesPage() {
  return <StudyGestorComportamentalesClient />;
}
