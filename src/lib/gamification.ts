export const GAMIFICATION_STORAGE_KEY = "simo_dian_gamification_v1";

export type BadgeId =
  | "first_simulacro_completed"
  | "streak_3_days"
  | "phase_80_master"
  | "study_axis_10";

export const BADGE_LABELS: Record<BadgeId, string> = {
  first_simulacro_completed: "Primer simulacro finalizado",
  streak_3_days: "Racha de 3 días",
  phase_80_master: "Fase con 80+",
  study_axis_10: "10 ejes completados",
};

export type GamificationState = {
  xp: number;
  level: number;
  streakDays: number;
  badges: BadgeId[];
  lastActivityDate: string | null;
  completedSimulacros: number;
  completedAxes: number;
  highPhaseScores: number;
  lastStudySessionAwardDate: string | null;
};

export type GamificationMutation = {
  state: GamificationState;
  xpDelta: number;
  levelUp: boolean;
  newBadges: BadgeId[];
  message: string;
};

const DEFAULT_GAMIFICATION_STATE: GamificationState = {
  xp: 0,
  level: 1,
  streakDays: 0,
  badges: [],
  lastActivityDate: null,
  completedSimulacros: 0,
  completedAxes: 0,
  highPhaseScores: 0,
  lastStudySessionAwardDate: null,
};

function normalizeState(input: Partial<GamificationState> | null): GamificationState {
  if (!input) return { ...DEFAULT_GAMIFICATION_STATE };
  return {
    ...DEFAULT_GAMIFICATION_STATE,
    ...input,
    badges: Array.isArray(input.badges) ? (input.badges as BadgeId[]) : [],
  };
}

function getBogotaDayKey(date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Bogota",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function previousDayKey(dayKey: string): string {
  const [year, month, day] = dayKey.split("-").map(Number);
  const d = new Date(Date.UTC(year, month - 1, day));
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

function levelFromXp(xp: number): number {
  return Math.max(1, Math.floor(xp / 100) + 1);
}

function withStreak(state: GamificationState): GamificationState {
  const today = getBogotaDayKey();
  const last = state.lastActivityDate;

  if (!last) {
    return {
      ...state,
      lastActivityDate: today,
      streakDays: 1,
    };
  }

  if (last === today) return state;

  return {
    ...state,
    lastActivityDate: today,
    streakDays: last === previousDayKey(today) ? state.streakDays + 1 : 1,
  };
}

function applyBadges(state: GamificationState): {
  state: GamificationState;
  newBadges: BadgeId[];
} {
  const next = new Set<BadgeId>(state.badges);
  const newBadges: BadgeId[] = [];

  const unlock = (badge: BadgeId) => {
    if (!next.has(badge)) {
      next.add(badge);
      newBadges.push(badge);
    }
  };

  if (state.completedSimulacros >= 1) unlock("first_simulacro_completed");
  if (state.streakDays >= 3) unlock("streak_3_days");
  if (state.highPhaseScores >= 1) unlock("phase_80_master");
  if (state.completedAxes >= 10) unlock("study_axis_10");

  return {
    state: {
      ...state,
      badges: Array.from(next),
    },
    newBadges,
  };
}

function persistState(state: GamificationState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(GAMIFICATION_STORAGE_KEY, JSON.stringify(state));
}

function mutate(
  update: (current: GamificationState) => {
    next: GamificationState;
    xpDelta: number;
    message: string;
  }
): GamificationMutation {
  const current = loadGamificationState();
  const streakState = withStreak(current);
  const prevLevel = streakState.level;

  const { next, xpDelta, message } = update(streakState);
  const withLevel = {
    ...next,
    level: levelFromXp(next.xp),
  };
  const badgeResult = applyBadges(withLevel);

  persistState(badgeResult.state);

  return {
    state: badgeResult.state,
    xpDelta,
    levelUp: badgeResult.state.level > prevLevel,
    newBadges: badgeResult.newBadges,
    message,
  };
}

export function loadGamificationState(): GamificationState {
  if (typeof window === "undefined") return { ...DEFAULT_GAMIFICATION_STATE };
  try {
    const raw = localStorage.getItem(GAMIFICATION_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_GAMIFICATION_STATE };
    return normalizeState(JSON.parse(raw) as Partial<GamificationState>);
  } catch {
    return { ...DEFAULT_GAMIFICATION_STATE };
  }
}

export function grantDailyStudySessionXp(): GamificationMutation {
  return mutate((current) => {
    const today = getBogotaDayKey();
    if (current.lastStudySessionAwardDate === today) {
      return {
        next: current,
        xpDelta: 0,
        message: "Sesión diaria ya registrada hoy.",
      };
    }

    return {
      next: {
        ...current,
        xp: current.xp + 10,
        lastStudySessionAwardDate: today,
      },
      xpDelta: 10,
      message: "+10 XP por sesión de estudio.",
    };
  });
}

export function grantStudyAxisCompleted(): GamificationMutation {
  return mutate((current) => ({
    next: {
      ...current,
      xp: current.xp + 6,
      completedAxes: current.completedAxes + 1,
    },
    xpDelta: 6,
    message: "+6 XP por eje completado.",
  }));
}

export function grantSimulacroAnswerFirstTime(): GamificationMutation {
  return mutate((current) => ({
    next: {
      ...current,
      xp: current.xp + 2,
    },
    xpDelta: 2,
    message: "+2 XP por respuesta registrada.",
  }));
}

export function grantReviewIncorrectsXp(): GamificationMutation {
  return mutate((current) => ({
    next: {
      ...current,
      xp: current.xp + 8,
    },
    xpDelta: 8,
    message: "+8 XP por revisar errores.",
  }));
}

export function grantSimulacroCompletionXp(params: {
  score: number;
  phaseScores: number[];
}): GamificationMutation {
  return mutate((current) => {
    const hasPhase80 = params.phaseScores.some((score) => score >= 80);
    const bonus = params.score >= 80 ? 10 : 0;
    const phaseBonus = hasPhase80 ? 6 : 0;
    const total = 30 + bonus + phaseBonus;

    return {
      next: {
        ...current,
        xp: current.xp + total,
        completedSimulacros: current.completedSimulacros + 1,
        highPhaseScores: current.highPhaseScores + (hasPhase80 ? 1 : 0),
      },
      xpDelta: total,
      message: `+${total} XP por finalizar simulacro.`,
    };
  });
}

export function summarizeReward(result: GamificationMutation): string {
  const parts: string[] = [result.message];
  if (result.levelUp) {
    parts.push(`Nivel ${result.state.level} alcanzado.`);
  }
  if (result.newBadges.length > 0) {
    const badgeNames = result.newBadges.map((badge) => BADGE_LABELS[badge]).join(", ");
    parts.push(`Nuevo logro: ${badgeNames}.`);
  }
  return parts.join(" ");
}
