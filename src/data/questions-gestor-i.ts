import { Question } from "./types";
import { gestorBasicasQuestions } from "./questions-gestor-basicas";
import { gestorComportamentalesQuestions } from "./questions-gestor-comportamentales";
import { gestorIntegridadQuestions } from "./questions-gestor-integridad";

const FASE_1_LABEL =
  "Fase 1 · Competencias funcionales (Eliminatoria · 70%)";
const FASE_1_TEXT =
  "Base oficial: Manual de funciones Gestor I (OPEC 236741 y 236767), Acuerdo 205 de 2025 DIAN 2676, Ley 80/1993, Ley 1150/2007. Puntaje mínimo aprobatorio: 70/100.";

const FASE_2_LABEL =
  "Fase 2 · Competencias comportamentales (Clasificatoria · 20%)";
const FASE_2_TEXT =
  "Base oficial: Diccionario de Competencias Comportamentales DIAN (Resolución 065 de 2024). Conductas observables nivel profesional.";

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

const gestorExtraQuestions: Question[] = [
  // ── 1. OPEC ───────────────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En SIMO, una OPEC oficial vigente del empleo Gestor I (ingreso DIAN 2676) es:",
    options: [
      { letter: "A", text: "236732" },
      { letter: "B", text: "236819" },
      { letter: "C", text: "236701" },
      { letter: "D", text: "236767" },
    ],
    correctAnswer: "D",
    explanation:
      "La oferta oficial de Gestor I en ingreso DIAN 2676 incluye OPEC 236741 y OPEC 236767; esta pregunta valida una de ellas (236767).",
  },
  // ── 2. Nivel del empleo ───────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El cargo Gestor I se clasifica oficialmente en el nivel:",
    options: [
      { letter: "A", text: "Técnico" },
      { letter: "B", text: "Asistencial" },
      { letter: "C", text: "Profesional" },
      { letter: "D", text: "Directivo" },
    ],
    correctAnswer: "C",
    explanation:
      "La ficha oficial indica que Gestor I pertenece al nivel profesional (código 301, grado 1).",
  },
  // ── 3. Código y grado ─────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Según la ficha del empleo Gestor I, el código y grado son:",
    options: [
      { letter: "A", text: "Código 205 · Grado 5" },
      { letter: "B", text: "Código 301 · Grado 5" },
      { letter: "C", text: "Código 205 · Grado 1" },
      { letter: "D", text: "Código 301 · Grado 1" },
    ],
    correctAnswer: "D",
    explanation:
      "En el empleo Gestor I de la convocatoria DIAN 2676, el identificador oficial es código 301 y grado 1.",
  },
  // ── 4. Experiencia ────────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El requisito de experiencia para Gestor I, según el manual de funciones, es:",
    options: [
      { letter: "A", text: "Un año de experiencia profesional" },
      { letter: "B", text: "Dos años de experiencia laboral" },
      { letter: "C", text: "No requiere experiencia" },
      { letter: "D", text: "Tres años: dos laborales y uno relacionado" },
    ],
    correctAnswer: "C",
    explanation:
      "El manual del Gestor I indica expresamente que no requiere experiencia.",
  },
  // ── 5. Vacantes ───────────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En esta convocatoria, el total consolidado de vacantes de Gestor I (OPEC 236741 + 236767) es:",
    options: [
      { letter: "A", text: "189" },
      { letter: "B", text: "197" },
      { letter: "C", text: "14" },
      { letter: "D", text: "236" },
    ],
    correctAnswer: "B",
    explanation:
      "El consolidado oficial SIMO para Gestor I en ingreso DIAN 2676 es 197 vacantes (236741: 8 y 236767: 189).",
  },
  // ── 6. Peso Fase 1 (Acuerdo 205 de 2025) ─────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Según el Acuerdo 205 de 2025 DIAN 2676, ¿cuál es el peso de la Fase 1 (Competencias Funcionales) para el Gestor I?",
    options: [
      { letter: "A", text: "65%" },
      { letter: "B", text: "70%" },
      { letter: "C", text: "60%" },
      { letter: "D", text: "50%" },
    ],
    correctAnswer: "B",
    explanation:
      "El Acuerdo 205 de 2025 establece que para cargos sin experiencia (Tabla 8), la Fase 1 tiene peso de 70%.",
  },
  // ── 7. Carácter eliminatorio ──────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En el Acuerdo 205 de 2025, la Fase 1 del Gestor I tiene carácter:",
    options: [
      { letter: "A", text: "Clasificatorio" },
      { letter: "B", text: "Informativo" },
      { letter: "C", text: "Complementario" },
      { letter: "D", text: "Eliminatorio" },
    ],
    correctAnswer: "D",
    explanation:
      "La Fase 1 de Competencias Funcionales es eliminatoria: si no se alcanza el mínimo aprobatorio de 70/100, el aspirante queda eliminado.",
  },
  // ── 8. Puntaje mínimo aprobatorio ─────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "¿Cuál es el puntaje mínimo aprobatorio en la Fase 1 para el Gestor I?",
    options: [
      { letter: "A", text: "60/100" },
      { letter: "B", text: "80/100" },
      { letter: "C", text: "70/100" },
      { letter: "D", text: "50/100" },
    ],
    correctAnswer: "C",
    explanation:
      "El Acuerdo 205 de 2025 fija un mínimo aprobatorio de 70/100 en la prueba eliminatoria de competencias funcionales.",
  },
  // ── 9. Peso Fase 2 ────────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "Según el Acuerdo 205 de 2025, el peso de la Fase 2 (Competencias Comportamentales) para el Gestor I es:",
    options: [
      { letter: "A", text: "15%" },
      { letter: "B", text: "20%" },
      { letter: "C", text: "25%" },
      { letter: "D", text: "10%" },
    ],
    correctAnswer: "B",
    explanation:
      "Para cargos sin experiencia (Tabla 8), las competencias comportamentales tienen peso de 20%.",
  },
  // ── 10. Peso Fase 3 ───────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "El peso de la Fase 3 (Prueba de Integridad) para el Gestor I según el Acuerdo 205 de 2025 es:",
    options: [
      { letter: "A", text: "10%" },
      { letter: "B", text: "5%" },
      { letter: "C", text: "15%" },
      { letter: "D", text: "20%" },
    ],
    correctAnswer: "A",
    explanation:
      "La Prueba de Integridad tiene peso de 10% y carácter clasificatorio según la Tabla 8 del Acuerdo 205 de 2025.",
  },
  // ── 11. Decreto Ley 927 de 2023 ───────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El Decreto Ley 927 de 2023 regula:",
    options: [
      { letter: "A", text: "El régimen disciplinario de los servidores públicos" },
      { letter: "B", text: "El Sistema Específico de Carrera Administrativa de la DIAN" },
      { letter: "C", text: "La contratación estatal" },
      { letter: "D", text: "El Estatuto Tributario Nacional" },
    ],
    correctAnswer: "B",
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
      { letter: "C", text: "La Comisión Nacional del Servicio Civil (CNSC)" },
      { letter: "D", text: "La DIAN de manera autónoma" },
    ],
    correctAnswer: "C",
    explanation:
      "La CNSC es la entidad responsable de administrar y vigilar los concursos de méritos para cargos de carrera administrativa.",
  },
  // ── 13. Subproceso del cargo ──────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El subproceso central del Gestor I en el manual es:",
    options: [
      { letter: "A", text: "Administración de cartera y devoluciones" },
      { letter: "B", text: "Cobro coactivo y cobro persuasivo" },
      { letter: "C", text: "Fiscalización tributaria" },
      { letter: "D", text: "Recursos administrativos, operación logística, compras y contratos" },
    ],
    correctAnswer: "D",
    explanation:
      "El manual del cargo ubica al Gestor I en el subproceso de recursos administrativos, logística, compras y contratos.",
  },
  // ── 14. Ley 80 de 1993 ────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "La Ley 80 de 1993 es conocida como:",
    options: [
      { letter: "A", text: "El Estatuto Anticorrupción" },
      { letter: "B", text: "El Código Disciplinario Único" },
      { letter: "C", text: "El Estatuto General de Contratación de la Administración Pública" },
      { letter: "D", text: "La Ley de Transparencia y Acceso a la Información" },
    ],
    correctAnswer: "C",
    explanation:
      "La Ley 80 de 1993 establece el Estatuto General de Contratación de la Administración Pública, norma fundamental para el Gestor I.",
  },
  // ── 15. Principios Ley 80 ────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "¿Cuáles son los principios fundamentales de la contratación estatal según la Ley 80/1993?",
    options: [
      { letter: "A", text: "Transparencia, economía y responsabilidad" },
      { letter: "B", text: "Eficiencia, equidad y solidaridad" },
      { letter: "C", text: "Legalidad, celeridad y publicidad" },
      { letter: "D", text: "Participación, pluralismo e igualdad" },
    ],
    correctAnswer: "A",
    explanation:
      "La Ley 80 de 1993 consagra transparencia, economía y responsabilidad como principios rectores de la contratación pública.",
  },
  // ── 16. SIIF Nación II ────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El sistema SIIF Nación II se utiliza en la DIAN para:",
    options: [
      { letter: "A", text: "Gestión de correspondencia interna" },
      { letter: "B", text: "Control de asistencia del personal" },
      { letter: "C", text: "Gestión financiera, presupuestal y contable de la Nación" },
      { letter: "D", text: "Registro de contribuyentes" },
    ],
    correctAnswer: "C",
    explanation:
      "SIIF Nación II es el Sistema Integrado de Información Financiera, utilizado para la gestión presupuestal, contable y de tesorería.",
  },
  // ── 17. Custodia de mercancías ────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En el contexto del Gestor I, la custodia de mercancías aprehendidas implica principalmente:",
    options: [
      { letter: "A", text: "Vender directamente las mercancías al mejor postor" },
      { letter: "B", text: "Garantizar el almacenamiento seguro, inventario y trazabilidad de los bienes conforme a procedimientos internos" },
      { letter: "C", text: "Destruir inmediatamente toda mercancía retenida" },
      { letter: "D", text: "Devolver los bienes al importador sin trámite" },
    ],
    correctAnswer: "B",
    explanation:
      "La custodia de mercancías exige almacenamiento seguro, control de inventario y cadena de trazabilidad según los procedimientos DIAN.",
  },
  // ── 18. Creación DIAN ─────────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "La DIAN fue creada mediante:",
    options: [
      { letter: "A", text: "Decreto 2117 de 1992" },
      { letter: "B", text: "Ley 80 de 1993" },
      { letter: "C", text: "Decreto 4048 de 2008" },
      { letter: "D", text: "Constitución Política de 1991" },
    ],
    correctAnswer: "A",
    explanation:
      "La DIAN fue creada por el Decreto 2117 de 1992, que fusionó la Dirección de Impuestos Nacionales con la Dirección de Aduanas Nacionales.",
  },
  // ── 19. Ley 1150 de 2007 ──────────────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "La Ley 1150 de 2007 introdujo en la contratación pública colombiana:",
    options: [
      { letter: "A", text: "La eliminación de la licitación pública" },
      { letter: "B", text: "Medidas de eficiencia y transparencia como la selección objetiva y el SECOP" },
      { letter: "C", text: "La privatización de la función de compras" },
      { letter: "D", text: "La supresión de la interventoría en contratos" },
    ],
    correctAnswer: "B",
    explanation:
      "La Ley 1150 de 2007 complementó la Ley 80 con modalidades de selección objetiva y la plataforma electrónica SECOP.",
  },
  // ── 20. Comportamental: solución de problemas en logística ────────
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "En una contingencia operativa con el inventario de mercancías, la conducta más alineada con solución de problemas es:",
    options: [
      { letter: "A", text: "Esperar sin actuar hasta que otro equipo resuelva" },
      { letter: "B", text: "Aplicar una salida informal sin trazabilidad" },
      { letter: "C", text: "Analizar causas, proponer opciones y ejecutar la alternativa viable documentando el proceso" },
      { letter: "D", text: "Posponer el caso para evitar riesgo" },
    ],
    correctAnswer: "C",
    explanation:
      "La competencia exige análisis estructurado, toma de decisión y respuesta oportuna con soporte documental.",
  },
  // ── 21. Comportamental: innovación ────────────────────────────────
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "Una conducta observable de innovación en Gestor I es:",
    options: [
      { letter: "A", text: "Conservar siempre el método tradicional sin cuestionarlo" },
      { letter: "B", text: "Proponer mejoras viables para optimizar la gestión de compras y contratos" },
      { letter: "C", text: "Aplicar cambios sin validar impacto" },
      { letter: "D", text: "Evitar ajustes por temor al error" },
    ],
    correctAnswer: "B",
    explanation:
      "La innovación comportamental se evidencia en propuestas de mejora con foco en efectividad y servicio.",
  },
  // ── 22. Comportamental: adaptabilidad ─────────────────────────────
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "La DIAN implementa un nuevo sistema de gestión de contratos. La respuesta más alineada con adaptabilidad es:",
    options: [
      { letter: "A", text: "Evitar su uso hasta que sea estrictamente obligatorio" },
      { letter: "B", text: "Delegar su aprendizaje en otros compañeros" },
      { letter: "C", text: "Usarlo solo en casos excepcionales" },
      { letter: "D", text: "Apropiarlo rápidamente y apoyar al equipo en su adopción" },
    ],
    correctAnswer: "D",
    explanation:
      "La adaptabilidad en DIAN premia apertura al cambio, aprendizaje proactivo y contribución al ajuste colectivo.",
  },
  // ── 23. Integridad: valores ───────────────────────────────────────
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
  // ── 24. Integridad: ofrecimiento en contratación ──────────────────
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "Un contratista ofrece una comisión al Gestor I para agilizar un trámite de pago. La conducta ética correcta es:",
    options: [
      { letter: "A", text: "Aceptar si el monto es bajo y no afecta el resultado" },
      { letter: "B", text: "Ignorar la situación para no generar conflicto" },
      { letter: "C", text: "Rechazar el ofrecimiento y reportar el hecho por los canales institucionales" },
      { letter: "D", text: "Resolver el trámite antes de decidir si reporta" },
    ],
    correctAnswer: "C",
    explanation:
      "Los códigos de integridad y ética son explícitos en rechazo de beneficios indebidos y reporte institucional inmediato.",
  },
  // ── 25. Cross-phase: relación entre fases ─────────────────────────
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Si un aspirante al Gestor I obtiene 69/100 en la Fase 1 y 100/100 en las Fases 2 y 3, ¿cuál es el resultado?",
    options: [
      { letter: "A", text: "Aprueba porque el promedio ponderado total supera 70" },
      { letter: "B", text: "Queda eliminado porque no alcanzó el mínimo de 70/100 en la Fase 1 eliminatoria" },
      { letter: "C", text: "Aprueba porque las fases clasificatorias compensan" },
      { letter: "D", text: "Queda en lista de espera condicional" },
    ],
    correctAnswer: "B",
    explanation:
      "La Fase 1 es eliminatoria: si no se obtiene al menos 70/100, el aspirante es eliminado independientemente del resultado en las demás fases.",
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
