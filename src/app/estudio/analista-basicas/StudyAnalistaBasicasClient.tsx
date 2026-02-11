"use client";

import { ClipboardCheck } from "lucide-react";
import StudyAreaClient from "@/components/StudyAreaClient";
import { Question } from "@/data/types";
import { studyGuides } from "@/data/study-guides";

const loadAnalistaBasicasQuestions = () =>
  import("@/data/questions-analista-basicas").then(
    (mod) => mod.analistaBasicasQuestions as Question[]
  );

export default function StudyAnalistaBasicasClient() {
  return (
    <StudyAreaClient
      areaId="analista-basicas"
      areaLabel="Analista V · Básicas y funcionales"
      areaDescription="Normativa, funciones y competencias eliminatorias del cargo Analista V."
      totalQuestions={12}
      icon={ClipboardCheck}
      iconGradient="from-emerald-500 to-teal-600"
      loadQuestions={loadAnalistaBasicasQuestions}
      guide={studyGuides.analista_basicas}
    />
  );
}
