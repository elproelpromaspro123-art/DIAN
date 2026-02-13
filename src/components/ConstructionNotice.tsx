'use client';

import { useState, useEffect } from 'react';
import styles from './ConstructionNotice.module.css';

interface ConstructionNoticeProps {
  enabled?: boolean;
}

export default function ConstructionNotice({ enabled = true }: ConstructionNoticeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isStorageLoaded, setIsStorageLoaded] = useState(false);

  useEffect(() => {
    // Load from localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('constructionNoticeEnabled');
      setIsVisible(stored !== 'false' && enabled);
      setIsStorageLoaded(true);
    }
  }, [enabled]);

  const handleContinue = () => {
    setIsVisible(false);
    localStorage.setItem('constructionNoticeEnabled', 'false');
  };

  const handleReshow = () => {
    setIsVisible(true);
    localStorage.setItem('constructionNoticeEnabled', 'true');
  };

  // Don't render until storage is loaded (hydration safe)
  if (!isStorageLoaded) return null;

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
              <span className={styles.titleLine}>Página en</span>
              <span className={styles.titleLine}>Construcción</span>
            </h1>

            {/* Subtitle */}
            <p className={styles.subtitle}>
              Estamos creando una experiencia increíble para ti
            </p>

            {/* Progress Section */}
            <div className={styles.progressSection}>
              <h2 className={styles.progressTitle}>En Desarrollo:</h2>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>Creando animaciones interactivas en toda la página entera (No terminado)</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>Creando estudio interactivo tipo juego con animaciones interactivas (No terminado)</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>Creando simulacro interactivo tipo juego con animaciones interactivas (No terminado)</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>Actualizar y verificar TODA la información de la página hasta la fecha actual y validar información oficial y verídica hasta la fecha (No terminado)</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>Corregir cualquier error de información en estudios y simulacro y arreglar errores técnicos (No terminado)</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleContinue}
              className={styles.continueButton}
            >
              <span className={styles.buttonText}>Continuar y Ver Adelantos</span>
              <span className={styles.buttonArrow}>→</span>
            </button>

            {/* Info Text */}
            <p className={styles.infoText}>
              Puedes volver a ver este aviso en cualquier momento
            </p>
          </div>
        </div>
      </div>

      {/* Floating Toggle Button (Always Visible) */}
      {!isVisible && (
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
            <rect x="8" y="14" width="2" height="2" fill="currentColor" />
            <rect x="12" y="14" width="2" height="2" fill="currentColor" />
            <rect x="8" y="18" width="2" height="2" fill="currentColor" />
            <rect x="12" y="18" width="2" height="2" fill="currentColor" />
          </svg>
          <span className={styles.tooltipText}>Aviso de Construcción</span>
        </button>
      )}
    </>
  );
}
