import React, { useState } from 'react';
import styles from './Services.module.css';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ServicesProps {
  onClose: () => void;
}

const Services: React.FC<ServicesProps> = ({ onClose }) => {
  const [activeDirection, setActiveDirection] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const t = useTranslations("Navigation");

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
            <li className={styles.itemServices} onClick={onClose}>{t("parcelDelivery")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('medicineCosmetics')}>{t("medicineCosmetics")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('animals')}>{t("animals")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('generators')}>{t("generators")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('moving')}>{t("moving")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('wheels')}>{t("wheels")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('documents')}>{t("documents")}</li>
          </ul>
        )}
      </div>

      <div className={styles.servicesColumn} onClick={() => toggleDirection('fromEuropeToUkraine')}>
        <h3>{t("fromEuropeToUkraine")} <ChevronDown size={24} /></h3>
        {activeDirection === 'fromEuropeToUkraine' && (
          <ul className={styles.list}>
            <li className={styles.itemServices} onClick={() => toggleService('parcelDelivery')}>{t("parcelDelivery")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('medicineCosmetics')}>{t("medicineCosmetics")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('animals')}>{t("animals")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('generators')}>{t("generators")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('moving')}>{t("moving")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('wheels')}>{t("wheels")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('documents')}>{t("documents")}</li>
          </ul>
        )}
      </div>

      <div className={styles.servicesColumn} onClick={() => toggleDirection('fromEuropeToEurope')}>
        <h3>{t("fromEuropeToEurope")} <ChevronDown size={24} /></h3>
        {activeDirection === 'fromEuropeToEurope' && (
          <ul className={styles.list}>
            <li className={styles.itemServices} onClick={() => toggleService('parcelDelivery')}>{t("parcelDelivery")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('medicineCosmetics')}>{t("medicineCosmetics")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('animals')}>{t("animals")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('generators')}>{t("generators")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('moving')}>{t("moving")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('wheels')}>{t("wheels")}</li>
            <li className={styles.itemServices} onClick={() => toggleService('documents')}>{t("documents")}</li>
          </ul>
        )}
      </div>

      <div className={styles.servicesColumn} onClick={() => toggleDirection('otherServices')}>
        <ul>
          <li className={styles.itemServicesLast} onClick={() => toggleService('brandUA')}>{t("brandUA")}</li>
          <li className={styles.itemServicesLast} onClick={() => toggleService('courierDelivery')}>{t("courierDelivery")}</li>
          <li className={styles.itemServicesLast} onClick={() => toggleService('parcelMachine')}>{t("parcelMachine")}</li>
          <li className={styles.itemServicesLast} onClick={() => toggleService('insurance')}>{t("insurance")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
