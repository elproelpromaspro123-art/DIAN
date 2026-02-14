'use client';

import { useState, useSyncExternalStore } from "react";
import styles from './ConstructionNotice.module.css';
import { getLatestSourceCheckLabel } from "@/data/sourceHealth";

interface ConstructionNoticeProps {
  enabled?: boolean;
}

const STORAGE_KEY = "constructionNoticeClosed";
const emptySubscribe = () => () => {};

export default function ConstructionNotice({ enabled = true }: ConstructionNoticeProps) {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(STORAGE_KEY) !== "true";
  });
  const [showToggleButton, setShowToggleButton] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(STORAGE_KEY) === "true";
  });
  const latestCheckLabel = getLatestSourceCheckLabel();

  const handleContinue = () => {
    setIsVisible(false);
    setShowToggleButton(true);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const handleReshow = () => {
    setIsVisible(true);
    setShowToggleButton(false);
  };

  if (!mounted || !enabled) return null;

  return (
    <>
      {/* Main Notice Modal */}
      <div className={`${styles.noticeOverlay} ${isVisible ? styles.active : ''}`}>
        <div className={styles.noticeContainer}>
          {/* Animated Background Elements */}
          <div className={styles.backgroundGradient}></div>
          <div className={styles.floatingParticles}>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={styles.particle}
                style={{
                  animationDelay: `${i * 0.3}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Content */}
          <div className={styles.noticeContent}>
            {/* Animated Icon */}
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={styles.buildingIcon}
                >
                  <path d="M7 10v10h10V10" />
                  <path d="M7 7h10" />
                  <path d="M10 10v10" />
                  <path d="M14 10v10" />
                  <rect x="8" y="14" width="2" height="2" fill="currentColor" />
                  <rect x="12" y="14" width="2" height="2" fill="currentColor" />
                  <rect x="8" y="18" width="2" height="2" fill="currentColor" />
                  <rect x="12" y="18" width="2" height="2" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className={styles.title}>
              <span className={styles.titleLine}>Página</span>
              <span className={styles.titleLine}>Terminada ✓</span>
            </h1>

            {/* Subtitle */}
            <p className={styles.subtitle}>
              ¡La experiencia está lista para ti!
            </p>

            {/* Progress Section */}
            <div className={styles.progressSection}>
              <h2 className={styles.progressTitle}>Completado:</h2>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.progressIndicator}>
                    <span className={styles.progressDot} style={{ background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', boxShadow: '0 0 8px rgba(22, 163, 74, 0.5)' }}></span>
                    <span className={styles.progressLabel} style={{ color: '#16a34a' }}>Terminado</span>
                  </span>
                  <span>Animaciones y transiciones interactivas en toda la experiencia</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.progressIndicator}>
                    <span className={styles.progressDot} style={{ background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', boxShadow: '0 0 8px rgba(22, 163, 74, 0.5)' }}></span>
                    <span className={styles.progressLabel} style={{ color: '#16a34a' }}>Terminado</span>
                  </span>
                  <span>Estudio interactivo con progreso y práctica guiada</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.progressIndicator}>
                    <span className={styles.progressDot} style={{ background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', boxShadow: '0 0 8px rgba(22, 163, 74, 0.5)' }}></span>
                    <span className={styles.progressLabel} style={{ color: '#16a34a' }}>Terminado</span>
                  </span>
                  <span>Simulacro interactivo con puntaje, tiempo e historial</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.progressIndicator}>
                    <span className={styles.progressDot} style={{ background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', boxShadow: '0 0 8px rgba(22, 163, 74, 0.5)' }}></span>
                    <span className={styles.progressLabel} style={{ color: '#16a34a' }}>Terminado</span>
                  </span>
                  <span>Fuentes oficiales verificadas automáticamente por última vez: {latestCheckLabel}</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.progressIndicator}>
                    <span className={styles.progressDot} style={{ background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', boxShadow: '0 0 8px rgba(22, 163, 74, 0.5)' }}></span>
                    <span className={styles.progressLabel} style={{ color: '#16a34a' }}>Terminado</span>
                  </span>
                  <span>Mejoras técnicas y de contenido en proceso continuo</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleContinue}
              className={styles.continueButton}
            >
              <span className={styles.buttonText}>Continuar y Explorar</span>
              <span className={styles.buttonArrow}>→</span>
            </button>

            {/* Info Text */}
            <p className={styles.infoText}>
              Puedes volver a ver este aviso en cualquier momento
            </p>
          </div>
        </div>
      </div>

      {/* Floating Toggle Button (When closed) */}
      {showToggleButton && (
        <button
          onClick={handleReshow}
          className={styles.toggleButton}
          title="Mostrar aviso de construcción"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7 10v10h10V10" />
            <path d="M7 7h10" />
            <path d="M10 10v10" />
            <path d="M14 10v10" />
            <circle cx="9" cy="15" r="1.5" fill="currentColor" />
            <circle cx="13" cy="15" r="1.5" fill="currentColor" />
            <circle cx="9" cy="19" r="1.5" fill="currentColor" />
            <circle cx="13" cy="19" r="1.5" fill="currentColor" />
          </svg>
          <span className={styles.tooltipText}>Aviso de Construcción</span>
        </button>
      )}
    </>
  );
}
