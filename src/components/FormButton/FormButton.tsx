// "use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./FormButton.module.css";

interface FormButtonProps {
  setModalFormIsOpen: (isOpen: boolean) => void;
}

export default function FormButton({ setModalFormIsOpen }: FormButtonProps) {
  const t = useTranslations("Header");

  const handleClick = () => {
    setModalFormIsOpen(true);
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
