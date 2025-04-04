import React from "react";
import s from "./WeightPriceTable.module.css";

type WeightItem = {
  weightRange: string;
  price: string;
};

type Props = {
  title: string;
  weightPrices: WeightItem[];
};

const WeightPriceTable: React.FC<Props> = ({ title, weightPrices }) => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>{title}</h3>
      <ul className={s.list}>
        {weightPrices.map((item, idx) => (
          <li className={s.item} key={idx}>
            <div className={s.weight}>{item.weightRange}</div>
            <div className={s.price}>{item.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeightPriceTable;
//  const weightPrices = [
//     { weightRange: t("range1"), price: t("price1") },
//     { weightRange: t("range2"), price: t("price2") },
//     { weightRange: t("range3"), price: t("price3") },
//     { weightRange: t("range4"), price: t("price4") },
//     { weightRange: t("range5"), price: t("price5") },
//     { weightRange: t("range6"), price: t("price6") },
//   ];
