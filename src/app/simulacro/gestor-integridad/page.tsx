import type { Metadata } from "next";
import SimulacroGestorIntegridadClient from "./SimulacroGestorIntegridadClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

export const metadata: Metadata = {
  title: "Simulacro Gestor I Integridad | Prepárate DIAN",
  description:
    "Simulacro oficial de integridad para Gestor I, basado en el Código de Ética DIAN.",
  alternates: {
    canonical: `${siteUrl}/simulacro/gestor-integridad`,
  },
  openGraph: {
    title: "Simulacro Gestor I Integridad | Prepárate DIAN",
    description: "Ética pública y principios del Código de Ética DIAN.",
    url: `${siteUrl}/simulacro/gestor-integridad`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulacro Gestor I Integridad",
    description: "Ética pública y principios del Código de Ética DIAN.",
    images: ["/og.png"],
  },
};

export default function SimulacroGestorIntegridadPage() {
  return <SimulacroGestorIntegridadClient />;
}
