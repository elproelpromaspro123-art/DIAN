import type { Metadata } from "next";
import SimulacroAnalistaComportamentalesClient from "./SimulacroAnalistaComportamentalesClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";

export const metadata: Metadata = {
  title: "Simulacro Analista V Comportamentales | Prepárate DIAN",
  description:
    "Simulacro oficial de competencias comportamentales para el cargo Analista V.",
  alternates: {
    canonical: `${siteUrl}/simulacro/analista-comportamentales`,
  },
  openGraph: {
    title: "Simulacro Analista V Comportamentales | Prepárate DIAN",
    description: "Practica escenarios conductuales con base en el diccionario DIAN.",
    url: `${siteUrl}/simulacro/analista-comportamentales`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulacro Analista V Comportamentales",
    description: "Practica escenarios conductuales con base en el diccionario DIAN.",
    images: ["/og.png"],
  },
};

export default function SimulacroAnalistaComportamentalesPage() {
  return <SimulacroAnalistaComportamentalesClient />;
}
