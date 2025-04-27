
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./styles/CalculatorPLtoUA.module.css";
import Package from "./Package";
import Result from "./Result";
import SvgIcon from "@/components/SvgIcon";
import pixelEvents from "@/pixelEvents";


interface PackageData {
  id: number;
}

interface PackageDetail {
  id: number;
  cost: number; // робимо обов'язковим
  volumetricWeight: number;
  finalWeight: number;
  extraCharges?: string[];
}

interface CalculationResult {
  totalCost: number;
  insurance: number;
  totalWeight: number;
  details: { id: number; cost: number; volumetricWeight: number; finalWeight: number; extraCharges: string[] }[];
}

const CalculatorUatoPL: React.FC = () => {
  const t = useTranslations("Calculator");
  const [packages, setPackages] = useState<PackageData[]>([{ id: 1 }]);
  const [value, setValue] = useState<string>("");
  const [isDeliveryInPoland, setIsDeliveryInPoland] = useState<boolean>(false);
  const [isCommerce, setIsCommerce] = useState<boolean>(false);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);
  const addPackage = () => {
    setPackages((prev) => [...prev, { id: prev.length + 1 }]);
  };

  const removePackage = (id: number) => {
    setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
  };
   useEffect(() => {
  if (result) {
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100); // невелика пауза для безпечного рендеру
  }
}, [result]);
  // const calculate = () => {
  //   let totalWeight = 0;
  //   let totalVolumetricWeight = 0;
  //   let totalCost = 0;
  //   let details: CalculationResult["details"] = [];

  //   const declaredValue = parseFloat(value) || 0;
  //   let insurance = (declaredValue / 10) * 0.03;

  //   packages.forEach((pkg) => {
  //     const length = parseFloat((document.getElementById(`length${pkg.id}`) as HTMLInputElement)?.value) || 0;
  //     const width = parseFloat((document.getElementById(`width${pkg.id}`) as HTMLInputElement)?.value) || 0;
  //     const height = parseFloat((document.getElementById(`height${pkg.id}`) as HTMLInputElement)?.value) || 0;
  //     const weight = parseFloat((document.getElementById(`weight${pkg.id}`) as HTMLInputElement)?.value) || 0;

  //     const volumetricWeight = (length * width * height) / 4000;
  //     totalVolumetricWeight += volumetricWeight;
  //     const finalWeight = Math.max(weight, volumetricWeight);
  //     totalWeight += finalWeight;

  //     details.push({ id: pkg.id, volumetricWeight, finalWeight, cost: 0, extraCharges: [] });
  //   }); // Ось тут закриваємо `forEach`

  //   const finalTotalWeight = Math.max(totalWeight, totalVolumetricWeight);
  //   let cost = 0;

  //   if (isDeliveryInPoland) {
  //     cost = isCommerce
  //       ? finalTotalWeight < 2.01
  //         ? 100
  //         : finalTotalWeight < 5.01
  //         ? 130
  //         : 130 + (finalTotalWeight - 5) * 11
  //       : finalTotalWeight < 2.01
  //       ? 60
  //       : finalTotalWeight < 5.01
  //       ? 80
  //       : finalTotalWeight < 10.1
  //       ? 110
  //       : finalTotalWeight < 15.01
  //       ? 130
  //       : finalTotalWeight < 20.01
  //       ? 150
  //       : finalTotalWeight < 30.01
  //       ? 190
  //       : finalTotalWeight * 7;
  //   } else {
  //     cost = isCommerce
  //       ? finalTotalWeight < 2.01
  //         ? 80
  //         : finalTotalWeight < 5.01
  //         ? 100
  //         : 100 + (finalTotalWeight - 5) * 10
  //       : finalTotalWeight < 2.01
  //       ? 40
  //       : finalTotalWeight < 5.01
  //       ? 60
  //       : finalTotalWeight < 10.1
  //       ? 80
  //       : finalTotalWeight < 15.01
  //       ? 100
  //       : finalTotalWeight < 20.01
  //       ? 120
  //       : finalTotalWeight < 30.01
  //       ? 150
  //       : finalTotalWeight * 5;
  //   }

  //   totalCost = cost + insurance;
  //   setResult({ totalCost, insurance, totalWeight, details });

  // };
const calculate = () => {
  let totalWeight = 0;
  let totalVolumetricWeight = 0;
  let totalCost = 0;
  let details: CalculationResult["details"] = [];

  const declaredValue = parseFloat(value) || 0;
  let insurance = 0;
  pixelEvents.addToCart();
  packages.forEach((pkg) => {
    const length = parseFloat((document.getElementById(`length${pkg.id}`) as HTMLInputElement)?.value) || 0;
    const width = parseFloat((document.getElementById(`width${pkg.id}`) as HTMLInputElement)?.value) || 0;
    const height = parseFloat((document.getElementById(`height${pkg.id}`) as HTMLInputElement)?.value) || 0;
    const weight = parseFloat((document.getElementById(`weight${pkg.id}`) as HTMLInputElement)?.value) || 0;

    const volumetricWeight = (length * width * height) / 4000;
    totalVolumetricWeight += volumetricWeight;
    const finalWeight = Math.max(weight, volumetricWeight);
    totalWeight += finalWeight;

    details.push({ id: pkg.id, volumetricWeight, finalWeight, cost: 0, extraCharges: [] });
  });

  const finalTotalWeight = Math.max(totalWeight, totalVolumetricWeight);
  let cost = 0;

  // === СТРАХОВКА ===
  if (declaredValue > 50000.01) {
    insurance = (declaredValue / 10) * 0.01;
  } else {
    insurance = (declaredValue / 10) * 0.03;
  }

  // === ВАРТІСТЬ ДОСТАВКИ ===
  if (isDeliveryInPoland) {
    if (declaredValue < 12000.01) {
      if (isCommerce) {
        cost = finalTotalWeight < 2.01 ? 100
             : finalTotalWeight < 5.01 ? 130
             : 130 + (finalTotalWeight - 5) * 11;
      } else {
        cost = finalTotalWeight < 2.01 ? 60
             : finalTotalWeight < 5.01 ? 80
             : finalTotalWeight < 10.1 ? 110
             : finalTotalWeight < 15.01 ? 130
             : finalTotalWeight < 20.01 ? 150
             : finalTotalWeight < 30.01 ? 190
             : finalTotalWeight * 7;
      }
    } else if (declaredValue < 50000.01) {
      cost = finalTotalWeight < 2.01 ? 100
           : finalTotalWeight < 5.01 ? 130
           : 130 + (finalTotalWeight - 5) * 11;
    } else {
      cost = finalTotalWeight < 2.01 ? 100
           : 100 + (finalTotalWeight - 2) * 20;
    }
  } else {
    if (declaredValue < 12000.01) {
      if (isCommerce) {
        cost = finalTotalWeight < 2.01 ? 80
             : finalTotalWeight < 5.01 ? 100
             : 100 + (finalTotalWeight - 5) * 10;
      } else {
        cost = finalTotalWeight < 2.01 ? 40
             : finalTotalWeight < 5.01 ? 60
             : finalTotalWeight < 10.1 ? 80
             : finalTotalWeight < 15.01 ? 100
             : finalTotalWeight < 20.01 ? 120
             : finalTotalWeight < 30.01 ? 150
             : finalTotalWeight * 5;
      }
    } else if (declaredValue < 50000.01) {
      cost = finalTotalWeight < 2.01 ? 80
           : finalTotalWeight < 5.01 ? 100
           : 100 + (finalTotalWeight - 5) * 10;
    } else {
      cost = finalTotalWeight < 2.01 ? 100
           : 100 + (finalTotalWeight - 2) * 20;
    }
  }

  totalCost = cost + insurance;
  setResult({ totalCost, insurance, totalWeight, details });
};

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("title")}</h1>
      <div className={styles.package}>
        {packages.map((pkg) => (
          <Package key={pkg.id} id={pkg.id} removePackage={removePackage} addPackage={addPackage} />
        ))}
      </div>

      <div className={styles.valuation}>
        <label className={styles.label}>{t("valuationLabelUA")}</label>
        <input
          type="number"
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      
       <div className={styles.checkboxGroup}>
  <label className={styles.checkLabel}>
    <input
      type="checkbox"
      className={styles.visuallyHidden}
      checked={isDeliveryInPoland}
      onChange={() => setIsDeliveryInPoland(!isDeliveryInPoland)}
    />
    <span className={styles.spanCheckbox}>
      <svg className={styles.svg} width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.39573 8.08144L1.11748 5.32189C0.994714 5.17319 0.828213 5.08966 0.654602 5.08966C0.480991 5.08966 0.31449 5.17319 0.191728 5.32189C0.0689668 5.47058 0 5.67226 0 5.88255C0 5.98667 0.0169319 6.08977 0.0498287 6.18597C0.0827256 6.28217 0.130943 6.36958 0.191728 6.4432L2.93614 9.76739C3.1922 10.0775 3.60583 10.0775 3.86189 9.76739L10.8083 1.35355C10.931 1.20485 11 1.00318 11 0.79289C11 0.582602 10.931 0.380928 10.8083 0.232232C10.6855 0.0835365 10.519 0 10.3454 0C10.1718 0 10.0053 0.0835365 9.88253 0.232232L3.39573 8.08144Z" fill="#05173B" />
      </svg>
    </span>
    {t("deliveryInPoland")}
  </label>

  <label className={styles.checkLabel}>
    <input
      type="checkbox"
      className={styles.visuallyHidden}
      checked={isCommerce}
      onChange={() => setIsCommerce(!isCommerce)}
    />
    <span className={styles.spanCheckbox}>
      <svg className={styles.svg} width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.39573 8.08144L1.11748 5.32189C0.994714 5.17319 0.828213 5.08966 0.654602 5.08966C0.480991 5.08966 0.31449 5.17319 0.191728 5.32189C0.0689668 5.47058 0 5.67226 0 5.88255C0 5.98667 0.0169319 6.08977 0.0498287 6.18597C0.0827256 6.28217 0.130943 6.36958 0.191728 6.4432L2.93614 9.76739C3.1922 10.0775 3.60583 10.0775 3.86189 9.76739L10.8083 1.35355C10.931 1.20485 11 1.00318 11 0.79289C11 0.582602 10.931 0.380928 10.8083 0.232232C10.6855 0.0835365 10.519 0 10.3454 0C10.1718 0 10.0053 0.0835365 9.88253 0.232232L3.39573 8.08144Z" fill="#05173B" />
      </svg>
    </span>
    {t("commerce")}
  </label>
</div>




      <button className={styles.calculateButton} onClick={calculate}>
        {t("calculateButton")}
      </button>

      <div ref={resultRef}>{result && <Result result={result} />}</div>
    </div>
  );
};

export default CalculatorUatoPL;

