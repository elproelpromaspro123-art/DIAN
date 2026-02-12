"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const studyAreas = [
  {
    name: "Analista V · Estudio integrado",
    icon: GraduationCap,
    href: "/estudio/analista-v",
    color: "from-zinc-700 to-zinc-900",
    total: 3,
    description:
      "Guía completa por fases con lectura crítica, casos situacionales y preguntas de fijación.",
  },
  {
    name: "Gestor I · Estudio integrado",
    icon: Briefcase,
    href: "/estudio/gestor-i",
    color: "from-neutral-700 to-neutral-900",
    total: 3,
    description:
      "Ruta por fases con análisis aplicado y talleres para decidir como en examen.",
  },
];

export default function StudySection() {
  return (
    <section id="estudio" className="py-16 bg-white border-t border-dian-navy/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-dian-navy mb-2 font-[family:var(--font-display)]">
            Estudio guiado por cargo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Selecciona tu cargo y sigue una guía continua en tres fases. El contenido
            está diseñado para comprender, analizar y decidir con criterio oficial, no solo memorizar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {studyAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={area.href}
                  prefetch={false}
                  className="block bg-white rounded-2xl p-6 border-2 border-dian-navy/10 hover:border-dian-navy shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center shrink-0`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 mb-1">{area.name}</h3>
                      <p className="text-xs text-gray-500 mb-3">{area.description}</p>
                      <span className="text-xs bg-dian-mint text-dian-navy font-medium px-2 py-1 rounded-full">
                        {area.total} fases de estudio
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-dian-navy transition-colors shrink-0 mt-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
