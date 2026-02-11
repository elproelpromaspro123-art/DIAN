export type StudySource = {
  label: string;
  href: string;
};

export type StudyCheckpoint = {
  id: string;
  prompt: string;
  answer: string;
  source: string;
};

export type StudyPhase = {
  id: "fase-1" | "fase-2" | "fase-3";
  title: string;
  character: string;
  weight: string;
  whatEvaluates: string;
  thematicAxes: string[];
  quickSummary: string[];
  checkpoints: StudyCheckpoint[];
  sources: StudySource[];
};

export type CargoStudyContent = {
  slug: "analista-v" | "gestor-i";
  cargo: string;
  subtitle: string;
  opec: string;
  level: string;
  codeGrade: string;
  vacancies: string;
  salary: string;
  salaryYear: string;
  enrollmentWindow: string;
  lastUpdate: string;
  sources: StudySource[];
  phases: StudyPhase[];
};

export const ANALISTA_STUDY_CONTENT: CargoStudyContent = {
  slug: "analista-v",
  cargo: "Analista V",
  subtitle: "Ruta integrada de estudio para DIAN 2676",
  opec: "236732",
  level: "Técnico",
  codeGrade: "Código 205 · Grado 5",
  vacancies: "4 vacantes",
  salary: "$7.171.627",
  salaryYear: "Vigencia salarial 2025",
  enrollmentWindow:
    "Inscripciones DIAN 2676: del 28-ene-2026 al 6-feb-2026. La CNSC amplió cierre hasta el 7-feb-2026.",
  lastUpdate: "11-feb-2026",
  sources: [
    { label: "SIMO oferta empleo", href: "https://simo.cnsc.gov.co/#/ofertaEmpleo" },
    { label: "CNSC Convocatoria DIAN 2676", href: "https://www.cnsc.gov.co/node/59797" },
    {
      label: "DIAN comunicado de inscripciones (28-ene-2026)",
      href: "https://www.dian.gov.co/Prensa/Paginas/NG-Inician-inscripciones-para-proceso-de-seleccion-DIAN-2676.aspx",
    },
    { label: "CNSC ampliación al 7-feb-2026", href: "https://www.cnsc.gov.co/node/60247" },
  ],
  phases: [
    {
      id: "fase-1",
      title: "Competencias básicas y funcionales",
      character: "Eliminatoria",
      weight: "~60%",
      whatEvaluates:
        "Conocimiento del manual de funciones, normativa pública y temas técnicos del subproceso del cargo.",
      thematicAxes: [
        "Proceso misional: cumplimiento de obligaciones tributarias.",
        "Subproceso: administración de cartera y recaudo/devoluciones.",
        "Control extensivo, devoluciones y compensaciones, cobro coactivo y persuasivo.",
        "Medidas cautelares, procesos concursales y principios de función pública.",
      ],
      quickSummary: [
        "En Analista V, esta fase es el filtro principal: si no alcanzas el mínimo exigido por la convocatoria, quedas fuera del proceso.",
        "Tu prioridad es dominar lo que el manual enumera como competencias funcionales y los ejes de conocimiento básico institucional.",
      ],
      checkpoints: [
        {
          id: "an-f1-1",
          prompt:
            "¿Qué subproceso debes priorizar primero para Analista V antes de entrar a simulacros largos?",
          answer:
            "Administración de cartera y recaudo/devoluciones; de ahí salen varias competencias funcionales centrales.",
          source: "Manual de funciones Analista V",
        },
        {
          id: "an-f1-2",
          prompt:
            "Si estudias solo teoría tributaria y dejas por fuera cobro coactivo/persuasivo, ¿tu preparación queda completa?",
          answer:
            "No. El manual exige ambos frentes y la prueba funcional combina norma + aplicación al proceso del cargo.",
          source: "Manual de funciones Analista V",
        },
        {
          id: "an-f1-3",
          prompt: "¿Qué fecha oficial quedó como cierre final de inscripciones DIAN 2676?",
          answer: "7 de febrero de 2026, por ampliación oficial CNSC.",
          source: "CNSC aviso de ampliación 7-feb-2026",
        },
        {
          id: "an-f1-4",
          prompt:
            "¿Por qué debes estudiar también Ley 1437 y principios de función pública en esta fase?",
          answer:
            "Porque el manual incluye procedimiento administrativo y fundamentos de actuación pública, no solo técnica tributaria.",
          source: "Manual de funciones Analista V",
        },
      ],
      sources: [
        { label: "Manual Analista V (PDF)", href: "/recursos/manual-funciones-analista-v.pdf" },
        { label: "DIAN naturaleza jurídica", href: "/recursos/dian-naturaleza-juridica.pdf" },
      ],
    },
    {
      id: "fase-2",
      title: "Competencias comportamentales",
      character: "Clasificatoria",
      weight: "~20%",
      whatEvaluates:
        "Conductas observables del diccionario DIAN: adaptabilidad, comunicación efectiva, trabajo en equipo y comportamiento ético.",
      thematicAxes: [
        "Lectura de escenarios laborales con foco en conducta observable.",
        "Decisiones con impacto colectivo y orientación a resultados.",
        "Coherencia entre acción, norma institucional y servicio al ciudadano.",
      ],
      quickSummary: [
        "Aquí no memorices definiciones sueltas: entrena decisiones concretas en casos de trabajo real.",
        "La respuesta fuerte suele ser la que combina legalidad, cooperación y claridad comunicativa.",
      ],
      checkpoints: [
        {
          id: "an-f2-1",
          prompt:
            "Si cambia un procedimiento y el equipo se resiste, ¿qué conducta puntúa mejor en adaptabilidad?",
          answer:
            "Ajustar el plan, comunicar el propósito del cambio y acompañar su implementación.",
          source: "Diccionario de competencias DIAN",
        },
        {
          id: "an-f2-2",
          prompt: "¿Qué diferencia una comunicación efectiva de un mensaje solo " +
            '"rápido"' + "?",
          answer:
            "La efectiva verifica comprensión, conserva trazabilidad y evita ambigüedad.",
          source: "Diccionario de competencias DIAN",
        },
        {
          id: "an-f2-3",
          prompt:
            "En trabajo en equipo, ¿qué vale más para el evaluador: " +
            '"hacer todo solo"' + " o coordinar acuerdos?",
          answer:
            "Coordinar acuerdos y cumplir compromisos colectivos.",
          source: "Diccionario de competencias DIAN",
        },
        {
          id: "an-f2-4",
          prompt:
            "¿Qué señal práctica muestra comportamiento ético en esta fase?",
          answer:
            "Aplicar el mismo criterio normativo para todos, sin privilegios ni atajos.",
          source: "Diccionario + Código de Integridad DIAN",
        },
      ],
      sources: [
        {
          label: "Diccionario comportamental (Res. 065-2024)",
          href: "/recursos/diccionario-competencias-res-065-2024.pdf",
        },
        {
          label: "Diccionario comportamental DIAN",
          href: "/recursos/diccionario-competencias-dian.pdf",
        },
      ],
    },
    {
      id: "fase-3",
      title: "Integridad y ética pública",
      character: "Clasificatoria",
      weight: "~10-20%",
      whatEvaluates:
        "Coherencia ética frente a dilemas reales del servicio público, alineada al Código de Integridad y al Código de Ética DIAN.",
      thematicAxes: [
        "Valores: honestidad, respeto, compromiso, diligencia y justicia.",
        "Transparencia, manejo de conflicto de interés y rechazo de ventajas indebidas.",
        "Decisiones orientadas al interés general y no al beneficio particular.",
      ],
      quickSummary: [
        "Esta fase no se responde por intuición personal: se responde con criterio de integridad pública.",
        "Cuando tengas duda en una pregunta situacional, prioriza legalidad, transparencia y bien común.",
      ],
      checkpoints: [
        {
          id: "an-f3-1",
          prompt: "¿Cuál es la lista completa de valores institucionales que debes dominar textual?",
          answer: "Honestidad, Respeto, Compromiso, Diligencia y Justicia.",
          source: "Código de Integridad DIAN",
        },
        {
          id: "an-f3-2",
          prompt:
            "Si detectas un conflicto de interés en un trámite, ¿qué paso inicial es obligatorio en términos éticos?",
          answer:
            "Declararlo oportunamente y actuar según los canales formales de prevención/gestión.",
          source: "Código de Integridad y Código de Ética DIAN",
        },
        {
          id: "an-f3-3",
          prompt:
            "¿Qué criterio debe prevalecer frente a una presión para " +
            '"agilizar"' + " un caso sin soporte?",
          answer: "Interés general, legalidad y trazabilidad de la actuación.",
          source: "Código de Integridad DIAN",
        },
        {
          id: "an-f3-4",
          prompt:
            "¿Aceptar un beneficio por acelerar un trámite puede justificarse si el resultado final es correcto?",
          answer: "No. Sigue siendo una ventaja indebida y contraria al marco ético institucional.",
          source: "Código de Ética DIAN",
        },
      ],
      sources: [
        { label: "Código de Integridad DIAN", href: "/recursos/codigo-integridad-dian.pdf" },
        { label: "Código de Ética DIAN (2021)", href: "/recursos/codigo-etica-dian-2021.pdf" },
      ],
    },
  ],
};

export const GESTOR_STUDY_CONTENT: CargoStudyContent = {
  slug: "gestor-i",
  cargo: "Gestor I",
  subtitle: "Ruta integrada de estudio para DIAN 2676",
  opec: "236741",
  level: "Profesional",
  codeGrade: "Código 301 · Grado 1",
  vacancies: "8 vacantes",
  salary: "$6.811.546",
  salaryYear: "Vigencia salarial 2025",
  enrollmentWindow:
    "Inscripciones DIAN 2676: del 28-ene-2026 al 6-feb-2026. La CNSC amplió cierre hasta el 7-feb-2026.",
  lastUpdate: "11-feb-2026",
  sources: [
    { label: "SIMO oferta empleo", href: "https://simo.cnsc.gov.co/#/ofertaEmpleo" },
    { label: "CNSC Convocatoria DIAN 2676", href: "https://www.cnsc.gov.co/node/59797" },
    {
      label: "DIAN comunicado de inscripciones (28-ene-2026)",
      href: "https://www.dian.gov.co/Prensa/Paginas/NG-Inician-inscripciones-para-proceso-de-seleccion-DIAN-2676.aspx",
    },
    { label: "CNSC ampliación al 7-feb-2026", href: "https://www.cnsc.gov.co/node/60247" },
  ],
  phases: [
    {
      id: "fase-1",
      title: "Competencias básicas y funcionales",
      character: "Eliminatoria",
      weight: "~60%",
      whatEvaluates:
        "Dominio del manual de funciones Gestor I, especialmente en recursos administrativos, logística, compras y contratos.",
      thematicAxes: [
        "Proceso administrativo y financiero.",
        "Subproceso: recursos administrativos, operación logística, compras y contratos.",
        "Gestión documental, SIIF Nación II, infraestructura y servicios.",
        "Reglas de contratación pública, control de ingresos y gestión de mercancías.",
      ],
      quickSummary: [
        "En Gestor I debes priorizar comprensión operativa de procesos administrativos y su soporte normativo.",
        "El examen exige que conectes procedimiento, trazabilidad y control institucional en escenarios aplicados.",
      ],
      checkpoints: [
        {
          id: "ge-f1-1",
          prompt: "¿Cuál es el subproceso funcional más crítico que debes dominar en Gestor I?",
          answer: "Recursos administrativos, logística, compras y contratos.",
          source: "Manual de funciones Gestor I",
        },
        {
          id: "ge-f1-2",
          prompt: "¿Gestor I exige experiencia previa para esta convocatoria?",
          answer: "No. La ficha del empleo reporta que no requiere experiencia.",
          source: "Manual de funciones Gestor I",
        },
        {
          id: "ge-f1-3",
          prompt:
            "¿Por qué SIIF Nación II y gestión documental son relevantes en esta fase?",
          answer:
            "Porque hacen parte de la operación administrativa y del control institucional evaluado en competencias funcionales.",
          source: "Manual de funciones Gestor I",
        },
        {
          id: "ge-f1-4",
          prompt: "¿Cuál fue la fecha de cierre oficial ampliada para inscripciones DIAN 2676?",
          answer: "7 de febrero de 2026.",
          source: "CNSC aviso de ampliación 7-feb-2026",
        },
      ],
      sources: [
        { label: "Manual Gestor I (PDF)", href: "/recursos/manual-funciones-gestor-i.pdf" },
        { label: "DIAN naturaleza jurídica", href: "/recursos/dian-naturaleza-juridica.pdf" },
      ],
    },
    {
      id: "fase-2",
      title: "Competencias comportamentales",
      character: "Clasificatoria",
      weight: "~20%",
      whatEvaluates:
        "Comportamientos de innovación, adaptabilidad, solución de problemas y comportamiento ético, con base en diccionario oficial.",
      thematicAxes: [
        "Resolución estructurada de situaciones operativas.",
        "Mejora continua de procesos con enfoque institucional.",
        "Decisión colaborativa y comunicación clara bajo presión.",
      ],
      quickSummary: [
        "El evaluador no premia respuestas heroicas sino conductas consistentes y sostenibles dentro de la entidad.",
        "En cada caso, piensa en impacto colectivo, legalidad y calidad del servicio.",
      ],
      checkpoints: [
        {
          id: "ge-f2-1",
          prompt:
            "Si detectas una ineficiencia repetida del proceso, ¿qué refleja mejor la competencia innovación?",
          answer: "Proponer mejora viable, con soporte y seguimiento de implementación.",
          source: "Diccionario de competencias DIAN",
        },
        {
          id: "ge-f2-2",
          prompt:
            "En solución de problemas, ¿qué orden es más sólido: improvisar o analizar-causas-decidir-ejecutar?",
          answer: "Analizar causas, decidir alternativa y ejecutar con trazabilidad.",
          source: "Diccionario de competencias DIAN",
        },
        {
          id: "ge-f2-3",
          prompt:
            "¿Qué muestra adaptabilidad real cuando cambia una herramienta institucional?",
          answer:
            "Apropiación rápida del cambio y apoyo al equipo para sostener el nuevo estándar.",
          source: "Diccionario de competencias DIAN",
        },
        {
          id: "ge-f2-4",
          prompt: "¿Qué elemento nunca debe perderse en comportamiento ético durante una presión operativa?",
          answer: "Imparcialidad y cumplimiento normativo con evidencia de la actuación.",
          source: "Diccionario + Código de Integridad DIAN",
        },
      ],
      sources: [
        {
          label: "Diccionario comportamental (Res. 065-2024)",
          href: "/recursos/diccionario-competencias-res-065-2024.pdf",
        },
        {
          label: "Diccionario comportamental DIAN",
          href: "/recursos/diccionario-competencias-dian.pdf",
        },
      ],
    },
    {
      id: "fase-3",
      title: "Integridad y ética pública",
      character: "Clasificatoria",
      weight: "~10-20%",
      whatEvaluates:
        "Criterio ético en dilemas de servicio público: conflicto de interés, transparencia, trato justo y responsabilidad institucional.",
      thematicAxes: [
        "Aplicación práctica de los cinco valores del Código de Integridad.",
        "Prevención de corrupción y rechazo de beneficios indebidos.",
        "Decisiones objetivas en beneficio del interés general.",
      ],
      quickSummary: [
        "Aquí se evalúa consistencia ética real, no discursos. Tu decisión debe poder explicarse y auditarse.",
        "La mejor respuesta suele ser la que protege legalidad, transparencia y equidad del trámite público.",
      ],
      checkpoints: [
        {
          id: "ge-f3-1",
          prompt: "¿Qué valor exige aplicar reglas de forma equitativa sin favorecer personas?",
          answer: "Justicia.",
          source: "Código de Integridad DIAN",
        },
        {
          id: "ge-f3-2",
          prompt:
            "Si te ofrecen una ventaja por priorizar un trámite, ¿qué decisión es compatible con integridad pública?",
          answer: "Rechazar, documentar y reportar por el canal institucional.",
          source: "Código de Ética DIAN",
        },
        {
          id: "ge-f3-3",
          prompt:
            "¿Qué hacer cuando un caso puede comprometer tu imparcialidad personal?",
          answer:
            "Gestionar el conflicto de interés de forma oportuna y transparente según reglas institucionales.",
          source: "Código de Integridad + Código de Ética",
        },
        {
          id: "ge-f3-4",
          prompt: "¿Qué criterio final debes usar si dos respuestas parecen correctas en un dilema ético?",
          answer:
            "Elegir la opción que mejor proteja el bien público, la transparencia y la legalidad.",
          source: "Código de Integridad DIAN",
        },
      ],
      sources: [
        { label: "Código de Integridad DIAN", href: "/recursos/codigo-integridad-dian.pdf" },
        { label: "Código de Ética DIAN (2021)", href: "/recursos/codigo-etica-dian-2021.pdf" },
      ],
    },
  ],
};
