import type { Metadata } from "next";
import SimulacroAnalistaVClient from "./SimulacroAnalistaVClient";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl = (configuredSiteUrl || "https://preparatedian2026.vercel.app").replace(
  /\/+$/,
  ""
);

export const metadata: Metadata = {
  title: "Simulacro Integral Analista V | Prepárate DIAN",
  description:
    "Simulacro por fases para Analista V con 50 reactivos de entrenamiento basados en fuentes oficiales.",
  alternates: {
    canonical: `${siteUrl}/simulacro/analista-v`,
  },
  openGraph: {
    title: "Simulacro Integral Analista V | Prepárate DIAN",
    description:
      "Entrenamiento por fases para Analista V (DIAN 2676).",
    url: `${siteUrl}/simulacro/analista-v`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function SimulacroAnalistaVPage() {
  return <SimulacroAnalistaVClient />;
}
