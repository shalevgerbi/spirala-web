"use client";

import { useEffect, useState } from "react";
import styles from "./AccessibilityWidget.module.css";

type SettingKey =
  | "largeText"
  | "readableFont"
  | "highContrast"
  | "grayscale"
  | "pauseAnimations"
  | "highlightLinks"
  | "keyboardNavigation";

type AccessibilityState = Record<SettingKey, boolean>;

const defaultState: AccessibilityState = {
  largeText: false,
  readableFont: false,
  highContrast: false,
  grayscale: false,
  pauseAnimations: false,
  highlightLinks: false,
  keyboardNavigation: false,
};

const options: { key: SettingKey; label: string }[] = [
  { key: "largeText", label: "הגדלת גודל הטקסט" },
  { key: "readableFont", label: "גופן קריא" },
  { key: "highContrast", label: "ניגודיות גבוהה" },
  { key: "grayscale", label: "גווני אפור" },
  { key: "pauseAnimations", label: "עצירת הבהובים ואנימציות" },
  { key: "highlightLinks", label: "הדגשת קישורים" },
  { key: "keyboardNavigation", label: "ניווט בעזרת מקלדת" },
];

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(defaultState);

  useEffect(() => {
    const root = document.documentElement;
    options.forEach(({ key }) => {
      root.classList.toggle(`accessibility-${key}`, settings[key]);
    });

    return () => {
      options.forEach(({ key }) => root.classList.remove(`accessibility-${key}`));
    };
  }, [settings]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleSetting = (key: SettingKey) => {
    setSettings((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div className={styles.widget}>
      {isOpen && (
        <section id="accessibility-panel" className={styles.panel} aria-label="אפשרויות נגישות">
          <div className={styles.panelHeader}>
            <h2>אפשרויות נגישות</h2>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="סגירת אפשרויות נגישות"
            >
              ×
            </button>
          </div>

          <div className={styles.options}>
            {options.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                className={`${styles.option} ${settings[key] ? styles.active : ""}`}
                aria-pressed={settings[key]}
                onClick={() => toggleSetting(key)}
              >
                <span>{label}</span>
                <span className={styles.status} aria-hidden="true">
                  {settings[key] ? "✓" : ""}
                </span>
              </button>
            ))}
          </div>

          <button type="button" className={styles.resetButton} onClick={() => setSettings(defaultState)}>
            איפוס הגדרות הנגישות
          </button>
        </section>
      )}

      <button
        type="button"
        className={styles.toggle}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        aria-label="פתיחת אפשרויות נגישות"
        title="אפשרויות נגישות"
      >
        <svg className={styles.personIcon} viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="12.5" r="2.8" fill="currentColor" />
          <path d="M24 18v12m0-9-10-6m10 6 10-6m-10 15-7 10m7-10 7 10" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
