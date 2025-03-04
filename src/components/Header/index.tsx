"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';  // Імпортуємо компонент Image
import LocalSwitcher from '../local-switcher';
import styles from './index.module.css';
import { NavBar } from '../NavBar';
import logo from '../../images/Logo.svg';
import { SocLink} from '../SocLink/SocLink';
import FormButton from '../FormButton/FormButton';
import SvgIcon from '../SvgIcon';
import { useState } from 'react';
import MobMenu from '../MobMenu/MobMenu';
import ResponsiveLocaleSwitcher from '../ResponsiveLocalSwitcher';
import ResponsiveSocLink from '../ResponsiveSocLink';
import Modal from '../Modal/Modal';
import DeliveryCalculator from '../DeliveryCalculator/DeliveryCalculator';
export default function Header() {
  const t = useTranslations('Navigation');
  const [mobMenu, setMobMenu] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
       <div className={styles.logo}>
          
          <SvgIcon name="logo"/>
       </div>
     
       <div className={styles.mobMenu}><button onClick={()=>setMobMenu(true)}><SvgIcon name="mobile-menu"/></button></div>
        <nav className={styles.nav}>
          <div className={styles.topCont}>
            <ResponsiveLocaleSwitcher/>
            <ResponsiveSocLink/>
            <FormButton/>
          </div>
          <NavBar />
        </nav>
        
      </header>
      {mobMenu && <MobMenu isOpen={mobMenu} setIsOpen={setMobMenu} openModal={setModalIsOpen} />}
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
      <DeliveryCalculator />
    </Modal>
    </>
  );
}
