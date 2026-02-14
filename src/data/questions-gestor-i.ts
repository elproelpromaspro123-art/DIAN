import { Question } from "./types";
import { gestorBasicasQuestions } from "./questions-gestor-basicas";
import { gestorComportamentalesQuestions } from "./questions-gestor-comportamentales";
import { gestorIntegridadQuestions } from "./questions-gestor-integridad";

const FASE_1_LABEL =
  "Fase 1 Â· Competencias funcionales (Eliminatoria Â· 70%)";
const FASE_1_TEXT =
  "Base oficial: Manual de funciones Gestor I (OPEC 236741 y 236767), Acuerdo 21 de 2025 DIAN 2676, Ley 80/1993, Ley 1150/2007. Puntaje mÃ­nimo aprobatorio: 70/100.";

const FASE_2_LABEL =
  "Fase 2 Â· Competencias comportamentales (Clasificatoria Â· 20%)";
const FASE_2_TEXT =
  "Base oficial: Diccionario de Competencias Comportamentales DIAN (ResoluciÃ³n 065 de 2024). Conductas observables nivel profesional.";

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

const gestorExtraQuestions: Question[] = [
  // â”€â”€ 1. OPEC â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
  // â”€â”€ 2. Nivel del empleo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El cargo Gestor I se clasifica oficialmente en el nivel:",
    options: [
      { letter: "A", text: "TÃ©cnico" },
      { letter: "B", text: "Asistencial" },
      { letter: "C", text: "Profesional" },
      { letter: "D", text: "Directivo" },
    ],
    correctAnswer: "C",
    explanation:
      "La ficha oficial indica que Gestor I pertenece al nivel profesional (cÃ³digo 301, grado 1).",
  },
  // â”€â”€ 3. CÃ³digo y grado â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "SegÃºn la ficha del empleo Gestor I, el cÃ³digo y grado son:",
    options: [
      { letter: "A", text: "CÃ³digo 205 Â· Grado 5" },
      { letter: "B", text: "CÃ³digo 301 Â· Grado 5" },
      { letter: "C", text: "CÃ³digo 205 Â· Grado 1" },
      { letter: "D", text: "CÃ³digo 301 Â· Grado 1" },
    ],
    correctAnswer: "D",
    explanation:
      "En el empleo Gestor I de la convocatoria DIAN 2676, el identificador oficial es cÃ³digo 301 y grado 1.",
  },
  // â”€â”€ 4. Experiencia â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El requisito de experiencia para Gestor I, segÃºn el manual de funciones, es:",
    options: [
      { letter: "A", text: "Un aÃ±o de experiencia profesional" },
      { letter: "B", text: "Dos aÃ±os de experiencia laboral" },
      { letter: "C", text: "No requiere experiencia" },
      { letter: "D", text: "Tres aÃ±os: dos laborales y uno relacionado" },
    ],
    correctAnswer: "C",
    explanation:
      "El manual del Gestor I indica expresamente que no requiere experiencia.",
  },
  // â”€â”€ 5. Vacantes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
  // â”€â”€ 6. Peso Fase 1 (Acuerdo 21 de 2025) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "SegÃºn el Acuerdo 21 de 2025 DIAN 2676, Â¿cuÃ¡l es el peso de la Fase 1 (Competencias Funcionales) para el Gestor I?",
    options: [
      { letter: "A", text: "65%" },
      { letter: "B", text: "70%" },
      { letter: "C", text: "60%" },
      { letter: "D", text: "50%" },
    ],
    correctAnswer: "B",
    explanation:
      "El Acuerdo 21 de 2025 establece que para cargos sin experiencia (Tabla 8), la Fase 1 tiene peso de 70%.",
  },
  // â”€â”€ 7. CarÃ¡cter eliminatorio â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En el Acuerdo 21 de 2025, la Fase 1 del Gestor I tiene carÃ¡cter:",
    options: [
      { letter: "A", text: "Clasificatorio" },
      { letter: "B", text: "Informativo" },
      { letter: "C", text: "Complementario" },
      { letter: "D", text: "Eliminatorio" },
    ],
    correctAnswer: "D",
    explanation:
      "La Fase 1 de Competencias Funcionales es eliminatoria: si no se alcanza el mÃ­nimo aprobatorio de 70/100, el aspirante queda eliminado.",
  },
  // â”€â”€ 8. Puntaje mÃ­nimo aprobatorio â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Â¿CuÃ¡l es el puntaje mÃ­nimo aprobatorio en la Fase 1 para el Gestor I?",
    options: [
      { letter: "A", text: "60/100" },
      { letter: "B", text: "80/100" },
      { letter: "C", text: "70/100" },
      { letter: "D", text: "50/100" },
    ],
    correctAnswer: "C",
    explanation:
      "El Acuerdo 21 de 2025 fija un mÃ­nimo aprobatorio de 70/100 en la prueba eliminatoria de competencias funcionales.",
  },
  // â”€â”€ 9. Peso Fase 2 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "SegÃºn el Acuerdo 21 de 2025, el peso de la Fase 2 (Competencias Comportamentales) para el Gestor I es:",
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
  // â”€â”€ 10. Peso Fase 3 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "El peso de la Fase 3 (Prueba de Integridad) para el Gestor I segÃºn el Acuerdo 21 de 2025 es:",
    options: [
      { letter: "A", text: "10%" },
      { letter: "B", text: "5%" },
      { letter: "C", text: "15%" },
      { letter: "D", text: "20%" },
    ],
    correctAnswer: "A",
    explanation:
      "La Prueba de Integridad tiene peso de 10% y carÃ¡cter clasificatorio segÃºn la Tabla 8 del Acuerdo 21 de 2025.",
  },
  // â”€â”€ 11. Decreto Ley 927 de 2023 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El Decreto Ley 927 de 2023 regula:",
    options: [
      { letter: "A", text: "El rÃ©gimen disciplinario de los servidores pÃºblicos" },
      { letter: "B", text: "El Sistema EspecÃ­fico de Carrera Administrativa de la DIAN" },
      { letter: "C", text: "La contrataciÃ³n estatal" },
      { letter: "D", text: "El Estatuto Tributario Nacional" },
    ],
    correctAnswer: "B",
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
      { letter: "C", text: "La ComisiÃ³n Nacional del Servicio Civil (CNSC)" },
      { letter: "D", text: "La DIAN de manera autÃ³noma" },
    ],
    correctAnswer: "C",
    explanation:
      "La CNSC es la entidad responsable de administrar y vigilar los concursos de mÃ©ritos para cargos de carrera administrativa.",
  },
  // â”€â”€ 13. Subproceso del cargo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El subproceso central del Gestor I en el manual es:",
    options: [
      { letter: "A", text: "AdministraciÃ³n de cartera y devoluciones" },
      { letter: "B", text: "Cobro coactivo y cobro persuasivo" },
      { letter: "C", text: "FiscalizaciÃ³n tributaria" },
      { letter: "D", text: "Recursos administrativos, operaciÃ³n logÃ­stica, compras y contratos" },
    ],
    correctAnswer: "D",
    explanation:
      "El manual del cargo ubica al Gestor I en el subproceso de recursos administrativos, logÃ­stica, compras y contratos.",
  },
  // â”€â”€ 14. Ley 80 de 1993 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "La Ley 80 de 1993 es conocida como:",
    options: [
      { letter: "A", text: "El Estatuto AnticorrupciÃ³n" },
      { letter: "B", text: "El CÃ³digo Disciplinario Ãšnico" },
      { letter: "C", text: "El Estatuto General de ContrataciÃ³n de la AdministraciÃ³n PÃºblica" },
      { letter: "D", text: "La Ley de Transparencia y Acceso a la InformaciÃ³n" },
    ],
    correctAnswer: "C",
    explanation:
      "La Ley 80 de 1993 establece el Estatuto General de ContrataciÃ³n de la AdministraciÃ³n PÃºblica, norma fundamental para el Gestor I.",
  },
  // â”€â”€ 15. Principios Ley 80 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Â¿CuÃ¡les son los principios fundamentales de la contrataciÃ³n estatal segÃºn la Ley 80/1993?",
    options: [
      { letter: "A", text: "Transparencia, economÃ­a y responsabilidad" },
      { letter: "B", text: "Eficiencia, equidad y solidaridad" },
      { letter: "C", text: "Legalidad, celeridad y publicidad" },
      { letter: "D", text: "ParticipaciÃ³n, pluralismo e igualdad" },
    ],
    correctAnswer: "A",
    explanation:
      "La Ley 80 de 1993 consagra transparencia, economÃ­a y responsabilidad como principios rectores de la contrataciÃ³n pÃºblica.",
  },
  // â”€â”€ 16. SIIF NaciÃ³n II â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "El sistema SIIF NaciÃ³n II se utiliza en la DIAN para:",
    options: [
      { letter: "A", text: "GestiÃ³n de correspondencia interna" },
      { letter: "B", text: "Control de asistencia del personal" },
      { letter: "C", text: "GestiÃ³n financiera, presupuestal y contable de la NaciÃ³n" },
      { letter: "D", text: "Registro de contribuyentes" },
    ],
    correctAnswer: "C",
    explanation:
      "SIIF NaciÃ³n II es el Sistema Integrado de InformaciÃ³n Financiera, utilizado para la gestiÃ³n presupuestal, contable y de tesorerÃ­a.",
  },
  // â”€â”€ 17. Custodia de mercancÃ­as â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "En el contexto del Gestor I, la custodia de mercancÃ­as aprehendidas implica principalmente:",
    options: [
      { letter: "A", text: "Vender directamente las mercancÃ­as al mejor postor" },
      { letter: "B", text: "Garantizar el almacenamiento seguro, inventario y trazabilidad de los bienes conforme a procedimientos internos" },
      { letter: "C", text: "Destruir inmediatamente toda mercancÃ­a retenida" },
      { letter: "D", text: "Devolver los bienes al importador sin trÃ¡mite" },
    ],
    correctAnswer: "B",
    explanation:
      "La custodia de mercancÃ­as exige almacenamiento seguro, control de inventario y cadena de trazabilidad segÃºn los procedimientos DIAN.",
  },
  // â”€â”€ 18. CreaciÃ³n DIAN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "La DIAN fue creada mediante:",
    options: [
      { letter: "A", text: "Decreto 2117 de 1992" },
      { letter: "B", text: "Ley 80 de 1993" },
      { letter: "C", text: "Decreto 4048 de 2008" },
      { letter: "D", text: "ConstituciÃ³n PolÃ­tica de 1991" },
    ],
    correctAnswer: "A",
    explanation:
      "La DIAN fue creada por el Decreto 2117 de 1992, que fusionÃ³ la DirecciÃ³n de Impuestos Nacionales con la DirecciÃ³n de Aduanas Nacionales.",
  },
  // â”€â”€ 19. Ley 1150 de 2007 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "La Ley 1150 de 2007 introdujo en la contrataciÃ³n pÃºblica colombiana:",
    options: [
      { letter: "A", text: "La eliminaciÃ³n de la licitaciÃ³n pÃºblica" },
      { letter: "B", text: "Medidas de eficiencia y transparencia como la selecciÃ³n objetiva y el SECOP" },
      { letter: "C", text: "La privatizaciÃ³n de la funciÃ³n de compras" },
      { letter: "D", text: "La supresiÃ³n de la interventorÃ­a en contratos" },
    ],
    correctAnswer: "B",
    explanation:
      "La Ley 1150 de 2007 complementÃ³ la Ley 80 con modalidades de selecciÃ³n objetiva y la plataforma electrÃ³nica SECOP.",
  },
  // â”€â”€ 20. Comportamental: soluciÃ³n de problemas en logÃ­stica â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "En una contingencia operativa con el inventario de mercancÃ­as, la conducta mÃ¡s alineada con soluciÃ³n de problemas es:",
    options: [
      { letter: "A", text: "Esperar sin actuar hasta que otro equipo resuelva" },
      { letter: "B", text: "Aplicar una salida informal sin trazabilidad" },
      { letter: "C", text: "Analizar causas, proponer opciones y ejecutar la alternativa viable documentando el proceso" },
      { letter: "D", text: "Posponer el caso para evitar riesgo" },
    ],
    correctAnswer: "C",
    explanation:
      "La competencia exige anÃ¡lisis estructurado, toma de decisiÃ³n y respuesta oportuna con soporte documental.",
  },
  // â”€â”€ 21. Comportamental: innovaciÃ³n â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "Una conducta observable de innovaciÃ³n en Gestor I es:",
    options: [
      { letter: "A", text: "Conservar siempre el mÃ©todo tradicional sin cuestionarlo" },
      { letter: "B", text: "Proponer mejoras viables para optimizar la gestiÃ³n de compras y contratos" },
      { letter: "C", text: "Aplicar cambios sin validar impacto" },
      { letter: "D", text: "Evitar ajustes por temor al error" },
    ],
    correctAnswer: "B",
    explanation:
      "La innovaciÃ³n comportamental se evidencia en propuestas de mejora con foco en efectividad y servicio.",
  },
  // â”€â”€ 22. Comportamental: adaptabilidad â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_2_LABEL,
    groupText: FASE_2_TEXT,
    text: "La DIAN implementa un nuevo sistema de gestiÃ³n de contratos. La respuesta mÃ¡s alineada con adaptabilidad es:",
    options: [
      { letter: "A", text: "Evitar su uso hasta que sea estrictamente obligatorio" },
      { letter: "B", text: "Delegar su aprendizaje en otros compaÃ±eros" },
      { letter: "C", text: "Usarlo solo en casos excepcionales" },
      { letter: "D", text: "Apropiarlo rÃ¡pidamente y apoyar al equipo en su adopciÃ³n" },
    ],
    correctAnswer: "D",
    explanation:
      "La adaptabilidad en DIAN premia apertura al cambio, aprendizaje proactivo y contribuciÃ³n al ajuste colectivo.",
  },
  // â”€â”€ 23. Integridad: valores â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "Los cinco valores del CÃ³digo de Integridad DIAN son:",
    options: [
      { letter: "A", text: "Honestidad, Respeto, Compromiso, Diligencia y Justicia" },
      { letter: "B", text: "Lealtad, eficiencia, celeridad, economÃ­a y publicidad" },
      { letter: "C", text: "Disciplina, obediencia, jerarquÃ­a, reserva y eficacia" },
      { letter: "D", text: "InnovaciÃ³n, liderazgo, estrategia, creatividad y control" },
    ],
    correctAnswer: "A",
    explanation:
      "El CÃ³digo de Integridad DIAN define explÃ­citamente estos cinco valores como base de conducta pÃºblica.",
  },
  // â”€â”€ 24. Integridad: ofrecimiento en contrataciÃ³n â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_3_LABEL,
    groupText: FASE_3_TEXT,
    text: "Un contratista ofrece una comisiÃ³n al Gestor I para agilizar un trÃ¡mite de pago. La conducta Ã©tica correcta es:",
    options: [
      { letter: "A", text: "Aceptar si el monto es bajo y no afecta el resultado" },
      { letter: "B", text: "Ignorar la situaciÃ³n para no generar conflicto" },
      { letter: "C", text: "Rechazar el ofrecimiento y reportar el hecho por los canales institucionales" },
      { letter: "D", text: "Resolver el trÃ¡mite antes de decidir si reporta" },
    ],
    correctAnswer: "C",
    explanation:
      "Los cÃ³digos de integridad y Ã©tica son explÃ­citos en rechazo de beneficios indebidos y reporte institucional inmediato.",
  },
  // â”€â”€ 25. Cross-phase: relaciÃ³n entre fases â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    groupLabel: FASE_1_LABEL,
    groupText: FASE_1_TEXT,
    text: "Si un aspirante al Gestor I obtiene 69/100 en la Fase 1 y 100/100 en las Fases 2 y 3, Â¿cuÃ¡l es el resultado?",
    options: [
      { letter: "A", text: "Aprueba porque el promedio ponderado total supera 70" },
      { letter: "B", text: "Queda eliminado porque no alcanzÃ³ el mÃ­nimo de 70/100 en la Fase 1 eliminatoria" },
      { letter: "C", text: "Aprueba porque las fases clasificatorias compensan" },
      { letter: "D", text: "Queda en lista de espera condicional" },
    ],
    correctAnswer: "B",
    explanation:
      "La Fase 1 es eliminatoria: si no se obtiene al menos 70/100, el aspirante es eliminado independientemente del resultado en las demÃ¡s fases.",
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

