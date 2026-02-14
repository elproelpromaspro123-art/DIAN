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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function StudySection() {
  return (
    <section
      id="estudio"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white border-t border-dian-navy/10"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-16 -left-32 w-96 h-96 bg-dian-navy/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-40 w-[28rem] h-[28rem] bg-dian-mint/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 py-20 w-full relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dian-navy mb-3 font-[family:var(--font-display)]">
            Estudio guiado por cargo
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Selecciona tu cargo y sigue una guía continua en tres fases. El contenido
            está diseñado para comprender, analizar y decidir con criterio oficial, no solo memorizar.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {studyAreas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div key={area.name} variants={cardVariants}>
                <Link href={area.href} prefetch={false} className="block group">
                  <motion.div
                    className="bg-white rounded-3xl p-8 border border-dian-navy/10 shadow-sm transition-colors duration-300 group-hover:border-dian-navy/30"
                    whileHover={{
                      scale: 1.03,
                      boxShadow:
                        "0 20px 50px -12px rgba(0,0,0,0.12), 0 4px 20px -4px rgba(0,0,0,0.06)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center shrink-0`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">
                          {area.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                          {area.description}
                        </p>
                        <span className="inline-block text-xs bg-dian-mint text-dian-navy font-medium px-3 py-1.5 rounded-full">
                          {area.total} fases de estudio
                        </span>
                      </div>
                    </div>

                    {/* Animated arrow */}
                    <div className="flex justify-end mt-4">
                      <motion.div
                        className="w-10 h-10 rounded-full bg-dian-navy/5 flex items-center justify-center group-hover:bg-dian-navy transition-colors duration-300"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 18 }}
                      >
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
