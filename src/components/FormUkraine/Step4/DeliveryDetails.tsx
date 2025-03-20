import React from "react";
import { useSelector } from "react-redux";
import styles from "./DeliveryDetails.module.css";
import { GoPencil } from "react-icons/go";
import SvgIcon from "@/components/SvgIcon";

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

interface DeliveryDetailsProps {
  prevStep: () => void;
  setStep: (step: number) => void;
  sendData: () => void;
}

const DeliveryDetails: React.FC<DeliveryDetailsProps> = ({
  prevStep,
  sendData,
  setStep,
}) => {
  const formData = useSelector(
    (state: RootState) => state.formUatoWorld.formData
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Підтвердження даних</h2>

      <div className={styles.section}>
        <h3>
          Дані відправника{" "}
          <button onClick={() => setStep(1)}>
            <GoPencil color="#0884d5" />
          </button>
        </h3>
        <div className={styles.textWrapper}>
          <div className={styles.text}>ТТН: </div>
          {formData.ttn}
        </div>
        <div className={styles.flexCont}>
          <div className={styles.textWrapper}>
            <div className={styles.text}>Ім'я: </div>
            {formData.senderName}
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.text}>Прізвище: </div>
            {formData.senderSurname}
          </div>
        </div>
        <div className={styles.flexCont}>
          <div className={styles.textWrapper}>
            <div className={styles.text}>Телефон: </div>
            {formData.senderPhone}
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.text}>E-mail: </div>
            {formData.senderEmail}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3>
          Дані отримувача{" "}
          <GoPencil onClick={() => setStep(1)} color="#0884d5" />
        </h3>
        <div className={styles.flexCont}>
          <div className={styles.textWrapper}>
            <div className={styles.text}>Ім'я: </div>
            {formData.receiverName}
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.text}>Прізвище: </div>
            {formData.receiverSurname}
          </div>
        </div>
        <div className={styles.flexCont}>
          <div className={styles.textWrapper}>
            <div className={styles.text}>Телефон: </div>
            {formData.receiverPhone}
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.text}>E-mail: </div>
            {formData.receiverEmail}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3>
          Хто сплачує послуги{" "}
          <GoPencil onClick={() => setStep(1)} color="#0884d5" />
        </h3>
        <div className={styles.textWrapper}>
          <div className={styles.text}>Платник: </div>
          {formData.payer === "sender" ? "Відправник" : "Отримувач"}
        </div>
      </div>

      <div className={styles.section}>
        <h3>
          Куди прямує посилка{" "}
          <GoPencil onClick={() => setStep(2)} color="#0884d5" />
        </h3>
        <div className={styles.text}>
          Тип доставки:
          <span>
              {formData.deliveryMethod === "InPost"
                ? "Inpost"
                : formData.deliveryMethod === "BranchKrakow"
                ? "Відділення Ivancom "
                : formData.deliveryMethod === "BranchWarzsawa"
                ? "Відділення Ivancom "
                : formData.deliveryMethod === "BranchWroclaw"
                ? "Відділення Ivancom  "
                : formData.deliveryMethod === "BranchKatowice"
                ? "Відділення Ivancom "
                : formData.deliveryMethod === "Courier Ivancom" 
                ? "Кур'єр Іванком"
                : formData.deliveryMethod === "dhl"
                ? "Міжнародна"
                : ""}
          </span>
              </div>
              
        {formData.inpostMethod === "paczkomat" ? (
  <p className={styles.text}>
    Поштомат:<span>{formData.paczkomat}</span>
  </p>
) : formData.deliveryMethod === "BranchKrakow" ? (
  "Відділення Ivancom Kraków Jana Pawła II 154, 31-982"
) : formData.deliveryMethod === "BranchWarzsawa" ? (
  "Відділення Ivancom Warszawa Skierniewicka 21/7, 01-230 (станція метро Plocka)"
) : formData.deliveryMethod === "BranchWroclaw" ? (
  "Відділення Ivancom Wrocław al. Armii Krajowej 4A/1 Centrum AB Wrocław, Polska"
) : formData.deliveryMethod === "BranchKatowice" ? (
  "Відділення Ivancom Katowice Jana III Sobieskiego 11/1, 40-082"
) : (
  <div>
    <div className={styles.flexCont}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>Країна: </div>
        {formData.country}
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text}>Місто: </div>
        {formData.city}
      </div>
    </div>
    <div className={styles.textWrapper}>
      <div className={styles.text}>Регіон: </div>
      {formData.region}
    </div>
    <div className={styles.flexCont}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>Вулиця: </div>
        {formData.street}
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text}>Номер будинку: </div>
        {formData.houseNumber}
      </div>
    </div>
    <div className={styles.flexCont}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>Квартира: </div>
        {formData.apartment || "Немає"}
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text}>Поштовий код: </div>
        {formData.postalCode}
      </div>
    </div>
  </div>
)}

        {/* <div>
            <div className={styles.flexCont}>
             
              <div className={styles.textWrapper}>
                <div className={styles.text}>Країна: </div>
                {formData.country}
              </div>
              <div className={styles.textWrapper}>
                <div className={styles.text}>Місто: </div>
                {formData.city}
              </div>
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.text}>Регіон: </div>
              {formData.region}
            </div>
            <div className={styles.flexCont}>
              <div className={styles.textWrapper}>
                <div className={styles.text}>Вулиця: </div>
                {formData.street}
              </div>
              <div className={styles.textWrapper}>
                <div className={styles.text}>Номер будинку: </div>
                {formData.houseNumber}
              </div>
            </div>
            <div className={styles.flexCont}>
              <div className={styles.textWrapper}>
                <div className={styles.text}>Квартира: </div>
                {formData.apartment || "Немає"}
              </div>
              <div className={styles.textWrapper}>
                <div className={styles.text}>Поштовий код: </div>
                {formData.postalCode}
              </div>
            </div>
        </div> */}
      </div>

      <div className={styles.section}>
        <h3>
          Опис вмісту <GoPencil onClick={() => setStep(3)} color="#0884d5" />
        </h3>
        <div className={styles.textWrapper}>
          <div className={styles.text}>{formData.description}</div>
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <button onClick={prevStep} className={styles.button}>Назад</button>
        <button onClick={sendData} className={styles.button}>Відправити <SvgIcon name="sparow" /></button>
          </div>
         
    </div>
  );
};

export default DeliveryDetails;
