"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Building2,
  FileCheck2,
  Gavel,
  HeartHandshake,
  ShieldCheck,
  X,
  ChevronRight,
  Download,
} from "lucide-react";
import { useFocusTrap } from "@/lib/useFocusTrap";

const resources = [
  {
    name: "Naturaleza jurídica y objeto de la DIAN",
    icon: Building2,
    available: true,
    color: "from-emerald-500 to-teal-600",
    file: "/recursos/dian-naturaleza-juridica.pdf",
  },
  {
    name: "Manual de funciones · Analista V",
    icon: FileCheck2,
    available: true,
    color: "from-blue-500 to-sky-600",
    file: "/recursos/manual-funciones-analista-v.pdf",
  },
  {
    name: "Manual de funciones · Gestor I",
    icon: FileCheck2,
    available: true,
    color: "from-indigo-500 to-slate-600",
    file: "/recursos/manual-funciones-gestor-i.pdf",
  },
  {
    name: "Diccionario competencias (Res. 065-2024)",
    icon: BookOpen,
    available: true,
    color: "from-amber-500 to-orange-600",
    file: "/recursos/diccionario-competencias-res-065-2024.pdf",
  },
  {
    name: "Diccionario competencias comportamentales DIAN",
    icon: ShieldCheck,
    available: true,
    color: "from-green-500 to-emerald-600",
    file: "/recursos/diccionario-competencias-dian.pdf",
  },
  {
    name: "Código de Integridad DIAN",
    icon: HeartHandshake,
    available: true,
    color: "from-rose-500 to-pink-600",
    file: "/recursos/codigo-integridad-dian.pdf",
  },
  {
    name: "Código de Ética DIAN (2021)",
    icon: Gavel,
    available: true,
    color: "from-purple-500 to-violet-600",
    file: "/recursos/codigo-etica-dian-2021.pdf",
  },
];

export default function InfografiaSection() {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const selected = resources.find((a) => a.name === selectedResource);
  const pdfSrc = selected?.file ? `${selected.file}#view=FitH` : "";
  const modalRef = useRef<HTMLDivElement>(null);

  useFocusTrap(modalRef, Boolean(selected));

  const handleClose = useCallback(() => setSelectedResource(null), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedResource) handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedResource, handleClose]);

  return (
    <section
      id="recursos"
      className="py-16 bg-gradient-to-b from-white to-dian-gray/60 border-t border-dian-navy/10"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-dian-navy mb-2 font-[family:var(--font-display)]">
            Recursos oficiales DIAN + CNSC
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Documentos verificados que sustentan las pruebas, competencias y
            valores que se evalúan. Puedes leerlos en línea o descargarlos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <button
                key={resource.name}
                onClick={() => resource.available && setSelectedResource(resource.name)}
                disabled={!resource.available}
                className={`relative group rounded-2xl p-5 text-left transition-all duration-300 border-2 shadow-sm hover:-translate-y-0.5 ${
                  resource.available
                    ? "border-dian-navy/15 hover:border-dian-navy hover:shadow-lg cursor-pointer bg-white"
                    : "border-gray-200 bg-gray-50 cursor-not-allowed opacity-70"
                }`}
              >
                <div
                  className={`w-12 h-12 mb-3 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-gray-800">
                  {resource.name}
                </h3>
                <span className="mt-2 inline-flex items-center text-xs text-dian-navy font-medium">
                  Abrir documento <ChevronRight className="w-3 h-3 ml-0.5" />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && selected.file && (
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
                    Documento — {selected.name}
                  </h3>
                  <p id="resource-modal-desc" className="text-xs text-gray-500">
                    En móvil puedes hacer zoom con los dedos o descargar el PDF para verlo sin conexión.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs mt-2">
                    <a
                      href={selected.file}
                      target="_blank"
                      rel="noreferrer"
                      className="text-dian-navy hover:underline"
                    >
                      Abrir en pestaña nueva
                    </a>
                    <a
                      href={selected.file}
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
                  title={`Documento ${selected.name}`}
                  src={pdfSrc}
                  className="w-full h-full infografia-frame"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
