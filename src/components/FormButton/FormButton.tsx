"use client";
import { useTranslations } from "next-intl";
import Image from "next/image"; // Додай цей імпорт, якщо Image з next/image
import styles from "./FormButton.module.css";

export default function FormButton() {
  const t = useTranslations("Header");

  const handleClick = () => {
    console.log("Відкрити форму");
  };

  return (
    <button onClick={handleClick} className={styles.btn}>
      <div className={styles.formIcon}>
        <Image
          src="/icons/cube.svg"
          alt="Відправити з Польщі"
          width={40}
          height={40}
        />
      </div>
      <p className={styles.formTitle}>{t("form")}</p>
    </button>
  );
}
