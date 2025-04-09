'use client';

import AttentionBlock from '@/components/AttentionBlock/AttentionBlock';
import styles from './AnimalsEuUa.module.css';
import { useTranslations } from 'next-intl';
import { FiFileText } from 'react-icons/fi';
import ButtonFormOnPage from '@/components/ButtonFormOnPage2/ButtonFormOnPage';
import Link from 'next/link';
import { LiaCoinsSolid } from 'react-icons/lia';

const AnimalsEuUa = () => {
  const t = useTranslations('EuUa.AnimalsEuUa');

  const tariffs = [
    {
      title: t('tariffs.0.title'),
      price: t('tariffs.0.price'),
      note: t('tariffs.0.note'),
    },
    {
      title: t('tariffs.1.title'),
      price: t('tariffs.1.price'),
      note: t('tariffs.1.note'),
    },
    {
      title: t('tariffs.2.title'),
      price: t('tariffs.2.price'),
      note: t('tariffs.2.note'),
    },
    ];
    const items = [{ text: t('important.text') }]

  return (
      <div className={styles.wrapper}>
          
      <p className={styles.subtitle}>{t('subtitle')}</p>

      <div className={styles.cardList}>
          {tariffs.map((tariff, index) => (
            <div className={styles.card} key={index}>
              <h3 className={styles.title}>{tariff.title}</h3>
              <p className={styles.price}><LiaCoinsSolid size={24} /> {tariff.price}</p>
              <p className={styles.note}>{tariff.note}</p>
              <ButtonFormOnPage defaultForm="animals">{t('formBtn')}</ButtonFormOnPage>
            </div>
          ))}
      </div>

      <div className={styles.attention}>
       <AttentionBlock items={items} />
              <div className={styles.attButtons}>
                  
          <Link href={"https://drive.google.com/file/d/10e0RL_LiUDktCViwbu5RbJXsxr6P2_lN/view"} className={styles.link} target='blank'>{t('important.rulesBtn')}</Link>
          <ButtonFormOnPage defaultForm="animals">{t('formBtn')}</ButtonFormOnPage>
        </div>
      </div>
    </div>
  );
};

export default AnimalsEuUa;
