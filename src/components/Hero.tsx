"use client";

import {
  CalendarCheck,
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
    <section className="relative bg-gradient-to-br from-dian-navy via-dian-navy-light to-dian-navy overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-6 left-12 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-8 right-10 w-96 h-96 bg-dian-gold rounded-full blur-3xl" />
      </div>
      <div className="absolute right-6 top-8 opacity-20 hidden sm:block">
        <Image
          src="/brand/logo.png"
          alt=""
          width={120}
          height={120}
          className="rounded-2xl rotate-6 shadow-2xl bg-white/20 p-2"
          aria-hidden
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-5">
            <FileBadge className="w-4 h-4 text-dian-gold" />
            Convocatoria DIAN 2676 · Ingreso
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight font-[family:var(--font-display)]">
            Prepárate para la <span className="text-dian-gold">DIAN</span> con información oficial
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Ruta completa para Analista V y Gestor I: simulacros, estudio guiado y
            documentos verificados para que llegues con claridad a cada prueba.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <Target className="w-8 h-8 mx-auto mb-2 text-dian-gold" />
            <h3 className="font-semibold text-sm mb-1">3 pruebas oficiales</h3>
            <p className="text-xs text-white/80">
              Básicas y funcionales, comportamentales e integridad.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <Users className="w-8 h-8 mx-auto mb-2 text-dian-gold" />
            <h3 className="font-semibold text-sm mb-1">2 cargos activos</h3>
            <p className="text-xs text-white/80">
              Analista V (técnico) y Gestor I (profesional).
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-dian-gold" />
            <h3 className="font-semibold text-sm mb-1">Material verificado</h3>
            <p className="text-xs text-white/80">
              Basado en manuales y documentos oficiales DIAN/CNSC.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 max-w-2xl mx-auto mb-8 border border-white/20 flex items-start gap-3 text-left"
        >
          <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
            <CalendarCheck className="w-5 h-5 text-dian-gold" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">
              Inscripciones cerradas
            </p>
            <p className="text-xs text-white/80">
              La CNSC confirmó ampliación hasta el 7 de febrero de 2026. Hoy
              (11 de febrero de 2026) el proceso está en etapa posterior a inscripciones.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto border border-white/10"
        >
          <p className="text-sm text-white/90 mb-3">
            Verifica la información en las fuentes oficiales:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://simo.cnsc.gov.co/#/ofertaEmpleo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-dian-gold text-dian-navy font-semibold px-5 py-2.5 rounded-lg hover:bg-[#e0b457] transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Oferta SIMO
            </a>
            <a
              href="https://www.cnsc.gov.co/convocatorias/dian-2676"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/15 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-white/25 transition-colors text-sm border border-white/20"
            >
              <ExternalLink className="w-4 h-4" />
              CNSC Convocatoria
            </a>
            <a
              href="https://www.dian.gov.co/Prensa/Paginas/NG-Convocatoria-DIAN-2676-2025-.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/15 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-white/25 transition-colors text-sm border border-white/20"
            >
              <ExternalLink className="w-4 h-4" />
              Comunicado DIAN
            </a>
          </div>
          <p className="text-xs text-white/50 mt-3">
            Proyecto educativo independiente — No afiliado con la DIAN, la CNSC ni SIMO.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

