"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpenCheck,
  ExternalLink,
  FileCheck2,
  Flag,
  Info,
  ShieldCheck,
  Target,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { CargoStudyContent } from "@/data/cargo-study-content";
import { formatTodayBogotaLabel } from "@/data/official-dian2676";

interface Props {
  content: CargoStudyContent;
}

type AxisLesson = {
  title: string;
  whatIs: string;
  examFocus: string;
};

function phaseIcon(phaseId: string) {
  if (phaseId === "fase-1") return Target;
  if (phaseId === "fase-2") return BookOpenCheck;
  return ShieldCheck;
}

function splitAxis(axis: string): { title: string; scope: string } {
  const parts = axis.split(":");
  if (parts.length >= 2) {
    const title = parts[0].trim();
    const scope = parts.slice(1).join(":").trim();
    return { title, scope };
  }
  return { title: axis.trim(), scope: "" };
}

function explainAxis(axis: string, phaseTitle: string): AxisLesson {
  const { title, scope } = splitAxis(axis);
  const normalized = `${title} ${scope}`.toLowerCase();

  if (normalized.includes("manual de funciones")) {
    return {
      title,
      whatIs:
        "Define el propósito del cargo, su proceso institucional y el subproceso donde realmente opera. Es la frontera entre funciones válidas y funciones de otros cargos.",
      examFocus:
        "Te evalúan en casos donde debes identificar qué le corresponde ejecutar al cargo y qué debe escalarse o remitirse.",
    };
  }

  if (normalized.includes("cobro persuasivo") || normalized.includes("cobro coactivo")) {
    return {
      title,
      whatIs:
        "Diferencia la gestión de pago voluntario frente a la ejecución administrativa forzosa. Incluye secuencia, actos y soporte legal.",
      examFocus:
        "Suele aparecer en preguntas de secuencia procedimental, plazos y elección de la actuación correcta según la etapa.",
    };
  }

  if (normalized.includes("mandamiento de pago") || normalized.includes("título ejecutivo")) {
    return {
      title,
      whatIs:
        "Es la base jurídica para iniciar cobro coactivo y habilitar actuaciones posteriores como excepciones y medidas de ejecución.",
      examFocus:
        "Evalúan si reconoces requisitos del título y cómo responder ante excepciones del deudor.",
    };
  }

  if (normalized.includes("medidas cautelares") || normalized.includes("embargo")) {
    return {
      title,
      whatIs:
        "Son mecanismos para asegurar el recaudo, pero deben aplicarse con legalidad, proporcionalidad y debido proceso.",
      examFocus:
        "Te plantean dilemas entre urgencia operativa y garantías del administrado para validar criterio técnico-jurídico.",
    };
  }

  if (normalized.includes("devoluciones") || normalized.includes("compensaciones")) {
    return {
      title,
      whatIs:
        "Implica revisar requisitos, soportes y consistencia documental para proyectar decisiones fundadas y trazables.",
      examFocus:
        "Evalúan identificación de requisitos faltantes, control de calidad documental y motivación del acto administrativo.",
    };
  }

  if (normalized.includes("control extensivo")) {
    return {
      title,
      whatIs:
        "Es la verificación masiva de obligaciones para detectar incumplimientos y activar acciones de corrección o recaudo.",
      examFocus:
        "Aparece en escenarios con cruces de información y priorización de acciones de control.",
    };
  }

  if (normalized.includes("dian: naturaleza") || normalized.includes("naturaleza jurídica")) {
    return {
      title,
      whatIs:
        "Explica qué es la DIAN, su objeto institucional y su estructura de dirección para ubicar competencias y jerarquía.",
      examFocus:
        "Evalúan conceptos institucionales base para resolver preguntas de competencia y responsabilidad funcional.",
    };
  }

  if (
    normalized.includes("cpaca") ||
    normalized.includes("mipg") ||
    normalized.includes("transparencia") ||
    normalized.includes("pqrsf")
  ) {
    return {
      title,
      whatIs:
        "Es el marco transversal de función pública: debido proceso, atención al ciudadano, gestión por resultados y acceso a información.",
      examFocus:
        "Suele evaluarse en casos administrativos donde debes elegir la respuesta más legal, trazable y orientada al servicio.",
    };
  }

  if (normalized.includes("comportamiento ético")) {
    return {
      title,
      whatIs:
        "Mide integridad observable en decisiones reales, especialmente bajo presión o conflicto de intereses.",
      examFocus:
        "Te ponen escenarios con atajos aparentes para validar si priorizas legalidad, imparcialidad y reporte institucional.",
    };
  }

  if (normalized.includes("adaptabilidad")) {
    return {
      title,
      whatIs:
        "Evalúa cómo ajustas tu desempeño ante cambios de norma, sistema o carga operativa sin perder calidad ni control.",
      examFocus:
        "Aparece en preguntas de transición y mejora donde debes escoger respuestas proactivas y sostenibles.",
    };
  }

  if (normalized.includes("comunicación efectiva")) {
    return {
      title,
      whatIs:
        "No es solo transmitir datos: exige claridad técnica, canal adecuado y verificación de comprensión.",
      examFocus:
        "Se evalúa en casos con mensajes incompletos o ambiguos para identificar la conducta comunicativa correcta.",
    };
  }

  if (normalized.includes("trabajo en equipo")) {
    return {
      title,
      whatIs:
        "Busca coordinación real entre áreas y seguimiento de acuerdos para resultados compartidos.",
      examFocus:
        "Te evalúan con conflictos de prioridades para validar colaboración efectiva, no esfuerzo individual aislado.",
    };
  }

  if (normalized.includes("innovación")) {
    return {
      title,
      whatIs:
        "En DIAN, innovar significa proponer mejoras viables con soporte técnico, impacto medible y trazabilidad.",
      examFocus:
        "Aparecen casos donde debes diferenciar mejora estructurada de improvisación riesgosa.",
    };
  }

  if (normalized.includes("solución de problemas")) {
    return {
      title,
      whatIs:
        "Implica analizar causas, priorizar alternativas y ejecutar planes de acción con control de resultados.",
      examFocus:
        "Evalúan tu capacidad de decidir ante contingencias operativas sin romper controles institucionales.",
    };
  }

  if (normalized.includes("siif") || normalized.includes("secop")) {
    return {
      title,
      whatIs:
        "Corresponde al uso de sistemas oficiales de gestión contractual o financiera con trazabilidad verificable.",
      examFocus:
        "Suelen preguntar por uso correcto del sistema, soporte documental y consecuencias de omitir registro.",
    };
  }

  if (normalized.includes("gestión documental") || normalized.includes("trd")) {
    return {
      title,
      whatIs:
        "Organiza evidencias del proceso para auditoría, defensa jurídica, memoria institucional y control.",
      examFocus:
        "Evalúan si identificas qué soporte debe conservarse, cómo clasificarlo y qué riesgos genera omitirlo.",
    };
  }

  if (normalized.includes("custodia") || normalized.includes("mercancías")) {
    return {
      title,
      whatIs:
        "Incluye ingreso, inventario, conservación y disposición de bienes bajo cadena de trazabilidad y control.",
      examFocus:
        "Aparecen escenarios con presión operativa donde debes mantener evidencia y cumplimiento procedimental.",
    };
  }

  if (normalized.includes("integridad") || normalized.includes("ética")) {
    return {
      title,
      whatIs:
        "Integra valores, principios y conducta pública para decidir correctamente en dilemas del servicio.",
      examFocus:
        "Evalúan la opción más defendible ante control: interés general, legalidad, imparcialidad y transparencia.",
    };
  }

  const fallbackScope = scope || axis;
  return {
    title,
    whatIs: `Este eje aborda ${fallbackScope.toLowerCase()}.`,
    examFocus: `En ${phaseTitle.toLowerCase()} se evalúa en preguntas aplicadas, no solo con definición teórica.`,
  };
}

export default function CargoStudyClient({ content }: Props) {
  const [completedAxes, setCompletedAxes] = useState<Record<string, boolean>>({});
  const [expandedAnswers, setExpandedAnswers] = useState<Record<string, boolean>>({});
  const [expandAllByPhase, setExpandAllByPhase] = useState<Record<string, boolean>>({});
  const todayLabel = formatTodayBogotaLabel();

  const totals = useMemo(() => {
    const totalAxes = content.phases.reduce(
      (acc, phase) => acc + phase.thematicAxes.length,
      0
    );
    const completed = Object.values(completedAxes).filter(Boolean).length;
    return { totalAxes, completed };
  }, [content.phases, completedAxes]);

  return (
    <main className="min-h-screen bg-dian-gray">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-dian-navy hover:underline text-sm mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <section className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-dian-mint text-dian-navy">
              {content.cargo}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-dian-sand text-dian-navy">
              OPEC {content.opec}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
              Verificado: {todayLabel} · {content.lastUpdate}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-dian-navy mb-2 font-[family:var(--font-display)]">
            Estudio Integrado · {content.cargo}
          </h1>
          <p className="text-sm text-gray-600 max-w-3xl">
            {content.subtitle}. Esta guía organiza la preparación por fases para que estudies
            primero lo crítico (eliminatorio) y luego lo clasificatorio, con fuentes oficiales
            enlazadas en cada bloque.
          </p>

          <div className="mt-4 rounded-xl border border-dian-navy/15 bg-dian-mint/40 p-4">
            <p className="text-xs text-gray-700">
              Avance global de ejes temáticos:{" "}
              <span className="font-semibold text-dian-navy">
                {totals.completed}/{totals.totalAxes}
              </span>
            </p>
            <div className="mt-2 h-2 rounded-full bg-white border border-dian-navy/10 overflow-hidden">
              <div
                className="h-full bg-dian-navy transition-all"
                style={{
                  width:
                    totals.totalAxes > 0
                      ? `${Math.round((totals.completed / totals.totalAxes) * 100)}%`
                      : "0%",
                }}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 text-xs">
            <div className="rounded-xl bg-dian-gray p-3 border border-gray-100">
              <p className="font-semibold text-gray-800">Nivel</p>
              <p className="text-gray-600">{content.level}</p>
            </div>
            <div className="rounded-xl bg-dian-gray p-3 border border-gray-100">
              <p className="font-semibold text-gray-800">Código y grado</p>
              <p className="text-gray-600">{content.codeGrade}</p>
            </div>
            <div className="rounded-xl bg-dian-gray p-3 border border-gray-100">
              <p className="font-semibold text-gray-800">Vacantes</p>
              <p className="text-gray-600">{content.vacancies}</p>
            </div>
            <div className="rounded-xl bg-dian-gray p-3 border border-gray-100">
              <p className="font-semibold text-gray-800">Asignación salarial</p>
              <p className="text-gray-600">{content.salary} · {content.salaryYear}</p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-dian-mint/50 border border-dian-navy/15 p-4">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-dian-navy mt-0.5" />
              <p className="text-xs text-gray-700 leading-relaxed">
                {content.enrollmentWindow} Esta guía usa únicamente documentos y avisos oficiales.
                Los ejercicios son de entrenamiento pedagógico basados en esas fuentes y no
                corresponden a ítems reservados de la CNSC.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {content.sources.map((source) => (
              <a
                key={`${content.slug}-${source.label}`}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-white border border-dian-navy/20 text-dian-navy hover:bg-dian-mint/50"
              >
                {source.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm mb-6">
          <p className="text-sm font-semibold text-dian-navy mb-3">Ruta por fases</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {content.phases.map((phase) => (
              <a
                key={`${content.slug}-${phase.id}`}
                href={`#${phase.id}`}
                className="rounded-xl border border-gray-200 p-4 hover:border-dian-navy hover:bg-dian-mint/30 transition-colors"
              >
                <p className="text-xs font-semibold text-gray-500 mb-1">{phase.character}</p>
                <p className="text-sm font-bold text-gray-900 mb-1">{phase.title}</p>
                <p className="text-xs text-dian-navy">Peso referencial {phase.weight}</p>
              </a>
            ))}
          </div>
        </section>

        <div className="space-y-6">
          {content.phases.map((phase) => {
            const PhaseIcon = phaseIcon(phase.id);
            const phaseKey = `${content.slug}-${phase.id}`;
            const completedInPhase = phase.thematicAxes.reduce((acc, _item, index) => {
              const axisKey = `${phaseKey}-${index}`;
              return acc + (completedAxes[axisKey] ? 1 : 0);
            }, 0);
            const phaseProgress =
              phase.thematicAxes.length > 0
                ? Math.round((completedInPhase / phase.thematicAxes.length) * 100)
                : 0;
            const allExpanded = expandAllByPhase[phaseKey] ?? false;
            const extraCheckpoints = phase.checkpoints.slice(phase.thematicAxes.length);

            return (
              <section
                key={`${content.slug}-${phase.id}-section`}
                id={phase.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-dian-mint flex items-center justify-center shrink-0">
                    <PhaseIcon className="w-5 h-5 text-dian-navy" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-bold text-dian-navy">{phase.title}</h2>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-dian-sand text-dian-navy">
                        {phase.character}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-dian-mint text-dian-navy">
                        Peso {phase.weight}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-4">{phase.whatEvaluates}</p>

                <div className="rounded-xl border border-gray-100 bg-dian-gray/60 p-4 mb-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-dian-navy" />
                      Estudio progresivo por ejes
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-600">
                        {completedInPhase}/{phase.thematicAxes.length} leídos ({phaseProgress}%)
                      </span>
                      <button
                        onClick={() =>
                          setExpandAllByPhase((prev) => ({
                            ...prev,
                            [phaseKey]: !allExpanded,
                          }))
                        }
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg border border-dian-navy/20 text-dian-navy hover:bg-dian-mint/50"
                      >
                        {allExpanded ? "Colapsar respuestas" : "Expandir respuestas"}
                      </button>
                    </div>
                  </div>

                  <div className="h-2 rounded-full bg-white border border-dian-navy/10 overflow-hidden mb-4">
                    <div
                      className="h-full bg-dian-navy transition-all"
                      style={{ width: `${phaseProgress}%` }}
                    />
                  </div>

                  <div className="space-y-3">
                    {phase.thematicAxes.map((axis, index) => {
                      const axisKey = `${phaseKey}-${index}`;
                      const checkpoint = phase.checkpoints[index];
                      const isRead = completedAxes[axisKey] ?? false;
                      const axisExpanded = allExpanded || (expandedAnswers[axisKey] ?? false);
                      const lesson = explainAxis(axis, phase.title);

                      return (
                        <article
                          key={`${content.slug}-${phase.id}-${axisKey}`}
                          className={`rounded-xl border p-4 ${
                            isRead
                              ? "border-dian-navy/30 bg-dian-mint/20"
                              : "border-gray-200 bg-white"
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <p className="text-xs font-semibold text-gray-500">
                              Eje {index + 1}
                            </p>
                            <button
                              onClick={() =>
                                setCompletedAxes((prev) => ({
                                  ...prev,
                                  [axisKey]: !isRead,
                                }))
                              }
                              className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${
                                isRead
                                  ? "border-dian-navy/30 text-dian-navy bg-dian-mint"
                                  : "border-gray-300 text-gray-600 hover:bg-gray-50"
                              }`}
                            >
                              {isRead ? "Leído" : "Marcar como leído"}
                            </button>
                          </div>

                          <h3 className="text-sm font-semibold text-gray-900 mb-2">
                            {lesson.title}
                          </h3>
                          <p className="text-sm text-gray-700 mb-2">
                            <span className="font-semibold text-gray-900">Qué es:</span>{" "}
                            {lesson.whatIs}
                          </p>
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold text-gray-900">Cómo lo evalúan:</span>{" "}
                            {lesson.examFocus}
                          </p>

                          {checkpoint && (
                            <div className="mt-3 rounded-lg border border-dian-navy/15 bg-white p-3">
                              <p className="text-xs font-semibold text-dian-navy mb-1">
                                Chequeo rápido del eje
                              </p>
                              <p className="text-sm text-gray-800 mb-2">{checkpoint.prompt}</p>
                              <button
                                onClick={() =>
                                  setExpandedAnswers((prev) => ({
                                    ...prev,
                                    [axisKey]: !axisExpanded,
                                  }))
                                }
                                className="text-xs font-semibold text-dian-navy hover:underline"
                              >
                                {axisExpanded ? "Ocultar respuesta" : "Ver respuesta"}
                              </button>
                              {axisExpanded && (
                                <div className="mt-2 rounded-lg bg-dian-mint/40 border border-dian-navy/10 p-3">
                                  <p className="text-sm text-gray-800">{checkpoint.answer}</p>
                                  <p className="text-xs text-gray-500 mt-2">Fuente: {checkpoint.source}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                </div>

                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5 mb-5">
                  <div className="rounded-xl border border-gray-100 bg-dian-sand/50 p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Flag className="w-4 h-4 text-dian-navy" />
                      Resumen rápido
                    </p>
                    <div className="space-y-2 text-sm text-gray-700">
                      {phase.quickSummary.map((line) => (
                        <p key={`${content.slug}-${phase.id}-${line}`}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-white p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Fuentes de esta fase</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.sources.map((source) => (
                        <a
                          key={`${content.slug}-${phase.id}-${source.label}`}
                          href={source.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-dian-mint/40 border border-dian-navy/15 text-dian-navy hover:bg-dian-mint"
                        >
                          {source.label}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {extraCheckpoints.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">
                      Preguntas de fijación adicionales
                    </p>
                    <div className="space-y-2">
                      {extraCheckpoints.map((checkpoint) => (
                        <details
                          key={`${content.slug}-${phase.id}-${checkpoint.id}`}
                          className="group rounded-xl border border-gray-200 bg-white"
                        >
                          <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-gray-800 flex items-center justify-between gap-3">
                            <span>{checkpoint.prompt}</span>
                            <span className="text-xs text-dian-navy font-semibold group-open:hidden">Ver respuesta</span>
                            <span className="text-xs text-dian-navy font-semibold hidden group-open:inline">Ocultar</span>
                          </summary>
                          <div className="px-4 pb-4">
                            <div className="rounded-lg bg-dian-mint/50 border border-dian-navy/10 p-3">
                              <p className="text-sm text-gray-800">{checkpoint.answer}</p>
                              <p className="text-xs text-gray-500 mt-2">Fuente: {checkpoint.source}</p>
                            </div>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
