import type { Metadata } from "next";
import StudyAnalistaComportamentalesClient from "./StudyAnalistaComportamentalesClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

export const metadata: Metadata = {
  title: "Estudio Analista V Comportamentales | Prepárate DIAN",
  description:
    "Guía de estudio con preguntas oficiales de competencias comportamentales para Analista V.",
  alternates: {
    canonical: `${siteUrl}/estudio/analista-comportamentales`,
  },
  openGraph: {
    title: "Estudio Analista V Comportamentales | Prepárate DIAN",
    description: "Competencias conductuales alineadas al diccionario DIAN.",
    url: `${siteUrl}/estudio/analista-comportamentales`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Analista V Comportamentales",
    description: "Competencias conductuales alineadas al diccionario DIAN.",
    images: ["/og.png"],
  },
};

export default function StudyAnalistaComportamentalesPage() {
  return <StudyAnalistaComportamentalesClient />;
}
