"use client";

import { ClipboardCheck } from "lucide-react";
import SimulacroAreaClient from "@/components/SimulacroAreaClient";
import { Question } from "@/data/types";
import { SIMULACRO_TOTAL_QUESTIONS } from "@/data/simulacro-config";

const loadAnalistaVQuestions = () =>
  import("@/data/questions-analista-v").then(
    (mod) => mod.analistaVQuestions as Question[]
  );

export default function SimulacroAnalistaVClient() {
  return (
    <SimulacroAreaClient
      areaId="analista-v"
      areaLabel="Analista V · Simulacro integral"
      areaDescription="Simulacro completo por fases (eliminatoria + clasificatorias) para Analista V."
      totalQuestions={SIMULACRO_TOTAL_QUESTIONS}
      icon={ClipboardCheck}
      iconGradient="from-zinc-700 to-zinc-900"
      loadQuestions={loadAnalistaVQuestions}
    />
  );
}
