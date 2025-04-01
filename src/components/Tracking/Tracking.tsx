// import React, { useState } from "react";
// import styles from "./Tracking.module.css";
// import { IconContext } from "react-icons";
// import { IoMdClose } from "react-icons/io";
// import SvgIcon from "../SvgIcon";
// import TrackTtn from "./TrackTTN/TrackTtn";
// import TrackData from "./TrackData/TrackData";
// interface TrackingProps {
//   onClose: () => void;
// }
// const Tracking: React.FC<TrackingProps> = ({ onClose }) => {
//     const [selectedForm, setSelectedForm] = useState<string | null>(null);
//   return (
//     <div className={styles.container}>
//        <button  onClick={onClose}>
//         <IconContext.Provider value={{ color: "#black", size: "36px" }}>
//           <div className={styles.closeBtn}>
//             <IoMdClose />
//           </div>
//         </IconContext.Provider>
//       </button>
//       <h2 className={styles.title}>Трекінг відправлення</h2>
//         {!selectedForm ? (
//         <TrackTtn selected={setSelectedForm} />
//       ) : selectedForm === "step2" ? (
//           <TrackData selected={onClose} />
//       ) : selectedForm === "error" ? (
//         <p>Помилка</p>
//       ) 
//         : null} 
//     </div>
//   );
// };

// export default Tracking;
// Tracking.tsx
import React, { useState } from "react";
import styles from "./Tracking.module.css";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import TrackTtn from "./TrackTTN/TrackTtn";
import TrackData from "./TrackData/TrackData";

interface TrackingProps {
  onClose: () => void;
}

const Tracking: React.FC<TrackingProps> = ({ onClose }) => {
  const [selectedForm, setSelectedForm] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // функция запроса по TTN
  const handleSearch = async (ttn: string) => {
    try {
      setLoading(true);
      setSelectedForm(null);
      console.log(ttn);
      
      const response = await fetch(`https://ivancom-server.onrender.com/tracking/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ttn})
});
      const json = await response.json();
     console.log(json);
     
      if (!response.ok) throw new Error(json.message || "Помилка запиту");
     
      await setData(json);
      await setSelectedForm("step2"); // переходим на TrackData
    } catch (err) {
      console.error(err);
      setSelectedForm("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={onClose}>
        <IconContext.Provider value={{ color: "#000", size: "36px" }}>
          <div className={styles.closeBtn}>
            <IoMdClose />
          </div>
        </IconContext.Provider>
      </button>

      <h2 className={styles.title}>Трекінг відправлення</h2>

      {loading ? (
        <p>Завантаження...</p>
      ) : !selectedForm ? (
        <TrackTtn selected={setSelectedForm} onSearch={handleSearch} />
      ) : selectedForm === "step2" ? (
        <TrackData selected={onClose} data={data} />
      ) : selectedForm === "error" ? (
        <p>Помилка запиту</p>
      ) : null}
    </div>
  );
};

export default Tracking;
