// components/FullScreenPopup/FullScreenPopup.tsx
"use client";
import Modal from "@/components/Modal/Modal";
import Image from "next/image";
import { useEffect, useState } from "react";
import popUp from "../../../public/popup1.png"; // Adjust the path as necessary
import { IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";
import styles from "./FullScreenPopup.module.css"; // Стилі для хрестика

const FullScreenPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isPopupShown = sessionStorage.getItem("popup_shown");
  
    if (!isPopupShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("popup_shown", "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className={styles.popupContent}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          <IconContext.Provider value={{ color: "#fff", size: "36px" }}>
            <IoMdClose />
          </IconContext.Provider>
        </button>
        <Image src={popUp} alt="Promo" width={800} height={860} className={styles.img} />
      </div>
    </Modal>
  );
};

export default FullScreenPopup;
