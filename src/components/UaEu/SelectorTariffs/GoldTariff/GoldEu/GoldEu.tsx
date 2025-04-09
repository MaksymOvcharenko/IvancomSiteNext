
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import s from './GoldEu.module.css';
import DeliveryTable from '@/components/DeliveryTable/DeliveryTable';
import { europeDeliveryList } from './data';

import { goldDeliveryList } from './goldDeliveryList';

const countries = Array.from(
  new Set([
    ...europeDeliveryList.map(e => e.country),
    ...goldDeliveryList.map(e => e.country),
  ])
);

const GoldEu = () => {
  const t = useTranslations('UaEu.ParcelsUaEu.Gold.GoldEu');
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  const inpost = europeDeliveryList.find(e => e.country === selectedCountry);
  const partner = goldDeliveryList.find(e => e.country === selectedCountry);

  return (
    <div className={s.wrapper}>
      <div className={s.selectWrapper}>
        <label htmlFor="eu-delivery-select" className={s.label}>
          {t('selectLabel')}
        </label>

        <div className={s.dropdown}>
          <div
            className={s.dropdownToggle}
            onClick={() => setIsOpen(prev => !prev)}
          >
            {selectedCountry}
            <span className={s.arrow}>&#9662;</span>
          </div>

          {isOpen && (
            <ul className={s.dropdownList}>
              {countries.map(country => (
                <li
                  key={country}
                  className={s.dropdownItem}
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsOpen(false);
                  }}
                >
                  {country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {inpost && (
        <div className={s.tableBlock}>
          <h4 className={s.provider}>{t('inpostTitle')}</h4>
          <DeliveryTable data={inpost.data} />
        </div>
      )}

      {partner && (
        <div className={s.tableBlock}>
          <h4 className={s.provider}>{t('partnerTitle')}</h4>
          <DeliveryTable data={partner.data} />
        </div>
      )}
    </div>
  );
};

export default GoldEu;
