'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from "./FormTransfer.module.css";
import { IconContext } from 'react-icons';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {  clearFormData, setFormData } from '@/store/formTransferSlice';
import StatusMessage from '../StatusMessage/StatusMessage';
import SvgIcon from '../SvgIcon';
import pixelEvents from '@/pixelEvents';

const schema = yup.object().shape({
  senderName: yup.string().required('sender_name_required'),
  senderSurname: yup.string().required('sender_surname_required'),
  senderEmail: yup.string().email('sender_email_invalid').required('sender_email_required'),
  senderPhone: yup.string().required('sender_phone_required'),
  hidePhone: yup.boolean(),
 

  sendDate: yup.date().required('send_date_required'),
  from: yup.string().required('from'),

  for: yup.string().required('for'),
  promoCode: yup.string(),
  agreement: yup.boolean().oneOf([true], 'agreement_required'),
});

type FormValues = yup.InferType<typeof schema>;
interface TransferProps {
  onClose: () => void;
  onBackToSelector: () => void; // Функція для повернення до вибору форми
}
const FormTransfer: React.FC<TransferProps>= ({ onClose, onBackToSelector }) => {
  const [date, setDate] = useState<Date | null>(null);
  const [sendStatus, setSendStatus] = useState<"error" | "success" | null>(null);
   const [initialized, setInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const storedFormData = useSelector((state: any) => state.formTransfer.formData) || {};
 
 const formData = watch(); 
  const t = useTranslations('FormTransfer');
  const dispatch = useDispatch();
    

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
  const onSubmit = async (data: FormValues) => {
      console.log(data);
    
    dispatch(setFormData(data));
    pixelEvents.initiateCheckout();
  pixelEvents.lead();
    setIsLoading(true);
    setStep(2);
      try {
        const response = await fetch('https://ivancom-server.onrender.com/forms/transfer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        setSendStatus('success');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const responseData = await response.json();
        console.log('Response from server:', responseData);
        dispatch(clearFormData()); // Зберігаємо дані форми в Redux
      } catch (error) {
        setSendStatus("error");
        console.error('Error submitting form:', error);
      }
      finally {
        setIsLoading(false);
       }
    };
  return (
     <div className={styles.formCont}> <button  onClick={onBackToSelector}>
        <IconContext.Provider value={{ color: "#black", size: "36px" }}>
          <div className={styles.backBtn}>
            <VscArrowSmallLeft />
          </div>
        </IconContext.Provider>
          </button>
          <button  onClick={onClose}>
        <IconContext.Provider value={{ color: "#black", size: "36px" }}>
          <div className={styles.closeBtn}>
            <IoMdClose />
          </div>
        </IconContext.Provider>
          </button>
          <h2 className={styles.titleMain}>Оформи переїзд легко та швидко</h2>
      {step === 1 && (<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formContItem}>
          <h2 className={styles.title}>Контакти</h2>
         <div className={styles.sendCont}>
            <label className={styles.inputLabel}>{t("sender_name")}
            <input {...register('senderName')} placeholder={t("sender_name")} className={styles.input} />
            {errors.senderName && <p className={styles.error}>{t(errors.senderName.message)}</p>}
            </label>
            <label className={styles.inputLabel}>{t("sender_surname")}
            <input {...register('senderSurname')} placeholder={t("sender_surname")} className={styles.input} />
            {errors.senderSurname && <p className={styles.error}>{t(errors.senderSurname.message)}</p>}
            </label>
         </div>
          <label className={styles.inputLabel}>{t("sender_email")} 
          <input {...register('senderEmail')} placeholder={t("sender_email")} type="email" className={styles.input} />
          {errors.senderEmail && <p className={styles.error}>{t(errors.senderEmail.message)}</p>}
          </label>
           <label className={styles.inputLabel}>{t("sender_phone")}
          <input {...register('senderPhone')} placeholder={t("sender_phone")} className={styles.input} />
          {errors.senderPhone && <p className={styles.error}>{t(errors.senderPhone.message)}</p>}
              </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" {...register('hidePhone')} className={styles.checkbox} />
            {t("hide_phone")}
          </label>
        </div>
        <div className={styles.formContItem}>
          <h2 className={styles.title}>Локація</h2>
          <label className={styles.inputLabel}>{t("from")} 
          <input {...register('from')} placeholder={t("from")} className={styles.input} />
          {errors.from && <p className={styles.error}>{t(errors.from.message)}</p>}
          </label>
          <label className={styles.inputLabel}>{t("for")}
            <input {...register('for')} placeholder={t("for")} className={styles.input} />
          {errors.for && <p className={styles.error}>{t(errors.for.message)}</p>}
             </label>
      
          <label className={styles.label}>
            {t("send_date")}:
            <DatePicker
              selected={date}
              onChange={(date) => {
                setDate(date);
                setValue('sendDate', date as Date);
              }}
              dateFormat="yyyy-MM-dd"
              className={styles.datepicker}
            />
            {errors.sendDate && <p className={styles.error}>{t(errors.sendDate.message)}</p>}
          </label>
      
           
      
            
      
        
      
            
      
          <label className={styles.checkboxLabel}>
            <input type="checkbox" {...register('agreement')} className={styles.checkbox} />
            {t("agreement")}
          </label>
          {errors.agreement && <p className={styles.error}>{t(errors.agreement.message)}</p>}
        </div>
    
        <button type="submit" className={styles.button}>{t("submit")}<SvgIcon name="sparow" /></button>
         
      </form>)}
      {step === 2 &&
        <StatusMessage
          changeStep={() => setStep(1)}
          isLoading={isLoading}
          sendStatus={sendStatus}
          onSubmit={() => onSubmit}
        />}
     </div>
  );
};

export default FormTransfer ;
