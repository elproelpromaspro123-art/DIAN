import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const root = process.cwd();
const cache = new Map();
const failures = [];
const warnings = [];

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

function resolveModule(specifier, parentDir) {
  const base = specifier.startsWith("@/")
    ? path.join(root, "src", specifier.slice(2))
    : path.resolve(parentDir, specifier);

  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    `${base}.js`,
    `${base}.mjs`,
    path.join(base, "index.ts"),
    path.join(base, "index.tsx"),
    path.join(base, "index.js"),
    path.join(base, "index.mjs"),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }

  throw new Error(`No se pudo resolver módulo: ${specifier} (desde ${parentDir})`);
}

function loadModule(modulePath) {
  const resolved = path.resolve(modulePath);
  if (cache.has(resolved)) return cache.get(resolved).exports;

  const ext = path.extname(resolved).toLowerCase();
  if (ext === ".json") {
    const parsed = JSON.parse(fs.readFileSync(resolved, "utf8"));
    cache.set(resolved, { exports: parsed });
    return parsed;
  }

  if (ext === ".js" || ext === ".mjs" || ext === ".cjs") {
    const loaded = require(resolved);
    cache.set(resolved, { exports: loaded });
    return loaded;
  }

  const source = fs.readFileSync(resolved, "utf8");
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.CommonJS,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
      jsx: ts.JsxEmit.ReactJSX,
    },
    fileName: resolved,
  }).outputText;

  const module = { exports: {} };
  cache.set(resolved, module);

  const dirname = path.dirname(resolved);
  const localRequire = (specifier) => {
    if (
      specifier.startsWith("./") ||
      specifier.startsWith("../") ||
      specifier.startsWith("@/")
    ) {
      const dep = resolveModule(specifier, dirname);
      return loadModule(dep);
    }
    return require(specifier);
  };

  const factory = new Function(
    "module",
    "exports",
    "require",
    "__dirname",
    "__filename",
    transpiled
  );
  factory(module, module.exports, localRequire, dirname, resolved);
  return module.exports;
}

function parsePhase(label = "") {
  const normalized = label.toLowerCase();
  if (normalized.includes("fase 1")) return "fase-1";
  if (normalized.includes("fase 2")) return "fase-2";
  if (normalized.includes("fase 3")) return "fase-3";
  return "otros";
}

function parseWeight(label = "") {
  const match = label.match(/(\d+(?:[.,]\d+)?)\s*%/);
  if (!match) return null;
  const value = Number(match[1].replace(",", "."));
  return Number.isFinite(value) ? value : null;
}

function validateQuestionBank(name, questions, expectedWeights) {
  if (!Array.isArray(questions) || questions.length === 0) {
    fail(`${name}: banco vacío o inválido.`);
    return;
  }

  const phaseCounts = { "fase-1": 0, "fase-2": 0, "fase-3": 0, otros: 0 };
  const correctDist = { A: 0, B: 0, C: 0, D: 0 };
  const phaseWeightByLabel = new Map();

  for (const question of questions) {
    const label = question.groupLabel ?? "";
    const phase = parsePhase(label);
    phaseCounts[phase] += 1;

    if (phase !== "otros" && !phaseWeightByLabel.has(phase)) {
      const weight = parseWeight(label);
      if (weight !== null) phaseWeightByLabel.set(phase, weight);
    }

    if (!Array.isArray(question.options) || question.options.length !== 4) {
      fail(`${name} #${question.id}: debe tener exactamente 4 opciones.`);
      continue;
    }

    const letters = question.options.map((opt) => opt.letter);
    const sorted = [...letters].sort().join(",");
    if (sorted !== "A,B,C,D") {
      fail(`${name} #${question.id}: las opciones deben ser A/B/C/D sin duplicados.`);
    }

    if (!letters.includes(question.correctAnswer)) {
      fail(`${name} #${question.id}: la respuesta correcta no coincide con las opciones.`);
    } else if (question.correctAnswer in correctDist) {
      correctDist[question.correctAnswer] += 1;
    }
  }

  if (phaseCounts["fase-1"] === 0 || phaseCounts["fase-2"] === 0 || phaseCounts["fase-3"] === 0) {
    fail(
      `${name}: distribución por fase inválida (F1=${phaseCounts["fase-1"]}, F2=${phaseCounts["fase-2"]}, F3=${phaseCounts["fase-3"]}).`
    );
  }

  for (const [phase, expected] of Object.entries(expectedWeights)) {
    const found = phaseWeightByLabel.get(phase);
    if (found !== expected) {
      fail(`${name}: peso esperado ${phase}=${expected}% pero se encontró ${String(found)}%.`);
    }
  }

  const total = questions.length;
  for (const letter of ["A", "B", "C", "D"]) {
    const ratio = correctDist[letter] / total;
    if (ratio < 0.12) {
      warn(
        `${name}: distribución de respuestas correctas cargada a ${letter} (${correctDist[letter]}/${total}).`
      );
    }
  }

  if (phaseCounts["fase-1"] < 10 || phaseCounts["fase-2"] < 5 || phaseCounts["fase-3"] < 5) {
    warn(
      `${name}: distribución reducida para modos cortos (F1=${phaseCounts["fase-1"]}, F2=${phaseCounts["fase-2"]}, F3=${phaseCounts["fase-3"]}).`
    );
  }
}

function validateStudySources(cargoContent, cargoName) {
  const allSources = [
    ...(cargoContent.sources ?? []),
    ...(cargoContent.phases ?? []).flatMap((phase) => phase.sources ?? []),
  ];

  for (const source of allSources) {
    const href = source?.href ?? "";
    if (typeof href !== "string" || href.trim() === "") {
      fail(`${cargoName}: fuente vacía o inválida.`);
      continue;
    }

    if (href.startsWith("/")) {
      const localPath = path.join(root, "public", href);
      if (!fs.existsSync(localPath)) {
        fail(`${cargoName}: recurso local inexistente ${href}.`);
      }
      continue;
    }

    if (!href.startsWith("https://")) {
      fail(`${cargoName}: enlace externo debe usar HTTPS (${href}).`);
    }
  }
}

function validateResourceFilesFromInfografia() {
  const filePath = path.join(root, "src/components/InfografiaSection.tsx");
  const source = fs.readFileSync(filePath, "utf8");
  const regex = /file:\s*"([^"]+)"/g;
  let match;

  while ((match = regex.exec(source)) !== null) {
    const fileRef = match[1];
    if (!fileRef.startsWith("/")) continue;
    const diskPath = path.join(root, "public", fileRef);
    if (!fs.existsSync(diskPath)) {
      fail(`InfografiaSection: archivo no encontrado ${fileRef}.`);
    }
  }
}

function run() {
  const { analistaVQuestions } = loadModule(path.join(root, "src/data/questions-analista-v.ts"));
  const { gestorIQuestions } = loadModule(path.join(root, "src/data/questions-gestor-i.ts"));
  const { ANALISTA_STUDY_CONTENT, GESTOR_STUDY_CONTENT } = loadModule(
    path.join(root, "src/data/cargo-study-content.ts")
  );

  validateQuestionBank("analista-v", analistaVQuestions, {
    "fase-1": 65,
    "fase-2": 15,
    "fase-3": 10,
  });
  validateQuestionBank("gestor-i", gestorIQuestions, {
    "fase-1": 70,
    "fase-2": 20,
    "fase-3": 10,
  });

  validateStudySources(ANALISTA_STUDY_CONTENT, "cargo-study-content/analista-v");
  validateStudySources(GESTOR_STUDY_CONTENT, "cargo-study-content/gestor-i");
  validateResourceFilesFromInfografia();

  if (warnings.length > 0) {
    console.warn("Advertencias de integridad:");
    for (const warning of warnings) console.warn(`  - ${warning}`);
  }

  if (failures.length > 0) {
    console.error("Errores de integridad detectados:");
    for (const failure of failures) console.error(`  - ${failure}`);
    process.exitCode = 1;
    return;
  }

  console.log("Integridad de bancos OK.");
}

run();
