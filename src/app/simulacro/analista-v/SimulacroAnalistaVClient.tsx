"use client";

import { ClipboardCheck } from "lucide-react";
import SimulacroAreaClient from "@/components/SimulacroAreaClient";
import { Question } from "@/data/types";

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
      totalQuestions={50}
      icon={ClipboardCheck}
      iconGradient="from-emerald-500 to-teal-600"
      loadQuestions={loadAnalistaVQuestions}
    />
  );
}
