
"use client";

import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./FormAnimals.module.css";
import { IconContext } from "react-icons";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import StatusMessage from "../StatusMessage/StatusMessage";
import SvgIcon from "../SvgIcon";
import { clearFormData, setFormData } from "@/store/formAnimals";
import { FaDownload } from "react-icons/fa6";
import pixelEvents from "@/pixelEvents";

const schema = yup.object().shape({
  senderName: yup.string().required("sender_name_required"),
  senderSurname: yup.string().required("sender_surname_required"),
  senderEmail: yup
    .string()
    .email("sender_email_invalid")
    .required("sender_email_required"),
  senderPhone: yup.string().required("sender_phone_required"),
  hidePhone: yup.boolean(),
  sendDate: yup.date().required("send_date_required"),
  from: yup.string().required("from"),
  for: yup.string().required("for"),
  promoCode: yup.string(),
  agreement: yup.boolean().oneOf([true], "agreement_required"),
  typeAnimals: yup.string().required("typeAnimals_required"),
  weightAnimals: yup.string().required("weightAnimals_required"),
  poroda: yup.string().required("poroda"),
  file: yup
    .mixed()
    .required("upload_file_required")
    .test("fileSize", "File is too large", (value) => {
      if (!value || !(value instanceof FileList) || value.length === 0) return false;
      return value[0].size <= 5 * 1024 * 1024;
    })
    .test("fileType", "Unsupported File Format", (value) => {
      if (!value || !(value instanceof FileList) || value.length === 0) return false;
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
      return allowedTypes.includes(value[0].type);
    }),
});

type FormValues = yup.InferType<typeof schema>;

interface TransferProps {
  onClose: () => void;
  onBackToSelector: () => void;
}

// Компонент-спостерігач для синхронізації даних форми з Redux
const FormObserver: React.FC<{ storedFormData: any }> = ({ storedFormData }) => {
  const { values } = useFormikContext<FormValues>();
  const dispatch = useDispatch();

  useEffect(() => {
    const isChanged = Object.keys(values).some(
      (key) => values[key as keyof FormValues] !== storedFormData[key]
    );
    if (isChanged) {
      dispatch(setFormData(values));
    }
  }, [values, dispatch, storedFormData]);

  return null;
};

// Окрема функція сабміту, яка приймає всі необхідні параметри, включаючи dispatch
const handleSubmitForm = async (
  values: FormValues,
  resetForm: () => void,
  dispatch: any,
  setSendStatus: (status: "error" | "success" | null) => void,
  setIsLoading: (value: boolean) => void,
  setStep: (step: number) => void
) => {
  setIsLoading(true);
  setStep(2);
  const formDataToSend = new FormData();
  pixelEvents.initiateCheckout();
  pixelEvents.lead();
  if (values.file) {
    Array.from(values.file as FileList).forEach((file) =>
      formDataToSend.append("file", file)
    );
  }
  Object.entries(values).forEach(([key, value]) => {
    if (value && key !== "file") {
      formDataToSend.append(key, value as string);
    }
  });
  for (let [key, value] of Array.from(formDataToSend.entries())) {
    console.log(`${key}:`, value);
  }
  try {
    const response = await fetch(
      "https://ivancom-server.onrender.com/forms/animals",
      {
        method: "POST",
        body: formDataToSend,
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData = await response.json();
    console.log("Відповідь сервера:", responseData);
    setSendStatus("success");
    resetForm();
    dispatch(clearFormData());
  } catch (error) {
    setSendStatus("error");
    console.error("Помилка відправки:", error);
  } finally {
    setIsLoading(false);
  }
};

const FormAnimals: React.FC<TransferProps> = ({ onClose, onBackToSelector }) => {
  const [sendStatus, setSendStatus] = useState<"error" | "success" | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [fileCount, setFileCount] = useState(0);

  const storedFormData = useSelector((state: any) => state.formAnimals.formData) || {};
  const t = useTranslations("FormAnimals");
  const dispatch = useDispatch();

  const initialValues: FormValues = {
    senderName: storedFormData.senderName || "",
    senderSurname: storedFormData.senderSurname || "",
    senderEmail: storedFormData.senderEmail || "",
    senderPhone: storedFormData.senderPhone || "",
    hidePhone: storedFormData.hidePhone || false,
    sendDate: storedFormData.sendDate || null,
    from: storedFormData.from || "",
    for: storedFormData.for || "",
    promoCode: storedFormData.promoCode || "",
    agreement: storedFormData.agreement || false,
    typeAnimals: storedFormData.typeAnimals || "",
    weightAnimals: storedFormData.weightAnimals || "",
    poroda: storedFormData.poroda || "",
    file: storedFormData.file || null,
  };

  return (
    <div className={styles.formCont}>
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
      <h2 className={styles.titleMain}>
        Відправ свого улюбленця просто разом з нами
      </h2>
      {step === 1 && (
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) =>
            handleSubmitForm(values, resetForm, dispatch, setSendStatus, setIsLoading, setStep)
          }
        >
          {({ values, setFieldValue }) => (
            <>
              <FormObserver storedFormData={storedFormData} />
              <Form className={styles.form} encType="multipart/form-data">
                <div className={styles.formContItem}>
                  <h2 className={styles.title}>Контакти</h2>
                  <div className={styles.sendCont}>
                    <label className={styles.inputLabel}>
                      {t("sender_name")}
                      <Field
                        name="senderName"
                        placeholder={t("sender_name")}
                        className={styles.input}
                      />
                      <ErrorMessage name="senderName">
                        {(msg) => <p className={styles.error}>{t(msg)}</p>}
                      </ErrorMessage>
                    </label>
                    <label className={styles.inputLabel}>
                      {t("sender_surname")}
                      <Field
                        name="senderSurname"
                        placeholder={t("sender_surname")}
                        className={styles.input}
                      />
                      <ErrorMessage name="senderSurname">
                        {(msg) => <p className={styles.error}>{t(msg)}</p>}
                      </ErrorMessage>
                    </label>
                  </div>
                  <label className={styles.inputLabel}>
                    {t("sender_email")}
                    <Field
                      name="senderEmail"
                      type="email"
                      placeholder={t("sender_email")}
                      className={styles.input}
                    />
                    <ErrorMessage name="senderEmail">
                      {(msg) => <p className={styles.error}>{t(msg)}</p>}
                    </ErrorMessage>
                  </label>
                  <label className={styles.inputLabel}>
                    {t("sender_phone")}
                    <Field
                      name="senderPhone"
                      placeholder={t("sender_phone")}
                      className={styles.input}
                    />
                    <ErrorMessage name="senderPhone">
                      {(msg) => <p className={styles.error}>{t(msg)}</p>}
                    </ErrorMessage>
                  </label>
                  <label className={styles.checkboxLabel}>
                    <Field
                      name="hidePhone"
                      type="checkbox"
                      className={styles.checkbox}
                    />
                    {t("hide_phone")}
                  </label>
                </div>
                <div className={styles.formContItem}>
                  <h2 className={styles.title}>Локація</h2>
                  <label className={styles.inputLabel}>
                    {t("from")}
                    <Field
                      name="from"
                      placeholder={t("from")}
                      className={styles.input}
                    />
                    <ErrorMessage name="from">
                      {(msg) => <p className={styles.error}>{t(msg)}</p>}
                    </ErrorMessage>
                  </label>
                  <label className={styles.inputLabel}>
                    {t("for")}
                    <Field
                      name="for"
                      placeholder={t("for")}
                      className={styles.input}
                    />
                    <ErrorMessage name="for">
                      {(msg) => <p className={styles.error}>{t(msg)}</p>}
                    </ErrorMessage>
                  </label>
                  <label className={styles.label}>
                    {t("send_date")}:
                    <DatePicker
                      selected={values.sendDate ? new Date(values.sendDate) : null}
                      onChange={(date: Date | null) => setFieldValue("sendDate", date)}
                      dateFormat="yyyy-MM-dd"
                      className={styles.datepicker}
                    />
                    <ErrorMessage name="sendDate">
                      {(msg) => <p className={styles.error}>{t(msg)}</p>}
                    </ErrorMessage>
                  </label>
                </div>
                <div className={styles.formContItem}>
                  <h2 className={styles.title}>Дані про тварину</h2>
                  <div className={styles.sendCont}>
                    <label className={styles.inputLabel}>
                      {t("typeAnimals")}
                      <Field as="select" name="typeAnimals" className={styles.select}>
                        <option value="">{t("typeAnimals")}</option>
                        <option value="Кіт">Кіт</option>
                        <option value="Собака">Собака</option>
                        <option value="Інше">Інше</option>
                      </Field>
                      <ErrorMessage name="typeAnimals">
                        {(msg) => <p className={styles.error}>{t(msg)}</p>}
                      </ErrorMessage>
                    </label>
                    <label className={styles.inputLabel}>
                      {t("weightAnimals")}
                      <Field as="select" name="weightAnimals" className={styles.select}>
                        <option value="">{t("weightAnimals")}</option>
                        <option value="9">до 10кг</option>
                        <option value="11">від 10кг</option>
                      </Field>
                      <ErrorMessage name="weightAnimals">
                        {(msg) => <p className={styles.error}>{t(msg)}</p>}
                      </ErrorMessage>
                    </label>
                  </div>
                  <label className={styles.inputLabel}>
                    {t("poroda")}
                    <Field
                      name="poroda"
                      placeholder={t("poroda")}
                      className={styles.input}
                    />
                    <ErrorMessage name="poroda">
                      {(msg) => <p className={styles.error}>{t(msg)}</p>}
                    </ErrorMessage>
                  </label>
                  <label className={styles.inputLabel}>
                    {t("upload_file")}
                    <input
                      name="file"
                      type="file"
                      multiple
                      className={styles.inputFile}
                      accept=".jpg, .jpeg, .png, .pdf"
                      onChange={(e) => {
                        if (e.target.files) {
                          setFieldValue("file", e.target.files);
                          setFileCount(e.target.files.length);
                        }
                      }}
                    />
                    <span className={styles.customButton}>
                      {fileCount > 0
                        ? `${fileCount} файлів обрано`
                        : "Обрати файли"}
                      <FaDownload />
                    </span>
                    <ErrorMessage name="file">
                      {(msg) => <p className={styles.error}>{t(msg)}</p>}
                    </ErrorMessage>
                  </label>
                  <label className={styles.checkboxLabel}>
                    <Field
                      name="agreement"
                      type="checkbox"
                      className={styles.checkbox}
                    />
                    {t("agreement")}
                  </label>
                  <ErrorMessage name="agreement">
                    {(msg) => <p className={styles.error}>{t(msg)}</p>}
                  </ErrorMessage>
                </div>
                <button type="submit" className={styles.button}>
                  {t("submit")}
                  <SvgIcon name="sparow" />
                </button>
              </Form>
            </>
          )}
        </Formik>
      )}
      {step === 2 && (
        <StatusMessage
          changeStep={() => setStep(1)}
          isLoading={isLoading}
          sendStatus={sendStatus}
          onSubmit={() => {}}
        />
      )}
    </div>
  );
};

export default FormAnimals;
