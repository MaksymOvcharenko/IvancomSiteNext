
// import React, { useState } from "react";
// import styles from "./Tracking.module.css";
// import { IconContext } from "react-icons";
// import { IoMdClose } from "react-icons/io";
// import TrackTtn from "./TrackTTN/TrackTtn";
// import TrackData from "./TrackData/TrackData";

// interface TrackingProps {
//   onClose: () => void;
// }

// const Tracking: React.FC<TrackingProps> = ({ onClose }) => {
//   const [selectedForm, setSelectedForm] = useState<string | null>(null);
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(false);

//   // функция запроса по TTN
//   const handleSearch = async (ttn: string) => {
//     try {
//       setLoading(true);
//       setSelectedForm(null);
//       console.log(ttn);
      
//       const response = await fetch(`https://ivancom-server.onrender.com/tracking/`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ ttn})
// });
//       const json = await response.json();
//      console.log(json);
     
//       if (!response.ok) throw new Error(json.message || "Помилка запиту");
     
//       await setData(json);
//       await setSelectedForm("step2"); // переходим на TrackData
//     } catch (err) {
//       console.error(err);
//       setSelectedForm("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <button onClick={onClose}>
//         <IconContext.Provider value={{ color: "#000", size: "36px" }}>
//           <div className={styles.closeBtn}>
//             <IoMdClose />
//           </div>
//         </IconContext.Provider>
//       </button>

//       <h2 className={styles.title}>Трекінг відправлення</h2>

//       {loading ? (
//         <p>Завантаження...</p>
//       ) : !selectedForm ? (
//         <TrackTtn selected={setSelectedForm} onSearch={handleSearch} />
//       ) : selectedForm === "step2" ? (
//         <TrackData selected={onClose} data={data} />
//       ) : selectedForm === "error" ? (
//         <p>Помилка запиту</p>
//       ) : null}
//     </div>
//   );
// };

// export default Tracking;
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
  const [selectedForm, setSelectedForm] = useState<"step1" | "step2" | "error" | null>("step1");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastTtn, setLastTtn] = useState<string>("");

  const handleSearch = async (ttn: string) => {
    try {
      setLoading(true);
      setError(null);
      setLastTtn(ttn);
      setSelectedForm("step1");

      const response = await fetch(`https://ivancom-server.onrender.com/tracking/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ttn })
      });

      const json = await response.json();
      if (!response.ok) throw new Error(json.message || "Помилка запиту");

      setData(json);
      setSelectedForm("step2");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Щось пішло не так");
      setSelectedForm("error");
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setSelectedForm("step1");
    setError(null);
  };

  return (
    <div className={styles.container}>
      <button onClick={onClose} className={styles.closeBtn}>
        <IconContext.Provider value={{ color: "#000", size: "36px" }}>
          <IoMdClose />
        </IconContext.Provider>
      </button>

      <h2 className={styles.title}>Трекінг відправлення</h2>

      {selectedForm === "step1" && (
        <TrackTtn
          selected={setSelectedForm}
          onSearch={handleSearch}
          disabled={loading}
          lastTtn={lastTtn}
          loading={loading}
        />
      )}

      {selectedForm === "step2" && !loading && (
        <TrackData selected={onClose} data={data} />
      )}

      {selectedForm === "error" && !loading && (
        <div>
          <p style={{ color: 'red' }}>{error}</p>
          <button className={styles.btn} onClick={handleRetry}>
            Спробувати ще
          </button>
        </div>
      )}
    </div>
  );
};

export default Tracking;
