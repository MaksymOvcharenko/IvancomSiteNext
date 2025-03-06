// import React from "react";
// import styles from "./FormUkraine.module.css"
// const FormUkraine: React.FC = () => {
//   return (
//     <div className={styles.body}>
//       <iframe
//         src="https://ivancomtest.sysadmin.express/" // Замініть на потрібний URL
//         className={styles.form}
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default FormUkraine;
"use client"
import React from "react";
import styles from "./FormUkraine.module.css";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { VscArrowSmallLeft } from "react-icons/vsc";

interface FormUkraineProps {
  onClose: () => void;
  onBackToSelector: () => void; // Функція для повернення до вибору форми
}

const FormUkraine: React.FC<FormUkraineProps> = ({ onClose, onBackToSelector }) => {
  return (
    <div className={styles.body}>
      
          <button  onClick={onBackToSelector}>
        <IconContext.Provider value={{ color: "#black", size: "36px" }}>
          <div className={styles.backBtn}>
            <VscArrowSmallLeft />
          </div>
        </IconContext.Provider>
          </button>
          <button  onClick={onClose}>
        <IconContext.Provider value={{ color: "#black", size: "36px" }}>
          <div className={styles.closeBtn}>
            <IoMdClose />
          </div>
        </IconContext.Provider>
      </button>
      <iframe
        src="https://ivancomtest.sysadmin.express/" // Замініть на потрібний URL
        className={styles.form}
        allowFullScreen
      ></iframe>
      
    </div>
  );
};

export default FormUkraine;
