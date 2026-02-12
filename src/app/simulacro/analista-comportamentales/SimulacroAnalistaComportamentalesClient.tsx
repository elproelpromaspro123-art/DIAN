"use client";

import { Users } from "lucide-react";
import SimulacroAreaClient from "@/components/SimulacroAreaClient";
import { Question } from "@/data/types";

const loadAnalistaComportamentalesQuestions = () =>
  import("@/data/questions-analista-comportamentales").then(
    (mod) => mod.analistaComportamentalesQuestions as Question[]
  );

export default function SimulacroAnalistaComportamentalesClient() {
  return (
    <SimulacroAreaClient
      areaId="analista-comportamentales"
      areaLabel="Analista V · Comportamentales"
      areaDescription="Escenarios conductuales basados en el diccionario oficial de competencias."
      totalQuestions={25}
      icon={Users}
      iconGradient="from-zinc-600 to-zinc-800"
      loadQuestions={loadAnalistaComportamentalesQuestions}
    />
  );
}
