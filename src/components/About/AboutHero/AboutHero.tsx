// import React from 'react'
// import styles from './AboutHero.module.css'
// import { useTranslations } from 'next-intl';
// import Image from 'next/image';

// const HeroAbout = () => {
//   const t = useTranslations('about');
//   return (
//     <><section id="hero" className={styles.body}>
//       <div className={styles.heroImg}>
// </div>
//       <div className={styles.cont}>
//         <div className={styles.textCont}>
//           <h1 className={styles.title}>{t("headline")}</h1>
//         <p className={styles.descr}>{t("description")}</p></div>
//         <div className={styles.btnCont}>
//           <button className={styles.calcBtn}>{t("calculate")}</button>
//         <button className={styles.formBtn}>{t("apply")}</button>
//         </div>
//       </div>
//     </section></>
//   )
// }

// export default HeroAbout
 // Використовуємо `next-intl/link`
import Link from "next/link"; // Використовуємо звичайний Next.js Link
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import styles from "./AboutHero.module.css";
import CalculateButton from "@/components/CalculateButton/CalculateButton";

const HeroAbout = () => {
  const t = useTranslations("about");
  const locale = useLocale(); // Отримуємо поточну локаль

  return (
    <section id="hero" className={styles.body}>
      <div className={styles.heroImg}></div>
      <div className={styles.cont}>
        <div className={styles.textCont}>
          <h1 className={styles.title}>{t("headline")}</h1>
          <p className={styles.descr}>{t("description")}</p>
        </div>
        <div className={styles.btnCont}>
         
          
            
           <CalculateButton>{t("calculate")}</CalculateButton>
          <Link href={`/${locale}/apply`} className={styles.formBtn}>
            {t("apply")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;

