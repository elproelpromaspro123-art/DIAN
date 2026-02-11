export type StudyGuideSection = {
  title: string;
  body?: string;
  bullets?: string[];
};

export type StudyGuide = {
  title: string;
  intro: string;
  sections: StudyGuideSection[];
};

export const studyGuides: Record<string, StudyGuide> = {
  analista_basicas: {
    title: "Guía de estudio · Analista V (Básicas y funcionales)",
    intro:
      "Este resumen recoge los temas y competencias que el manual de funciones del Analista V prioriza. Úsalo para ordenar tu repaso antes del simulacro eliminatorio.",
    sections: [
      {
        title: "Competencias funcionales del cargo",
        bullets: [
          "Control extensivo de obligaciones",
          "Devoluciones y compensaciones",
          "Cobro coactivo y cobro persuasivo",
          "Medidas cautelares y procesos concursales",
        ],
      },
      {
        title: "Temas base exigidos en el manual",
        bullets: [
          "Constitución, función pública y procedimiento administrativo (Ley 1437)",
          "Sistema tributario, aduanero y cambiario",
          "Recaudo, devoluciones, transparencia y MIPG",
          "Gestión documental, herramientas informáticas y PQRSF",
        ],
      },
      {
        title: "Ruta de estudio sugerida",
        bullets: [
          "Lee el manual y subraya funciones, procesos y competencias clave.",
          "Asocia cada competencia funcional con un procedimiento real del cargo.",
          "Refuerza conceptos normativos y su aplicación práctica en casos cortos.",
        ],
      },
    ],
  },
  analista_comportamentales: {
    title: "Guía de estudio · Analista V (Comportamentales)",
    intro:
      "La prueba comportamental evalúa cómo actúas frente a situaciones del servicio público. Usa los diccionarios oficiales para identificar conductas esperadas.",
    sections: [
      {
        title: "Competencias del cargo",
        bullets: [
          "Comportamiento ético (nivel 4)",
          "Adaptabilidad (nivel 3)",
          "Comunicación efectiva (nivel 3)",
          "Trabajo en equipo (nivel 3)",
        ],
      },
      {
        title: "Claves del diccionario",
        bullets: [
          "Adaptabilidad: ajustar la conducta ante contextos y perspectivas distintas.",
          "Comunicación efectiva: escuchar y transmitir con claridad verificando comprensión.",
          "Trabajo en equipo: coordinar esfuerzos y cumplir acuerdos del grupo.",
        ],
      },
      {
        title: "Cómo practicar",
        bullets: [
          "Identifica la conducta observable que el caso está buscando.",
          "Elige respuestas coherentes con el Código de Integridad.",
          "Evita opciones que favorezcan intereses particulares.",
        ],
      },
    ],
  },
  analista_integridad: {
    title: "Guía de estudio · Analista V (Integridad)",
    intro:
      "La prueba de integridad mide tu ética pública y coherencia con los valores DIAN. Esta guía resume los puntos esenciales del Código de Integridad.",
    sections: [
      {
        title: "Valores centrales",
        bullets: [
          "Honestidad", "Respeto", "Compromiso", "Diligencia", "Justicia",
        ],
      },
      {
        title: "Juramento de integridad",
        body:
          "El juramento reafirma el deber de actuar conforme a la Constitución, las normas tributarias y el interés general. Es una referencia directa para responder dilemas éticos.",
      },
      {
        title: "En el simulacro",
        bullets: [
          "Piensa en transparencia, legalidad y servicio al ciudadano.",
          "Si hay conflicto de intereses, la respuesta correcta protege lo público.",
          "Prioriza siempre la veracidad y el cumplimiento de deberes.",
        ],
      },
    ],
  },
  gestor_basicas: {
    title: "Guía de estudio · Gestor I (Básicas y funcionales)",
    intro:
      "Este bloque se basa en el manual del Gestor I. Incluye logística, recursos administrativos y contratación pública, además de los temas base institucionales.",
    sections: [
      {
        title: "Competencias funcionales del cargo",
        bullets: [
          "Gestión documental y SIIF Nación II",
          "Administración de custodia y disposición de mercancías",
          "Administración de infraestructura y servicios",
          "Contratación pública y control de ingresos",
        ],
      },
      {
        title: "Temas base exigidos",
        bullets: [
          "Constitución, función pública y procedimiento administrativo (Ley 1437)",
          "Recursos administrativos y servicio al ciudadano",
          "Código de buen gobierno, integridad y transparencia",
          "Gestión documental, PQRSF y herramientas institucionales",
        ],
      },
      {
        title: "Ruta de estudio sugerida",
        bullets: [
          "Relaciona cada competencia con procesos logísticos o de compras.",
          "Identifica la normativa de soporte para contratación pública.",
          "Practica casos que impliquen custodia y disposición de bienes.",
        ],
      },
    ],
  },
  gestor_comportamentales: {
    title: "Guía de estudio · Gestor I (Comportamentales)",
    intro:
      "En el Gestor I se evalúan competencias específicas como innovación y solución de problemas. El diccionario DIAN es tu guía principal.",
    sections: [
      {
        title: "Competencias del cargo",
        bullets: [
          "Comportamiento ético (nivel 4)",
          "Innovación (nivel 3)",
          "Adaptabilidad (nivel 3)",
          "Solución de problemas (nivel 3)",
        ],
      },
      {
        title: "Definiciones clave",
        bullets: [
          "Innovación: idear e implementar soluciones nuevas que agreguen valor.",
          "Solución de problemas: analizar situaciones, generar opciones y ejecutar la más adecuada.",
          "Adaptabilidad: ajustar la conducta ante cambios en contexto y tareas.",
        ],
      },
      {
        title: "Cómo practicar",
        bullets: [
          "Piensa en propuestas realistas, alineadas a objetivos institucionales.",
          "Valora el impacto en usuarios, equipos y procesos internos.",
          "Elige respuestas que demuestren ética y orientación al servicio.",
        ],
      },
    ],
  },
  gestor_integridad: {
    title: "Guía de estudio · Gestor I (Integridad)",
    intro:
      "El Código de Ética DIAN complementa el Código de Integridad y refuerza decisiones responsables en el servicio público.",
    sections: [
      {
        title: "Principios del Código de Ética",
        bullets: [
          "Autocuidado",
          "Cuidado del otro",
          "Cuidado de la función pública",
          "Responsabilidad por la elección",
          "Prevalencia del ser sobre el tener",
        ],
      },
      {
        title: "Relación con el Código de Integridad",
        body:
          "El Código de Ética incorpora el Código de Integridad del Servicio Público. Ambos apuntan a fortalecer la conciencia ética y el interés general.",
      },
      {
        title: "En el simulacro",
        bullets: [
          "Prioriza el bienestar colectivo sobre beneficios personales.",
          "Cuida la imagen institucional y la legalidad de cada decisión.",
          "Recuerda que cada elección tiene responsabilidad personal.",
        ],
      },
    ],
  },
};
