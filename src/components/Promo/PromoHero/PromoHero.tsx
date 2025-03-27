
import Link from "next/link"; // Використовуємо звичайний Next.js Link
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import styles from "./PromoHero.module.css";


const PromoHero = () => {
  const t = useTranslations("promo");
  const locale = useLocale(); // Отримуємо поточну локаль
 
  return (
    <section id="hero" className={styles.body}>
      <div className={styles.heroImg}></div>
      <div className={styles.cont}>
        <div className={styles.textCont}>
          <h1 className={styles.title}>{t("title")}</h1>
          <p className={styles.descr}>{t("description")}</p>
        </div>
        <div className={styles.btnCont}>
         
          
            
  
        </div>
      </div>
    </section>
  );
};

export default PromoHero;

