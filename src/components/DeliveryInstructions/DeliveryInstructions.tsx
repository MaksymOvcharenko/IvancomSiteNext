import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './DeliveryInstructions.module.css';
import { BsTelephone } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { LucideMapPin } from 'lucide-react';

const DeliveryInstructions = () => {
  const t = useTranslations('about.faq');

  return (
    <section className={styles.delivery}>
      <h2 className={styles.title}>{t('title')}</h2>
      <p className={styles.subtitle}>{t('subtitle')}</p>

      <ol className={styles.steps}>
        <li className={styles.step}>
          <span className={styles.stepNumber}>1</span>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>{t('step1.title')}</h3>
            <p className={styles.text}>{t('step1.description')}</p>
            <p className={styles.contact}>
              <BsTelephone size={22} />
              {/* <a href="tel:+48570371048" className={styles.link}>+48 570 371 048</a> */}
              <p  className={styles.link}>+48 570 371 048</p>
            </p>
            <p className={styles.contact}>
              <CiMail size={22} />
              <a href="mailto:ivancom.krakow@gmail.com" className={styles.link}>ivancom.krakow@gmail.com</a>
            </p>
            <p className={styles.address}>
              <LucideMapPin size={26} /> al. Jana Pawła II 154, 31-982 Kraków, Polska
            </p>
          </div>
        </li>

        <li className={styles.step}>
          <span className={styles.stepNumber}>2</span>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>{t('step2.title')}</h3>
            <p className={styles.text}>{t('step2.description')}</p>
          </div>
        </li>

        <li className={styles.step}>
          <span className={styles.stepNumber}>3</span>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>{t('step3.title')}</h3>
            <p className={styles.text}>{t('step3.description')}</p>
          </div>
        </li>
      </ol>
    </section>
  );
};

export default DeliveryInstructions;
