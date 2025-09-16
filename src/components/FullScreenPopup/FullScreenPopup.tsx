// // components/FullScreenPopup/FullScreenPopup.tsx
// "use client";
// import Modal from "@/components/Modal/Modal";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import popUp from "../../../public/popup2.png"; // Adjust the path as necessary
// import { IoMdClose } from "react-icons/io";
// import { IconContext } from "react-icons";
// import styles from "./FullScreenPopup.module.css"; // Стилі для хрестика

// const FullScreenPopup: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const isPopupShown = sessionStorage.getItem("popup_shown");
  
//     if (!isPopupShown) {
//       const timer = setTimeout(() => {
//         setIsOpen(true);
//         sessionStorage.setItem("popup_shown", "true");
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   return (
//     <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//       <div className={styles.popupContent}>
//         <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
//           <IconContext.Provider value={{ color: "#000", size: "36px" }}>
//             <IoMdClose />
//           </IconContext.Provider>
//         </button>
//         <Image src={popUp} alt="Promo" width={800} height={860} className={styles.img} />
//       </div>
//     </Modal>
//   );
// };

// export default FullScreenPopup;
// "use client";
// import Modal from "@/components/Modal/Modal";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useLocale, useTranslations } from "next-intl";
// import popUp from "../../../public/popup2.png";
// import { IoMdClose } from "react-icons/io";
// import { IconContext } from "react-icons";
// import styles from "./FullScreenPopup.module.css";

// const FullScreenPopup: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const locale = useLocale(); // отримати поточну локаль
//   const t = useTranslations("popup"); // переклади

//   useEffect(() => {
//     const isPopupShown = sessionStorage.getItem("popup_shown");
//     if (!isPopupShown) {
//       const timer = setTimeout(() => {
//         setIsOpen(true);
//         sessionStorage.setItem("popup_shown", "true");
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   return (
//     <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//       <div className={styles.popupContent}>
//         <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
//           <IconContext.Provider value={{ color: "#000", size: "36px" }}>
//             <IoMdClose />
//           </IconContext.Provider>
//         </button>

//         {/* Зображення */}
//         <Image
//           src={popUp}
//           alt="Promo"
//           width={800}
//           height={860}
//           className={styles.img}
//         />

//         {/* Кнопка */}
//         <Link href={`/${locale}/self-service`} className={styles.popupButton}>
//           {t("howToSend")} {/* або прямо "Як відправити?" */}
//         </Link>
//       </div>
//     </Modal>
//   );
// };

// export default FullScreenPopup;
"use client";
import Modal from "@/components/Modal/Modal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import popUp from "../../../public/popup2.png";
import { IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";
import styles from "./FullScreenPopup.module.css";

const FullScreenPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("popup"); // "Як відправити?"

  useEffect(() => {
    const isPopupShown = sessionStorage.getItem("popup_shown");
    if (!isPopupShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("popup_shown", "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className={styles.popupContent}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          <IconContext.Provider value={{ color: "#000", size: "36px" }}>
            <IoMdClose />
          </IconContext.Provider>
        </button>

        {/* Обгортка з relative для позиціювання кнопки */}
        <div className={styles.imgWrap}>
          <Image
            src={popUp}
            alt="Promo"
            className={styles.img}
            priority
            draggable={false}
          />

          {/* Кнопка поверх картинки */}
          <Link
            href={`/${locale}/self-service`}
            className={styles.cta}
            aria-label={t("howToSend")}
          >
            Як відправити?
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default FullScreenPopup;
