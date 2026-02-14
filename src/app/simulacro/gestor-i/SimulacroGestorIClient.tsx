"use client";

import { ClipboardCheck } from "lucide-react";
import SimulacroAreaClient from "@/components/SimulacroAreaClient";
import { Question } from "@/data/types";
import { SIMULACRO_TOTAL_QUESTIONS } from "@/data/simulacro-config";

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
      totalQuestions={SIMULACRO_TOTAL_QUESTIONS}
      icon={ClipboardCheck}
      iconGradient="from-neutral-700 to-neutral-900"
      loadQuestions={loadGestorIQuestions}
    />
  );
}
