"use client"; // Тільки цей компонент буде клієнтським

import React, { useState, ReactNode } from "react";
// Ваш калькулятор
import styles from "./CalculateButton.module.css";
import Modal from "../Modal/Modal";
import DeliveryCalculator from "../DeliveryCalculator/DeliveryCalculator";

interface CalculateButtonProps {
  children: ReactNode;
}

const CalculateButton: React.FC<CalculateButtonProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button className={styles.calcBtn} onClick={() => setIsModalOpen(true)}>
        {children}
      </button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <DeliveryCalculator />
        </Modal>
      )}
    </>
  );
};

export default CalculateButton;
