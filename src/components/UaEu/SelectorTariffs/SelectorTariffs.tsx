'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import styles from './SelectorTariffs.module.css';
import SilverTariff from './SilverTariff/SilverTariff';
import GoldTariff from './GoldTariff/GoldTariff';
import PlatinumTariff from './PlatinumTariff/PlatinumTariff';



const SelectorTariffs = () => {
  const [activeTab, setActiveTab] = useState<'silver' | 'gold' | 'platinum'>('silver');
  const t = useTranslations('SelectorEuUA');

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        <button
          className={activeTab === 'silver' ? styles.active : ''}
          onClick={() => setActiveTab('silver')}
        >
          Silver
        </button>
        <button
          className={activeTab === 'gold' ? styles.active : ''}
          onClick={() => setActiveTab('gold')}
        >
          Gold
        </button>
        <button
          className={activeTab === 'platinum' ? styles.active : ''}
          onClick={() => setActiveTab('platinum')}
        >
          Platinum
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'silver' && <SilverTariff />}
        {activeTab === 'gold' && <GoldTariff/>}
        {activeTab === 'platinum' && <PlatinumTariff />}
      </div>
    </div>
  );
};

export default SelectorTariffs;
