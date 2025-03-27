"use client"
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from "./Footer.module.css"
import { Regulamin } from '../Regulamin/Regulamin';
import SvgIcon from '../SvgIcon';
import Modal from '../Modal/Modal';
import DeliveryCalculator from '../DeliveryCalculator/DeliveryCalculator';
import { useState } from 'react';
export default function Footer() {
  const t = useTranslations('Footer');
  const [isOpen, setIsOpen] = useState(false);
 const { locale } = useParams(); // Витягуємо мову з URL
  return (
   <>
      <div className={styles.body}>
        
        <div className={styles.navbar}>
        <Link href={`/${locale}`}>{t("home")}</Link>
        
        
        <button className={styles.navLink} onClick={() => setIsOpen(true)}>
          <a>{t("calculator")}</a>
        </button>
        <Link href={`/${locale}/business`}>{t("business")}</Link>
        <Link href={`/${locale}/about`}>{t("about")}</Link>
        <Link href={`/${locale}/contacts`}>{t("contacts")}</Link>
        <Link href={`/${locale}/#faq`}>{t("faq")}</Link>
          <Link href={`/${locale}/promotions`}>{t("promotions")}</Link>
          
        </div>
        <Link href={`/${locale}/`}><SvgIcon name="logo"/></Link>
        
        <Regulamin />
      
      </div>
        {/* Модалка з калькулятором */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <DeliveryCalculator onClose={() => setIsOpen(false)} />
        </Modal>
   </>
  );
}
