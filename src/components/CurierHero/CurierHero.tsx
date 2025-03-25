
import Link from "next/link"; // Використовуємо звичайний Next.js Link
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import styles from "./CurierHero.module.css";
import CalculateButton from "@/components/CalculateButton/CalculateButton";
import ButtonFormOnPage from "@/components/ButtonFormOnPage/ButtonFormOnPage";

const CurierHero = () => {
  const t = useTranslations("courier");
  const locale = useLocale(); // Отримуємо поточну локаль
 
  return (
    <section id="hero" className={styles.body}>
      <div className={styles.heroImg}></div>
      <div className={styles.cont}>
        <div className={styles.textCont}>
          <h1 className={styles.title}>{t("courierTitle")}</h1>
          <p className={styles.descr}>{t("courierDescription")}</p>
        </div>
        <div className={styles.btnCont}>
         
          
            
           {/* <CalculateButton>{t("calculate")}</CalculateButton>
          <ButtonFormOnPage>{t("apply")}</ButtonFormOnPage> */}
        </div>
      </div>
    </section>
  );
};

export default CurierHero;

