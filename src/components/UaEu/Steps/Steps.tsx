"use client"
import s from './Steps.module.css';


import Link from 'next/link';
import ButtonFormOnPage from '@/components/ButtonFormOnPage2/ButtonFormOnPage';
import CalculateButton from '@/components/CalculateButton2/CalculateButton';
import PackItButton from '@/components/PackIt/PackItButton/PackItButton';

import { useTranslations } from 'next-intl';
import { FiMapPin } from 'react-icons/fi';
import { IoIosContact } from 'react-icons/io';
import { BsTelephone } from 'react-icons/bs';
import { IoCopyOutline, IoMailOutline } from "react-icons/io5";
import { useState } from 'react';

const Steps = () => {

 const t = useTranslations('UaEu.Steps');
const [copied, setCopied] = useState(false);

  const contactText = `
ФОП Кисіль Людмила Анатоліївна
Код ЄДРПОУ: 3221718269
+380 (95) 801-04-74
Львівська область, с. Гостинцеве НП №1
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(contactText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className={s.block}>
      <div className={s.cont}>
    <h2 className={s.title}>{t('title')}</h2>

        <ul className={s.list}>
          <li className={s.item}>
            <div className={s.step}>1</div>
            <div className={s.textCont}>
              <p className={s.title}>{t('step1.title')}</p>
              <div className={s.btnCont}>
                <PackItButton >{t('step1.form')}</PackItButton>
              </div>
            </div>
          </li>

          <li className={s.item}>
            <div className={s.step}>2</div>
            <div className={s.textCont}>
              <p className={s.title}>{t('step2.title')}</p>
              <div className={s.contcatsInfo}>
                <p className={s.contactTitle}>{t('step2.desc')}</p>
                <p className={s.contactTitle}><strong>Код ЄДРПОУ: 3221718269</strong></p>
                <ul className={s.contactList}>
                  <li className={s.contactItem}>ФОП Кисіль Людмила Анатоліївна</li>
                  <li className={s.contactItem}>+380 (95) 801-04-74</li>
                  <li className={s.contactItem}>Львівська область, с. Гостинцеве НП №1</li>
                  
                </ul>
                <button className={s.copyBtn} onClick={handleCopy}>
        <IoCopyOutline size={18} />
        {copied ? 'Скопійовано!' : 'Скопіювати інформацію'}
      </button>
              </div>
            </div>
          </li>

         

          <li className={s.item}>
            <div className={s.step}>3</div>
            <div className={s.textCont}>
              <p className={s.title}>{t('step3.title')}</p>
              <p className={s.descr}>{t('step3.desc')}</p>
            </div>
          </li>
        </ul>
        
        <div className={s.btnCont}>
          <ButtonFormOnPage defaultForm="ukraine">{t('buttons.fillForm')}</ButtonFormOnPage>
                  <CalculateButton>{t('buttons.calculate')}</CalculateButton>
                  
              </div>
      </div>
    </div>
  );
};

export default Steps;
