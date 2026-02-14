import type { Metadata } from "next";
import SimulacroGestorIClient from "./SimulacroGestorIClient";
import { getSimulacroDescription } from "@/data/simulacro-config";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl = (configuredSiteUrl || "https://preparatedian2026.vercel.app").replace(
  /\/+$/,
  ""
);

export const metadata: Metadata = {
  title: "Simulacro Integral Gestor I | Prepárate DIAN",
  description: getSimulacroDescription("Gestor I"),
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
