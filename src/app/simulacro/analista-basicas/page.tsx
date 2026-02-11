import type { Metadata } from "next";
import SimulacroAnalistaBasicasClient from "./SimulacroAnalistaBasicasClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

export const metadata: Metadata = {
  title: "Simulacro Analista V Básicas y Funcionales | Prepárate DIAN",
  description:
    "Simulacro oficial para la prueba eliminatoria de competencias básicas y funcionales del Analista V.",
  alternates: {
    canonical: `${siteUrl}/simulacro/analista-basicas`,
  },
  openGraph: {
    title: "Simulacro Analista V Básicas y Funcionales | Prepárate DIAN",
    description: "Practica la prueba eliminatoria del Analista V con preguntas oficiales.",
    url: `${siteUrl}/simulacro/analista-basicas`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulacro Analista V Básicas y Funcionales",
    description: "Practica la prueba eliminatoria del Analista V con preguntas oficiales.",
    images: ["/og.png"],
  },
};

export default function SimulacroAnalistaBasicasPage() {
  return <SimulacroAnalistaBasicasClient />;
}
