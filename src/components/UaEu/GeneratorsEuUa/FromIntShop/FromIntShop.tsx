
import s from './FromIntShop.module.css';


import Link from 'next/link';
import ButtonFormOnPage from '@/components/ButtonFormOnPage2/ButtonFormOnPage';
import CalculateButton from '@/components/CalculateButton2/CalculateButton';
import PackItButton from '@/components/PackIt/PackItButton/PackItButton';

import { useTranslations } from 'next-intl';
import { FiMapPin } from 'react-icons/fi';
import { IoIosContact } from 'react-icons/io';
import { BsTelephone } from 'react-icons/bs';
import { IoMailOutline } from "react-icons/io5";

const FromIntShop = () => {

 const t = useTranslations('EuUa.GeneratorsEuUa.Eu');

  return (
    <div className={s.block}>
      <div className={s.cont}>
  

        <ul className={s.list}>
         

          <li className={s.item}>
            <div className={s.step}>1</div>
            <div className={s.textCont}>
              <p className={s.title}>{t('step1.title')}</p>
              <div className={s.contcatsInfo}>
                <p className={s.contactTitle}>{t('step1.desc')}</p>
                <ul className={s.contactList}>
                  <li className={s.contactItem}><FiMapPin size={20} /> al. Jana Pawła II 154, 31-982 Kraków, Polska</li>
                  <li className={s.contactItem}><IoIosContact size={20} /> Ivan Kysil IVANCOM</li>
                  <li className={s.contactItem}><BsTelephone size={20} /> +48 570 371 048</li>
                  <li className={s.contactItem}><IoMailOutline size={20} /> ivancom.krakow@gmail.com</li>
                </ul>
              </div>
            </div>
          </li>

          <li className={s.item}>
            <div className={s.step}>2</div>
            <div className={s.textCont}>
              <p className={s.title}>{t('step2.title')}</p>
              <div className={s.btnCont}>
                <ButtonFormOnPage defaultForm="world_to_ukraine">{t('step2.form')}</ButtonFormOnPage>
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
      </div>
    </div>
  );
};

export default FromIntShop;
