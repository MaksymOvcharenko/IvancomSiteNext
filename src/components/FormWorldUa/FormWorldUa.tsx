

'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import styles from "./FormWorld.module.css";
import { IconContext } from 'react-icons';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

import { GoPencil } from "react-icons/go";
import { setFormData } from '@/store/formWorldtoUaSlice';
import StatusMessage from '../StatusMessage/StatusMessage';
import SvgIcon from '../SvgIcon';

const schema = yup.object().shape({
  senderName: yup.string().required('sender_name_required'),
  senderSurname: yup.string().required('sender_surname_required'),
  senderEmail: yup.string().email('sender_email_invalid').required('sender_email_required'),
  senderPhone: yup.string().required('sender_phone_required'),
  hidePhone: yup.boolean(),
  trackingNumber: yup.string().required('tracking_number_required'),
  carrier: yup.string().required('carrier_required'),
  sendDate: yup.date().required('send_date_required'),
  content: yup.string().required('content_required'),
  orderAmount: yup.number().typeError('order_amount_number').required('order_amount_required'),
  recipientSurname: yup.string().required('recipient_surname_required'),
  recipientName: yup.string().required('recipient_name_required'),
  recipientPhone: yup.string().required('recipient_phone_required'),
  region: yup.string().required('region_required'),
  city: yup.string().required('city_required'),
  npDepartment: yup.string().required('np_department_required'),
  currency: yup.string().required('currency_required'),
  currencyPay: yup.string().required('currencyPay_required'),
  promoCode: yup.string(),
  agreement: yup.boolean().oneOf([true], 'agreement_required'),
});

type FormValues = yup.InferType<typeof schema>;

interface FormUkraineProps {
  onClose: () => void;
  onBackToSelector: () => void;
}

const FormWorldUA: React.FC<FormUkraineProps> = ({ onClose, onBackToSelector }) => {
  const [date, setDate] = useState<Date | null>(null);
  const [step, setStep] = useState(1); // Стейт для відображення кроків
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const t = useTranslations('FormWorld');
  const formData = watch()|| {};
  const storedFormData = useSelector((state: any) => state.formWorldtoUa.formData) || {};
 const [sendStatus, setSendStatus] = useState<"error" | "success" | null>(null);

  const [initialized, setInitialized] = useState(false);
  const [ isLoading , setIsLoading ] = useState(false);


  useEffect(() => {
    if (storedFormData && !initialized) {
      Object.keys(storedFormData).forEach((key) => {
        setValue(key as keyof FormValues, storedFormData[key]);
      });
      setInitialized(true);
    }
  }, [storedFormData, setValue, initialized]);

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

  const onSubmit = async (data: FormValues) => {
    console.log("submit");
    setStep(5);
    dispatch(setFormData(data));
    setIsLoading(true);
    try {
      const response = await fetch('https://ivancom-server.onrender.com/forms/worldtoua', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(data);
      
      setSendStatus('success');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Response from server:', responseData);
    } catch (error) {
      setSendStatus("error");
      console.error('Error submitting form:', error);
    }
    finally {
      setIsLoading(false);
     }
  };

const handleNextStep = async () => {
  let valid = false;

  if (step === 1) {
    
    valid = await trigger([
      'senderName', 
      'senderSurname', 
      'senderPhone',
      
      'hidePhone',
      'senderEmail', 
      'agreement',
    ]);
  } else if (step === 2) {
    
    valid = await trigger([
      'recipientSurname', 
      'recipientName', 
      'recipientPhone',
      'region',
      'city',
      'npDepartment',
    ]);
  } else if (step === 3) {
    // Перевіряємо лише поля третього кроку
    valid = await trigger([
      'trackingNumber', 
      'carrier', 
      'sendDate',
      'content',
      'orderAmount',
      'currency',
      'currencyPay',
    ]);
  } else if (step === 4) {
    
    valid = true;
  }

  if (valid) {
    setStep(prevStep => prevStep + 1); 
  } else {
    console.log("Форма не валідна, не можна перейти на наступний крок");
  }
};


  const handleBackStep = () => {
    setStep(step - 1);
  };
   const handleEdit = (field: string) => {
    if (field === 'sender') {
      setStep(1);
    } else if (field === 'recipient') {
      setStep(2);
    } else if (field === 'package') {
      setStep(3);
    }
  };

  return (
    <>
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

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* <h2 className={styles.title}>{t("title")}</h2> */}

        {/* Крок 1: Дані відправника */}
        {step === 1 && (
          <div className={styles.formCont}>
            <h4 className={styles.formContTitle} >Крок 1</h4> 
            <div className={styles.formContItem}>
              <h4 className={styles.formContItemTitle} >{t("sender")}</h4> 
              <div className={styles.senderCont}>
                <label className={styles.inputLabel}>{t("sender_name")}
                <input {...register('senderName')} placeholder={t("sender_name")} className={styles.input} />
                {errors.senderName && <p className={styles.error}>{t(errors.senderName.message)}</p>}</label>
                <label className={styles.inputLabel}>{t("sender_surname")}
                <input {...register('senderSurname')} placeholder={t("sender_surname")} className={styles.input} />
                {errors.senderSurname && <p className={styles.error}>{t(errors.senderSurname.message)}</p>}
                </label>
              </div>
              
              <label className={styles.inputLabel}>{t("sender_phone")}
              <input {...register('senderPhone')} placeholder={t("sender_phone")} className={styles.input} />
              {errors.senderPhone && <p className={styles.error}>{t(errors.senderPhone.message)}</p>}
             </label>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" {...register('hidePhone')} className={styles.checkbox} />
                {t("hide_phone")}
              </label>
              <label className={styles.inputLabel}>{t("sender_email")}
              <input {...register('senderEmail')} placeholder={t("sender_email")} type="email" className={styles.input} />
              {errors.senderEmail && <p className={styles.error}>{t(errors.senderEmail.message)}</p>}</label>
              <label className={styles.checkboxLabel}>
              <input type="checkbox" {...register('agreement')} className={styles.checkbox} />
              {t("agreement")}
            </label>
            </div>
            <div className={styles.btnCont}>
              <button type="button" onClick={handleNextStep} className={styles.button}>
                {t("next")}<SvgIcon name="sparow" />
              </button>
            </div>
          </div>
        )}

        {/* Крок 2: Дані отримувача */}
        {step === 2 && (
          <div className={styles.formCont}>
            <h4 className={styles.formContTitle} >Крок 2</h4> 
             <div className={styles.formContItem}>
              <h4 className={styles.formContItemTitle} >{t("recipient")}</h4> 
              
            <div className={styles.recipientCont}>
              <label className={styles.inputLabel}>{t("recipient_surname")}
                <input {...register('recipientSurname')} placeholder={t("recipient_surname")} className={styles.input} />
                {errors.recipientSurname && <p className={styles.error}>{t(errors.recipientSurname.message)}</p>}
              </label>
             <label className={styles.inputLabel}>{t("recipient_name")}
              <input {...register('recipientName')} placeholder={t("recipient_name")} className={styles.input} />
              {errors.recipientName && <p className={styles.error}>{t(errors.recipientName.message)}</p>}
                </label>
                <label className={styles.inputLabel}>{t("recipient_phone")} 
              <input {...register('recipientPhone')} placeholder={t("recipient_phone")} className={styles.input} />
                  {errors.recipientPhone && <p className={styles.error}>{t(errors.recipientPhone.message)}</p>}
                </label>
              </div>
              <div className={styles.recipientCont}>
               <label className={styles.inputLabel}>{t("region")}
            <input {...register('region')} placeholder={t("region")} className={styles.input} />
          {errors.region && <p className={styles.error}>{t(errors.region.message)}</p>}
              </label>
              <label className={styles.inputLabel}>{t("city")}
          <input {...register('city')} placeholder={t("city")} className={styles.input} />
          {errors.city && <p className={styles.error}>{t(errors.city.message)}</p>}
              </label>
              <label className={styles.inputLabel}>{t("np_department")}
          <input {...register('npDepartment')} placeholder={t("np_department")} className={styles.input} />
                {errors.npDepartment && <p className={styles.error}>{t(errors.npDepartment.message)}</p>}
              </label>
              </div>
            </div>
              <div className={styles.btnCont}>
                <button type="button" onClick={handleBackStep} className={styles.buttonBack}>
                  {t("back")}
                  
              </button>
  
              <button type="button" onClick={handleNextStep} className={styles.button}>
                {t("next")}<SvgIcon name="sparow" />
              </button>
              </div>
          </div>
        )}

        {/* Крок 3: Дані про посилку */}
        {step === 3 && (
          <div className={styles.formCont}>
            <h4 className={styles.formContTitle} >Крок 3</h4> 
             <div className={styles.formContItem}>
              <h4 className={styles.formContItemTitle} >{ t("send_data")}</h4>
           <label className={styles.inputLabel}>{t("tracking_number")}
              <input {...register('trackingNumber')} placeholder={t("tracking_number")} className={styles.input} />
            {errors.trackingNumber && <p className={styles.error}>{t(errors.trackingNumber.message)}</p>}
           </label>
            <div className={styles.dataCont}>
              <label className={styles.inputLabel}>
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
                    <option value="GLS">GLS</option>
                    <option value="Інше">Інше</option>
                </select>
                {errors.carrier && <p className={styles.error}>{t(errors.carrier.message)}</p>}
              </label>
  
              <label className={styles.inputLabel}>
                {t("send_date")}:
                <DatePicker
                    selected={date}
                    onClickOutside={() => (document.activeElement as HTMLElement)?.blur()}
                   shouldCloseOnSelect={true}
                  onChange={(date) => {
                    setDate(date);
                    setValue('sendDate', date as Date);
                    
                  }}
                  dateFormat="yyyy-MM-dd"
                    className={styles.datepicker}
                   
                />
                {errors.sendDate && <p className={styles.error}>{t(errors.sendDate.message)}</p>}
                </label>
            </div></div>
              
            <div className={styles.formContItem}>
              <h4 className={styles.formContItemTitle} >{t("content")}</h4>
              <label className={styles.inputLabel}>
              <textarea {...register('content')}  placeholder={t("content")} className={styles.input} />
                {errors.content && <p className={styles.error}>{t(errors.content.message)}</p>}
            </label></div>
            <div className={styles.formContItem}>
              <h4 className={styles.formContItemTitle} >{t("order_amount")}</h4>
             <div className={styles.orderCont}>
                <label className={styles.inputLabel}>{t("order_amount")}
     <input {...register('orderAmount')} placeholder={t("order_amount")} type="number" className={styles.input} />
                  {errors.orderAmount && <p className={styles.error}>{t(errors.orderAmount.message)}</p>}
                </label>
                <label className={styles.inputLabel}>{t("currency")}
           
                  
                  <select {...register('currency')} className={styles.select}>
                  <option value="">{t("currency")}</option>
                  <option value="PLN">PLN</option>
                  <option value="UAH">UAH</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  
                  </select>
                  {errors.currency && <p className={styles.error}>{t(errors.currency.message)}</p>}
                </label>
                 <label className={styles.inputLabel}>{t("currencyPay")}
           
                  
                  <select {...register('currencyPay')} className={styles.select}>
                  <option value="">{t("currencyPay")}</option>
                  <option value="PLN">PLN</option>
                  <option value="UAH">UAH</option>
                  
                  
                  </select>
                  {errors.currencyPay && <p className={styles.error}>{t(errors.currencyPay.message)}</p>}
                </label>
            
              <label className={styles.inputLabel}>{t("promo_code")}
          <input {...register('promoCode')} placeholder={t("promo_code")} className={styles.input} />
                {errors.promoCode && <p className={styles.error}>{t(errors.promoCode.message)}</p>}
                </label>
                 </div>
              </div>
              
           <div className={styles.btnCont}>
                <button type="button" onClick={handleBackStep} className={styles.buttonBack}>
                  {t("back")}
                  
              </button>
  
              <button type="button" onClick={handleNextStep} className={styles.button}>
                {t("next")}<SvgIcon name="sparow" />
              </button>
              </div>
            
            </div>
        )}

        {/* Крок 4: Підсумок */}
        {step === 4 && (
        <div>
          <div className={styles.formCont}>
            <h3 className={styles.formContTitle}>Підсумок</h3>
            <div className={styles.resultContMain}>
                <div className={styles.formContItem}>
                  
                  <div className={styles.titleCont}><h4 className={styles.formContItemTitle} >{ t("sender")}</h4> <GoPencil onClick={() => handleEdit('sender')} color='#0884d5' /></div>
                  <div className={styles.resSendCont}>
                    <p  className={styles.resultContItemDesc}>{ t("sender_name")}:<p>{formData.senderName} </p></p>
                  <p className={styles.resultContItemDesc}>{ t("sender_surname")}:<p>{formData.senderSurname}</p></p>
                  </div>
                <p className={styles.resultContItemDesc}>{ t("sender_phone")}:<p>{formData.senderPhone}</p></p>
                <p className={styles.resultContItemDesc}>{ t("sender_email")}:<p>{formData.senderEmail}</p></p>  
                
              </div>
              <div className={styles.formContItem}>
                  <div className={styles.titleCont}><h4 className={styles.formContItemTitle} >{ t("recipient")}</h4> <GoPencil onClick={() => handleEdit('recipient')} color='#0884d5'/></div>
                  <div className={styles.resSendCont}><p  className={styles.resultContItemDesc}>{ t("recipient_name")}:<p>{formData.recipientName}</p> </p>
                <p className={styles.resultContItemDesc}>{ t("recipient_surname")}:<p>{formData.recipientSurname}</p></p></div>
                <p className={styles.resultContItemDesc}>{ t("recipient_phone")}:<p>{formData.recipientPhone}</p></p>
                   <div className={styles.resSendCont}><p className={styles.resultContItemDesc}>{t("region")}:<p>{formData.region}</p></p>
                  <p className={styles.resultContItemDesc}>{t("city")}:<p>{formData.city}</p></p> </div> 
                <p className={styles.resultContItemDesc}>{ t("np_department")}:<p>{formData.npDepartment}</p></p>   
  
              </div>
              <div className={styles.formContItem}>
                <div className={styles.titleCont}><h4 className={styles.formContItemTitle} >{ t("send_data")}</h4> <GoPencil onClick={() => handleEdit('package')}color='#0884d5'  /></div>
                  <p  className={styles.resultContItemDesc}>{ t("tracking_number")}:<p>{formData.trackingNumber}</p> </p>
                <div className={styles.resSendCont}><p className={styles.resultContItemDesc}>{ t("carrier")}:<p>{formData.carrier}</p></p>
                <p className={styles.resultContItemDesc}>{ t("send_date")}:<p>{formData.sendDate ? new Date(formData.sendDate).toLocaleDateString('uk-UA') : "Дата не вказана"}</p></p></div>
                  <p className={styles.resultContItemDesc}>{t("content")}:<p>{formData.content}</p></p>
                  <div className={styles.resSendCont}><p className={styles.resultContItemDesc}>{t("order_amount")}:<p>{formData.orderAmount}{formData.currency}</p></p> 
                <p className={styles.resultContItemDesc}>{ t("promo_code")}:<p>{formData.promoCode || "-"}</p></p> 
                </div>
              </div>
              </div>
                <div className={styles.btnCont}>
                <button type="button" onClick={handleBackStep} className={styles.buttonBack}>
                  {t("back")}
                  
              </button>
  
                <button type="button" onClick={handleSubmit(onSubmit)} className={styles.button}>
                {t("next")}<SvgIcon name="sparow" />
              </button>
              </div>
          </div>
        
          
        </div>
      )}

      {step === 5 && (

          <StatusMessage 
            changeStep={()=>setStep(1)}
  isLoading={isLoading} 
  sendStatus={sendStatus} 
  onSubmit={()=>onSubmit} 
/>
)}

      {/* {step < 5 && <button onClick={handleNextStep}>Далі</button>} */}
      </form>
    </>
  );
};

export default FormWorldUA;

             