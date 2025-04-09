import ButtonFormOnPage from "@/components/ButtonFormOnPage2/ButtonFormOnPage";
import styles from "./BicylesEuUa.module.css";

import { FiBox } from "react-icons/fi";
import { LiaCoinsSolid } from "react-icons/lia";
import AttentionBlock from "@/components/AttentionBlock/AttentionBlock";
import SelectorEuUa from "./SelectorEuUa/SelectorEuUa";
import { useTranslations } from "next-intl";

export type BicycleTariff = {
  title: string;
  price: string;
  note: string;
  subNoteTitle?: string;
  subNoteText?: string;
};
// export const bicyclesTariffs: BicycleTariff[] = [
//   {
//     title: "Дитячий велосипед (радіус коліс до R24)",
//     price: "250 zł",
//     note: "Тариф дійсний для відправлень до Польщі. Вартість доставки в інші країни уточнюйте у менеджера.",
//     subNoteTitle: "Страхування посилки:",
//     subNoteText: "+1% від оголошеної вартості",
//   },
//   {
//     title: "Дорослий велосипед (радіус коліс від R25)",
//     price: "300 zł",
//     note: "Тариф дійсний для відправлень до Польщі. Вартість доставки в інші країни уточнюйте у менеджера.",
//     subNoteTitle: "Страхування посилки:",
//     subNoteText: "+1% від оголошеної вартості",
//   },
//   {
//     title: "Електровелосипеди",
//     price: "*5 zł/kg",
//     note: "Рахується від фактичної або обʼємної ваги",
//     subNoteTitle: "Страхування посилки:",
//     subNoteText: "+1% від оголошеної вартості",
//   },
// ];



const BicyclesEuUa = () => {
    const t = useTranslations("EuUa.BicyclesEuUa");
    const bicyclesTariffs: BicycleTariff[] = [
  {
    title: t("tariffs.0.title"),
    price: t("tariffs.0.price"),
    note: t("tariffs.0.note"),
    subNoteTitle: t("tariffs.0.subNoteTitle"),
    subNoteText: t("tariffs.0.subNoteText"),
  },
  {
    title: t("tariffs.1.title"),
    price: t("tariffs.1.price"),
    note: t("tariffs.1.note"),
    subNoteTitle: t("tariffs.1.subNoteTitle"),
    subNoteText: t("tariffs.1.subNoteText"),
  },
  {
    title: t("tariffs.2.title"),
    price: t("tariffs.2.price"),
    note: t("tariffs.2.note"),
    subNoteTitle: t("tariffs.2.subNoteTitle"),
    subNoteText: t("tariffs.2.subNoteText"),
  },
];
const attentionTexts = [
  { text: t("attention.0") },
  { text: t("attention.1") },
  { text: t("attention.2") },
  { text: t("attention.3") },
  { text: t("attention.4") },
];

  return (
    <div className={styles.wrapper}>
      <p className={styles.subtitle}>
        <p className={styles.subtitle}>{t("subtitle")}</p>
      </p>

      <div className={styles.cardList}>
        {bicyclesTariffs.map((item, idx) => (
          <div className={styles.card} key={idx}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.price}>
              <LiaCoinsSolid /> {item.price}
            </p>
            <p className={styles.note}>{item.note}</p>
            {item.subNoteTitle && item.subNoteText && (
              <div className={styles.subNote}>
                <p>
                  <strong>{item.subNoteTitle}</strong>
                </p>
                <p>{item.subNoteText}</p>
              </div>
            )}
            <ButtonFormOnPage defaultForm="world_to_ukraine">
              Заповнити форму
            </ButtonFormOnPage>
          </div>
        ))}
      </div>

      <p className={styles.subtitle}>
        <p className={styles.subtitle}>{t("subtitle2")}</p>
      </p>
      <AttentionBlock items={attentionTexts} />
       <p className={styles.subtitle}>{t("subtitle3")}</p>
          <SelectorEuUa/>
    </div>
  );
};

export default BicyclesEuUa;
