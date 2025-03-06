import React, { useEffect, ReactElement } from "react";
import styles from "./Modal.module.css";
import { IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement; // Приймає тільки один дочірній елемент
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.contBtn}>
          {React.cloneElement(children, { onClose })} {/* Передаємо `onClose` */}
          {/* <button className={styles.closeBtn} onClick={onClose}>
            <IconContext.Provider value={{ color: "#fff", size: "36px" }}>
              <div>
                <IoMdClose />
              </div>
            </IconContext.Provider>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
