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
              <h3>З України в Європу</h3>
              <ul className={styles.list}>
                <li className={styles.itemServices}>Доставка посилок</li>
                <li className={styles.itemServices}>Ліки та ін'єкційна косметика</li>
                <li className={styles.itemServices}>Тварини</li>
                <li className={styles.itemServices}>Генератори</li>
                <li className={styles.itemServices}>Переїзд</li>
                <li className={styles.itemServices}>Колеса та шини</li>
                <li className={styles.itemServices}>Документи</li>
              </ul>
            </div>

            <div className={styles.servicesColumn}> 
              <h3>З Європи в Україну</h3>
              <ul className={styles.list}>
                <li className={styles.itemServices}>Доставка посилок</li>
                <li className={styles.itemServices}>Ліки та ін'єкційна косметика</li>
                <li className={styles.itemServices}>Тварини</li>
                <li className={styles.itemServices}>Генератори</li>
                <li className={styles.itemServices}>Переїзд</li>
                <li className={styles.itemServices}>Колеса та шини</li>
                <li className={styles.itemServices}>Документи</li>
              </ul>
            </div>

            <div className={styles.servicesColumn}>
              <h3>З Європи в Європу</h3>
              <ul className={styles.list}>
                <li className={styles.itemServices}>Доставка посилок</li>
                <li className={styles.itemServices}>Ліки та ін'єкційна косметика</li>
                <li className={styles.itemServices}>Тварини</li>
                <li className={styles.itemServices}>Генератори</li>
                <li className={styles.itemServices}>Переїзд</li>
                <li className={styles.itemServices}>Колеса та шини</li>
                <li className={styles.itemServices}>Документи</li>
              </ul>
            </div>

            <div className={styles.servicesColumn}>
              <h3>Інші послуги</h3>
              <ul>
                <li className={styles.itemServices}>Brand UA</li>
                <li className={styles.itemServices}>Кур'єрська доставка</li>
                <li className={styles.itemServices}>Відправлення через поштомати</li>
                <li className={styles.itemServices}>Страхування</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <Link href={`/${locale}/tariffs`}>{t("tariffs")}</Link>

      <button className={styles.navLink} onClick={() => setIsOpen(true)}>
        <a>{t("calculator")}</a>
      </button>

      <Link href={`/${locale}/business`}>{t("business")}</Link>
      <Link href={`/${locale}/about`}>{t("about")}</Link>
      <Link href={`/${locale}/contacts`}>{t("contacts")}</Link>
      <Link href={`/${locale}/faq`}>{t("faq")}</Link>
      <Link href={`/${locale}/promotions`}>{t("promotions")}</Link>

      {/* Модалка з калькулятором */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DeliveryCalculator onClose={onClose} />
      </Modal>
    </div>
  );
};
