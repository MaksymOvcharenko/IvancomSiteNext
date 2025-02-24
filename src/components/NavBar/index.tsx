
// import { useTranslations } from 'next-intl';
// import Link from 'next/link';
// import styles from "./index.module.css"
// import React from 'react';

// export const NavBar = () => {
//   const t = useTranslations('Navigation');


//   return (
//     <div className={styles.navbar}>
//               <Link href="/">{t('home')}</Link>
// <Link href="/services">{t('services')}</Link>
// <Link href="/tariffs">{t('tariffs')}</Link>
// <Link href="/calculator">{t('calculator')}</Link>
// <Link href="/business">{t('business')}</Link>
// <Link href="/about">{t('about')}</Link>
// <Link href="/contacts">{t('contacts')}</Link>
// <Link href="/faq">{t('faq')}</Link>
// <Link href="/promotions">{t('promotions')}</Link>
//     </div>
//   );
// };
// "use client";

// import { useTranslations } from "next-intl";
// import { useParams } from "next/navigation"; // Отримуємо поточну локаль
// import Link from "next/link";
// import styles from "./index.module.css";
// import React from "react";

// export const NavBar = () => {
//   const t = useTranslations("Navigation");
//   const { locale } = useParams(); // Витягуємо locale з URL

//   return (
//     <div className={styles.navbar}>
//       <Link href={`/${locale}`}>{t("home")}</Link>
//       <Link href={`/${locale}/services`}>{t("services")}</Link>
//       <Link href={`/${locale}/tariffs`}>{t("tariffs")}</Link>
//       <Link href={`/${locale}/calculator`}>{t("calculator")}</Link>
//       <Link href={`/${locale}/business`}>{t("business")}</Link>
//       <Link href={`/${locale}/about`}>{t("about")}</Link>
//       <Link href={`/${locale}/contacts`}>{t("contacts")}</Link>
//       <Link href={`/${locale}/faq`}>{t("faq")}</Link>
//       <Link href={`/${locale}/promotions`}>{t("promotions")}</Link>
//     </div>
//   );
// };
"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./index.module.css";
import React from "react";

export const NavBar = () => {
  const t = useTranslations("Navigation");
  const { locale } = useParams(); // Витягуємо мову з URL

  return (
    <div className={styles.navbar}>
      <Link href={`/${locale}`}>{t("home")}</Link>
      <Link href={`/${locale}/services`}>{t("services")}</Link>
      <Link href={`/${locale}/tariffs`}>{t("tariffs")}</Link>
      <Link href={`/${locale}/calculator`}>{t("calculator")}</Link>
      <Link href={`/${locale}/business`}>{t("business")}</Link>
      <Link href={`/${locale}/about`}>{t("about")}</Link>
      <Link href={`/${locale}/contacts`}>{t("contacts")}</Link>
      <Link href={`/${locale}/faq`}>{t("faq")}</Link>
      <Link href={`/${locale}/promotions`}>{t("promotions")}</Link>
    </div>
  );
};
