import fs from "node:fs";
import path from "node:path";

const TIMEOUT_MS = 15000;

const SOURCE_REGISTRY = [
  {
    sourceId: "simo-oferta",
    url: "https://simo.cnsc.gov.co/#/ofertaEmpleo",
  },
  {
    sourceId: "cnsc-convocatoria-dian-2676",
    url: "https://www.cnsc.gov.co/convocatorias/dian-2676",
  },
  {
    sourceId: "cnsc-aviso-ampliacion-2026-02-07",
    url: "https://www.cnsc.gov.co/node/59797",
  },
  {
    sourceId: "cnsc-incidencia-pago-simo-2026-02-04",
    url: "https://www.cnsc.gov.co/node/59574",
  },
  {
    sourceId: "cnsc-acuerdo-dian-2676-2025",
    url: "https://www.cnsc.gov.co/node/54168",
  },
  {
    sourceId: "cnsc-anexo-dian-2676-2025",
    url: "https://www.cnsc.gov.co/node/54169",
  },
  {
    sourceId: "dian-comunicado-inicio-inscripciones",
    url: "https://www.dian.gov.co/Prensa/Paginas/NG-Inician-inscripciones-en-la-modalidad-abierta-del-concurso-de-meritos-DIAN-2676.aspx",
  },
  {
    sourceId: "cnsc-resolucion-0067-2024-merf",
    url: "https://www.cnsc.gov.co/sites/default/files/2024-04/3.-resolucion-no.-0067-del-11-de-abril-del-2024.pdf",
    fallbackHref: "/recursos/manual-funciones-analista-v.pdf",
  },
  {
    sourceId: "cnsc-resolucion-0065-2024-diccionario",
    url: "https://www.cnsc.gov.co/sites/default/files/2024-04/2.-resolucion-no.-0065-del-11-de-abril-del-2024.pdf",
    fallbackHref: "/recursos/diccionario-competencias-res-065-2024.pdf",
  },
  {
    sourceId: "funcion-publica-ley-80-1993",
    url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=304",
  },
  {
    sourceId: "funcion-publica-ley-1150-2007",
    url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=184686",
  },
  {
    sourceId: "funcion-publica-ley-1437-2011",
    url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41249",
  },
  {
    sourceId: "funcion-publica-ley-1712-2014",
    url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56882",
  },
];

function isKnownErrorUrl(url) {
  return /norma_error/i.test(url);
}

async function fetchWithTimeout(url, method) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      method,
      redirect: "follow",
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function checkSource(source) {
  const checkedAt = new Date().toISOString();
  const result = {
    sourceId: source.sourceId,
    url: source.url,
    status: "error",
    checkedAt,
    finalUrl: source.url,
    notes: "",
  };

  try {
    let response = await fetchWithTimeout(source.url, "HEAD");
    if ([403, 405, 429, 500, 501].includes(response.status)) {
      response = await fetchWithTimeout(source.url, "GET");
    }

    result.finalUrl = response.url;
    const finalIsError = isKnownErrorUrl(response.url);
    const successStatus = response.status >= 200 && response.status < 400;

    if (successStatus && !finalIsError) {
      result.status = "ok";
      result.notes = `HTTP ${response.status}`;
      return result;
    }

    if (source.fallbackHref) {
      result.status = "warning";
      result.notes =
        `HTTP ${response.status}; se usará respaldo local ${source.fallbackHref}` +
        (finalIsError ? " (redireccionado a página de error)." : ".");
      return result;
    }

    result.status = "error";
    result.notes =
      `HTTP ${response.status}` +
      (finalIsError ? " (redireccionado a página de error)." : ".");
    return result;
  } catch (error) {
    if (source.fallbackHref) {
      result.status = "warning";
      result.notes = `No disponible (${error?.name ?? "error"}); se usará respaldo local ${source.fallbackHref}.`;
      return result;
    }
    result.status = "error";
    result.notes = `No disponible (${error?.name ?? "error"}).`;
    return result;
  }
}

async function main() {
  const entries = [];
  for (const source of SOURCE_REGISTRY) {
    // eslint-disable-next-line no-await-in-loop
    entries.push(await checkSource(source));
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    timezone: "America/Bogota",
    entries,
  };

  const outPath = path.join(process.cwd(), "src", "data", "source-health.json");
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  const counts = entries.reduce(
    (acc, entry) => {
      acc[entry.status] += 1;
      return acc;
    },
    { ok: 0, warning: 0, error: 0 }
  );

  console.log(`Verificación completada: ok=${counts.ok}, warning=${counts.warning}, error=${counts.error}`);
  console.log(`Salida: ${outPath}`);

  if (counts.error > 0) {
    process.exitCode = 1;
  }
}

main();
