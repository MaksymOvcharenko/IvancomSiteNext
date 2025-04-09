
'use client';

import { TbDiscount } from 'react-icons/tb';
import s from './SilverTariff.module.css';
import SvgIcon from '@/components/SvgIcon';
import shirt from './Thing.svg';
import Image from 'next/image';
import { MdOutlineTimer } from 'react-icons/md';
import { CiMoneyBill } from 'react-icons/ci';
import { Disclosure } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import SilverPl from './SilverPl/SilverPl';
import SilverEu from './SilverEu/SilverEu';
import { useTranslations } from 'next-intl';






const SilverTariff = () => {
  const t = useTranslations('UaEu.ParcelsUaEu.Silver');
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
        </ul>

       <p className={s.descr}>{t('description.snacks')}</p>
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
                <SilverPl/>
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
            <SilverEu/>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default SilverTariff;
