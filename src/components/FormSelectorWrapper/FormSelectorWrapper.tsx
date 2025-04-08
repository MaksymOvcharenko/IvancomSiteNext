import React, { useState } from "react";

import FormInpost from "../FormInpost/FormInpost";
import FormSelector from "../FormSelector/FormSelector";
import FormUkraine from "../FormUkraine/FormUkraine";

import styles from "./FormSelectorWrapper.module.css";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import FormWorldUA from "../FormWorldUa/FormWorldUa";
import FormTransfer from "../FormTransfer/FormTransfer";
import FormAnimals from "../FormAnimals/FormAnimals";

interface FormSelectorWrapperProps {
  onClose: () => void; // Додаємо пропс onClose
  defaultForm?: string; // не обов'язковий пропс
}

const FormSelectorWrapper: React.FC<FormSelectorWrapperProps> = ({ onClose, defaultForm }) => {
  const [selectedForm, setSelectedForm] = useState<string | null>(defaultForm || null);

  const handleBackToSelector = () => {
    setSelectedForm(null); // Повертаємося до вибору форми
  };

  return (
    <div className={styles.cont}>
      
      {!selectedForm ? (
        <FormSelector onSelectForm={setSelectedForm} onClose={onClose}/>
      ) : selectedForm === "inpost" ? (
        <FormInpost onClose={onClose} onBackToSelector={handleBackToSelector} />
      ) : selectedForm === "ukraine" ? (
        <FormUkraine onClose={onClose} onBackToSelector={handleBackToSelector} />
      ) : selectedForm === "world_to_ukraine" ? (
        <FormWorldUA onClose={onClose} onBackToSelector={handleBackToSelector} />
      ) : selectedForm === "transfer" ? (
        <FormTransfer onClose={onClose} onBackToSelector={handleBackToSelector} />
      )
        :selectedForm === "animals" ? (
        <FormAnimals onClose={onClose} onBackToSelector={handleBackToSelector} />
      ): null} 
    </div>
  );
};

export default FormSelectorWrapper;
