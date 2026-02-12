import { Question } from "./types";
import { analistaBasicasQuestions } from "./questions-analista-basicas";
import { analistaComportamentalesQuestions } from "./questions-analista-comportamentales";
import { analistaIntegridadQuestions } from "./questions-analista-integridad";

const FASE_1_LABEL =
  "Fase 1 · Competencias funcionales (Eliminatoria · 65%)";
const FASE_1_TEXT =
  "Base oficial: Manual de funciones Analista V (OPEC 236732 y 236756), Acuerdo 21 DIAN 2676, Estatuto Tributario. Puntaje mínimo aprobatorio: 70/100.";

const FASE_2_LABEL =
  "Fase 2 · Competencias comportamentales (Clasificatoria · 15%)";
const FASE_2_TEXT =
  "Base oficial: Diccionario de Competencias Comportamentales DIAN (Resolución 065 de 2024). Conductas observables nivel técnico.";

const FASE_3_LABEL =
  "Fase 3 · Integridad y ética pública (Clasificatoria · 10%)";
const FASE_3_TEXT =
  "Base oficial: Código de Integridad DIAN y Código de Ética DIAN (2021). Valores, principios y dilemas éticos.";

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
  // ── 1. OPEC / Cargo info ──────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En SIMO, una OPEC oficial vigente del empleo Analista V (ingreso DIAN 2676) es:",
    options: [
      { letter: "A", text: "236741" },
      { letter: "B", text: "236732" },
      { letter: "C", text: "236819" },
      { letter: "D", text: "236711" },
    ],
    correctAnswer: "B",
    explanation:
      "La oferta oficial de Analista V en ingreso DIAN 2676 incluye OPEC 236732 y OPEC 236756; esta pregunta valida una de ellas (236732).",
  },
  // ── 2. Nivel del empleo ───────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El empleo Analista V de la convocatoria DIAN 2676 está clasificado en el nivel:",
    options: [
      { letter: "A", text: "Profesional" },
      { letter: "B", text: "Directivo" },
      { letter: "C", text: "Técnico" },
      { letter: "D", text: "Asistencial" },
    ],
    correctAnswer: "C",
    explanation:
      "La ficha oficial del empleo ubica Analista V en nivel técnico (código 205, grado 5).",
  },
  // ── 3. Código y grado ─────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En la ficha oficial del Analista V, el código y grado del empleo son:",
    options: [
      { letter: "A", text: "Código 301 · Grado 1" },
      { letter: "B", text: "Código 205 · Grado 1" },
      { letter: "C", text: "Código 301 · Grado 5" },
      { letter: "D", text: "Código 205 · Grado 5" },
    ],
    correctAnswer: "D",
    explanation:
      "El empleo Analista V del proceso DIAN 2676 se identifica oficialmente como código 205, grado 5.",
  },
  // ── 4. Vacantes ───────────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En la oferta consolidada del Analista V (OPEC 236732 + 236756), el total de vacantes es:",
    options: [
      { letter: "A", text: "4" },
      { letter: "B", text: "10" },
      { letter: "C", text: "14" },
      { letter: "D", text: "24" },
    ],
    correctAnswer: "C",
    explanation:
      "El consolidado oficial SIMO para Analista V en ingreso DIAN 2676 es 14 vacantes (236732: 4 y 236756: 10).",
  },
  // ── 5. Experiencia ────────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En experiencia, el Analista V exige:",
    options: [
      { letter: "A", text: "No requiere experiencia" },
      { letter: "B", text: "Tres años: dos de experiencia laboral y uno relacionado" },
      { letter: "C", text: "Un año de experiencia profesional" },
      { letter: "D", text: "Cinco años de experiencia relacionada" },
    ],
    correctAnswer: "B",
    explanation:
      "El manual de funciones del Analista V señala como requisito tres años (dos laborales y uno relacionado).",
  },
  // ── 6. Peso Fase 1 (Acuerdo 21) ──────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Según el Acuerdo 21 DIAN 2676, ¿cuál es el peso de la Fase 1 (Competencias Funcionales) para el Analista V?",
    options: [
      { letter: "A", text: "70%" },
      { letter: "B", text: "60%" },
      { letter: "C", text: "65%" },
      { letter: "D", text: "50%" },
    ],
    correctAnswer: "C",
    explanation:
      "El Acuerdo 21 establece que para cargos con experiencia (Tabla 7), la Fase 1 tiene peso de 65%.",
  },
  // ── 7. Carácter eliminatorio ──────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En el Acuerdo 21, la Fase 1 del Analista V tiene carácter:",
    options: [
      { letter: "A", text: "Clasificatorio" },
      { letter: "B", text: "Eliminatorio" },
      { letter: "C", text: "Informativo" },
      { letter: "D", text: "Complementario" },
    ],
    correctAnswer: "B",
    explanation:
      "La Fase 1 de Competencias Funcionales es eliminatoria: si no se alcanza el mínimo aprobatorio de 70/100, el aspirante queda eliminado.",
  },
  // ── 8. Puntaje mínimo aprobatorio ─────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "¿Cuál es el puntaje mínimo aprobatorio en la Fase 1 para el Analista V?",
    options: [
      { letter: "A", text: "60/100" },
      { letter: "B", text: "80/100" },
      { letter: "C", text: "50/100" },
      { letter: "D", text: "70/100" },
    ],
    correctAnswer: "D",
    explanation:
      "El Acuerdo 21 fija un mínimo aprobatorio de 70/100 en la prueba eliminatoria de competencias funcionales.",
  },
  // ── 9. Peso Fase 2 ────────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "Según el Acuerdo 21, el peso de la Fase 2 (Competencias Comportamentales) para el Analista V es:",
    options: [
      { letter: "A", text: "15%" },
      { letter: "B", text: "20%" },
      { letter: "C", text: "10%" },
      { letter: "D", text: "25%" },
    ],
    correctAnswer: "A",
    explanation:
      "Para cargos con experiencia (Tabla 7), las competencias comportamentales tienen peso de 15%.",
  },
  // ── 10. Peso Fase 3 ───────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "El peso de la Fase 3 (Prueba de Integridad) para el Analista V según el Acuerdo 21 es:",
    options: [
      { letter: "A", text: "20%" },
      { letter: "B", text: "5%" },
      { letter: "C", text: "10%" },
      { letter: "D", text: "15%" },
    ],
    correctAnswer: "C",
    explanation:
      "La Prueba de Integridad tiene peso de 10% y carácter clasificatorio según la Tabla 7 del Acuerdo 21.",
  },
  // ── 11. Decreto Ley 927 de 2023 ───────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El Decreto Ley 927 de 2023 regula:",
    options: [
      { letter: "A", text: "El régimen disciplinario de los servidores públicos" },
      { letter: "B", text: "La contratación estatal" },
      { letter: "C", text: "El Sistema Específico de Carrera Administrativa de la DIAN" },
      { letter: "D", text: "El Estatuto Tributario Nacional" },
    ],
    correctAnswer: "C",
    explanation:
      "El Decreto Ley 927 de 2023 establece el Sistema Específico de Carrera Administrativa de la DIAN, base jurídica de la convocatoria.",
  },
  // ── 12. CNSC rol ──────────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "¿Qué entidad administra y vigila el concurso de méritos DIAN 2676?",
    options: [
      { letter: "A", text: "La Contraloría General de la República" },
      { letter: "B", text: "La Procuraduría General de la Nación" },
      { letter: "C", text: "La DIAN de manera autónoma" },
      { letter: "D", text: "La Comisión Nacional del Servicio Civil (CNSC)" },
    ],
    correctAnswer: "D",
    explanation:
      "La CNSC es la entidad responsable de administrar y vigilar los concursos de méritos para cargos de carrera administrativa, incluidos los de la DIAN.",
  },
  // ── 13. Contribución individual: cobro coactivo ───────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Una contribución individual del Analista V relacionada con cobro coactivo es:",
    options: [
      { letter: "A", text: "Elaborar estudios de mercado para contratación" },
      { letter: "B", text: "Proyectar actos administrativos de mandamiento de pago y medidas cautelares" },
      { letter: "C", text: "Auditar estados financieros de la entidad" },
      { letter: "D", text: "Diseñar políticas salariales internas" },
    ],
    correctAnswer: "B",
    explanation:
      "El manual de funciones del Analista V incluye proyectar actos administrativos de cobro coactivo como contribución individual.",
  },
  // ── 14. Contribución individual: devoluciones ─────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En materia de devoluciones, una función del Analista V es:",
    options: [
      { letter: "A", text: "Verificar requisitos y proyectar resoluciones de devolución y compensación" },
      { letter: "B", text: "Aprobar directamente los pagos sin revisión" },
      { letter: "C", text: "Negociar acuerdos de pago con contribuyentes" },
      { letter: "D", text: "Fijar tarifas del impuesto de renta" },
    ],
    correctAnswer: "A",
    explanation:
      "Según el manual, el Analista V verifica requisitos formales y sustanciales y proyecta actos administrativos de devolución y compensación.",
  },
  // ── 15. Estatuto Tributario: término devolución ───────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Según el Estatuto Tributario, el término general para que la DIAN efectúe devoluciones de saldos a favor es:",
    options: [
      { letter: "A", text: "30 días hábiles" },
      { letter: "B", text: "90 días hábiles" },
      { letter: "C", text: "50 días hábiles" },
      { letter: "D", text: "15 días hábiles" },
    ],
    correctAnswer: "C",
    explanation:
      "El artículo 855 del Estatuto Tributario establece un término de 50 días hábiles para la devolución de saldos a favor.",
  },
  // ── 16. Creación DIAN ─────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "La DIAN fue creada mediante:",
    options: [
      { letter: "A", text: "Ley 80 de 1993" },
      { letter: "B", text: "Decreto 2117 de 1992" },
      { letter: "C", text: "Decreto 4048 de 2008" },
      { letter: "D", text: "Constitución Política de 1991" },
    ],
    correctAnswer: "B",
    explanation:
      "La DIAN fue creada por el Decreto 2117 de 1992, que fusionó la Dirección de Impuestos Nacionales con la Dirección de Aduanas Nacionales.",
  },
  // ── 17. Direccion General DIAN (regla institucional) ──────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Segun la naturaleza juridica de la DIAN, el Director General es nombrado por:",
    options: [
      { letter: "A", text: "El Presidente de la Republica" },
      { letter: "B", text: "La Comision Nacional del Servicio Civil" },
      { letter: "C", text: "El Consejo de Estado" },
      { letter: "D", text: "El Ministerio de Justicia" },
    ],
    correctAnswer: "A",
    explanation:
      "La DIAN es una UAE adscrita al Ministerio de Hacienda, y su Director General es de nombramiento presidencial segun el marco organico vigente.",
  },
  // ── 18. Valoración de antecedentes ────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En el esquema de evaluación del Analista V, la Valoración de Antecedentes (10%) es de tipo:",
    options: [
      { letter: "A", text: "Prueba escrita presencial" },
      { letter: "B", text: "Entrevista oral con jurado" },
      { letter: "C", text: "Documental (estudio de hojas de vida y soportes)" },
      { letter: "D", text: "Prueba práctica en computador" },
    ],
    correctAnswer: "C",
    explanation:
      "La valoración de antecedentes es una etapa documental donde se revisan estudios y experiencia acreditados por el aspirante.",
  },
  // ── 19. Comportamental: adaptabilidad en cobro ────────────────────
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "Un cambio en el procedimiento de cobro genera resistencia en el equipo. En adaptabilidad, la respuesta más alineada es:",
    options: [
      { letter: "A", text: "Mantener el método anterior para evitar incomodidades" },
      { letter: "B", text: "Ajustar el plan de trabajo y acompañar la transición con comunicación clara" },
      { letter: "C", text: "Esperar instrucciones sin proponer alternativas" },
      { letter: "D", text: "Aplicar el cambio sin explicar su propósito" },
    ],
    correctAnswer: "B",
    explanation:
      "La adaptabilidad evaluada en DIAN privilegia ajuste oportuno, orientación al resultado y apoyo al equipo en el cambio.",
  },
  // ── 20. Comportamental: comunicación efectiva ─────────────────────
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "Ante una instrucción urgente sobre una solicitud de devolución, la comunicación efectiva implica:",
    options: [
      { letter: "A", text: "Enviar un resumen ambiguo para ahorrar tiempo" },
      { letter: "B", text: "Suponer que la otra parte ya conoce el contexto" },
      { letter: "C", text: "Transmitir el mensaje completo, verificando comprensión y trazabilidad" },
      { letter: "D", text: "Comunicar solo lo urgente y omitir soportes" },
    ],
    correctAnswer: "C",
    explanation:
      "Las conductas observables de comunicación efectiva priorizan claridad, oportunidad y verificación del entendimiento.",
  },
  // ── 21. Comportamental: trabajo en equipo ─────────────────────────
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "En trabajo en equipo dentro del área de cobro, una conducta esperada es:",
    options: [
      { letter: "A", text: "Priorizar resultados individuales frente al equipo" },
      { letter: "B", text: "Delegar todo en otros para concentrarse en lo propio" },
      { letter: "C", text: "Evitar retroalimentar para no generar tensión" },
      { letter: "D", text: "Coordinar tareas y cumplir acuerdos para objetivos comunes" },
    ],
    correctAnswer: "D",
    explanation:
      "El diccionario comportamental vincula trabajo en equipo con coordinación y cumplimiento de compromisos compartidos.",
  },
  // ── 22. Integridad: valores ───────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "Los cinco valores del Código de Integridad DIAN son:",
    options: [
      { letter: "A", text: "Lealtad, eficiencia, celeridad, economía y publicidad" },
      { letter: "B", text: "Disciplina, obediencia, jerarquía, reserva y eficacia" },
      { letter: "C", text: "Honestidad, Respeto, Compromiso, Diligencia y Justicia" },
      { letter: "D", text: "Innovación, liderazgo, estrategia, creatividad y control" },
    ],
    correctAnswer: "C",
    explanation:
      "El Código de Integridad DIAN define explícitamente estos cinco valores como base de conducta pública.",
  },
  // ── 23. Integridad: conflicto de interés en devoluciones ──────────
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "Un Analista V descubre que la solicitud de devolución que debe tramitar pertenece a un familiar cercano. La actuación íntegra es:",
    options: [
      { letter: "A", text: "Continuar la actuación mientras no haya queja formal" },
      { letter: "B", text: "Declarar el conflicto de interés y apartarse del trámite" },
      { letter: "C", text: "Gestionarlo de forma verbal sin dejar registro" },
      { letter: "D", text: "Consultar solo al final del trámite" },
    ],
    correctAnswer: "B",
    explanation:
      "Los lineamientos éticos DIAN priorizan transparencia y prevención del riesgo de parcialidad. El servidor debe declarar el impedimento oportunamente.",
  },
  // ── 24. Integridad: ofrecimiento indebido en cobro ────────────────
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "Durante un proceso de cobro coactivo, el deudor ofrece un beneficio personal al Analista V para reducir la liquidación. La conducta esperada es:",
    options: [
      { letter: "A", text: "Aceptar si no queda registro documental" },
      { letter: "B", text: "Ignorar la situación para evitar problemas" },
      { letter: "C", text: "Aceptar y resolverlo con prioridad" },
      { letter: "D", text: "Rechazarlo y reportar el hecho por los canales institucionales" },
    ],
    correctAnswer: "D",
    explanation:
      "El Código de Integridad y el Código de Ética DIAN rechazan cualquier ventaja indebida y exigen reporte institucional inmediato.",
  },
  // ── 25. Cross-phase: relación entre fases ─────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Si un aspirante al cargo Analista V obtiene 68/100 en la Fase 1 y 95/100 en las Fases 2 y 3, ¿cuál es el resultado?",
    options: [
      { letter: "A", text: "Aprueba porque el promedio ponderado total supera 70" },
      { letter: "B", text: "Aprueba porque las fases clasificatorias compensan" },
      { letter: "C", text: "Queda eliminado porque no alcanzó el mínimo de 70/100 en la Fase 1 eliminatoria" },
      { letter: "D", text: "Queda en lista de espera condicional" },
    ],
    correctAnswer: "C",
    explanation:
      "La Fase 1 es eliminatoria: si no se obtiene al menos 70/100, el aspirante es eliminado independientemente de las demás fases.",
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
