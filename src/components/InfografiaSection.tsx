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
    name: "CNSC · Acuerdo 205 de 2025",
    icon: FileCheck2,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Reglas, pesos y etapas del proceso DIAN 2676.",
    kind: "link",
    href: "https://www.cnsc.gov.co/convocatorias/dian-2022?field_tipo_de_contenido_convocat_target_id=65",
  },
  {
    name: "CNSC · Anexo DIAN 2676 de 2025",
    icon: FileCheck2,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Especificaciones técnicas de pruebas y criterios.",
    kind: "link",
    href: "https://www.cnsc.gov.co/convocatorias/dian-2022?field_tipo_de_contenido_convocat_target_id=65",
  },
  {
    name: "DIAN · Resolución 0067 de 2024 (MERF)",
    icon: BookOpen,
    available: true,
    color: "from-zinc-700 to-zinc-900",
    summary: "Manual Específico de Requisitos y Funciones.",
    kind: "link",
    href: "https://historico.cnsc.gov.co/docs/DIAN_3._Resolucion_no_0067_del_11_de_abril_del_2024.pdf",
  },
  {
    name: "DIAN · Resolución 0065 de 2024 (Diccionario)",
    icon: BookOpen,
    available: true,
    color: "from-stone-600 to-stone-800",
    summary: "Competencias comportamentales por nivel.",
    kind: "link",
    href: "https://historico.cnsc.gov.co/docs/DIAN_2._Resolucion_no_0065_del_11_de_abril_del_2024.pdf",
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
    href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=25806",
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
      className="py-16 bg-gradient-to-b from-[#191919] to-[#131313] border-t border-dian-navy/10"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-dian-navy mb-2 font-[family:var(--font-display)]">
            Recursos oficiales DIAN + CNSC
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Documentos y avisos oficiales verificados. En móvil los recursos PDF
            se abren en pestaña nueva para evitar bloqueos del visor integrado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource) => {
            const Icon = resource.icon;
            const cardClass = `relative group rounded-2xl p-5 text-left transition-all duration-300 border-2 shadow-sm hover:-translate-y-0.5 ${
              resource.available
                ? "border-dian-navy/15 hover:border-dian-navy hover:shadow-lg cursor-pointer bg-white"
                : "border-gray-200 bg-gray-50 cursor-not-allowed opacity-70"
            }`;

            if (resource.kind === "link" && resource.href) {
              return (
                <a
                  key={resource.name}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  <div
                    className={`w-12 h-12 mb-3 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-800">{resource.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{resource.summary}</p>
                  <span className="mt-2 inline-flex items-center text-xs text-dian-navy font-medium">
                    Abrir enlace oficial
                    <ChevronRight className="w-3 h-3 ml-0.5" />
                  </span>
                  <p className="text-[11px] text-gray-400 mt-2">Fuente oficial (enlace directo)</p>
                </a>
              );
            }

            return (
              <button
                key={resource.name}
                onClick={() => handleResourceOpen(resource)}
                disabled={!resource.available}
                className={cardClass}
              >
                <div
                  className={`w-12 h-12 mb-3 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-gray-800">{resource.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{resource.summary}</p>
                <span className="mt-2 inline-flex items-center text-xs text-dian-navy font-medium">
                  Abrir documento
                  <ChevronRight className="w-3 h-3 ml-0.5" />
                </span>
              </button>
            );
          })}
        </div>
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              ref={modalRef}
              className="relative bg-white sm:rounded-2xl shadow-2xl w-full h-full sm:h-[90vh] sm:max-w-5xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white sm:rounded-t-2xl border-b px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3 z-10">
                <div>
                  <h3 id="resource-modal-title" className="font-bold text-dian-navy text-base sm:text-lg">
                    Documento — {selectedResource.name}
                  </h3>
                  <p id="resource-modal-desc" className="text-xs text-gray-500">
                    Si el visor falla en tu navegador, usa &quot;Abrir en pestaña nueva&quot;.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs mt-2">
                    <a
                      href={selectedResource.file}
                      target="_blank"
                      rel="noreferrer"
                      className="text-dian-navy hover:underline"
                    >
                      Abrir en pestaña nueva
                    </a>
                    <a
                      href={selectedResource.file}
                      download
                      className="inline-flex items-center gap-1 text-dian-navy hover:underline"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Descargar PDF
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2.5 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              <div className="flex-1 bg-gray-50 overflow-auto">
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

      <div className="max-w-6xl mx-auto px-4 mt-6">
        <p className="text-xs text-gray-500">
          Fuentes oficiales de consulta directa: {" "}
          <a
            href="https://www.cnsc.gov.co/node/59797"
            target="_blank"
            rel="noreferrer"
            className="text-dian-navy hover:underline inline-flex items-center gap-1"
          >
            CNSC DIAN 2676
            <ExternalLink className="w-3 h-3" />
          </a>
          {" "}y{" "}
          <a
            href="https://www.dian.gov.co/Prensa/Paginas/NG-Inician-inscripciones-en-la-modalidad-abierta-del-concurso-de-meritos-DIAN-2676.aspx"
            target="_blank"
            rel="noreferrer"
            className="text-dian-navy hover:underline inline-flex items-center gap-1"
          >
            Comunicado DIAN
            <ExternalLink className="w-3 h-3" />
          </a>
          .
        </p>
      </div>
    </section>
  );
}
