import { Question } from "./types";

export const gestorBasicasQuestions: Question[] = [
  {
    id: 1,
    text: "Según el manual de funciones del Gestor I (OPEC 236741), el subproceso principal del empleo corresponde a:",
    options: [
      { letter: "A", text: "Administración de cartera y cobro coactivo." },
      { letter: "B", text: "Fiscalización y liquidación tributaria." },
      { letter: "C", text: "Recursos administrativos, operación logística, compras y contratos." },
      { letter: "D", text: "Gestión jurídica de litigios judiciales." },
    ],
    correctAnswer: "C",
    explanation:
      "El Manual Específico de Requisitos y Funciones de la DIAN (Res. 0067 de 2024) ubica el Gestor I en el proceso administrativo y financiero, con ese subproceso como eje funcional.",
  },
  {
    id: 2,
    text: "Respecto al requisito de experiencia para Gestor I en la convocatoria DIAN 2676, la regla del manual indica:",
    options: [
      { letter: "A", text: "No requiere experiencia." },
      { letter: "B", text: "Exige 1 año de experiencia relacionada." },
      { letter: "C", text: "Exige 2 años de experiencia profesional." },
      { letter: "D", text: "Exige 3 años de experiencia laboral." },
    ],
    correctAnswer: "A",
    explanation:
      "La ficha del empleo Gestor I establece requisito de formación profesional y no exige experiencia previa, conforme al MERF adoptado por la DIAN.",
  },
  {
    id: 3,
    text: "La Ley 80 de 1993 es conocida como:",
    options: [
      { letter: "A", text: "Régimen de insolvencia empresarial." },
      { letter: "B", text: "Código de Procedimiento Administrativo y de lo Contencioso Administrativo." },
      { letter: "C", text: "Régimen de carrera administrativa específica DIAN." },
      { letter: "D", text: "Estatuto General de Contratación de la Administración Pública." },
    ],
    correctAnswer: "D",
    explanation:
      "La Ley 80 de 1993 regula la contratación estatal y constituye referencia obligatoria para funciones de compras y contratos del Gestor I.",
  },
  {
    id: 4,
    text: "La Ley 1150 de 2007, en contratación pública, se orienta principalmente a:",
    options: [
      { letter: "A", text: "Derogar por completo la licitación pública." },
      { letter: "B", text: "Introducir medidas de eficiencia y transparencia en la selección contractual." },
      { letter: "C", text: "Trasladar toda contratación a jueces administrativos." },
      { letter: "D", text: "Eliminar la supervisión de contratos estatales." },
    ],
    correctAnswer: "B",
    explanation:
      "La Ley 1150 de 2007 complementa la Ley 80 y fortalece eficiencia, transparencia y selección objetiva en el sistema de contratación estatal.",
  },
  {
    id: 5,
    text: "¿Cuál de las siguientes es una modalidad legal de selección de contratistas en Colombia?",
    options: [
      { letter: "A", text: "Contratación discrecional irrestricta." },
      { letter: "B", text: "Adjudicación preferente sin reglas de publicidad." },
      { letter: "C", text: "Concurso de méritos." },
      { letter: "D", text: "Subasta cerrada sin pliego ni acto administrativo." },
    ],
    correctAnswer: "C",
    explanation:
      "Las modalidades incluyen, entre otras, licitación pública, selección abreviada, concurso de méritos, contratación directa y mínima cuantía (Ley 80 y Ley 1150).",
  },
  {
    id: 6,
    text: "El SECOP II se define correctamente como:",
    options: [
      { letter: "A", text: "Plataforma transaccional oficial para gestionar el ciclo contractual estatal." },
      { letter: "B", text: "Aplicativo exclusivo de nómina territorial." },
      { letter: "C", text: "Sistema judicial para resolver controversias contractuales." },
      { letter: "D", text: "Registro privado de proveedores sin publicidad oficial." },
    ],
    correctAnswer: "A",
    explanation:
      "SECOP II, administrado por Colombia Compra Eficiente, soporta publicación, selección, adjudicación y seguimiento contractual en línea.",
  },
  {
    id: 7,
    text: "En SIIF Nación II, el registro de compromisos y obligaciones corresponde al ámbito de:",
    options: [
      { letter: "A", text: "Gestión disciplinaria de servidores." },
      { letter: "B", text: "Control aduanero de frontera." },
      { letter: "C", text: "Gestión comercial privada." },
      { letter: "D", text: "Ejecución presupuestal y financiera del gasto público." },
    ],
    correctAnswer: "D",
    explanation:
      "SIIF Nación II es el sistema financiero oficial para presupuesto, contabilidad y tesorería del orden nacional; es competencia funcional directa del Gestor I.",
  },
  {
    id: 8,
    text: "En gestión documental pública, las TRD sirven para:",
    options: [
      { letter: "A", text: "Definir salarios por dependencia." },
      { letter: "B", text: "Clasificar series documentales y tiempos de retención/disposición." },
      { letter: "C", text: "Autorizar contratación directa sin estudio previo." },
      { letter: "D", text: "Reemplazar los manuales de funciones institucionales." },
    ],
    correctAnswer: "B",
    explanation:
      "Las Tablas de Retención Documental son instrumento archivístico para trazabilidad, conservación y disposición documental conforme a la normativa de archivo.",
  },
  {
    id: 9,
    text: "Una función del Gestor I en administración de mercancías aprehendidas/decomisadas/abandonadas es:",
    options: [
      { letter: "A", text: "Declarar judicialmente la legalidad de la mercancía." },
      { letter: "B", text: "Fijar política tributaria nacional." },
      { letter: "C", text: "Controlar ingreso, almacenamiento, inventario y salida conforme al procedimiento." },
      { letter: "D", text: "Eximir de requisitos de trazabilidad por urgencia operativa." },
    ],
    correctAnswer: "C",
    explanation:
      "El manual del Gestor I asigna control logístico y documental sobre mercancías bajo custodia de la DIAN, con trazabilidad y cumplimiento de reglas de disposición.",
  },
  {
    id: 10,
    text: "En administración de infraestructura institucional, el Gestor I debe priorizar:",
    options: [
      { letter: "A", text: "Soporte operativo para mantenimiento, adecuaciones y condiciones de servicio." },
      { letter: "B", text: "Definición de jurisprudencia administrativa." },
      { letter: "C", text: "Aprobación de devoluciones tributarias." },
      { letter: "D", text: "Intervención judicial en litigios contractuales." },
    ],
    correctAnswer: "A",
    explanation:
      "El componente de infraestructura en el manual del cargo se orienta a soporte logístico y administrativo de sedes, bienes y servicios para continuidad institucional.",
  },
  {
    id: 11,
    text: "En contratación estatal, ¿qué documento sustenta la necesidad y condiciones del proceso en etapa precontractual?",
    options: [
      { letter: "A", text: "Acta de liquidación final." },
      { letter: "B", text: "Póliza de cumplimiento ya expedida por oferente." },
      { letter: "C", text: "Resolución sancionatoria disciplinaria." },
      { letter: "D", text: "Estudios previos." },
    ],
    correctAnswer: "D",
    explanation:
      "Los estudios previos justifican necesidad, objeto, riesgos, requisitos y estimación económica; son base de legalidad y planeación contractual.",
  },
  {
    id: 12,
    text: "Según el artículo 209 de la Constitución Política, la función administrativa se desarrolla con principios como:",
    options: [
      { letter: "A", text: "Confidencialidad absoluta, discrecionalidad y reserva." },
      { letter: "B", text: "Igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad." },
      { letter: "C", text: "Enriquecimiento institucional y supremacía presupuestal." },
      { letter: "D", text: "Centralización estricta y ausencia de control interno." },
    ],
    correctAnswer: "B",
    explanation:
      "El artículo 209 C.P. fija principios rectores de la función administrativa, aplicables a todos los procesos de gestión pública, incluido el rol del Gestor I.",
  },
  {
    id: 13,
    text: "En CPACA (Ley 1437 de 2011), el derecho de petición exige para peticiones generales un término de:",
    options: [
      { letter: "A", text: "30 días hábiles." },
      { letter: "B", text: "10 días hábiles." },
      { letter: "C", text: "15 días hábiles." },
      { letter: "D", text: "3 días hábiles." },
    ],
    correctAnswer: "C",
    explanation:
      "La Ley 1437 de 2011, artículo 14 (mod. Ley 1755 de 2015), define 15 días hábiles para peticiones en interés general o particular.",
  },
  {
    id: 14,
    text: "En MIPG, una finalidad clave es:",
    options: [
      { letter: "A", text: "Integrar planeación, gestión, seguimiento y control para resultados públicos." },
      { letter: "B", text: "Reemplazar la Constitución como norma de administración." },
      { letter: "C", text: "Eliminar controles internos institucionales." },
      { letter: "D", text: "Concentrar la gestión pública solo en indicadores financieros." },
    ],
    correctAnswer: "A",
    explanation:
      "MIPG es el marco de referencia de gestión y desempeño institucional promovido por Función Pública para mejorar resultados y confianza ciudadana.",
  },
  {
    id: 15,
    text: "La DIAN fue creada por el Decreto 2117 de 1992 como resultado de:",
    options: [
      { letter: "A", text: "Escisión de la Fiscalía General de la Nación." },
      { letter: "B", text: "Creación de un órgano constitucional autónomo nuevo." },
      { letter: "C", text: "Transformación de la CNSC en entidad tributaria." },
      { letter: "D", text: "Fusión de la Dirección de Impuestos Nacionales y la Dirección de Aduanas Nacionales." },
    ],
    correctAnswer: "D",
    explanation:
      "La DIAN nace de la fusión DIN + DAN y luego su estructura se desarrolla en decretos orgánicos posteriores (4048 de 2008 y 1742 de 2020).",
  },
  {
    id: 16,
    text: "En PQRSF, una petición de documentos debe resolverse en:",
    options: [
      { letter: "A", text: "20 días hábiles." },
      { letter: "B", text: "10 días hábiles." },
      { letter: "C", text: "30 días calendario." },
      { letter: "D", text: "15 días calendario." },
    ],
    correctAnswer: "B",
    explanation:
      "El régimen del derecho de petición (Ley 1437 art. 14, mod. Ley 1755 de 2015) fija 10 días hábiles para solicitudes de documentos e información.",
  },
  {
    id: 17,
    text: "En el marco de transparencia (Ley 1712 de 2014), la regla general sobre información pública es:",
    options: [
      { letter: "A", text: "Reserva por defecto salvo autorización interna." },
      { letter: "B", text: "Acceso condicionado siempre a orden judicial." },
      { letter: "C", text: "Máxima publicidad, salvo excepciones legales expresas." },
      { letter: "D", text: "Uso exclusivo de servidores públicos de la entidad." },
    ],
    correctAnswer: "C",
    explanation:
      "La Ley 1712 consagra el principio de máxima publicidad de la información pública, con límites taxativos de reserva y clasificación.",
  },
  {
    id: 18,
    text: "En operación logística del Gestor I, una mala práctica sería:",
    options: [
      { letter: "A", text: "Registrar movimientos de inventario con soporte y fecha." },
      { letter: "B", text: "Aplicar protocolo de custodia y control físico." },
      { letter: "C", text: "Coordinar con áreas responsables la disposición final." },
      { letter: "D", text: "Omitir trazabilidad documental de ingresos y salidas de mercancía." },
    ],
    correctAnswer: "D",
    explanation:
      "La trazabilidad es requisito de control interno y responsabilidad administrativa. Omitir registros compromete legalidad, auditoría y cadena de custodia.",
  },
  {
    id: 19,
    text: "¿Cuál de los siguientes NO es un eje funcional del Gestor I?",
    options: [
      { letter: "A", text: "Gestión documental y SIIF Nación II." },
      { letter: "B", text: "Administración de infraestructura y servicios." },
      { letter: "C", text: "Contratación pública y soporte logístico." },
      { letter: "D", text: "Cobro coactivo y devoluciones tributarias como núcleo del cargo." },
    ],
    correctAnswer: "D",
    explanation:
      "Cobro y devoluciones son núcleo del Analista V. El Gestor I se orienta al proceso administrativo-financiero según su manual de funciones.",
  },
  {
    id: 20,
    text: "En un proceso contractual, seleccionar oferente por afinidad personal y no por criterios del pliego vulnera principalmente:",
    options: [
      { letter: "A", text: "Planeación urbanística." },
      { letter: "B", text: "Transparencia y selección objetiva." },
      { letter: "C", text: "Progresividad tributaria." },
      { letter: "D", text: "Competencia funcional de devoluciones." },
    ],
    correctAnswer: "B",
    explanation:
      "La contratación estatal exige transparencia y selección objetiva (Ley 80, Ley 1150). Cualquier sesgo personal compromete legalidad y control fiscal/disciplinario.",
  },
  {
    id: 21,
    text: "El objeto institucional de la DIAN incluye:",
    options: [
      { letter: "A", text: "Administrar justicia ordinaria." },
      { letter: "B", text: "Negociar tratados internacionales de comercio." },
      { letter: "C", text: "Coadyuvar a la seguridad fiscal del Estado y al orden económico público." },
      { letter: "D", text: "Regular el sistema financiero privado." },
    ],
    correctAnswer: "C",
    explanation:
      "La naturaleza jurídica y objeto de la DIAN, en su marco orgánico, enfatizan seguridad fiscal y protección del orden económico público nacional.",
  },
  {
    id: 22,
    text: "En contratación de mínima cuantía, es correcto afirmar que:",
    options: [
      { letter: "A", text: "Tiene procedimiento simplificado, pero conserva requisitos de publicidad, soporte y trazabilidad." },
      { letter: "B", text: "Permite contratar sin ningún documento precontractual." },
      { letter: "C", text: "No requiere verificación de idoneidad del proveedor." },
      { letter: "D", text: "Elimina toda intervención de supervisión contractual." },
    ],
    correctAnswer: "A",
    explanation:
      "La mínima cuantía simplifica etapas, pero no elimina principios de legalidad, transparencia, publicidad y control documental del proceso contractual.",
  },
  {
    id: 23,
    text: "Cuando se administra archivo institucional, conservar expedientes completos y ordenados permite:",
    options: [
      { letter: "A", text: "Evitar toda respuesta a derechos de petición." },
      { letter: "B", text: "Reducir de manera automática los procesos de contratación." },
      { letter: "C", text: "Reemplazar el control interno por controles manuales." },
      { letter: "D", text: "Asegurar memoria institucional, defensa jurídica y auditoría efectiva." },
    ],
    correctAnswer: "D",
    explanation:
      "La gestión documental soporta transparencia, rendición de cuentas, defensa jurídica y control; por eso es una competencia funcional explícita del Gestor I.",
  },
  {
    id: 24,
    text: "En actuaciones administrativas de la DIAN, la motivación de actos administrativos está asociada al deber de:",
    options: [
      { letter: "A", text: "Evitar toda publicación oficial." },
      { letter: "B", text: "Expresar fundamentos de hecho y de derecho de la decisión." },
      { letter: "C", text: "Aplicar criterios secretos para decisiones urgentes." },
      { letter: "D", text: "Suprimir el derecho de contradicción del administrado." },
    ],
    correctAnswer: "B",
    explanation:
      "El CPACA exige motivación para garantizar legalidad, control y derecho de defensa. Esto aplica en actos y trámites donde participa el Gestor I.",
  },
  {
    id: 25,
    text: "El uso adecuado de SIIF Nación II por parte del Gestor I contribuye directamente a:",
    options: [
      { letter: "A", text: "Integridad de la información presupuestal, contable y de tesorería institucional." },
      { letter: "B", text: "Definir sanciones penales por contrabando." },
      { letter: "C", text: "Aprobar declaraciones tributarias de grandes contribuyentes." },
      { letter: "D", text: "Reemplazar completamente SECOP II en contratación." },
    ],
    correctAnswer: "A",
    explanation:
      "SIIF Nación II es núcleo de la gestión financiera estatal. Su uso correcto mejora control, oportunidad del gasto y trazabilidad, coherente con funciones del Gestor I.",
  },
];
