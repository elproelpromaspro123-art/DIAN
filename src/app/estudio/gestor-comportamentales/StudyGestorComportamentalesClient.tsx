"use client";

import { Users } from "lucide-react";
import StudyAreaClient from "@/components/StudyAreaClient";
import { Question } from "@/data/types";
import { studyGuides } from "@/data/study-guides";

const loadGestorComportamentalesQuestions = () =>
  import("@/data/questions-gestor-comportamentales").then(
    (mod) => mod.gestorComportamentalesQuestions as Question[]
  );

export default function StudyGestorComportamentalesClient() {
  return (
    <StudyAreaClient
      areaId="gestor-comportamentales"
      areaLabel="Gestor I · Comportamentales"
      areaDescription="Competencias conductuales específicas del Gestor I."
      totalQuestions={25}
      icon={Users}
      iconGradient="from-stone-600 to-stone-800"
      loadQuestions={loadGestorComportamentalesQuestions}
      guide={studyGuides.gestor_comportamentales}
    />
  );
}
