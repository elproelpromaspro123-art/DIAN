import sourceHealthRaw from "@/data/source-health.json";

export type SourceHealthStatus = "ok" | "warning" | "error";

export type SourceHealthEntry = {
  sourceId: string;
  url: string;
  status: SourceHealthStatus;
  checkedAt: string;
  finalUrl?: string;
  notes?: string;
};

type SourceHealthPayload = {
  generatedAt: string;
  timezone: string;
  entries: SourceHealthEntry[];
};

const sourceHealth = sourceHealthRaw as SourceHealthPayload;

function toDateOrNull(value: string | undefined): Date | null {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function getSourceHealth(): SourceHealthPayload {
  return sourceHealth;
}

export function getLatestSourceCheckIso(): string | null {
  const latest = sourceHealth.entries
    .map((entry) => entry.checkedAt)
    .map((iso) => toDateOrNull(iso))
    .filter((d): d is Date => Boolean(d))
    .sort((a, b) => b.getTime() - a.getTime())[0];

  return latest ? latest.toISOString() : null;
}

export function formatBogotaDateTime(iso: string): string {
  const parsed = toDateOrNull(iso);
  if (!parsed) return "fecha no disponible";

  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Bogota",
  })
    .format(parsed)
    .replace(".", "")
    .toLowerCase();
}

export function getLatestSourceCheckLabel(): string {
  const latestIso = getLatestSourceCheckIso();
  if (!latestIso) return "sin verificación registrada";
  return `${formatBogotaDateTime(latestIso)} (hora Bogotá)`;
}
