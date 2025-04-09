
// // import { useState } from 'react';
// // import s from './SilverEu.module.css';
// // import DeliveryTable from '@/components/DeliveryTable/DeliveryTable';
// // import { europeDeliveryList } from './data';
// // import { partnerDeliveryList } from './partnerDeliveryList';


// // const countries = Array.from(
// //   new Set([
// //     ...europeDeliveryList.map(e => e.country),
// //     ...partnerDeliveryList.map(e => e.country),
// //   ])
// // );

// // const SilverEu = () => {
// //   const [selectedCountry, setSelectedCountry] = useState(countries[0]);

// //   const inpost = europeDeliveryList.find(e => e.country === selectedCountry);
// //   const partner = partnerDeliveryList.find(e => e.country === selectedCountry);

// //   return (
// //     <div className={s.wrapper}>
// //       <div className={s.selectWrapper}>
// //         <label htmlFor="eu-delivery-select" className={s.label}>
// //           Оберіть країну:
// //         </label>
// //         <select
// //           id="eu-delivery-select"
// //           className={s.select}
// //           value={selectedCountry}
// //           onChange={(e) => setSelectedCountry(e.target.value)}
// //         >
// //           {countries.map((country) => (
// //             <option key={country} value={country}>
// //               {country}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       {inpost && (
// //         <div className={s.tableBlock}>
// //           <h4 className={s.provider}>Доставка за допомогою партнеру InPost</h4>
// //           <DeliveryTable data={inpost.data} />
// //         </div>
// //       )}

// //       {partner && (
// //         <div className={s.tableBlock}>
// //           <h4 className={s.provider}>Інші партнерські служби</h4>
// //           <DeliveryTable data={partner.data} />
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SilverEu;
// import { useState } from 'react';
// import s from './SilverEu.module.css';
// import DeliveryTable from '@/components/DeliveryTable/DeliveryTable';
// import { europeDeliveryList } from './data';
// import { partnerDeliveryList } from './partnerDeliveryList';

// const countries = Array.from(
//   new Set([
//     ...europeDeliveryList.map(e => e.country),
//     ...partnerDeliveryList.map(e => e.country),
//   ])
// );

// const SilverEu = () => {
//   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
//   const [isOpen, setIsOpen] = useState(false);

//   const inpost = europeDeliveryList.find(e => e.country === selectedCountry);
//   const partner = partnerDeliveryList.find(e => e.country === selectedCountry);

//   return (
//     <div className={s.wrapper}>
//       <div className={s.selectWrapper}>
//         <label htmlFor="eu-delivery-select" className={s.label}>
//           Оберіть країну:
//         </label>

//         <div className={s.dropdown}>
//           <div
//             className={s.dropdownToggle}
//             onClick={() => setIsOpen(prev => !prev)}
//           >
//             {selectedCountry}
//             <span className={s.arrow}>&#9662;</span>
//           </div>

//           {isOpen && (
//             <ul className={s.dropdownList}>
//               {countries.map(country => (
//                 <li
//                   key={country}
//                   className={s.dropdownItem}
//                   onClick={() => {
//                     setSelectedCountry(country);
//                     setIsOpen(false);
//                   }}
//                 >
//                   {country}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>

//       {inpost && (
//         <div className={s.tableBlock}>
//           <h4 className={s.provider}>Доставка за допомогою партнера InPost</h4>
//           <DeliveryTable data={inpost.data} />
//         </div>
//       )}

//       {partner && (
//         <div className={s.tableBlock}>
//           <h4 className={s.provider}>Інші партнерські служби</h4>
//           <DeliveryTable data={partner.data} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default SilverEu;
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import s from './SilverEu.module.css';
import DeliveryTable from '@/components/DeliveryTable/DeliveryTable';
import { europeDeliveryList } from './data';
import { partnerDeliveryList } from './partnerDeliveryList';

const countries = Array.from(
  new Set([
    ...europeDeliveryList.map(e => e.country),
    ...partnerDeliveryList.map(e => e.country),
  ])
);

const SilverEu = () => {
  const t = useTranslations('UaEu.ParcelsUaEu.Silver.SilverEu');
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  const inpost = europeDeliveryList.find(e => e.country === selectedCountry);
  const partner = partnerDeliveryList.find(e => e.country === selectedCountry);

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

export default SilverEu;
