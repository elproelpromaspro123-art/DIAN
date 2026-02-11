import { Question } from "./types";
import { analistaBasicasQuestions } from "./questions-analista-basicas";
import { analistaComportamentalesQuestions } from "./questions-analista-comportamentales";
import { analistaIntegridadQuestions } from "./questions-analista-integridad";

const FASE_1_LABEL =
  "Fase 1 · Competencias básicas y funcionales (Eliminatoria · peso referencial ~60%)";
const FASE_1_TEXT =
  "Base oficial: Manual de funciones Analista V (OPEC 236732), comunicado DIAN del 28-ene-2026 y avisos CNSC de ampliación al 7-feb-2026.";

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

const analistaExtraQuestions: Question[] = [
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En SIMO, el empleo Analista V de esta convocatoria corresponde a la OPEC:",
    options: [
      { letter: "A", text: "236732" },
      { letter: "B", text: "236741" },
      { letter: "C", text: "236819" },
      { letter: "D", text: "236711" },
    ],
    correctAnswer: "A",
    explanation:
      "La oferta oficial del cargo Analista V en este proyecto corresponde a OPEC 236732, con manual de funciones específico.",
  },
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El empleo Analista V de la convocatoria DIAN 2676 está clasificado en el nivel:",
    options: [
      { letter: "A", text: "Técnico" },
      { letter: "B", text: "Asistencial" },
      { letter: "C", text: "Profesional" },
      { letter: "D", text: "Directivo" },
    ],
    correctAnswer: "A",
    explanation:
      "La ficha oficial del empleo ubica Analista V en nivel técnico (código 205, grado 5).",
  },
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En la ficha oficial del Analista V, el código y grado del empleo son:",
    options: [
      { letter: "A", text: "Código 205 · Grado 5" },
      { letter: "B", text: "Código 301 · Grado 1" },
      { letter: "C", text: "Código 205 · Grado 1" },
      { letter: "D", text: "Código 301 · Grado 5" },
    ],
    correctAnswer: "A",
    explanation:
      "El empleo Analista V del proceso DIAN 2676 se identifica oficialmente como código 205, grado 5.",
  },
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Según los avisos oficiales, la ampliación del cierre de inscripciones DIAN 2676 quedó para:",
    options: [
      { letter: "A", text: "7 de febrero de 2026" },
      { letter: "B", text: "6 de febrero de 2026" },
      { letter: "C", text: "10 de febrero de 2026" },
      { letter: "D", text: "28 de enero de 2026" },
    ],
    correctAnswer: "A",
    explanation:
      "La CNSC publicó aviso de ampliación excepcional del plazo hasta el 7-feb-2026 por incidencia en SIMO.",
  },
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En la oferta del Analista V, el número total de vacantes reportadas es:",
    options: [
      { letter: "A", text: "4" },
      { letter: "B", text: "8" },
      { letter: "C", text: "12" },
      { letter: "D", text: "16" },
    ],
    correctAnswer: "A",
    explanation:
      "La información consolidada del cargo Analista V para esta convocatoria reporta 4 vacantes.",
  },
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En experiencia, el Analista V exige:",
    options: [
      { letter: "A", text: "Tres años: dos de experiencia laboral y uno relacionado" },
      { letter: "B", text: "No requiere experiencia" },
      { letter: "C", text: "Un año de experiencia profesional" },
      { letter: "D", text: "Cinco años de experiencia relacionada" },
    ],
    correctAnswer: "A",
    explanation:
      "El manual de funciones del Analista V señala como requisito tres años (dos laborales y uno relacionado).",
  },
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "Un cambio de procedimiento genera resistencia en el equipo. En adaptabilidad, la respuesta más alineada es:",
    options: [
      {
        letter: "A",
        text: "Ajustar el plan de trabajo y acompañar la transición con comunicación clara",
      },
      { letter: "B", text: "Mantener el método anterior para evitar incomodidades" },
      { letter: "C", text: "Esperar instrucciones sin proponer alternativas" },
      { letter: "D", text: "Aplicar el cambio sin explicar su propósito" },
    ],
    correctAnswer: "A",
    explanation:
      "La adaptabilidad evaluada en DIAN privilegia ajuste oportuno, orientación al resultado y apoyo al equipo en el cambio.",
  },
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "Ante una instrucción sensible para otra dependencia, la comunicación efectiva implica:",
    options: [
      { letter: "A", text: "Transmitir el mensaje completo, verificando comprensión y trazabilidad" },
      { letter: "B", text: "Enviar un resumen ambiguo para ahorrar tiempo" },
      { letter: "C", text: "Suponer que la otra parte ya conoce el contexto" },
      { letter: "D", text: "Comunicar solo lo urgente y omitir soportes" },
    ],
    correctAnswer: "A",
    explanation:
      "Las conductas observables de comunicación efectiva priorizan claridad, oportunidad y verificación del entendimiento.",
  },
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "En trabajo en equipo, una conducta esperada es:",
    options: [
      { letter: "A", text: "Coordinar tareas y cumplir acuerdos para objetivos comunes" },
      { letter: "B", text: "Priorizar resultados individuales frente al equipo" },
      { letter: "C", text: "Delegar todo en otros para concentrarse en lo propio" },
      { letter: "D", text: "Evitar retroalimentar para no generar tensión" },
    ],
    correctAnswer: "A",
    explanation:
      "El diccionario comportamental vincula trabajo en equipo con coordinación y cumplimiento de compromisos compartidos.",
  },
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "Comportamiento ético en el contexto DIAN se refleja mejor cuando el servidor:",
    options: [
      { letter: "A", text: "Toma decisiones imparciales, transparentes y ajustadas a norma" },
      { letter: "B", text: "Favorece soluciones informales por rapidez" },
      { letter: "C", text: "Evita documentar decisiones para reducir trámites" },
      { letter: "D", text: "Usa criterios distintos según la persona solicitante" },
    ],
    correctAnswer: "A",
    explanation:
      "La conducta ética observable exige integridad, transparencia y aplicación uniforme de reglas.",
  },
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "Los cinco valores del Código de Integridad DIAN son:",
    options: [
      { letter: "A", text: "Honestidad, Respeto, Compromiso, Diligencia y Justicia" },
      { letter: "B", text: "Lealtad, eficiencia, celeridad, economía y publicidad" },
      { letter: "C", text: "Disciplina, obediencia, jerarquía, reserva y eficacia" },
      { letter: "D", text: "Innovación, liderazgo, estrategia, creatividad y control" },
    ],
    correctAnswer: "A",
    explanation:
      "El Código de Integridad DIAN define explícitamente estos cinco valores como base de conducta pública.",
  },
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "Ante un posible conflicto de interés, la actuación íntegra es:",
    options: [
      { letter: "A", text: "Declararlo oportunamente y apartarse cuando corresponda" },
      { letter: "B", text: "Gestionarlo de forma verbal sin dejar registro" },
      { letter: "C", text: "Continuar la actuación mientras no haya queja" },
      { letter: "D", text: "Consultar solo al final del trámite" },
    ],
    correctAnswer: "A",
    explanation:
      "Los lineamientos éticos DIAN priorizan transparencia y prevención del riesgo de parcialidad en la decisión pública.",
  },
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "En el juramento de integridad, el criterio rector frente a dudas es:",
    options: [
      { letter: "A", text: "Proteger el interés general y la transparencia" },
      { letter: "B", text: "Privilegiar conveniencias personales" },
      { letter: "C", text: "Resolver sin soporte para agilizar" },
      { letter: "D", text: "Aplicar criterios distintos según el solicitante" },
    ],
    correctAnswer: "A",
    explanation:
      "La integridad pública en DIAN exige priorizar bien común, legalidad y transparencia en toda actuación.",
  },
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "Si un ciudadano ofrece un beneficio para acelerar un trámite, la conducta esperada es:",
    options: [
      { letter: "A", text: "Rechazarlo y reportar el hecho por los canales institucionales" },
      { letter: "B", text: "Aceptar y resolverlo con prioridad" },
      { letter: "C", text: "Aceptar solo si no queda registro" },
      { letter: "D", text: "Ignorar la situación para evitar problemas" },
    ],
    correctAnswer: "A",
    explanation:
      "El Código de Integridad y el Código de Ética DIAN rechazan cualquier ventaja indebida y exigen reporte institucional.",
  },
];

const analistaVBaseQuestions = [
  ...withPhase(analistaBasicasQuestions, FASE_1_LABEL, FASE_1_TEXT),
  ...withPhase(
    analistaComportamentalesQuestions,
    FASE_2_LABEL,
    FASE_2_TEXT
  ),
  ...withPhase(analistaIntegridadQuestions, FASE_3_LABEL, FASE_3_TEXT),
  ...analistaExtraQuestions,
];

export const analistaVQuestions: Question[] = analistaVBaseQuestions.map(
  (q, index) => ({
    ...q,
    id: index + 1,
  })
);
