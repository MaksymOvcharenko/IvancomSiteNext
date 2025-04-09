"use client"
import { IoIosArrowDown } from 'react-icons/io';
import s from './SelectorsMedicines.module.css'
import { Disclosure } from '@headlessui/react';
import MedicinesPl from './MedicinesPl/MedicinesPl';
import MedicinesEuEa from '@/components/EuUa/MedicinesEuEa/MedicinesEuEa';
import { useTranslations } from 'next-intl';
import MedicinesUaEu from '../MedicinesUaEu';
import MedicinesEu from './MedicinesEu/MedicinesEu';
const SelectorsMedicines = () => {
    const t = useTranslations('UaEu.MedicinesUaEu');
  return (
      <div className={s.body}>
           <Disclosure>
          {({ open }) => (
            <div className={s.accordion}>
              <Disclosure.Button className={s.accordionBtn}>
                <span>{t('accordion.toPoland')}</span>
                <IoIosArrowDown className={`${s.icon} ${open ? s.open : ''}`} />
              </Disclosure.Button>
              <Disclosure.Panel className={s.panel}>
                <MedicinesPl/>
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
            <MedicinesEu/>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
    </div>
  )
}

export default SelectorsMedicines