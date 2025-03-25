"use client";

import Image from "next/image";
import styles from "./Delivery.module.css";
import { useTranslations } from "next-intl";

import { useParams } from "next/navigation";
import Link from "next/link";
import ButtonFormOnPage from "../ButtonFormOnPage/ButtonFormOnPage";


const Delivery = () => {
  const  t  = useTranslations("IndexPage.delivery");
 const { locale } = useParams();
    return (
      
        <section className={styles.container}>
            <h2 className={styles.title}>{t("courierTitle")}</h2>
          <div className={styles.section}>
              
          
        <Image src="/image/home/courier.jpg" alt={t("courierAlt")} width={600} height={400} />
        
        <div className={styles.secondCont}>
            <p>{t("courierDescription")}</p>
            <div className={styles.buttons}>
                        
                        <Link className={styles.button1} href={`/${locale}/courier`}>{t("details")}</Link>
              <Link className={styles.button2} href={`/${locale}/contacts`} >{t("contacts")}</Link>
            </div>
        </div>
          </div>
          <h2 className={styles.title}>{t("inpostTitle")}</h2>
          <div className={styles.section}>
              
        <Image src="/image/home/inpost.jpg" alt={t("inpostAlt")} width={600} height={400} />
        
        <div className={styles.secondCont}>
            <p>{t("inpostDescription")}</p>
            <div className={styles.buttons}>
              <Link className={styles.button1} href={`/${locale}/self-service`}>{t("details")}</Link>
              <button className={styles.button3}><ButtonFormOnPage>{t("send")}</ButtonFormOnPage></button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
