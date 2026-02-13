import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import InfografiaSection from "@/components/InfografiaSection";
import StudySection from "@/components/StudySection";
import SimulacroSection from "@/components/SimulacroSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl = (configuredSiteUrl || "https://preparatedian2026.vercel.app").replace(/\/+$/, "");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Prepárate DIAN",
  url: siteUrl,
  description:
    "Plataforma de preparación para la Convocatoria DIAN 2676 (SIMO). Simulacros, estudio guiado y recursos oficiales para Analista V y Gestor I.",
  inLanguage: "es-CO",
  publisher: {
    "@type": "Organization",
    name: "Prepárate DIAN",
  },
  isAccessibleForFree: true,
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <InfoSection />
      <InfografiaSection />
      <StudySection />
      <SimulacroSection />
      <FeedbackSection />
      <Footer />
    </main>
  );
}
