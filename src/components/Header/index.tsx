import { useTranslations } from 'next-intl';
import Image from 'next/image';  // Імпортуємо компонент Image
import LocalSwitcher from '../local-switcher';
import styles from './index.module.css';
import { NavBar } from '../NavBar';
import logo from '../../images/Logo.svg';
import { SocLink} from '../SocLink/SocLink';
import FormButton from '../FormButton/FormButton';
export default function Header() {
  const t = useTranslations('Navigation');
 
  return (
    <header className={styles.header}>
     <div className={styles.logo}>
        <Image 
          src={logo} 
          alt="Ivancom" 
          className={styles.logoIcon}
        />
     </div>
   
     <div className={styles.mobMenu}><Image
               src="/icons/mobMenu.svg"
               alt="Facebook"
               width={40}
               height={40}
             /></div>
      <nav className={styles.nav}>
        <div className={styles.topCont}>
          <LocalSwitcher />
          <SocLink />
          <FormButton/>
        </div>
        <NavBar />
      </nav>
    </header>
  );
}
