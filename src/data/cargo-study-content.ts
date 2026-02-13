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

export type AxisLesson = {
  title: string;
  whatIs: string;
  examFocus: string;
};

export type StudyPhase = {
  id: "fase-1" | "fase-2" | "fase-3";
  title: string;
  character: string;
  weight: string;
  whatEvaluates: string;
  thematicAxes: string[];
  axisLessons?: AxisLesson[];
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
      axisLessons: [
        {
          title: "Manual de funciones Analista V: propósito, proceso y subproceso del cargo",
          whatIs: "El manual de funciones define el propósito principal del Analista V: participar en el proceso misional de cumplimiento de obligaciones tributarias, aduaneras y cambiarias. El subproceso principal es administración de cartera y recaudo/devoluciones. Esto incluye cobro persuasivo, cobro coactivo, control extensivo de obligaciones, devoluciones y compensaciones, y medidas cautelares. Es fundamental entender que el cargo pertenece al nivel técnico (Código 205, Grado 5) y se enfoca en ejecución operativa con soporte normativo, no en diseño de política.",
          examFocus: "Las preguntas presentan situaciones donde debes identificar si una función pertenece al Analista V o a otro cargo. También preguntan sobre el alcance operativo: ¿puede un Analista V decidir una política de recaudo? No, ejecuta bajo lineamientos. Espera preguntas que mezclen funciones de Gestor I para confundir.",
        },
        {
          title: "Cobro persuasivo y cobro coactivo (ET arts. 823 a 843)",
          whatIs: "El cobro persuasivo busca que el contribuyente pague voluntariamente su obligación antes de iniciar proceso judicial. La DIAN envía comunicaciones, llamadas y requerimientos informales. Si no funciona, se activa el cobro coactivo: un proceso ejecutivo administrativo donde la DIAN actúa como juez y parte. El proceso inicia con un título ejecutivo (liquidación oficial en firme, declaración tributaria, etc.) y continúa con el mandamiento de pago. El deudor puede proponer excepciones dentro de los 15 días siguientes a la notificación (art. 831 ET).",
          examFocus: "Las preguntas evalúan la secuencia: ¿qué va primero, el mandamiento de pago o el título ejecutivo? ¿Cuándo procede ir directo a cobro coactivo sin persuasivo? ¿Cuáles son las excepciones válidas? Espera distractores que mezclen términos de proceso civil con proceso administrativo de cobro.",
        },
        {
          title: "Mandamiento de pago, título ejecutivo y excepciones en cobro",
          whatIs: "El título ejecutivo es el documento que fundamenta la obligación: puede ser una liquidación oficial ejecutoriada, una declaración tributaria que constituye título, una garantía, o un contrato. El mandamiento de pago es el acto administrativo que ordena al deudor pagar la obligación dentro de los 15 días siguientes. Las excepciones al mandamiento (art. 831 ET) incluyen: pago efectivo, existencia de acuerdo de pago, falta de ejecutoria del título, pérdida de fuerza ejecutoria, interposición de demandas ante la jurisdicción contenciosa, entre otras.",
          examFocus: "Te presentarán un caso con un título ejecutivo y te preguntarán si procede el mandamiento de pago. Los distractores incluirán excepciones inválidas o confundirán los plazos. Pregunta típica: '¿Qué sucede si el contribuyente pagó parcialmente antes del mandamiento?'",
        },
        {
          title: "Medidas cautelares (embargo/secuestro) y debido proceso",
          whatIs: "Las medidas cautelares en cobro coactivo incluyen embargo de cuentas bancarias, bienes muebles e inmuebles, y retención de pagos de terceros. El artículo 837 del ET regula estas medidas. Solo proceden cuando hay título ejecutivo válido y mandamiento de pago notificado. El debido proceso (art. 29 Constitución) exige que toda actuación respete notificación válida, oportunidad de defensa y proporcionalidad de la medida. No se puede embargar más de lo necesario para cubrir la obligación.",
          examFocus: "Las preguntas plantean escenarios de urgencia: '¿Se puede embargar sin notificar el mandamiento?'. La respuesta correcta siempre prioriza debido proceso. También preguntan sobre proporcionalidad: no se embarga la totalidad de bienes cuando la deuda es menor. Espera trampas donde la opción 'eficiente' viola garantías constitucionales.",
        },
        {
          title: "Devoluciones y compensaciones con soporte documental y trazabilidad",
          whatIs: "La devolución es el procedimiento mediante el cual la DIAN reintegra valores pagados en exceso o indebidamente. La compensación permite aplicar esos saldos a favor contra obligaciones pendientes. El artículo 855 del ET establece los plazos: 50 días hábiles para devolución ordinaria, 30 con garantía. El Analista V verifica que el expediente tenga todos los soportes: declaración, pagos, certificados y documentos contables. Si falta un soporte, debe requerir al contribuyente antes de decidir.",
          examFocus: "Preguntas sobre plazos (50 vs 30 días), requisitos documentales y qué hacer cuando falta un soporte. La trampa frecuente es elegir 'aprobar rápido para cumplir meta' cuando faltan documentos. La respuesta correcta siempre exige verificación completa antes de decidir.",
        },
        {
          title: "Control extensivo de obligaciones y campañas de cumplimiento",
          whatIs: "El control extensivo son las acciones masivas de la DIAN para promover el cumplimiento voluntario de obligaciones. Incluye cruces de información, notificaciones automáticas, campañas de correo y visitas de verificación. El Analista V participa en la ejecución operativa de estas acciones: identificar omisos, gestionar requerimientos y registrar resultados. La cuenta corriente del contribuyente es la herramienta central para verificar el estado de obligaciones.",
          examFocus: "Las preguntas evalúan si entiendes la diferencia entre control extensivo (masivo, preventivo) y fiscalización (individual, profunda). También preguntan sobre la cuenta corriente: ¿qué información contiene? ¿Quién puede consultarla? Espera preguntas sobre protección de datos del contribuyente.",
        },
        {
          title: "DIAN: naturaleza jurídica, objeto, estructura y dirección",
          whatIs: "La DIAN es una Unidad Administrativa Especial adscrita al Ministerio de Hacienda y Crédito Público. Tiene personería jurídica, autonomía administrativa y presupuestal. Su objeto principal es administrar y controlar el cumplimiento de obligaciones tributarias, aduaneras y cambiarias. La estructura incluye el Director General, las Direcciones de Gestión (Impuestos, Aduanas, Jurídica, etc.) y las Direcciones Seccionales. Los Decretos 4048 de 2008 y 1742 de 2020 definen el marco orgánico.",
          examFocus: "Las preguntas verifican conocimientos básicos: ¿a quién está adscrita la DIAN? ¿Tiene personalidad jurídica? ¿Cuál es su autonomía? Espera preguntas que confundan 'adscrita' con 'vinculada' o que pregunten si la DIAN puede emitir normas tributarias (no puede, eso es del Congreso).",
        },
        {
          title: "Constitución, CPACA, MIPG, gestión documental, transparencia y PQRSF",
          whatIs: "El marco normativo transversal incluye: la Constitución (art. 29 debido proceso, art. 209 función administrativa, art. 363 principios tributarios); la Ley 1437 de 2011 (CPACA) que regula actuaciones administrativas y derecho de petición; la Ley 1712 de 2014 sobre transparencia y acceso a información; MIPG como modelo de gestión por resultados; y el sistema de PQRSF (peticiones, quejas, reclamos, sugerencias y felicitaciones). Los plazos de petición general son 15 días hábiles.",
          examFocus: "Preguntas sobre plazos de petición (15 días general, 10 para información, 30 para consultas). También sobre principios constitucionales del sistema tributario (equidad, eficiencia, progresividad). Espera preguntas que mezclen CPACA con normas tributarias especiales para confundir jurisdicción.",
        },
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
        "Conductas observables del cargo Analista V: Comportamiento ético (N4), Adaptabilidad (N3), Comunicación efectiva (N3) y Trabajo en equipo (N3), en escenarios de presión y coordinación interáreas.",
      thematicAxes: [
        "Comportamiento ético N4: referente institucional e imparcialidad.",
        "Adaptabilidad N3: ajuste proactivo ante cambios de entorno y proceso.",
        "Comunicación efectiva N3: elección de canal, claridad y reducción de barreras.",
        "Trabajo en equipo N3: coordinación y cumplimiento de acuerdos colectivos.",
        "Gestión de conflictos entre áreas misionales y de apoyo.",
        "Toma de decisiones con impacto ciudadano bajo restricciones de tiempo.",
        "Coherencia entre directriz operativa y marco de integridad pública.",
        "Escenarios situacionales de cobro, devoluciones y control extensivo.",
      ],
      axisLessons: [
        {
          title: "Comportamiento ético N4: referente institucional e imparcialidad",
          whatIs: "En nivel 4, no basta con ser ético personalmente: debes ser referente para otros. Esto implica promover activamente la integridad en tu equipo, señalar riesgos éticos antes de que se materialicen, y defender la legalidad incluso cuando hay presión jerárquica. El Diccionario comportamental DIAN (Res. 065 de 2024) define conductas observables específicas para este nivel: 'Promueve el cumplimiento de las normas constitucionales y legales' y 'Fomenta el respeto por los valores institucionales'.",
          examFocus: "Las preguntas te colocan en situaciones donde un superior o compañero sugiere un atajo. La respuesta correcta en N4 no es solo 'negarte' sino liderar: proponer alternativa legal, comunicar el riesgo y documentar. Espera que la opción 'correcta' parezca la más 'difícil' o confrontativa.",
        },
        {
          title: "Adaptabilidad N3: ajuste proactivo ante cambios de entorno y proceso",
          whatIs: "Adaptabilidad en nivel 3 implica ajustarse proactivamente ante cambios de procedimiento, sistema o normativa. El Analista V debe mantener una actitud positiva frente al cambio, identificar las repercusiones operativas que genera y sostener los resultados de su gestión durante la transición. No se trata de aceptar el cambio pasivamente sino de anticipar sus efectos y actuar con disposición constructiva.",
          examFocus: "La pregunta típica presenta un cambio de sistema y varias reacciones posibles. Para puntuar N3 debes elegir la opción que refleje: ajuste proactivo, actitud constructiva, identificación de repercusiones operativas y mantenimiento de resultados durante el cambio.",
        },
        {
          title: "Comunicación efectiva N3: elección de canal, claridad y reducción de barreras",
          whatIs: "Comunicación efectiva N3 requiere seleccionar el canal adecuado para cada situación (escrito formal, reunión, correo electrónico), estructurar el mensaje con claridad y verificar que fue comprendido. Incluye reducir barreras de comunicación: adaptar lenguaje técnico para diferentes audiencias, confirmar recepción y usar retroalimentación para ajustar.",
          examFocus: "Las preguntas presentan problemas de malentendido entre áreas. La respuesta correcta elige canal apropiado (no enviar un correo cuando se necesita reunión), verifica comprensión y documenta acuerdos. La trampa frecuente es elegir el canal más rápido sin considerar efectividad.",
        },
        {
          title: "Trabajo en equipo N3: coordinación y cumplimiento de acuerdos colectivos",
          whatIs: "Trabajo en equipo N3 se centra en coordinación efectiva: establecer roles claros, comprometerse con plazos, hacer seguimiento a acuerdos y contribuir al resultado colectivo por encima del individual. No significa 'hacer todo solo para que el equipo no falle' sino distribuir responsabilidades y monitorear avance conjunto.",
          examFocus: "Las preguntas plantean escenarios donde un miembro del equipo incumple. La respuesta correcta no es 'hacer su trabajo' ni 'ignorar el problema' sino coordinar: comunicar la situación, reasignar si es necesario y asegurar el resultado del equipo con seguimiento.",
        },
        {
          title: "Gestión de conflictos entre áreas misionales y de apoyo",
          whatIs: "En la DIAN, las áreas misionales (impuestos, aduanas, recaudo) y las áreas de apoyo (logística, talento humano, financiera) frecuentemente tienen prioridades diferentes y tiempos distintos. El Analista V debe saber mediar: entender las restricciones de cada área, buscar puntos de acuerdo operativo, y escalar cuando sea necesario sin romper relaciones.",
          examFocus: "Escenarios donde tu área necesita un recurso que otra área no puede entregar a tiempo. La respuesta correcta busca negociación con datos, acuerdo verificable y escalamiento formal si no hay solución. Nunca 'resolver por cuenta propia' ni 'esperar que el jefe lo arregle'.",
        },
        {
          title: "Toma de decisiones con impacto ciudadano bajo restricciones de tiempo",
          whatIs: "Muchas decisiones del Analista V afectan directamente a contribuyentes: un embargo, una devolución negada, un requerimiento. Bajo presión de tiempo (metas de gestión, cierres de período), la tentación es decidir rápido. Pero la conducta correcta es decidir con soporte: verificar hechos, aplicar norma, documentar motivación.",
          examFocus: "Las preguntas siempre incluyen una opción 'rápida pero insuficiente' y una opción 'completa aunque tome más tiempo'. En el examen, la opción completa es la correcta. La trampa es que la opción rápida parece 'cumplir con la meta'.",
        },
        {
          title: "Coherencia entre directriz operativa y marco de integridad pública",
          whatIs: "A veces una directriz operativa (instrucción del jefe, circular interna, práctica habitual) puede entrar en tensión con el marco de integridad (Código de Integridad, Código de Ética, Constitución). El Analista V debe identificar cuando una instrucción, aunque bien intencionada, compromete valores institucionales, y actuar con criterio: cumplir lo legal, documentar la objeción y usar el canal institucional.",
          examFocus: "La pregunta presenta una instrucción que parece razonable pero viola un principio. La respuesta correcta no es 'desobedecer' ni 'obedecer sin cuestionar' sino documentar la objeción, proponer alternativa legal y usar canal institucional.",
        },
        {
          title: "Escenarios situacionales de cobro, devoluciones y control extensivo",
          whatIs: "Los escenarios comportamentales no preguntan normas sino cómo actúas ante dilemas. En cobro: presión por embargar sin verificar. En devoluciones: presión por aprobar sin soporte completo. En control extensivo: presión por cumplir metas numéricas sin calidad. La competencia evaluada siempre está en el verbo de la conducta esperada.",
          examFocus: "Lee primero qué competencia evalúa el escenario (ético, adaptabilidad, comunicación, equipo). Luego identifica el verbo rector de la conducta esperada. La respuesta correcta refleja ese verbo en el nivel exigido (N4 para ético, N3 para las demás).",
        },
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
          prompt: "¿Qué evalúa Adaptabilidad N3 en Analista V?",
          answer:
            "Ajuste proactivo ante cambios, actitud positiva, identificación de repercusiones operativas y mantenimiento de resultados.",
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
          prompt: "¿Qué señal práctica indica Adaptabilidad N3 en un cambio de sistema?",
          answer:
            "Ajustarse proactivamente, identificar repercusiones y mantener actitud constructiva ante el cambio.",
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
      axisLessons: [
        {
          title: "Código de Integridad: 5 valores con conductas específicas",
          whatIs: "El Código de Integridad DIAN establece cinco valores fundamentales: Honestidad (actuar con transparencia, sin aceptar ni ofrecer beneficios indebidos), Respeto (reconocer la dignidad de cada persona sin discriminación), Compromiso (asumir con responsabilidad las funciones asignadas y cumplir con los objetivos institucionales), Diligencia (actuar con cuidado, prontitud y eficiencia en cada tarea), y Justicia (decidir con imparcialidad y basándose en evidencia). Cada valor tiene conductas 'lo que hago' (comportamientos esperados) y 'lo que no hago' (prohibiciones expresas).",
          examFocus: "Las preguntas presentan un dilema y te piden identificar qué valor se aplica. La trampa frecuente es confundir Compromiso con Diligencia: Compromiso es asumir la responsabilidad, Diligencia es ejecutar con cuidado. También confunden Honestidad con Justicia: Honestidad es no aceptar beneficios indebidos, Justicia es decidir sin parcialidad.",
        },
        {
          title: "Conductas 'lo que hago' y 'lo que no hago' por cada valor",
          whatIs: "Cada valor del Código de Integridad tiene dos listas. Por ejemplo, en Honestidad: 'lo que hago' incluye actuar con transparencia, rendir cuentas, usar los recursos públicos para su fin; 'lo que no hago' incluye no aceptar regalos, no usar información privilegiada para beneficio propio, no manipular documentos. En Respeto: 'lo que hago' incluye escuchar activamente y tratar con dignidad; 'lo que no hago' incluye no discriminar ni usar lenguaje ofensivo. Estas listas son la referencia directa del examen.",
          examFocus: "El examen presenta conductas concretas y pregunta si corresponden a 'lo que hago' o 'lo que no hago' de un valor específico. La trampa es presentar una conducta que parece positiva pero viola la lista oficial. Memoriza al menos 3 conductas de cada lista por valor.",
        },
        {
          title: "Juramento de integridad y deber de ejemplaridad pública",
          whatIs: "El juramento de integridad es el compromiso formal del servidor público DIAN de actuar conforme a la Constitución, las leyes y los valores institucionales. No es simbólico: implica responsabilidad disciplinaria, fiscal y penal. El deber de ejemplaridad significa que el servidor público es referente de conducta tanto en el ejercicio público como en su vida privada cuando esta afecte la imagen institucional. El artículo 6 de la Constitución establece que los servidores públicos son responsables por infringir la Constitución y las leyes, y por omisión o extralimitación de funciones.",
          examFocus: "Preguntas que evalúan si entiendes que el juramento no es decorativo: implica consecuencias reales. También preguntan sobre conducta fuera del horario laboral que afecte la imagen DIAN. La respuesta correcta siempre reconoce la responsabilidad integral del servidor.",
        },
        {
          title: "Principios del Código de Ética: 10 principios institucionales",
          whatIs: "El Código de Ética DIAN (2021) establece diez principios: (1) Autocuidado: proteger la salud física y mental propia. (2) Cuidado del otro: velar por el bienestar de compañeros y ciudadanos. (3) Cuidado de la función pública: proteger la legitimidad y credibilidad institucional. (4) Responsabilidad por la elección: asumir las consecuencias de cada decisión. (5) Prevalencia del ser: priorizar la dignidad humana sobre resultados. (6) Coherencia: actuar conforme a lo que se dice y se promueve. (7) Solidaridad: apoyar al compañero y al ciudadano en situación de vulnerabilidad. (8) Confianza: construir relaciones basadas en transparencia y cumplimiento. (9) Diálogo: resolver diferencias mediante comunicación respetuosa. (10) Bien común: priorizar el interés colectivo sobre el individual.",
          examFocus: "Las preguntas presentan un dilema y preguntan qué principio aplica. La confusión más común es entre 'Responsabilidad por la elección' y 'Cuidado de la función pública'. La primera se centra en la decisión individual y sus consecuencias; la segunda en proteger la imagen y legitimidad de la DIAN como institución.",
        },
        {
          title: "Definiciones de principios, pautas éticas y valores",
          whatIs: "El Código de Ética DIAN distingue tres conceptos: (1) Principio ético: expresión del deber ser que orienta la interpretación y la conducta; es abstracto y universal. (2) Pauta ética: orientación concreta que guía la acción en situaciones específicas; es práctica y aplicable. (3) Valor: cualidad que se reconoce como deseable y que motiva la conducta. La diferencia clave es que el principio es general (como 'actuar con transparencia'), la pauta es específica (como 'no aceptar regalos de proveedores') y el valor es la motivación interna (como 'honestidad').",
          examFocus: "Preguntas de clasificación: te presentan un enunciado y preguntan si es principio, pauta o valor. La trampa es que muchos enunciados parecen valores cuando en realidad son pautas. La clave: si es concreto y prescriptivo, es pauta; si es abstracto y orientador, es principio; si es una cualidad deseable, es valor.",
        },
        {
          title: "Valores aspiracionales: Valentía, Objetividad, Templanza, Providencia",
          whatIs: "Los valores aspiracionales representan un nivel superior de conducta al que la DIAN aspira institucionalmente. Valentía (oso de anteojos): coraje para denunciar irregularidades y defender lo correcto bajo presión. Objetividad (lechuza): capacidad de analizar sin sesgos personales ni influencias externas. Templanza (jaguar): equilibrio emocional para decidir con serenidad bajo presión. Providencia (colibrí): anticipación responsable de consecuencias y cuidado del futuro institucional.",
          examFocus: "Las preguntas presentan escenarios donde debes elegir entre una conducta básica (cumplir el mínimo) y una aspiracional (ir más allá). La respuesta correcta en preguntas de integridad suele alinearse con el valor aspiracional, especialmente Valentía (denunciar) y Objetividad (decidir sin sesgos).",
        },
        {
          title: "Dilemas en cobro, devoluciones, manejo de información y conflicto de interés",
          whatIs: "Los dilemas éticos típicos del Analista V incluyen: (1) En cobro: un contribuyente ofrece un beneficio para aplazar un embargo; un familiar aparece como deudor. (2) En devoluciones: presión del supervisor por aprobar sin soportes completos para cumplir metas. (3) En información: acceso a datos tributarios confidenciales de personas conocidas. (4) Conflicto de interés: cuando el servidor tiene relación personal, familiar o económica con el sujeto del trámite. En todos los casos, la conducta correcta es declarar, documentar, apartarse si procede, y seguir el canal institucional.",
          examFocus: "Las preguntas plantean el dilema y ofrecen opciones que van desde la conducta óptima hasta el atajo informal. La trampa es la opción que 'resuelve el problema' pero omite la declaración formal del conflicto. La respuesta correcta siempre incluye: identificar el conflicto, declararlo formalmente, y actuar conforme al procedimiento.",
        },
        {
          title: "Toma de decisión ética bajo presión: evidencia, legalidad y bien común",
          whatIs: "La toma de decisión ética bajo presión sigue un esquema: (1) Identificar los hechos relevantes sin suponer. (2) Determinar la norma aplicable (Constitución, ley, código interno). (3) Evaluar las opciones según impacto en el interés general, no en conveniencia personal o del equipo. (4) Documentar la decisión con su motivación. (5) Aceptar las consecuencias. La presión puede venir del jefe, del contribuyente, de las metas o del tiempo. En todos los casos, la respuesta correcta es la que sería defendible ante control disciplinario, auditoría o el público.",
          examFocus: "Las preguntas presentan presión explícita ('tu jefe te pide', 'el plazo vence mañana', 'el contribuyente amenaza') y evalúan si cedes o mantienes el criterio ético. La respuesta correcta siempre es sostenible y auditable. La trampa es la opción que 'cumple la meta' pero sacrifica transparencia o legalidad.",
        },
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
      axisLessons: [
        {
          title: "Manual de funciones Gestor I: recursos, logística, contratación y contratos",
          whatIs: "El manual de funciones define al Gestor I como un cargo del nivel profesional (Código 301, Grado 1) cuyo propósito es participar en procesos de apoyo institucional: recursos administrativos, operación logística, adquisición de bienes y servicios, y gestión contractual. El subproceso principal incluye administración de recursos físicos, financieros y documentales. A diferencia del Analista V (que opera en el proceso misional tributario), el Gestor I opera en el proceso de apoyo: no cobra impuestos ni gestiona devoluciones, sino que soporta la operación interna de la DIAN con infraestructura, compras, almacén e inventarios.",
          examFocus: "Las preguntas buscan que distingas las funciones del Gestor I de las del Analista V. La trampa más común es presentar una situación de cobro tributario y preguntar qué debe hacer el Gestor I: la respuesta es que no le compete. Espera preguntas sobre el alcance del cargo: ¿puede un Gestor I adjudicar un contrato? No, ejecuta y hace seguimiento bajo supervisión del ordenador del gasto.",
        },
        {
          title: "Contratación pública: Ley 80 de 1993 y Ley 1150 de 2007",
          whatIs: "La Ley 80 de 1993 es el Estatuto General de Contratación de la Administración Pública. Establece los principios de transparencia, economía y responsabilidad que rigen toda contratación estatal. La Ley 1150 de 2007 la complementa con medidas de eficiencia y transparencia: introduce el SECOP, regula las modalidades de selección y establece el Registro Único de Proponentes (RUP). Las modalidades de selección son: licitación pública, selección abreviada, concurso de méritos, contratación directa y mínima cuantía. El Gestor I debe conocer cuándo aplica cada modalidad y qué documentos soportan cada etapa.",
          examFocus: "Las preguntas evalúan cuándo aplica cada modalidad de selección. La trampa frecuente es confundir contratación directa (casos taxativos del art. 2 Ley 1150) con mínima cuantía (umbral económico). También preguntan sobre principios: si un proceso de contratación omite publicidad, viola transparencia. Espera distractores que mezclen procedimientos de diferentes modalidades.",
        },
        {
          title: "Modalidades de selección y trazabilidad en SECOP II",
          whatIs: "SECOP II es la plataforma transaccional de Colombia Compra Eficiente donde se gestionan todas las etapas del ciclo contractual: publicación de estudios previos, pliegos de condiciones, recepción de ofertas, evaluación, adjudicación y ejecución. La trazabilidad significa que cada actuación queda registrada con fecha, hora y responsable. El Gestor I debe saber navegar el sistema, publicar documentos precontractuales, registrar actas de supervisión y garantizar que toda la información sea pública y accesible. La omisión de publicación en SECOP puede generar nulidad del proceso.",
          examFocus: "Las preguntas evalúan si entiendes que SECOP no es opcional: todo proceso contractual (excepto reserva legal) debe publicarse. La trampa es presentar una 'urgencia' que justifique omitir la publicación. También preguntan sobre trazabilidad: ¿quién es responsable si un documento no se publica a tiempo? El supervisor del contrato.",
        },
        {
          title: "Operación financiera y presupuestal en SIIF Nación II",
          whatIs: "SIIF Nación II (Sistema Integrado de Información Financiera) es la plataforma del Ministerio de Hacienda para registrar y controlar operaciones presupuestales, contables y de tesorería del gasto público. El Gestor I usa SIIF para: registrar compromisos presupuestales (CDP y RP), registrar obligaciones de pago, verificar disponibilidad de recursos y generar reportes de ejecución. El CDP (Certificado de Disponibilidad Presupuestal) certifica que hay recursos; el RP (Registro Presupuestal) compromete esos recursos para un contrato específico. Sin CDP no hay RP, y sin RP no hay contrato válido.",
          examFocus: "Las preguntas evalúan la secuencia presupuestal: CDP → RP → contrato → obligación → pago. La trampa es invertir el orden o sugerir que se puede contratar sin CDP. También preguntan sobre qué hacer si el SIIF muestra insuficiencia presupuestal: la respuesta es no proceder con el compromiso hasta obtener traslado o adición.",
        },
        {
          title: "Gestión documental, TRD y conservación de evidencia administrativa",
          whatIs: "La gestión documental en la DIAN sigue la Ley General de Archivos (Ley 594 de 2000) y las directrices del Archivo General de la Nación. Las TRD (Tablas de Retención Documental) definen qué documentos producir, cuánto tiempo conservarlos y cuándo pueden eliminarse o transferirse al archivo histórico. El Gestor I es responsable de que los expedientes contractuales estén completos, organizados cronológicamente y accesibles para auditoría. Cada documento debe estar foliado, con fecha y firma del responsable. La gestión documental no es burocracia: es defensa jurídica y soporte de transparencia.",
          examFocus: "Las preguntas presentan situaciones donde falta un documento en el expediente contractual y preguntan qué hacer. La respuesta correcta es reconstruir la trazabilidad antes de continuar, no avanzar sin soporte. También preguntan sobre TRD: ¿cuánto tiempo se conserva un expediente contractual? Según la TRD aprobada por la entidad, no por criterio del funcionario.",
        },
        {
          title: "Custodia, registro, disposición y control de mercancías DIAN",
          whatIs: "La DIAN custodia mercancías aprehendidas, decomisadas o en situación de abandono legal en sus bodegas y depósitos. El Gestor I participa en el registro de ingreso, la verificación del estado físico, el almacenamiento seguro y la disposición final (devolución, destrucción o donación según proceda). El control de inventarios requiere actas de ingreso, actas de verificación periódica y actas de disposición final. Todo movimiento debe quedar documentado con responsable, fecha y estado de la mercancía. La custodia inadecuada genera responsabilidad fiscal y disciplinaria.",
          examFocus: "Las preguntas evalúan qué hacer cuando hay discrepancia entre inventario físico y registro documental. La respuesta correcta es iniciar verificación inmediata, levantar acta y reportar. La trampa es 'ajustar el sistema para que coincida' sin investigar la diferencia. También preguntan sobre disposición final: ¿quién autoriza la destrucción de mercancías? No el Gestor I unilateralmente.",
        },
        {
          title: "Infraestructura, servicios generales y soporte logístico institucional",
          whatIs: "El soporte logístico institucional incluye administración de sedes, mantenimiento de infraestructura, gestión de flota vehicular, servicios de aseo, vigilancia y cafetería, y dotación de mobiliario y equipos. El Gestor I coordina con proveedores, supervisa contratos de servicios y verifica que las condiciones de operación sean adecuadas. Esto incluye certificar el cumplimiento de contratistas de servicios generales, reportar daños en infraestructura y gestionar solicitudes de mantenimiento preventivo y correctivo.",
          examFocus: "Las preguntas presentan situaciones de incumplimiento de un contratista de servicios generales. La respuesta correcta implica documentar el incumplimiento, requerir formalmente al contratista y aplicar las cláusulas contractuales. La trampa es 'resolver informalmente' o 'esperar que mejore'. También preguntan sobre responsabilidad por bienes: si un equipo se daña, ¿quién responde? El responsable de la custodia según el acta de asignación.",
        },
        {
          title: "Constitución, CPACA, MIPG, transparencia y PQRSF",
          whatIs: "El marco normativo transversal para el Gestor I incluye: Constitución (art. 209 sobre principios de función administrativa: igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad); Ley 1437 de 2011 (CPACA) que regula actuaciones administrativas, notificaciones y derecho de petición; Ley 1712 de 2014 sobre transparencia y acceso a información pública; MIPG como modelo integrado de planeación y gestión que ordena la gestión por resultados con enfoque ciudadano. Las PQRSF tienen plazos diferenciados: petición general 15 días hábiles, solicitud de información 10 días, consulta 30 días.",
          examFocus: "Las preguntas evalúan plazos de respuesta a peticiones (15, 10, 30 días según tipo) y principios constitucionales de función administrativa. La trampa frecuente es confundir los plazos de CPACA con plazos de contratación. También preguntan sobre transparencia activa: ¿qué información debe publicar la DIAN sin que se la soliciten? La que establece la Ley 1712.",
        },
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
      axisLessons: [
        {
          title: "Comportamiento ético N4 en decisiones de compras y manejo de información",
          whatIs: "En el contexto del Gestor I, Comportamiento ético N4 implica ser referente de integridad en decisiones de adquisición de bienes y servicios. El servidor no solo rechaza beneficios indebidos sino que promueve activamente prácticas transparentes en su equipo: verificar que los estudios previos no estén direccionados, que los criterios de evaluación sean objetivos, y que la información de proponentes se maneje con confidencialidad hasta la adjudicación. El manejo de información incluye proteger datos de contribuyentes, de proveedores y de operaciones internas que no sean públicas.",
          examFocus: "Las preguntas presentan un proveedor que ofrece información privilegiada o un compañero que sugiere ajustar especificaciones para favorecer a alguien. En N4, la respuesta correcta no es solo negarse: es documentar la situación, comunicar el riesgo al equipo y proponer medidas de control. La trampa es la opción que 'resuelve' el problema callando.",
        },
        {
          title: "Innovación N3: mejora de procesos con sustento técnico",
          whatIs: "Innovación N3 en el Gestor I significa proponer mejoras a procesos operativos de logística, contratación o gestión documental, pero siempre con sustento técnico: diagnóstico del problema actual, análisis de alternativas, evaluación de viabilidad e impacto, y plan de implementación. No es improvisar ni 'hacer diferente porque sí'. La propuesta innovadora debe ser compatible con el marco normativo vigente y tener evidencia de que mejora eficiencia, reduce costos o aumenta calidad del servicio.",
          examFocus: "La pregunta típica presenta un problema operativo recurrente y varias propuestas. La trampa es elegir la propuesta más creativa sin sustento. Para N3, la respuesta correcta incluye: identificación del problema con datos, propuesta viable con soporte técnico, evaluación de impacto y ruta de implementación verificable. 'Innovar' sin análisis previo es improvisación, no innovación.",
        },
        {
          title: "Adaptabilidad N3 ante cambios de herramienta, norma o carga operativa",
          whatIs: "Adaptabilidad N3 evalúa la capacidad del Gestor I de ajustarse proactivamente ante cambios: migración de SECOP I a SECOP II, actualización de normativa contractual, cambio de procedimientos internos o incremento súbito de carga operativa. Proactivo significa no esperar instrucciones: identificar las repercusiones del cambio, proponer ajustes al plan de trabajo, capacitarse por iniciativa propia y mantener actitud positiva. No es obediencia pasiva ni simple cumplimiento.",
          examFocus: "Las preguntas presentan un cambio (nueva herramienta, nueva circular, redistribución de funciones) y evalúan tu reacción. La trampa es elegir 'continuar haciendo lo mismo hasta que obliguen a cambiar' o 'quejarse formalmente'. La respuesta correcta para N3 es: analizar el cambio, identificar impacto en tu trabajo, proponer ajustes y adaptarte proactivamente con actitud constructiva.",
        },
        {
          title: "Solución de problemas N3 en incidentes críticos de operación",
          whatIs: "Solución de problemas N3 en el Gestor I implica: ante un incidente crítico (pérdida de mercancía en custodia, falla en el sistema SIIF durante un cierre, incumplimiento grave de un contratista), realizar diagnóstico causal (no solo síntoma), evaluar alternativas viables, seleccionar la mejor con criterio de legalidad y efectividad, ejecutar la solución y hacer seguimiento con autocontrol. N3 exige autonomía en el diagnóstico y la selección de alternativas, no solo aplicar instrucciones.",
          examFocus: "Las preguntas presentan un incidente y varias respuestas posibles. La trampa es elegir la respuesta que 'apaga el incendio' sin investigar la causa raíz. Para N3, la respuesta correcta incluye: diagnóstico causal, selección de alternativa con criterio, ejecución controlada y seguimiento. Si solo 'resuelves' sin entender por qué pasó, es N2, no N3.",
        },
        {
          title: "Gestión de riesgos y control de ejecución de planes de acción",
          whatIs: "La gestión de riesgos en el contexto del Gestor I incluye identificar, valorar y tratar riesgos operativos asociados a contratación (sobrecostos, incumplimiento), logística (pérdida, deterioro de bienes), gestión documental (pérdida de expedientes) y operación financiera (errores en SIIF). El control de ejecución implica monitorear indicadores de avance, comparar lo planeado con lo ejecutado, identificar desviaciones y tomar acciones correctivas documentadas. El mapa de riesgos institucional es la referencia base.",
          examFocus: "Las preguntas presentan un riesgo materializado y preguntan qué debió hacerse antes (prevención) o qué hacer ahora (mitigación). La respuesta correcta siempre incluye documentación, reporte y acción correctiva formal. La trampa es 'resolver informalmente' o 'esperar que no vuelva a pasar'. También preguntan sobre indicadores: si la ejecución presupuestal está al 30% pero el año avanzó al 60%, ¿qué haces?",
        },
        {
          title: "Balance entre oportunidad del servicio y cumplimiento de controles",
          whatIs: "El Gestor I enfrenta constantemente la tensión entre ser oportuno (entregar rápido, atender urgencias, cumplir metas) y cumplir controles (verificar soportes, seguir procedimientos, documentar actuaciones). El equilibrio correcto no sacrifica ninguno: se busca eficiencia dentro del marco normativo. Cuando hay conflicto real, prevalece el cumplimiento de controles porque la omisión genera responsabilidad disciplinaria y fiscal. La oportunidad del servicio se logra con planeación anticipada, no con atajos.",
          examFocus: "Las preguntas presentan 'urgencias' que presionan a omitir un paso del procedimiento. La respuesta correcta es cumplir el procedimiento completo y, si es posible, acelerar dentro del marco legal. La trampa es la opción que 'atiende la urgencia' pero omite un control: en el examen, esa opción siempre es incorrecta. La única excepción es la urgencia manifiesta regulada por ley.",
        },
        {
          title: "Escenarios interáreas: almacén, contratación, financiero, soporte",
          whatIs: "El Gestor I trabaja en la intersección de múltiples áreas: almacén (recepción y custodia de bienes), contratación (estudios previos, supervisión), financiero (CDP, RP, pagos en SIIF) y soporte (infraestructura, servicios generales). Cada área tiene sus propios procedimientos y tiempos. La coordinación efectiva requiere: comunicación clara del requerimiento, plazos acordados por escrito, seguimiento de compromisos y escalamiento formal cuando hay bloqueo. El servidor que 'resuelve solo' sin coordinar genera riesgo operativo.",
          examFocus: "Las preguntas presentan un requerimiento que necesita la participación de varias áreas y una de ellas no responde a tiempo. La respuesta correcta es comunicar formalmente el requerimiento con plazo, hacer seguimiento documentado y escalar si es necesario. La trampa es 'resolver por cuenta propia' invadiendo competencias de otra área o 'esperar pasivamente'.",
        },
        {
          title: "Diferenciación entre conducta aceptable y atajo informal",
          whatIs: "En la operación diaria del Gestor I, surgen 'prácticas informales' que parecen eficientes pero no tienen soporte normativo: recibir mercancía sin acta formal 'para no atrasar', aprobar un pago sin todos los soportes 'porque el contratista ya cumplió', o compartir claves de SIIF 'porque la persona autorizada no está'. Estas prácticas son atajos informales que generan riesgo. La conducta aceptable siempre tiene soporte documental, trazabilidad y se ajusta al procedimiento establecido.",
          examFocus: "Las preguntas presentan una práctica habitual y preguntan si es correcta. La clave es verificar: ¿tiene soporte normativo? ¿Está documentada? ¿Es trazable? Si alguna respuesta es 'no', es un atajo informal. La trampa es que la práctica 'funciona' y 'todos la hacen', pero el examen siempre premia la conducta formal sobre la costumbre.",
        },
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
      axisLessons: [
        {
          title: "Código de Integridad: 5 valores y conductas esperadas/prohibidas",
          whatIs: "El Código de Integridad DIAN establece cinco valores con conductas específicas para el contexto de logística y contratación: Honestidad (no aceptar beneficios de proveedores, no direccionar compras, usar recursos públicos exclusivamente para su fin), Respeto (tratar con dignidad a contratistas, proveedores y ciudadanos, sin discriminación), Compromiso (cumplir las obligaciones contractuales y operativas con responsabilidad), Diligencia (ejecutar procesos de compra y custodia con cuidado y prontitud) y Justicia (evaluar proponentes con imparcialidad y decidir con base en criterios objetivos). Para el Gestor I, estas conductas se aplican directamente en el manejo de almacén, contratos y recursos.",
          examFocus: "Las preguntas presentan situaciones específicas de contratación o logística y preguntan qué valor se vulnera o se aplica. La trampa frecuente es confundir Diligencia (hacer las cosas con cuidado) con Compromiso (asumir la responsabilidad). En contexto de compras, Honestidad es el valor central: no recibir regalos, no favorecer proveedores, no manipular especificaciones técnicas.",
        },
        {
          title: "Código de Ética: 10 principios institucionales aplicados a gestión administrativa",
          whatIs: "Los 10 principios del Código de Ética DIAN (2021) aplican al Gestor I con énfasis en: (1) Autocuidado: no sobrecargarse laboralmente ni permitir que la presión comprometa la salud. (2) Cuidado del otro: velar por la seguridad de compañeros en bodegas y operaciones logísticas. (3) Cuidado de la función pública: proteger la imagen de la DIAN en procesos de compra y contratación. (4) Responsabilidad por la elección: cada decisión de compra o custodia tiene consecuencias fiscales y disciplinarias. (5) Prevalencia del ser: la dignidad del contratista, proveedor o compañero prevalece sobre metas operativas.",
          examFocus: "Las preguntas del Gestor I aplican estos principios a situaciones concretas: un contratista incumple pero tiene dificultades personales, ¿qué prevalece? Prevalencia del ser no significa incumplir el contrato, sino tratar con dignidad mientras se aplican las cláusulas. La trampa es confundir empatía personal con omisión de deberes contractuales.",
        },
        {
          title: "Autocuidado, cuidado del otro y cuidado de la función pública en logística",
          whatIs: "En el contexto del Gestor I, autocuidado incluye proteger la salud en operaciones de almacén (uso de EPP, manejo seguro de mercancías, jornadas razonables). Cuidado del otro implica velar por la seguridad de compañeros y contratistas en bodegas y operaciones de campo. Cuidado de la función pública significa que cada acción del Gestor I afecta la credibilidad de la DIAN: una compra transparente fortalece la confianza pública, una compra cuestionable la destruye. El servidor debe actuar como si cada decisión fuera pública y auditable.",
          examFocus: "Las preguntas presentan situaciones donde la presión por cumplir metas compromete la seguridad (cargar mercancía sin equipo adecuado) o la transparencia (cerrar un contrato sin todos los soportes). La respuesta correcta prioriza seguridad y transparencia sobre velocidad. La trampa es que la opción 'eficiente' sacrifica alguno de estos cuidados.",
        },
        {
          title: "Responsabilidad por la elección y prevalencia del ser en contratación",
          whatIs: "Responsabilidad por la elección es el principio que establece que toda decisión del servidor público tiene consecuencias y debe asumirlas. En contratación, esto significa que si eliges un proveedor, debes poder explicar por qué con evidencia objetiva. Si apruebas un pago, debes verificar que los soportes estén completos. Prevalencia del ser significa que las personas (contribuyentes, proveedores, compañeros) nunca son medios para lograr resultados: su dignidad prevalece sobre las metas institucionales, pero esto no exime del cumplimiento normativo.",
          examFocus: "Las preguntas presentan un dilema donde hay que elegir entre cumplir una meta o respetar derechos. La respuesta correcta siempre busca cumplir ambos, pero si hay conflicto irreconciliable, prevalece la dignidad humana y la legalidad. La trampa es la opción que 'cumple la meta' violando derechos o la que 'respeta derechos' pero no busca alternativa para cumplir.",
        },
        {
          title: "Conflicto de interés y rechazo de beneficios indebidos en compras y custodia",
          whatIs: "El conflicto de interés en el Gestor I surge cuando el servidor tiene interés personal, familiar o económico en una decisión de compra, contratación o custodia de mercancías. Ejemplos: un familiar es proveedor, un amigo participa en una licitación, o el servidor tiene relación comercial con un contratista. El procedimiento correcto es: (1) Identificar el conflicto antes de actuar. (2) Declararlo formalmente por escrito. (3) Apartarse de la decisión. (4) Permitir que otro servidor competente asuma. El rechazo de beneficios indebidos incluye regalos, descuentos personales, invitaciones o cualquier ventaja de proveedores.",
          examFocus: "Las preguntas presentan situaciones donde el conflicto no es obvio: un proveedor que fue compañero de universidad, un familiar político que trabaja en una empresa oferente. La respuesta correcta siempre es declarar el conflicto, aunque parezca menor. La trampa es 'ser objetivo a pesar del conflicto': en el examen, la declaración formal es obligatoria, no opcional.",
        },
        {
          title: "Transparencia y trazabilidad en compras, pagos y custodia de bienes",
          whatIs: "Transparencia en el contexto del Gestor I significa que toda decisión de compra, pago o custodia debe ser pública (salvo reserva legal), documentada y verificable. Trazabilidad significa que cada paso del proceso tiene registro: quién lo hizo, cuándo, con qué soporte y bajo qué autorización. En compras: publicación en SECOP, estudios previos completos, evaluación objetiva. En pagos: CDP, RP, certificación de cumplimiento del supervisor. En custodia: actas de ingreso, verificación periódica, disposición final documentada. La Ley 1712 de 2014 establece la obligación de transparencia activa.",
          examFocus: "Las preguntas evalúan si entiendes que la falta de un documento en la cadena de trazabilidad invalida el proceso. La respuesta correcta ante un soporte faltante es detener el proceso, reconstruir la trazabilidad y luego continuar. La trampa es 'completar el documento después' o 'asumir que existe porque el proceso ya avanzó'.",
        },
        {
          title: "Dignidad humana, respeto e igualdad de trato en servicio y operación",
          whatIs: "Todo servidor DIAN, incluido el Gestor I, debe tratar con dignidad, respeto e igualdad a: contribuyentes que hacen trámites, proveedores que participan en procesos de contratación, contratistas que ejecutan servicios, y compañeros de trabajo. Igualdad de trato significa no dar preferencias por relación personal, estrato, apariencia o cualquier factor subjetivo. El artículo 13 de la Constitución consagra el derecho a la igualdad. En contratación, igualdad de trato se traduce en: mismos plazos, misma información, mismos criterios de evaluación para todos los proponentes.",
          examFocus: "Las preguntas presentan un proveedor que solicita información adicional o un plazo especial que no se ha dado a los demás. La respuesta correcta es ofrecer la misma oportunidad a todos los participantes. La trampa es 'atender al que pregunta' sin comunicar la misma información a los demás. En contratación pública, la igualdad de trato es un principio absoluto.",
        },
        {
          title: "Decisión ética bajo presión operativa en logística y contratación",
          whatIs: "La presión operativa en el Gestor I incluye: cierres de vigencia fiscal que presionan ejecución de contratos, urgencias logísticas por eventos institucionales, falta de personal para cumplir todas las funciones, y presión de superiores por cumplir metas numéricas. En todos estos escenarios, la decisión ética sigue el mismo esquema: (1) No sacrificar legalidad por velocidad. (2) Documentar la restricción o el riesgo. (3) Comunicar la situación a quien corresponda. (4) Buscar alternativa dentro del marco legal. (5) Si no hay alternativa legal, no proceder y documentar la razón.",
          examFocus: "Las preguntas presentan la presión explícitamente: 'tu jefe te pide cerrar el contrato hoy', 'la vigencia vence mañana', 'hay un evento del director y falta el servicio'. La respuesta correcta nunca sacrifica un control por urgencia. La trampa es la opción que 'resuelve la urgencia' pero omite un paso obligatorio. En el examen DIAN, la legalidad siempre gana a la oportunidad.",
        },
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
