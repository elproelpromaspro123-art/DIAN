import {
  ANALISTA_V_OFFICIAL_SNAPSHOT,
  GESTOR_I_OFFICIAL_SNAPSHOT,
  OFFICIAL_SIMO_SNAPSHOT_LABEL,
  OFFICIAL_SIMO_SOURCE_URL,
} from "@/data/official-dian2676";

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
  subtitle: "Ruta integrada de estudio oficial para DIAN 2676",
  opec: ANALISTA_V_OFFICIAL_SNAPSHOT.opecs.join(" / "),
  level: "Técnico",
  codeGrade: "Código 205 · Grado 5",
  vacancies: `${ANALISTA_V_OFFICIAL_SNAPSHOT.vacantesTotal} vacantes oficiales (236732: 4 + 236756: 10)`,
  salary: ANALISTA_V_OFFICIAL_SNAPSHOT.salario2025,
  salaryYear: "Vigencia salarial 2025",
  enrollmentWindow:
    "Inscripciones DIAN 2676: del 28-ene-2026 al 6-feb-2026, con ampliación oficial CNSC hasta el 7-feb-2026.",
  lastUpdate: `Corte oficial SIMO: ${OFFICIAL_SIMO_SNAPSHOT_LABEL}`,
  sources: [
    { label: "SIMO API · ofertaPublica (corte oficial)", href: OFFICIAL_SIMO_SOURCE_URL },
    { label: "SIMO · Oferta de empleo", href: "https://simo.cnsc.gov.co/#/ofertaEmpleo" },
    { label: "CNSC · Convocatoria DIAN 2676", href: "https://www.cnsc.gov.co/node/59797" },
    {
      label: "CNSC · Acuerdo 205 de 2025",
      href: "https://www.cnsc.gov.co/convocatorias/dian-2022?field_tipo_de_contenido_convocat_target_id=65",
    },
    {
      label: "CNSC · Anexo DIAN 2676 de 2025",
      href: "https://www.cnsc.gov.co/convocatorias/dian-2022?field_tipo_de_contenido_convocat_target_id=65",
    },
    {
      label: "DIAN · Comunicado de inicio de inscripciones",
      href: "https://www.dian.gov.co/Prensa/Paginas/NG-Inician-inscripciones-en-la-modalidad-abierta-del-concurso-de-meritos-DIAN-2676.aspx",
    },
  ],
  phases: [
    {
      id: "fase-1",
      title: "Competencias básicas y funcionales",
      character: "Eliminatoria",
      weight: "65% (mínimo aprobatorio: 70/100)",
      whatEvaluates:
        "Dominio aplicado del manual funcional de Analista V: cobro persuasivo/coactivo, control extensivo, devoluciones y compensaciones, medidas cautelares, procesos concursales y soporte normativo administrativo/constitucional.",
      thematicAxes: [
        "Manual de funciones Analista V: propósito, proceso y subproceso del cargo.",
        "Cobro persuasivo y cobro coactivo (ET arts. 823 a 843).",
        "Mandamiento de pago, título ejecutivo y excepciones en cobro.",
        "Medidas cautelares (embargo/secuestro) y debido proceso.",
        "Devoluciones y compensaciones con soporte documental y trazabilidad.",
        "Control extensivo de obligaciones y campañas de cumplimiento.",
        "DIAN: naturaleza jurídica, objeto, estructura y dirección.",
        "Constitución, CPACA, MIPG, gestión documental, transparencia y PQRSF.",
      ],
      quickSummary: [
        "Esta fase define permanencia: si no alcanzas 70/100, quedas fuera del concurso.",
        "El entrenamiento útil combina norma + caso operativo, no memorización aislada.",
        "Prioriza secuencia real de actuación: recaudo, cartera, cobro, devoluciones y control.",
        "La Valoración de Antecedentes (10%) existe en Analista V, pero se evalúa documentalmente fuera de este simulador.",
      ],
      checkpoints: [
        {
          id: "an-f1-1",
          prompt: "¿Qué bloque funcional del cargo Analista V debes dominar primero para asegurar el mínimo eliminatorio?",
          answer:
            "Administración de cartera y recaudo/devoluciones, porque concentra cobro, devoluciones, control extensivo y medidas cautelares del manual.",
          source: "Manual Analista V (Res. DIAN 0067 de 2024)",
        },
        {
          id: "an-f1-2",
          prompt: "¿Qué diferencia operativa clave existe entre cobro persuasivo y coactivo?",
          answer:
            "El persuasivo busca pago voluntario; el coactivo ejecuta administrativamente la obligación con mandamiento de pago y posibles cautelares.",
          source: "Estatuto Tributario (arts. 823 y ss.)",
        },
        {
          id: "an-f1-3",
          prompt: "¿Cuál artículo del Estatuto Tributario debes memorizar para medidas cautelares?",
          answer: "El artículo 837, por regular embargo y secuestro en el proceso de cobro coactivo.",
          source: "Estatuto Tributario, art. 837",
        },
        {
          id: "an-f1-4",
          prompt: "¿Qué principios constitucionales rigen el sistema tributario colombiano?",
          answer: "Equidad, eficiencia y progresividad (artículo 363 de la Constitución Política).",
          source: "Constitución Política, art. 363",
        },
        {
          id: "an-f1-5",
          prompt: "En una solicitud de devolución, ¿qué rol técnico cumple Analista V?",
          answer:
            "Verificación integral de requisitos, soportes y consistencia, con trazabilidad para decisión administrativa fundada.",
          source: "Manual Analista V + procedimiento DIAN de devoluciones",
        },
        {
          id: "an-f1-6",
          prompt: "¿Por qué CPACA y derecho de petición son tema obligatorio para esta fase?",
          answer:
            "Porque regulan debido proceso, motivación de actos y términos de respuesta institucional en actuaciones administrativas.",
          source: "Ley 1437 de 2011 y Ley 1755 de 2015",
        },
        {
          id: "an-f1-7",
          prompt: "¿Qué relación práctica tiene MIPG con el trabajo del Analista V?",
          answer:
            "Ordena gestión por resultados, control interno y mejora continua en el proceso misional, no solo cumplimiento formal de tareas.",
          source: "Marco MIPG · Función Pública",
        },
        {
          id: "an-f1-8",
          prompt: "¿Qué fecha absoluta quedó como cierre de inscripciones en DIAN 2676?",
          answer: "El cierre oficial ampliado fue el 7 de febrero de 2026.",
          source: "CNSC · aviso de ampliación DIAN 2676",
        },
      ],
      sources: [
        { label: "Manual Analista V (PDF)", href: "/recursos/manual-funciones-analista-v.pdf" },
        { label: "DIAN · Naturaleza jurídica (PDF)", href: "/recursos/dian-naturaleza-juridica.pdf" },
        {
          label: "Ley 1437 de 2011",
          href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41249",
        },
        {
          label: "Ley 1712 de 2014",
          href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56882",
        },
      ],
    },
    {
      id: "fase-2",
      title: "Competencias comportamentales",
      character: "Clasificatoria",
      weight: "15%",
      whatEvaluates:
        "Conductas observables del cargo Analista V: Comportamiento ético (N4), Adaptabilidad (N4), Comunicación efectiva (N3) y Trabajo en equipo (N3), en escenarios de presión y coordinación interáreas.",
      thematicAxes: [
        "Comportamiento ético N4: referente institucional e imparcialidad.",
        "Adaptabilidad N4: liderazgo de cambio y rediseño metodológico.",
        "Comunicación efectiva N3: elección de canal, claridad y reducción de barreras.",
        "Trabajo en equipo N3: coordinación y cumplimiento de acuerdos colectivos.",
        "Gestión de conflictos entre áreas misionales y de apoyo.",
        "Toma de decisiones con impacto ciudadano bajo restricciones de tiempo.",
        "Coherencia entre directriz operativa y marco de integridad pública.",
        "Escenarios situacionales de cobro, devoluciones y control extensivo.",
      ],
      quickSummary: [
        "No gana la respuesta más rápida, gana la conducta observable alineada al diccionario oficial.",
        "En nivel 4 se evalúa capacidad de influir en prácticas del equipo, no solo conducta individual.",
        "Identifica primero la competencia evaluada y luego el comportamiento esperado por nivel.",
        "Evita opciones heroicas o informales que sacrifiquen legalidad y trazabilidad.",
      ],
      checkpoints: [
        {
          id: "an-f2-1",
          prompt: "Si una instrucción presiona atajos sin soporte, ¿qué competencia se activa primero?",
          answer:
            "Comportamiento ético N4: sostener legalidad, advertir riesgo y orientar una salida institucional válida.",
          source: "Diccionario comportamental DIAN (Res. 065 de 2024)",
        },
        {
          id: "an-f2-2",
          prompt: "¿Qué diferencia N4 de Adaptabilidad frente a N3?",
          answer:
            "N4 diseña y promueve cambios organizacionales; N3 se centra en ajustarse proactivamente al cambio.",
          source: "Res. 065 de 2024 · niveles de competencia",
        },
        {
          id: "an-f2-3",
          prompt: "¿Cómo evidenciar Comunicación efectiva N3 en un caso técnico complejo?",
          answer:
            "Seleccionando canal idóneo, mensaje claro con soporte y verificación explícita de comprensión.",
          source: "Diccionario comportamental DIAN",
        },
        {
          id: "an-f2-4",
          prompt: "En Trabajo en equipo N3, ¿qué pesa más: esfuerzo individual o coordinación efectiva?",
          answer:
            "La coordinación con seguimiento de compromisos para lograr resultados comunes.",
          source: "Diccionario comportamental DIAN",
        },
        {
          id: "an-f2-5",
          prompt: "Si hay conflicto entre áreas por prioridades, ¿cuál respuesta puntúa mejor?",
          answer:
            "Construir acuerdo operativo con roles claros, plazos y control de cumplimiento.",
          source: "Diccionario + enfoque de trabajo colaborativo DIAN",
        },
        {
          id: "an-f2-6",
          prompt: "¿Qué error comportamental es frecuente en simulacros?",
          answer:
            "Elegir opción técnicamente útil, pero éticamente débil por omitir trazabilidad o imparcialidad.",
          source: "Diccionario comportamental + Código de Integridad",
        },
        {
          id: "an-f2-7",
          prompt: "¿Qué señal práctica indica Adaptabilidad N4 en un cambio de sistema?",
          answer:
            "No solo usarlo: diseñar transición, acompañar adopción y medir impacto del cambio.",
          source: "Res. 065 de 2024",
        },
        {
          id: "an-f2-8",
          prompt: "¿Cuál criterio desempata entre dos respuestas viables en fase comportamental?",
          answer:
            "La que mejor combine legalidad, efectividad operativa y conducta observable exigida por nivel.",
          source: "Diccionario comportamental DIAN",
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
      weight: "10%",
      whatEvaluates:
        "Criterio ético aplicado a dilemas reales del servicio público: conflicto de interés, trato imparcial, transparencia, responsabilidad por la elección y coherencia con Código de Integridad y Código de Ética DIAN.",
      thematicAxes: [
        "Valores del Código de Integridad: Honestidad, Respeto, Compromiso, Diligencia y Justicia.",
        "Conductas " + '"lo que hago"' + " y " + '"lo que no hago"' + " por cada valor.",
        "Juramento de integridad y deber de ejemplaridad pública.",
        "Principios del Código de Ética (10 principios institucionales).",
        "Definiciones de principios, pautas éticas y valores.",
        "Valores aspiracionales: Valentía/oso, Objetividad/lechuza, Templanza/jaguar, Providencia/colibrí.",
        "Dilemas en cobro, devoluciones, manejo de información y conflicto de interés.",
        "Toma de decisión con evidencia, legalidad y bien común.",
      ],
      quickSummary: [
        "La respuesta ética correcta debe ser defendible y auditable, no solo " + '"bien intencionada"' + ".",
        "En dilemas, prioriza interés general, transparencia y debido proceso.",
        "No confundas principios éticos con competencias funcionales del cargo.",
        "Recuerda: en Analista V la fase de antecedentes (10%) es independiente de esta prueba de integridad.",
      ],
      checkpoints: [
        {
          id: "an-f3-1",
          prompt: "¿Qué lista de valores debes memorizar textual para esta fase?",
          answer: "Honestidad, Respeto, Compromiso, Diligencia y Justicia.",
          source: "Código de Integridad DIAN",
        },
        {
          id: "an-f3-2",
          prompt: "Si aparece conflicto de interés en una devolución, ¿cuál es el paso obligatorio?",
          answer: "Declararlo oportunamente y apartarse o gestionarlo por el canal formal institucional.",
          source: "Código de Integridad + Código de Ética DIAN",
        },
        {
          id: "an-f3-3",
          prompt: "¿Qué pilar destaca el preámbulo del Código de Ética?",
          answer: "La libertad de decisión, asociada a responsabilidad por la elección.",
          source: "Código de Ética DIAN (2021)",
        },
        {
          id: "an-f3-4",
          prompt: "¿Cómo se define principio ético en el Código de Ética DIAN?",
          answer: "Como expresión del deber ser que orienta interpretación y conducta.",
          source: "Código de Ética DIAN (2021)",
        },
        {
          id: "an-f3-5",
          prompt: "¿Qué hacer ante ofrecimiento de ventaja indebida en cobro coactivo?",
          answer: "Rechazar, documentar y reportar por conducto institucional.",
          source: "Código de Integridad · Honestidad",
        },
        {
          id: "an-f3-6",
          prompt: "¿Qué valor exige decidir con evidencia y sin parcialidad?",
          answer: "Justicia.",
          source: "Código de Integridad DIAN",
        },
        {
          id: "an-f3-7",
          prompt: "¿Cuáles son los valores aspiracionales y su símbolo animal?",
          answer:
            "Valentía (oso de anteojos), Objetividad (lechuza), Templanza (jaguar), Providencia (colibrí).",
          source: "Código de Integridad DIAN",
        },
        {
          id: "an-f3-8",
          prompt: "Si dos respuestas parecen viables en un dilema ético, ¿qué criterio final usas?",
          answer:
            "Elegir la opción que mejor preserve legalidad, imparcialidad, trazabilidad y protección del interés general.",
          source: "Código de Ética + Código de Integridad",
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
  subtitle: "Ruta integrada de estudio oficial para DIAN 2676",
  opec: GESTOR_I_OFFICIAL_SNAPSHOT.opecs.join(" / "),
  level: "Profesional",
  codeGrade: "Código 301 · Grado 1",
  vacancies: `${GESTOR_I_OFFICIAL_SNAPSHOT.vacantesTotal} vacantes oficiales (236741: 8 + 236767: 189)`,
  salary: GESTOR_I_OFFICIAL_SNAPSHOT.salario2025,
  salaryYear: "Vigencia salarial 2025",
  enrollmentWindow:
    "Inscripciones DIAN 2676: del 28-ene-2026 al 6-feb-2026, con ampliación oficial CNSC hasta el 7-feb-2026.",
  lastUpdate: `Corte oficial SIMO: ${OFFICIAL_SIMO_SNAPSHOT_LABEL}`,
  sources: [
    { label: "SIMO API · ofertaPublica (corte oficial)", href: OFFICIAL_SIMO_SOURCE_URL },
    { label: "SIMO · Oferta de empleo", href: "https://simo.cnsc.gov.co/#/ofertaEmpleo" },
    { label: "CNSC · Convocatoria DIAN 2676", href: "https://www.cnsc.gov.co/node/59797" },
    {
      label: "CNSC · Acuerdo 205 de 2025",
      href: "https://www.cnsc.gov.co/convocatorias/dian-2022?field_tipo_de_contenido_convocat_target_id=65",
    },
    {
      label: "CNSC · Anexo DIAN 2676 de 2025",
      href: "https://www.cnsc.gov.co/convocatorias/dian-2022?field_tipo_de_contenido_convocat_target_id=65",
    },
    {
      label: "DIAN · Comunicado de inicio de inscripciones",
      href: "https://www.dian.gov.co/Prensa/Paginas/NG-Inician-inscripciones-en-la-modalidad-abierta-del-concurso-de-meritos-DIAN-2676.aspx",
    },
  ],
  phases: [
    {
      id: "fase-1",
      title: "Competencias básicas y funcionales",
      character: "Eliminatoria",
      weight: "70% (mínimo aprobatorio: 70/100)",
      whatEvaluates:
        "Aplicación del manual funcional del Gestor I en recursos administrativos, logística, compras y contratos; incluye SIIF Nación II, gestión documental, custodia de mercancías, infraestructura y soporte normativo de contratación y actuación administrativa.",
      thematicAxes: [
        "Manual de funciones Gestor I: propósito, proceso y subproceso del cargo.",
        "Contratación pública: Ley 80 de 1993 y Ley 1150 de 2007.",
        "Modalidades de selección y trazabilidad en SECOP II.",
        "Operación financiera y presupuestal en SIIF Nación II.",
        "Gestión documental, TRD y conservación de evidencia administrativa.",
        "Custodia, registro, disposición y control de mercancías DIAN.",
        "Infraestructura, servicios generales y soporte logístico institucional.",
        "Constitución, CPACA, MIPG, transparencia y PQRSF.",
      ],
      quickSummary: [
        "Es la fase más pesada del Gestor I y también eliminatoria: exige 70/100 mínimo.",
        "No basta saber conceptos de contratación; debes resolver escenarios de operación real.",
        "Cruza siempre procedimiento, soporte documental y control interno.",
        "Prioriza bancos de preguntas con distractores normativos plausibles.",
      ],
      checkpoints: [
        {
          id: "ge-f1-1",
          prompt: "¿Cuál es el núcleo funcional del Gestor I que más preguntas concentra?",
          answer:
            "Recursos administrativos, operación logística, compras y contratos, incluyendo SIIF y gestión documental.",
          source: "Manual Gestor I (Res. DIAN 0067 de 2024)",
        },
        {
          id: "ge-f1-2",
          prompt: "¿Qué ley es base del Estatuto General de Contratación Pública?",
          answer: "La Ley 80 de 1993.",
          source: "Ley 80 de 1993",
        },
        {
          id: "ge-f1-3",
          prompt: "¿Para qué se usa SECOP II en un proceso contractual?",
          answer:
            "Para gestionar y publicar etapas del ciclo contractual con trazabilidad y transparencia.",
          source: "Marco Colombia Compra Eficiente + Ley 1150 de 2007",
        },
        {
          id: "ge-f1-4",
          prompt: "¿Qué función cumple SIIF Nación II en el trabajo del Gestor I?",
          answer:
            "Registrar y controlar operaciones presupuestales, contables y de tesorería del gasto público.",
          source: "Manual Gestor I + lineamientos SIIF",
        },
        {
          id: "ge-f1-5",
          prompt: "¿Por qué gestión documental es crítica para esta fase?",
          answer:
            "Porque soporta legalidad, auditoría, defensa jurídica y continuidad operativa de los procesos administrativos.",
          source: "Manual Gestor I + normativa archivística",
        },
        {
          id: "ge-f1-6",
          prompt: "¿Cuál término general debes recordar para peticiones en CPACA?",
          answer: "15 días hábiles (con términos especiales para documentos y consultas).",
          source: "Ley 1437 de 2011, art. 14 (mod. Ley 1755 de 2015)",
        },
        {
          id: "ge-f1-7",
          prompt: "¿Qué fecha cerró oficialmente la inscripción de DIAN 2676?",
          answer: "El 7 de febrero de 2026, por ampliación oficial de la CNSC.",
          source: "CNSC · aviso de ampliación DIAN 2676",
        },
        {
          id: "ge-f1-8",
          prompt: "¿Qué error elimina más puntaje en simulacros funcionales de Gestor I?",
          answer:
            "Confundir rapidez operativa con cumplimiento normativo y omitir trazabilidad documental en decisiones.",
          source: "Ley 80/1993 + Ley 1150/2007 + CPACA",
        },
      ],
      sources: [
        { label: "Manual Gestor I (PDF)", href: "/recursos/manual-funciones-gestor-i.pdf" },
        {
          label: "Ley 80 de 1993",
          href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=304",
        },
        {
          label: "Ley 1150 de 2007",
          href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=25806",
        },
        {
          label: "Ley 1437 de 2011",
          href: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41249",
        },
      ],
    },
    {
      id: "fase-2",
      title: "Competencias comportamentales",
      character: "Clasificatoria",
      weight: "20%",
      whatEvaluates:
        "Conductas del diccionario oficial para Gestor I: Comportamiento ético (N4), Innovación (N3), Adaptabilidad (N3) y Solución de problemas (N3), con situaciones de logística, contratación y operación administrativa.",
      thematicAxes: [
        "Comportamiento ético N4 en decisiones de compras y manejo de información.",
        "Innovación N3: mejora de procesos con sustento técnico.",
        "Adaptabilidad N3 ante cambios de herramienta, norma o carga operativa.",
        "Solución de problemas N3 en incidentes críticos de operación.",
        "Gestión de riesgos y control de ejecución de planes de acción.",
        "Balance entre oportunidad del servicio y cumplimiento de controles.",
        "Escenarios interáreas (almacén, contratación, financiero, soporte).",
        "Diferenciación entre conducta aceptable y atajo informal.",
      ],
      quickSummary: [
        "La respuesta correcta suele combinar criterio técnico y conducta observable por nivel.",
        "Innovar no es improvisar: debe existir soporte, viabilidad e impacto medible.",
        "Adaptabilidad N3 evalúa ajuste proactivo, no obediencia pasiva.",
        "En dilemas de presión, la opción ética y trazable predomina sobre la opción rápida.",
      ],
      checkpoints: [
        {
          id: "ge-f2-1",
          prompt: "¿Qué distingue Innovación N3 de una idea aislada?",
          answer:
            "Que incorpora sustento conceptual, evaluación de impacto y ruta de implementación verificable.",
          source: "Diccionario comportamental DIAN (Res. 065 de 2024)",
        },
        {
          id: "ge-f2-2",
          prompt: "En Adaptabilidad N3, ¿qué debes demostrar en un cambio de sistema?",
          answer:
            "Ajuste proactivo de conducta, actitud positiva e identificación de repercusiones operativas.",
          source: "Res. 065 de 2024",
        },
        {
          id: "ge-f2-3",
          prompt: "¿Qué evidencia Solución de problemas N3 en un caso crítico?",
          answer:
            "Diagnóstico causal, selección de alternativa viable y control de ejecución con autocontrol.",
          source: "Diccionario comportamental DIAN",
        },
        {
          id: "ge-f2-4",
          prompt: "¿Cómo se expresa Comportamiento ético N4 en contratación?",
          answer:
            "Defendiendo imparcialidad, transparencia y rechazo de presiones indebidas, incluso bajo urgencia.",
          source: "Diccionario + Código de Integridad",
        },
        {
          id: "ge-f2-5",
          prompt: "¿Qué error comportamental es frecuente en esta fase?",
          answer:
            "Escoger respuestas eficaces operativamente pero contrarias a transparencia o control institucional.",
          source: "Diccionario comportamental DIAN",
        },
        {
          id: "ge-f2-6",
          prompt: "¿Qué pesa más en escenarios de equipo interáreas?",
          answer:
            "Coordinación efectiva con seguimiento de acuerdos, no solución individual aislada.",
          source: "Diccionario comportamental DIAN",
        },
        {
          id: "ge-f2-7",
          prompt: "Si dos opciones son técnicamente posibles, ¿cómo desempatas?",
          answer:
            "Con la que refleje mejor la conducta observable del nivel exigido y preserve integridad pública.",
          source: "Res. 065 de 2024 + Código de Integridad",
        },
        {
          id: "ge-f2-8",
          prompt: "¿Qué práctica eleva puntaje en preguntas situacionales?",
          answer:
            "Leer primero el verbo de conducta (promueve, ajusta, controla, decide) y luego validar impacto institucional.",
          source: "Guía de lectura de competencias DIAN",
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
      weight: "10%",
      whatEvaluates:
        "Aplicación práctica de valores y principios éticos DIAN en dilemas de logística, contratación, custodia de bienes y manejo de información pública.",
      thematicAxes: [
        "Código de Integridad: 5 valores y conductas esperadas/prohibidas.",
        "Código de Ética: 10 principios institucionales.",
        "Autocuidado, cuidado del otro y cuidado de la función pública.",
        "Responsabilidad por la elección y prevalencia del ser.",
        "Conflicto de interés y rechazo de beneficios indebidos.",
        "Transparencia y trazabilidad en compras, pagos y custodia.",
        "Relación entre dignidad humana, respeto e igualdad de trato.",
        "Decisión ética bajo presión operativa.",
      ],
      quickSummary: [
        "La mejor respuesta ética es la que podrías defender en auditoría y control disciplinario.",
        "No normalices atajos " + '"porque todos lo hacen"' + ": ese distractor aparece con frecuencia.",
        "Integra valor + principio + procedimiento; no respondas solo desde intuición personal.",
        "Memoriza definiciones base (principio, pauta ética, valor) para evitar confusiones conceptuales.",
      ],
      checkpoints: [
        {
          id: "ge-f3-1",
          prompt: "¿Qué valor prohíbe aceptar incentivos para favorecer proveedores o trámites?",
          answer: "Honestidad.",
          source: "Código de Integridad DIAN",
        },
        {
          id: "ge-f3-2",
          prompt: "Si surge conflicto de interés en una decisión contractual, ¿qué corresponde?",
          answer: "Declararlo y gestionarlo de manera formal, apartándose cuando proceda.",
          source: "Código de Integridad + Código de Ética",
        },
        {
          id: "ge-f3-3",
          prompt: "¿Qué principio del Código de Ética enfatiza la consecuencia de decidir?",
          answer: "Responsabilidad por la elección.",
          source: "Código de Ética DIAN (2021)",
        },
        {
          id: "ge-f3-4",
          prompt: "¿Qué conducta refleja cuidado de la función pública?",
          answer:
            "Actuar con prudencia y transparencia para proteger legitimidad institucional en lo público y lo privado.",
          source: "Código de Ética DIAN",
        },
        {
          id: "ge-f3-5",
          prompt: "¿Qué hacer ante ofrecimiento de regalo por agilizar un pago?",
          answer: "Rechazar, documentar y reportar por el canal institucional correspondiente.",
          source: "Código de Integridad · Honestidad",
        },
        {
          id: "ge-f3-6",
          prompt: "¿Qué error ético suele confundir en simulacros de Gestor I?",
          answer:
            "Elegir opción aparentemente eficiente que omite soporte documental o igualdad de trato en el proceso.",
          source: "Código de Ética + Código de Integridad",
        },
        {
          id: "ge-f3-7",
          prompt: "¿Cuál es el pilar del preámbulo del Código de Ética DIAN?",
          answer: "La libertad de decisión, asociada a responsabilidad individual.",
          source: "Código de Ética DIAN (2021)",
        },
        {
          id: "ge-f3-8",
          prompt: "Si dos respuestas parecen correctas en un dilema, ¿qué criterio final priorizas?",
          answer:
            "La que mejor proteja interés general, legalidad, imparcialidad y trazabilidad verificable.",
          source: "Código de Integridad + principios éticos DIAN",
        },
      ],
      sources: [
        { label: "Código de Integridad DIAN", href: "/recursos/codigo-integridad-dian.pdf" },
        { label: "Código de Ética DIAN (2021)", href: "/recursos/codigo-etica-dian-2021.pdf" },
      ],
    },
  ],
};
