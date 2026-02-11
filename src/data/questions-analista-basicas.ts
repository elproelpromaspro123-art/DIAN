import { Question } from "./types";

export const analistaBasicasQuestions: Question[] = [
  {
    id: 1,
    text: "Según el manual de funciones del cargo Analista V (OPEC 236732), ¿en qué subproceso se concentra el empleo?",
    options: [
      { letter: "A", text: "Operación logística, compras y contratos." },
      { letter: "B", text: "Administración de cartera y recaudo/devoluciones." },
      { letter: "C", text: "Gestión jurídica de litigios laborales." },
      { letter: "D", text: "Administración de infraestructura y servicios." },
    ],
    correctAnswer: "B",
    explanation:
      "El Manual Específico de Requisitos y Funciones (Res. DIAN 0067 de 2024) ubica el cargo Analista V en el proceso misional de cumplimiento de obligaciones tributarias, con foco en administración de cartera y recaudo/devoluciones.",
  },
  {
    id: 2,
    text: "En el ciclo de cobro de obligaciones tributarias, ¿cuál es la diferencia correcta entre cobro persuasivo y cobro coactivo?",
    options: [
      { letter: "A", text: "Ambos son judiciales y requieren sentencia previa." },
      { letter: "B", text: "El persuasivo solo aplica para aduanas; el coactivo solo para renta." },
      { letter: "C", text: "El persuasivo busca pago voluntario; el coactivo ejecuta forzosamente con poder de cobro administrativo." },
      { letter: "D", text: "El coactivo es opcional y depende de autorización del contribuyente." },
    ],
    correctAnswer: "C",
    explanation:
      "El cobro persuasivo es una gestión previa orientada al cumplimiento voluntario. Si no hay pago, la DIAN puede iniciar cobro coactivo conforme al Estatuto Tributario (arts. 823 y ss.), con actuaciones de ejecución administrativa.",
  },
  {
    id: 3,
    text: "Una vez notificado el mandamiento de pago en cobro coactivo, el deudor dispone, en regla general, de:",
    options: [
      { letter: "A", text: "15 días para pagar o proponer excepciones." },
      { letter: "B", text: "5 días para pagar sin derecho a defensa." },
      { letter: "C", text: "30 días para conciliar en sede judicial." },
      { letter: "D", text: "10 días para presentar recurso de apelación ante juez civil." },
    ],
    correctAnswer: "A",
    explanation:
      "En cobro coactivo tributario, el Estatuto Tributario (art. 830 y concordantes) reconoce el término de 15 días para pagar o proponer excepciones al mandamiento de pago.",
  },
  {
    id: 4,
    text: "¿Qué artículo del Estatuto Tributario regula de forma expresa las medidas cautelares dentro del cobro coactivo?",
    options: [
      { letter: "A", text: "Artículo 855." },
      { letter: "B", text: "Artículo 641." },
      { letter: "C", text: "Artículo 363." },
      { letter: "D", text: "Artículo 837." },
    ],
    correctAnswer: "D",
    explanation:
      "El Estatuto Tributario, artículo 837, desarrolla el embargo y secuestro dentro del proceso de cobro coactivo. Es una referencia central en las competencias funcionales del Analista V.",
  },
  {
    id: 5,
    text: "En devoluciones y compensaciones, la función del Analista V se orienta principalmente a:",
    options: [
      { letter: "A", text: "Autorizar pagos sin verificación de soportes." },
      { letter: "B", text: "Validar requisitos, soportes y consistencia técnica del trámite." },
      { letter: "C", text: "Modificar tarifas de impuestos por acto interno." },
      { letter: "D", text: "Resolver sanciones disciplinarias de contribuyentes." },
    ],
    correctAnswer: "B",
    explanation:
      "El manual del cargo establece apoyo técnico en devoluciones y compensaciones: revisión de requisitos, cruces de información y trazabilidad del expediente, no decisiones discrecionales sin soporte.",
  },
  {
    id: 6,
    text: "En el contexto DIAN, el control extensivo de obligaciones busca principalmente:",
    options: [
      { letter: "A", text: "Sustituir totalmente la fiscalización individual." },
      { letter: "B", text: "Realizar solo campañas pedagógicas sin efectos de control." },
      { letter: "C", text: "Verificar cumplimiento masivo de obligaciones formales y sustanciales con analítica y cruces." },
      { letter: "D", text: "Investigar delitos penales como autoridad judicial." },
    ],
    correctAnswer: "C",
    explanation:
      "El control extensivo corresponde a acciones masivas para detectar incumplimientos en declaración, pago y deberes formales. Está previsto en el marco funcional del empleo Analista V.",
  },
  {
    id: 7,
    text: "Si un deudor entra a proceso concursal, la DIAN debe:",
    options: [
      { letter: "A", text: "Continuar siempre el cobro coactivo sin ajustes." },
      { letter: "B", text: "Desistir automáticamente de toda acreencia fiscal." },
      { letter: "C", text: "Eliminar de oficio la obligación tributaria." },
      { letter: "D", text: "Ajustar su actuación al régimen concursal y hacer valer sus créditos por la vía legal correspondiente." },
    ],
    correctAnswer: "D",
    explanation:
      "Los procesos concursales son competencia funcional del cargo. La DIAN debe actuar conforme al régimen de insolvencia y a las reglas de prelación, no por vía informal.",
  },
  {
    id: 8,
    text: "La DIAN es, jurídicamente:",
    options: [
      { letter: "A", text: "Una Unidad Administrativa Especial adscrita al Ministerio de Hacienda, con personería jurídica y autonomía administrativa y presupuestal." },
      { letter: "B", text: "Un órgano constitucional autónomo sin adscripción ministerial." },
      { letter: "C", text: "Una superintendencia sin personería jurídica." },
      { letter: "D", text: "Una empresa industrial y comercial del Estado." },
    ],
    correctAnswer: "A",
    explanation:
      "La naturaleza jurídica de la DIAN se define en su marco orgánico (Decreto 2117 de 1992, Decreto 4048 de 2008 y Decreto 1742 de 2020): UAE adscrita a MinHacienda con personería y autonomía.",
  },
  {
    id: 9,
    text: "La DIAN surge por la fusión de la DIN y la DAN mediante:",
    options: [
      { letter: "A", text: "Ley 80 de 1993." },
      { letter: "B", text: "Decreto 2117 de 1992." },
      { letter: "C", text: "Ley 1437 de 2011." },
      { letter: "D", text: "Decreto 1742 de 2020." },
    ],
    correctAnswer: "B",
    explanation:
      "El Decreto 2117 de 1992 creó la DIAN por fusión de la Dirección de Impuestos Nacionales y la Dirección de Aduanas Nacionales. Esta referencia es base de conocimiento institucional.",
  },
  {
    id: 10,
    text: "Según la estructura orgánica de la DIAN, el Director General es designado por:",
    options: [
      { letter: "A", text: "El Congreso de la República." },
      { letter: "B", text: "El Ministro de Hacienda por concurso." },
      { letter: "C", text: "El Presidente de la República." },
      { letter: "D", text: "La CNSC." },
    ],
    correctAnswer: "C",
    explanation:
      "La dirección de la entidad corresponde al Director General de la DIAN, de nombramiento presidencial, conforme al marco orgánico vigente de la entidad.",
  },
  {
    id: 11,
    text: "En actuaciones administrativas, el principio de debido proceso implica:",
    options: [
      { letter: "A", text: "Reservar toda actuación hasta decisión final." },
      { letter: "B", text: "Suprimir términos para acelerar trámites." },
      { letter: "C", text: "Aplicar únicamente criterios de conveniencia institucional." },
      { letter: "D", text: "Garantizar contradicción, defensa, motivación y respeto de formas legales." },
    ],
    correctAnswer: "D",
    explanation:
      "La Ley 1437 de 2011 (CPACA), artículo 3 y reglas procedimentales, exige respeto al debido proceso en toda actuación administrativa.",
  },
  {
    id: 12,
    text: "El término general para resolver una petición, en el derecho de petición administrativo, es de:",
    options: [
      { letter: "A", text: "15 días hábiles." },
      { letter: "B", text: "30 días calendario." },
      { letter: "C", text: "5 días hábiles." },
      { letter: "D", text: "45 días hábiles." },
    ],
    correctAnswer: "A",
    explanation:
      "La Ley 1437 de 2011, artículo 14 (modificado por Ley 1755 de 2015), establece como regla general 15 días hábiles para resolver peticiones.",
  },
  {
    id: 13,
    text: "Para una petición de documentos en el esquema PQRSF, el término legal de respuesta es:",
    options: [
      { letter: "A", text: "30 días hábiles." },
      { letter: "B", text: "10 días hábiles." },
      { letter: "C", text: "20 días hábiles." },
      { letter: "D", text: "2 días hábiles." },
    ],
    correctAnswer: "B",
    explanation:
      "La Ley 1437 de 2011 (art. 14, mod. Ley 1755 de 2015) fija 10 días hábiles para peticiones de documentos e información.",
  },
  {
    id: 14,
    text: "¿Cuál de las siguientes opciones NO corresponde a una dimensión de MIPG?",
    options: [
      { letter: "A", text: "Talento humano." },
      { letter: "B", text: "Información y comunicación." },
      { letter: "C", text: "Gestión del conocimiento e innovación." },
      { letter: "D", text: "Privatización de servicios públicos." },
    ],
    correctAnswer: "D",
    explanation:
      "MIPG no incluye una dimensión de privatización. Las dimensiones oficiales están definidas por Función Pública y guías MIPG para entidades públicas.",
  },
  {
    id: 15,
    text: "En materia tributaria, la evasión se diferencia de la elusión porque la evasión:",
    options: [
      { letter: "A", text: "Es un mecanismo legal de planeación fiscal." },
      { letter: "B", text: "Solo existe para personas jurídicas." },
      { letter: "C", text: "No genera consecuencias administrativas." },
      { letter: "D", text: "Supone ocultamiento o fraude para incumplir el pago de tributos." },
    ],
    correctAnswer: "D",
    explanation:
      "La evasión implica incumplimiento ilegal (ocultar ingresos, declarar falsamente, etc.). La elusión se relaciona con aprovechamiento de vacíos sin quebrantar formalmente la ley.",
  },
  {
    id: 16,
    text: "En el enfoque aduanero, el contrabando se asocia principalmente con:",
    options: [
      { letter: "A", text: "Ingreso o salida de mercancías al margen de controles y obligaciones legales." },
      { letter: "B", text: "Pago oportuno de tributos aduaneros." },
      { letter: "C", text: "Compensación de saldos a favor en renta." },
      { letter: "D", text: "Registro voluntario de obligaciones cambiarias." },
    ],
    correctAnswer: "A",
    explanation:
      "El manual del cargo incluye evasión, elusión y contrabando como ejes temáticos. Contrabando implica operaciones por fuera del marco aduanero legal.",
  },
  {
    id: 17,
    text: "En gestión documental, las TRD (Tablas de Retención Documental) permiten:",
    options: [
      { letter: "A", text: "Definir solo formatos de publicación web." },
      { letter: "B", text: "Clasificar series y tiempos de conservación/disposición documental." },
      { letter: "C", text: "Sustituir la historia laboral de los servidores." },
      { letter: "D", text: "Eliminar expedientes sin criterios archivísticos." },
    ],
    correctAnswer: "B",
    explanation:
      "Las TRD son instrumento archivístico para ciclo de vida documental (archivo de gestión, central e histórico), coherente con función administrativa y trazabilidad institucional.",
  },
  {
    id: 18,
    text: "Según la Constitución Política (art. 363), el sistema tributario colombiano se fundamenta en:",
    options: [
      { letter: "A", text: "Jerarquía, concentración y reserva." },
      { letter: "B", text: "Especialidad, subsidiariedad y desconcentración." },
      { letter: "C", text: "Equidad, eficiencia y progresividad." },
      { letter: "D", text: "Unicidad, universalidad y anualidad." },
    ],
    correctAnswer: "C",
    explanation:
      "El artículo 363 de la Constitución establece de forma expresa equidad, eficiencia y progresividad como principios del sistema tributario.",
  },
  {
    id: 19,
    text: "La cuenta corriente del contribuyente, en términos operativos DIAN, debe reflejar:",
    options: [
      { letter: "A", text: "Solo valores históricos sin ajustes." },
      { letter: "B", text: "Únicamente obligaciones en firme de renta." },
      { letter: "C", text: "Información aproximada sin soporte documental." },
      { letter: "D", text: "El estado actualizado de obligaciones, pagos, saldos y actuaciones asociadas." },
    ],
    correctAnswer: "D",
    explanation:
      "El manual del Analista V incluye saneamiento y unificación de información para asegurar consistencia de la cuenta corriente del contribuyente.",
  },
  {
    id: 20,
    text: "Las ERAs (Entidades Autorizadas para Recaudar) cumplen la función de:",
    options: [
      { letter: "A", text: "Recibir pagos de obligaciones tributarias bajo autorización y reglas de la DIAN." },
      { letter: "B", text: "Ejercer funciones de juez de cobro coactivo." },
      { letter: "C", text: "Auditar internamente a la DIAN." },
      { letter: "D", text: "Definir política fiscal nacional." },
    ],
    correctAnswer: "A",
    explanation:
      "El empleo Analista V contempla interacción técnica con recaudo y ERAs, para asegurar calidad y trazabilidad del proceso de pago de obligaciones.",
  },
  {
    id: 21,
    text: "¿Cuál de los siguientes temas NO corresponde a una competencia funcional del Analista V?",
    options: [
      { letter: "A", text: "Devoluciones y compensaciones." },
      { letter: "B", text: "Contratación pública en etapas precontractuales." },
      { letter: "C", text: "Cobro coactivo y persuasivo." },
      { letter: "D", text: "Control extensivo de obligaciones." },
    ],
    correctAnswer: "B",
    explanation:
      "Contratación pública es eje funcional del Gestor I. Analista V está orientado a cartera, cobro, devoluciones, medidas cautelares y control extensivo según su manual.",
  },
  {
    id: 22,
    text: "Si una declaración se presenta extemporáneamente, la sanción aplicable se asocia a:",
    options: [
      { letter: "A", text: "Artículo 855 del Estatuto Tributario." },
      { letter: "B", text: "Artículo 837 del Estatuto Tributario." },
      { letter: "C", text: "Artículo 641 del Estatuto Tributario." },
      { letter: "D", text: "Artículo 363 de la Constitución." },
    ],
    correctAnswer: "C",
    explanation:
      "El artículo 641 del Estatuto Tributario regula la sanción por extemporaneidad en declaraciones tributarias.",
  },
  {
    id: 23,
    text: "Conforme al Estatuto Tributario, un título ejecutivo para iniciar cobro coactivo puede ser:",
    options: [
      { letter: "A", text: "Una comunicación informal sin firma." },
      { letter: "B", text: "Un concepto interno no ejecutoriado." },
      { letter: "C", text: "Una noticia de prensa sobre mora tributaria." },
      { letter: "D", text: "Una liquidación oficial o declaración que preste mérito ejecutivo." },
    ],
    correctAnswer: "D",
    explanation:
      "El artículo 828 del Estatuto Tributario define los títulos ejecutivos que habilitan la ejecución administrativa de cobro.",
  },
  {
    id: 24,
    text: "Frente al mandamiento de pago, una excepción expresamente prevista en la norma es:",
    options: [
      { letter: "A", text: "La prescripción de la acción de cobro." },
      { letter: "B", text: "La nulidad electoral del Director General." },
      { letter: "C", text: "La inconstitucionalidad de toda obligación tributaria." },
      { letter: "D", text: "La simple inconformidad sin sustento jurídico." },
    ],
    correctAnswer: "A",
    explanation:
      "El Estatuto Tributario (art. 831 y concordantes) contempla excepciones contra el mandamiento, incluyendo prescripción y pago, entre otras causales taxativas.",
  },
  {
    id: 25,
    text: "Cuando la DIAN aplica medidas de embargo en cobro coactivo, debe cumplir especialmente con:",
    options: [
      { letter: "A", text: "Decisiones verbales sin acto administrativo." },
      { letter: "B", text: "Trámite reservado sin notificación al ejecutado." },
      { letter: "C", text: "Legalidad, proporcionalidad, motivación y trazabilidad de la medida cautelar." },
      { letter: "D", text: "Suspensión automática de toda actuación de recaudo." },
    ],
    correctAnswer: "C",
    explanation:
      "La aplicación de cautelares en cobro debe respetar el Estatuto Tributario, el CPACA y principios constitucionales de debido proceso y legalidad (arts. 29 y 209 C.P.; Ley 1437 de 2011).",
  },
];
