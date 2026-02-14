"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import {
  ChevronDown,
  ExternalLink,
  FileBadge,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

/* ── animation helpers ─────────────────────────────── */

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.04, y: -4, transition: { type: "spring" as const, stiffness: 300 } },
};

/* ── counter hook ──────────────────────────────────── */

function Counter({ from = 0, to }: { from?: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(from);
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" as const });
    return controls.stop;
  }, [mv, to]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (nodeRef.current) nodeRef.current.textContent = String(v);
    });
    return unsub;
  }, [rounded]);

  return <span ref={nodeRef}>{from}</span>;
}

/* ── component ─────────────────────────────────────── */

const emptySubscribe = () => () => {};

export default function Hero() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0b1120] via-[#151d2e] to-[#0b1120] flex flex-col justify-center">
      {/* ── animated gradient bg ─────────────────── */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(56,134,255,.12) 0%, transparent 70%)",
            "radial-gradient(ellipse 80% 60% at 80% 70%, rgba(251,191,36,.10) 0%, transparent 70%)",
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(56,134,255,.12) 0%, transparent 70%)",
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(56,134,255,.12) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* ── floating orbs ────────────────────────── */}
      <motion.div
        className="absolute top-[10%] left-[8%] w-72 h-72 rounded-full bg-blue-500/10 blur-[100px]"
        animate={{ y: [0, 30, -20, 0], x: [0, 15, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[8%] right-[6%] w-80 h-80 rounded-full bg-amber-400/10 blur-[110px]"
        animate={{ y: [0, -25, 20, 0], x: [0, -15, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[55%] left-[50%] w-56 h-56 rounded-full bg-indigo-500/8 blur-[90px]"
        animate={{ y: [0, 20, -15, 0], x: [0, -20, 15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── content ──────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto w-full px-5 py-16 text-center text-white"
      >
        {/* badge */}
        <motion.div variants={fadeUp}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[.06] border border-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-8 backdrop-blur-sm">
            <FileBadge className="w-4 h-4 text-amber-400" />
            Convocatoria DIAN 2676
          </div>
        </motion.div>

        {/* heading */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-6xl font-bold mb-5 leading-tight font-[family:var(--font-display)]"
        >
          <span className="inline-flex flex-wrap items-center justify-center gap-3">
            <Image
              src="/brand/logo.png"
              alt=""
              width={52}
              height={52}
              className="rounded-xl"
              aria-hidden
              priority
            />
            Prepárate para la{" "}
            <span className="text-amber-400">DIAN</span>
          </span>
        </motion.h1>

        {/* subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-white/80 mb-3 max-w-2xl mx-auto leading-relaxed"
        >
          Simulacros, estudio guiado y documentos oficiales para
          Analista&nbsp;V y Gestor&nbsp;I.
        </motion.p>

        <motion.p variants={fadeUp} className="text-xs text-white/40 mb-12">
          Inscripciones cerradas · 7 de febrero de 2026
        </motion.p>

        {/* cards */}
        <motion.div
          variants={fadeUp}
          className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-14"
        >
          {[
            {
              icon: Target,
              num: 3,
              label: "pruebas oficiales",
              desc: "Básicas, comportamentales e integridad.",
            },
            {
              icon: Users,
              num: 2,
              label: "cargos activos",
              desc: "Analista V y Gestor I.",
            },
            {
              icon: ShieldCheck,
              num: 0,
              label: "Material verificado",
              desc: "Basado en documentos DIAN/CNSC.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="group cursor-default rounded-2xl bg-white/[.04] backdrop-blur-md p-6 border border-white/[.08] transition-colors hover:border-white/20"
            >
              <card.icon className="w-7 h-7 mx-auto mb-3 text-amber-400 transition-transform group-hover:scale-110" />
              <h3 className="font-semibold text-sm mb-1">
                {card.num > 0 && mounted ? (
                  <>
                    <Counter to={card.num} /> {card.label}
                  </>
                ) : (
                  card.label
                )}
              </h3>
              <p className="text-xs text-white/55">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* buttons */}
        <motion.div
          variants={fadeIn}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="https://simo.cnsc.gov.co/#/ofertaEmpleo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-amber-400 text-[#0f172a] font-semibold px-6 py-3 rounded-xl text-sm shadow-lg shadow-amber-400/20 transition-colors hover:bg-amber-300"
          >
            <ExternalLink className="w-4 h-4" />
            Oferta SIMO
          </motion.a>
          <motion.a
            href="https://www.cnsc.gov.co/node/59797"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-white/[.06] text-white font-semibold px-6 py-3 rounded-xl text-sm border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            <ExternalLink className="w-4 h-4" />
            CNSC Convocatoria
          </motion.a>
          <motion.a
            href="https://www.dian.gov.co/Prensa/Paginas/NG-Inician-inscripciones-en-la-modalidad-abierta-del-concurso-de-meritos-DIAN-2676.aspx"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-white/[.06] text-white font-semibold px-6 py-3 rounded-xl text-sm border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            <ExternalLink className="w-4 h-4" />
            Comunicado DIAN
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── scroll indicator ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
