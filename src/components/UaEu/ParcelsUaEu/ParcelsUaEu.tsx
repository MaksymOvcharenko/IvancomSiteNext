


import { useTranslations } from 'next-intl';

import s from "./ParcelsUaEu.module.css";
import SelectorTariffs from '../SelectorTariffs/SelectorTariffs';
import CalculateButton from '@/components/CalculateButton2/CalculateButton';
import ButtonFormOnPage from '@/components/ButtonFormOnPage2/ButtonFormOnPage';
import AttentionBlock from '@/components/AttentionBlock/AttentionBlock';
import Steps from '../Steps/Steps';


const ParcelsUaEu = () => {
  const t = useTranslations('UaEu.ParcelsUaEu.Main');

  const attentionTexts = [
    { text: t('attention.0') },
    { text: t('attention.1') },
    { text: t('attention.2') },
  
  ];
    const attentionTexts1 = [
    { text: t('attention1.0') },
    { text: t('attention1.1') },
    { text: t('attention1.2') },
  
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
     <div className={s.btnCont}>
          <CalculateButton>Розрахувати вартість</CalculateButton>
          <ButtonFormOnPage defaultForm="ukraine">Заповнити форму</ButtonFormOnPage>
      </div>
      <AttentionBlock items={attentionTexts} />
      <AttentionBlock items={attentionTexts1} />
      <Steps/>
    </div>
  );
};

export default ParcelsUaEu;
