'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import styles from "./FormReklamacja.module.css";
import { IconContext } from 'react-icons';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import { IoMdClose } from 'react-icons/io';
import StatusMessage from '../StatusMessage/StatusMessage';
import SvgIcon from '../SvgIcon';

const schema = yup.object().shape({
  full_name: yup.string().required('Ім’я є обовʼязковим'),
  email: yup.string().email('Некоректний email').required('Email є обовʼязковим'),
  phone: yup.string().required('Телефон є обовʼязковим'),
  city: yup.string().required('Місто є обовʼязковим'),
  ttn_number: yup.string().required('Номер ТТН обовʼязковий'),
  direction: yup.string().required('Напрямок обовʼязковий'),
  parcel_content: yup.string().required('Вміст посилки обовʼязковий'),
  damage_type: yup.string().required('Тип пошкодження обовʼязковий'),
  compensation_type: yup.string().required('Тип компенсації обовʼязковий'),
  problem_description: yup.string().required('Опис проблеми обовʼязковий'),
});

type FormValues = yup.InferType<typeof schema>;

interface Props {
  onClose: () => void;
  onBackToSelector: () => void;
}

const ParcelClaimForm: React.FC<Props> = ({ onClose, onBackToSelector }) => {
  const [sendStatus, setSendStatus] = useState<"error" | "success" | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setStep(2);
    try {
      const response = await fetch('https://ivancom-server.onrender.com/parcel-claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      setSendStatus(response.ok ? 'success' : 'error');
    } catch (error) {
      setSendStatus("error");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.formCont}>
      <button onClick={onBackToSelector}>
        <IconContext.Provider value={{ color: "#black", size: "36px" }}>
          <div className={styles.backBtn}><VscArrowSmallLeft /></div>
        </IconContext.Provider>
      </button>
      <button onClick={onClose}>
        <IconContext.Provider value={{ color: "#black", size: "36px" }}>
          <div className={styles.closeBtn}><IoMdClose /></div>
        </IconContext.Provider>
      </button>
      <h2 className={styles.titleMain}>Подати рекламацію</h2>

      {step === 1 && (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formContItem}>
            <h2 className={styles.title}>Контактні дані</h2>
            <label className={styles.inputLabel}>ПІБ
              <input {...register('full_name')} className={styles.input} />
              {errors.full_name && <p className={styles.error}>{errors.full_name.message}</p>}
            </label>

            <label className={styles.inputLabel}>Email
              <input {...register('email')} className={styles.input} />
              {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </label>

            <label className={styles.inputLabel}>Телефон
              <input {...register('phone')} className={styles.input} />
              {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
            </label>

            <label className={styles.inputLabel}>Місто
              <input {...register('city')} className={styles.input} />
              {errors.city && <p className={styles.error}>{errors.city.message}</p>}
            </label>

            <label className={styles.inputLabel}>Номер ТТН
              <input {...register('ttn_number')} className={styles.input} />
              {errors.ttn_number && <p className={styles.error}>{errors.ttn_number.message}</p>}
            </label>

            <label className={styles.inputLabel}>Напрямок
              <select {...register('direction')} className={styles.input}>
                <option value="">Виберіть</option>
                <option value="UA-PL">Україна → Польща</option>
                <option value="PL-UA">Польща → Україна</option>
                <option value="International">Міжнародне</option>
              </select>
              {errors.direction && <p className={styles.error}>{errors.direction.message}</p>}
            </label>

            <label className={styles.inputLabel}>Вміст посилки
              <input {...register('parcel_content')} className={styles.input} />
              {errors.parcel_content && <p className={styles.error}>{errors.parcel_content.message}</p>}
            </label>

            <label className={styles.inputLabel}>Тип пошкодження
              <select {...register('damage_type')} className={styles.input}>
                <option value="">Виберіть</option>
                <option value="wrong_weight">Некоректна вага</option>
                <option value="incomplete_content">Неповний вміст</option>
                <option value="wet">Волога</option>
                <option value="scratched">Подряпини</option>
                <option value="lost">Втрачено</option>
                <option value="mixed">Переплутано</option>
                <option value="broken">Пошкоджено</option>
                <option value="other">Інше</option>
              </select>
              {errors.damage_type && <p className={styles.error}>{errors.damage_type.message}</p>}
            </label>

            <label className={styles.inputLabel}>Тип компенсації
              <select {...register('compensation_type')} className={styles.input}>
                <option value="">Виберіть</option>
                <option value="full_refund">Повне повернення коштів</option>
                <option value="partial_refund">Часткове повернення коштів</option>
                <option value="replacement">Заміна товару</option>
                <option value="recalculation">Перерахунок</option>
                <option value="other">Інше</option>
              </select>
              {errors.compensation_type && <p className={styles.error}>{errors.compensation_type.message}</p>}
            </label>

            <label className={styles.inputLabel}>Опис проблеми
              <textarea {...register('problem_description')} className={styles.input} />
              {errors.problem_description && <p className={styles.error}>{errors.problem_description.message}</p>}
            </label>

          </div>

          <button type="submit" className={styles.button}>Відправити <SvgIcon name="sparow" /></button>
        </form>
      )}

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

export default ParcelClaimForm;
