"use client"; // Тільки цей компонент буде клієнтським

import React, { useState, ReactNode } from "react";
// Ваш калькулятор
import styles from "./ReklamacjaButton.module.css";
import Modal from "../Modal/Modal";
import DeliveryCalculator from "../DeliveryCalculator/DeliveryCalculator";
import pixelEvents from "@/pixelEvents";
import ParcelClaimForm from "../FormReklamacja/FormReklamacja";

interface CalculateButtonProps {
  children: ReactNode;
}

const ReklamacjaButton: React.FC<CalculateButtonProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.calcWrapper}>
        <button className={styles.calcBtn} id="btnForm" onClick={() => { setIsModalOpen(true); pixelEvents.addToCart(); }}>
          {children}
        </button>
      </div >

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ParcelClaimForm onClose={() => setIsModalOpen(false)} onBackToSelector={() => {}}  />
        </Modal>
      )}
    </>
  );
};

export default ReklamacjaButton;
