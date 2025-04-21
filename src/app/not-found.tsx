'use client';

import { useEffect, useState } from 'react';
import styles from './NotFound.module.css';
import SvgIcon from '@/components/SvgIcon';

export default function NotFound() {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      window.location.href = '/';
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <html lang="uk">
      <body className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <SvgIcon name="logo" />
          </div>
          <h1 className={styles.title}>Сторінку не знайдено</h1>
          <p className={styles.text}>
            Можливо, ви перейшли за старим посиланням. Ми оновили сайт, і деякі сторінки могли змінити адресу.
          </p>
          <p className={styles.redirect}>
            Ви будете автоматично перенаправлені на головну сторінку через{' '}
            <span className={styles.timer}>{seconds}</span> секунд...
          </p>
        </div>
      </body>
    </html>
  );
}
