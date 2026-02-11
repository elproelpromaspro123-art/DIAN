import { Question } from "./types";
import { gestorBasicasQuestions } from "./questions-gestor-basicas";
import { gestorComportamentalesQuestions } from "./questions-gestor-comportamentales";
import { gestorIntegridadQuestions } from "./questions-gestor-integridad";

const FASE_1_LABEL =
  "Fase 1 · Competencias básicas y funcionales (Eliminatoria · peso referencial ~60%)";
const FASE_1_TEXT =
  "Base oficial: Manual de funciones Gestor I (OPEC 236741), comunicado DIAN del 28-ene-2026 y avisos CNSC de ampliación al 7-feb-2026.";

const FASE_2_LABEL =
  "Fase 2 · Competencias comportamentales (Clasificatoria · peso referencial ~20%)";
const FASE_2_TEXT =
  "Base oficial: Diccionario de Competencias Comportamentales DIAN y Resolución 065 de 2024 (conductas observables por nivel).";

const FASE_3_LABEL =
  "Fase 3 · Integridad y ética pública (Clasificatoria · peso referencial ~10-20%)";
const FASE_3_TEXT =
  "Base oficial: Código de Integridad DIAN y Código de Ética DIAN (2021).";

function withPhase(
  questions: Question[],
  groupLabel: string,
  groupText: string
): Question[] {
  return questions.map((q) => ({
    ...q,
    groupLabel,
    groupText,
  }));
}

const gestorExtraQuestions: Question[] = [
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En SIMO, el empleo Gestor I de esta convocatoria corresponde a la OPEC:",
    options: [
      { letter: "A", text: "236741" },
      { letter: "B", text: "236732" },
      { letter: "C", text: "236819" },
      { letter: "D", text: "236701" },
    ],
    correctAnswer: "A",
    explanation:
      "La oferta oficial del cargo Gestor I en este proyecto corresponde a OPEC 236741.",
  },
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El cargo Gestor I se clasifica oficialmente en el nivel:",
    options: [
      { letter: "A", text: "Profesional" },
      { letter: "B", text: "Técnico" },
      { letter: "C", text: "Asistencial" },
      { letter: "D", text: "Directivo" },
    ],
    correctAnswer: "A",
    explanation:
      "La ficha oficial indica que Gestor I pertenece al nivel profesional (código 301, grado 1).",
  },
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Según la ficha del empleo Gestor I, el código y grado son:",
    options: [
      { letter: "A", text: "Código 301 · Grado 1" },
      { letter: "B", text: "Código 205 · Grado 5" },
      { letter: "C", text: "Código 301 · Grado 5" },
      { letter: "D", text: "Código 205 · Grado 1" },
    ],
    correctAnswer: "A",
    explanation:
      "En el empleo Gestor I de la convocatoria DIAN 2676, el identificador oficial es código 301 y grado 1.",
  },
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El requisito de experiencia para Gestor I, según el manual de funciones, es:",
    options: [
      { letter: "A", text: "No requiere experiencia" },
      { letter: "B", text: "Un año de experiencia profesional" },
      { letter: "C", text: "Dos años de experiencia laboral" },
      { letter: "D", text: "Tres años: dos laborales y uno relacionado" },
    ],
    correctAnswer: "A",
    explanation:
      "El manual del Gestor I indica expresamente que no requiere experiencia.",
  },
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En esta convocatoria, el total de vacantes del Gestor I es:",
    options: [
      { letter: "A", text: "8" },
      { letter: "B", text: "4" },
      { letter: "C", text: "12" },
      { letter: "D", text: "16" },
    ],
    correctAnswer: "A",
    explanation:
      "La información oficial consolidada reporta 8 vacantes para el empleo Gestor I.",
  },
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El subproceso central del Gestor I en el manual es:",
    options: [
      {
        letter: "A",
        text: "Recursos administrativos, operación logística, compras y contratos",
      },
      { letter: "B", text: "Administración de cartera y devoluciones" },
      { letter: "C", text: "Cobro coactivo y cobro persuasivo" },
      { letter: "D", text: "Fiscalización tributaria" },
    ],
    correctAnswer: "A",
    explanation:
      "El manual del cargo ubica al Gestor I en el subproceso de recursos administrativos, logística, compras y contratos.",
  },
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "En una contingencia operativa, la conducta más alineada con solución de problemas es:",
    options: [
      { letter: "A", text: "Analizar causas, proponer opciones y ejecutar la alternativa viable" },
      { letter: "B", text: "Esperar sin actuar hasta que otro equipo resuelva" },
      { letter: "C", text: "Aplicar una salida informal sin trazabilidad" },
      { letter: "D", text: "Posponer el caso para evitar riesgo" },
    ],
    correctAnswer: "A",
    explanation:
      "La competencia exige análisis estructurado, toma de decisión y respuesta oportuna con soporte.",
  },
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "Una conducta observable de innovación en Gestor I es:",
    options: [
      { letter: "A", text: "Proponer mejoras viables para optimizar el proceso" },
      { letter: "B", text: "Conservar siempre el método tradicional" },
      { letter: "C", text: "Aplicar cambios sin validar impacto" },
      { letter: "D", text: "Evitar ajustes por temor al error" },
    ],
    correctAnswer: "A",
    explanation:
      "La innovación comportamental se evidencia en propuestas de mejora con foco en efectividad y servicio.",
  },
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "En adaptabilidad, una respuesta adecuada frente a un nuevo sistema institucional es:",
    options: [
      { letter: "A", text: "Apropiarlo rápidamente y apoyar al equipo en su adopción" },
      { letter: "B", text: "Evitar su uso hasta que sea obligatorio" },
      { letter: "C", text: "Delegar su aprendizaje por completo" },
      { letter: "D", text: "Usarlo solo en casos excepcionales" },
    ],
    correctAnswer: "A",
    explanation:
      "La adaptabilidad en DIAN premia apertura al cambio, aprendizaje y contribución al ajuste colectivo.",
  },
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "Comportamiento ético en el rol Gestor I significa, principalmente:",
    options: [
      { letter: "A", text: "Actuar con transparencia y equidad en todas las decisiones" },
      { letter: "B", text: "Resolver primero los casos de conocidos" },
      { letter: "C", text: "Reducir controles para acelerar respuestas" },
      { letter: "D", text: "Aplicar criterios discrecionales no documentados" },
    ],
    correctAnswer: "A",
    explanation:
      "La competencia ética comportamental exige imparcialidad, transparencia y sujeción a la norma.",
  },
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "En integridad pública DIAN, una decisión correcta ante presión externa es:",
    options: [
      { letter: "A", text: "Mantener legalidad y registrar la actuación de forma verificable" },
      { letter: "B", text: "Ceder para evitar conflicto" },
      { letter: "C", text: "Negociar excepciones no previstas" },
      { letter: "D", text: "Resolver verbalmente sin soportes" },
    ],
    correctAnswer: "A",
    explanation:
      "Integridad y ética institucional implican proteger la legalidad y la trazabilidad del acto administrativo.",
  },
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "Los valores del Código de Integridad deben aplicarse en Gestor I para:",
    options: [
      { letter: "A", text: "Orientar decisiones al bien público y al servicio ciudadano" },
      { letter: "B", text: "Reducir controles internos" },
      { letter: "C", text: "Sustituir la normativa vigente" },
      { letter: "D", text: "Limitar la responsabilidad individual" },
    ],
    correctAnswer: "A",
    explanation:
      "El propósito del código es guiar conductas públicas íntegras y coherentes con la misión institucional.",
  },
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "Cuando aparece un ofrecimiento indebido por un trámite, la acción ética correcta es:",
    options: [
      { letter: "A", text: "Rechazar y reportar por los canales definidos" },
      { letter: "B", text: "Aceptar si no afecta el resultado" },
      { letter: "C", text: "Posponer la decisión sin informar" },
      { letter: "D", text: "Resolver el caso antes de reportar" },
    ],
    correctAnswer: "A",
    explanation:
      "Los códigos de integridad y ética son explícitos en rechazo de beneficios indebidos y reporte institucional.",
  },
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "El enfoque de justicia en integridad pública implica:",
    options: [
      { letter: "A", text: "Trato equitativo y aplicación imparcial de las reglas" },
      { letter: "B", text: "Preferencias por antigüedad del solicitante" },
      { letter: "C", text: "Atención selectiva por conveniencia" },
      { letter: "D", text: "Decisiones sin motivación" },
    ],
    correctAnswer: "A",
    explanation:
      "La justicia, como valor del Código de Integridad, exige igualdad de trato y motivación objetiva de decisiones.",
  },
];

const gestorIBaseQuestions = [
  ...withPhase(gestorBasicasQuestions, FASE_1_LABEL, FASE_1_TEXT),
  ...withPhase(gestorComportamentalesQuestions, FASE_2_LABEL, FASE_2_TEXT),
  ...withPhase(gestorIntegridadQuestions, FASE_3_LABEL, FASE_3_TEXT),
  ...gestorExtraQuestions,
];

export const gestorIQuestions: Question[] = gestorIBaseQuestions.map((q, index) => ({
  ...q,
  id: index + 1,
}));
