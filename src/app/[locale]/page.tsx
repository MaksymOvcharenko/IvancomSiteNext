import { useTranslations } from 'next-intl';
import styles from "./page.module.css"
import ServiceCards from '@/components/ServiceCards/ServiceCards';
export default function Home() {
  const t = useTranslations('IndexPage');

  return (
    <div className={styles.body}>
      
      <section id="services" className={styles.section}><ServiceCards/></section>
    </div>
  );
}
