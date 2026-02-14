"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

const areas = [
  {
    name: "Analista V · Simulacro integral",
    icon: ClipboardCheck,
    href: "/simulacro/analista-v",
    color: "from-zinc-700 to-zinc-900",
    questions: 100,
    description:
      "Incluye fase eliminatoria y dos fases clasificatorias, con retroalimentación detallada.",
  },
  {
    name: "Gestor I · Simulacro integral",
    icon: Briefcase,
    href: "/simulacro/gestor-i",
    color: "from-neutral-700 to-neutral-900",
    questions: 100,
    description:
      "Entrenamiento completo por fases con evaluación de desempeño y mejora por bloque.",
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

export default function SimulacroSection() {
  return (
    <section
      id="simulacros"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-dian-gray border-t border-dian-navy/10"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-24 -right-36 w-[26rem] h-[26rem] bg-dian-navy/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-28 w-80 h-80 bg-dian-mint/15 rounded-full blur-3xl pointer-events-none" />

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
            Simulacros por cargo
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Cada simulacro está organizado por fases del proceso DIAN y entrega
            resultado global más lectura de desempeño por bloque.
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
          {areas.map((area) => {
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

                        {/* Animated questions badge */}
                        <motion.span
                          className="inline-block text-xs bg-dian-mint text-dian-navy font-medium px-3 py-1.5 rounded-full"
                          whileHover={{ scale: 1.08 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          {area.questions} preguntas por simulacro
                        </motion.span>
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
