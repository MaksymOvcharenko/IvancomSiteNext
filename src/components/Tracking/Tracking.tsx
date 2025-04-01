import React, { useState } from "react";
import styles from "./Tracking.module.css";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import SvgIcon from "../SvgIcon";
import TrackTtn from "./TrackTTN/TrackTtn";
import TrackData from "./TrackData/TrackData";
interface TrackingProps {
  onClose: () => void;
}
const Tracking: React.FC<TrackingProps> = ({ onClose }) => {
    const [selectedForm, setSelectedForm] = useState<string | null>(null);
  return (
    <div className={styles.container}>
       <button  onClick={onClose}>
        <IconContext.Provider value={{ color: "#black", size: "36px" }}>
          <div className={styles.closeBtn}>
            <IoMdClose />
          </div>
        </IconContext.Provider>
      </button>
      <h2 className={styles.title}>Трекінг відправлення</h2>
        {!selectedForm ? (
        <TrackTtn selected={setSelectedForm} />
      ) : selectedForm === "step2" ? (
          <TrackData selected={onClose} />
      ) : selectedForm === "error" ? (
        <p>Помилка</p>
      ) 
        : null} 
    </div>
  );
};

export default Tracking;
