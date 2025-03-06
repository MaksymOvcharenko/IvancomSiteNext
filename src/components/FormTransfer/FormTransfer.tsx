'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from "./FormTransfer.module.css";
import { IconContext } from 'react-icons';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import { IoMdClose } from 'react-icons/io';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const t = useTranslations('FormTransfer');

  const onSubmit = (data: FormValues): void => {
  console.log(data);
};


  return (
     <> <button  onClick={onBackToSelector}>
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
          
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <h2 className={styles.title}>{t("title")}</h2>
              <input {...register('senderName')} placeholder={t("sender_name")} className={styles.input} />
          {errors.senderName && <p className={styles.error}>{t(errors.senderName.message)}</p>}
          
          <input {...register('senderSurname')} placeholder={t("sender_surname")} className={styles.input} />
          {errors.senderSurname && <p className={styles.error}>{t(errors.senderSurname.message)}</p>}
          
          <input {...register('senderEmail')} placeholder={t("sender_email")} type="email" className={styles.input} />
          {errors.senderEmail && <p className={styles.error}>{t(errors.senderEmail.message)}</p>}
          
          <input {...register('senderPhone')} placeholder={t("sender_phone")} className={styles.input} />
          {errors.senderPhone && <p className={styles.error}>{t(errors.senderPhone.message)}</p>}
          
          <label className={styles.checkboxLabel}>
            <input type="checkbox" {...register('hidePhone')} className={styles.checkbox} />
            {t("hide_phone")}
          </label>
           <input {...register('from')} placeholder={t("from")} className={styles.input} />
          {errors.from && <p className={styles.error}>{t(errors.from.message)}</p>}
              <input {...register('for')} placeholder={t("for")} className={styles.input} />
          {errors.for && <p className={styles.error}>{t(errors.for.message)}</p>}
          
    
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
    
          <button type="submit" className={styles.button}>{t("submit")}</button>
        </form>
     </>
  );
};

export default FormTransfer ;
