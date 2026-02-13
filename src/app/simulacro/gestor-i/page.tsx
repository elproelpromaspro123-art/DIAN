import type { Metadata } from "next";
import SimulacroGestorIClient from "./SimulacroGestorIClient";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl = (configuredSiteUrl || "https://preparatedian2026.vercel.app").replace(
  /\/+$/,
  ""
);

export const metadata: Metadata = {
  title: "Simulacro Integral Gestor I | Prepárate DIAN",
  description:
    "Simulacro por fases para Gestor I con 50 reactivos de entrenamiento basados en fuentes oficiales.",
  alternates: {
    canonical: `${siteUrl}/simulacro/gestor-i`,
  },
  openGraph: {
    title: "Simulacro Integral Gestor I | Prepárate DIAN",
    description:
      "Entrenamiento por fases para Gestor I (DIAN 2676).",
    url: `${siteUrl}/simulacro/gestor-i`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function SimulacroGestorIPage() {
  return <SimulacroGestorIClient />;
}
