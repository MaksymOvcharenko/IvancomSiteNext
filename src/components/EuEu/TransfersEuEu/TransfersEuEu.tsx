


import { useTranslations } from "next-intl";
import FormHeroBtn from '@/components/HeroServices/FormHeroBtn';
import { PiWarningCircleLight } from 'react-icons/pi';
import s from './TransfersEuEu.module.css';

const TransfersEuEu = () => {
  const t = useTranslations("EuEU.transfers");

  return (
    <div className={s.body}>
      <p className={s.descr}>{t("description")}</p>

      <h3 className={s.stepTitleMain}>{t("steps.title")}</h3>
      <ul className={s.stepsList}>
        <li className={s.stepItem}>
          <div className={s.step}>1</div>
          <div className={s.steptext}>
            <p className={s.stepTitle}>{t("steps.step1.title")}</p>
            <p className={s.stepDescr}>{t("steps.step1.desc")}</p>
            <FormHeroBtn>{t("steps.step1.button")}</FormHeroBtn>
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

      <div className={s.warning}>
        <h3 className={s.warnTitle}>
          <PiWarningCircleLight size={30} />
          {t("warning.title")}
        </h3>
        <p className={s.warnDescr}>{t("warning.text")}</p>
      </div>
    </div>
  );
};

export default TransfersEuEu;
