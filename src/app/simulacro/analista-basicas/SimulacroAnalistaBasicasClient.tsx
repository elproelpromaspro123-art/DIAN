"use client";

import { ClipboardCheck } from "lucide-react";
import SimulacroAreaClient from "@/components/SimulacroAreaClient";
import { Question } from "@/data/types";

const loadAnalistaBasicasQuestions = () =>
  import("@/data/questions-analista-basicas").then(
    (mod) => mod.analistaBasicasQuestions as Question[]
  );

export default function SimulacroAnalistaBasicasClient() {
  return (
    <SimulacroAreaClient
      areaId="analista-basicas"
      areaLabel="Analista V · Básicas y funcionales"
      areaDescription="Prueba eliminatoria basada en el manual de funciones del Analista V."
      totalQuestions={12}
      icon={ClipboardCheck}
      iconGradient="from-emerald-500 to-teal-600"
      loadQuestions={loadAnalistaBasicasQuestions}
    />
  );
}
