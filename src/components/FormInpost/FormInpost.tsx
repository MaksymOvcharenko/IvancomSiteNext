"use client"
import React from "react";
import styles from "./FormInpost.module.css";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { VscArrowSmallLeft } from "react-icons/vsc";
interface FormInpostProps {
  onClose: () => void;
  onBackToSelector: () => void; // Функція для повернення до вибору форми
}

const FormInpost: React.FC<FormInpostProps> = ({ onClose, onBackToSelector }) => {
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
        src="https://package-ivancom.vercel.app/" // Замініть на потрібний URL
        className={styles.form}
        scrolling="yes"   
        allowFullScreen
      ></iframe>
      
    </div>
  );
};

export default FormInpost;
