// "use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./TrackingButton.module.css";
import pixelEvents from "@/pixelEvents";

interface TrackingButtonProps {
  setModalFormIsOpen: (isOpen: boolean) => void;
}

export default function TrackingButton({ setModalFormIsOpen }: TrackingButtonProps) {
  const t = useTranslations("Header");

  const handleClick = () => {
    pixelEvents.addToCart();
    setModalFormIsOpen(true);
  };

  return (
    <button onClick={handleClick} className={styles.btn}>
      <div className={styles.formIcon}>
        <Image
          src="/icons/track.svg"
          alt="Відправити з Польщі"
          width={40}
          height={40}
        />
      </div>
      <p className={styles.formTitle}>{t("track")}</p>
    </button>
  );
}
