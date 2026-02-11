import type { Metadata } from "next";
import SimulacroAnalistaIntegridadClient from "./SimulacroAnalistaIntegridadClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

export const metadata: Metadata = {
  title: "Simulacro Analista V Integridad | Prepárate DIAN",
  description:
    "Simulacro oficial de integridad para Analista V, basado en el Código de Integridad DIAN.",
  alternates: {
    canonical: `${siteUrl}/simulacro/analista-integridad`,
  },
  openGraph: {
    title: "Simulacro Analista V Integridad | Prepárate DIAN",
    description: "Valores públicos y juramento de integridad DIAN.",
    url: `${siteUrl}/simulacro/analista-integridad`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulacro Analista V Integridad",
    description: "Valores públicos y juramento de integridad DIAN.",
    images: ["/og.png"],
  },
};

export default function SimulacroAnalistaIntegridadPage() {
  return <SimulacroAnalistaIntegridadClient />;
}
