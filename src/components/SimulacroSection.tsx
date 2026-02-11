"use client";

import Link from "next/link";
import { ClipboardCheck, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const areas = [
  {
    name: "Analista V · Básicas y funcionales",
    icon: ClipboardCheck,
    available: true,
    href: "/simulacro/analista-basicas",
    color: "from-emerald-500 to-teal-600",
    questions: 12,
    description: "Eliminatoria: normativa y funciones del cargo.",
  },
  {
    name: "Analista V · Comportamentales",
    icon: Users,
    available: true,
    href: "/simulacro/analista-comportamentales",
    color: "from-blue-500 to-sky-600",
    questions: 12,
    description: "Casos alineados con el diccionario oficial.",
  },
  {
    name: "Analista V · Integridad",
    icon: ShieldCheck,
    available: true,
    href: "/simulacro/analista-integridad",
    color: "from-rose-500 to-pink-600",
    questions: 12,
    description: "Valores y juramento de integridad DIAN.",
  },
  {
    name: "Gestor I · Básicas y funcionales",
    icon: ClipboardCheck,
    available: true,
    href: "/simulacro/gestor-basicas",
    color: "from-indigo-500 to-slate-600",
    questions: 12,
    description: "Administrativo, logística, compras y contratos.",
  },
  {
    name: "Gestor I · Comportamentales",
    icon: Users,
    available: true,
    href: "/simulacro/gestor-comportamentales",
    color: "from-amber-500 to-orange-600",
    questions: 12,
    description: "Innovación, ética y solución de problemas.",
  },
  {
    name: "Gestor I · Integridad",
    icon: ShieldCheck,
    available: true,
    href: "/simulacro/gestor-integridad",
    color: "from-teal-500 to-cyan-600",
    questions: 12,
    description: "Ética pública y responsabilidad personal.",
  },
];

export default function SimulacroSection() {
  return (
    <section id="simulacros" className="py-16 bg-dian-gray border-t border-dian-navy/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-dian-navy mb-2 font-[family:var(--font-display)]">
            Simulacros por cargo y prueba
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto text-sm">
            Practica con bancos de preguntas basados en documentación oficial.
            Elige tu cargo y el tipo de prueba.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area, i) => {
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
                  href={area.href!}
                  prefetch={false}
                  className="block bg-white rounded-2xl p-6 border-2 border-transparent hover:border-dian-navy shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 mb-1">{area.name}</h3>
                      <p className="text-xs text-gray-500 mb-3">{area.description}</p>
                      {area.questions && (
                        <span className="text-xs bg-dian-mint text-dian-navy font-medium px-2 py-1 rounded-full">
                          {area.questions} preguntas disponibles
                        </span>
                      )}
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
