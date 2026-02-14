import { Question } from "./types";
import { analistaBasicasQuestions } from "./questions-analista-basicas";
import { analistaComportamentalesQuestions } from "./questions-analista-comportamentales";
import { analistaIntegridadQuestions } from "./questions-analista-integridad";

const FASE_1_LABEL =
  "Fase 1 Â· Competencias funcionales (Eliminatoria Â· 65%)";
const FASE_1_TEXT =
  "Base oficial: Manual de funciones Analista V (OPEC 236732 y 236756), Acuerdo 21 de 2025 DIAN 2676, Estatuto Tributario. Puntaje mÃ­nimo aprobatorio: 70/100.";

const FASE_2_LABEL =
  "Fase 2 Â· Competencias comportamentales (Clasificatoria Â· 15%)";
const FASE_2_TEXT =
  "Base oficial: Diccionario de Competencias Comportamentales DIAN (ResoluciÃ³n 065 de 2024). Conductas observables nivel tÃ©cnico.";

const FASE_3_LABEL =
  "Fase 3 Â· Integridad y Ã©tica pÃºblica (Clasificatoria Â· 10%)";
const FASE_3_TEXT =
  "Base oficial: CÃ³digo de Integridad DIAN y CÃ³digo de Ã‰tica DIAN (2021). Valores, principios y dilemas Ã©ticos.";

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
  // â”€â”€ 1. OPEC / Cargo info â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
  // â”€â”€ 2. Nivel del empleo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El empleo Analista V de la convocatoria DIAN 2676 estÃ¡ clasificado en el nivel:",
    options: [
      { letter: "A", text: "Profesional" },
      { letter: "B", text: "Directivo" },
      { letter: "C", text: "TÃ©cnico" },
      { letter: "D", text: "Asistencial" },
    ],
    correctAnswer: "C",
    explanation:
      "La ficha oficial del empleo ubica Analista V en nivel tÃ©cnico (cÃ³digo 205, grado 5).",
  },
  // â”€â”€ 3. CÃ³digo y grado â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En la ficha oficial del Analista V, el cÃ³digo y grado del empleo son:",
    options: [
      { letter: "A", text: "CÃ³digo 301 Â· Grado 1" },
      { letter: "B", text: "CÃ³digo 205 Â· Grado 1" },
      { letter: "C", text: "CÃ³digo 301 Â· Grado 5" },
      { letter: "D", text: "CÃ³digo 205 Â· Grado 5" },
    ],
    correctAnswer: "D",
    explanation:
      "El empleo Analista V del proceso DIAN 2676 se identifica oficialmente como cÃ³digo 205, grado 5.",
  },
  // â”€â”€ 4. Vacantes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
  // â”€â”€ 5. Experiencia â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En experiencia, el Analista V exige:",
    options: [
      { letter: "A", text: "No requiere experiencia" },
      { letter: "B", text: "Tres aÃ±os: dos de experiencia laboral y uno relacionado" },
      { letter: "C", text: "Un aÃ±o de experiencia profesional" },
      { letter: "D", text: "Cinco aÃ±os de experiencia relacionada" },
    ],
    correctAnswer: "B",
    explanation:
      "El manual de funciones del Analista V seÃ±ala como requisito tres aÃ±os (dos laborales y uno relacionado).",
  },
  // â”€â”€ 6. Peso Fase 1 (Acuerdo 21 de 2025) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "SegÃºn el Acuerdo 21 de 2025 DIAN 2676, Â¿cuÃ¡l es el peso de la Fase 1 (Competencias Funcionales) para el Analista V?",
    options: [
      { letter: "A", text: "70%" },
      { letter: "B", text: "60%" },
      { letter: "C", text: "65%" },
      { letter: "D", text: "50%" },
    ],
    correctAnswer: "C",
    explanation:
      "El Acuerdo 21 de 2025 establece que para cargos con experiencia (Tabla 7), la Fase 1 tiene peso de 65%.",
  },
  // â”€â”€ 7. CarÃ¡cter eliminatorio â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En el Acuerdo 21 de 2025, la Fase 1 del Analista V tiene carÃ¡cter:",
    options: [
      { letter: "A", text: "Clasificatorio" },
      { letter: "B", text: "Eliminatorio" },
      { letter: "C", text: "Informativo" },
      { letter: "D", text: "Complementario" },
    ],
    correctAnswer: "B",
    explanation:
      "La Fase 1 de Competencias Funcionales es eliminatoria: si no se alcanza el mÃ­nimo aprobatorio de 70/100, el aspirante queda eliminado.",
  },
  // â”€â”€ 8. Puntaje mÃ­nimo aprobatorio â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Â¿CuÃ¡l es el puntaje mÃ­nimo aprobatorio en la Fase 1 para el Analista V?",
    options: [
      { letter: "A", text: "60/100" },
      { letter: "B", text: "80/100" },
      { letter: "C", text: "50/100" },
      { letter: "D", text: "70/100" },
    ],
    correctAnswer: "D",
    explanation:
      "El Acuerdo 21 de 2025 fija un mÃ­nimo aprobatorio de 70/100 en la prueba eliminatoria de competencias funcionales.",
  },
  // â”€â”€ 9. Peso Fase 2 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "SegÃºn el Acuerdo 21 de 2025, el peso de la Fase 2 (Competencias Comportamentales) para el Analista V es:",
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
  // â”€â”€ 10. Peso Fase 3 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "El peso de la Fase 3 (Prueba de Integridad) para el Analista V segÃºn el Acuerdo 21 de 2025 es:",
    options: [
      { letter: "A", text: "20%" },
      { letter: "B", text: "5%" },
      { letter: "C", text: "10%" },
      { letter: "D", text: "15%" },
    ],
    correctAnswer: "C",
    explanation:
      "La Prueba de Integridad tiene peso de 10% y carÃ¡cter clasificatorio segÃºn la Tabla 7 del Acuerdo 21 de 2025.",
  },
  // â”€â”€ 11. Decreto Ley 927 de 2023 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El Decreto Ley 927 de 2023 regula:",
    options: [
      { letter: "A", text: "El rÃ©gimen disciplinario de los servidores pÃºblicos" },
      { letter: "B", text: "La contrataciÃ³n estatal" },
      { letter: "C", text: "El Sistema EspecÃ­fico de Carrera Administrativa de la DIAN" },
      { letter: "D", text: "El Estatuto Tributario Nacional" },
    ],
    correctAnswer: "C",
    explanation:
      "El Decreto Ley 927 de 2023 establece el Sistema EspecÃ­fico de Carrera Administrativa de la DIAN, base jurÃ­dica de la convocatoria.",
  },
  // â”€â”€ 12. CNSC rol â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Â¿QuÃ© entidad administra y vigila el concurso de mÃ©ritos DIAN 2676?",
    options: [
      { letter: "A", text: "La ContralorÃ­a General de la RepÃºblica" },
      { letter: "B", text: "La ProcuradurÃ­a General de la NaciÃ³n" },
      { letter: "C", text: "La DIAN de manera autÃ³noma" },
      { letter: "D", text: "La ComisiÃ³n Nacional del Servicio Civil (CNSC)" },
    ],
    correctAnswer: "D",
    explanation:
      "La CNSC es la entidad responsable de administrar y vigilar los concursos de mÃ©ritos para cargos de carrera administrativa, incluidos los de la DIAN.",
  },
  // â”€â”€ 13. ContribuciÃ³n individual: cobro coactivo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Una contribuciÃ³n individual del Analista V relacionada con cobro coactivo es:",
    options: [
      { letter: "A", text: "Elaborar estudios de mercado para contrataciÃ³n" },
      { letter: "B", text: "Proyectar actos administrativos de mandamiento de pago y medidas cautelares" },
      { letter: "C", text: "Auditar estados financieros de la entidad" },
      { letter: "D", text: "DiseÃ±ar polÃ­ticas salariales internas" },
    ],
    correctAnswer: "B",
    explanation:
      "El manual de funciones del Analista V incluye proyectar actos administrativos de cobro coactivo como contribuciÃ³n individual.",
  },
  // â”€â”€ 14. ContribuciÃ³n individual: devoluciones â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En materia de devoluciones, una funciÃ³n del Analista V es:",
    options: [
      { letter: "A", text: "Verificar requisitos y proyectar resoluciones de devoluciÃ³n y compensaciÃ³n" },
      { letter: "B", text: "Aprobar directamente los pagos sin revisiÃ³n" },
      { letter: "C", text: "Negociar acuerdos de pago con contribuyentes" },
      { letter: "D", text: "Fijar tarifas del impuesto de renta" },
    ],
    correctAnswer: "A",
    explanation:
      "SegÃºn el manual, el Analista V verifica requisitos formales y sustanciales y proyecta actos administrativos de devoluciÃ³n y compensaciÃ³n.",
  },
  // â”€â”€ 15. Estatuto Tributario: tÃ©rmino devoluciÃ³n â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "SegÃºn el Estatuto Tributario, el tÃ©rmino general para que la DIAN efectÃºe devoluciones de saldos a favor es:",
    options: [
      { letter: "A", text: "30 dÃ­as hÃ¡biles" },
      { letter: "B", text: "90 dÃ­as hÃ¡biles" },
      { letter: "C", text: "50 dÃ­as hÃ¡biles" },
      { letter: "D", text: "15 dÃ­as hÃ¡biles" },
    ],
    correctAnswer: "C",
    explanation:
      "El artÃ­culo 855 del Estatuto Tributario establece un tÃ©rmino de 50 dÃ­as hÃ¡biles para la devoluciÃ³n de saldos a favor.",
  },
  // â”€â”€ 16. CreaciÃ³n DIAN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "La DIAN fue creada mediante:",
    options: [
      { letter: "A", text: "Ley 80 de 1993" },
      { letter: "B", text: "Decreto 2117 de 1992" },
      { letter: "C", text: "Decreto 4048 de 2008" },
      { letter: "D", text: "ConstituciÃ³n PolÃ­tica de 1991" },
    ],
    correctAnswer: "B",
    explanation:
      "La DIAN fue creada por el Decreto 2117 de 1992, que fusionÃ³ la DirecciÃ³n de Impuestos Nacionales con la DirecciÃ³n de Aduanas Nacionales.",
  },
  // â”€â”€ 17. Direccion General DIAN (regla institucional) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
  // â”€â”€ 18. ValoraciÃ³n de antecedentes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En el esquema de evaluaciÃ³n del Analista V, la ValoraciÃ³n de Antecedentes (10%) es de tipo:",
    options: [
      { letter: "A", text: "Prueba escrita presencial" },
      { letter: "B", text: "Entrevista oral con jurado" },
      { letter: "C", text: "Documental (estudio de hojas de vida y soportes)" },
      { letter: "D", text: "Prueba prÃ¡ctica en computador" },
    ],
    correctAnswer: "C",
    explanation:
      "La valoraciÃ³n de antecedentes es una etapa documental donde se revisan estudios y experiencia acreditados por el aspirante.",
  },
  // â”€â”€ 19. Comportamental: adaptabilidad en cobro â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "Un cambio en el procedimiento de cobro genera resistencia en el equipo. En adaptabilidad, la respuesta mÃ¡s alineada es:",
    options: [
      { letter: "A", text: "Mantener el mÃ©todo anterior para evitar incomodidades" },
      { letter: "B", text: "Ajustar el plan de trabajo y acompaÃ±ar la transiciÃ³n con comunicaciÃ³n clara" },
      { letter: "C", text: "Esperar instrucciones sin proponer alternativas" },
      { letter: "D", text: "Aplicar el cambio sin explicar su propÃ³sito" },
    ],
    correctAnswer: "B",
    explanation:
      "La adaptabilidad evaluada en DIAN privilegia ajuste oportuno, orientaciÃ³n al resultado y apoyo al equipo en el cambio.",
  },
  // â”€â”€ 20. Comportamental: comunicaciÃ³n efectiva â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "Ante una instrucciÃ³n urgente sobre una solicitud de devoluciÃ³n, la comunicaciÃ³n efectiva implica:",
    options: [
      { letter: "A", text: "Enviar un resumen ambiguo para ahorrar tiempo" },
      { letter: "B", text: "Suponer que la otra parte ya conoce el contexto" },
      { letter: "C", text: "Transmitir el mensaje completo, verificando comprensiÃ³n y trazabilidad" },
      { letter: "D", text: "Comunicar solo lo urgente y omitir soportes" },
    ],
    correctAnswer: "C",
    explanation:
      "Las conductas observables de comunicaciÃ³n efectiva priorizan claridad, oportunidad y verificaciÃ³n del entendimiento.",
  },
  // â”€â”€ 21. Comportamental: trabajo en equipo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "En trabajo en equipo dentro del Ã¡rea de cobro, una conducta esperada es:",
    options: [
      { letter: "A", text: "Priorizar resultados individuales frente al equipo" },
      { letter: "B", text: "Delegar todo en otros para concentrarse en lo propio" },
      { letter: "C", text: "Evitar retroalimentar para no generar tensiÃ³n" },
      { letter: "D", text: "Coordinar tareas y cumplir acuerdos para objetivos comunes" },
    ],
    correctAnswer: "D",
    explanation:
      "El diccionario comportamental vincula trabajo en equipo con coordinaciÃ³n y cumplimiento de compromisos compartidos.",
  },
  // â”€â”€ 22. Integridad: valores â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "Los cinco valores del CÃ³digo de Integridad DIAN son:",
    options: [
      { letter: "A", text: "Lealtad, eficiencia, celeridad, economÃ­a y publicidad" },
      { letter: "B", text: "Disciplina, obediencia, jerarquÃ­a, reserva y eficacia" },
      { letter: "C", text: "Honestidad, Respeto, Compromiso, Diligencia y Justicia" },
      { letter: "D", text: "InnovaciÃ³n, liderazgo, estrategia, creatividad y control" },
    ],
    correctAnswer: "C",
    explanation:
      "El CÃ³digo de Integridad DIAN define explÃ­citamente estos cinco valores como base de conducta pÃºblica.",
  },
  // â”€â”€ 23. Integridad: conflicto de interÃ©s en devoluciones â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "Un Analista V descubre que la solicitud de devoluciÃ³n que debe tramitar pertenece a un familiar cercano. La actuaciÃ³n Ã­ntegra es:",
    options: [
      { letter: "A", text: "Continuar la actuaciÃ³n mientras no haya queja formal" },
      { letter: "B", text: "Declarar el conflicto de interÃ©s y apartarse del trÃ¡mite" },
      { letter: "C", text: "Gestionarlo de forma verbal sin dejar registro" },
      { letter: "D", text: "Consultar solo al final del trÃ¡mite" },
    ],
    correctAnswer: "B",
    explanation:
      "Los lineamientos Ã©ticos DIAN priorizan transparencia y prevenciÃ³n del riesgo de parcialidad. El servidor debe declarar el impedimento oportunamente.",
  },
  // â”€â”€ 24. Integridad: ofrecimiento indebido en cobro â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "Durante un proceso de cobro coactivo, el deudor ofrece un beneficio personal al Analista V para reducir la liquidaciÃ³n. La conducta esperada es:",
    options: [
      { letter: "A", text: "Aceptar si no queda registro documental" },
      { letter: "B", text: "Ignorar la situaciÃ³n para evitar problemas" },
      { letter: "C", text: "Aceptar y resolverlo con prioridad" },
      { letter: "D", text: "Rechazarlo y reportar el hecho por los canales institucionales" },
    ],
    correctAnswer: "D",
    explanation:
      "El CÃ³digo de Integridad y el CÃ³digo de Ã‰tica DIAN rechazan cualquier ventaja indebida y exigen reporte institucional inmediato.",
  },
  // â”€â”€ 25. Cross-phase: relaciÃ³n entre fases â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Si un aspirante al cargo Analista V obtiene 68/100 en la Fase 1 y 95/100 en las Fases 2 y 3, Â¿cuÃ¡l es el resultado?",
    options: [
      { letter: "A", text: "Aprueba porque el promedio ponderado total supera 70" },
      { letter: "B", text: "Aprueba porque las fases clasificatorias compensan" },
      { letter: "C", text: "Queda eliminado porque no alcanzÃ³ el mÃ­nimo de 70/100 en la Fase 1 eliminatoria" },
      { letter: "D", text: "Queda en lista de espera condicional" },
    ],
    correctAnswer: "C",
    explanation:
      "La Fase 1 es eliminatoria: si no se obtiene al menos 70/100, el aspirante es eliminado independientemente de las demÃ¡s fases.",
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

