import { Question } from "./types";

export const analistaComportamentalesQuestions: Question[] = [
  {
    id: 1,
    text: "En un comité de cartera, detectas que un compañero propone priorizar expedientes de conocidos. ¿Qué actuación refleja mejor Comportamiento ético nivel 4?",
    options: [
      { letter: "A", text: "Aceptar la propuesta para evitar conflicto en el equipo." },
      { letter: "B", text: "Sostener criterio imparcial, documentar la observación y promover decisión basada en reglas objetivas." },
      { letter: "C", text: "Posponer el análisis y dejar que otro decida." },
      { letter: "D", text: "Aplicar prioridad discrecional mientras no exista queja formal." },
    ],
    correctAnswer: "B",
    explanation:
      "Comportamiento ético N4 exige actuar como referente ético, proteger imparcialidad y orientar decisiones organizacionales (Diccionario DIAN, Res. 065 de 2024).",
  },
  {
    id: 2,
    text: "La DIAN cambia el flujo digital de devoluciones y tu equipo está rezagado. Desde Adaptabilidad nivel 3, lo más adecuado es:",
    options: [
      { letter: "A", text: "Esperar a que otra dependencia entregue una solución cerrada." },
      { letter: "B", text: "Mantener el método anterior para no afectar la productividad inmediata." },
      { letter: "C", text: "Aplicar el cambio solo en casos sencillos." },
      { letter: "D", text: "Diseñar ajustes de trabajo, liderar apropiación del cambio y monitorear impacto." },
    ],
    correctAnswer: "D",
    explanation:
      "Adaptabilidad N3 implica ajustarse proactivamente al cambio, mantener actitud positiva e identificar repercusiones operativas (Res. 065 de 2024).",
  },
  {
    id: 3,
    text: "Debes explicar a otra área un hallazgo crítico de cuenta corriente con poco tiempo. ¿Qué conducta corresponde a Comunicación efectiva nivel 3?",
    options: [
      { letter: "A", text: "Seleccionar canal idóneo, sintetizar evidencia y verificar comprensión final." },
      { letter: "B", text: "Enviar solo un mensaje corto sin anexos para ganar rapidez." },
      { letter: "C", text: "Delegar la explicación sin contexto." },
      { letter: "D", text: "Comunicar verbalmente y evitar trazabilidad documental." },
    ],
    correctAnswer: "A",
    explanation:
      "Comunicación efectiva N3 exige escoger método adecuado, reducir barreras y asegurar comprensión con trazabilidad (diccionario comportamental DIAN).",
  },
  {
    id: 4,
    text: "En cierre mensual, una parte del equipo no cumple tiempos y afecta metas del grupo. Desde Trabajo en equipo nivel 3, debes:",
    options: [
      { letter: "A", text: "Asumir todo el trabajo para no depender de otros." },
      { letter: "B", text: "Reportar incumplimientos sin ofrecer coordinación." },
      { letter: "C", text: "Ajustar responsabilidades, hacer seguimiento conjunto y asegurar cumplimiento colectivo." },
      { letter: "D", text: "Esperar a la próxima semana para revisar resultados." },
    ],
    correctAnswer: "C",
    explanation:
      "Trabajo en equipo N3 incluye fomentar colaboración, monitorear compromisos y sostener decisiones compartidas con orientación a resultados.",
  },
  {
    id: 5,
    text: "Un directivo te pide acelerar un trámite saltando una validación obligatoria. ¿Qué respuesta refleja conducta ética N4?",
    options: [
      { letter: "A", text: "Cumplir la instrucción por jerarquía y corregir después." },
      { letter: "B", text: "Mantener el requisito legal, explicar riesgos y proponer alternativa válida dentro de norma." },
      { letter: "C", text: "No responder y dejar el caso sin gestión." },
      { letter: "D", text: "Buscar un atajo con registro parcial del expediente." },
    ],
    correctAnswer: "B",
    explanation:
      "El nivel 4 exige conciencia de repercusiones del servicio público y defensa activa de integridad institucional, incluso bajo presión jerárquica.",
  },
  {
    id: 6,
    text: "Se implementa nueva herramienta analítica para control extensivo y hay resistencia. En Adaptabilidad N3, la mejor conducta es:",
    options: [
      { letter: "A", text: "Pedir que suspendan la herramienta hasta nuevo aviso." },
      { letter: "B", text: "Aplicarla sin acompañamiento, asumiendo que todos aprenderán solos." },
      { letter: "C", text: "Seguir con Excel porque siempre ha funcionado." },
      { letter: "D", text: "Impulsar adopción progresiva, capacitar al equipo y ajustar metodología con evidencia." },
    ],
    correctAnswer: "D",
    explanation:
      "Adaptabilidad N3 demanda ajuste proactivo ante cambios del entorno, actitud positiva y lectura de impactos.",
  },
  {
    id: 7,
    text: "Debes comunicar a un contribuyente la improcedencia parcial de una solicitud. ¿Qué conducta es más efectiva?",
    options: [
      { letter: "A", text: "Explicar fundamento normativo, detallar soportes faltantes y orientar ruta de subsanación." },
      { letter: "B", text: "Enviar respuesta genérica para reducir reclamaciones." },
      { letter: "C", text: "Usar términos técnicos sin verificar entendimiento." },
      { letter: "D", text: "Evitar contacto directo y responder fuera del sistema oficial." },
    ],
    correctAnswer: "A",
    explanation:
      "Comunicación efectiva N3 se evidencia en claridad, pertinencia y reducción de distorsiones en la interacción con ciudadano y áreas internas.",
  },
  {
    id: 8,
    text: "Un compañero nuevo comete errores repetidos en registro de actuaciones. Desde Trabajo en equipo N3, ¿qué procede?",
    options: [
      { letter: "A", text: "Excluirlo de tareas críticas sin explicación." },
      { letter: "B", text: "Informar la falla al cierre del mes y no intervenir." },
      { letter: "C", text: "Acompañar corrección, alinear criterios y hacer seguimiento al estándar común." },
      { letter: "D", text: "Corregir en silencio para evitar incomodidad." },
    ],
    correctAnswer: "C",
    explanation:
      "Trabajo en equipo N3 no es solo colaboración puntual: implica fortalecer al grupo y sostener cumplimiento de metas compartidas.",
  },
  {
    id: 9,
    text: "En una reunión interáreas, se propone usar información no autorizada para presionar pagos. ¿Qué acción es coherente con ética N4?",
    options: [
      { letter: "A", text: "Aceptar si mejora el indicador de recaudo." },
      { letter: "B", text: "Rechazar la práctica, dejar constancia y redirigir a actuación legalmente permitida." },
      { letter: "C", text: "Permitirlo en casos excepcionales de gran deuda." },
      { letter: "D", text: "No participar en discusión para evitar exposición." },
    ],
    correctAnswer: "B",
    explanation:
      "Comportamiento ético N4 exige promover estrategias compatibles con legalidad e imparcialidad y corregir desviaciones con criterio institucional.",
  },
  {
    id: 10,
    text: "Cambian lineamientos de priorización de cartera por riesgo. Desde Adaptabilidad N3, la mejor respuesta es:",
    options: [
      { letter: "A", text: "Aplicar solo cambios mínimos para no alterar la rutina." },
      { letter: "B", text: "Esperar validación externa antes de cualquier ajuste." },
      { letter: "C", text: "Mantener criterios anteriores hasta fin de vigencia." },
      { letter: "D", text: "Reconfigurar tableros, alinear equipo y anticipar impactos operativos." },
    ],
    correctAnswer: "D",
    explanation:
      "Adaptabilidad N3 incluye ajuste proactivo, lectura de repercusiones y mantenimiento de resultados ante cambios.",
  },
  {
    id: 11,
    text: "Recibes una instrucción verbal ambigua sobre medida cautelar. ¿Qué evidencia Comunicación efectiva N3?",
    options: [
      { letter: "A", text: "Solicitar precisión por canal formal, confirmar alcance y registrar acuerdo operativo." },
      { letter: "B", text: "Ejecutar de inmediato según interpretación personal." },
      { letter: "C", text: "Trasladar el asunto sin contexto a otro analista." },
      { letter: "D", text: "Esperar sin informar hasta que venza el término." },
    ],
    correctAnswer: "A",
    explanation:
      "La comunicación efectiva minimiza barreras y evita errores críticos mediante confirmación explícita y soporte trazable.",
  },
  {
    id: 12,
    text: "El equipo de devoluciones y el de cartera tienen conflicto por prioridades. Como Analista V, la conducta de equipo N3 es:",
    options: [
      { letter: "A", text: "Defender solo tu frente funcional y escalar el conflicto." },
      { letter: "B", text: "Evitar coordinación hasta recibir orden escrita." },
      { letter: "C", text: "Construir acuerdo interáreas, definir compromisos y monitorear cumplimiento." },
      { letter: "D", text: "Permitir que cada área opere con criterios distintos." },
    ],
    correctAnswer: "C",
    explanation:
      "Trabajo en equipo N3 requiere proactividad para resolver fricciones operativas y asegurar decisiones compartidas con seguimiento.",
  },
  {
    id: 13,
    text: "Un ciudadano ofrece regalos para “mejorar trato” en su expediente. ¿Qué refleja ética N4?",
    options: [
      { letter: "A", text: "Aceptar y declarar luego para evitar retrasos." },
      { letter: "B", text: "Rechazar el ofrecimiento, mantener trato imparcial y reportar según protocolo." },
      { letter: "C", text: "Aceptar si el expediente cumple requisitos." },
      { letter: "D", text: "Pedir que haga la oferta por escrito." },
    ],
    correctAnswer: "B",
    explanation:
      "La competencia ética en nivel alto exige actuar como referente institucional: integridad, imparcialidad y reporte de riesgos de corrupción.",
  },
  {
    id: 14,
    text: "Se implementa nueva matriz de riesgo y debes ajustar rutinas de análisis. ¿Qué opción evidencia Adaptabilidad N3?",
    options: [
      { letter: "A", text: "Mantener criterios previos hasta finalizar el trimestre." },
      { letter: "B", text: "Adoptar cambios sin informar al equipo." },
      { letter: "C", text: "Aplicar nueva matriz solo en expedientes pequeños." },
      { letter: "D", text: "Actualizar procedimiento interno, capacitar pares y asegurar transición controlada." },
    ],
    correctAnswer: "D",
    explanation:
      "N3 en adaptabilidad implica ajuste proactivo al cambio, actitud positiva e identificación de repercusiones operativas.",
  },
  {
    id: 15,
    text: "Debes informar resultados a jefatura y a equipo operativo con públicos distintos. ¿Qué harías?",
    options: [
      { letter: "A", text: "Ajustar el mensaje por audiencia, conservar coherencia técnica y validar entendimiento." },
      { letter: "B", text: "Usar el mismo texto extenso para todos sin síntesis." },
      { letter: "C", text: "Enviar solo cifras sin contexto normativo." },
      { letter: "D", text: "Hacer exposición verbal sin soporte documental." },
    ],
    correctAnswer: "A",
    explanation:
      "Comunicación efectiva N3 incluye escoger el método y nivel de detalle adecuados al receptor, preservando precisión y trazabilidad.",
  },
  {
    id: 16,
    text: "Durante un pico de carga, parte del equipo propone omitir doble validación. Desde Trabajo en equipo N3, ¿qué procede?",
    options: [
      { letter: "A", text: "Aceptar para cumplir meta de volumen." },
      { letter: "B", text: "Permitirlo solo en expedientes urgentes." },
      { letter: "C", text: "Redefinir distribución de carga sin eliminar controles críticos." },
      { letter: "D", text: "Suspender todas las tareas hasta recibir nueva directriz." },
    ],
    correctAnswer: "C",
    explanation:
      "El trabajo colaborativo efectivo prioriza resultados con calidad y control, evitando soluciones que comprometan consistencia técnica.",
  },
  {
    id: 17,
    text: "Un error institucional ya notificado puede afectar contribuyentes. Como referente ético N4, debes:",
    options: [
      { letter: "A", text: "No divulgarlo hasta tener solución completa." },
      { letter: "B", text: "Reconocer el error, activar corrección y comunicar de forma transparente por canales oficiales." },
      { letter: "C", text: "Corregir internamente sin registro para evitar reprocesos." },
      { letter: "D", text: "Trasladar responsabilidad al equipo anterior." },
    ],
    correctAnswer: "B",
    explanation:
      "Ética N4 combina transparencia, responsabilidad y protección del servicio público frente a impactos de decisiones o fallas.",
  },
  {
    id: 18,
    text: "La dirección solicita acelerar implementación de un cambio no probado. En Adaptabilidad N3, lo más idóneo es:",
    options: [
      { letter: "A", text: "Negarse a todo cambio por riesgo operativo." },
      { letter: "B", text: "Implementar total sin evaluación previa." },
      { letter: "C", text: "Diferir por tiempo indefinido la transición." },
      { letter: "D", text: "Proponer piloto controlado, métricas de impacto y plan de escalamiento." },
    ],
    correctAnswer: "D",
    explanation:
      "El nivel 3 supone ajuste proactivo al cambio, actitud positiva y evaluación de repercusiones operativas antes de escalar.",
  },
  {
    id: 19,
    text: "En mesa técnica, dos dependencias interpretan distinto un criterio de validación. ¿Qué refleja Comunicación efectiva N3?",
    options: [
      { letter: "A", text: "Conducir consenso técnico, precisar definición operativa y formalizar acuerdos." },
      { letter: "B", text: "Mantener ambas interpretaciones para evitar debate." },
      { letter: "C", text: "Solicitar decisión final sin exponer diferencias." },
      { letter: "D", text: "Escalar de inmediato sin intentar alineación técnica." },
    ],
    correctAnswer: "A",
    explanation:
      "Comunicación efectiva N3 prioriza claridad, alineación interáreas y reducción de distorsiones que afectan la ejecución.",
  },
  {
    id: 20,
    text: "En un cierre operativo, un área externa retrasa insumos críticos. Desde Trabajo en equipo N3, lo correcto es:",
    options: [
      { letter: "A", text: "Asignar culpa y cerrar el caso sin coordinación." },
      { letter: "B", text: "Reemplazar totalmente el proceso acordado sin informar." },
      { letter: "C", text: "Coordinar plan de contingencia con responsables y seguimiento de compromisos." },
      { letter: "D", text: "Detener todas las actividades hasta nueva orden." },
    ],
    correctAnswer: "C",
    explanation:
      "La competencia de equipo en nivel 3 exige coordinación efectiva bajo presión, con decisiones proactivas y monitoreo de cumplimiento.",
  },
  {
    id: 21,
    text: "Un compañero te sugiere ocultar una inconsistencia porque “no impacta tanto”. ¿Qué conducta ética N4 aplica?",
    options: [
      { letter: "A", text: "Aceptar para proteger indicador de gestión." },
      { letter: "B", text: "Corregir y reportar la situación, preservando integridad de la información." },
      { letter: "C", text: "Dejar nota informal sin trámite oficial." },
      { letter: "D", text: "Ignorar para evitar fricciones de equipo." },
    ],
    correctAnswer: "B",
    explanation:
      "Comportamiento ético N4 demanda coherencia entre principios y acción, especialmente en manejo de información pública y trazabilidad institucional.",
  },
  {
    id: 22,
    text: "Se modifica repentinamente la priorización de casos por lineamiento nacional. En Adaptabilidad N3, la respuesta esperada es:",
    options: [
      { letter: "A", text: "Aplicar solo en el siguiente periodo para evitar reprocesos." },
      { letter: "B", text: "Delegar el ajuste sin acompañamiento." },
      { letter: "C", text: "Continuar con el esquema anterior hasta auditoría." },
      { letter: "D", text: "Reconfigurar criterios, comunicar al equipo y ejecutar transición con control de calidad." },
    ],
    correctAnswer: "D",
    explanation:
      "Adaptabilidad N3 exige ajuste proactivo y lectura de repercusiones ante cambios del entorno.",
  },
  {
    id: 23,
    text: "Necesitas comunicar una instrucción técnica compleja a personal nuevo y antiguo. ¿Qué práctica es correcta?",
    options: [
      { letter: "A", text: "Usar lenguaje claro, ejemplos operativos y confirmación de entendimiento por ambos grupos." },
      { letter: "B", text: "Entregar solo norma extensa sin contextualizar." },
      { letter: "C", text: "Dar instrucción verbal sin evidencia escrita." },
      { letter: "D", text: "Explicar primero a un grupo y omitir al otro por tiempo." },
    ],
    correctAnswer: "A",
    explanation:
      "La comunicación efectiva N3 exige seleccionar métodos adecuados al receptor y disminuir barreras de comprensión.",
  },
  {
    id: 24,
    text: "Un proyecto transversal depende de tu área y de soporte tecnológico. ¿Qué muestra Trabajo en equipo N3?",
    options: [
      { letter: "A", text: "Concentrarte solo en tus entregables internos." },
      { letter: "B", text: "Esperar reportes finales sin reuniones de sincronización." },
      { letter: "C", text: "Definir objetivos comunes, acuerdos de interfaz y seguimiento periódico entre áreas." },
      { letter: "D", text: "Evitar decisiones conjuntas para agilizar tu componente." },
    ],
    correctAnswer: "C",
    explanation:
      "Trabajo en equipo N3 implica articulación interdependiente, seguimiento de compromisos y foco en logro colectivo.",
  },
  {
    id: 25,
    text: "Si debes elegir entre cumplir una meta rápida o mantener controles que garantizan legalidad del trámite, desde el marco comportamental oficial debes:",
    options: [
      { letter: "A", text: "Priorizar velocidad y corregir legalidad después." },
      { letter: "B", text: "Negarte a toda meta operativa para evitar riesgo." },
      { letter: "C", text: "Delegar la decisión para no asumir responsabilidad." },
      { letter: "D", text: "Sostener controles y alinear ejecución con ética, calidad y resultado institucional." },
    ],
    correctAnswer: "D",
    explanation:
      "La combinación de Comportamiento ético N4 y Trabajo en equipo/Comunicación N3 exige resultados con integridad, no atajos que comprometan legalidad y confianza pública.",
  },
];
