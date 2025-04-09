


import { useTranslations } from 'next-intl';

import s from "./ParcelsUaEu.module.css";
import SelectorTariffs from '../SelectorTariffs/SelectorTariffs';


const ParcelsUaEu = () => {
  const t = useTranslations('EuUa.ParcelsEuEa');

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
    <div className={s.body}>
      <h3 className={s.title}>Дізнайтеся про тарифи та етапи доставки посилок з України до Польщі та ЄС: швидко, надійно, доступно.</h3>
      <SelectorTariffs/>
     
    </div>
  );
};

export default ParcelsUaEu;
