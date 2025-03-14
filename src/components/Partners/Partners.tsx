'use client';

import { useTranslations } from 'next-intl';
import styles from './Partners.module.css';

interface PartnersLogosProps {
  logos: string[];
}

const Partners: React.FC<PartnersLogosProps> = ({ logos }) => {
  const t = useTranslations('about');

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('ourPartners')}</h2>
      <p className={styles.text}>{t('partnersText')}</p>

      <div className={styles.grid}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.card}>
            <img src={logo} alt={`Partner logo ${index + 1}`} width={168} height={41} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;