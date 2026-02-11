import type { Metadata } from "next";
import StudyGestorBasicasClient from "./StudyGestorBasicasClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

export const metadata: Metadata = {
  title: "Estudio Gestor I Básicas y Funcionales | Prepárate DIAN",
  description:
    "Guía de estudio con preguntas oficiales para competencias básicas y funcionales del Gestor I.",
  alternates: {
    canonical: `${siteUrl}/estudio/gestor-basicas`,
  },
  openGraph: {
    title: "Estudio Gestor I Básicas y Funcionales | Prepárate DIAN",
    description: "Preparación oficial para la prueba eliminatoria del Gestor I.",
    url: `${siteUrl}/estudio/gestor-basicas`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Gestor I Básicas y Funcionales",
    description: "Preparación oficial para la prueba eliminatoria del Gestor I.",
    images: ["/og.png"],
  },
};

export default function StudyGestorBasicasPage() {
  return <StudyGestorBasicasClient />;
}
