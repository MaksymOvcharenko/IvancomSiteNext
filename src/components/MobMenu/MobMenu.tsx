"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, LucideMapPin, LucideTruck, Menu, X } from "lucide-react";
import Link from "next/link";
import styles from "./MobMenu.module.css";
import LocaleSwitcher from "../local-switcher";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { SocLink } from "../SocLink/SocLink";
import DeliveryCalculator from "../DeliveryCalculator/DeliveryCalculator";
import Modal from "../Modal/Modal";
import { GoHome } from "react-icons/go";
import { BsTruck } from "react-icons/bs";
import { LiaCoinsSolid } from "react-icons/lia";
import { AiOutlineCalculator, AiOutlineQuestion } from "react-icons/ai";
import { PiCity, PiSuitcaseSimpleLight } from "react-icons/pi";
import { CiDiscount1 } from "react-icons/ci";
import Services from "./Services";
type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const menuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const MobMenu: React.FC<Props> = ({ isOpen, setIsOpen, openModal }) => {
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const { locale } = useParams(); // Витягуємо мову з URL
  const t = useTranslations("Footer");
   const [isServicesVisible, setIsServicesVisible] = useState(false);

  const toggleMenuServices = () => {
    setIsServicesVisible((prev) => !prev);
  };


  useEffect(() => {
    if (isOpen) {
      // Визначаємо ширину скроллбару
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  return (
    <div className={styles.menuWrapper}>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          transition={{ duration: 0.3 }}
          onClick={toggleMenu}
        />
      )}

      {/* Меню */}
      <motion.nav
        className={styles.menu}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="exit"
        variants={menuVariants}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Кнопка закриття */}
        <button onClick={toggleMenu} className={styles.closeButton}>
          <X size={28} color="#fff" />
        </button>

        <div className={styles.body}>
          <div className={styles.switcher}><LocaleSwitcher /></div>
          <div className={styles.navbar}>
            <Link href={`/${locale}`} onClick={toggleMenu}>
              <GoHome className={styles.icons} size={20} />
              {t("home")}
            </Link>
            <Link href={`/${locale}/services`} onClick={toggleMenuServices}>
        <BsTruck className={styles.icons} size={20} />
        {t("services")}
        <ChevronDown size={24} />
      </Link>

      {/* Компонент Services рендериться тільки коли isServicesVisible = true */}
      {isServicesVisible && <Services onClose={toggleMenu} />}
            <Link href={`/${locale}/tariffs`} onClick={toggleMenu}>
              <LiaCoinsSolid className={styles.icons} size={20} />
              {t("tariffs")}
            </Link>
            <button
              className={styles.navLink}
              onClick={() => {
                openModal(true);
                setIsOpen(false);
              }}
            >
              <a><AiOutlineCalculator className={styles.icons} size={20} />{t("calculator")}</a>
            </button>
            <Link href={`/${locale}/business`} onClick={toggleMenu}>
              <PiSuitcaseSimpleLight className={styles.icons} size={20} />
              {t("business")}
            </Link>
            <Link href={`/${locale}/about`} onClick={toggleMenu}>
              <PiCity className={styles.icons} size={20} />
              {t("about")}
            </Link>
            <Link href={`/${locale}/contacts`} onClick={toggleMenu}>
              <LucideMapPin className={styles.icons} size={20} />
              {t("contacts")}
            </Link>
            <Link href={`/${locale}/faq`} onClick={toggleMenu}>
              <AiOutlineQuestion className={styles.icons} size={20} />
              {t("faq")}
            </Link>
            <Link href={`/${locale}/promotions`} onClick={toggleMenu}>
              <CiDiscount1 className={styles.icons} size={20} />
              {t("promotions")}
            </Link>
          </div>
          <SocLink />
        </div>
      </motion.nav>
    </div>
  );
};

export default MobMenu;
