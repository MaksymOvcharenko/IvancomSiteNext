'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from "./FormWorld.module.css";
import { IconContext } from 'react-icons';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import { IoMdClose } from 'react-icons/io';

const schema = yup.object().shape({
  senderName: yup.string().required('t("sender_name_required")'),
  senderSurname: yup.string().required('t("sender_surname_required")'),
  senderEmail: yup.string().email('t("sender_email_invalid")').required('t("sender_email_required")'),
  senderPhone: yup.string().required('t("sender_phone_required")'),
  hidePhone: yup.boolean(),
  trackingNumber: yup.string().required('t("tracking_number_required")'),
  carrier: yup.string().required('t("carrier_required")'),
  sendDate: yup.date().required('t("send_date_required")'),
  content: yup.string().required('t("content_required")'),
  orderAmount: yup.number().typeError('t("order_amount_number")').required('t("order_amount_required")'),
  recipientSurname: yup.string().required('t("recipient_surname_required")'),
  recipientName: yup.string().required('t("recipient_name_required")'),
  recipientPhone: yup.string().required('t("recipient_phone_required")'),
  region: yup.string().required('t("region_required")'),
  city: yup.string().required('t("city_required")'),
  npDepartment: yup.string().required('t("np_department_required")'),
  currency: yup.string().required('t("currency_required")'),
  promoCode: yup.string(),
  agreement: yup.boolean().oneOf([true], 't("agreement_required")'),
});

type FormValues = yup.InferType<typeof schema>;
interface FormUkraineProps {
  onClose: () => void;
  onBackToSelector: () => void; // Функція для повернення до вибору форми
}
const FormWorldUA: React.FC<FormUkraineProps>= ({ onClose, onBackToSelector }) => {
  const [date, setDate] = useState<Date | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const t = useTranslations('FormWorld');

  const onSubmit = async (data: FormValues) => {
  try {
    const response = await fetch('https://ivancom-server.onrender.com/forms/worldtoua', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log('Response from server:', responseData);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
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
          
          <input {...register('trackingNumber')} placeholder={t("tracking_number")} className={styles.input} />
          {errors.trackingNumber && <p className={styles.error}>{t(errors.trackingNumber.message)}</p>}
          <label className={styles.label}>
            {t("carrier")}:
            <select {...register('carrier')} className={styles.select}>
              <option value="">{t("carrier")}</option>
              <option value="InPost">InPost</option>
              <option value="DPD">DPD</option>
              <option value="DHL">DHL</option>
              <option value="FedEx">FedEx</option>
              <option value="Pochtex">Pochtex</option>
              <option value="Raben">Raben</option>
              <option value="Pochta Polska">Pochta Polska</option>
            </select>
            {errors.carrier && <p className={styles.error}>{t(errors.carrier.message)}</p>}
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
    
          <input {...register('content')} placeholder={t("content")} className={styles.input} />
          {errors.content && <p className={styles.error}>{t(errors.content.message)}</p>}
    
          <input {...register('orderAmount')} placeholder={t("order_amount")} type="number" className={styles.input} />
          {errors.orderAmount && <p className={styles.error}>{t(errors.orderAmount.message)}</p>}
    
          <input {...register('recipientSurname')} placeholder={t("recipient_surname")} className={styles.input} />
          {errors.recipientSurname && <p className={styles.error}>{t(errors.recipientSurname.message)}</p>}
    
          <input {...register('recipientName')} placeholder={t("recipient_name")} className={styles.input} />
          {errors.recipientName && <p className={styles.error}>{t(errors.recipientName.message)}</p>}
    
          <input {...register('recipientPhone')} placeholder={t("recipient_phone")} className={styles.input} />
          {errors.recipientPhone && <p className={styles.error}>{t(errors.recipientPhone.message)}</p>}
    
          <input {...register('region')} placeholder={t("region")} className={styles.input} />
          {errors.region && <p className={styles.error}>{t(errors.region.message)}</p>}
    
          <input {...register('city')} placeholder={t("city")} className={styles.input} />
          {errors.city && <p className={styles.error}>{t(errors.city.message)}</p>}
    
          <input {...register('npDepartment')} placeholder={t("np_department")} className={styles.input} />
          {errors.npDepartment && <p className={styles.error}>{t(errors.npDepartment.message)}</p>}
    
          <input {...register('currency')} placeholder={t("currency")} className={styles.input} />
          {errors.currency && <p className={styles.error}>{t(errors.currency.message)}</p>}
    
          <input {...register('promoCode')} placeholder={t("promo_code")} className={styles.input} />
          {errors.promoCode && <p className={styles.error}>{t(errors.promoCode.message)}</p>}
    
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

export default FormWorldUA ;
