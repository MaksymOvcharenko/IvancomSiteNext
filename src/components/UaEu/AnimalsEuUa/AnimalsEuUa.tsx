import { useTranslations } from 'next-intl';
import AttentionBlock from "@/components/AttentionBlock/AttentionBlock";
import s from "./MedicinesUaEu.module.css";

import Steps from '../Steps/Steps';

import ButtonFormOnPage from '@/components/ButtonFormOnPage2/ButtonFormOnPage';
import { LiaCoinsSolid } from 'react-icons/lia';

interface Tariff {
  title: string;
  price: string;
  note: string;
}

const MedicinesUaEu = () => {
  const t = useTranslations("UaEu.MedicinesUaEu");

  const attentionTexts: string[] = t.raw('attention');

  const tariffs: Tariff[] = t.raw('tariffs');

  return (
    <div className={s.body}>
      <h3 className={s.title}>{t('title')}</h3>

      <div className={s.cardList}>
        {tariffs.map((tariff, index) => (
          <div className={s.card} key={index}>
            <h3 className={s.title}>{tariff.title}</h3>
            <p className={s.price}><LiaCoinsSolid size={24} /> {tariff.price}</p>
            {tariff.note.split('\n').map((line, idx) => (
              <p className={s.note} key={idx}>{line}</p>
            ))}
            <ButtonFormOnPage defaultForm="animals">{t('formBtn')}</ButtonFormOnPage>
          </div>
        ))}
      </div>

      <AttentionBlock items={attentionTexts.map(text => ({ text }))} />
 

     
  
    </div>
  );
};

export default MedicinesUaEu;
