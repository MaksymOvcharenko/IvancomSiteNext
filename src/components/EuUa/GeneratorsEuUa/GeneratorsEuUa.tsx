

import AttentionBlock from '@/components/AttentionBlock/AttentionBlock';
import styles from './GeneratorsEuUa.module.css';
import { useTranslations } from 'next-intl';
import { FiFileText } from 'react-icons/fi';
import ButtonFormOnPage from '@/components/ButtonFormOnPage2/ButtonFormOnPage';
import Link from 'next/link';
import { LiaCoinsSolid } from 'react-icons/lia';
import DeliveryTable from '@/components/DeliveryTable/DeliveryTable';
import SelectorEuUa from '@/components/SelectorEuUa/SelectorEuUa';
import FromIntShop from './FromIntShop/FromIntShop';

const GeneratorsEuUa = () => {

const t = useTranslations('EuUa.GeneratorsEuUa');
  const tariffs = [
    {
      title: t('tariffs.0.title'),
      price: t('tariffs.0.price'),
     
    },
    {
      title: t('tariffs.1.title'),
      price: t('tariffs.1.price'),
      
    },
    {
      title: t('tariffs.2.title'),
      price: t('tariffs.2.price'),
      
    },
     {
      title: t('tariffs.3.title'),
      price: t('tariffs.0.price'),
     
    },
    {
      title: t('tariffs.4.title'),
      price: t('tariffs.1.price'),
    
    },
   
  ];
  const attentionTexts = [
    { text: t('attention.0') },
    { text: t('attention.1') },
    { text: t('attention.2') },
    { text: t('attention.3') },
    { text: t('attention.4') },
    { text: t('attention.5') },
    {
      text: t('attention.6.text'),
      linkText: t('attention.6.linkText'),
      linkHref: 'ivancom.eu/uk#schedule',
    },
    { text: t('attention.7') },
    { text: t('attention.8') },
  ];

  const deliveryWithNotes = {
    title: t('table.title'),
    rows: [
      { weight: t('table.rows.0.weight'), price: t('table.rows.0.price') },
      { weight: t('table.rows.1.weight'), price: t('table.rows.1.price') },
      { weight: t('table.rows.2.weight'), price: t('table.rows.2.price') },
      { weight: t('table.rows.3.weight'), price: t('table.rows.3.price') },
      { weight: t('table.rows.4.weight'), price: t('table.rows.4.price') },
      { weight: t('table.rows.5.weight'), price: t('table.rows.5.price') },
    ],
    notes: [
      t('table.notes.0'),
      t('table.notes.1'),
      t('table.notes.2'),
      t('table.notes.3'),
    ],
  };


  return (
      <div className={styles.wrapper}>
          
      <p className={styles.subtitle}>{t('subtitle')}</p>

      <div className={styles.cardList}>
          {tariffs.map((tariff, index) => (
            <div className={styles.card} key={index}>
              <h3 className={styles.title}>{tariff.title}</h3>
              <p className={styles.price}><LiaCoinsSolid size={24} /> {tariff.price}</p>
           
              <ButtonFormOnPage defaultForm="world_to_ukraine">{t('formBtn')}</ButtonFormOnPage>
            </div>
          ))}
      </div>
      <p className={styles.subtitle}>{t('subtitle2')}</p>
      <DeliveryTable data={deliveryWithNotes} />
      <p className={styles.subtitle}>{t('subtitle3')}</p>
      <AttentionBlock items={attentionTexts} />
      <p className={styles.subtitle}>{t('subtitle4')}</p>
      <SelectorEuUa />
      <p className={styles.subtitle}>{t('subtitle5')}</p>
      <FromIntShop/>
    </div>
  );
};

export default GeneratorsEuUa;
