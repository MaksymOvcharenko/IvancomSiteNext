"use client"
import { useTranslations } from 'next-intl';
import styles from "./FormButton.module.css"
export default function FormButton() {
  const t = useTranslations('Header');

  const handleClick = () => {
    console.log('Відкрити форму');
  };

  return <button onClick={handleClick} className={styles.btn}><p>{t('form')}</p></button>;
}
