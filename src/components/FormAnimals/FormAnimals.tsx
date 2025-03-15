"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useMemo, useState } from "react";
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
    .required("upload_file_required") // Наприклад, поле є обов'язковим
    // .test("fileSize", "File is too large", (value) => {
    //   // Перевірка на наявність файлів
    //   if (!value || !(value instanceof FileList) || value.length === 0)
    //     return false;

    //   // Перевірка на розмір файлу (до 5 МБ)
    //   return value[0].size <= 5 * 1024 * 1024;
    // })
    // .test("fileType", "Unsupported File Format", (value) => {
    //   // Перевірка на формат файлу
    //   if (!value || !(value instanceof FileList) || value.length === 0)
    //     return false;

    //   const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    //   return allowedTypes.includes(value[0].type);
    // }),
});

type FormValues = yup.InferType<typeof schema>;
interface TransferProps {
  onClose: () => void;
  onBackToSelector: () => void; // Функція для повернення до вибору форми
}
const FormAnimals: React.FC<TransferProps> = ({
  onClose,
  onBackToSelector,
}) => {
  const [date, setDate] = useState<Date | null>(null);
  const [sendStatus, setSendStatus] = useState<"error" | "success" | null>(
    null
  );
  const [initialized, setInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const storedFormData =
    useSelector((state: any) => state.formAnimals.formData) || {};

  const formData = watch();
  const t = useTranslations("FormAnimals");
  const dispatch = useDispatch();
const [fileCount, setFileCount] = useState(0);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (files) {
    setFileCount(files.length);
    // Викликаємо валідацію для поля файлу вручну
    trigger("file");
  }
};
  //отримуємо данні з редаксу
  useEffect(() => {
    if (storedFormData && !initialized) {
      Object.keys(storedFormData).forEach((key) => {
        setValue(key as keyof FormValues, storedFormData[key]);
      });
      setInitialized(true);
    }
  }, [storedFormData, setValue, initialized]);
  //записуємо при кожній зміні в редакс
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      const isChanged = Object.keys(formData).some((key) => {
        const typedKey = key as keyof FormValues;
        return formData[typedKey] !== storedFormData[typedKey];
      });
      if (isChanged) {
        dispatch(setFormData(formData));
      }
    }
  }, [formData, dispatch, storedFormData]);
  //сабміт форми
  // const onSubmit = async (data: FormValues) => {
  //   console.log("submit");
  //   console.log(data);

  //   dispatch(setFormData(data));

  //   setIsLoading(true);
  //   setStep(2);
  //   try {
  //     const response = await fetch(
  //       "http://localhost:3000/forms/animals",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     );
  //     setSendStatus("success");

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const responseData = await response.json();
  //     console.log("Response from server:", responseData);
  //   } catch (error) {
  //     setSendStatus("error");
  //     console.error("Error submitting form:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
 const onSubmit = async (data: FormValues) => {
  console.log("submit");
  console.log(data);
  reset();
  dispatch(setFormData(data));

  setIsLoading(true);
  setStep(2);

  const formData = new FormData();

  // Додаємо всі дані з форми в FormData
  // Object.keys(data).forEach((key) => {
  //   const value = data[key as keyof FormValues];
  //   if (value) {
  //     formData.append(key, value);
  //   }
  // });

  // // Додаємо всі файли
  // if (data.file && data.file.length > 0) {
  //   Array.from(data.file).forEach((file) => {
  //     formData.append("file", file);
  //   });
  // }
Object.keys(data).forEach((key) => {
  const value = data[key as keyof FormValues];
  
  // Якщо значення не null, undefined або false, додаємо його в formData
  if (value !== null && value !== undefined && value !== false) {
    formData.append(key, String(value)); // Перетворюємо в рядок, якщо це не строка
  }
});

// Перевірка на файли
if (data.file && Array.isArray(data.file)) {
  data.file.forEach((file) => {
    // Перевірка чи це файл
    if (file instanceof File) {
      formData.append("file", file);
    }
  });
}
  try {
    const response = await fetch("https://ivancom-server.onrender.com/forms/animals", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    const responseData = await response.json();
    console.log("Response from server:", responseData);
    setSendStatus("success");
    reset();
    dispatch(clearFormData());
  } catch (error) {
    setSendStatus("error");
    console.error("Error submitting form:", error);
  } finally {
    setIsLoading(false);
  }
};
// const onSubmit = async (data: FormValues) => {
//   console.log(data);
//   reset();
//   dispatch(setFormData(data));

//   setIsLoading(true);
//   setStep(2);

//   const formData = new FormData();

//   // Додаємо всі дані з форми в FormData
//   Object.keys(data).forEach((key) => {
//     const value = data[key as keyof FormValues];
    
//     // Преобразование значения в строку, если это необходимо
//     if (value !== undefined && value !== null && value !== true && value !== false) {
//       formData.append(key, String(value));
//     }
//   });

//   // Додаємо файли, якщо вони є
//   if (data.file && data.file instanceof FileList) {
//     Array.from(data.file).forEach((file) => {
//       formData.append("file", file);
//     });
//   } else if (Array.isArray(data.file)) {
//     data.file.forEach((file) => {
//       if (file instanceof File) {
//         formData.append("file", file);
//       }
//     });
//   }

//   try {
//     const response = await fetch("https://ivancom-server.onrender.com/forms/animals", {
//       method: "POST",
//       body: formData,
//     });

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
    
//     const responseData = await response.json();
//     console.log("Response from server:", responseData);
//     setSendStatus("success");
//     reset();
//     dispatch(clearFormData());
//   } catch (error) {
//     setSendStatus("error");
//     console.error("Error submitting form:", error);
//   } finally {
//     setIsLoading(false);
//   }
// };
  return (
    <div className={styles.formCont}>
      {" "}
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
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} action="/animals" method="POST" encType="multipart/form-data">
          <div className={styles.formContItem}>
            <h2 className={styles.title}>Контакти</h2>
            <div className={styles.sendCont}>
              <label className={styles.inputLabel}>
                {t("sender_name")}
                <input
                  {...register("senderName")}
                  placeholder={t("sender_name")}
                  className={styles.input}
                />
                {errors.senderName && (
                  <p className={styles.error}>{t(errors.senderName.message)}</p>
                )}
              </label>
              <label className={styles.inputLabel}>
                {t("sender_surname")}
                <input
                  {...register("senderSurname")}
                  placeholder={t("sender_surname")}
                  className={styles.input}
                />
                {errors.senderSurname && (
                  <p className={styles.error}>
                    {t(errors.senderSurname.message)}
                  </p>
                )}
              </label>
            </div>
            <label className={styles.inputLabel}>
              {t("sender_email")}
              <input
                {...register("senderEmail")}
                placeholder={t("sender_email")}
                type="email"
                className={styles.input}
              />
              {errors.senderEmail && (
                <p className={styles.error}>{t(errors.senderEmail.message)}</p>
              )}
            </label>
            <label className={styles.inputLabel}>
              {t("sender_phone")}
              <input
                {...register("senderPhone")}
                placeholder={t("sender_phone")}
                className={styles.input}
              />
              {errors.senderPhone && (
                <p className={styles.error}>{t(errors.senderPhone.message)}</p>
              )}
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                {...register("hidePhone")}
                className={styles.checkbox}
              />
              {t("hide_phone")}
            </label>
          </div>
          <div className={styles.formContItem}>
            <h2 className={styles.title}>Локація</h2>
            <label className={styles.inputLabel}>
              {t("from")}
              <input
                {...register("from")}
                placeholder={t("from")}
                className={styles.input}
              />
              {errors.from && (
                <p className={styles.error}>{t(errors.from.message)}</p>
              )}
            </label>
            <label className={styles.inputLabel}>
              {t("for")}
              <input
                {...register("for")}
                placeholder={t("for")}
                className={styles.input}
              />
              {errors.for && (
                <p className={styles.error}>{t(errors.for.message)}</p>
              )}
            </label>

            <label className={styles.label}>
              {t("send_date")}:
              <DatePicker
                selected={date}
                onChange={(date) => {
                  setDate(date);
                  setValue("sendDate", date as Date);
                }}
                dateFormat="yyyy-MM-dd"
                className={styles.datepicker}
              />
              {errors.sendDate && (
                <p className={styles.error}>{t(errors.sendDate.message)}</p>
              )}
            </label>

            {errors.agreement && (
              <p className={styles.error}>{t(errors.agreement.message)}</p>
            )}
          </div>
          <div className={styles.formContItem}>
            <h2 className={styles.title}>Дані про тварину</h2>
            <div className={styles.sendCont}>
              <label className={styles.inputLabel}>
                {t("typeAnimals")}
  
                <select {...register("typeAnimals")} className={styles.select}>
                  <option value="">{t("typeAnimals")}</option>
                  <option value="Кіт">Кіт</option>
                  <option value="Собака">Собака</option>
                  <option value="Інше">Інше</option>
                </select>
                {errors.typeAnimals && (
                  <p className={styles.error}>{t(errors.typeAnimals.message)}</p>
                )}
              </label>
              <label className={styles.inputLabel}>
                {t("weightAnimals")}
  
                <select {...register("weightAnimals")} className={styles.select}>
                  <option value="">{t("weightAnimals")}</option>
                  <option value="9">до 10кг</option>
                  <option value="11">від 10кг</option>
                </select>
                {errors.typeAnimals && (
                  <p className={styles.error}>{t(errors.typeAnimals.message)}</p>
                )}
              </label>
            </div>
            <label className={styles.inputLabel}>
              {t("poroda")}
              <input
                {...register("poroda")}
                placeholder={t("poroda")}
                className={styles.input}
              />
              {errors.for && (
                <p className={styles.error}>{t(errors.for.message)}</p>
              )}
            </label>
           <label className={styles.inputLabel}>
        {t("upload_file")}
        <input
          {...register("file", { required: "Файли обов'язкові" })}
          type="file"
          multiple
          className={styles.inputFile}
          accept=".jpg, .jpeg, .png, .pdf"
          onChange={onFileChange}
        />
        <span className={styles.customButton}>
                {fileCount > 0 ? `${fileCount} файлів обрано` : "Обрати файли"}
                <FaDownload />
        </span>
      </label>

            

            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                {...register("agreement")}
                className={styles.checkbox}
              />
              {t("agreement")}
            </label>
            {errors.agreement && (
              <p className={styles.error}>{t(errors.agreement.message)}</p>
            )}
          </div>

          <button type="submit" className={styles.button}>
            {t("submit")}
            <SvgIcon name="sparow" />
          </button>
        </form>
      )}
      {step === 2 && (
        <StatusMessage
          changeStep={() => setStep(1)}
          isLoading={isLoading}
          sendStatus={sendStatus}
          onSubmit={() => onSubmit}
        />
      )}
    </div>
  );
};

export default FormAnimals;
