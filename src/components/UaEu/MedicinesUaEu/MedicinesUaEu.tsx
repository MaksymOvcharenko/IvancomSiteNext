

import { useTranslations } from 'next-intl';
import AttentionBlock from '@/components/AttentionBlock/AttentionBlock';
import s from './MedicinesUaEu.module.css';

import Steps from '../Steps/Steps';
import SelectorsMedicines from './SelectorsMedicines/SelectorsMedicines';
import ButtonFormOnPage from '@/components/ButtonFormOnPage2/ButtonFormOnPage';
import { LiaCoinsSolid } from 'react-icons/lia';
import ButtonMedicines from '@/components/ButtonMedicines/ButtonMedicines';
import { FaRegSnowflake } from 'react-icons/fa';

interface Tariff {
  title: string;
  price: string;
  note: string;
}

const MedicinesUaEu = () => {
  const t = useTranslations('UaEu.MedicinesUaEu');

  const attentionTexts: string[] = t.raw('attention');
  const tariffs: Tariff[] = t.raw('tariffs');

  return (
    <div className={s.body}>
      <h3 className={s.title}>{t('title')}</h3>
      <h3 className={s.description}>{t('description')}</h3>
      <div className={s.cardList}>
        {tariffs.map((tariff, index) => (
          <div className={s.card} key={index}>
            <h3 className={s.title}>{tariff.title}</h3>
            <p className={s.price}>
              <LiaCoinsSolid size={24} /> {tariff.price}
            </p>
            {tariff.note.split('\n').map((line, idx) => (
              <p className={s.note} key={idx}>{line}</p>
            ))}
            <ButtonFormOnPage defaultForm="ukraine">{t('formBtn')}</ButtonFormOnPage>
          </div>
        ))}

        <div className={s.card}>
          <h3 className={s.title1}>
            {t('coldService.titlePrefix')} <FaRegSnowflake color="#0884d5" /> {t('coldService.title')} <FaRegSnowflake color="#0884d5" />
          </h3>
          <p className={s.notes}><br /></p>
          <p className={s.notes}>{t('coldService.available')}</p>
          <br />
          <p className={s.notes}>{t('coldService.toBranch')}</p>
          <p className={s.price}>
            <LiaCoinsSolid size={24} /> {t('coldService.priceBranch')}
          </p>
          <p className={s.notes}>{t('coldService.toInpost')}</p>
          <p className={s.price}>
            <LiaCoinsSolid size={24} /> {t('coldService.priceInpost')}
          </p>
          <ButtonMedicines>{t('coldService.detailsBtn')}</ButtonMedicines>
        </div>
      </div>

      <AttentionBlock items={attentionTexts.map(text => ({ text }))} />
      <SelectorsMedicines />

      <h3 className={s.title}>{t('notice')}</h3>
      <Steps />
    </div>
  );
};

export default MedicinesUaEu;
