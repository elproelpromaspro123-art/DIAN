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
    title: "Guia de estudio · Analista V (Basicas y funcionales)",
    intro:
      "Bloque eliminatorio de mayor peso para Analista V. Esta guia organiza contenidos oficiales por prioridad operativa y normativa para entrenar con criterio de examen real.",
    sections: [
      {
        title: "Ejes funcionales obligatorios",
        bullets: [
          "Cobro persuasivo y cobro coactivo (secuencia, actos y terminos).",
          "Medidas cautelares, procesos concursales y excepciones al mandamiento.",
          "Devoluciones y compensaciones con soporte documental.",
          "Control extensivo de obligaciones y cuenta corriente del contribuyente.",
        ],
      },
      {
        title: "Normativa prioritaria (referencias directas)",
        bullets: [
          "Estatuto Tributario: arts. 823-843 (cobro), 828 (titulo ejecutivo), 831 (excepciones), 837 (cautelares), 855 (devoluciones), 641 (extemporaneidad).",
          "Constitucion Politica: arts. 29 (debido proceso), 209 (funcion administrativa), 363 (principios del sistema tributario).",
          "Ley 1437 de 2011 + Ley 1755 de 2015 (derecho de peticion y actuacion administrativa).",
          "Ley 1712 de 2014 (transparencia y acceso a informacion publica).",
          "Decreto 2117 de 1992, Decreto 4048 de 2008 y Decreto 1742 de 2020 (marco organico DIAN).",
        ],
      },
      {
        title: "Secuencia de respuesta en preguntas situacionales",
        bullets: [
          "Identifica etapa procesal: persuasivo vs coactivo.",
          "Valida soporte normativo y competencia del cargo.",
          "Revisa debido proceso, notificacion, terminos y trazabilidad.",
          "Descarta opciones con atajos no compatibles con legalidad.",
        ],
      },
      {
        title: "Metodo de estudio recomendado (7 dias)",
        bullets: [
          "Dia 1-2: manual del cargo + mapa de competencias funcionales.",
          "Dia 3-4: Estatuto Tributario aplicado a casos (cobro/cautelares/devoluciones).",
          "Dia 5: CPACA, peticiones, transparencia y MIPG.",
          "Dia 6: simulacro dirigido por errores.",
          "Dia 7: repaso de articulos y checklist de terminos criticos.",
        ],
      },
      {
        title: "Errores frecuentes",
        bullets: [
          "Confundir funciones de Analista V con tareas de Gestor I (contratacion/logistica).",
          "Responder por intuicion y no por secuencia normativa.",
          "Olvidar que la fase es eliminatoria y requiere minimo 70/100.",
          "No diferenciar terminos de peticiones generales, documentos y consultas.",
        ],
      },
      {
        title: "Datos clave para memorizar",
        bullets: [
          "OPEC 236732 y 236756 · Codigo 205 · Grado 5 · Nivel tecnico.",
          "Peso fase: 65% (eliminatoria) · minimo 70/100.",
          "DIAN: UAE adscrita a MinHacienda con personeria juridica y autonomia.",
          "Cierre oficial de inscripciones DIAN 2676: 7-feb-2026.",
        ],
      },
      {
        title: "Estrategia de lectura critica para esta fase",
        bullets: [
          "Lee el enunciado completo dos veces antes de ver opciones. Identifica hechos, actores y norma aplicable.",
          "Subraya verbos clave: 'procede', 'debe', 'puede', 'corresponde'. Cada uno indica diferente grado de obligacion.",
          "Descarta opciones que asumen competencias de otro cargo o que omiten soporte documental.",
          "Cuando dos opciones parecen correctas, elige la que tiene mayor soporte normativo y trazabilidad.",
          "Si el caso menciona 'urgencia' o 'presion', sospecha que el distractor sera la opcion rapida sin garantias.",
        ],
      },
      {
        title: "Tecnica de descanso activo (tecnica Pomodoro adaptada)",
        bullets: [
          "Estudia bloques de 25 minutos con 5 minutos de descanso (levantate, estira, mira lejos).",
          "Cada 4 bloques toma un descanso de 15-20 minutos. Esto previene fatiga mental acumulada.",
          "Al volver de cada descanso, resume en voz alta el ultimo concepto estudiado. Si no puedes, repasa.",
          "Alterna entre lectura normativa (pasivo) y resolucion de casos (activo) para mantener atencion.",
          "No estudies mas de 3 horas seguidas. La retencion cae drasticamente despues de ese umbral.",
        ],
      },
    ],
  },

  analista_comportamentales: {
    title: "Guia de estudio · Analista V (Comportamentales)",
    intro:
      "Esta fase mide conducta observable en contexto laboral DIAN. El enfoque no es definicion teorica, sino eleccion de la accion institucionalmente correcta.",
    sections: [
      {
        title: "Competencias y niveles oficiales del cargo",
        bullets: [
          "Comportamiento etico (Nivel 4).",
          "Adaptabilidad (Nivel 4).",
          "Comunicacion efectiva (Nivel 3).",
          "Trabajo en equipo (Nivel 3).",
        ],
      },
      {
        title: "Que evalua cada competencia",
        bullets: [
          "Etico N4: referente institucional, imparcialidad y defensa de legalidad.",
          "Adaptabilidad N4: liderar cambio, no solo acatarlo.",
          "Comunicacion N3: elegir canal adecuado, verificar comprension y reducir distorsion.",
          "Trabajo en equipo N3: coordinar, monitorear acuerdos y sostener resultados compartidos.",
        ],
      },
      {
        title: "Referencias oficiales",
        bullets: [
          "Diccionario de Competencias Comportamentales DIAN.",
          "Resolucion 065 de 2024 (conductas observables por nivel).",
          "Manual del cargo Analista V (MERF DIAN).",
        ],
      },
      {
        title: "Tecnica para resolver casos",
        bullets: [
          "Primero identifica la competencia objetivo del enunciado.",
          "Luego valida el nivel (N3 vs N4) para medir alcance esperado.",
          "Elige la opcion con mayor coherencia institucional y trazabilidad.",
          "Descarta respuestas heroicas, informales o sin soporte normativo.",
        ],
      },
      {
        title: "Errores frecuentes",
        bullets: [
          "Elegir opcion " + '"rapida"' + " pero eticamente debil.",
          "Confundir Adaptabilidad N4 con simple flexibilidad personal.",
          "Suponer que trabajo en equipo es " + '"hacer todo solo"' + ".",
          "No distinguir comunicacion efectiva de envio de mensajes incompletos.",
        ],
      },
      {
        title: "Datos clave para memorizar",
        bullets: [
          "En Analista V, Adaptabilidad es N4 (no N3).",
          "N4 evalua capacidad de influir y conducir practicas del equipo.",
          "Respuestas validas siempre combinan legalidad + efectividad + servicio.",
          "La fase tiene peso clasificatorio del 15%.",
        ],
      },
      {
        title: "Estrategia de lectura critica para esta fase",
        bullets: [
          "Antes de leer las opciones, identifica cual competencia evalua el enunciado (etico, adaptabilidad, comunicacion, equipo).",
          "Busca el verbo rector de la conducta esperada: promueve, lidera, coordina, verifica. El verbo define el nivel.",
          "En N4, la respuesta correcta siempre implica influir en otros, no solo actuar individualmente.",
          "Descarta opciones que resuelven el problema pero sin involucrar al equipo o sin documentar la accion.",
          "Si el escenario menciona presion de un superior, la respuesta correcta nunca es obedecer sin cuestionar ni desobedecer abiertamente.",
        ],
      },
      {
        title: "Tecnica de descanso activo (tecnica Pomodoro adaptada)",
        bullets: [
          "Estudia bloques de 25 minutos con 5 minutos de descanso. Las competencias comportamentales cansan mas porque requieren juicio.",
          "Cada 4 bloques toma un descanso de 15-20 minutos. Camina, hidratate y desconecta de pantallas.",
          "Al volver de cada descanso, inventa un escenario y responde en voz alta. Si no puedes justificar tu eleccion, repasa.",
          "Alterna entre leer el diccionario de competencias (pasivo) y resolver escenarios situacionales (activo).",
          "No resuelvas mas de 15 escenarios seguidos. La fatiga de decision hace que elijas la opcion mas facil, no la correcta.",
        ],
      },
    ],
  },

  analista_integridad: {
    title: "Guia de estudio · Analista V (Integridad)",
    intro:
      "La prueba de integridad exige criterio de decision publica. Debes aplicar valores y principios a dilemas de cobro, devoluciones y atencion ciudadana.",
    sections: [
      {
        title: "Codigo de Integridad DIAN (base minima)",
        bullets: [
          "Valores: Honestidad, Respeto, Compromiso, Diligencia y Justicia.",
          "Cada valor incluye " + '"lo que hago"' + " y " + '"lo que no hago"' + " (conductas permitidas/prohibidas).",
          "Juramento de integridad: deber de actuar conforme a Constitucion y marco legal tributario/aduanero/cambiario.",
          "Aplica a todos los niveles y tipos de vinculacion.",
        ],
      },
      {
        title: "Codigo de Etica DIAN (2021)",
        bullets: [
          "Pilar del preambulo: libertad de decision.",
          "Principios: autocuidado, cuidado del otro, cuidado de la funcion publica, responsabilidad por la eleccion, prevalencia del ser, entre otros.",
          "Definiciones clave: principio etico, pauta etica y valor.",
          "Implementacion: plan anual por dependencia y seguimiento periodico.",
        ],
      },
      {
        title: "Valores aspiracionales DIAN",
        bullets: [
          "Valentia (oso de anteojos).",
          "Objetividad (lechuza).",
          "Templanza (jaguar).",
          "Providencia (colibri).",
        ],
      },
      {
        title: "Normativa y fuentes de referencia",
        bullets: [
          "Codigo de Integridad DIAN (version institucional vigente).",
          "Codigo de Etica DIAN (aprobado en 2020, version 2021).",
          "Constitucion Politica (arts. 2, 6, 13, 29, 209).",
          "Ley 1437 de 2011 (actuacion administrativa y debido proceso).",
        ],
      },
      {
        title: "Errores frecuentes",
        bullets: [
          "Escoger opcion " + '"util"' + " pero sin transparencia ni trazabilidad.",
          "No declarar conflicto de interes cuando existe relacion personal con el caso.",
          "Confundir valor etico con resultado operativo inmediato.",
          "Responder por preferencia personal y no por marco institucional.",
        ],
      },
      {
        title: "Datos clave para memorizar",
        bullets: [
          "Peso de la fase: 10% (clasificatoria).",
          "Honestidad prohíbe incentivos y tratos preferenciales.",
          "Justicia exige decisiones con evidencia e imparcialidad.",
          "En dilemas, prima interes general + legalidad + debido proceso.",
        ],
      },
      {
        title: "Estrategia de lectura critica para esta fase",
        bullets: [
          "Identifica primero que tipo de dilema es: conflicto de interes, presion por resultados, manejo de informacion o trato desigual.",
          "Busca cual valor del Codigo de Integridad esta en juego (Honestidad, Respeto, Compromiso, Diligencia, Justicia).",
          "Si el escenario menciona un familiar, amigo o conocido, activa el filtro de conflicto de interes: la declaracion formal siempre es obligatoria.",
          "La respuesta correcta en integridad nunca es la mas comoda ni la mas rapida, es la mas auditable y defendible.",
          "Descarta opciones que resuelven el dilema 'en privado' sin documentar ni reportar por canal institucional.",
        ],
      },
      {
        title: "Tecnica de descanso activo (tecnica Pomodoro adaptada)",
        bullets: [
          "Estudia bloques de 25 minutos con 5 minutos de descanso. Los dilemas eticos son emocionalmente demandantes.",
          "Cada 4 bloques toma un descanso de 15-20 minutos. Haz algo fisico: caminar, estirar, respirar profundo.",
          "Al volver de cada descanso, plantea un dilema etico y verbaliza tu decision con justificacion. Si no puedes, repasa.",
          "Alterna entre memorizar valores y conductas (pasivo) y resolver dilemas eticos (activo).",
          "Si sientes frustacion o confusion, detente. La claridad etica requiere mente descansada, no fuerza bruta.",
        ],
      },
    ],
  },

  gestor_basicas: {
    title: "Guia de estudio · Gestor I (Basicas y funcionales)",
    intro:
      "Fase eliminatoria principal del Gestor I. Evalua gestion administrativa y financiera con fuerte componente de contratacion, logistica, SIIF y trazabilidad documental.",
    sections: [
      {
        title: "Ejes funcionales obligatorios",
        bullets: [
          "Recursos administrativos, operacion logistica, compras y contratos.",
          "Custodia/disposicion de mercancias e infraestructura institucional.",
          "Gestion documental y SIIF Nacion II.",
          "Control de ingresos, almacenamiento y registro de bienes.",
        ],
      },
      {
        title: "Normativa prioritaria (referencias directas)",
        bullets: [
          "Ley 80 de 1993 (Estatuto General de Contratacion).",
          "Ley 1150 de 2007 (eficiencia y transparencia contractual).",
          "Ley 1437 de 2011 + Ley 1755 de 2015 (CPACA y peticiones).",
          "Constitucion Politica art. 209 (principios de funcion administrativa).",
          "Ley 1712 de 2014 (transparencia y acceso a informacion).",
        ],
      },
      {
        title: "Mapa operativo del cargo",
        bullets: [
          "Precontractual: estudios previos, analisis y trazabilidad.",
          "Contractual: seguimiento, soporte de ejecucion y control documental.",
          "Poscontractual: cierre, liquidacion y archivo.",
          "Soporte logistico: inventarios, flota, bienes, servicios e infraestructura.",
        ],
      },
      {
        title: "Metodo de estudio recomendado",
        bullets: [
          "Bloque 1: manual del cargo + competencias funcionales.",
          "Bloque 2: contratacion (modalidades, principios, SECOP).",
          "Bloque 3: SIIF + gestion documental + custodia de mercancias.",
          "Bloque 4: CPACA, PQRSF, MIPG y preguntas situacionales.",
        ],
      },
      {
        title: "Errores frecuentes",
        bullets: [
          "Confundir funciones de Gestor I con cobro/devoluciones del Analista V.",
          "Responder contratacion sin verificar soporte documental exigible.",
          "Olvidar que la fase es eliminatoria con minimo 70/100.",
          "Ignorar terminos de peticion y principios de actuacion administrativa.",
        ],
      },
      {
        title: "Datos clave para memorizar",
        bullets: [
          "OPEC 236741 y 236767 · Codigo 301 · Grado 1 · Nivel profesional.",
          "No requiere experiencia para esta convocatoria.",
          "Peso fase funcional: 70% (eliminatoria).",
          "Cierre oficial DIAN 2676: 7-feb-2026.",
        ],
      },
      {
        title: "Estrategia de lectura critica para esta fase",
        bullets: [
          "Lee el enunciado dos veces. Identifica si el escenario es precontractual, contractual o poscontractual antes de ver opciones.",
          "Busca la norma aplicable: si habla de modalidades de seleccion, es Ley 80/Ley 1150. Si habla de presupuesto, es SIIF. Si habla de peticiones, es CPACA.",
          "Verifica que la opcion elegida incluya soporte documental. En contratacion publica, nada existe sin documento.",
          "Descarta opciones que omiten publicacion en SECOP o que sugieren avanzar sin CDP/RP.",
          "Si el caso menciona urgencia, verifica si aplica urgencia manifiesta (art. 42 Ley 80). Si no lo menciona expresamente, la urgencia no justifica atajos.",
        ],
      },
      {
        title: "Tecnica de descanso activo (tecnica Pomodoro adaptada)",
        bullets: [
          "Estudia bloques de 25 minutos con 5 minutos de descanso. La normativa de contratacion es densa y requiere pausas frecuentes.",
          "Cada 4 bloques toma un descanso de 15-20 minutos. Sal del espacio de estudio si puedes.",
          "Al volver de cada descanso, dibuja la secuencia del ultimo proceso estudiado (ej: CDP > RP > contrato > ejecucion > pago). Si no puedes, repasa.",
          "Alterna entre lectura normativa (Ley 80, CPACA) y resolucion de casos practicos para mantener la atencion.",
          "No estudies mas de 3 horas seguidas. La contratacion publica tiene muchos detalles y la fatiga produce errores por confusion de modalidades.",
        ],
      },
    ],
  },

  gestor_comportamentales: {
    title: "Guia de estudio · Gestor I (Comportamentales)",
    intro:
      "La evaluacion comportamental del Gestor I se enfoca en toma de decisiones operativas con impacto institucional, no en definiciones memoristicas.",
    sections: [
      {
        title: "Competencias y niveles oficiales",
        bullets: [
          "Comportamiento etico (Nivel 4).",
          "Innovacion (Nivel 3).",
          "Adaptabilidad (Nivel 3).",
          "Solucion de problemas (Nivel 3).",
        ],
      },
      {
        title: "Lectura practica por competencia",
        bullets: [
          "Etico N4: imparcialidad y referente institucional en decisiones de alto impacto.",
          "Innovacion N3: mejora viable con sustento y evaluacion de impacto.",
          "Adaptabilidad N3: ajuste proactivo ante cambios de entorno/proceso.",
          "Solucion de problemas N3: analisis causal y control de ejecucion.",
        ],
      },
      {
        title: "Referencias oficiales",
        bullets: [
          "Diccionario de Competencias Comportamentales DIAN.",
          "Resolucion 065 de 2024 (conductas observables por nivel).",
          "Manual Gestor I (MERF DIAN).",
        ],
      },
      {
        title: "Tecnica para casos situacionales",
        bullets: [
          "Detecta la competencia dominante del escenario.",
          "Evalua si la opcion propuesta es legal y trazable.",
          "Revisa si la accion tiene impacto sostenible en equipo/proceso.",
          "Descarta atajos operativos incompatibles con transparencia.",
        ],
      },
      {
        title: "Errores frecuentes",
        bullets: [
          "Confundir innovacion con improvisacion sin soporte.",
          "Elegir respuestas rapidas que sacrifican control institucional.",
          "Interpretar adaptabilidad como obediencia pasiva.",
          "No distinguir problema critico de tarea rutinaria.",
        ],
      },
      {
        title: "Datos clave para memorizar",
        bullets: [
          "Peso fase comportamental Gestor I: 20%.",
          "Etico N4 es la unica competencia de nivel 4 del cargo.",
          "Innovacion/Adaptabilidad/Solucion de problemas son N3.",
          "La mejor opcion combina efectividad + legalidad + transparencia.",
        ],
      },
      {
        title: "Estrategia de lectura critica para esta fase",
        bullets: [
          "Identifica la competencia que evalua el escenario antes de ver opciones. Las 4 competencias del Gestor I son: Etico N4, Innovacion N3, Adaptabilidad N3 y Solucion de problemas N3.",
          "Busca el verbo rector: si dice 'propone mejora', piensa Innovacion. Si dice 'ajusta su conducta', piensa Adaptabilidad. Si dice 'diagnostica la causa', piensa Solucion de problemas.",
          "En Etico N4, la respuesta siempre incluye influir en otros (promover, orientar, liderar). Si solo actua individualmente, es N3 o menos.",
          "Descarta opciones que resuelven el problema pero omiten documentacion, seguimiento o coordinacion con el equipo.",
          "Cuando dos opciones parecen correctas, elige la que mejor combina conducta observable + impacto institucional + trazabilidad.",
        ],
      },
      {
        title: "Tecnica de descanso activo (tecnica Pomodoro adaptada)",
        bullets: [
          "Estudia bloques de 25 minutos con 5 minutos de descanso. Los escenarios situacionales requieren concentracion sostenida.",
          "Cada 4 bloques toma un descanso de 15-20 minutos. Muevete fisicamente para reactivar la atencion.",
          "Al volver de cada descanso, crea un escenario propio y verbaliza que competencia evalua y cual seria tu respuesta. Si dudas, repasa.",
          "Alterna entre estudiar el diccionario de competencias (teoria) y resolver escenarios practicos (aplicacion).",
          "No resuelvas mas de 12-15 escenarios seguidos. La fatiga de decision reduce la calidad del juicio comportamental.",
        ],
      },
    ],
  },

  gestor_integridad: {
    title: "Guia de estudio · Gestor I (Integridad)",
    intro:
      "Esta prueba clasifica con base en criterio etico aplicado a situaciones reales de contratacion, logistica, custodia de mercancias y gestion administrativa.",
    sections: [
      {
        title: "Codigo de Integridad DIAN",
        bullets: [
          "Valores: Honestidad, Respeto, Compromiso, Diligencia y Justicia.",
          "Conductas permitidas/prohibidas (" + '"lo que hago"' + "/" + '"lo que no hago"' + ").",
          "Aplicacion transversal a todos los niveles y vinculos.",
          "Juramento de integridad como marco de ejemplaridad publica.",
        ],
      },
      {
        title: "Codigo de Etica DIAN (2021)",
        bullets: [
          "Preambulo: libertad de decision.",
          "Principios: autocuidado, cuidado del otro, cuidado de la funcion publica, responsabilidad por la eleccion, prevalencia del ser, entre otros.",
          "Definiciones: principio etico, pauta etica, valor.",
          "Implementacion institucional con seguimiento periodico.",
        ],
      },
      {
        title: "Referencias normativas recomendadas",
        bullets: [
          "Codigo de Integridad DIAN (documento oficial institucional).",
          "Codigo de Etica DIAN (version 2021).",
          "Constitucion Politica: arts. 2, 6, 13, 29, 209.",
          "Ley 1437 de 2011 (debido proceso administrativo).",
          "Ley 80 de 1993 y Ley 1150 de 2007 (transparencia contractual).",
        ],
      },
      {
        title: "Dilemas tipicos en Gestor I",
        bullets: [
          "Ofrecimientos indebidos en compras, pagos o priorizacion de tramites.",
          "Manipulacion de trazabilidad de inventarios o certificaciones.",
          "Presion por resultados sin soporte documental suficiente.",
          "Conflicto de interes en decisiones logísticas o contractuales.",
        ],
      },
      {
        title: "Errores frecuentes",
        bullets: [
          "Normalizar practicas informales por urgencia operativa.",
          "No reportar riesgos de integridad " + '"para evitar problemas"' + ".",
          "Creer que el cumplimiento tecnico compensa falta etica.",
          "Responder por conveniencia personal y no por interes general.",
        ],
      },
      {
        title: "Datos clave para memorizar",
        bullets: [
          "Peso de la fase de integridad en Gestor I: 10%.",
          "Honestidad: cero tolerancia a incentivos o beneficios indebidos.",
          "Responsabilidad por la eleccion: toda decision tiene consecuencia institucional.",
          "En caso de duda, prioriza legalidad, transparencia y trazabilidad.",
        ],
      },
      {
        title: "Estrategia de lectura critica para esta fase",
        bullets: [
          "Identifica el tipo de dilema etico: conflicto de interes en contratacion, presion por resultados en logistica, manejo de informacion de proveedores o trato desigual.",
          "Busca cual valor del Codigo de Integridad esta en juego. En contexto de compras y custodia, Honestidad y Justicia son los mas frecuentes.",
          "Si el escenario involucra un proveedor o contratista conocido, activa el filtro de conflicto de interes. La declaracion formal es obligatoria.",
          "La respuesta correcta siempre incluye: documentar, reportar y actuar por canal institucional. Resolver 'en privado' nunca es correcto.",
          "Descarta opciones que normalizan practicas informales con frases como 'siempre se ha hecho asi' o 'es lo mas practico'.",
        ],
      },
      {
        title: "Tecnica de descanso activo (tecnica Pomodoro adaptada)",
        bullets: [
          "Estudia bloques de 25 minutos con 5 minutos de descanso. Los dilemas eticos de logistica y contratacion son emocionalmente agotadores.",
          "Cada 4 bloques toma un descanso de 15-20 minutos. Desconecta completamente: no pienses en el estudio durante el descanso.",
          "Al volver de cada descanso, plantea un dilema etico de custodia o compras y responde en voz alta con justificacion. Si no puedes, repasa.",
          "Alterna entre memorizar valores y conductas del Codigo de Integridad (pasivo) y resolver dilemas situacionales (activo).",
          "Si un dilema te genera confusion persistente, dejalo y vuelve despues. La claridad etica mejora con descanso, no con repeticion forzada.",
        ],
      },
    ],
  },
};
