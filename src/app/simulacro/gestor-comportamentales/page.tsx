import type { Metadata } from "next";
import SimulacroGestorComportamentalesClient from "./SimulacroGestorComportamentalesClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

export const metadata: Metadata = {
  title: "Simulacro Gestor I Comportamentales | Prepárate DIAN",
  description:
    "Simulacro oficial de competencias comportamentales para el cargo Gestor I.",
  alternates: {
    canonical: `${siteUrl}/simulacro/gestor-comportamentales`,
  },
  openGraph: {
    title: "Simulacro Gestor I Comportamentales | Prepárate DIAN",
    description: "Practica escenarios conductuales con base en el diccionario DIAN.",
    url: `${siteUrl}/simulacro/gestor-comportamentales`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulacro Gestor I Comportamentales",
    description: "Practica escenarios conductuales con base en el diccionario DIAN.",
    images: ["/og.png"],
  },
};

export default function SimulacroGestorComportamentalesPage() {
  return <SimulacroGestorComportamentalesClient />;
}
