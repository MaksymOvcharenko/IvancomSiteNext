// "use client";

// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";
// import styles from "./MobMenu.module.css";

// type Props = {
//   isOpen: boolean;
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const MobMenu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
//   const toggleMenu = () => setIsOpen((prev) => !prev);

//   return (
//     <div className={styles.menuWrapper}>
//       {/* Кнопка відкриття меню */}
//       <button onClick={toggleMenu} className={styles.menuButton}>
//         <motion.div
//           key="menu"
//           initial={{ rotate: -90, opacity: 0 }}
//           animate={{ rotate: 0, opacity: 1 }}
//           exit={{ rotate: 90, opacity: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <Menu size={28} />
//         </motion.div>
//       </button>

//       {/* Затемнення */}
//       {isOpen && (
//         <div className={styles.backdrop} onClick={toggleMenu} />
//       )}

//       {/* Меню */}
//       <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
//         {/* Кнопка закриття меню всередині */}
//         <button onClick={toggleMenu} className={styles.closeButton}>
//           <X size={28} />
//         </button>

//         <ul>
//           <li>
//             <Link href="/" onClick={toggleMenu}>
//               Головна
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" onClick={toggleMenu}>
//               Про нас
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" onClick={toggleMenu}>
//               Контакти
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default MobMenu;
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import styles from "./MobMenu.module.css";
import LocaleSwitcher from "../local-switcher";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { SocLink } from "../SocLink/SocLink";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

const MobMenu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => setIsOpen((prev) => !prev);
    const { locale } = useParams(); // Витягуємо мову з URL
    const t = useTranslations('Footer');
  useEffect(() => {
    if (isOpen) {
      // Визначаємо ширину скроллбару
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
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
      {/* Кнопка відкриття */}
      {/* <button onClick={toggleMenu} className={styles.menuButton}>
        <Menu size={28} />
      </button> */}

      {/* Затемнення */}
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
          <X size={28} />
        </button>

              <div className={styles.body}>
                  <LocaleSwitcher/>
            <div className={styles.navbar}>
      <Link href={`/${locale}`} onClick={toggleMenu}>{t("home")}</Link>
      <Link href={`/${locale}/services`} onClick={toggleMenu}>{t("services")}</Link>
      <Link href={`/${locale}/tariffs`} onClick={toggleMenu}>{t("tariffs")}</Link>
      <Link href={`/${locale}/calculator`} onClick={toggleMenu}>{t("calculator")}</Link>
      <Link href={`/${locale}/business`} onClick={toggleMenu}>{t("business")}</Link>
      <Link href={`/${locale}/about`} onClick={toggleMenu}>{t("about")}</Link>
      <Link href={`/${locale}/contacts`} onClick={toggleMenu}>{t("contacts")}</Link>
      <Link href={`/${locale}/faq`} onClick={toggleMenu}>{t("faq")}</Link>
        <Link href={`/${locale}/promotions`} onClick={toggleMenu}>{t("promotions")}</Link>
        
                  </div>
                  <SocLink/>
        </div>
      </motion.nav>
    </div>
  );
};

export default MobMenu;
