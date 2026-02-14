"use client";

import { Award, Flame, Star } from "lucide-react";
import {
  BADGE_LABELS,
  type BadgeId,
  type GamificationState,
} from "@/lib/gamification";

interface Props {
  state: GamificationState;
  title?: string;
  feedback?: string | null;
}

function renderBadges(badges: BadgeId[]) {
  if (badges.length === 0) {
    return <p className="text-xs text-gray-500">Sin logros desbloqueados aún.</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <span
          key={badge}
          className="inline-flex items-center gap-1 rounded-full border border-dian-navy/20 bg-dian-mint px-2.5 py-1 text-[11px] font-semibold text-dian-navy"
        >
          <Award className="h-3 w-3" />
          {BADGE_LABELS[badge]}
        </span>
      ))}
    </div>
  );
}

export default function GamificationPanel({
  state,
  title = "Progreso de juego",
  feedback,
}: Props) {
  return (
    <section className="rounded-2xl border border-dian-navy/15 bg-white p-4 sm:p-5 shadow-sm exam-surface">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <h2 className="text-sm font-semibold text-dian-navy">{title}</h2>
        <span className="text-[11px] text-gray-500">
          Última actividad: {state.lastActivityDate ?? "sin actividad"}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="rounded-xl border border-gray-200 bg-dian-gray/40 p-3">
          <p className="text-[11px] text-gray-500">Nivel</p>
          <p className="text-lg font-bold text-dian-navy">{state.level}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-dian-gray/40 p-3">
          <p className="text-[11px] text-gray-500">XP total</p>
          <p className="text-lg font-bold text-dian-navy">{state.xp}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-dian-gray/40 p-3">
          <p className="text-[11px] text-gray-500">Racha</p>
          <p className="inline-flex items-center gap-1 text-lg font-bold text-dian-navy">
            <Flame className="h-4 w-4 text-dian-gold" />
            {state.streakDays}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
          <Star className="h-3.5 w-3.5 text-dian-gold" />
          Logros
        </div>
        {renderBadges(state.badges)}
      </div>

      {feedback ? (
        <p className="mt-3 rounded-lg border border-dian-navy/20 bg-dian-mint/50 px-3 py-2 text-xs text-dian-navy">
          {feedback}
        </p>
      ) : null}
    </section>
  );
}
