import type { Metadata } from "next";
import CargoStudyClient from "@/components/CargoStudyClient";
import { GESTOR_STUDY_CONTENT } from "@/data/cargo-study-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

export const metadata: Metadata = {
  title: "Estudio Integrado Gestor I | Prepárate DIAN",
  description:
    "Guía integrada por fases para Gestor I: básicas/funcionales, comportamentales e integridad, con fuentes oficiales.",
  alternates: {
    canonical: `${siteUrl}/estudio/gestor-i`,
  },
  openGraph: {
    title: "Estudio Integrado Gestor I | Prepárate DIAN",
    description: "Ruta oficial por fases para estudiar Gestor I (DIAN 2676).",
    url: `${siteUrl}/estudio/gestor-i`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function StudyGestorIPage() {
  return <CargoStudyClient content={GESTOR_STUDY_CONTENT} />;
}
