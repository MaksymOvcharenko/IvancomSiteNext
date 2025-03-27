import { GetServerSideProps } from 'next';
  // Компонент для сайдбару
import styles from './styles.module.css';
import Sidebar from '@/components/SideBar/SideBar';
import HeroInpost from '@/components/Inpost/HeroInpost/HeroInpost';
import InpostMain from '@/components/Inpost/InpostMain/InpostMain';



const InpostPage = () => {
  return (
    <div className={styles.container}>
     
 <div className={styles.SideBar}><Sidebar /></div>
      <div className={styles.content}>
        
        
        <section id="hero" className={styles.section}>
        <HeroInpost/>
        </section>

         <section id="main" className={styles.section}>
        <InpostMain/>
        </section>

        {/* <section id="animals" className={styles.section}>
          <h2>Animals</h2>
          <p>Тут буде інформація про перевезення тварин.</p>
        </section>

        <section id="generators" className={styles.section}>
          <h2>Generators</h2>
          <p>Тут буде інформація про транспортування генераторів.</p>
        </section>

        <section id="move" className={styles.section}>
          <h2>Move</h2>
          <p>Тут буде інформація про переїзди.</p>
        </section>

        <section id="wheels" className={styles.section}>
          <h2>Wheels</h2>
          <p>Тут буде інформація про доставку коліс та шин.</p>
        </section>

        <section id="bicycles" className={styles.section}>
          <h2>Bicycles</h2>
          <p>Тут буде інформація про перевезення велосипедів.</p>
        </section>

        <section id="documents" className={styles.section}>
          <h2>Documents</h2>
          <p>Тут буде інформація про доставку документів.</p>
        </section>  */}
      </div>
      
    </div>
  );
};



export default InpostPage;
