import type { Metadata } from "next";
import SimulacroGestorBasicasClient from "./SimulacroGestorBasicasClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

export const metadata: Metadata = {
  title: "Simulacro Gestor I Básicas y Funcionales | Prepárate DIAN",
  description:
    "Simulacro oficial para la prueba eliminatoria de competencias básicas y funcionales del Gestor I.",
  alternates: {
    canonical: `${siteUrl}/simulacro/gestor-basicas`,
  },
  openGraph: {
    title: "Simulacro Gestor I Básicas y Funcionales | Prepárate DIAN",
    description: "Practica la prueba eliminatoria del Gestor I con preguntas oficiales.",
    url: `${siteUrl}/simulacro/gestor-basicas`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulacro Gestor I Básicas y Funcionales",
    description: "Practica la prueba eliminatoria del Gestor I con preguntas oficiales.",
    images: ["/og.png"],
  },
};

export default function SimulacroGestorBasicasPage() {
  return <SimulacroGestorBasicasClient />;
}
