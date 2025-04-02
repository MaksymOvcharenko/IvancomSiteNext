/* eslint-disable react/no-unescaped-entities */

// "use client";

// import { useTranslations } from "next-intl";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import styles from "./index.module.css";
// import React, { useState } from "react";
// import Modal from "../Modal/Modal";
// import DeliveryCalculator from "../DeliveryCalculator/DeliveryCalculator";
// import FormInpost from "../FormInpost/FormInpost";

// // Визначення типів для пропсів
// interface NavBarProps {
//   onClose: () => void; // Тип для функції onClose, яка не приймає параметрів і не повертає значень
// }

// export const NavBar: React.FC<NavBarProps> = ({ onClose }) => {
//   const t = useTranslations("Navigation");
//   const { locale } = useParams(); // Отримуємо поточну мову з URL

//   const [isOpen, setIsOpen] = useState<boolean>(false); // Типізація стану isOpen

//   return (
//     <div className={styles.navbar}>
//       <Link href={`/${locale}`}>{t("home")}</Link>
//       <Link href={`/${locale}/services`}>{t("services")}</Link>
//       <Link href={`/${locale}/tariffs`}>{t("tariffs")}</Link>

//       {/* Кнопка, яка виглядає як посилання */}
//       <button className={styles.navLink} onClick={() => setIsOpen(true)}>
//         <a>{t("calculator")}</a>
//       </button>

//       <Link href={`/${locale}/business`}>{t("business")}</Link>
//       <Link href={`/${locale}/about`}>{t("about")}</Link>
//       <Link href={`/${locale}/contacts`}>{t("contacts")}</Link>
//       <Link href={`/${locale}/faq`}>{t("faq")}</Link>
//       <Link href={`/${locale}/promotions`}>{t("promotions")}</Link>

//       {/* Модалка з калькулятором */}
//       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//         <DeliveryCalculator onClose={onClose} />
//         {/* <FormInpost/> */}
//       </Modal>
//     </div>
//   );
// };
"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./index.module.css";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import DeliveryCalculator from "../DeliveryCalculator/DeliveryCalculator";
import FormInpost from "../FormInpost/FormInpost";

// Визначення типів для пропсів
interface NavBarProps {
  onClose: () => void; 
}

export const NavBar: React.FC<NavBarProps> = ({ onClose }) => {
  const t = useTranslations("Navigation");
  const { locale } = useParams();

  const [isOpen, setIsOpen] = useState<boolean>(false); 
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false); 

  return (
    <div className={styles.navbar}>
      <Link href={`/${locale}`}>{t("home")}</Link>

      {/* Відображення сервісів при наведенні або натисканні */}
      <div 
        className={styles.servicesWrapper} 
        onMouseEnter={() => setIsServicesOpen(true)} 
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <button 
          className={styles.navLink} 
          onClick={() => setIsServicesOpen(!isServicesOpen)}
        >
          <a>{t("services")}</a>
        </button>

        {isServicesOpen && (
          <div className={styles.servicesMenu}>
  <div className={styles.servicesColumn}>
    <h3>{t("fromUkraineToEurope")}</h3>
    <ul className={styles.list}>
      <li className={styles.itemServices} ><Link href={`/${locale}/ukraine-to-europe?section=parcels&direction=ukraineToEurope`}>{t("parcelDelivery")}</Link></li>
            <li className={styles.itemServices} ><Link href={`/${locale}/ukraine-to-europe?section=medicines&direction=ukraineToEurope`}>{t("medicineCosmetics")}</Link></li>
            <li className={styles.itemServices} ><Link href={`/${locale}/ukraine-to-europe?section=animals&direction=ukraineToEurope`}>{t("animals")}</Link></li>
            <li className={styles.itemServices} ><Link href={`/${locale}/ukraine-to-europe?section=generators&direction=ukraineToEurope`}>{ t("generators")}</Link></li>
            <li className={styles.itemServices} ><Link href={`/${locale}/ukraine-to-europe?section=move&direction=ukraineToEurope`}>{t("moving")}</Link></li>
            <li className={styles.itemServices} ><Link href={`/${locale}/ukraine-to-europe?section=wheels&direction=ukraineToEurope`}>{ t("wheels")}</Link></li>
            <li className={styles.itemServices} ><Link href={`/${locale}/ukraine-to-europe?section=bicycles&direction=ukraineToEurope`}>{ t("bicycles")}</Link></li>
            <li className={styles.itemServices} > <Link href={`/${locale}/ukraine-to-europe?section=documents&direction=ukraineToEurope`}>{ t("documents")}</Link></li>
    </ul>
  </div>

  <div className={styles.servicesColumn}>
    <h3>{t("fromEuropeToUkraine")}</h3>
    <ul className={styles.list}>
      <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-ukraine?section=parcels&direction=europeToUkraine`}>{t("parcelDelivery")}</Link></li>
                  <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-ukraine?section=medicines&direction=europeToUkraine`}>{t("medicineCosmetics")}</Link></li>
                  <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-ukraine?section=animals&direction=europeToUkraine`}>{ t("animals")}</Link></li>
                  <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-ukraine?section=generators&direction=europeToUkraine`}>{ t("generators")}</Link></li>
                  <li className={styles.itemServices} > <Link href={`/${locale}/europe-to-ukraine?section=move&direction=europeToUkraine`}>{t("moving")}</Link></li>
                  <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-ukraine?section=wheels&direction=europeToUkraine`}>{ t("wheels")}</Link></li>
                  <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-ukraine?section=bicycles&direction=europeToUkraine`}>{ t("bicycles")}</Link></li>
                  <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-ukraine?section=documents&direction=europeToUkraine`}>{ t("documents")}</Link></li>
    </ul>
  </div>

  {/* <div className={styles.servicesColumn}>
    <h3>{t("fromEuropeToEurope")}</h3>
    <ul className={styles.list}>
       <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-europe?section=parcels&direction=europeToEurope`}>{t("parcelDelivery")} </Link></li>
            <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-europe?section=medicines&direction=europeToEurope`}>{t("medicineCosmetics")}</Link></li>
            <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-europe?section=animals&direction=europeToEurope`}>{ t("animals")}</Link></li>
            <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-europe?section=generators&direction=europeToEurope`}>{ t("generators")}</Link></li>
            <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-europe?section=move&direction=europeToEurope`}>{t("moving")}</Link></li>
            <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-europe?section=wheels&direction=europeToEurope`}>{ t("wheels")}</Link></li>
            <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-europe?section=bicycles&direction=europeToEurope`}>{ t("bicycles")}</Link></li>
            <li className={styles.itemServices} ><Link href={`/${locale}/europe-to-europe?section=documents&direction=europeToEurope`}>{ t("documents")}</Link></li>
    </ul>
  </div> */}

  <div className={styles.servicesColumn}>
    <h3>{t("otherServices")}</h3>
    <ul>
      <li className={styles.itemServices}><Link href={`/${locale}/brandua`}>{t("brandUA")}</Link></li>
      <li className={styles.itemServices}><Link href={`/${locale}/courier`}>{t("courierDelivery")}</Link></li>
      <li className={styles.itemServices}><Link href={`/${locale}/self-service`}>{t("parcelMachine")}</Link></li>
      <li className={styles.itemServices}><Link href={`/${locale}/europe-to-europe`}>{t("pltopl")}</Link></li>
    </ul>
  </div>
</div>

        )}
      </div>

      

      <button className={styles.navLink} onClick={() => setIsOpen(true)}>
        <a>{t("calculator")}</a>
      </button>

      <Link href={`/${locale}/business`}>{t("business")}</Link>
      <Link href={`/${locale}/about`}>{t("about")}</Link>
      <Link href={`/${locale}/contacts`}>{t("contacts")}</Link>
      <Link href={`/${locale}/#faq`}>{t("faq")}</Link>
      <Link href={`/${locale}/promotions`}>{t("promotions")}</Link>

      {/* Модалка з калькулятором */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DeliveryCalculator onClose={onClose} />
      </Modal>
    </div>
  );
};
