"use client";
import React, { useState, useEffect } from "react";
import styles from "./FormUkraine.module.css";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { VscArrowSmallLeft } from "react-icons/vsc";
import Step1 from "./Step1/Step1";
import CountryInput from "./GooglePlaces/GooglePlaces";
import { LoadScript } from "@react-google-maps/api";
import Description from "./Step3/Description";
import DeliveryDetails from "./Step4/DeliveryDetails";
import { useDispatch, useSelector } from "react-redux";
import StatusMessage from "../StatusMessage/StatusMessage";
import pixelEvents from "@/pixelEvents";
import { clearFormData } from "@/store/formUatoWorld";

interface RootState {
  formUatoWorld: {
    formData: {
      ttn: string;
      senderName: string;
      senderSurname: string;
      senderPhone: string;
      senderEmail: string;
      receiverName: string;
      receiverSurname: string;
      receiverPhone: string;
      receiverEmail: string;
      payer: string;
      country: string;
      city: string;
      region: string;
      street: string;
      postalCode: string;
      houseNumber: string;
      apartment: string;
      selectedSubCity: string;
      paczkomat: string;
      deliveryMethod: string;
      inpostMethod: string;
      description: string;
      agree: boolean;
      
    };
  };
}

interface FormUkraineProps {
  onClose: () => void;
  onBackToSelector: () => void; // Функція для повернення до вибору форми
}

const FormUkraine: React.FC<FormUkraineProps> = ({
  onClose,
  onBackToSelector,
}) => {
  const [step, setStep] = useState(1);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [sendStatus, setSendStatus] = useState<"error" | "success" | null>(
    null
  );
  const dispatch = useDispatch();
  const [initialized, setInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const nextStep = () => { setStep((prev) => prev + 1);  pixelEvents.initiateCheckout(); };
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));
  const formData = useSelector(
    (state: RootState) => state.formUatoWorld.formData
  );
  useEffect(() => {
    // Перевірка, чи скрипт вже завантажено
    const script = document.querySelector('script[src*="maps.googleapis.com"]');
    if (script) {
      setScriptLoaded(true); // Якщо скрипт вже є, не завантажуємо його знову
    }
  }, []);
  const sendData = async () => {
  
  // pixelEvents.lead();
    console.log(formData);
    setStep(5);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://ivancom-server.onrender.com/forms/UaToWorld",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      setSendStatus("success");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Response from server:", responseData);
      dispatch(clearFormData()); // Очищення даних форми після успішної відправки
    } catch (error) {
      console.error("Error submitting form:", error);
      setSendStatus("error");
    } finally {
      setIsLoading(false);
    }
  };
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
        <LoadScript
          googleMapsApiKey="AIzaSyAfmGmNT1pyJllEdaO8LqSA3X4scJ_y40I"
          libraries={["places"]}
          language="en"
        >
          <div className="p-4 rounded-xl shadow-lg bg-white">
            {step === 1 && (
              <div>
                <Step1 nextStep={nextStep} />
              </div>
            )}
            {step === 2 && (
              <div>
                <CountryInput nextStep={nextStep} prevStep={prevStep} />
              </div>
            )}
            {step === 3 && (
              <div>
                <Description nextStep={nextStep} prevStep={prevStep} />
              </div>
            )}
            {step === 4 && (
              <div>
                <DeliveryDetails
                  prevStep={prevStep}
                  setStep={setStep}
                  sendData={sendData}
                />
              </div>
            )}
            {step === 5 && (
              <div className={styles.status}>
                <StatusMessage
                  changeStep={() => setStep(1)}
                  isLoading={isLoading}
                  sendStatus={sendStatus}
                  onSubmit={() => sendData}
                />
              </div>
            )}
            <div className="mt-4 flex justify-between">
              {step > 1 && <button onClick={prevStep}>Назад</button>}
              {step < 3 && <button onClick={nextStep}>Далі</button>}
            </div>
          </div>
        </LoadScript>
      ) : (
        <div className="p-4 rounded-xl shadow-lg bg-white">
          {step === 1 && (
            <div>
              <Step1 nextStep={nextStep} />
            </div>
          )}
          {step === 2 && (
            <div>
              <CountryInput nextStep={nextStep} prevStep={prevStep} />
            </div>
          )}
          {step === 3 && <div>Step 3: Вибір місця призначення і оплати</div>}
          {step === 4 && (
            <div>
              <DeliveryDetails
                prevStep={prevStep}
                setStep={setStep}
                sendData={sendData}
              />
            </div>
          )}
          {step === 5 && (
            <StatusMessage
              changeStep={() => setStep(1)}
              isLoading={isLoading}
              sendStatus={sendStatus}
              onSubmit={() => sendData}
            />
          )}
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
