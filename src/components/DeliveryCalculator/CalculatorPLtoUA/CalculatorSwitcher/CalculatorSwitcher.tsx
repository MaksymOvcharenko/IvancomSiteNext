"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
 // твій існуючий файл

import styles from "./CalculatorSwitcher.module.css";
import MedsPlaceholder from "../MedsPlaceholder";
import CalculatorUatoPL from "../CalculatorUatoPl";

type TabKey = "parcel" | "meds";

export default function CalculatorSwitcher() {
  const t = useTranslations("CalcSwitch");
  const [tab, setTab] = useState<TabKey>("parcel");

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{t("title")}</h2>

      <div className={styles.tabs} role="tablist" aria-label={t("aria.calculatorType")}>
        <button
          role="tab"
          aria-selected={tab === "parcel"}
          className={`${styles.tab} ${tab === "parcel" ? styles.active : ""}`}
          onClick={() => setTab("parcel")}
        >
          {t("tabs.parcel")}
        </button>
        <button
          role="tab"
          aria-selected={tab === "meds"}
          className={`${styles.tab} ${tab === "meds" ? styles.active : ""}`}
          onClick={() => setTab("meds")}
        >
          {t("tabs.meds")}
        </button>
      </div>

      <div className={styles.panel} role="tabpanel">
        {tab === "parcel" ? <CalculatorUatoPL /> : <MedsPlaceholder />}
      </div>
    </div>
  );
}
