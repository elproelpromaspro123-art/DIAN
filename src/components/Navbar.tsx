"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Archive,
  Briefcase,
  ClipboardList,
  ExternalLink,
  Info,
  Menu,
  MessageSquare,
  NotebookPen,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/#resumen", label: "Resumen", icon: Info },
  { href: "/#cargos", label: "Cargos", icon: Briefcase },
  { href: "/#recursos", label: "Recursos", icon: Archive },
  { href: "/#estudio", label: "Estudio", icon: NotebookPen },
  { href: "/#simulacros", label: "Simulacros", icon: ClipboardList },
  { href: "/#reportes", label: "Reportes", icon: MessageSquare },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <nav className="bg-white/90 text-dian-navy shadow-sm sticky top-0 z-50 border-b border-dian-navy/10 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            prefetch={false}
            className="flex items-center gap-2.5 font-bold text-lg"
          >
            <Image
              src="/brand/logo.png"
              alt="Prepárate DIAN"
              width={36}
              height={36}
              className="rounded-md"
              priority
            />
            <span className="hidden sm:inline text-[1.08rem] leading-none">Prepárate DIAN</span>
            <span className="sm:hidden">DIAN 2676</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  className="hover:text-dian-navy-light transition-colors flex items-center gap-1.5"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="https://simo.cnsc.gov.co/#/ofertaEmpleo"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dian-navy text-white hover:bg-dian-navy-light px-3 py-1.5 rounded-lg transition-colors text-xs flex items-center gap-1.5 shadow-sm"
            >
              SIMO Oficial
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-dian-navy/10"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-dian-navy/10"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      prefetch={false}
                      onClick={() => setMenuOpen(false)}
                      role="menuitem"
                      className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-dian-navy/10 transition-colors text-base text-dian-navy"
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <Link
                  href="https://simo.cnsc.gov.co/#/ofertaEmpleo"
                  prefetch={false}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  role="menuitem"
                  className="flex items-center gap-3 py-3 px-4 rounded-xl bg-dian-navy text-white transition-colors text-base hover:bg-dian-navy-light"
                >
                  <ExternalLink className="w-5 h-5" />
                  SIMO Oficial
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
