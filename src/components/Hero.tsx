"use client";

import {
  ExternalLink,
  FileBadge,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-20 sm:py-28 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
            <FileBadge className="w-4 h-4 text-amber-400" />
            Convocatoria DIAN 2676
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-4 leading-tight font-[family:var(--font-display)]">
            <span className="inline-flex flex-wrap items-center justify-center gap-3">
              <Image
                src="/brand/logo.png"
                alt=""
                width={52}
                height={52}
                className="rounded-xl"
                aria-hidden
                priority
              />
              Prepárate para la{" "}
              <span className="text-amber-400">DIAN</span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/85 mb-3 max-w-2xl mx-auto">
            Simulacros, estudio guiado y documentos oficiales para
            Analista V y Gestor I.
          </p>

          <p className="text-xs text-white/50 mb-10">
            Inscripciones cerradas · 7 de febrero de 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
        >
          <div className="bg-white/8 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <Target className="w-7 h-7 mx-auto mb-2.5 text-amber-400" />
            <h3 className="font-semibold text-sm mb-1">3 pruebas oficiales</h3>
            <p className="text-xs text-white/65">
              Básicas, comportamentales e integridad.
            </p>
          </div>
          <div className="bg-white/8 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <Users className="w-7 h-7 mx-auto mb-2.5 text-amber-400" />
            <h3 className="font-semibold text-sm mb-1">2 cargos activos</h3>
            <p className="text-xs text-white/65">
              Analista V y Gestor I.
            </p>
          </div>
          <div className="bg-white/8 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <ShieldCheck className="w-7 h-7 mx-auto mb-2.5 text-amber-400" />
            <h3 className="font-semibold text-sm mb-1">Material verificado</h3>
            <p className="text-xs text-white/65">
              Basado en documentos DIAN/CNSC.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://simo.cnsc.gov.co/#/ofertaEmpleo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 text-[#0f172a] font-semibold px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Oferta SIMO
          </a>
          <a
            href="https://www.cnsc.gov.co/node/59797"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors text-sm border border-white/15"
          >
            <ExternalLink className="w-4 h-4" />
            CNSC Convocatoria
          </a>
          <a
            href="https://www.dian.gov.co/Prensa/Paginas/NG-Inician-inscripciones-en-la-modalidad-abierta-del-concurso-de-meritos-DIAN-2676.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors text-sm border border-white/15"
          >
            <ExternalLink className="w-4 h-4" />
            Comunicado DIAN
          </a>
        </motion.div>
      </div>
    </section>
  );
}
