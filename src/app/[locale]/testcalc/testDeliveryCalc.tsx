"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./DeliveryCalculator.module.css";

import { useTranslations } from "next-intl";

import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import SvgIcon from "@/components/SvgIcon";
import CalculatorPLtoUA from "@/components/DeliveryCalculator/CalculatorPLtoUA/CalculatorPLtoUA";
import CalculatorSwitcher from "@/components/DeliveryCalculator/CalculatorPLtoUA/CalculatorSwitcher/CalculatorSwitcher";



interface DeliveryCalculatorProps {
  onClose: () => void;
 
}

const DeliveryCalculator:  React.FC<DeliveryCalculatorProps>=({ onClose }) => {
  const [selectedCalculator, setSelectedCalculator] = useState<"PLtoUA" | "UAtoPL" | null>(null);
const t = useTranslations('Calculator');
  return (
     <div className={styles.container}>
      <button  onClick={onClose}>
        <IconContext.Provider value={{ color: "#black", size: "36px" }}>
          <div className={styles.closeBtn}>
            <IoMdClose />
          </div>
        </IconContext.Provider>
      </button>

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
          {selectedCalculator === "UAtoPL" && <CalculatorSwitcher />}
          <button className={styles.backButton} onClick={() => setSelectedCalculator(null)}>
            {t("back")}
          </button>
        </div>
      )}
    </div>
  );
};

export default DeliveryCalculator;
