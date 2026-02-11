"use client";

import { ClipboardCheck } from "lucide-react";
import SimulacroAreaClient from "@/components/SimulacroAreaClient";
import { Question } from "@/data/types";

const loadGestorBasicasQuestions = () =>
  import("@/data/questions-gestor-basicas").then(
    (mod) => mod.gestorBasicasQuestions as Question[]
  );

export default function SimulacroGestorBasicasClient() {
  return (
    <SimulacroAreaClient
      areaId="gestor-basicas"
      areaLabel="Gestor I · Básicas y funcionales"
      areaDescription="Prueba eliminatoria basada en el manual de funciones del Gestor I."
      totalQuestions={25}
      icon={ClipboardCheck}
      iconGradient="from-indigo-500 to-slate-600"
      loadQuestions={loadGestorBasicasQuestions}
    />
  );
}

