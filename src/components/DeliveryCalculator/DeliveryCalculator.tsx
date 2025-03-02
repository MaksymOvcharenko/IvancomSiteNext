import { useState } from "react";
import Image from "next/image";
import styles from "./DeliveryCalculator.module.css";
import SvgIcon from "../SvgIcon";
import { useTranslations } from "next-intl";
import CalculatorPLtoUA from "./CalculatorPLtoUA/CalculatorPLtoUA";
import CalculatorUatoPL from "./CalculatorPLtoUA/CalculatorUatoPl";




const DeliveryCalculator = () => {
  const [selectedCalculator, setSelectedCalculator] = useState<"PLtoUA" | "UAtoPL" | null>(null);
const t = useTranslations('Calculator');
  return (
     <div className={styles.container}>
      

      {!selectedCalculator ? (
        <>
          <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.description}>{t("description")}</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <button className={styles.link} onClick={() => setSelectedCalculator("PLtoUA")}>
                {t("fromPoland")} <SvgIcon name="sparow" /> {t("toUkraine")}
              </button>
            </li>
            <li className={styles.listItem}>
              <button className={styles.link} onClick={() => setSelectedCalculator("UAtoPL")}>
                {t("fromUkraine")} <SvgIcon name="sparow" /> {t("toPoland")}
              </button>
            </li>
          </ul>
        </>
      ) : (
        <div className={styles.calculatorContainer}>
          {selectedCalculator === "PLtoUA" && <CalculatorPLtoUA />}
          {selectedCalculator === "UAtoPL" && <CalculatorUatoPL />}
          <button className={styles.backButton} onClick={() => setSelectedCalculator(null)}>
            {t("back")}
          </button>
        </div>
      )}
    </div>
  );
};

export default DeliveryCalculator;
