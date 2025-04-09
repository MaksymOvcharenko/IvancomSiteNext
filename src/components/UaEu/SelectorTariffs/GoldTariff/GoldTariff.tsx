
'use client';

import { TbDiscount } from 'react-icons/tb';
import s from './GoldTariff.module.css';
import SvgIcon from '@/components/SvgIcon';
import shirt from './Thing.svg';
import Image from 'next/image';
import { MdOutlineTimer } from 'react-icons/md';
import { CiBitcoin, CiMoneyBill } from 'react-icons/ci';
import { Disclosure } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import GoldPl from './GoldPl/GoldPl';
import GoldEu from './GoldEu/GoldEu';
import { useTranslations } from 'next-intl';






const GoldTariff = () => {
  const t = useTranslations('UaEu.ParcelsUaEu.Gold');
  return (
    <div className={s.body}>
      <div className={s.cont}>
        <ul className={s.list}>
          <li className={s.item}>
            <Image alt="shirt" height={24} width={24} src={shirt} />
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
                <GoldPl/>
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
            <GoldEu/>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default GoldTariff;
