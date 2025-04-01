import React from "react";
import styles from "./FormSelector.module.css";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import SvgIcon from "../SvgIcon";
import { useTranslations } from "next-intl";
interface FormSelectorProps {
  onClose: () => void;
  onSelectForm: (form: string) => void
}
const FormSelector: React.FC<FormSelectorProps> = ({ onSelectForm, onClose }) => {
  const t = useTranslations("Header");
  return (
    <div className={styles.container}>
       <button  onClick={onClose}>
        <IconContext.Provider value={{ color: "#black", size: "36px" }}>
          <div className={styles.closeBtn}>
            <IoMdClose />
          </div>
        </IconContext.Provider>
      </button>
      <h2 className={styles.title}>{t('select_delivery_method')}</h2>
<button className={styles.btn} onClick={() => onSelectForm("inpost")}>{t('method_inpost')}</button>
<button className={styles.btn} onClick={() => onSelectForm("ukraine")}>{t('method_ukraine')}<SvgIcon name="sparow" />{t('method_world_to_ukraine')}</button>
<button className={styles.btn} onClick={() => onSelectForm("world_to_ukraine")}>{t('method_world_to_ukraine')}<SvgIcon name="sparow" />{t('method_ukraine')}</button>
<button className={styles.btn} onClick={() => onSelectForm("transfer")}>{t('method_transfer')}</button>
<button className={styles.btn} onClick={() => onSelectForm("animals")}>{t('method_animals')}</button>
    </div>
  );
};

export default FormSelector;
