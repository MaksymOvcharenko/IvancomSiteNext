
// "use client"
// import React, { useState } from "react";
// import styles from "./FormUkraine.module.css";
// import { IconContext } from "react-icons";
// import { IoMdClose } from "react-icons/io";
// import { VscArrowSmallLeft } from "react-icons/vsc";
// import Step1 from "./Step1/Step1";
// import GooglePlacesAutocomplete from "./GooglePlaces/GooglePlaces";
// import CountryInput from "./GooglePlaces/GooglePlaces";
// import { LoadScript } from "@react-google-maps/api";

// interface FormUkraineProps {
//   onClose: () => void;
//   onBackToSelector: () => void; // Функція для повернення до вибору форми
// }

// const FormUkraine: React.FC<FormUkraineProps> = ({ onClose, onBackToSelector }) => {
//   const [step, setStep] = useState(1);

//     const nextStep = () => setStep(prev => prev + 1);
//     const prevStep = () => setStep(prev => (prev > 1 ? prev - 1 : prev));
//   return (
//     <div className={styles.body}>
      
//           <button  onClick={onBackToSelector}>
//         <IconContext.Provider value={{ color: "#black", size: "36px" }}>
//           <div className={styles.backBtn}>
//             <VscArrowSmallLeft />
//           </div>
//         </IconContext.Provider>
//           </button>
//           <button  onClick={onClose}>
//         <IconContext.Provider value={{ color: "#black", size: "36px" }}>
//           <div className={styles.closeBtn}>
//             <IoMdClose />
//           </div>
//         </IconContext.Provider>
//       </button>
//       {/* <iframe
//         src="https://ivancomtest.sysadmin.express/" // Замініть на потрібний URL
//         className={styles.form}
//         allowFullScreen
//       ></iframe> */}
//         <LoadScript googleMapsApiKey="AIzaSyD5CLvd46yy2iIMRzQBhT873NU45WhUvII" libraries={["places"]} language="en">
//         <div className="p-4 rounded-xl shadow-lg bg-white">
//               {step === 1 && <div><Step1 nextStep={nextStep}/></div>}
//               {step === 2 && <div><CountryInput nextStep={nextStep}/></div>}
//               {step === 3 && <div>Step 3: Вибір місця призначення і оплати</div>}
  
//               <div className="mt-4 flex justify-between">
//                   {step > 1 && <button onClick={prevStep}>Назад</button >}
//                   {step < 3 && <button  onClick={nextStep}>Далі</button>}
//               </div>
//           </div>
//         </LoadScript>
//     </div>
//   );
// };

// export default FormUkraine;
"use client";
import React, { useState, useEffect } from "react";
import styles from "./FormUkraine.module.css";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { VscArrowSmallLeft } from "react-icons/vsc";
import Step1 from "./Step1/Step1";
import CountryInput from "./GooglePlaces/GooglePlaces";
import { LoadScript } from "@react-google-maps/api";

interface FormUkraineProps {
  onClose: () => void;
  onBackToSelector: () => void; // Функція для повернення до вибору форми
}

const FormUkraine: React.FC<FormUkraineProps> = ({ onClose, onBackToSelector }) => {
  const [step, setStep] = useState(1);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  useEffect(() => {
    // Перевірка, чи скрипт вже завантажено
    const script = document.querySelector('script[src*="maps.googleapis.com"]');
    if (script) {
      setScriptLoaded(true); // Якщо скрипт вже є, не завантажуємо його знову
    }
  }, []);

  return (
    <div className={styles.body}>
      <button onClick={onBackToSelector}>
        <IconContext.Provider value={{ color: "#black", size: "36px" }}>
          <div className={styles.backBtn}>
            <VscArrowSmallLeft />
          </div>
        </IconContext.Provider>
      </button>
      <button onClick={onClose}>
        <IconContext.Provider value={{ color: "#black", size: "36px" }}>
          <div className={styles.closeBtn}>
            <IoMdClose />
          </div>
        </IconContext.Provider>
      </button>

      {!scriptLoaded ? (
        <LoadScript googleMapsApiKey="AIzaSyD5CLvd46yy2iIMRzQBhT873NU45WhUvII" libraries={["places"]} language="en">
          <div className="p-4 rounded-xl shadow-lg bg-white">
            {step === 1 && <div><Step1 nextStep={nextStep} /></div>}
            {step === 2 && <div><CountryInput nextStep={nextStep} prevStep={prevStep} /></div>}
            {step === 3 && <div>Step 3: Вибір місця призначення і оплати</div>}

            <div className="mt-4 flex justify-between">
              {step > 1 && <button onClick={prevStep}>Назад</button>}
              {step < 3 && <button onClick={nextStep}>Далі</button>}
            </div>
          </div>
        </LoadScript>
      ) : (
        <div className="p-4 rounded-xl shadow-lg bg-white">
          {step === 1 && <div><Step1 nextStep={nextStep} /></div>}
            {step === 2 && <div><CountryInput nextStep={nextStep} prevStep={prevStep} /></div>}
          {step === 3 && <div>Step 3: Вибір місця призначення і оплати</div>}

          <div className="mt-4 flex justify-between">
            {step > 1 && <button onClick={prevStep}>Назад</button>}
            {step < 3 && <button onClick={nextStep}>Далі</button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormUkraine;
