import React, { useState } from 'react';
import styles from './Services.module.css';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface ServicesProps {
  onClose: () => void;
}

const Services: React.FC<ServicesProps> = ({ onClose }) => {
  const [activeDirection, setActiveDirection] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const t = useTranslations("Navigation");
    const { locale } = useParams();
  const toggleDirection = (direction: string) => {
    setActiveDirection(direction === activeDirection ? null : direction);
  };

  const toggleService = (service: string) => {
    setActiveService(service === activeService ? null : service);
  };

  return (
    // <div className={styles.body}>
    //   <div className={styles.servicesColumn} onClick={() => toggleDirection('fromUkraineToEurope')}>
    //     <h3>З України в Європу <ChevronDown size={24} /></h3>
    //     {activeDirection === 'fromUkraineToEurope' && (
    //       <ul className={styles.list}>
    //         <li className={styles.itemServices} onClick={onClose}>Доставка посилок </li>
    //         <li className={styles.itemServices} onClick={() => toggleService('medicineCosmetics')}>Ліки та ін'єкційна косметика</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('animals')}>Тварини</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('generators')}>Генератори</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('moving')}>Переїзд</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('wheels')}>Колеса та шини</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('documents')}>Документи</li>
    //       </ul>
    //     )}
    //   </div>

    //   <div className={styles.servicesColumn} onClick={() => toggleDirection('fromEuropeToUkraine')}>
    //     <h3>З Європи в Україну <ChevronDown size={24} /></h3>
    //     {activeDirection === 'fromEuropeToUkraine' && (
    //       <ul className={styles.list}>
    //         <li className={styles.itemServices} onClick={() => toggleService('parcelDelivery')}>Доставка посилок</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('medicineCosmetics')}>Ліки та ін'єкційна косметика</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('animals')}>Тварини</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('generators')}>Генератори</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('moving')}>Переїзд</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('wheels')}>Колеса та шини</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('documents')}>Документи</li>
    //       </ul>
    //     )}
    //   </div>

    //   <div className={styles.servicesColumn} onClick={() => toggleDirection('fromEuropeToEurope')}>
    //     <h3>З Європи в Європу <ChevronDown size={24} /></h3>
    //     {activeDirection === 'fromEuropeToEurope' && (
    //       <ul className={styles.list}>
    //         <li className={styles.itemServices} onClick={() => toggleService('parcelDelivery')}>Доставка посилок</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('medicineCosmetics')}>Ліки та ін'єкційна косметика</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('animals')}>Тварини</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('generators')}>Генератори</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('moving')}>Переїзд</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('wheels')}>Колеса та шини</li>
    //         <li className={styles.itemServices} onClick={() => toggleService('documents')}>Документи</li>
    //       </ul>
    //     )}
    //   </div>

    //   <div className={styles.servicesColumn} onClick={() => toggleDirection('otherServices')}>
              
          
    //       <ul>
    //         <li className={styles.itemServicesLast} onClick={() => toggleService('brandUA')}>Brand UA</li>
    //         <li className={styles.itemServicesLast} onClick={() => toggleService('courierDelivery')}>Кур'єрська доставка</li>
    //         <li className={styles.itemServicesLast} onClick={() => toggleService('parcelMachine')}>Відправлення через поштомати</li>
    //         <li className={styles.itemServicesLast} onClick={() => toggleService('insurance')}>Страхування</li>
    //       </ul>
        
       
    //   </div>
      // </div>
       <div className={styles.body}>
      <div className={styles.servicesColumn} onClick={() => toggleDirection('fromUkraineToEurope')}>
        <h3>{t("fromUkraineToEurope")} <ChevronDown size={24} /></h3>
        {activeDirection === 'fromUkraineToEurope' && (
          <ul className={styles.list}>
            <li className={styles.itemServices} onClick={onClose}><Link href={`/${locale}/ukraine-to-europe?section=parcels&direction=ukraineToEurope`}>{t("parcelDelivery")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('medicineCosmetics')}><Link href={`/${locale}/ukraine-to-europe?section=medicines&direction=ukraineToEurope`}>{t("medicineCosmetics")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('animals')}><Link href={`/${locale}/ukraine-to-europe?section=animals&direction=ukraineToEurope`}>{t("animals")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('generators')}><Link href={`/${locale}/ukraine-to-europe?section=generators&direction=ukraineToEurope`}>{ t("generators")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('moving')}><Link href={`/${locale}/ukraine-to-europe?section=move&direction=ukraineToEurope`}>{t("moving")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('wheels')}><Link href={`/${locale}/ukraine-to-europe?section=wheels&direction=ukraineToEurope`}>{ t("wheels")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('wheels')}><Link href={`/${locale}/ukraine-to-europe?section=bicycles&direction=ukraineToEurope`}>{ t("bicycles")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('documents')}> <Link href={`/${locale}/ukraine-to-europe?section=documents&direction=ukraineToEurope`}>{ t("documents")}</Link></li>
          </ul>
        )}
      </div>

      <div className={styles.servicesColumn} onClick={() => toggleDirection('fromEuropeToUkraine')}>
        <h3>{t("fromEuropeToUkraine")} <ChevronDown size={24} /></h3>
        {activeDirection === 'fromEuropeToUkraine' && (
          <ul className={styles.list}>
            <li className={styles.itemServices} onClick={() => toggleService('parcelDelivery')}><Link href={`/${locale}/europe-to-ukraine?section=parcels&direction=europeToUkraine`}>{t("parcelDelivery")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('medicineCosmetics')}><Link href={`/${locale}/europe-to-ukraine?section=medicines&direction=europeToUkraine`}>{t("medicineCosmetics")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('animals')}><Link href={`/${locale}/europe-to-ukraine?section=animals&direction=europeToUkraine`}>{ t("animals")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('generators')}><Link href={`/${locale}/europe-to-ukraine?section=generators&direction=europeToUkraine`}>{ t("generators")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('moving')}> <Link href={`/${locale}/europe-to-ukraine?section=move&direction=europeToUkraine`}>{t("moving")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('wheels')}><Link href={`/${locale}/europe-to-ukraine?section=wheels&direction=europeToUkraine`}>{ t("wheels")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('wheels')}><Link href={`/${locale}/europe-to-ukraine?section=bicycles&direction=europeToUkraine`}>{ t("bicycles")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('documents')}><Link href={`/${locale}/europe-to-ukraine?section=documents&direction=europeToUkraine`}>{ t("documents")}</Link></li>
          </ul>
        )}
      </div>

      <div className={styles.servicesColumn} onClick={() => toggleDirection('fromEuropeToEurope')}>
        <h3>{t("fromEuropeToEurope")} <ChevronDown size={24} /></h3>
        {activeDirection === 'fromEuropeToEurope' && (
          <ul className={styles.list}>
            <li className={styles.itemServices} onClick={() => toggleService('parcelDelivery')}><Link href={`/${locale}/europe-to-europe?section=parcels&direction=europeToEurope`}>{t("parcelDelivery")} </Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('medicineCosmetics')}><Link href={`/${locale}/europe-to-europe?section=medicines&direction=europeToEurope`}>{t("medicineCosmetics")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('animals')}><Link href={`/${locale}/europe-to-europe?section=animals&direction=europeToEurope`}>{ t("animals")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('generators')}><Link href={`/${locale}/europe-to-europe?section=generators&direction=europeToEurope`}>{ t("generators")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('moving')}><Link href={`/${locale}/europe-to-europe?section=move&direction=europeToEurope`}>{t("moving")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('wheels')}><Link href={`/${locale}/europe-to-europe?section=wheels&direction=europeToEurope`}>{ t("wheels")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('wheels')}><Link href={`/${locale}/europe-to-europe?section=bicycles&direction=europeToEurope`}>{ t("bicycles")}</Link></li>
            <li className={styles.itemServices} onClick={() => toggleService('documents')}><Link href={`/${locale}/europe-to-europe?section=documents&direction=europeToEurope`}>{ t("documents")}</Link></li>
          </ul>
        )}
      </div>

      <div className={styles.servicesColumn} onClick={() => toggleDirection('otherServices')}>
        <ul>
          <li className={styles.itemServicesLast} onClick={() => toggleService('brandUA')}><Link href={`/${locale}/brandua`}>{t("brandUA")}</Link></li>
          <li className={styles.itemServicesLast} onClick={() => toggleService('courierDelivery')}><Link href={`/${locale}/courier`}>{t("courierDelivery")}</Link></li>
          <li className={styles.itemServicesLast} onClick={() => toggleService('parcelMachine')}><Link href={`/${locale}/self-service`}>{t("parcelMachine")}</Link></li>
          
        </ul>
      </div>
    </div>
  );
};

export default Services;
