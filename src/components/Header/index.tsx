import { useTranslations } from 'next-intl';
import Image from 'next/image';  // Імпортуємо компонент Image
import LocalSwitcher from '../local-switcher';
import styles from './index.module.css';
import { NavBar } from '../NavBar';
import logo from '../../images/Logo.svg';
import { SocLink} from '../SocLink/SocLink';
import FormButton from '../FormButton/FormButton';
import SvgIcon from '../SvgIcon';
export default function Header() {
  const t = useTranslations('Navigation');
 
  return (
    <header className={styles.header}>
     <div className={styles.logo}>
        
        <SvgIcon name="logo"/>
     </div>
   
     <div className={styles.mobMenu}><SvgIcon name="mobile-menu"/></div>
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
