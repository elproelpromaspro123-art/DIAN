export type OfficialCargoSnapshot = {
  cargo: string;
  nivel: string;
  codigo: string;
  grado: string;
  salario2025: string;
  opecs: string[];
  vacantesPorOpec: Record<string, number>;
  vacantesTotal: number;
};

export const OFFICIAL_SIMO_CONVOCATORIA_ID = "1011914855";
export const OFFICIAL_SIMO_SOURCE_URL =
  "https://simo.cnsc.gov.co/empleos/ofertaPublica/?search_convocatoria=1011914855";
export const OFFICIAL_SIMO_SNAPSHOT_DATE_ISO = "2026-02-12";
export const OFFICIAL_SIMO_SNAPSHOT_LABEL = "12-feb-2026";

export const ANALISTA_V_OFFICIAL_SNAPSHOT: OfficialCargoSnapshot = {
  cargo: "Analista V",
  nivel: "Técnico",
  codigo: "205",
  grado: "5",
  salario2025: "$7.171.627",
  opecs: ["236732", "236756"],
  vacantesPorOpec: {
    "236732": 4,
    "236756": 10,
  },
  vacantesTotal: 14,
};

export const GESTOR_I_OFFICIAL_SNAPSHOT: OfficialCargoSnapshot = {
  cargo: "Gestor I",
  nivel: "Profesional",
  codigo: "301",
  grado: "1",
  salario2025: "$6.811.546",
  opecs: ["236741", "236767"],
  vacantesPorOpec: {
    "236741": 8,
    "236767": 189,
  },
  vacantesTotal: 197,
};

export function formatTodayBogotaLabel(date = new Date()): string {
  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "America/Bogota",
  })
    .format(date)
    .replace(".", "")
    .toLowerCase();
}
