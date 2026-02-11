import type { Metadata, Viewport } from "next";
import { Fraunces, Sora } from "next/font/google";
import CopyProtection from "@/components/CopyProtection";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simo-dian.vercel.app";
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const viewport: Viewport = {
  themeColor: "#0f2533",
};

export const metadata: Metadata = {
  metadataBase,
  manifest: "/manifest.json",
  title: "Prepárate DIAN 2676 | SIMO Analista V y Gestor I",
  description:
    "Guía gratuita y actualizada para la Convocatoria DIAN 2676 (SIMO). Simulacros, rutas de estudio y recursos oficiales para Analista V y Gestor I.",
  keywords: [
    "DIAN",
    "SIMO",
    "CNSC",
    "Convocatoria 2676",
    "Analista V",
    "Gestor I",
    "pruebas de competencias",
    "integridad",
    "Colombia",
  ],
  authors: [{ name: "Prepárate DIAN" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Prepárate DIAN 2676 | SIMO Analista V y Gestor I",
    description:
      "Simulacros, rutas de estudio y documentos oficiales para la Convocatoria DIAN 2676. Actualizado febrero 2026.",
    type: "website",
    locale: "es_CO",
    siteName: "Prepárate DIAN",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Prepárate DIAN 2676 - SIMO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prepárate DIAN 2676 | SIMO",
    description:
      "Simulacros y estudio guiado para Analista V y Gestor I. Actualizado febrero 2026.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${fraunces.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <CopyProtection />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
