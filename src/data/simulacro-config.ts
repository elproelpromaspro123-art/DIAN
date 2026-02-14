export const SIMULACRO_TOTAL_QUESTIONS = 100;

export function getSimulacroDescription(cargo: "Analista V" | "Gestor I"): string {
  return `Simulacro por fases para ${cargo} con ${SIMULACRO_TOTAL_QUESTIONS} reactivos de entrenamiento basados en fuentes oficiales.`;
}
