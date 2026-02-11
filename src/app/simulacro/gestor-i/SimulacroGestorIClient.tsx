"use client";

import { ClipboardCheck } from "lucide-react";
import SimulacroAreaClient from "@/components/SimulacroAreaClient";
import { Question } from "@/data/types";

const loadGestorIQuestions = () =>
  import("@/data/questions-gestor-i").then(
    (mod) => mod.gestorIQuestions as Question[]
  );

export default function SimulacroGestorIClient() {
  return (
    <SimulacroAreaClient
      areaId="gestor-i"
      areaLabel="Gestor I · Simulacro integral"
      areaDescription="Simulacro completo por fases (eliminatoria + clasificatorias) para Gestor I."
      totalQuestions={50}
      icon={ClipboardCheck}
      iconGradient="from-indigo-500 to-slate-600"
      loadQuestions={loadGestorIQuestions}
    />
  );
}
