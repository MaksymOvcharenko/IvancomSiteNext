import React from "react";
import styles from "./FormSelector.module.css";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
interface FormSelectorProps {
  onClose: () => void;
  onSelectForm: (form: string) => void
}
const FormSelector: React.FC<FormSelectorProps> = ({ onSelectForm, onClose }) => {
  return (
    <div className={styles.container}>
       <button  onClick={onClose}>
        <IconContext.Provider value={{ color: "#black", size: "36px" }}>
          <div className={styles.closeBtn}>
            <IoMdClose />
          </div>
        </IconContext.Provider>
      </button>
      <h2>Виберіть спосіб відправки:</h2>
      <button  className={styles.btn} onClick={() => onSelectForm("inpost")}>Відправка через InPost</button>
          <button className={styles.btn} onClick={() => onSelectForm("ukraine")}>Відправка з України</button>
      <button className={styles.btn} onClick={() => onSelectForm("world_to_ukraine")}>Відправка Світ -Україна</button>
      <button className={styles.btn} onClick={() => onSelectForm("transfer")}>Переїзди</button>
      <button className={styles.btn} onClick={() => onSelectForm("animals")}>Тварини</button>
    </div>
  );
};

export default FormSelector;
