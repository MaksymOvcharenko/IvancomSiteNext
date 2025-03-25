import { GetServerSideProps } from 'next';
  // Компонент для сайдбару
import styles from './styles.module.css';
import Sidebar from '@/components/SideBar/SideBar';
import CurierHero from '@/components/CurierHero/CurierHero';
import CourierLocations from '@/components/СourierCities/СourierCities';



 const Courier = () => {
  return (
    <div className={styles.container}>
     
 <div className={styles.SideBar}><Sidebar /></div>
      <div className={styles.content}>
       
        
        <section id="hero" className={styles.section}>
         <CurierHero/>
        </section>

        <section id="tarrifs" className={styles.section}>
          <CourierLocations/>
        </section>

      </div>
      
    </div>
  );
};


export default Courier;

