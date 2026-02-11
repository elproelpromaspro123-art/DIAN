"use client";

import { ClipboardCheck } from "lucide-react";
import StudyAreaClient from "@/components/StudyAreaClient";
import { Question } from "@/data/types";
import { studyGuides } from "@/data/study-guides";

const loadGestorBasicasQuestions = () =>
  import("@/data/questions-gestor-basicas").then(
    (mod) => mod.gestorBasicasQuestions as Question[]
  );

export default function StudyGestorBasicasClient() {
  return (
    <StudyAreaClient
      areaId="gestor-basicas"
      areaLabel="Gestor I · Básicas y funcionales"
      areaDescription="Funciones administrativas, logística y contratación pública del Gestor I."
      totalQuestions={25}
      icon={ClipboardCheck}
      iconGradient="from-indigo-500 to-slate-600"
      loadQuestions={loadGestorBasicasQuestions}
      guide={studyGuides.gestor_basicas}
    />
  );
}

