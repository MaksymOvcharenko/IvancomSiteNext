
'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Flag from 'react-world-flags';
import { ChevronDown } from 'lucide-react';
import styles from "./local-switcher.module.css"

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const localeActive = useLocale();

  const languages = [
    { code: 'uk', label: 'UA', flag: 'UA' },
    { code: 'en', label: 'EN', flag: 'GB' },
    { code: 'pl', label: 'PL', flag: 'PL' },
  ];

  // const handleLanguageChange = (locale: string) => {
  //   setIsOpen(false);
  //   router.replace(`/${locale}`);
  // };
const handleLanguageChange = (locale: string) => {
  setIsOpen(false);
  router.replace(`/${locale}${window.location.pathname.replace(/^\/[a-z]{2}/, '')}`);
};

  return (
    <div className={styles.switcher}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.switcherBtn}
      >
        
        {/* <div className={styles.flag}><Flag code={languages.find((lang) => lang.code === localeActive)?.flag || 'UA'} width={52} height={52} /></div> */}
        <div className={styles.lang}>
          <span >{languages.find((lang) => lang.code === localeActive)?.label || 'UA'}</span>
          <ChevronDown size={24} />
        </div>
      </button>

      {isOpen && (
        <div className={styles.modal}>
          {languages.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={styles.modalBtn}
            >
              {/* <div className={styles.modalSpan}><Flag code={flag} width={20} height={20} /></div> */}
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
