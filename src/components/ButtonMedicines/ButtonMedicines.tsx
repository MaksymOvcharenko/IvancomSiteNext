"use client";

import React, { useState } from "react";

import styles from "./ButtonMedicines.module.css";
import Modal from "../Modal/Modal";
import FormSelectorWrapper from "../FormSelectorWrapper/FormSelectorWrapper";
import pixelEvents from "@/pixelEvents";
import TemperatureInfo from "../UaEu/MedicinesUaEu/TemperaturaInfoModal/TemperaturaInfoModal";

interface ButtonMedicinesProps {
  children: React.ReactNode;
}

const ButtonMedicines: React.FC<ButtonMedicinesProps> = ({ children }) => {
  const [modalFormIsOpen, setModalFormIsOpen] = useState(false);

  const handleOpenModal = () => {
      pixelEvents.addToCart();
    setModalFormIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalFormIsOpen(false);
  };

  return (
    <>
      <button className={styles.formBtn} onClick={handleOpenModal}>
        {children}
      </button>
      <Modal isOpen={modalFormIsOpen} onClose={handleCloseModal}>
      <TemperatureInfo onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default ButtonMedicines;
