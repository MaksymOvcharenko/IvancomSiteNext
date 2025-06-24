'use client';

import { useTranslations } from 'next-intl';
import AttentionBlock from '@/components/AttentionBlock/AttentionBlock';
import styles from './TemperatureInfoModal.module.css';
import { IoMdClose } from 'react-icons/io';

const TemperatureInfo = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations('UaEu.MedicinesUaEu.TemperatureInfo');

  const attentionTexts = [
    {
      text: t('attention'),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <button className={styles.closeButton} onClick={onClose} aria-label={t('close')}>
        <IoMdClose size={24} />
      </button>

      <h2 className={styles.title}>{t('title')}</h2>

      <div className={styles.box}>
        <ul className={styles.list}>
          <li>{t('steps.0')}</li>
          <li>{t('steps.1')}</li>
          <li dangerouslySetInnerHTML={{ __html: t.raw('steps.2') }} />
          <li>{t('steps.3')}</li>
          <li>{t('steps.4')}</li>
        </ul>

        <h3 className={styles.subTitle}>{t('costTitle')}</h3>
        <ul className={styles.list}>
          <li>{t('cost.0')}</li>
          <li>{t('cost.1')}</li>
        </ul>
      </div>

      <AttentionBlock items={attentionTexts} />
    </div>
  );
};

export default TemperatureInfo;
