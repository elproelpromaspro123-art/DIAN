"use client";

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
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ANALISTA_V_OFFICIAL_SNAPSHOT,
  GESTOR_I_OFFICIAL_SNAPSHOT,
} from "@/data/official-dian2676";

const pruebas = [
  {
    title: "Competencias bÃ¡sicas y funcionales",
    badge: "Eliminatorio Â· 65% (Analista) / 70% (Gestor)",
    description:
      "EvalÃºa conocimientos normativos y manual funcional con situaciones aplicadas de toma de decisiÃ³n. No superar el mÃ­nimo te excluye del proceso.",
    icon: ClipboardCheck,
  },
  {
    title: "Competencias comportamentales",
    badge: "Clasificatorio Â· 15% (Analista) / 20% (Gestor)",
    description:
      "Mide tu forma de actuar en escenarios situacionales, alineada con el Diccionario de Competencias y conductas observables oficiales.",
    icon: Users,
  },
  {
    title: "Prueba de integridad",
    badge: "Clasificatorio Â· 10% (ambos cargos)",
    description:
      "Valora Ã©tica pÃºblica y criterio frente a dilemas del servicio, con base en CÃ³digo de Integridad y CÃ³digo de Ã‰tica DIAN.",
    icon: ShieldAlert,
  },
];

const cargos = [
  {
    id: "analista",
    title: "Analista V",
    subtitle: "Nivel tÃ©cnico Â· CÃ³digo 205 Â· Grado 5",
    opec: "OPEC 236732 y 236756",
    entidad: "Ingreso DIAN 2676 Â· Convocatoria 1011914855",
    salario: `${ANALISTA_V_OFFICIAL_SNAPSHOT.salario2025} (vigencia 2025)`,
    vacantes: `${ANALISTA_V_OFFICIAL_SNAPSHOT.vacantesTotal} vacantes`,
    cierre: "Cierre de inscripciones: 7 de febrero de 2026",
    manual: "/recursos/manual-funciones-analista-v.pdf",
    highlights: [
      "Proceso misional: cumplimiento de obligaciones tributarias",
      "Subproceso: administraciÃ³n de cartera y recaudo/devoluciones",
      "Vacantes SIMO: OPEC 236732 (4) + OPEC 236756 (10)",
      "Experiencia: 3 aÃ±os (2 laboral + 1 relacionada)",
    ],
    funcionales: [
      "Control extensivo de obligaciones",
      "Devoluciones y compensaciones",
      "Cobro coactivo y cobro persuasivo",
      "Medidas cautelares y procesos concursales",
    ],
    comportamentales: [
      "Comportamiento Ã©tico (nivel 4)",
      "Adaptabilidad (nivel 3)",
      "ComunicaciÃ³n efectiva (nivel 3)",
      "Trabajo en equipo (nivel 3)",
    ],
    basicas: [
      "ConstituciÃ³n, funciÃ³n pÃºblica y procedimiento administrativo (Ley 1437)",
      "Sistema tributario, aduanero y cambiario",
      "Recaudo, devoluciones, transparencia y MIPG",
      "GestiÃ³n documental, herramientas informÃ¡ticas y PQRSF",
    ],
  },
  {
    id: "gestor",
    title: "Gestor I",
    subtitle: "Nivel profesional Â· CÃ³digo 301 Â· Grado 1",
    opec: "OPEC 236741 y 236767",
    entidad: "Ingreso DIAN 2676 Â· Convocatoria 1011914855",
    salario: `${GESTOR_I_OFFICIAL_SNAPSHOT.salario2025} (vigencia 2025)`,
    vacantes: `${GESTOR_I_OFFICIAL_SNAPSHOT.vacantesTotal} vacantes`,
    cierre: "Cierre de inscripciones: 7 de febrero de 2026",
    manual: "/recursos/manual-funciones-gestor-i.pdf",
    highlights: [
      "Proceso: administrativo y financiero",
      "Subproceso: recursos administrativos, logÃ­stica, compras y contratos",
      "Vacantes SIMO: OPEC 236741 (8) + OPEC 236767 (189)",
      "Experiencia: no requiere",
    ],
    funcionales: [
      "GestiÃ³n documental y SIIF NaciÃ³n II",
      "AdministraciÃ³n de custodia y disposiciÃ³n de mercancÃ­as",
      "AdministraciÃ³n de infraestructura y servicios",
      "ContrataciÃ³n pÃºblica y control de ingresos",
    ],
    comportamentales: [
      "Comportamiento Ã©tico (nivel 4)",
      "InnovaciÃ³n (nivel 3)",
      "Adaptabilidad (nivel 3)",
      "SoluciÃ³n de problemas (nivel 3)",
    ],
    basicas: [
      "ConstituciÃ³n, funciÃ³n pÃºblica y procedimiento administrativo (Ley 1437)",
      "Recursos administrativos y servicio al ciudadano",
      "CÃ³digo de buen gobierno, integridad y transparencia",
      "GestiÃ³n documental, PQRSF y herramientas institucionales",
    ],
  },
];

export default function InfoSection() {
  return (
    <section
      id="resumen"
      className="py-16 bg-dian-gray border-t border-dian-navy/10"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-dian-navy mb-3 font-[family:var(--font-display)]">
            Resumen del proceso DIAN 2676
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
            GuÃ­a para entender cÃ³mo se evalÃºa la convocatoria, quÃ© estudiar y
            cÃ³mo practicar con material oficial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <CalendarClock className="w-6 h-6 text-dian-navy" />
              <div>
                <p className="text-sm font-semibold text-dian-navy">
                  Estado de la convocatoria
                </p>
                <p className="text-xs text-gray-500">
                  Inscripciones cerradas (7 de febrero de 2026).
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-dian-success mt-0.5" />
                <p>
                  DIAN publicÃ³ apertura de inscripciones (28-ene-2026) y la CNSC
                  ampliÃ³ el cierre hasta el 7-feb-2026.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-dian-success mt-0.5" />
                <p>
                  La etapa vigente depende del cronograma oficial que publique la
                  CNSC. Revisa siempre avisos oficiales.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-dian-success mt-0.5" />
                <p>
                  La prueba de competencias bÃ¡sicas y funcionales es eliminatoria;
                  se suman comportamental, integridad y valoraciÃ³n de antecedentes.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="https://www.cnsc.gov.co/node/59797"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-dian-navy hover:underline font-medium"
              >
                Ver aviso oficial CNSC â†’
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dian-sand rounded-2xl border border-dian-gold/20 p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <Target className="w-6 h-6 text-dian-navy" />
              <div>
                <p className="text-sm font-semibold text-dian-navy">
                  Estructura de pruebas
                </p>
                <p className="text-xs text-gray-600">
                  Pesos oficiales CNSC por cargo.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {pruebas.map((prueba) => {
                const Icon = prueba.icon;
                return (
                  <div
                    key={prueba.title}
                    className="flex items-start gap-3 bg-white rounded-lg border border-gray-100 px-3 py-2.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-dian-mint flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-dian-navy" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 leading-tight">
                        {prueba.title}
                      </p>
                      <span className="text-[11px] font-semibold text-dian-navy bg-dian-mint px-2 py-0.5 rounded-full inline-block mt-1">
                        {prueba.badge}
                      </span>
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
          className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-10"
        >
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer p-6">
              <h3 className="text-lg font-semibold text-dian-navy">
                Tabla oficial por cargo
              </h3>
              <span className="text-xs text-gray-400 group-open:rotate-180 transition-transform">
                â–¼
              </span>
            </summary>
            <div className="px-6 pb-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-dian-mint px-4 py-2">
                    <p className="text-sm font-semibold text-dian-navy">Analista V</p>
                    <p className="text-[11px] text-gray-600">
                      65% / 15% / 10% + valoraciÃ³n de antecedentes 10% (documental)
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="text-xs uppercase text-gray-500 border-b bg-white">
                        <tr>
                          <th className="py-2 px-4">Prueba</th>
                          <th className="py-2 px-4">CarÃ¡cter</th>
                          <th className="py-2 px-4">Peso</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr className="border-b">
                          <td className="py-2.5 px-4 font-medium text-gray-900">BÃ¡sicas y funcionales</td>
                          <td className="py-2.5 px-4">Eliminatoria</td>
                          <td className="py-2.5 px-4">65%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2.5 px-4 font-medium text-gray-900">Comportamentales</td>
                          <td className="py-2.5 px-4">Clasificatoria</td>
                          <td className="py-2.5 px-4">15%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2.5 px-4 font-medium text-gray-900">Integridad</td>
                          <td className="py-2.5 px-4">Clasificatoria</td>
                          <td className="py-2.5 px-4">10%</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-4 font-medium text-gray-900">ValoraciÃ³n de antecedentes</td>
                          <td className="py-2.5 px-4">Clasificatoria (documental)</td>
                          <td className="py-2.5 px-4">10%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-dian-sand px-4 py-2">
                    <p className="text-sm font-semibold text-dian-navy">Gestor I</p>
                    <p className="text-[11px] text-gray-600">70% / 20% / 10%</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="text-xs uppercase text-gray-500 border-b bg-white">
                        <tr>
                          <th className="py-2 px-4">Prueba</th>
                          <th className="py-2 px-4">CarÃ¡cter</th>
                          <th className="py-2 px-4">Peso</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr className="border-b">
                          <td className="py-2.5 px-4 font-medium text-gray-900">BÃ¡sicas y funcionales</td>
                          <td className="py-2.5 px-4">Eliminatoria</td>
                          <td className="py-2.5 px-4">70%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2.5 px-4 font-medium text-gray-900">Comportamentales</td>
                          <td className="py-2.5 px-4">Clasificatoria</td>
                          <td className="py-2.5 px-4">20%</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-4 font-medium text-gray-900">Integridad</td>
                          <td className="py-2.5 px-4">Clasificatoria</td>
                          <td className="py-2.5 px-4">10%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </motion.div>

        <div id="cargos" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-dian-mint text-dian-navy text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              Cargos disponibles en SIMO
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-dian-navy mb-2 font-[family:var(--font-display)]">
              Analista V y Gestor I
            </h3>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              InformaciÃ³n consolidada con manuales de funciones y oferta vigente.
            </p>
          </motion.div>

          <div className="space-y-4">
            {cargos.map((cargo) => (
              <motion.div
                key={cargo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <details className="bg-white rounded-2xl border border-gray-100 shadow-sm group">
                  <summary className="flex items-start justify-between gap-4 p-6 cursor-pointer">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="text-xl font-bold text-dian-navy">
                          {cargo.title}
                        </h4>
                        <span className="text-xs font-semibold bg-dian-mint text-dian-navy px-3 py-1 rounded-full">
                          {cargo.vacantes}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{cargo.subtitle}</p>
                    </div>
                    <span className="text-xs text-gray-400 mt-2 group-open:rotate-180 transition-transform">
                      â–¼
                    </span>
                  </summary>

                  <div className="px-6 pb-6">
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
                            <li key={item}>â€¢ {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-2">
                          Competencias comportamentales
                        </p>
                        <ul className="space-y-1">
                          {cargo.comportamentales.map((item) => (
                            <li key={item}>â€¢ {item}</li>
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
                          <li key={item}>â€¢ {item}</li>
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
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
