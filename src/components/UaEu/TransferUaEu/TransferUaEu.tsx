
import s from './TransferUaEu.module.css';


import Link from 'next/link';
import ButtonFormOnPage from '@/components/ButtonFormOnPage2/ButtonFormOnPage';
import CalculateButton from '@/components/CalculateButton2/CalculateButton';
import PackItButton from '@/components/PackIt/PackItButton/PackItButton';

import { useTranslations } from 'next-intl';
import { FiMapPin } from 'react-icons/fi';
import { IoIosContact } from 'react-icons/io';
import { BsTelephone } from 'react-icons/bs';
import { IoMailOutline } from "react-icons/io5";
import AttentionBlock from '@/components/AttentionBlock/AttentionBlock';

const TransferUaEu = () => {

 const t = useTranslations('UaEu.TransfersUaEu');
const items = [{ text: t('warningText') }]
  return (
      <div className={s.block}>
          <p className={s.subtitle}>{t('subtitle')}</p>
      <div className={s.cont}>
  
         <p className={s.subtitle1}>{t('subtitle1')}</p>
        <ul className={s.list}>
         

          <li className={s.item}>
            <div className={s.step}>1</div>
            <div className={s.textCont}>
              <p className={s.title}>{t('steps.step1.title')}</p>
              <div className={s.contcatsInfo}>
                <p className={s.contactTitle}>{t('steps.step1.desc')}</p>
               <div className={s.btnCont}>
                <ButtonFormOnPage defaultForm="transfer">{t('steps.step1.form')}</ButtonFormOnPage>
              </div>
              </div>
            </div>
          </li>

          <li className={s.item}>
            <div className={s.step}>2</div>
            <div className={s.textCont}>
              <p className={s.title}>{t('steps.step2.title')}</p>
              <p className={s.descr}>{t('steps.step2.desc')}</p>
            </div>
          </li>

          <li className={s.item}>
            <div className={s.step}>3</div>
            <div className={s.textCont}>
              <p className={s.title}>{t('steps.step3.title')}</p>
              <p className={s.descr}>{t('steps.step3.desc')}</p>
            </div>
          </li>
        </ul>
          </div>
           <AttentionBlock items={items} />
    </div>
  );
};

export default TransferUaEu;
