import type { Metadata } from "next";
import CargoStudyClient from "@/components/CargoStudyClient";
import { ANALISTA_STUDY_CONTENT } from "@/data/cargo-study-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

export const metadata: Metadata = {
  title: "Estudio Integrado Analista V | Prepárate DIAN",
  description:
    "Guía integrada por fases para Analista V: básicas/funcionales, comportamentales e integridad, con fuentes oficiales.",
  alternates: {
    canonical: `${siteUrl}/estudio/analista-v`,
  },
  openGraph: {
    title: "Estudio Integrado Analista V | Prepárate DIAN",
    description:
      "Ruta oficial por fases para estudiar Analista V (DIAN 2676).",
    url: `${siteUrl}/estudio/analista-v`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function StudyAnalistaVPage() {
  return <CargoStudyClient content={ANALISTA_STUDY_CONTENT} />;
}
