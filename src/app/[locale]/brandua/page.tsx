
  // Компонент для сайдбару
import HeroBrandUa from '@/components/BrandUa/HeroBrandUa';
import styles from './styles.module.css';
import BrandUaMain from '@/components/BrandUa/BrandUaMain/BrandUaMain';
import Sidebar from '@/components/SideBar/SideBar';




const BrandUa = () => {
  return (
    <div className={styles.container}>
      <div className={styles.SideBar}><Sidebar /></div>
      <section id="hero" className={styles.section}>
        <HeroBrandUa/>
     </section>
       <section id="hero" className={styles.section}>
        <BrandUaMain/>
     </section>
      
    </div>
  );
};



export default BrandUa;
