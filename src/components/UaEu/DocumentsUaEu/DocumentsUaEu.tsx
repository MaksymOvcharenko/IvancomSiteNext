


import { useTranslations } from 'next-intl';
import AttentionBlock from "@/components/AttentionBlock/AttentionBlock";
import s from "./DocumentsUaEu.module.css";
import DeliveryTable from "@/components/DeliveryTable/DeliveryTable";
import SelectorEuUa from "@/components/SelectorEuUa/SelectorEuUa";
import Steps from '../Steps/Steps';

const DocumentsUaEu = () => {
  const t = useTranslations('UaEu.DocumentsUaEu');

  const attentionTexts = [
    { text: t('attention.0') },
    { text: t('attention.1') },

   
  ];

  const deliveryWithNotes = {
    title: t('table.title'),
    country: t('table.country'),
    rows: [
      { weight: t('table.rows.0.weight'), price: t('table.rows.0.price') },
     
    ],
    
  };
    const deliveryWithNotes1 = {
      title: t('table1.title'),
        country: t('table1.country'),
    rows: [
      { weight: t('table1.rows.0.weight'), price: t('table1.rows.0.price') },
     
    ],
   
  };
   const deliveryWithNotes2 = {
     title: t('table2.title'),
       country: t('table2.country'),
    rows: [
      { weight: t('table2.rows.0.weight'), price: t('table2.rows.0.price') },
     
    ],
   
  };
    const deliveryWithNotes3 = {
     title: t('table3.title'),
       country: t('table3.country'),
    rows: [
      { weight: t('table3.rows.0.weight'), price: t('table3.rows.0.price') },
      { weight: t('table3.rows.1.weight'), price: t('table3.rows.1.price') },
      { weight: t('table3.rows.2.weight'), price: t('table3.rows.2.price') },
      { weight: t('table3.rows.3.weight'), price: t('table3.rows.3.price') },
     { weight: t('table3.rows.4.weight'), price: t('table3.rows.4.price') },
    ],
   
  };

  return (
    <div className={s.body}>
      <h3 className={s.title}>{t('headings.0')}</h3>
      <DeliveryTable data={deliveryWithNotes} />
      <DeliveryTable data={deliveryWithNotes1} />
      <DeliveryTable data={deliveryWithNotes2} />
      <h3 className={s.title}>{t('headings.1')}</h3>
      <AttentionBlock items={attentionTexts} />
      <h3 className={s.title}>{t('headings.2')}</h3>
       <DeliveryTable data={deliveryWithNotes3} />
      <Steps/>
    </div>
  );
};

export default DocumentsUaEu;
