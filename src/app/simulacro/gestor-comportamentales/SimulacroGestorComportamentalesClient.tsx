"use client";

import { Users } from "lucide-react";
import SimulacroAreaClient from "@/components/SimulacroAreaClient";
import { Question } from "@/data/types";

const loadGestorComportamentalesQuestions = () =>
  import("@/data/questions-gestor-comportamentales").then(
    (mod) => mod.gestorComportamentalesQuestions as Question[]
  );

export default function SimulacroGestorComportamentalesClient() {
  return (
    <SimulacroAreaClient
      areaId="gestor-comportamentales"
      areaLabel="Gestor I · Comportamentales"
      areaDescription="Escenarios conductuales basados en el diccionario oficial DIAN."
      totalQuestions={25}
      icon={Users}
      iconGradient="from-stone-600 to-stone-800"
      loadQuestions={loadGestorComportamentalesQuestions}
    />
  );
}
