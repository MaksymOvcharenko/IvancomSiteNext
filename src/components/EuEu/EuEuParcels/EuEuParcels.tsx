


import { LiaCoinsSolid } from "react-icons/lia";

import { FaRegClock } from "react-icons/fa6";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import s from "./EuEuParcels.module.css";

const EuEuParcels = () => {
  const { locale } = useParams();
  const t = useTranslations("EuEU.parcels");

  return (
    <div className={s.body}>
      <div className={s.header}>
        <p className={s.descr}>{t("header.descr")}</p>
        <div className={s.contHeader}>
          <div className={s.tariffs}>
            <h3 className={s.tarifTitle}>
              <LiaCoinsSolid size={30} />
              {t("tariff.title")}
            </h3>
            <p className={s.tarifDesc}>{t("tariff.price")}</p>
            <ul className={s.tarifList}>
              <li className={s.item}>
                <p className={s.itemTitle}>{t("tariff.insurance.title")}</p>
                <p className={s.itemDesc}>{t("tariff.insurance.desc")}</p>
              </li>
              <li className={s.item}>
                <p className={s.itemTitle}>{t("tariff.min.title")}</p>
                <p className={s.itemDesc}>{t("tariff.min.desc")}</p>
              </li>
            </ul>
          </div>

          <div className={s.tariffs}>
            <h3 className={s.tarifTitle}>
              <FaRegClock size={26} />
              {t("delivery.title")}
            </h3>
            <p className={s.tarifDesc}>{t("delivery.time")}</p>
          </div>
        </div>
      </div>

      <div className={s.price}>
        <h3 className={s.priceTitle}>{t("price.title")}</h3>
        <p className={s.priceDescr}>{t("price.descr")}</p>

        <div className={s.priceTable}>
          <h4 className={s.tableTitle}>{t("price.tableTitle")}</h4>
          <ul className={s.tableList}>
            <li className={s.tableItem}>
              <div className={s.firstColumn}>{t("cities.krakow")}</div>
              <div className={s.secondColumn}>{t("cities.krakowPrice")}</div>
            </li>
            <li className={s.tableItem}>
              <div className={s.firstColumn}>{t("cities.warsaw")}</div>
              <div className={s.secondColumn}>{t("cities.warsawPrice")}</div>
            </li>
            <li className={s.tableItem}>
              <div className={s.firstColumn}>{t("cities.katowice")}</div>
              <div className={s.secondColumn}>{t("cities.katowicePrice")}</div>
            </li>
            <li className={s.tableItem}>
              <div className={s.firstColumn}>{t("cities.wroclaw")}</div>
              <div className={s.secondColumn}>{t("cities.wroclawPrice")}</div>
            </li>
            <li className={s.tableItem}>
              <div className={s.firstColumn}>{t("cities.kielce")}</div>
              <div className={s.secondColumn}>{t("cities.kielcePrice")}</div>
            </li>
          </ul>
          <Link href={`/${locale}/contacts`} className={s.priceBtn}>
            {t("price.contacts")}
          </Link>
        </div>
      </div>

      <div className={s.steps}>
        <h3 className={s.stepTitleMain}>{t("steps.title")}</h3>
        <ul className={s.stepsList}>
          <li className={s.stepItem}>
            <div className={s.step}>1</div>
            <div className={s.steptext}>
              <p className={s.stepTitle}>{t("steps.step1.title")}</p>
              <p className={s.stepDescr}>{t("steps.step1.desc")}</p>
            </div>
          </li>
          <li className={s.stepItem}>
            <div className={s.step}>2</div>
            <div className={s.steptext}>
              <p className={s.stepTitle}>{t("steps.step2.title")}</p>
              <p className={s.stepDescr}>{t("steps.step2.desc")}</p>
            </div>
          </li>
          <li className={s.stepItem}>
            <div className={s.step}>3</div>
            <div className={s.steptext}>
              <p className={s.stepTitle}>{t("steps.step3.title")}</p>
              <p className={s.stepDescr}>{t("steps.step3.desc")}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EuEuParcels;
