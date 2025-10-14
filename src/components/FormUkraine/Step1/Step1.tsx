import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./Step1.module.css";
import { useTranslations } from "next-intl";

import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "@/store/formUatoWorld";
import SvgIcon from "@/components/SvgIcon";
interface Step1 {
  nextStep: () => void;
  // Функція для повернення до вибору форми
}

const Step1: React.FC<Step1> = ({nextStep}) => {
  const t = useTranslations("FormUaToWorld");

  const [senderName, setSenderName] = useState("");
  const [senderSurname, setSenderSurname] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverSurname, setReceiverSurname] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [isCompany, setIsCompany] = useState(false);

    const dispatch = useDispatch();
    const initValues = useSelector((state: any) => state.formUatoWorld.formData) || {};
  const validationSchema = Yup.object().shape({
    ttn: Yup.string()
      .length(14, t("ttnLengthError"))
      .required(t("fieldRequired")),
    senderName: Yup.string()
      .matches(/^[а-яА-ЯёЁіІїЇєЄґҐ\s]+$/, t("onlyCyrillic")) // Перевірка кирилицею
      .required(t("fieldRequired")),
    senderSurname: Yup.string()
      .matches(/^[а-яА-ЯёЁіІїЇєЄґҐ\s]+$/, t("onlyCyrillic")) // Перевірка кирилицею
      .required(t("fieldRequired")),
    senderEmail: Yup.string()
      .email(t("invalidEmail"))
      .required(t("fieldRequired")),
    senderPhone: Yup.string().required(t("fieldRequired")),
    receiverName: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, t("onlyLatin")) // Перевірка латиницею
      .required(t("fieldRequired")),
    receiverSurname: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, t("onlyLatin")) // Перевірка латиницею
      .required(t("fieldRequired")),
    receiverEmail: Yup.string()
      .email(t("invalidEmail"))
      .required(t("fieldRequired")),
    receiverPhone: Yup.string().required(t("fieldRequired")),
    payer: Yup.string().required(t("selectPayer")),
    promocode: Yup.string(),
    companyName: Yup.string()
  .max(300, "Максимум 300 символів")
  .when("isCompany", {
    is: true,
    then: (schema) => schema.required(t("companyNameRequired")),
    otherwise: (schema) => schema.notRequired(),
  }),
  });

  const handleTTNChange = async (ttn: string, setFieldValue: any) => {
  if (ttn.length === 14) {
    const apiKey = "058ede2709b4821bc076351701926af7";
    const url = "https://api.novaposhta.ua/v2.0/json/";
    const payload = {
      apiKey: apiKey,
      modelName: "TrackingDocument",
      calledMethod: "getStatusDocuments",
      methodProperties: {
        Documents: [
          {
            DocumentNumber: ttn,
            Phone: "380958010474",
          },
        ],
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success && data.data.length > 0) {
        const documentInfo = data.data[0];

        if (documentInfo.StatusCode === "3") {
          alert("Номер не знайдено. Перевірте правильність введення номеру");
        } else if (documentInfo.StatusCode === "1") {
          alert(
            "Відправник самостійно створив цю накладну, але ще не надав до відправки. Введіть дані відправника самостійно, або спробуйте пізніше"
          );
        } else {
          const senderFullName = documentInfo.SenderFullNameEW;
          const [senderLastName, senderFirstName] = senderFullName.split(" ", 2);
          const senderPhone = "+" + documentInfo.PhoneSender;

          // Оновлюємо значення прямо в Formik
          setFieldValue("senderName", senderFirstName);
          setFieldValue("senderSurname", senderLastName);
          setFieldValue("senderPhone", senderPhone);
        }
      } else {
        alert("ТТН не знайдено. Введіть дані відправника вручну.");
      }
    } catch (error) {
      console.error("Помилка:", error);
      alert("Виникла помилка при отриманні інформації.");
    }
  }
};

    
  return (
    <Formik
      initialValues={initValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
          console.log(t("formSubmit"), values);
          dispatch(setFormData(values));
          nextStep()
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className={styles.formContainer}>
          <h4 className={styles.formContTitle}>Крок 1</h4>
          <div className={styles.sender}>
            <h4 className={styles.formContItemTitle}>{t("sender")}</h4>
            <div className={styles.inputCont}>
              <label htmlFor="ttn">{t("ttnLabel")}<span className={styles.required}> *</span></label>
              <Field
                name="ttn"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setFieldValue("ttn", value);
            handleTTNChange(value, setFieldValue); // Передаємо setFieldValue
          }}
                className={styles.input}
              />
              <ErrorMessage
                name="ttn"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.flexCont}>
                <div className={styles.inputCont}>
                  <label>{t("senderNameLabel")}<span className={styles.required}> *</span></label>
                  <Field
                    name="senderName"
                    type="text"
                    value={values.senderName || senderName}
                                  className={styles.input}
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
         setFieldValue("senderName", value);
        
      }}
                  />
                  <ErrorMessage
                    name="senderName"
                    component="div"
                    className={styles.error}
                  />
                </div>
    
                <div className={styles.inputCont}>
                  <label>{t("senderSurnameLabel")}<span className={styles.required}> *</span></label>
                  <Field
                    name="senderSurname"
                    type="text"
                    value={values.senderSurname || senderSurname}
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="senderSurname"
                    component="div"
                    className={styles.error}
                  />
                </div>
            </div>
            <div className={styles.flexCont}>
                <div className={styles.inputCont}>
                  <label>{t("senderPhoneLabel")}<span className={styles.required}> *</span></label>
                  <PhoneInput
                                  country={"ua"}
                                
                    value={values.senderPhone || senderPhone}
                  onChange={(phone) => {
                    setFieldValue("senderPhone", phone); 
                  }}
                    inputClass={styles.phoneInput}
                  />
                  <ErrorMessage
                    name="senderPhone"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.inputCont}>
                  <label>{t("senderEmailLabel")}<span className={styles.required}> *</span></label>
                  <Field
                    name="senderEmail"
                    type="email"
                    value={values.senderEmail || senderEmail}
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="senderEmail"
                    component="div"
                    className={styles.error}
                  />
                </div>
            </div>
          </div>
          <div className={styles.sender}>
            <h4 className={styles.formContItemTitle}>Дані Отримувача</h4>
            <div className={styles.flexCont}>
                <div className={styles.inputCont}>
                  <label>{t("receiverNameLabel")}<span className={styles.required}> *</span></label>
                  <Field
                    name="receiverName"
                    type="text"
                    value={values.receiverName || receiverName}
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="receiverName"
                    component="div"
                    className={styles.error}
                  />
                </div>
    
                <div className={styles.inputCont}>
                  <label>{t("receiverSurnameLabel")}<span className={styles.required}> *</span></label>
                  <Field
                    name="receiverSurname"
                    type="text"
                    value={values.receiverSurname || receiverSurname}
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="receiverSurname"
                    component="div"
                    className={styles.error}
                  />
                </div>
            </div>
            <div className={styles.flexCont}>
                <div className={styles.inputCont}>
                  <label>{t("receiverPhoneLabel")}<span className={styles.required}> *</span></label>
                  <PhoneInput
                    country={"ua"}
                  value={values.receiverPhone || receiverPhone}
                   
                  // onChange={(phone) => {
                  //   setFieldValue("receiverPhone", phone);
                  //   console.log(phone);
                  // }
                  //   }
                  onChange={(value, country, e, formattedValue) => {
        const phoneWithPlus = "+" + value;
        setFieldValue("receiverPhone", phoneWithPlus);
        // console.log(phoneWithPlus);
    }}
                    inputClass={styles.phoneInput}
                  />
                  <ErrorMessage
                    name="receiverPhone"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.inputCont}>
                  <label>{t("senderEmailLabel")}<span className={styles.required}> *</span></label>
                  <Field
                    name="receiverEmail"
                    type="email"
                    value={values.receiverEmail || receiverEmail}
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="receiverEmail"
                    component="div"
                    className={styles.error}
                  />
              </div>
              
            </div>
            <div className={styles.inputCont}>
  <label className={styles.radioLabel}>
    <input
      type="checkbox"
      className={styles.radiobtn}
      checked={isCompany}
      onChange={() => setIsCompany(!isCompany)}
    />
    {t("companySenderLabel")}
    
  </label>
</div>

{isCompany && (
  <div className={styles.inputCont}>
    <label htmlFor="companyName">
      {t("companyNameLabel")}
      <span className={styles.required}> *</span>
    </label>
    <Field
      name="companyName"
      type="text"
      className={styles.input}
      maxLength={300}
    />
    <ErrorMessage
      name="companyName"
      component="div"
      className={styles.error}
    />
  </div>
)}

          </div>

                  <div className={styles.sender}>
                       <h4 className={styles.formContItemTitle}>{t("selectPayer")}</h4>
                      <div className={styles.inputRadio}>
  <label>
    <Field type="radio" name="payer" value="recipient" className={styles.radiobtn} />
    {t("payerReceiver")}
  </label>
  <label>
    <Field type="radio" name="payer" value="sender" className={styles.radiobtn} />
    {t("payerSender")}
  </label>
</div>
            <div className={styles.inputCont}>
              <label>{t("promocodeLabel")}</label>
              <Field name="promocode" type="text" className={styles.input} placeholder="Якщо маєш" />
              <ErrorMessage
                name="promocode"
                component="div"
                className={styles.error}
              />
            </div>

            
          </div>
          <p className={styles.requiredspan}>
            {" "}
            Треба заповнити обов&apos;язкові поля{" "}
            <span className={styles.required}>*</span>
          </p>
          <button type="submit" className={styles.button} >
            {t("submitButton")}<SvgIcon name="sparow" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Step1;
