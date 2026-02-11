"use client";

import { ShieldCheck } from "lucide-react";
import StudyAreaClient from "@/components/StudyAreaClient";
import { Question } from "@/data/types";
import { studyGuides } from "@/data/study-guides";

const loadAnalistaIntegridadQuestions = () =>
  import("@/data/questions-analista-integridad").then(
    (mod) => mod.analistaIntegridadQuestions as Question[]
  );

export default function StudyAnalistaIntegridadClient() {
  return (
    <StudyAreaClient
      areaId="analista-integridad"
      areaLabel="Analista V · Integridad"
      areaDescription="Valores públicos y juramento de integridad DIAN."
      totalQuestions={12}
      icon={ShieldCheck}
      iconGradient="from-rose-500 to-pink-600"
      loadQuestions={loadAnalistaIntegridadQuestions}
      guide={studyGuides.analista_integridad}
    />
  );
}
