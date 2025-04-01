
  // Компонент для сайдбару
import HeroBrandUa from '@/components/BrandUa/HeroBrandUa';
import styles from './styles.module.css';




const BrandUa = () => {
  return (
    <div className={styles.container}>
      <section id="hero" className={styles.section}>
        <HeroBrandUa/>
     </section>

      
    </div>
  );
};



export default BrandUa;
