import { useTranslations } from 'next-intl';
import styles from "./page.module.css"
export default function Home() {
  const t = useTranslations('IndexPage');

  return (
    <div className={styles.body}>
      <h1 className='text-4xl mb-4 font-semibold'>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
