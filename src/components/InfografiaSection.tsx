"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Building2,
  CalendarClock,
  FileCheck2,
  Gavel,
  HeartHandshake,
  ShieldCheck,
  X,
  ChevronRight,
  Download,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { useFocusTrap } from "@/lib/useFocusTrap";

type Resource = {
  name: string;
  icon: LucideIcon;
  available: boolean;
  color: string;
  summary: string;
  kind: "pdf" | "link";
  file?: string;
  href?: string;
};

const resources: Resource[] = [
  {
    name: "Naturaleza jurídica y objeto de la DIAN",
    icon: Building2,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Documento base institucional.",
    kind: "pdf",
    file: "/recursos/dian-naturaleza-juridica.pdf",
  },
  {
    name: "Manual de funciones · Analista V",
    icon: FileCheck2,
    available: true,
    color: "from-zinc-600 to-zinc-800",
    summary: "Competencias y ejes temáticos para OPEC 236732 y 236756.",
    kind: "pdf",
    file: "/recursos/manual-funciones-analista-v.pdf",
  },
  {
    name: "Manual de funciones · Gestor I",
    icon: FileCheck2,
    available: true,
    color: "from-neutral-700 to-neutral-900",
    summary: "Competencias y ejes temáticos para OPEC 236741 y 236767.",
    kind: "pdf",
    file: "/recursos/manual-funciones-gestor-i.pdf",
  },
  {
    name: "Diccionario competencias (Res. 065-2024)",
    icon: BookOpen,
    available: true,
    color: "from-stone-600 to-stone-800",
    summary: "Conductas observables por nivel.",
    kind: "pdf",
    file: "/recursos/diccionario-competencias-res-065-2024.pdf",
  },
  {
    name: "Diccionario competencias comportamentales DIAN",
    icon: ShieldCheck,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Marco oficial de competencias DIAN.",
    kind: "pdf",
    file: "/recursos/diccionario-competencias-dian.pdf",
  },
  {
    name: "Código de Integridad DIAN",
    icon: HeartHandshake,
    available: true,
    color: "from-neutral-600 to-neutral-800",
    summary: "Valores y juramento institucional.",
    kind: "pdf",
    file: "/recursos/codigo-integridad-dian.pdf",
  },
  {
    name: "Código de Ética DIAN (2021)",
    icon: Gavel,
    available: true,
    color: "from-neutral-600 to-neutral-800",
    summary: "Lineamientos éticos complementarios.",
    kind: "pdf",
    file: "/recursos/codigo-etica-dian-2021.pdf",
  },
  {
    name: "DIAN · Inicio de inscripciones (28-ene-2026)",
    icon: CalendarClock,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Comunicado oficial DIAN 2676.",
    kind: "link",
    href: "https://www.dian.gov.co/Prensa/Paginas/NG-Inician-inscripciones-en-la-modalidad-abierta-del-concurso-de-meritos-DIAN-2676.aspx",
  },
  {
    name: "CNSC · Ampliación hasta 7-feb-2026",
    icon: CalendarClock,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Aviso oficial por incidencia SIMO.",
    kind: "link",
    href: "https://www.cnsc.gov.co/node/59797",
  },
  {
    name: "CNSC · Incidencia pago de derechos SIMO",
    icon: CalendarClock,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Aviso oficial del 4-feb-2026.",
    kind: "link",
    href: "https://www.cnsc.gov.co/node/59574",
  },
  {
    name: "CNSC · Acuerdo 21 de 2025",
    icon: FileCheck2,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Reglas, pesos y etapas del proceso DIAN 2676.",
    kind: "link",
    href: "https://www.cnsc.gov.co/node/54168",
  },
  {
    name: "CNSC · Anexo DIAN 2676 de 2025",
    icon: FileCheck2,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Especificaciones técnicas de pruebas y criterios.",
    kind: "link",
    href: "https://www.cnsc.gov.co/node/54169",
  },
  {
    name: "DIAN · Resolución 0067 de 2024 (MERF)",
    icon: BookOpen,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Manual Específico de Requisitos y Funciones.",
    kind: "link",
    href: "https://www.cnsc.gov.co/sites/default/files/2024-04/3.-resolucion-no.-0067-del-11-de-abril-del-2024.pdf",
  },
  {
    name: "DIAN · Resolución 0065 de 2024 (Diccionario)",
    icon: BookOpen,
    available: true,
    color: "from-stone-600 to-stone-800",
    summary: "Competencias comportamentales por nivel.",
    kind: "link",
    href: "https://www.cnsc.gov.co/sites/default/files/2024-04/2.-resolucion-no.-0065-del-11-de-abril-del-2024.pdf",
  },
  {
    name: "Ley 80 de 1993 (Función Pública)",
    icon: Gavel,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Estatuto General de Contratación Pública.",
    kind: "link",
    href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=304",
  },
  {
    name: "Ley 1150 de 2007 (Función Pública)",
    icon: Gavel,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Medidas de eficiencia y transparencia contractual.",
    kind: "link",
    href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=184686",
  },
  {
    name: "Ley 1437 de 2011 (CPACA)",
    icon: Gavel,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Procedimiento administrativo y contencioso.",
    kind: "link",
    href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41249",
  },
  {
    name: "Ley 1712 de 2014 (Transparencia)",
    icon: Gavel,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Acceso a información pública y máxima publicidad.",
    kind: "link",
    href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56882",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  },
};

export default function InfografiaSection() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useFocusTrap(modalRef, Boolean(selectedResource));

  const handleClose = useCallback(() => setSelectedResource(null), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(max-width: 900px)");
    const update = () => setIsMobileViewport(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedResource) handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedResource, handleClose]);

  const handleResourceOpen = (resource: Resource) => {
    if (!resource.available) return;

    if (resource.kind === "pdf" && resource.file) {
      if (isMobileViewport) {
        window.open(resource.file, "_blank", "noopener,noreferrer");
        return;
      }
      setSelectedResource(resource);
    }
  };

  const pdfSrc =
    selectedResource?.kind === "pdf" && selectedResource.file
      ? `${selectedResource.file}#view=FitH`
      : "";

  return (
    <section
      id="recursos"
      className="relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 sm:py-28"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-amber-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 w-full">
        <details className="group" open>
          <summary className="flex items-center justify-between cursor-pointer mb-12 list-none [&::-webkit-details-marker]:hidden">
            <motion.div
              className="text-center flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 font-[family:var(--font-display)]">
                Recursos oficiales DIAN + CNSC
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto text-sm">
                Documentos y avisos oficiales verificados. Haz clic para ver todos los recursos.
              </p>
            </motion.div>
            <motion.span
              className="text-white/40 text-sm ml-4 group-open:rotate-180 transition-transform duration-300"
              whileHover={{ scale: 1.2 }}
            >
              ▼
            </motion.span>
          </summary>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {resources.map((resource) => {
              const Icon = resource.icon;

              if (resource.kind === "link" && resource.href) {
                return (
                  <motion.a
                    key={resource.name}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.03,
                      y: -4,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="relative rounded-2xl p-5 text-left bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/50 transition-colors duration-300 cursor-pointer"
                  >
                    <motion.div
                      className={`w-12 h-12 mb-3 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center`}
                      whileHover={{ rotate: [0, -6, 6, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-sm text-white">{resource.name}</h3>
                    <p className="text-xs text-white/50 mt-1">{resource.summary}</p>
                    <span className="mt-3 inline-flex items-center text-xs text-amber-400 font-medium">
                      Abrir enlace oficial
                      <ChevronRight className="w-3 h-3 ml-0.5" />
                    </span>
                    <p className="text-[11px] text-white/30 mt-2">Fuente oficial (enlace directo)</p>
                  </motion.a>
                );
              }

              return (
                <motion.button
                  key={resource.name}
                  onClick={() => handleResourceOpen(resource)}
                  disabled={!resource.available}
                  variants={cardVariants}
                  whileHover={
                    resource.available
                      ? {
                          scale: 1.03,
                          y: -4,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        }
                      : undefined
                  }
                  whileTap={resource.available ? { scale: 0.98 } : undefined}
                  className={`relative rounded-2xl p-5 text-left transition-colors duration-300 ${
                    resource.available
                      ? "bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/50 cursor-pointer"
                      : "bg-white/[0.02] border border-white/5 cursor-not-allowed opacity-50"
                  }`}
                >
                  <motion.div
                    className={`w-12 h-12 mb-3 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center`}
                    whileHover={{ rotate: [0, -6, 6, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-sm text-white">{resource.name}</h3>
                  <p className="text-xs text-white/50 mt-1">{resource.summary}</p>
                  <span className="mt-3 inline-flex items-center text-xs text-amber-400 font-medium">
                    Abrir documento
                    <ChevronRight className="w-3 h-3 ml-0.5" />
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </details>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xs text-white/40">
            Fuentes oficiales de consulta directa:{" "}
            <a
              href="https://www.cnsc.gov.co/node/59797"
              target="_blank"
              rel="noreferrer"
              className="text-amber-400/70 hover:text-amber-400 hover:underline inline-flex items-center gap-1 transition-colors"
            >
              CNSC DIAN 2676
              <ExternalLink className="w-3 h-3" />
            </a>
            {" "}y{" "}
            <a
              href="https://www.dian.gov.co/Prensa/Paginas/NG-Inician-inscripciones-en-la-modalidad-abierta-del-concurso-de-meritos-DIAN-2676.aspx"
              target="_blank"
              rel="noreferrer"
              className="text-amber-400/70 hover:text-amber-400 hover:underline inline-flex items-center gap-1 transition-colors"
            >
              Comunicado DIAN
              <ExternalLink className="w-3 h-3" />
            </a>
            .
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedResource && selectedResource.kind === "pdf" && selectedResource.file && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resource-modal-title"
            aria-describedby="resource-modal-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-start sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              ref={modalRef}
              className="relative bg-[#1e293b] sm:rounded-2xl shadow-2xl ring-1 ring-white/10 w-full h-full sm:h-[90vh] sm:max-w-5xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-[#1e293b] sm:rounded-t-2xl border-b border-white/10 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3 z-10">
                <div>
                  <h3 id="resource-modal-title" className="font-bold text-white text-base sm:text-lg">
                    Documento — {selectedResource.name}
                  </h3>
                  <p id="resource-modal-desc" className="text-xs text-white/50">
                    Si el visor falla en tu navegador, usa &quot;Abrir en pestaña nueva&quot;.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs mt-2">
                    <a
                      href={selectedResource.file}
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-400 hover:underline"
                    >
                      Abrir en pestaña nueva
                    </a>
                    <a
                      href={selectedResource.file}
                      download
                      className="inline-flex items-center gap-1 text-amber-400 hover:underline"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Descargar PDF
                    </a>
                  </div>
                </div>
                <motion.button
                  onClick={handleClose}
                  className="p-2.5 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Cerrar"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-white/60" />
                </motion.button>
              </div>
              <div className="flex-1 bg-black/20 overflow-auto">
                <iframe
                  title={`Documento ${selectedResource.name}`}
                  src={pdfSrc}
                  className="w-full h-full infografia-frame"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
