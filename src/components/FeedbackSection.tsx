"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, Lightbulb, Mail, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FeedbackType = "problema" | "sugerencia";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL?.trim() ?? "";
const MAX_MESSAGE_LENGTH = 1800;

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function FeedbackSection() {
  const [type, setType] = useState<FeedbackType>("problema");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      setErrorMessage("Escribe el detalle del problema o la sugerencia.");
      setStatus("error");
      return;
    }

    if (!WEBHOOK_URL) {
      setErrorMessage(
        "El canal de reportes no está configurado. Define NEXT_PUBLIC_DISCORD_WEBHOOK_URL para habilitar envíos."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const safeMessage =
        trimmedMessage.length > MAX_MESSAGE_LENGTH
          ? `${trimmedMessage.slice(0, MAX_MESSAGE_LENGTH)}...`
          : trimmedMessage;

      const contentLines = [
        `**Nuevo reporte (${type})**`,
        safeMessage,
        email.trim() ? `Contacto: ${email.trim()}` : "Contacto: No proporcionado",
        `URL: ${window.location.href}`,
      ];

      const formData = new FormData();
      formData.append(
        "payload_json",
        JSON.stringify({ content: contentLines.join("\n") })
      );

      const canBeacon = typeof navigator !== "undefined" && "sendBeacon" in navigator;

      if (canBeacon) {
        const ok = navigator.sendBeacon(WEBHOOK_URL, formData);
        if (!ok) throw new Error("Beacon failed");
      } else {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          keepalive: true,
          body: formData,
        });
      }

      setStatus("success");
      setMessage("");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage(
        "No pudimos confirmar el envío del reporte. Intenta de nuevo en unos minutos."
      );
    }
  };

  return (
    <section
      id="reportes"
      className="min-h-[60vh] flex flex-col justify-center bg-white border-t border-gray-100 py-12"
    >
      <div className="max-w-2xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 font-[family:var(--font-display)]">
            ¿Encontraste un problema o tienes una idea?
          </h2>
          <p className="text-sm text-gray-500">
            Tu reporte nos ayuda a mejorar la plataforma.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6"
        >
          <motion.div variants={fadeUp} className="flex gap-2 mb-4">
            <motion.button
              type="button"
              onClick={() => setType("problema")}
              whileHover={{ scale: 1.05, backgroundColor: type !== "problema" ? "#fef2f2" : undefined }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                type === "problema"
                  ? "bg-red-50 text-red-600 border-red-200"
                  : "bg-white text-gray-500 border-gray-200 hover:border-red-200"
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Problema
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setType("sugerencia")}
              whileHover={{ scale: 1.05, backgroundColor: type !== "sugerencia" ? "#fffbeb" : undefined }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                type === "sugerencia"
                  ? "bg-amber-50 text-amber-600 border-amber-200"
                  : "bg-white text-gray-500 border-gray-200 hover:border-amber-200"
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              Sugerencia
            </motion.button>
          </motion.div>

          <motion.div variants={fadeUp}>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Cuéntanos qué pasó o qué te gustaría mejorar."
              className="w-full min-h-[100px] rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none focus:border-dian-navy focus:bg-white transition-colors"
              maxLength={2000}
              required
            />
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-end gap-3 mt-3">
            <div className="flex-1">
              <label className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                <Mail className="w-3 h-3" />
                Correo (opcional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="tucorreo@ejemplo.com"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 outline-none focus:border-dian-navy focus:bg-white transition-colors"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={status !== "sending" ? { scale: 1.05 } : undefined}
              whileTap={status !== "sending" ? { scale: 0.95 } : undefined}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                status === "sending"
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-dian-navy text-white hover:bg-dian-navy-light"
              }`}
            >
              <Send className="w-4 h-4" />
              Enviar
            </motion.button>
          </motion.div>

          <div className="mt-2 text-xs text-gray-500" aria-live="polite">
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.span
                  key="success"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-1 text-green-600"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Gracias. Tu reporte fue enviado.
                </motion.span>
              )}
              {errorMessage && (
                <motion.span
                  key="error"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-1 text-amber-600"
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  {errorMessage}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
