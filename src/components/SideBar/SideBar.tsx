
"use client"

import Link from 'next/link';
import styles from './SideBar.module.css';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { LucideEarth } from 'lucide-react';
import { useTranslations } from 'next-intl';
const Sidebar = () => {
  const [isClient, setIsClient] = useState(false); // Стан для перевірки, чи рендериться на клієнті
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Стан для відкриття/закриття сайдбару
  const [activeSection, setActiveSection] = useState(''); // Для збереження активної секції
  const [openDirection, setOpenDirection] = useState<string | null>(null); // Для відкриття напрямку

  const { locale } = useParams(); // Отримуємо локаль з useParams
  const searchParams = useSearchParams(); // Отримуємо search params
  const section = searchParams?.get('section') || 'parcels'; // Отримуємо параметр 'section' або за замовчуванням 'parcels'
 const t = useTranslations('SideBar');
  // Дочекаємося клієнтського рендеру
  useEffect(() => {
    setIsClient(true); // Встановлюємо стан на true, коли компонент змонтований на клієнті
  }, []);

  useEffect(() => {
    // Скролимо до секції, коли сторінка змінюється або параметр section оновлюється
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [section]); // Запускається кожен раз, коли змінюється section

  useEffect(() => {
    // Визначаємо, який напрямок відкривається на основі URL
    const direction = searchParams?.get('direction') || '';
    setOpenDirection(direction);
    setActiveSection(section);
  }, [searchParams]);

  if (!isClient) return null; // Поки на клієнті не змонтовано, не рендеримо сайтбар

  // Функція для перевірки активної секції
  const isActive = (id: string) => (activeSection === id ? styles.active : '');

  // Функція для відкриття напрямку
  const toggleDirection = (direction: string) => {
    setOpenDirection(openDirection === direction ? null : direction); // Якщо напрямок вже відкритий, закриваємо його
  };

  // Функція для відкриття/закриття сайдбару
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
      <div className={styles.cont}>
          <div>
              {!isSidebarOpen && <button className={styles.toggleButton} onClick={toggleSidebar}>
            <LucideEarth />
          </button> }
              
          </div>
        <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
           {isSidebarOpen && <button className={styles.closeBtn} onClick={toggleSidebar}>
            <MdKeyboardArrowLeft size={24}/> { t("toggleSidebar")}
          </button>}
    
          
              <ul className={styles.menu}>
                  
            {/* Україна → Європа */}
            <li className={styles.hasSubmenu}>
                      <span onClick={() => toggleDirection('ukraineToEurope')}>{ t("ukraineToEurope")}</span>
              {openDirection === 'ukraineToEurope' && (
                <ul className={styles.submenu}>
                  <li className={isActive('parcels')}>
                    <Link href={`/${locale}/ukraine-to-europe?section=parcels&direction=ukraineToEurope`}>{ t("parcels")}</Link>
                  </li>
                  <li className={isActive('medicines')}>
                    <Link href={`/${locale}/ukraine-to-europe?section=medicines&direction=ukraineToEurope`}>{ t("medicines")}</Link>
                  </li>
                  <li className={isActive('animals')}>
                    <Link href={`/${locale}/ukraine-to-europe?section=animals&direction=ukraineToEurope`}>{ t("animals")}</Link>
                  </li>
                  <li className={isActive('generators')}>
                    <Link href={`/${locale}/ukraine-to-europe?section=generators&direction=ukraineToEurope`}>{ t("generators")}</Link>
                  </li>
                  <li className={isActive('move')}>
                    <Link href={`/${locale}/ukraine-to-europe?section=move&direction=ukraineToEurope`}>{ t("move")}</Link>
                  </li>
                  <li className={isActive('wheels')}>
                    <Link href={`/${locale}/ukraine-to-europe?section=wheels&direction=ukraineToEurope`}>{ t("wheels")}</Link>
                  </li>
                  <li className={isActive('bicycles')}>
                    <Link href={`/${locale}/ukraine-to-europe?section=bicycles&direction=ukraineToEurope`}>{ t("bicycles")}</Link>
                  </li>
                  <li className={isActive('documents')}>
                    <Link href={`/${locale}/ukraine-to-europe?section=documents&direction=ukraineToEurope`}>{ t("documents")}</Link>
                  </li>
                </ul>
              )}
            </li>
    
            {/* Європа → Україна */}
            <li className={styles.hasSubmenu}>
              <span onClick={() => toggleDirection('europeToUkraine')}>{ t("europeToUkraine")}</span>
              {openDirection === 'europeToUkraine' && (
                <ul className={styles.submenu}>
                  <li className={isActive('parcels')}>
                    <Link href={`/${locale}/europe-to-ukraine?section=parcels&direction=europeToUkraine`}>{ t("parcels")}</Link>
                  </li>
                  <li className={isActive('medicines')}>
                    <Link href={`/${locale}/europe-to-ukraine?section=medicines&direction=europeToUkraine`}>{ t("medicines")}</Link>
                  </li>
                  <li className={isActive('animals')}>
                    <Link href={`/${locale}/europe-to-ukraine?section=animals&direction=europeToUkraine`}>{ t("animals")}</Link>
                  </li>
                  <li className={isActive('generators')}>
                    <Link href={`/${locale}/europe-to-ukraine?section=generators&direction=europeToUkraine`}>{ t("generators")}</Link>
                  </li>
                  <li className={isActive('move')}>
                    <Link href={`/${locale}/europe-to-ukraine?section=move&direction=europeToUkraine`}>{ t("move")}</Link>
                  </li>
                  <li className={isActive('wheels')}>
                    <Link href={`/${locale}/europe-to-ukraine?section=wheels&direction=europeToUkraine`}>{ t("wheels")}</Link>
                  </li>
                  <li className={isActive('bicycles')}>
                    <Link href={`/${locale}/europe-to-ukraine?section=bicycles&direction=europeToUkraine`}>{ t("bicycles")}</Link>
                  </li>
                  <li className={isActive('documents')}>
                    <Link href={`/${locale}/europe-to-ukraine?section=documents&direction=europeToUkraine`}>{ t("documents")}</Link>
                  </li>
                </ul>
              )}
            </li>
    
            {/* Європа → Європа */}
            <li className={styles.hasSubmenu}>
              <span onClick={() => toggleDirection('europeToEurope')}>{ t("europeToEurope")}</span>
              {openDirection === 'europeToEurope' && (
                <ul className={styles.submenu}>
                  <li className={isActive('parcels')}>
                    <Link href={`/${locale}/europe-to-europe?section=parcels&direction=europeToEurope`}>{ t("parcels")}</Link>
                  </li>
                  <li className={isActive('medicines')}>
                    <Link href={`/${locale}/europe-to-europe?section=medicines&direction=europeToEurope`}>{ t("medicines")}</Link>
                  </li>
                  <li className={isActive('animals')}>
                    <Link href={`/${locale}/europe-to-europe?section=animals&direction=europeToEurope`}>{ t("animals")}</Link>
                  </li>
                  <li className={isActive('generators')}>
                    <Link href={`/${locale}/europe-to-europe?section=generators&direction=europeToEurope`}>{ t("generators")}</Link>
                  </li>
                  <li className={isActive('move')}>
                    <Link href={`/${locale}/europe-to-europe?section=move&direction=europeToEurope`}>{ t("move")}</Link>
                  </li>
                  <li className={isActive('wheels')}>
                    <Link href={`/${locale}/europe-to-europe?section=wheels&direction=europeToEurope`}>{ t("wheels")}</Link>
                  </li>
                  <li className={isActive('bicycles')}>
                    <Link href={`/${locale}/europe-to-europe?section=bicycles&direction=europeToEurope`}>{ t("bicycles")}</Link>
                  </li>
                  <li className={isActive('documents')}>
                    <Link href={`/${locale}/europe-to-europe?section=documents&direction=europeToEurope`}>{ t("documents")}</Link>
                  </li>
                </ul>
              )}
            </li>
              </ul>
              
      <ul className={styles.otherMenu}>
        <li className={isActive('brandua')}>
          <Link href={`/${locale}/brandua`}>{ t("brandua")}</Link>
        </li>
         <li className={isActive('courier')}>
          <Link href={`/${locale}/courier`}>{ t("courier")}</Link>
         </li>
        <li className={isActive('self-service')}>
          <Link href={`/${locale}/self-service`}>{ t("selfService")}</Link>
        </li>
      
      </ul>
        </div>
    </div>
  );
};

export default Sidebar;
