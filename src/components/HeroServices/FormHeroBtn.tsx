"use client"; // Тільки цей компонент буде клієнтським

import React, { useState, ReactNode } from "react";
// Ваш калькулятор
import styles from "./FormHeroBtn.module.css";

import FormSelectorWrapper from "@/components/FormSelectorWrapper/FormSelectorWrapper";
import Modal from "@/components/Modal/Modal";

interface CalculateButtonProps {
  children: ReactNode;
}

const FormHeroBtn: React.FC<CalculateButtonProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button className={styles.calcBtn} onClick={() => setIsModalOpen(true)}>
        {children}
      </button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <FormSelectorWrapper onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default FormHeroBtn;