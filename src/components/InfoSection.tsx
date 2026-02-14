"use client";

import { useState } from "react";
import {
  Briefcase,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Landmark,
  ShieldAlert,
  Target,
  Users,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ANALISTA_V_OFFICIAL_SNAPSHOT,
  GESTOR_I_OFFICIAL_SNAPSHOT,
} from "@/data/official-dian2676";

/* ── animation variants ── */

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const floatingIcon = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const cardHover = {
  y: -4,
  boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
  transition: { duration: 0.25 },
};

/* ── data (unchanged) ── */

const pruebas = [
  {
    title: "Competencias básicas y funcionales",
    badge: "Eliminatorio · 65% (Analista) / 70% (Gestor)",
    description:
      "Evalúa conocimientos normativos y manual funcional con situaciones aplicadas de toma de decisión. No superar el mínimo te excluye del proceso.",
    icon: ClipboardCheck,
  },
  {
    title: "Competencias comportamentales",
    badge: "Clasificatorio · 15% (Analista) / 20% (Gestor)",
    description:
      "Mide tu forma de actuar en escenarios situacionales, alineada con el Diccionario de Competencias y conductas observables oficiales.",
    icon: Users,
  },
  {
    title: "Prueba de integridad",
    badge: "Clasificatorio · 10% (ambos cargos)",
    description:
      "Valora ética pública y criterio frente a dilemas del servicio, con base en Código de Integridad y Código de Ética DIAN.",
    icon: ShieldAlert,
  },
];

const cargos = [
  {
    id: "analista",
    title: "Analista V",
    subtitle: "Nivel técnico · Código 205 · Grado 5",
    opec: "OPEC 236732 y 236756",
    entidad: "Ingreso DIAN 2676 · Convocatoria 1011914855",
    salario: `${ANALISTA_V_OFFICIAL_SNAPSHOT.salario2025} (vigencia 2025)`,
    vacantes: `${ANALISTA_V_OFFICIAL_SNAPSHOT.vacantesTotal} vacantes`,
    cierre: "Cierre de inscripciones: 7 de febrero de 2026",
    manual: "/recursos/manual-funciones-analista-v.pdf",
    highlights: [
      "Proceso misional: cumplimiento de obligaciones tributarias",
      "Subproceso: administración de cartera y recaudo/devoluciones",
      "Vacantes SIMO: OPEC 236732 (4) + OPEC 236756 (10)",
      "Experiencia: 3 años (2 laboral + 1 relacionada)",
    ],
    funcionales: [
      "Control extensivo de obligaciones",
      "Devoluciones y compensaciones",
      "Cobro coactivo y cobro persuasivo",
      "Medidas cautelares y procesos concursales",
    ],
    comportamentales: [
      "Comportamiento ético (nivel 4)",
      "Adaptabilidad (nivel 3)",
      "Comunicación efectiva (nivel 3)",
      "Trabajo en equipo (nivel 3)",
    ],
    basicas: [
      "Constitución, función pública y procedimiento administrativo (Ley 1437)",
      "Sistema tributario, aduanero y cambiario",
      "Recaudo, devoluciones, transparencia y MIPG",
      "Gestión documental, herramientas informáticas y PQRSF",
    ],
  },
  {
    id: "gestor",
    title: "Gestor I",
    subtitle: "Nivel profesional · Código 301 · Grado 1",
    opec: "OPEC 236741 y 236767",
    entidad: "Ingreso DIAN 2676 · Convocatoria 1011914855",
    salario: `${GESTOR_I_OFFICIAL_SNAPSHOT.salario2025} (vigencia 2025)`,
    vacantes: `${GESTOR_I_OFFICIAL_SNAPSHOT.vacantesTotal} vacantes`,
    cierre: "Cierre de inscripciones: 7 de febrero de 2026",
    manual: "/recursos/manual-funciones-gestor-i.pdf",
    highlights: [
      "Proceso: administrativo y financiero",
      "Subproceso: recursos administrativos, logística, compras y contratos",
      "Vacantes SIMO: OPEC 236741 (8) + OPEC 236767 (189)",
      "Experiencia: no requiere",
    ],
    funcionales: [
      "Gestión documental y SIIF Nación II",
      "Administración de custodia y disposición de mercancías",
      "Administración de infraestructura y servicios",
      "Contratación pública y control de ingresos",
    ],
    comportamentales: [
      "Comportamiento ético (nivel 4)",
      "Innovación (nivel 3)",
      "Adaptabilidad (nivel 3)",
      "Solución de problemas (nivel 3)",
    ],
    basicas: [
      "Constitución, función pública y procedimiento administrativo (Ley 1437)",
      "Recursos administrativos y servicio al ciudadano",
      "Código de buen gobierno, integridad y transparencia",
      "Gestión documental, PQRSF y herramientas institucionales",
    ],
  },
];

/* ── Accordion wrapper (animated open/close) ── */

function Accordion({
  open,
  onToggle,
  header,
  children,
}: {
  open: boolean;
  onToggle: () => void;
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between cursor-pointer p-5 sm:p-6"
      >
        {header}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 sm:px-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Main component ── */

export default function InfoSection() {
  const [tableOpen, setTableOpen] = useState(false);
  const [cargoOpen, setCargoOpen] = useState<Record<string, boolean>>({});

  const toggleCargo = (id: string) =>
    setCargoOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      {/* ═══════ SLIDE 1 — Resumen del proceso ═══════ */}
      <section
        id="resumen"
        className="min-h-screen flex flex-col justify-center py-20 border-t border-gray-200/60"
      >
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-widest uppercase text-dian-gold mb-3"
            >
              Convocatoria DIAN 2676
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dian-navy font-[family:var(--font-display)] leading-tight"
            >
              Resumen del proceso
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-500 max-w-xl mx-auto mt-4 text-base leading-relaxed"
            >
              Cómo se evalúa la convocatoria, qué estudiar y cómo practicar con
              material oficial.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-2 gap-6"
          >
            {/* Estado de la convocatoria */}
            <motion.div
              variants={fadeUp}
              whileHover={cardHover}
              className="bg-white rounded-2xl border border-gray-100 p-6 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div animate={floatingIcon.animate}>
                  <CalendarClock className="w-6 h-6 text-dian-navy" />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-dian-navy">
                    Estado de la convocatoria
                  </p>
                  <p className="text-xs text-gray-400">
                    Inscripciones cerradas (7 de febrero de 2026).
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                {[
                  "DIAN publicó apertura de inscripciones (28-ene-2026) y la CNSC amplió el cierre hasta el 7-feb-2026.",
                  "La etapa vigente depende del cronograma oficial que publique la CNSC. Revisa siempre avisos oficiales.",
                  "La prueba de competencias básicas y funcionales es eliminatoria; se suman comportamental, integridad y valoración de antecedentes.",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-dian-success mt-0.5 shrink-0" />
                    <p>{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <a
                  href="https://www.cnsc.gov.co/node/59797"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-dian-navy hover:underline"
                >
                  Ver aviso oficial CNSC →
                </a>
              </div>
            </motion.div>

            {/* Estructura de pruebas */}
            <motion.div
              variants={fadeUp}
              whileHover={cardHover}
              className="bg-dian-sand rounded-2xl border border-dian-gold/20 p-6 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div animate={floatingIcon.animate}>
                  <Target className="w-6 h-6 text-dian-navy" />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-dian-navy">
                    Estructura de pruebas
                  </p>
                  <p className="text-xs text-gray-500">
                    Pesos oficiales CNSC por cargo.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {pruebas.map((prueba, i) => {
                  const Icon = prueba.icon;
                  return (
                    <motion.div
                      key={prueba.title}
                      variants={fadeScale}
                      whileHover={{
                        y: -2,
                        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                      }}
                      className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 transition-colors"
                    >
                      <motion.div
                        animate={floatingIcon.animate}
                        transition={{ delay: i * 0.4 }}
                        className="w-9 h-9 rounded-lg bg-dian-mint flex items-center justify-center shrink-0"
                      >
                        <Icon className="w-4 h-4 text-dian-navy" />
                      </motion.div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-900 leading-snug">
                          {prueba.title}
                        </p>
                        <span className="text-[11px] font-semibold text-dian-navy bg-dian-mint px-2 py-0.5 rounded-full inline-block mt-1">
                          {prueba.badge}
                        </span>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                          {prueba.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SLIDE 2 — Tabla oficial por cargo ═══════ */}
      <section className="min-h-screen flex flex-col justify-center py-20 border-t border-gray-200/60">
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-dian-gold mb-3">
                Ponderación
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-dian-navy font-[family:var(--font-display)]">
                Tabla oficial por cargo
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{
                boxShadow: "0 8px 28px rgba(0,0,0,0.07)",
              }}
              className="bg-white rounded-2xl border border-gray-100 transition-colors"
            >
              <Accordion
                open={tableOpen}
                onToggle={() => setTableOpen(!tableOpen)}
                header={
                  <h3 className="text-lg font-semibold text-dian-navy text-left">
                    Ver ponderación de pruebas
                  </h3>
                }
              >
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Analista V table */}
                  <motion.div
                    variants={fadeScale}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="rounded-xl border border-gray-200 overflow-hidden"
                  >
                    <div className="bg-dian-mint px-4 py-3">
                      <p className="text-sm font-semibold text-dian-navy">
                        Analista V
                      </p>
                      <p className="text-[11px] text-gray-600">
                        65% / 15% / 10% + valoración de antecedentes 10%
                        (documental)
                      </p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="text-xs uppercase text-gray-500 border-b bg-white">
                          <tr>
                            <th className="py-2.5 px-4">Prueba</th>
                            <th className="py-2.5 px-4">Carácter</th>
                            <th className="py-2.5 px-4">Peso</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600">
                          {[
                            ["Básicas y funcionales", "Eliminatoria", "65%"],
                            ["Comportamentales", "Clasificatoria", "15%"],
                            ["Integridad", "Clasificatoria", "10%"],
                            [
                              "Valoración de antecedentes",
                              "Clasificatoria (documental)",
                              "10%",
                            ],
                          ].map(([prueba, car, peso], i, arr) => (
                            <tr
                              key={prueba}
                              className={
                                i < arr.length - 1 ? "border-b" : ""
                              }
                            >
                              <td className="py-2.5 px-4 font-medium text-gray-900">
                                {prueba}
                              </td>
                              <td className="py-2.5 px-4">{car}</td>
                              <td className="py-2.5 px-4">{peso}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>

                  {/* Gestor I table */}
                  <motion.div
                    variants={fadeScale}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="rounded-xl border border-gray-200 overflow-hidden"
                  >
                    <div className="bg-dian-sand px-4 py-3">
                      <p className="text-sm font-semibold text-dian-navy">
                        Gestor I
                      </p>
                      <p className="text-[11px] text-gray-600">
                        70% / 20% / 10%
                      </p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="text-xs uppercase text-gray-500 border-b bg-white">
                          <tr>
                            <th className="py-2.5 px-4">Prueba</th>
                            <th className="py-2.5 px-4">Carácter</th>
                            <th className="py-2.5 px-4">Peso</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600">
                          {[
                            ["Básicas y funcionales", "Eliminatoria", "70%"],
                            ["Comportamentales", "Clasificatoria", "20%"],
                            ["Integridad", "Clasificatoria", "10%"],
                          ].map(([prueba, car, peso], i, arr) => (
                            <tr
                              key={prueba}
                              className={
                                i < arr.length - 1 ? "border-b" : ""
                              }
                            >
                              <td className="py-2.5 px-4 font-medium text-gray-900">
                                {prueba}
                              </td>
                              <td className="py-2.5 px-4">{car}</td>
                              <td className="py-2.5 px-4">{peso}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                </div>
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SLIDE 3 — Cargos disponibles ═══════ */}
      <section
        id="cargos"
        className="min-h-screen flex flex-col justify-center py-20 scroll-mt-24 border-t border-gray-200/60"
      >
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <motion.div
                animate={floatingIcon.animate}
                className="inline-flex items-center gap-2 bg-dian-mint text-dian-navy text-xs font-semibold px-4 py-1.5 rounded-full mb-4"
              >
                <Briefcase className="w-3.5 h-3.5" />
                Cargos disponibles en SIMO
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dian-navy font-[family:var(--font-display)]">
                Analista V y Gestor I
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto mt-4 text-base leading-relaxed">
                Información consolidada con manuales de funciones y oferta
                vigente.
              </p>
            </motion.div>

            <div className="space-y-5">
              {cargos.map((cargo) => (
                <motion.div
                  key={cargo.id}
                  variants={fadeUp}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
                  }}
                  className="bg-white rounded-2xl border border-gray-100 transition-colors"
                >
                  <Accordion
                    open={!!cargoOpen[cargo.id]}
                    onToggle={() => toggleCargo(cargo.id)}
                    header={
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h4 className="text-xl font-bold text-dian-navy">
                            {cargo.title}
                          </h4>
                          <span className="text-xs font-semibold bg-dian-mint text-dian-navy px-3 py-1 rounded-full">
                            {cargo.vacantes}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">
                          {cargo.subtitle}
                        </p>
                      </div>
                    }
                  >
                    <motion.div
                      variants={stagger}
                      initial="hidden"
                      animate="show"
                    >
                      {/* Meta info grid */}
                      <motion.div
                        variants={fadeUp}
                        className="grid sm:grid-cols-2 gap-3 text-xs text-gray-600 mb-5"
                      >
                        {[
                          {
                            icon: FileText,
                            text: cargo.opec,
                          },
                          {
                            icon: Landmark,
                            text: cargo.entidad,
                          },
                          {
                            icon: Briefcase,
                            text: cargo.salario,
                          },
                          {
                            icon: CalendarClock,
                            text: cargo.cierre,
                          },
                        ].map(({ icon: Ic, text }) => (
                          <div
                            key={text}
                            className="flex items-center gap-2"
                          >
                            <Ic className="w-4 h-4 text-dian-navy shrink-0" />
                            <span>{text}</span>
                          </div>
                        ))}
                      </motion.div>

                      {/* Highlights */}
                      <motion.div
                        variants={fadeUp}
                        className="rounded-xl bg-dian-gray p-4 text-xs text-gray-600 mb-5 space-y-1.5"
                      >
                        {cargo.highlights.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-dian-success mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </motion.div>

                      {/* Competencias */}
                      <motion.div
                        variants={fadeUp}
                        className="grid sm:grid-cols-2 gap-5 text-xs text-gray-600 mb-5"
                      >
                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-2">
                            Competencias funcionales
                          </p>
                          <ul className="space-y-1">
                            {cargo.funcionales.map((item) => (
                              <li key={item}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-2">
                            Competencias comportamentales
                          </p>
                          <ul className="space-y-1">
                            {cargo.comportamentales.map((item) => (
                              <li key={item}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>

                      {/* Temas base */}
                      <motion.div
                        variants={fadeUp}
                        className="text-xs text-gray-600 mb-6"
                      >
                        <p className="text-sm font-semibold text-gray-900 mb-2">
                          Temas base para la prueba eliminatoria
                        </p>
                        <ul className="grid gap-1">
                          {cargo.basicas.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Action buttons */}
                      <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap gap-3"
                      >
                        <motion.a
                          href={cargo.manual}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-2 text-xs font-semibold text-dian-navy bg-dian-mint px-4 py-2.5 rounded-lg hover:bg-dian-mint/70 transition-colors"
                        >
                          <FileText className="w-4 h-4" />
                          Ver manual oficial
                        </motion.a>
                        <motion.div
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Link
                            href={
                              cargo.id === "analista"
                                ? "/estudio/analista-v"
                                : "/estudio/gestor-i"
                            }
                            prefetch={false}
                            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-dian-navy px-4 py-2.5 rounded-lg hover:bg-dian-navy-light transition-colors"
                          >
                            <ClipboardCheck className="w-4 h-4" />
                            Iniciar estudio
                          </Link>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
