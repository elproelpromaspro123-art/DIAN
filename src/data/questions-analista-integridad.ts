import { Question } from "./types";

export const analistaIntegridadQuestions: Question[] = [
  {
    id: 1,
    text: "¿Cuál lista corresponde exactamente a los cinco valores del Código de Integridad DIAN?",
    options: [
      { letter: "A", text: "Autocuidado, responsabilidad, templanza, prudencia y legalidad." },
      { letter: "B", text: "Eficiencia, moralidad, economía, publicidad e imparcialidad." },
      { letter: "C", text: "Honestidad, Respeto, Compromiso, Diligencia y Justicia." },
      { letter: "D", text: "Innovación, liderazgo, servicio, disciplina y transparencia." },
    ],
    correctAnswer: "C",
    explanation:
      "El Código de Integridad DIAN adopta esos cinco valores como marco de conducta institucional para todos los servidores y colaboradores.",
  },
  {
    id: 2,
    text: "En el valor Honestidad, una conducta esperada (" + '"lo que hago"' + ") es:",
    options: [
      { letter: "A", text: "Facilitar acceso a información pública completa, veraz y oportuna." },
      { letter: "B", text: "Recibir atenciones para agilizar trámites sin dejar registro." },
      { letter: "C", text: "Priorizar solicitudes de conocidos por confianza personal." },
      { letter: "D", text: "Usar bienes públicos en asuntos particulares si no hay auditoría." },
    ],
    correctAnswer: "A",
    explanation:
      "El Código de Integridad relaciona Honestidad con verdad, transparencia y defensa del interés general; incluye facilitar información pública en términos legales.",
  },
  {
    id: 3,
    text: "Según el Código de Integridad, ¿cuál conducta pertenece a " + '"lo que no hago"' + " en Honestidad?",
    options: [
      { letter: "A", text: "Declarar oportunamente conflictos de interés." },
      { letter: "B", text: "Cumplir deberes incluso sin supervisión directa." },
      { letter: "C", text: "Denunciar faltas que afecten la administración pública." },
      { letter: "D", text: "Aceptar incentivos, favores o beneficios para decidir un trámite." },
    ],
    correctAnswer: "D",
    explanation:
      "El Código es explícito en prohibir beneficios indebidos y tratos preferenciales, por ser contrarios a integridad y transparencia.",
  },
  {
    id: 4,
    text: "En el valor Respeto, la conducta más alineada es:",
    options: [
      { letter: "A", text: "Responder con ironía cuando hay presión ciudadana." },
      { letter: "B", text: "Reconocer dignidad de las personas y mantener trato igualitario sin discriminación." },
      { letter: "C", text: "Aplicar estereotipos para filtrar prioridades de atención." },
      { letter: "D", text: "Evitar diálogo cuando hay diferencias de criterio." },
    ],
    correctAnswer: "B",
    explanation:
      "Respeto exige trato digno, escucha y equidad. El Código rechaza discriminación, burlas o sesgos en el servicio público.",
  },
  {
    id: 5,
    text: "En Compromiso, la pauta correcta es:",
    options: [
      { letter: "A", text: "Atender solo casos de mayor exposición mediática." },
      { letter: "B", text: "Evitar reportar problemas para no afectar indicadores." },
      { letter: "C", text: "Escuchar activamente, orientar al ciudadano y redoblar esfuerzos para resolver." },
      { letter: "D", text: "Negarse a atender si la carga de trabajo aumenta." },
    ],
    correctAnswer: "C",
    explanation:
      "El valor Compromiso en el Código de Integridad promueve empatía, servicio oportuno y responsabilidad frente a necesidades ciudadanas.",
  },
  {
    id: 6,
    text: "¿Qué conducta representa Diligencia en la DIAN?",
    options: [
      { letter: "A", text: "Cumplir tiempos, usar bien recursos públicos y procurar calidad en resultados." },
      { letter: "B", text: "Dejar tareas críticas para último momento sin gestión de riesgo." },
      { letter: "C", text: "Repetir prácticas ineficientes para evitar cambios." },
      { letter: "D", text: "Justificar demoras sin informar al ciudadano ni al equipo." },
    ],
    correctAnswer: "A",
    explanation:
      "Diligencia implica oportunidad, calidad y cuidado de recursos públicos; incluye proponer mejoras y evitar negligencia.",
  },
  {
    id: 7,
    text: "Desde el valor Justicia, decidir un caso correctamente implica:",
    options: [
      { letter: "A", text: "Favorecer primero a quien tenga mayor influencia institucional." },
      { letter: "B", text: "Aplicar reglas distintas para evitar quejas." },
      { letter: "C", text: "Priorizar percepción personal sobre evidencia documental." },
      { letter: "D", text: "Fundamentar la decisión en hechos verificables y reglas aplicables de manera imparcial." },
    ],
    correctAnswer: "D",
    explanation:
      "Justicia en el Código de Integridad exige objetividad e imparcialidad, con protección de derechos y debido proceso.",
  },
  {
    id: 8,
    text: "El Código de Integridad DIAN aplica a:",
    options: [
      { letter: "A", text: "Solo directivos y niveles estratégicos." },
      { letter: "B", text: "Todos los niveles y jerarquías, sin importar tipo de vinculación." },
      { letter: "C", text: "Solo personal de planta en proceso misional." },
      { letter: "D", text: "Únicamente contratistas de apoyo administrativo." },
    ],
    correctAnswer: "B",
    explanation:
      "El alcance del Código es transversal: cubre a toda persona que ejerce función pública en la DIAN, independiente del vínculo.",
  },
  {
    id: 9,
    text: "En la ratificación del juramento de integridad se reafirma, entre otros deberes:",
    options: [
      { letter: "A", text: "Priorizar resultados sin necesidad de soporte legal." },
      { letter: "B", text: "Reservar toda información incluso la pública." },
      { letter: "C", text: "Respetar Constitución y normas tributarias, aduaneras y cambiarias." },
      { letter: "D", text: "Aplicar criterios personales en ausencia de supervisión." },
    ],
    correctAnswer: "C",
    explanation:
      "El juramento institucional compromete actuación ejemplar y cumplimiento del marco constitucional y legal aplicable a la función DIAN.",
  },
  {
    id: 10,
    text: "En los valores aspiracionales DIAN, la Valentía se representa con:",
    options: [
      { letter: "A", text: "Oso de anteojos." },
      { letter: "B", text: "Lechuza." },
      { letter: "C", text: "Jaguar." },
      { letter: "D", text: "Colibrí." },
    ],
    correctAnswer: "A",
    explanation:
      "El Código de Integridad DIAN incorpora iconografía aspiracional: Valentía (oso de anteojos), Objetividad (lechuza), Templanza (jaguar), Providencia (colibrí).",
  },
  {
    id: 11,
    text: "¿Qué animal representa la Objetividad en los valores aspiracionales DIAN?",
    options: [
      { letter: "A", text: "Jaguar." },
      { letter: "B", text: "Colibrí." },
      { letter: "C", text: "Oso de anteojos." },
      { letter: "D", text: "Lechuza." },
    ],
    correctAnswer: "D",
    explanation:
      "La Objetividad se asocia a la lechuza en el marco aspiracional del Código de Integridad.",
  },
  {
    id: 12,
    text: "Templanza, en la iconografía aspiracional DIAN, corresponde a:",
    options: [
      { letter: "A", text: "Colibrí." },
      { letter: "B", text: "Jaguar." },
      { letter: "C", text: "Lechuza." },
      { letter: "D", text: "Oso de anteojos." },
    ],
    correctAnswer: "B",
    explanation:
      "La Templanza está simbolizada por el jaguar en el Código de Integridad DIAN.",
  },
  {
    id: 13,
    text: "Providencia, en los valores aspiracionales de la DIAN, se identifica con:",
    options: [
      { letter: "A", text: "Lechuza." },
      { letter: "B", text: "Jaguar." },
      { letter: "C", text: "Colibrí." },
      { letter: "D", text: "Oso de anteojos." },
    ],
    correctAnswer: "C",
    explanation:
      "La Providencia está asociada al colibrí en la narrativa aspiracional de integridad institucional.",
  },
  {
    id: 14,
    text: "En el Código de Ética DIAN (2021), el pilar central del preámbulo es:",
    options: [
      { letter: "A", text: "Libertad de decisión." },
      { letter: "B", text: "Centralización jerárquica." },
      { letter: "C", text: "Supremacía del resultado económico." },
      { letter: "D", text: "Neutralidad absoluta sin responsabilidad personal." },
    ],
    correctAnswer: "A",
    explanation:
      "El preámbulo del Código de Ética resalta la libertad de decisión como base de la conducta ética y de la responsabilidad por la elección.",
  },
  {
    id: 15,
    text: "En el Código de Ética DIAN, los principios éticos se entienden como:",
    options: [
      { letter: "A", text: "Normas técnicas de archivo institucional." },
      { letter: "B", text: "Valores opcionales sin fuerza orientadora." },
      { letter: "C", text: "Reglas de productividad financiera." },
      { letter: "D", text: "Expresiones del deber ser que orientan interpretación y conducta." },
    ],
    correctAnswer: "D",
    explanation:
      "El Código define principios éticos como pautas normativas de interpretación del comportamiento esperado en el servicio público.",
  },
  {
    id: 16,
    text: "Las pautas éticas, según el Código de Ética DIAN, son:",
    options: [
      { letter: "A", text: "Sanciones automáticas para todo incumplimiento funcional." },
      { letter: "B", text: "Guías de conducta para orientar decisiones y actuaciones." },
      { letter: "C", text: "Requisitos exclusivos de contratación pública." },
      { letter: "D", text: "Manuales técnicos de sistemas de información." },
    ],
    correctAnswer: "B",
    explanation:
      "El documento define pautas éticas como guías de comportamiento para fortalecer criterio y coherencia institucional.",
  },
  {
    id: 17,
    text: "El principio " + '"prevalencia del ser sobre el tener y el representar"' + " significa principalmente:",
    options: [
      { letter: "A", text: "Priorizar la apariencia de éxito sobre la integridad personal." },
      { letter: "B", text: "Acumular poder para proteger la imagen institucional." },
      { letter: "C", text: "Dar primacía al desarrollo ético y humano frente a lo material o lo aparente." },
      { letter: "D", text: "Sustituir responsabilidades legales por juicio personal." },
    ],
    correctAnswer: "C",
    explanation:
      "Ese principio del Código de Ética orienta a priorizar crecimiento ético y dignidad personal por encima de intereses de posesión o estatus.",
  },
  {
    id: 18,
    text: "El principio de " + '"responsabilidad por la elección"' + " implica que:",
    options: [
      { letter: "A", text: "Toda decisión ética puede delegarse al superior inmediato." },
      { letter: "B", text: "La persona responde por las consecuencias de las decisiones que adopta." },
      { letter: "C", text: "Solo hay responsabilidad si existe sanción formal." },
      { letter: "D", text: "La urgencia operativa elimina responsabilidad individual." },
    ],
    correctAnswer: "B",
    explanation:
      "El Código de Ética afirma que decidir es un acto libre y responsable; por tanto, cada servidor asume consecuencias de su elección.",
  },
  {
    id: 19,
    text: "El principio de Cuidado del otro promueve:",
    options: [
      { letter: "A", text: "Competencia interna sin colaboración." },
      { letter: "B", text: "Indiferencia frente al impacto de los actos propios." },
      { letter: "C", text: "Priorización exclusiva del resultado personal." },
      { letter: "D", text: "Preocupación activa por la dignidad, bienestar y efectos de las decisiones sobre otras personas." },
    ],
    correctAnswer: "D",
    explanation:
      "El Código de Ética establece cuidado del otro como responsabilidad relacional en la entidad y en el servicio al ciudadano.",
  },
  {
    id: 20,
    text: "En el Código de Ética, el principio de Autocuidado se entiende como:",
    options: [
      { letter: "A", text: "Desentenderse del trabajo para proteger la salud." },
      { letter: "B", text: "Asumir cuidado de sí como deber superior que habilita bienestar y servicio responsable." },
      { letter: "C", text: "Delegar toda carga crítica en otros para evitar estrés." },
      { letter: "D", text: "Reducir la rendición de cuentas para evitar presión laboral." },
    ],
    correctAnswer: "B",
    explanation:
      "Autocuidado es principio explícito del Código de Ética: cuidar de sí fortalece equilibrio personal y desempeño ético sostenido.",
  },
  {
    id: 21,
    text: "El principio de Cuidado de la función pública exige:",
    options: [
      { letter: "A", text: "Priorizar lealtades personales sobre legalidad." },
      { letter: "B", text: "Reservar toda actuación para evitar control." },
      { letter: "C", text: "Proteger integridad institucional y actuar con prudencia en lo público y lo privado." },
      { letter: "D", text: "Reducir estándares para cumplir metas rápidas." },
    ],
    correctAnswer: "C",
    explanation:
      "El Código de Ética señala que cuidar la función pública implica proteger su legitimidad, imagen y sentido de servicio al interés general.",
  },
  {
    id: 22,
    text: "Sobre implementación del Código de Ética DIAN, es correcto afirmar que:",
    options: [
      { letter: "A", text: "Se articula mediante plan anual por dependencia y seguimiento periódico institucional." },
      { letter: "B", text: "Se activa solo cuando hay queja disciplinaria." },
      { letter: "C", text: "Aplica únicamente a áreas misionales." },
      { letter: "D", text: "No tiene relación con evaluación del desempeño." },
    ],
    correctAnswer: "A",
    explanation:
      "El Código de Ética contempla despliegue anual, seguimiento y articulación con gestión del desempeño para asegurar apropiación efectiva.",
  },
  {
    id: 23,
    text: "Dilema: en cobro coactivo, un tercero ofrece ventaja económica para alterar prioridad de embargo. ¿Qué decisión es íntegra?",
    options: [
      { letter: "A", text: "Aceptar y dejar constancia interna sin reporte." },
      { letter: "B", text: "Negociar un beneficio menor para no comprometerse." },
      { letter: "C", text: "Continuar el trámite y reportar solo si hay denuncia externa." },
      { letter: "D", text: "Rechazar, documentar y reportar de inmediato por canales institucionales." },
    ],
    correctAnswer: "D",
    explanation:
      "El Código de Integridad (Honestidad/Justicia) y el Código de Ética obligan rechazo de beneficios indebidos y actuación transparente con reporte formal.",
  },
  {
    id: 24,
    text: "Dilema: te asignan revisión de devolución de un familiar cercano. ¿Cuál conducta se ajusta al marco ético DIAN?",
    options: [
      { letter: "A", text: "Resolver el caso con mayor rigor y no informar conflicto." },
      { letter: "B", text: "Declarar conflicto de interés y apartarte del trámite conforme al procedimiento." },
      { letter: "C", text: "Consultar informalmente a un compañero y continuar." },
      { letter: "D", text: "Acelerar el trámite para evitar sospechas de demora." },
    ],
    correctAnswer: "B",
    explanation:
      "La integridad pública exige gestionar conflicto de interés de forma oportuna, garantizando imparcialidad y confianza institucional.",
  },
  {
    id: 25,
    text: "Ante presión para decidir rápido sin soporte probatorio en un expediente sensible, la opción ética correcta es:",
    options: [
      { letter: "A", text: "Decidir de inmediato por conveniencia institucional." },
      { letter: "B", text: "Adoptar criterio subjetivo y corregir luego." },
      { letter: "C", text: "Suspender indefinidamente sin motivación." },
      { letter: "D", text: "Sostener decisión basada en evidencia, legalidad y trazabilidad del debido proceso." },
    ],
    correctAnswer: "D",
    explanation:
      "El marco ético DIAN exige decisiones justificadas, objetivas y auditables; la rapidez no puede desplazar legalidad, justicia ni responsabilidad pública.",
  },
];
