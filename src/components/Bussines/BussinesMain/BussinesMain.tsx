import styles from "./BussinesMain.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const BussinesMain = () => {
  const t = useTranslations("bussines.main");

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t("title")}</h2>
      <div className={styles.cont}>
          <div className={styles.imageWrapper}>
            <Image src="/image/bussines/main.jpg" alt={t("imageAlt")} width={300} height={200} className={styles.imageWrapper} />
          </div>
          <div className={styles.textCont}>
              <p className={styles.description}>{t("description")}</p>
              <h3 className={styles.subtitle}>{t("subtitle")}</h3>
              <ul className={styles.list}>
                <li> {t("points.optimization")}</li>
                <li> {t("points.personalPlan")}</li>
                <li> {t("points.individualManager")}</li>
                <li> {t("points.smallLargeBatches")}</li>
                <li> {t("points.largeCargo")}</li>
                <li>
                   {t("points.fulfillment.title")}
                  <ul>
                    <li>{t("points.fulfillment.details")}</li>
                  </ul>
                </li>
                <li>
                   {t("points.consolidation.title")}
                  <ul>
                    <li>{t("points.consolidation.details")}</li>
                  </ul>
                </li>
                <li> {t("points.cryptoPayment")}</li>
              </ul>
          </div>
      </div>
    </section>
  );
};

export default BussinesMain;
