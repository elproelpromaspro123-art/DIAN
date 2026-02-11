"use client";

import { ShieldCheck } from "lucide-react";
import SimulacroAreaClient from "@/components/SimulacroAreaClient";
import { Question } from "@/data/types";

const loadAnalistaIntegridadQuestions = () =>
  import("@/data/questions-analista-integridad").then(
    (mod) => mod.analistaIntegridadQuestions as Question[]
  );

export default function SimulacroAnalistaIntegridadClient() {
  return (
    <SimulacroAreaClient
      areaId="analista-integridad"
      areaLabel="Analista V · Integridad"
      areaDescription="Valores públicos y Código de Integridad DIAN."
      totalQuestions={25}
      icon={ShieldCheck}
      iconGradient="from-rose-500 to-pink-600"
      loadQuestions={loadAnalistaIntegridadQuestions}
    />
  );
}

