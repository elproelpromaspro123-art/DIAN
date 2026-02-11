"use client";

import { Users } from "lucide-react";
import StudyAreaClient from "@/components/StudyAreaClient";
import { Question } from "@/data/types";
import { studyGuides } from "@/data/study-guides";

const loadAnalistaComportamentalesQuestions = () =>
  import("@/data/questions-analista-comportamentales").then(
    (mod) => mod.analistaComportamentalesQuestions as Question[]
  );

export default function StudyAnalistaComportamentalesClient() {
  return (
    <StudyAreaClient
      areaId="analista-comportamentales"
      areaLabel="Analista V · Comportamentales"
      areaDescription="Competencias conductuales basadas en el diccionario oficial DIAN."
      totalQuestions={25}
      icon={Users}
      iconGradient="from-blue-500 to-sky-600"
      loadQuestions={loadAnalistaComportamentalesQuestions}
      guide={studyGuides.analista_comportamentales}
    />
  );
}

