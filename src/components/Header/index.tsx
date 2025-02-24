import { useTranslations } from 'next-intl';
import Image from 'next/image';  // Імпортуємо компонент Image
import LocalSwitcher from '../local-switcher';
import styles from './index.module.css';
import { NavBar } from '../NavBar';
import logo from '../../images/Logo.png';

export default function Header() {
  const t = useTranslations('Navigation');
 
  return (
    <header className={styles.header}>
      <Image 
        src={logo} 
        alt="Ivancom" 
        width={196} // Встановіть необхідні розміри
        height={80} // Встановіть необхідні розміри
      />
      <nav className={styles.nav}>
        <LocalSwitcher />
        <NavBar />
      </nav>
    </header>
  );
}
