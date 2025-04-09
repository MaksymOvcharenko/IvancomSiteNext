
'use client';

import { TbDiscount } from 'react-icons/tb';
import s from './PlatinumTariff.module.css';
import SvgIcon from '@/components/SvgIcon';
import shirt from './Thing.svg';
import Image from 'next/image';
import { MdOutlineTimer } from 'react-icons/md';
import { CiBitcoin, CiMoneyBill } from 'react-icons/ci';
import { Disclosure } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import { RxAvatar } from "react-icons/rx";
import { useTranslations } from 'next-intl';
import PlatinumPl from './PlatinumPl/PlatinumPl';
import PlatinumEu from './PlatinumEu/PlatinumEu';
import { IoDiamondOutline } from 'react-icons/io5';






const PlatinumTariff = () => {
  const t = useTranslations('UaEu.ParcelsUaEu.Platinum');
  return (
    <div className={s.body}>
      <div className={s.cont}>
        <ul className={s.list}>
          <li className={s.item}>
            <IoDiamondOutline size={24} />
            <p className={s.text}>{t('items.sameType')}</p>
          </li>
          <li className={s.item}>
               <TbDiscount size={24} />
           <p className={s.text}>{t('items.insurance')}</p>
          </li>
          <li className={s.item}>
             <MdOutlineTimer size={24} />
            <p className={s.text}>{t('items.delivery')}</p>
          </li>
          <li className={s.item}>
                 <CiMoneyBill size={24} />
            <p className={s.text}>{t('items.estimate')}</p>
          </li>
          <li className={s.item}>
                 <CiBitcoin size={24} />
            <p className={s.text}>{t('items.crypto')}</p>
          </li>
          <li className={s.item}>
                 <RxAvatar size={24} />
            <p className={s.text}>{t('items.manager')}</p>
          </li>
        </ul>

       
       <p className={s.descr}>{t('description.plates')}</p>

        {/* Disclosure 1: Доставка до Польщі */}
        <Disclosure>
          {({ open }) => (
            <div className={s.accordion}>
              <Disclosure.Button className={s.accordionBtn}>
                <span>{t('accordion.toPoland')}</span>
                <IoIosArrowDown className={`${s.icon} ${open ? s.open : ''}`} />
              </Disclosure.Button>
              <Disclosure.Panel className={s.panel}>
                <PlatinumPl/>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        {/* Disclosure 2: Доставка по Європі */}
        <Disclosure>
          {({ open }) => (
            <div className={s.accordion}>
              <Disclosure.Button className={s.accordionBtn}>
                <span>{t('accordion.toEurope')}</span>
                <IoIosArrowDown className={`${s.icon} ${open ? s.open : ''}`} />
              </Disclosure.Button>
              <Disclosure.Panel className={s.panel}>
            <PlatinumEu/>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default PlatinumTariff;
