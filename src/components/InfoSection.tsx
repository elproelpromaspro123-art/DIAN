"use client";

import {
  Briefcase,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Gauge,
  Landmark,
  ShieldAlert,
  Target,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const pruebas = [
  {
    title: "Competencias básicas y funcionales",
    badge: "Eliminatorio · ~60%",
    description:
      "Evalúa conocimientos normativos, tributarios, aduaneros, cambiarios y el manual de funciones del cargo. No superar el mínimo te excluye del proceso.",
    icon: ClipboardCheck,
  },
  {
    title: "Competencias comportamentales",
    badge: "Clasificatorio · ~20%",
    description:
      "Mide tu forma de actuar en el trabajo, alineada con el Diccionario de Competencias y las conductas observables definidas oficialmente.",
    icon: Users,
  },
  {
    title: "Prueba de integridad",
    badge: "Clasificatorio · ~10-20%",
    description:
      "Valora ética pública, honestidad y coherencia frente a dilemas del servicio, con base en el Código de Integridad y el Código de Ética DIAN.",
    icon: ShieldAlert,
  },
];

const cargos = [
  {
    id: "analista",
    title: "Analista V",
    subtitle: "Nivel técnico · Código 205 · Grado 5",
    opec: "OPEC 236732",
    entidad: "ID entidad 117",
    salario: "$7.171.627 (vigencia 2025)",
    vacantes: "4 vacantes",
    cierre: "Cierre de inscripciones: 7 de febrero de 2026",
    manual: "/recursos/manual-funciones-analista-v.pdf",
    highlights: [
      "Proceso misional: cumplimiento de obligaciones tributarias",
      "Subproceso: administración de cartera y recaudo/devoluciones",
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
    opec: "OPEC 236741",
    entidad: "ID entidad 134",
    salario: "$6.811.546 (vigencia 2025)",
    vacantes: "8 vacantes",
    cierre: "Cierre de inscripciones: 7 de febrero de 2026",
    manual: "/recursos/manual-funciones-gestor-i.pdf",
    highlights: [
      "Proceso: administrativo y financiero",
      "Subproceso: recursos administrativos, logística, compras y contratos",
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function InfoSection() {
  return (
    <section
      id="resumen"
      className="py-20 bg-gradient-to-b from-white via-dian-gray/40 to-white border-t border-dian-navy/10"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-dian-mint text-dian-navy text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            <Gauge className="w-3.5 h-3.5" />
            Actualizado al 11 de febrero de 2026
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-dian-navy mb-3 font-[family:var(--font-display)]">
            Resumen del proceso DIAN 2676
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Esta guía está diseñada para ayudarte a entender cómo se evalúa la
            convocatoria, qué estudiar y cómo practicar con material oficial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <CalendarClock className="w-6 h-6 text-dian-navy" />
              <div>
                <p className="text-sm font-semibold text-dian-navy">
                  Estado de la convocatoria
                </p>
                <p className="text-xs text-gray-500">
                  Inscripciones oficiales cerradas (7 de febrero de 2026).
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-dian-success mt-0.5" />
                <p>
                  DIAN publicó apertura de inscripciones (28-ene-2026) y la CNSC
                  amplió el cierre hasta el 7-feb-2026 por incidencia operativa en SIMO.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-dian-success mt-0.5" />
                <p>
                  La etapa vigente depende del cronograma oficial que publique la CNSC.
                  Revisa siempre avisos oficiales antes de tomar decisiones.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-dian-success mt-0.5" />
                <p>
                  La prueba de competencias básicas y funcionales es eliminatoria;
                  las otras dos determinan tu posición en la lista de elegibles.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 text-xs">
              <a
                href="https://www.dian.gov.co/Prensa/Paginas/NG-Inician-inscripciones-en-la-modalidad-abierta-del-concurso-de-meritos-DIAN-2676.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dian-navy hover:underline"
              >
                Comunicado DIAN (28-ene-2026)
              </a>
              <a
                href="https://www.cnsc.gov.co/node/59797"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dian-navy hover:underline"
              >
                Aviso CNSC ampliación (7-feb-2026)
              </a>
              <a
                href="https://www.cnsc.gov.co/node/59574"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dian-navy hover:underline"
              >
                Aviso CNSC incidencia SIMO (4-feb-2026)
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dian-sand rounded-2xl border border-dian-gold/20 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <Target className="w-6 h-6 text-dian-navy" />
              <div>
                <p className="text-sm font-semibold text-dian-navy">Estructura de pruebas</p>
                <p className="text-xs text-gray-600">Peso aproximado y enfoque.</p>
              </div>
            </div>
            <div className="space-y-4">
              {pruebas.map((prueba) => {
                const Icon = prueba.icon;
                return (
                  <div
                    key={prueba.title}
                    className="bg-white rounded-xl border border-gray-100 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-dian-mint flex items-center justify-center">
                        <Icon className="w-5 h-5 text-dian-navy" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {prueba.title}
                        </p>
                        <span className="text-[11px] font-semibold text-dian-navy bg-dian-mint px-2 py-0.5 rounded-full inline-block mt-1">
                          {prueba.badge}
                        </span>
                        <p className="text-xs text-gray-600 mt-2 max-w-[48ch]">
                          {prueba.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-14"
        >
          <h3 className="text-lg font-semibold text-dian-navy mb-4">
            Tabla oficial de pruebas
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase text-gray-500 border-b">
                <tr>
                  <th className="py-2 pr-4">Tipo de prueba</th>
                  <th className="py-2 pr-4">Carácter</th>
                  <th className="py-2 pr-4">Peso</th>
                  <th className="py-2">¿Qué evalúa?</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Competencias básicas y funcionales
                  </td>
                  <td className="py-3 pr-4">Eliminatorio</td>
                  <td className="py-3 pr-4">~60%</td>
                  <td className="py-3">
                    Conocimientos de ley, tributos, aduanas y manual de funciones.
                    Si no superas el mínimo, quedas fuera del proceso.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Competencias comportamentales
                  </td>
                  <td className="py-3 pr-4">Clasificatorio</td>
                  <td className="py-3 pr-4">~20%</td>
                  <td className="py-3">
                    Forma de actuar basada en el Diccionario de Competencias
                    (adaptabilidad, comunicación, etc.).
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Prueba de integridad
                  </td>
                  <td className="py-3 pr-4">Clasificatorio</td>
                  <td className="py-3 pr-4">~10-20%</td>
                  <td className="py-3">
                    Valores éticos y honestidad frente a dilemas del servicio público.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <div id="cargos" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-dian-mint text-dian-navy text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              Cargos disponibles en SIMO
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-dian-navy mb-2 font-[family:var(--font-display)]">
              Analista V y Gestor I
            </h3>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Información consolidada con los manuales de funciones y la oferta vigente.
              Aquí tienes el mapa de estudio específico para cada cargo.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {cargos.map((cargo, index) => (
              <motion.div
                key={cargo.id}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-dian-navy">
                      {cargo.title}
                    </h4>
                    <p className="text-sm text-gray-500">{cargo.subtitle}</p>
                  </div>
                  <span className="text-xs font-semibold bg-dian-mint text-dian-navy px-3 py-1 rounded-full">
                    {cargo.vacantes}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 text-xs text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-dian-navy" />
                    <span>{cargo.opec}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-dian-navy" />
                    <span>{cargo.entidad}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-dian-navy" />
                    <span>{cargo.salario}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarClock className="w-4 h-4 text-dian-navy" />
                    <span>{cargo.cierre}</span>
                  </div>
                </div>

                <div className="bg-dian-gray rounded-xl p-4 text-xs text-gray-600 mb-4 space-y-1">
                  {cargo.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-dian-success mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs text-gray-600 mb-4">
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
                </div>

                <div className="text-xs text-gray-600 mb-5">
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Temas base para la prueba eliminatoria
                  </p>
                  <ul className="grid gap-1">
                    {cargo.basicas.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={cargo.manual}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-dian-navy bg-dian-mint px-4 py-2 rounded-lg hover:bg-dian-mint/70 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Ver manual oficial
                  </a>
                  <Link
                    href={
                      cargo.id === "analista"
                        ? "/estudio/analista-v"
                        : "/estudio/gestor-i"
                    }
                    prefetch={false}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-dian-navy px-4 py-2 rounded-lg hover:bg-dian-navy-light transition-colors"
                  >
                    <ClipboardCheck className="w-4 h-4" />
                    Iniciar estudio
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

