// import { useState } from "react";

// import styles from "./styles/CalculatorPLtoUA.module.css";
// import Package from "./Package";
// import Result from "./Result";

// interface PackageData {
//   id: number;
// }

// interface CalculationResult {
//   totalCost: number;
//   insurance: number;
//   totalWeight: number;
// }

// const CalculatorPLtoUA: React.FC = () => {
//   const [packages, setPackages] = useState<PackageData[]>([{ id: 1 }]);
//   const [value, setValue] = useState<string>("");
//   const [result, setResult] = useState<CalculationResult | null>(null);

//   const addPackage = () => {
//     setPackages((prev) => [...prev, { id: prev.length + 1 }]);
//   };

//   const removePackage = (id: number) => {
//     setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
//   };

//   const calculate = () => {
//     let totalWeight = 0;
//     let totalCost = 0;

//     packages.forEach((pkg) => {
//       const length = parseFloat((document.getElementById(`length${pkg.id}`) as HTMLInputElement)?.value) || 0;
//       const width = parseFloat((document.getElementById(`width${pkg.id}`) as HTMLInputElement)?.value) || 0;
//       const height = parseFloat((document.getElementById(`height${pkg.id}`) as HTMLInputElement)?.value) || 0;
//       const weight = parseFloat((document.getElementById(`weight${pkg.id}`) as HTMLInputElement)?.value) || 0;

//       const volumetricWeight = (length * width * height) / 4000;
//       const finalWeight = Math.max(weight, volumetricWeight);
//       totalWeight += finalWeight;

//       let cost = finalWeight <= 5 ? 55 : finalWeight * 5.5;
//       if (length > 120 || width > 120 || height > 120) cost += 6;
//       if (finalWeight > 30) cost += 12;

//       totalCost += cost;
//     });

//     const insuranceValue = parseFloat(value) || 0;
//     const insurance = insuranceValue <= 1000 ? insuranceValue * 0.01 : 10 + (insuranceValue - 1000) * 0.11;
//     totalCost += insurance;

//     setResult({ totalCost, insurance, totalWeight });
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title} >Калькулятор доставки</h1>
//       <div className={styles.package}>
//         {packages.map((pkg) => (
//           <Package key={pkg.id} id={pkg.id} removePackage={removePackage} addPackage={addPackage} />
//         ))}
//       </div>
   

//       <div className={styles.valuation}>
//         <label className={styles.label}>Оціночна вартість (зл):</label>
//         <input
//           type="number"
//           className={styles.input}
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//          />
//       </div>

//       <button className={styles.calculateButton} onClick={calculate}>Розрахувати</button>

//       {result && <Result result={result} />}
//     </div>
//   );
// };

// export default CalculatorPLtoUA;
// import { useState } from "react";
// import styles from "./styles/CalculatorPLtoUA.module.css";
// import Package from "./Package";
// import Result from "./Result";

// interface PackageData {
//   id: number;
// }

// interface CalculationResult {
//   totalCost: number;
//   insurance: number;
//   totalWeight: number;
//   details: { id: number; cost: number; volumetricWeight: number; finalWeight: number; extraCharges: string[] }[];
// }

// const CalculatorPLtoUA: React.FC = () => {
//   const [packages, setPackages] = useState<PackageData[]>([{ id: 1 }]);
//   const [value, setValue] = useState<string>("");
//   const [result, setResult] = useState<CalculationResult | null>(null);

//   const addPackage = () => {
//     setPackages((prev) => [...prev, { id: prev.length + 1 }]);
//   };

//   const removePackage = (id: number) => {
//     setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
//   };

//   const calculate = () => {
//     let totalWeight = 0;
//     let totalVolumetricWeight = 0;
//     let totalCost = 0;
//     let details: CalculationResult["details"] = [];

//     packages.forEach((pkg) => {
//       const length = parseFloat((document.getElementById(`length${pkg.id}`) as HTMLInputElement)?.value) || 0;
//       const width = parseFloat((document.getElementById(`width${pkg.id}`) as HTMLInputElement)?.value) || 0;
//       const height = parseFloat((document.getElementById(`height${pkg.id}`) as HTMLInputElement)?.value) || 0;
//       const weight = parseFloat((document.getElementById(`weight${pkg.id}`) as HTMLInputElement)?.value) || 0;

//       const volumetricWeight = (length * width * height) / 4000;
//       totalVolumetricWeight += volumetricWeight;
//       const finalWeight = Math.max(weight, volumetricWeight);
//       totalWeight += finalWeight;

//       let cost = 0;
//       if (finalWeight <= 5) {
//         cost = 55;
//       } else if (finalWeight <= 10) {
//         cost = 70;
//       } else if (finalWeight <= 15) {
//         cost = 90;
//       } else if (finalWeight <= 20) {
//         cost = 110;
//       } else if (finalWeight <= 25) {
//         cost = 130;
//       } else {
//         cost = finalWeight * 5.5;
//       }

//       let extraCharges: string[] = [];
//       if (length > 120 || width > 120 || height > 120) {
//         cost += 6;
//         extraCharges.push("+6 zł за перевищення 120 см");
//       }
//       if (finalWeight > 30) {
//         cost += 12;
//         extraCharges.push("+12 zł за вагу більше 30 кг");
//       }

//       totalCost += cost;
//       details.push({ id: pkg.id, cost, volumetricWeight, finalWeight, extraCharges });
//     });

//     const insuranceValue = parseFloat(value) || 0;
//     let insurance = insuranceValue <= 1000 ? insuranceValue * 0.01 : 10 + (insuranceValue - 1000) * 0.11;
//     totalCost += insurance;

//     setResult({ totalCost, insurance, totalWeight, details });
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Калькулятор доставки</h1>
//       <div className={styles.package}>
//         {packages.map((pkg) => (
//           <Package key={pkg.id} id={pkg.id} removePackage={removePackage} addPackage={addPackage} />
//         ))}
//       </div>

//       <div className={styles.valuation}>
//         <label className={styles.label}>Оціночна вартість (зл):</label>
//         <input type="number" className={styles.input} value={value} onChange={(e) => setValue(e.target.value)} />
//       </div>

//       <button className={styles.calculateButton} onClick={calculate}>Розрахувати</button>

//       {result && <Result result={result} />}
//     </div>
//   );
// };

// export default CalculatorPLtoUA;
import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./styles/CalculatorPLtoUA.module.css";
import Package from "./Package";
import Result from "./Result";

interface PackageData {
  id: number;
}

interface CalculationResult {
  totalCost: number;
  insurance: number;
  totalWeight: number;
  details: { id: number; cost: number; volumetricWeight: number; finalWeight: number; extraCharges: string[] }[];
}

const CalculatorPLtoUA: React.FC = () => {
  const t = useTranslations("Calculator");
  const [packages, setPackages] = useState<PackageData[]>([{ id: 1 }]);
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const addPackage = () => {
    setPackages((prev) => [...prev, { id: prev.length + 1 }]);
  };

  const removePackage = (id: number) => {
    setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
  };

  const calculate = () => {
    let totalWeight = 0;
    let totalVolumetricWeight = 0;
    let totalCost = 0;
    let details: CalculationResult["details"] = [];

    packages.forEach((pkg) => {
      const length = parseFloat((document.getElementById(`length${pkg.id}`) as HTMLInputElement)?.value) || 0;
      const width = parseFloat((document.getElementById(`width${pkg.id}`) as HTMLInputElement)?.value) || 0;
      const height = parseFloat((document.getElementById(`height${pkg.id}`) as HTMLInputElement)?.value) || 0;
      const weight = parseFloat((document.getElementById(`weight${pkg.id}`) as HTMLInputElement)?.value) || 0;

      const volumetricWeight = (length * width * height) / 4000;
      totalVolumetricWeight += volumetricWeight;
      const finalWeight = Math.max(weight, volumetricWeight);
      totalWeight += finalWeight;

      let cost = 0;
      if (finalWeight <= 5) {
        cost = 55;
      } else if (finalWeight <= 10) {
        cost = 70;
      } else if (finalWeight <= 15) {
        cost = 90;
      } else if (finalWeight <= 20) {
        cost = 110;
      } else if (finalWeight <= 25) {
        cost = 130;
      } else {
        cost = finalWeight * 5.5;
      }

      let extraCharges: string[] = [];
      if (length > 120 || width > 120 || height > 120) {
        cost += 6;
        extraCharges.push(t("extraChargeLarge"));
      }
      if (finalWeight > 30) {
        cost += 12;
        extraCharges.push(t("extraChargeHeavy"));
      }

      totalCost += cost;
      details.push({ id: pkg.id, cost, volumetricWeight, finalWeight, extraCharges });
    });

    const insuranceValue = parseFloat(value) || 0;
    let insurance = insuranceValue <= 1000 ? insuranceValue * 0.01 : 10 + (insuranceValue - 1000) * 0.11;
    totalCost += insurance;

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
        <label className={styles.label}>{t("valuationLabel")}</label>
        <input type="number" className={styles.input} value={value} onChange={(e) => setValue(e.target.value)} />
      </div>

      <button className={styles.calculateButton} onClick={calculate}>{t("calculateButton")}</button>

      {result && <Result result={result} />}
    </div>
  );
};

export default CalculatorPLtoUA;
