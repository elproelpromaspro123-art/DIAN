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

interface Props {
  content: CargoStudyContent;
}

function phaseIcon(phaseId: string) {
  if (phaseId === "fase-1") return Target;
  if (phaseId === "fase-2") return BookOpenCheck;
  return ShieldCheck;
}

export default function CargoStudyClient({ content }: Props) {
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
              Actualizado: {content.lastUpdate}
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
                  <div>
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

                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5 mb-5">
                  <div className="rounded-xl border border-gray-100 bg-dian-gray/60 p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-dian-navy" />
                      Ejes temáticos
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {phase.thematicAxes.map((item) => (
                        <li key={`${content.slug}-${phase.id}-${item}`} className="flex items-start gap-2">
                          <span className="text-dian-navy mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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
                </div>

                <div className="mb-5">
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

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Preguntas de fijación (estudio)</p>
                  <div className="space-y-2">
                    {phase.checkpoints.map((checkpoint) => (
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
              </section>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
