import React, { useState } from "react";

import FormInpost from "../FormInpost/FormInpost";
import FormSelector from "../FormSelector/FormSelector";
import FormUkraine from "../FormUkraine/FormUkraine";

import styles from "./FormSelectorWrapper.module.css";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";

interface FormSelectorWrapperProps {
  onClose: () => void; // Додаємо пропс onClose
}

const FormSelectorWrapper: React.FC<FormSelectorWrapperProps> = ({ onClose }) => {
  const [selectedForm, setSelectedForm] = useState<string | null>(null);

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
      ) : null}
    </div>
  );
};

export default FormSelectorWrapper;
