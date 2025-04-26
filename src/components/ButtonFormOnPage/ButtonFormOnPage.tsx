"use client";

import React, { useState } from "react";

import styles from "./ButtonFormOnPage.module.css";
import Modal from "../Modal/Modal";
import FormSelectorWrapper from "../FormSelectorWrapper/FormSelectorWrapper";
import pixelEvents from "@/pixelEvents";

interface ButtonFormOnPageProps {
  children: React.ReactNode;
}

const ButtonFormOnPage: React.FC<ButtonFormOnPageProps> = ({ children }) => {
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
        <FormSelectorWrapper onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default ButtonFormOnPage;
