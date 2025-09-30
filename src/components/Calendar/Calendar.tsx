

import { useTranslations } from "next-intl";
import styles from "./Calendar.module.css";
import Image from "next/image";
import { SocLink } from "../SocLink/SocLink";

const Calendar = () => {
  const t  = useTranslations("IndexPage.Calendar");

  return (
      <section className={styles.container}>
          <div className={styles.imgCont}><Image 
  src="/image/calendar10.png" 
  alt="Опис зображення"
              width={352}
              height={352}
  className={styles.image} 
/></div>
      <div className={styles.textCont}>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.intro}>{t("intro")}</p>
    
          <h3 className={styles.title2}>{t("detailsTitle")}</h3>
          <ul className={styles.detailsList}>
            <li>{t("detail1")}</li>
            <li>{t("detail2")}</li>
            <li>{t("detail3")}</li>
          </ul>
          
          <p className={styles.moreInfo}>{t("moreInfo")}</p>
          {/* <a href="/tips" className={styles.link}>{t("learnMore")}</a> */}
          
              <p className={styles.followUs}>{t("followUs")}</p>
              <div className={styles.socCont}><SocLink/></div>
      </div>
    </section>
  );
};

export default Calendar;