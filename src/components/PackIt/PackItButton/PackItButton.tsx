"use client"; // Тільки цей компонент буде клієнтським

import React, { useState, ReactNode } from "react";
// Ваш калькулятор
import styles from "./PackItButton.module.css";
import Modal from "@/components/Modal/Modal";
import PackIt from "../PackIt";


interface PackItButtonProps {
  children: ReactNode;
}


const PackItButton: React.FC<PackItButtonProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button className={styles.Btn} onClick={() => setIsModalOpen(true)}>
        {children}
      </button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <PackIt onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default PackItButton;
