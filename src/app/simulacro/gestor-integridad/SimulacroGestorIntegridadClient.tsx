"use client";

import { ShieldCheck } from "lucide-react";
import SimulacroAreaClient from "@/components/SimulacroAreaClient";
import { Question } from "@/data/types";

const loadGestorIntegridadQuestions = () =>
  import("@/data/questions-gestor-integridad").then(
    (mod) => mod.gestorIntegridadQuestions as Question[]
  );

export default function SimulacroGestorIntegridadClient() {
  return (
    <SimulacroAreaClient
      areaId="gestor-integridad"
      areaLabel="Gestor I · Integridad"
      areaDescription="Ética pública y principios del Código de Ética DIAN."
      totalQuestions={25}
      icon={ShieldCheck}
      iconGradient="from-teal-500 to-cyan-600"
      loadQuestions={loadGestorIntegridadQuestions}
    />
  );
}

