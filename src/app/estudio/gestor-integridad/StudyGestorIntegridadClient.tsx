"use client";

import { ShieldCheck } from "lucide-react";
import StudyAreaClient from "@/components/StudyAreaClient";
import { Question } from "@/data/types";
import { studyGuides } from "@/data/study-guides";

const loadGestorIntegridadQuestions = () =>
  import("@/data/questions-gestor-integridad").then(
    (mod) => mod.gestorIntegridadQuestions as Question[]
  );

export default function StudyGestorIntegridadClient() {
  return (
    <StudyAreaClient
      areaId="gestor-integridad"
      areaLabel="Gestor I · Integridad"
      areaDescription="Código de Ética DIAN y principios de integridad pública."
      totalQuestions={25}
      icon={ShieldCheck}
      iconGradient="from-teal-500 to-cyan-600"
      loadQuestions={loadGestorIntegridadQuestions}
      guide={studyGuides.gestor_integridad}
    />
  );
}

