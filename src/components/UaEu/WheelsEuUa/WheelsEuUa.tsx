

import AttentionBlock from '@/components/AttentionBlock/AttentionBlock';
import styles from './WheelsEuUa.module.css';
import { useTranslations } from 'next-intl';
import { FiFileText } from 'react-icons/fi';
import ButtonFormOnPage from '@/components/ButtonFormOnPage2/ButtonFormOnPage';
import Link from 'next/link';
import { LiaCoinsSolid } from 'react-icons/lia';
import DeliveryTable from '@/components/DeliveryTable/DeliveryTable';
import SelectorEuUa from '@/components/SelectorEuUa/SelectorEuUa';


const WheelsEuUa = () => {

    const t = useTranslations('EuUa.WheelsEuUa');
    type TyreItem = {
  category: string;
  unit: string;
  note?: string;
  rows: {
    size: string;
    price: string;
  }[];
    };


const tyrePrices: TyreItem[] = [
  {
    category: "Гума",
    unit: "1 шт",
    rows: [
      { size: "13''–14''", price: "60 zł" },
      { size: "15''–17''", price: "85 zł" },
      { size: "18''–19''", price: "130 zł" },
      { size: "20''–21''", price: "140 zł" },
      { size: "22''–23''", price: "165 zł" }
    ]
  },
  {
    category: "Диск",
    unit: "1 шт",
    rows: [
      { size: "13''–14''", price: "50 zł" },
      { size: "15''–17''", price: "85 zł" },
      { size: "18''–19''", price: "130 zł" },
      { size: "20''–21''", price: "170 zł" },
      { size: "22''–23''", price: "220 zł" }
    ]
  },
  {
    category: "Комплект",
    unit: "1 шт",
    note: "(гума+диск+бортоване колесо)",
    rows: [
      { size: "13''–14''", price: "95 zł" },
      { size: "15''–17''", price: "130 zł" },
      { size: "18''–19''", price: "180 zł" },
      { size: "20''–21''", price: "220 zł" },
      { size: "22''–23''", price: "300 zł" }
    ]
  }
];


  const attentionTexts = [
    { text: t('attention.0') },
    { text: t('attention.1') },
    { text: t('attention.2') },
    { text: t('attention.3') },
    { text: t('attention.4') },
      { text: t('attention.5') },
    { text: t('attention.6') },
  
  ];

  const deliveryWithNotes = {
    title: t('table.title'),
    rows: [
      { weight: t('table.rows.0.weight'), price: t('table.rows.0.price') },
      { weight: t('table.rows.1.weight'), price: t('table.rows.1.price') },
      { weight: t('table.rows.2.weight'), price: t('table.rows.2.price') },
      { weight: t('table.rows.3.weight'), price: t('table.rows.3.price') },
      { weight: t('table.rows.4.weight'), price: t('table.rows.4.price') },
       
    ]
  };


  return (
      <div className={styles.wrapper}>
          
      <p className={styles.subtitle}>{t('subtitle')}</p>

      <div className={styles.cardList}>
         
              {tyrePrices.map((item, idx) => (
        <div className={styles.card} key={idx}>
          <h3 className={styles.title}>{item.category}</h3>
          <p className={styles.unit}>{item.unit}</p>
          {item.note && <p className={styles.note}>{item.note}</p>}
          <ul className={styles.list}>
            {item.rows.map((row, i) => (
              <li className={styles.row} key={i}>
                <span>{row.size}</span>  -     
                <span><strong>    {row.price}</strong></span>
              </li>
            ))}
          </ul>
          <ButtonFormOnPage defaultForm="world_to_ukraine">
           {t('formBtn')}
          </ButtonFormOnPage>
        </div>
      ))}
          </div>
          <p className={styles.subtitle}>{t('subtitle2')}</p>
          <AttentionBlock items={attentionTexts} />
          <p className={styles.subtitle}>{t('subtitle3')}</p>
          <p className={styles.descr}>{t('descr3')}</p>
          <DeliveryTable data={deliveryWithNotes} />
          <p className={styles.subtitle}>{t('subtitle4')}</p>
      <SelectorEuUa />
      {/* <p className={styles.subtitle}>{t('subtitle2')}</p>
     
      <p className={styles.subtitle}>{t('subtitle3')}</p>
 
      <p className={styles.subtitle}>{t('subtitle4')}</p>
      <SelectorEuUa />
      <p className={styles.subtitle}>{t('subtitle5')}</p>
       */}
    </div>
  );
};

export default WheelsEuUa;
