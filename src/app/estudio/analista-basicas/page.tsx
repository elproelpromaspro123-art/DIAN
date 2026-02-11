import type { Metadata } from "next";
import StudyAnalistaBasicasClient from "./StudyAnalistaBasicasClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

export const metadata: Metadata = {
  title: "Estudio Analista V Básicas y Funcionales | Prepárate DIAN",
  description:
    "Guía de estudio con preguntas oficiales para competencias básicas y funcionales del cargo Analista V.",
  alternates: {
    canonical: `${siteUrl}/estudio/analista-basicas`,
  },
  openGraph: {
    title: "Estudio Analista V Básicas y Funcionales | Prepárate DIAN",
    description: "Preparación oficial para la prueba eliminatoria del Analista V.",
    url: `${siteUrl}/estudio/analista-basicas`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Analista V Básicas y Funcionales",
    description: "Preparación oficial para la prueba eliminatoria del Analista V.",
    images: ["/og.png"],
  },
};

export default function StudyAnalistaBasicasPage() {
  return <StudyAnalistaBasicasClient />;
}
