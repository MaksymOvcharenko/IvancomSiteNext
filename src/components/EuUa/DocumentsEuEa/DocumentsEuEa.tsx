


import { useTranslations } from 'next-intl';
import AttentionBlock from "@/components/AttentionBlock/AttentionBlock";
import s from "./DocumentsEuEa.module.css";
import DeliveryTable from "@/components/DeliveryTable/DeliveryTable";
import SelectorEuUa from "@/components/SelectorEuUa/SelectorEuUa";

const DocumentsEuEa = () => {
  const t = useTranslations('EuUa.DocumentsEuUa');

  const attentionTexts = [
    { text: t('attention.0') },
    { text: t('attention.1') },
    { text: t('attention.2') },
   
  ];

  const deliveryWithNotes = {
    title: t('table.title'),
    rows: [
      { weight: t('table.rows.0.weight'), price: t('table.rows.0.price') },
     
    ],
    notes: [
      t('table.notes.0'),
     
    ],
  };

  return (
    <div className={s.body}>
      <h3 className={s.title}>{t('headings.0')}</h3>
      <DeliveryTable data={deliveryWithNotes} />
      <h3 className={s.title}>{t('headings.1')}</h3>
      <AttentionBlock items={attentionTexts} />
      <h3 className={s.title}>{t('headings.2')}</h3>
      <SelectorEuUa />
    </div>
  );
};

export default DocumentsEuEa;
