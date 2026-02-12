"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpenCheck,
  ExternalLink,
  FileCheck2,
  Flag,
  Info,
  ShieldCheck,
  Target,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { CargoStudyContent } from "@/data/cargo-study-content";
import { formatTodayBogotaLabel } from "@/data/official-dian2676";

interface Props {
  content: CargoStudyContent;
}

type AxisLesson = {
  title: string;
  whatIs: string;
  examFocus: string;
};

type CriticalReadingTask = {
  id: string;
  title: string;
  context: string;
  whatToRead: string;
  criticalQuestion: string;
  expectedAnalysis: string;
  officialSource: string;
};

type SituationalCase = {
  id: string;
  title: string;
  scenario: string;
  dilemma: string;
  analysisLens: string[];
  frequentTrap: string;
  referenceResolution: string;
  officialSource: string;
};

type PhaseCriticalPack = {
  phaseMindset: string;
  readingTasks: CriticalReadingTask[];
  situationalCases: SituationalCase[];
};

const PHASE_CRITICAL_PACKS: Record<string, PhaseCriticalPack> = {
  "analista-v:fase-1": {
    phaseMindset:
      "En fase funcional no basta memorizar articulos: debes reconstruir secuencia, competencia del cargo y legalidad del acto.",
    readingTasks: [
      {
        id: "an-f1-read-1",
        title: "Lectura dirigida de cobro coactivo",
        context:
          "Toma un caso corto de cartera vencida y relee la ruta desde titulo ejecutivo hasta mandamiento de pago.",
        whatToRead:
          "Identifica sujetos, acto que inicia, terminos, excepciones posibles y soporte normativo.",
        criticalQuestion:
          "Si falta un soporte del titulo ejecutivo, ¿el proceso puede avanzar o debe corregirse primero?",
        expectedAnalysis:
          "La respuesta valida prioriza legalidad del titulo y debido proceso antes de cualquier medida de recaudo.",
        officialSource: "Manual Analista V + ET arts. 823 a 843 + CPACA",
      },
      {
        id: "an-f1-read-2",
        title: "Lectura comparada de devolucion y compensacion",
        context:
          "Compara dos expedientes: uno con soportes completos y otro con inconsistencia documental.",
        whatToRead:
          "Subraya requisitos, evidencia, riesgos de error y motivacion exigida para decidir.",
        criticalQuestion:
          "¿Que pesa mas: velocidad de respuesta o calidad de la validacion documental trazable?",
        expectedAnalysis:
          "Debe prevalecer decision motivada con evidencia verificable; rapidez sin soporte es error tecnico.",
        officialSource: "Manual Analista V + procedimiento DIAN de devoluciones + Ley 1437",
      },
    ],
    situationalCases: [
      {
        id: "an-f1-case-1",
        title: "Devolucion con presion de cierre",
        scenario:
          "Un superior pide cerrar hoy una devolucion, pero detectas soporte tributario incompleto en el expediente.",
        dilemma:
          "¿Cumples instruccion de cierre rapido o documentas hallazgo y exiges subsanacion?",
        analysisLens: [
          "Competencia funcional real del Analista V",
          "Debido proceso y motivacion del acto",
          "Riesgo institucional por decision sin soporte",
        ],
        frequentTrap:
          "Escoger opcion 'eficiente' que cierra rapido pero rompe trazabilidad y legalidad.",
        referenceResolution:
          "Registrar inconsistencia, requerir ajuste y sustentar decision. El cierre solo procede con soporte completo.",
        officialSource: "Manual Analista V + Ley 1437 + ET",
      },
      {
        id: "an-f1-case-2",
        title: "Cautelar bajo urgencia de recaudo",
        scenario:
          "Se solicita embargo inmediato por alta deuda, pero hay duda sobre notificacion valida al obligado.",
        dilemma:
          "¿Aplicar cautelar de inmediato o verificar formalidades previas del procedimiento?",
        analysisLens: [
          "Secuencia legal de cobro coactivo",
          "Validez de notificacion y derecho de defensa",
          "Proporcionalidad de medida cautelar",
        ],
        frequentTrap:
          "Asumir que alto monto autoriza saltar pasos procedimentales.",
        referenceResolution:
          "Primero verificar forma y terminos del proceso; la cautelar se aplica cuando la ruta legal esta saneada.",
        officialSource: "ET art. 837 + CPACA + Constitucion art. 29",
      },
    ],
  },
  "analista-v:fase-2": {
    phaseMindset:
      "La fase comportamental premia conducta observable consistente, no respuestas heroicas ni intuicion personal.",
    readingTasks: [
      {
        id: "an-f2-read-1",
        title: "Lectura de verbo conductual",
        context:
          "En cada pregunta situacional, detecta el verbo rector (lidera, ajusta, coordina, comunica, previene).",
        whatToRead:
          "Asocia el verbo con el nivel esperado (N3 o N4) y valida alcance de la accion.",
        criticalQuestion:
          "¿La opcion elegida muestra conducta individual minima o influencia institucional esperada por nivel?",
        expectedAnalysis:
          "La mejor respuesta refleja conducta observable completa del nivel, con legalidad y trazabilidad.",
        officialSource: "Diccionario comportamental DIAN + Resolucion 065 de 2024",
      },
      {
        id: "an-f2-read-2",
        title: "Lectura de conflicto interareas",
        context:
          "Evalua escenarios donde dos areas tienen prioridades distintas y tiempos cortos.",
        whatToRead:
          "Busca opciones con coordinacion, asignacion de roles y seguimiento de compromisos.",
        criticalQuestion:
          "¿La alternativa resuelve el problema de fondo o solo evita el conflicto inmediato?",
        expectedAnalysis:
          "Puntua mejor la opcion que ordena trabajo colaborativo y preserva objetivos institucionales.",
        officialSource: "Diccionario comportamental DIAN",
      },
    ],
    situationalCases: [
      {
        id: "an-f2-case-1",
        title: "Cambio de procedimiento con resistencia",
        scenario:
          "Se actualiza un procedimiento de cobro y parte del equipo insiste en mantener el flujo anterior.",
        dilemma:
          "¿Permitir doble practica temporal o liderar adopcion completa con acompanamiento?",
        analysisLens: [
          "Adaptabilidad N4",
          "Comunicacion efectiva N3",
          "Sostenibilidad de la practica institucional",
        ],
        frequentTrap:
          "Elegir tolerancia indefinida al metodo viejo para evitar incomodidad.",
        referenceResolution:
          "Liderar transicion con soporte tecnico, comunicacion clara y seguimiento al cumplimiento.",
        officialSource: "Resolucion 065 de 2024 + manual del cargo",
      },
      {
        id: "an-f2-case-2",
        title: "Solicitud de atajo operacional",
        scenario:
          "Un actor interno propone omitir registro formal para acelerar respuesta a ciudadano.",
        dilemma:
          "¿Aceptar atajo por oportunidad o sostener canal oficial con trazabilidad?",
        analysisLens: [
          "Comportamiento etico N4",
          "Riesgo reputacional y juridico",
          "Calidad de servicio sostenible",
        ],
        frequentTrap:
          "Confundir buena intencion con conducta institucional valida.",
        referenceResolution:
          "Mantener ruta formal, explicar razon institucional y asegurar respuesta oportuna dentro del marco legal.",
        officialSource: "Diccionario comportamental + Codigo de Integridad",
      },
    ],
  },
  "analista-v:fase-3": {
    phaseMindset:
      "Integridad se responde con criterio auditable: interes general, imparcialidad y evidencia de decision.",
    readingTasks: [
      {
        id: "an-f3-read-1",
        title: "Lectura de dilema etico con conflicto de interes",
        context:
          "Revisa un escenario donde un familiar o conocido aparece en un tramite bajo tu gestion.",
        whatToRead:
          "Identifica riesgo, deber de declaracion y canal institucional para gestionar impedimento.",
        criticalQuestion:
          "¿La opcion protege transparencia real o solo evita exposicion personal?",
        expectedAnalysis:
          "La respuesta correcta declara conflicto y activa procedimiento formal, sin gestion informal del caso.",
        officialSource: "Codigo de Integridad DIAN + Codigo de Etica DIAN",
      },
      {
        id: "an-f3-read-2",
        title: "Lectura de presion por resultados",
        context:
          "Analiza preguntas donde te exigen resultado rapido sacrificando controles de integridad.",
        whatToRead:
          "Distingue eficiencia legitima de atajo incompatible con legalidad y justicia.",
        criticalQuestion:
          "¿La alternativa elegida seria defendible en auditoria o control disciplinario?",
        expectedAnalysis:
          "Debe elegirse opcion verificable, documentada y coherente con valores institucionales.",
        officialSource: "Codigo de Integridad + Codigo de Etica",
      },
    ],
    situationalCases: [
      {
        id: "an-f3-case-1",
        title: "Beneficio ofrecido en tramite",
        scenario:
          "Un usuario ofrece un incentivo para priorizar su proceso de cobro o devolucion.",
        dilemma:
          "¿Rechazar y reportar formalmente o ignorar para evitar conflicto?",
        analysisLens: [
          "Valor Honestidad",
          "Responsabilidad por la eleccion",
          "Proteccion del interes general",
        ],
        frequentTrap:
          "Pensar que no reportar evita danos cuando en realidad los incrementa.",
        referenceResolution:
          "Rechazar, documentar y reportar por canal institucional, preservando cadena de evidencia.",
        officialSource: "Codigo de Integridad DIAN",
      },
      {
        id: "an-f3-case-2",
        title: "Uso parcial de informacion",
        scenario:
          "Un colega sugiere ocultar parte de la evidencia para sostener una decision ya tomada.",
        dilemma:
          "¿Respaldas al equipo por cohesion o exiges integridad documental completa?",
        analysisLens: [
          "Justicia e imparcialidad",
          "Debido proceso administrativo",
          "Riesgo de nulidad y reproche disciplinario",
        ],
        frequentTrap:
          "Priorizar lealtad de grupo sobre deber funcional y transparencia.",
        referenceResolution:
          "Sostener expediente integro y decision motivada con toda la evidencia relevante.",
        officialSource: "Codigo de Etica + Ley 1437",
      },
    ],
  },
  "gestor-i:fase-1": {
    phaseMindset:
      "El examen funcional de Gestor I premia criterio operativo con soporte normativo y documental verificable.",
    readingTasks: [
      {
        id: "ge-f1-read-1",
        title: "Lectura de ciclo contractual completo",
        context:
          "Lee un caso desde estudios previos hasta cierre poscontractual con hallazgos de control.",
        whatToRead:
          "Ubica riesgos en cada etapa, responsables y evidencia minima exigible en SECOP y archivo.",
        criticalQuestion:
          "¿La alternativa elegida mantiene trazabilidad completa del ciclo o solo resuelve el punto inmediato?",
        expectedAnalysis:
          "La respuesta correcta integra planeacion, ejecucion, control y archivo de soporte.",
        officialSource: "Ley 80 de 1993 + Ley 1150 de 2007 + manual Gestor I",
      },
      {
        id: "ge-f1-read-2",
        title: "Lectura de operacion SIIF y evidencia",
        context:
          "Analiza un registro financiero con presion de cierre mensual y soportes incompletos.",
        whatToRead:
          "Diferencia dato operativo de soporte obligatorio para validez contable/presupuestal.",
        criticalQuestion:
          "¿Puede registrarse movimiento sin respaldo documental completo?",
        expectedAnalysis:
          "No. Debe existir soporte valido y trazable para evitar hallazgo fiscal o disciplinario.",
        officialSource: "Lineamientos SIIF + gestion documental publica",
      },
    ],
    situationalCases: [
      {
        id: "ge-f1-case-1",
        title: "Compra urgente sin trazabilidad",
        scenario:
          "Solicitan adquirir insumo critico de inmediato sin completar estudios previos.",
        dilemma:
          "¿Autorizar por urgencia operativa o exigir soporte minimo conforme a modalidad aplicable?",
        analysisLens: [
          "Principio de transparencia",
          "Seleccion objetiva",
          "Trazabilidad documental del proceso",
        ],
        frequentTrap:
          "Asumir que urgencia elimina requisitos de soporte.",
        referenceResolution:
          "Aplicar modalidad legal procedente, documentar necesidad y conservar evidencia integral.",
        officialSource: "Ley 80/1993 + Ley 1150/2007 + SECOP II",
      },
      {
        id: "ge-f1-case-2",
        title: "Custodia de mercancia con inconsistencia",
        scenario:
          "En inventario aparece diferencia entre registro fisico y reporte del sistema.",
        dilemma:
          "¿Ajustar rapido para cuadrar informe o abrir control de trazabilidad y novedad formal?",
        analysisLens: [
          "Cadena de custodia",
          "Control interno y auditoria",
          "Responsabilidad funcional del cargo",
        ],
        frequentTrap:
          "Corregir cifras sin evidencia de causa y sin acta.",
        referenceResolution:
          "Levantar novedad formal, verificar soporte y ajustar solo con evidencia validada.",
        officialSource: "Manual Gestor I + normativa archivistica y control interno",
      },
    ],
  },
  "gestor-i:fase-2": {
    phaseMindset:
      "En comportamentales debes mostrar juicio profesional: resolver presion sin sacrificar control institucional.",
    readingTasks: [
      {
        id: "ge-f2-read-1",
        title: "Lectura de decision bajo restriccion de tiempo",
        context:
          "Revisa preguntas donde hay tiempos cortos y alto impacto en operacion administrativa.",
        whatToRead:
          "Identifica conducta observable, nivel esperado y efecto real de la decision.",
        criticalQuestion:
          "¿La opcion propuesta soluciona causa raiz o solo oculta el problema?",
        expectedAnalysis:
          "Debe elegirse opcion con diagnostico, plan y control de ejecucion.",
        officialSource: "Diccionario comportamental DIAN + Resolucion 065 de 2024",
      },
      {
        id: "ge-f2-read-2",
        title: "Lectura de innovacion con evidencia",
        context:
          "Compara dos propuestas: una creativa sin soporte y otra viable con indicadores.",
        whatToRead:
          "Evalua factibilidad, riesgos y mecanismo de implementacion medible.",
        criticalQuestion:
          "¿Innovacion sin soporte tecnico sigue siendo competencia valida?",
        expectedAnalysis:
          "No. En N3 se exige mejora viable, sustentada y evaluable.",
        officialSource: "Diccionario comportamental DIAN",
      },
    ],
    situationalCases: [
      {
        id: "ge-f2-case-1",
        title: "Incidente logistico interareas",
        scenario:
          "Un error de alistamiento afecta a compras, almacen y financiero al mismo tiempo.",
        dilemma:
          "¿Resolver solo tu parte para salir del paso o coordinar plan comun con responsables?",
        analysisLens: [
          "Trabajo colaborativo operativo",
          "Solucion de problemas N3",
          "Trazabilidad de acciones correctivas",
        ],
        frequentTrap:
          "Cerrar tarea local sin coordinar impacto sistémico.",
        referenceResolution:
          "Coordinar plan interareas con roles, tiempos y seguimiento documentado.",
        officialSource: "Diccionario comportamental + manual Gestor I",
      },
      {
        id: "ge-f2-case-2",
        title: "Cambio de herramienta institucional",
        scenario:
          "Se implementa nuevo flujo digital y parte del equipo quiere mantener hojas paralelas sin control.",
        dilemma:
          "¿Permitir doble via indefinida o liderar adopcion estandar con acompaniamiento?",
        analysisLens: [
          "Adaptabilidad N3",
          "Innovacion N3",
          "Riesgo de control por procesos paralelos",
        ],
        frequentTrap:
          "Aceptar duplicidad permanente por comodidad operativa.",
        referenceResolution:
          "Asegurar adopcion del flujo oficial, capacitar equipo y medir cumplimiento.",
        officialSource: "Resolucion 065 de 2024 + lineamientos internos DIAN",
      },
    ],
  },
  "gestor-i:fase-3": {
    phaseMindset:
      "Integridad en Gestor I exige decidir con transparencia operativa: cada decision debe ser defendible y trazable.",
    readingTasks: [
      {
        id: "ge-f3-read-1",
        title: "Lectura de integridad en contratacion",
        context:
          "Evalua un caso donde un proveedor ofrece ventaja para agilizar pago o seleccion.",
        whatToRead:
          "Identifica riesgo de conflicto, deber de rechazo y canal formal de reporte.",
        criticalQuestion:
          "¿El silencio protege al equipo o incrementa riesgo institucional?",
        expectedAnalysis:
          "El deber funcional es rechazar, documentar y reportar. Omitir reporte agrava la falta.",
        officialSource: "Codigo de Integridad DIAN + Codigo de Etica",
      },
      {
        id: "ge-f3-read-2",
        title: "Lectura de trato igualitario en servicio",
        context:
          "Analiza una situacion con presion para priorizar a un usuario sin criterio objetivo.",
        whatToRead:
          "Contrasta igualdad de trato, justicia y evidencia de criterio de priorizacion.",
        criticalQuestion:
          "¿Hay justificacion institucional verificable para la priorizacion?",
        expectedAnalysis:
          "Solo procede priorizacion con criterio formal, documentado y aplicable a casos equivalentes.",
        officialSource: "Codigo de Integridad + principios de funcion administrativa",
      },
    ],
    situationalCases: [
      {
        id: "ge-f3-case-1",
        title: "Regalo por agilizar tramite",
        scenario:
          "Durante gestion de pago, un tercero ofrece un obsequio para acelerar validacion.",
        dilemma:
          "¿Rechazar y reportar o resolver primero y reportar despues?",
        analysisLens: [
          "Honestidad",
          "Responsabilidad por la eleccion",
          "Trazabilidad de actuacion",
        ],
        frequentTrap:
          "Posponer reporte para evitar friccion inmediata.",
        referenceResolution:
          "Rechazar de inmediato, dejar registro y activar canal institucional de reporte.",
        officialSource: "Codigo de Integridad DIAN",
      },
      {
        id: "ge-f3-case-2",
        title: "Ajuste informal de inventario",
        scenario:
          "Para cuadrar cierre, proponen modificar manualmente un dato de inventario sin soporte completo.",
        dilemma:
          "¿Aprobar ajuste informal por cierre o escalar novedad con evidencia?",
        analysisLens: [
          "Integridad de informacion publica",
          "Control disciplinario y fiscal",
          "Deber de transparencia",
        ],
        frequentTrap:
          "Justificar alteracion por presion de resultados de corto plazo.",
        referenceResolution:
          "Escalar novedad formal, conservar evidencia y corregir solo mediante ruta autorizada.",
        officialSource: "Codigo de Etica + gestion documental publica",
      },
    ],
  },
};

function phaseIcon(phaseId: string) {
  if (phaseId === "fase-1") return Target;
  if (phaseId === "fase-2") return BookOpenCheck;
  return ShieldCheck;
}

function splitAxis(axis: string): { title: string; scope: string } {
  const parts = axis.split(":");
  if (parts.length >= 2) {
    const title = parts[0].trim();
    const scope = parts.slice(1).join(":").trim();
    return { title, scope };
  }
  return { title: axis.trim(), scope: "" };
}

function explainAxis(axis: string, phaseTitle: string): AxisLesson {
  const { title, scope } = splitAxis(axis);
  const normalized = `${title} ${scope}`.toLowerCase();

  if (normalized.includes("manual de funciones")) {
    return {
      title,
      whatIs:
        "Define el propósito del cargo, su proceso institucional y el subproceso donde realmente opera. Es la frontera entre funciones válidas y funciones de otros cargos.",
      examFocus:
        "Te evalúan en casos donde debes identificar qué le corresponde ejecutar al cargo y qué debe escalarse o remitirse.",
    };
  }

  if (normalized.includes("cobro persuasivo") || normalized.includes("cobro coactivo")) {
    return {
      title,
      whatIs:
        "Diferencia la gestión de pago voluntario frente a la ejecución administrativa forzosa. Incluye secuencia, actos y soporte legal.",
      examFocus:
        "Suele aparecer en preguntas de secuencia procedimental, plazos y elección de la actuación correcta según la etapa.",
    };
  }

  if (normalized.includes("mandamiento de pago") || normalized.includes("título ejecutivo")) {
    return {
      title,
      whatIs:
        "Es la base jurídica para iniciar cobro coactivo y habilitar actuaciones posteriores como excepciones y medidas de ejecución.",
      examFocus:
        "Evalúan si reconoces requisitos del título y cómo responder ante excepciones del deudor.",
    };
  }

  if (normalized.includes("medidas cautelares") || normalized.includes("embargo")) {
    return {
      title,
      whatIs:
        "Son mecanismos para asegurar el recaudo, pero deben aplicarse con legalidad, proporcionalidad y debido proceso.",
      examFocus:
        "Te plantean dilemas entre urgencia operativa y garantías del administrado para validar criterio técnico-jurídico.",
    };
  }

  if (normalized.includes("devoluciones") || normalized.includes("compensaciones")) {
    return {
      title,
      whatIs:
        "Implica revisar requisitos, soportes y consistencia documental para proyectar decisiones fundadas y trazables.",
      examFocus:
        "Evalúan identificación de requisitos faltantes, control de calidad documental y motivación del acto administrativo.",
    };
  }

  if (normalized.includes("control extensivo")) {
    return {
      title,
      whatIs:
        "Es la verificación masiva de obligaciones para detectar incumplimientos y activar acciones de corrección o recaudo.",
      examFocus:
        "Aparece en escenarios con cruces de información y priorización de acciones de control.",
    };
  }

  if (normalized.includes("dian: naturaleza") || normalized.includes("naturaleza jurídica")) {
    return {
      title,
      whatIs:
        "Explica qué es la DIAN, su objeto institucional y su estructura de dirección para ubicar competencias y jerarquía.",
      examFocus:
        "Evalúan conceptos institucionales base para resolver preguntas de competencia y responsabilidad funcional.",
    };
  }

  if (
    normalized.includes("cpaca") ||
    normalized.includes("mipg") ||
    normalized.includes("transparencia") ||
    normalized.includes("pqrsf")
  ) {
    return {
      title,
      whatIs:
        "Es el marco transversal de función pública: debido proceso, atención al ciudadano, gestión por resultados y acceso a información.",
      examFocus:
        "Suele evaluarse en casos administrativos donde debes elegir la respuesta más legal, trazable y orientada al servicio.",
    };
  }

  if (normalized.includes("comportamiento ético")) {
    return {
      title,
      whatIs:
        "Mide integridad observable en decisiones reales, especialmente bajo presión o conflicto de intereses.",
      examFocus:
        "Te ponen escenarios con atajos aparentes para validar si priorizas legalidad, imparcialidad y reporte institucional.",
    };
  }

  if (normalized.includes("adaptabilidad")) {
    return {
      title,
      whatIs:
        "Evalúa cómo ajustas tu desempeño ante cambios de norma, sistema o carga operativa sin perder calidad ni control.",
      examFocus:
        "Aparece en preguntas de transición y mejora donde debes escoger respuestas proactivas y sostenibles.",
    };
  }

  if (normalized.includes("comunicación efectiva")) {
    return {
      title,
      whatIs:
        "No es solo transmitir datos: exige claridad técnica, canal adecuado y verificación de comprensión.",
      examFocus:
        "Se evalúa en casos con mensajes incompletos o ambiguos para identificar la conducta comunicativa correcta.",
    };
  }

  if (normalized.includes("trabajo en equipo")) {
    return {
      title,
      whatIs:
        "Busca coordinación real entre áreas y seguimiento de acuerdos para resultados compartidos.",
      examFocus:
        "Te evalúan con conflictos de prioridades para validar colaboración efectiva, no esfuerzo individual aislado.",
    };
  }

  if (normalized.includes("innovación")) {
    return {
      title,
      whatIs:
        "En DIAN, innovar significa proponer mejoras viables con soporte técnico, impacto medible y trazabilidad.",
      examFocus:
        "Aparecen casos donde debes diferenciar mejora estructurada de improvisación riesgosa.",
    };
  }

  if (normalized.includes("solución de problemas")) {
    return {
      title,
      whatIs:
        "Implica analizar causas, priorizar alternativas y ejecutar planes de acción con control de resultados.",
      examFocus:
        "Evalúan tu capacidad de decidir ante contingencias operativas sin romper controles institucionales.",
    };
  }

  if (normalized.includes("siif") || normalized.includes("secop")) {
    return {
      title,
      whatIs:
        "Corresponde al uso de sistemas oficiales de gestión contractual o financiera con trazabilidad verificable.",
      examFocus:
        "Suelen preguntar por uso correcto del sistema, soporte documental y consecuencias de omitir registro.",
    };
  }

  if (normalized.includes("gestión documental") || normalized.includes("trd")) {
    return {
      title,
      whatIs:
        "Organiza evidencias del proceso para auditoría, defensa jurídica, memoria institucional y control.",
      examFocus:
        "Evalúan si identificas qué soporte debe conservarse, cómo clasificarlo y qué riesgos genera omitirlo.",
    };
  }

  if (normalized.includes("custodia") || normalized.includes("mercancías")) {
    return {
      title,
      whatIs:
        "Incluye ingreso, inventario, conservación y disposición de bienes bajo cadena de trazabilidad y control.",
      examFocus:
        "Aparecen escenarios con presión operativa donde debes mantener evidencia y cumplimiento procedimental.",
    };
  }

  if (normalized.includes("integridad") || normalized.includes("ética")) {
    return {
      title,
      whatIs:
        "Integra valores, principios y conducta pública para decidir correctamente en dilemas del servicio.",
      examFocus:
        "Evalúan la opción más defendible ante control: interés general, legalidad, imparcialidad y transparencia.",
    };
  }

  const fallbackScope = scope || axis;
  return {
    title,
    whatIs: `Este eje aborda ${fallbackScope.toLowerCase()}.`,
    examFocus: `En ${phaseTitle.toLowerCase()} se evalúa en preguntas aplicadas, no solo con definición teórica.`,
  };
}

function getPhaseCriticalPack(
  slug: CargoStudyContent["slug"],
  phaseId: string
): PhaseCriticalPack {
  const key = `${slug}:${phaseId}`;
  const pack = PHASE_CRITICAL_PACKS[key];
  if (pack) return pack;

  return {
    phaseMindset:
      "Prioriza lectura comprensiva del caso, identifica la norma aplicable y decide con criterio trazable.",
    readingTasks: [],
    situationalCases: [],
  };
}

export default function CargoStudyClient({ content }: Props) {
  const [completedAxes, setCompletedAxes] = useState<Record<string, boolean>>({});
  const [expandedAnswers, setExpandedAnswers] = useState<Record<string, boolean>>({});
  const [expandAllByPhase, setExpandAllByPhase] = useState<Record<string, boolean>>({});
  const todayLabel = formatTodayBogotaLabel();

  const totals = useMemo(() => {
    const totalAxes = content.phases.reduce(
      (acc, phase) => acc + phase.thematicAxes.length,
      0
    );
    const completed = Object.values(completedAxes).filter(Boolean).length;
    return { totalAxes, completed };
  }, [content.phases, completedAxes]);

  return (
    <main className="min-h-screen bg-dian-gray">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-dian-navy hover:underline text-sm mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <section className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-dian-mint text-dian-navy">
              {content.cargo}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-dian-sand text-dian-navy">
              OPEC {content.opec}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
              Verificado: {todayLabel} · {content.lastUpdate}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-dian-navy mb-2 font-[family:var(--font-display)]">
            Estudio Integrado · {content.cargo}
          </h1>
          <p className="text-sm text-gray-600 max-w-3xl">
            {content.subtitle}. Esta guía organiza la preparación por fases para que estudies
            primero lo crítico (eliminatorio) y luego lo clasificatorio, con fuentes oficiales
            enlazadas en cada bloque.
          </p>

          <div className="mt-4 rounded-xl border border-dian-navy/15 bg-dian-mint/40 p-4">
            <p className="text-xs text-gray-700">
              Avance global de ejes temáticos:{" "}
              <span className="font-semibold text-dian-navy">
                {totals.completed}/{totals.totalAxes}
              </span>
            </p>
            <div className="mt-2 h-2 rounded-full bg-white border border-dian-navy/10 overflow-hidden">
              <div
                className="h-full bg-dian-navy transition-all"
                style={{
                  width:
                    totals.totalAxes > 0
                      ? `${Math.round((totals.completed / totals.totalAxes) * 100)}%`
                      : "0%",
                }}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 text-xs">
            <div className="rounded-xl bg-dian-gray p-3 border border-gray-100">
              <p className="font-semibold text-gray-800">Nivel</p>
              <p className="text-gray-600">{content.level}</p>
            </div>
            <div className="rounded-xl bg-dian-gray p-3 border border-gray-100">
              <p className="font-semibold text-gray-800">Código y grado</p>
              <p className="text-gray-600">{content.codeGrade}</p>
            </div>
            <div className="rounded-xl bg-dian-gray p-3 border border-gray-100">
              <p className="font-semibold text-gray-800">Vacantes</p>
              <p className="text-gray-600">{content.vacancies}</p>
            </div>
            <div className="rounded-xl bg-dian-gray p-3 border border-gray-100">
              <p className="font-semibold text-gray-800">Asignación salarial</p>
              <p className="text-gray-600">{content.salary} · {content.salaryYear}</p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-dian-mint/50 border border-dian-navy/15 p-4">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-dian-navy mt-0.5" />
              <p className="text-xs text-gray-700 leading-relaxed">
                {content.enrollmentWindow} Esta guía usa únicamente documentos y avisos oficiales.
                Los ejercicios son de entrenamiento pedagógico basados en esas fuentes y no
                corresponden a ítems reservados de la CNSC.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {content.sources.map((source) => (
              <a
                key={`${content.slug}-${source.label}`}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-white border border-dian-navy/20 text-dian-navy hover:bg-dian-mint/50"
              >
                {source.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm mb-6">
          <p className="text-sm font-semibold text-dian-navy mb-3">Ruta por fases</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {content.phases.map((phase) => (
              <a
                key={`${content.slug}-${phase.id}`}
                href={`#${phase.id}`}
                className="rounded-xl border border-gray-200 p-4 hover:border-dian-navy hover:bg-dian-mint/30 transition-colors"
              >
                <p className="text-xs font-semibold text-gray-500 mb-1">{phase.character}</p>
                <p className="text-sm font-bold text-gray-900 mb-1">{phase.title}</p>
                <p className="text-xs text-dian-navy">Peso referencial {phase.weight}</p>
              </a>
            ))}
          </div>
        </section>

        <div className="space-y-6">
          {content.phases.map((phase) => {
            const PhaseIcon = phaseIcon(phase.id);
            const phaseKey = `${content.slug}-${phase.id}`;
            const completedInPhase = phase.thematicAxes.reduce((acc, _item, index) => {
              const axisKey = `${phaseKey}-${index}`;
              return acc + (completedAxes[axisKey] ? 1 : 0);
            }, 0);
            const phaseProgress =
              phase.thematicAxes.length > 0
                ? Math.round((completedInPhase / phase.thematicAxes.length) * 100)
                : 0;
            const allExpanded = expandAllByPhase[phaseKey] ?? false;
            const extraCheckpoints = phase.checkpoints.slice(phase.thematicAxes.length);
            const criticalPack = getPhaseCriticalPack(content.slug, phase.id);

            return (
              <section
                key={`${content.slug}-${phase.id}-section`}
                id={phase.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-dian-mint flex items-center justify-center shrink-0">
                    <PhaseIcon className="w-5 h-5 text-dian-navy" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-bold text-dian-navy">{phase.title}</h2>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-dian-sand text-dian-navy">
                        {phase.character}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-dian-mint text-dian-navy">
                        Peso {phase.weight}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-4">{phase.whatEvaluates}</p>

                <div className="rounded-xl border border-gray-100 bg-dian-gray/60 p-4 mb-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-dian-navy" />
                      Estudio progresivo por ejes
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-600">
                        {completedInPhase}/{phase.thematicAxes.length} leídos ({phaseProgress}%)
                      </span>
                      <button
                        onClick={() =>
                          setExpandAllByPhase((prev) => ({
                            ...prev,
                            [phaseKey]: !allExpanded,
                          }))
                        }
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg border border-dian-navy/20 text-dian-navy hover:bg-dian-mint/50"
                      >
                        {allExpanded ? "Colapsar respuestas" : "Expandir respuestas"}
                      </button>
                    </div>
                  </div>

                  <div className="h-2 rounded-full bg-white border border-dian-navy/10 overflow-hidden mb-4">
                    <div
                      className="h-full bg-dian-navy transition-all"
                      style={{ width: `${phaseProgress}%` }}
                    />
                  </div>

                  <div className="space-y-3">
                    {phase.thematicAxes.map((axis, index) => {
                      const axisKey = `${phaseKey}-${index}`;
                      const checkpoint = phase.checkpoints[index];
                      const isRead = completedAxes[axisKey] ?? false;
                      const axisExpanded = allExpanded || (expandedAnswers[axisKey] ?? false);
                      const lesson = explainAxis(axis, phase.title);

                      return (
                        <article
                          key={`${content.slug}-${phase.id}-${axisKey}`}
                          className={`rounded-xl border p-4 ${
                            isRead
                              ? "border-dian-navy/30 bg-dian-mint/20"
                              : "border-gray-200 bg-white"
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <p className="text-xs font-semibold text-gray-500">
                              Eje {index + 1}
                            </p>
                            <button
                              onClick={() =>
                                setCompletedAxes((prev) => ({
                                  ...prev,
                                  [axisKey]: !isRead,
                                }))
                              }
                              className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${
                                isRead
                                  ? "border-dian-navy/30 text-dian-navy bg-dian-mint"
                                  : "border-gray-300 text-gray-600 hover:bg-gray-50"
                              }`}
                            >
                              {isRead ? "Leído" : "Marcar como leído"}
                            </button>
                          </div>

                          <h3 className="text-sm font-semibold text-gray-900 mb-2">
                            {lesson.title}
                          </h3>
                          <p className="text-sm text-gray-700 mb-2">
                            <span className="font-semibold text-gray-900">Qué es:</span>{" "}
                            {lesson.whatIs}
                          </p>
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold text-gray-900">Cómo lo evalúan:</span>{" "}
                            {lesson.examFocus}
                          </p>

                          {checkpoint && (
                            <div className="mt-3 rounded-lg border border-dian-navy/15 bg-white p-3">
                              <p className="text-xs font-semibold text-dian-navy mb-1">
                                Chequeo rápido del eje
                              </p>
                              <p className="text-sm text-gray-800 mb-2">{checkpoint.prompt}</p>
                              <button
                                onClick={() =>
                                  setExpandedAnswers((prev) => ({
                                    ...prev,
                                    [axisKey]: !axisExpanded,
                                  }))
                                }
                                className="text-xs font-semibold text-dian-navy hover:underline"
                              >
                                {axisExpanded ? "Ocultar respuesta" : "Ver respuesta"}
                              </button>
                              {axisExpanded && (
                                <div className="mt-2 rounded-lg bg-dian-mint/40 border border-dian-navy/10 p-3">
                                  <p className="text-sm text-gray-800">{checkpoint.answer}</p>
                                  <p className="text-xs text-gray-500 mt-2">Fuente: {checkpoint.source}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                </div>

                {(criticalPack.readingTasks.length > 0 ||
                  criticalPack.situationalCases.length > 0) && (
                  <div className="space-y-5 mb-5">
                    <div className="rounded-xl border border-dian-navy/15 bg-dian-mint/30 p-4">
                      <p className="text-sm font-semibold text-dian-navy mb-1">
                        Marco de razonamiento critico para esta fase
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">
                        {criticalPack.phaseMindset}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-700">
                        <p>1. Lee el caso y separa hechos de opiniones.</p>
                        <p>2. Ubica norma/fuente que gobierna la decision.</p>
                        <p>3. Identifica riesgo juridico y riesgo operativo.</p>
                        <p>4. Elige accion defendible en auditoria.</p>
                      </div>
                    </div>

                    {criticalPack.readingTasks.length > 0 && (
                      <div className="rounded-xl border border-gray-100 bg-white p-4">
                        <p className="text-sm font-semibold text-gray-900 mb-3">
                          Lectura critica aplicada
                        </p>
                        <div className="space-y-3">
                          {criticalPack.readingTasks.map((task) => (
                            <article
                              key={`${content.slug}-${phase.id}-${task.id}`}
                              className="rounded-lg border border-gray-200 bg-dian-gray/40 p-3"
                            >
                              <p className="text-sm font-semibold text-gray-900 mb-1">
                                {task.title}
                              </p>
                              <p className="text-sm text-gray-700 mb-1">
                                <span className="font-semibold">Contexto:</span> {task.context}
                              </p>
                              <p className="text-sm text-gray-700 mb-1">
                                <span className="font-semibold">Que leer:</span> {task.whatToRead}
                              </p>
                              <p className="text-sm text-gray-700 mb-1">
                                <span className="font-semibold">Pregunta critica:</span>{" "}
                                {task.criticalQuestion}
                              </p>
                              <p className="text-sm text-gray-700">
                                <span className="font-semibold">Analisis esperado:</span>{" "}
                                {task.expectedAnalysis}
                              </p>
                              <p className="text-xs text-gray-500 mt-2">
                                Base oficial: {task.officialSource}
                              </p>
                            </article>
                          ))}
                        </div>
                      </div>
                    )}

                    {criticalPack.situationalCases.length > 0 && (
                      <div className="rounded-xl border border-gray-100 bg-white p-4">
                        <p className="text-sm font-semibold text-gray-900 mb-3">
                          Taller situacional (como en examen)
                        </p>
                        <div className="space-y-2">
                          {criticalPack.situationalCases.map((caseItem) => (
                            <details
                              key={`${content.slug}-${phase.id}-${caseItem.id}`}
                              className="group rounded-xl border border-gray-200 bg-white"
                            >
                              <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-gray-800 flex items-center justify-between gap-3">
                                <span>{caseItem.title}</span>
                                <span className="text-xs text-dian-navy font-semibold group-open:hidden">
                                  Resolver caso
                                </span>
                                <span className="text-xs text-dian-navy font-semibold hidden group-open:inline">
                                  Ocultar
                                </span>
                              </summary>
                              <div className="px-4 pb-4 space-y-2">
                                <p className="text-sm text-gray-700">
                                  <span className="font-semibold">Escenario:</span>{" "}
                                  {caseItem.scenario}
                                </p>
                                <p className="text-sm text-gray-700">
                                  <span className="font-semibold">Dilema:</span> {caseItem.dilemma}
                                </p>
                                <div className="text-sm text-gray-700">
                                  <p className="font-semibold mb-1">Lentes de analisis:</p>
                                  <ul className="space-y-1">
                                    {caseItem.analysisLens.map((lens) => (
                                      <li key={`${caseItem.id}-${lens}`} className="flex items-start gap-2">
                                        <span className="text-dian-navy mt-0.5">•</span>
                                        <span>{lens}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p className="text-sm text-gray-700">
                                  <span className="font-semibold">Trampa frecuente:</span>{" "}
                                  {caseItem.frequentTrap}
                                </p>
                                <div className="rounded-lg bg-dian-mint/40 border border-dian-navy/10 p-3">
                                  <p className="text-sm text-gray-800">
                                    <span className="font-semibold">Resolucion orientativa:</span>{" "}
                                    {caseItem.referenceResolution}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-2">
                                    Base oficial: {caseItem.officialSource}
                                  </p>
                                </div>
                              </div>
                            </details>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5 mb-5">
                  <div className="rounded-xl border border-gray-100 bg-dian-sand/50 p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Flag className="w-4 h-4 text-dian-navy" />
                      Resumen rápido
                    </p>
                    <div className="space-y-2 text-sm text-gray-700">
                      {phase.quickSummary.map((line) => (
                        <p key={`${content.slug}-${phase.id}-${line}`}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-white p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Fuentes de esta fase</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.sources.map((source) => (
                        <a
                          key={`${content.slug}-${phase.id}-${source.label}`}
                          href={source.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-dian-mint/40 border border-dian-navy/15 text-dian-navy hover:bg-dian-mint"
                        >
                          {source.label}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {extraCheckpoints.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">
                      Preguntas de fijación adicionales
                    </p>
                    <div className="space-y-2">
                      {extraCheckpoints.map((checkpoint) => (
                        <details
                          key={`${content.slug}-${phase.id}-${checkpoint.id}`}
                          className="group rounded-xl border border-gray-200 bg-white"
                        >
                          <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-gray-800 flex items-center justify-between gap-3">
                            <span>{checkpoint.prompt}</span>
                            <span className="text-xs text-dian-navy font-semibold group-open:hidden">Ver respuesta</span>
                            <span className="text-xs text-dian-navy font-semibold hidden group-open:inline">Ocultar</span>
                          </summary>
                          <div className="px-4 pb-4">
                            <div className="rounded-lg bg-dian-mint/50 border border-dian-navy/10 p-3">
                              <p className="text-sm text-gray-800">{checkpoint.answer}</p>
                              <p className="text-xs text-gray-500 mt-2">Fuente: {checkpoint.source}</p>
                            </div>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
