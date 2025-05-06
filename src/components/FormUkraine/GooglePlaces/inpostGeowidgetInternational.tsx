declare global {
  namespace JSX {
    interface IntrinsicElements {
      'inpost-geowidget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        token: string;
        language?: string;
        config?: string;
        onpoint?: string;
        country?: string;
      };
    }
  }
}

// import React, { useEffect } from 'react';
// import styles from "./inpost.module.css"
// interface InPostGeoWidgetProps {
//   paczkomat: string;
//   setPaczkomat: (paczkomat: string) => void;
//   validate: any;
//   addressData: any;
//   setAddressData: any;
// }

// const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzQlpXVzFNZzVlQnpDYU1XU3JvTlBjRWFveFpXcW9Ua2FuZVB3X291LWxvIn0.eyJleHAiOjIwNjA2OTk0ODIsImlhdCI6MTc0NTMzOTQ4MiwianRpIjoiNWU5ZmVmYTItMGI5Ny00YmU5LTg5NmUtNDM1NWQyNTQ1NDNhIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5pbnBvc3QucGwvYXV0aC9yZWFsbXMvZXh0ZXJuYWwiLCJzdWIiOiJmOjEyNDc1MDUxLTFjMDMtNGU1OS1iYTBjLTJiNDU2OTVlZjUzNTpnV05US05EV1pqRDBUZGxCNUNDS2NDeGVOSmRPRmFTRmhkSUM5ZG8zTHBJIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2hpcHgiLCJzZXNzaW9uX3N0YXRlIjoiZDJlNTBjZmMtZTNkZi00N2RjLWFlMzMtZWNhYWE2Mzc4NDNmIiwic2NvcGUiOiJvcGVuaWQgYXBpOmFwaXBvaW50cyIsInNpZCI6ImQyZTUwY2ZjLWUzZGYtNDdkYy1hZTMzLWVjYWFhNjM3ODQzZiIsImFsbG93ZWRfcmVmZXJyZXJzIjoid3d3Lml2YW5jb20uZXUiLCJ1dWlkIjoiMjYyMzAwODktZjJmNC00MjFlLWE2MDctNGJhZDJjNDk3NmIyIn0.B_DabqmdeSPX_9wsT2sRFkt8bJfIshL6cJnecoljYJIHT1mRBspLvpDDSo8lxUYnlhtxZlmePdIV_BpC7G52dgMp-JnLVt1w6Nsv4emN91uxeDqbABnVsPQOWSp_FQd2u6SwX8y_hNiR5K2-TgYMzsBBGiWinE27Rg2mlHpA1d_JTS2P-fYQGIYMR0IKt1bUuz_gVu0pt7wmYBgZeCa-p-_Hcbd8rq9EMo-r6U7B9l6omM635MDhBzXy2f2G7VWPiounoO_GQexcGyTve7-rE9RAH0wsOOeJJrhrfy-nR18wwYNtDhG9q-oJoeK6lVSbdCgmRS7lS5-xJVQxkITqHw";

// const InPostGeoWidgetInt: React.FC<InPostGeoWidgetProps> = ({ paczkomat, setPaczkomat,setAddressData }) => {
//   useEffect(() => {
//     // Додаємо стилі та скрипт до HTML-документу, якщо вони ще не підключені
//     if (!document.querySelector("link[href='https://geowidget.inpost-group.com/inpost-geowidget.css']")) {
//       const styleLink = document.createElement('link');
//       styleLink.rel = 'stylesheet';
//       styleLink.href = 'https://geowidget.inpost-group.com/inpost-geowidget.css';
//       document.head.appendChild(styleLink);
//     }

//     if (!document.querySelector("script[src='https://geowidget.inpost-group.com/inpost-geowidget.js']")) {
//       const script = document.createElement('script');
//       script.src = 'https://geowidget.inpost-group.com/inpost-geowidget.js';
//       script.defer = true;
//       document.body.appendChild(script);
//     }

//     // Додаємо слухача події для вибору пункту
//     const handlePointSelect = (event: any) => {
//       const point = event.detail;
//       console.log(point);
//       setAddressData((prev: any) => ({ ...prev, city: point.address_details.city,
//         region: point.address_details.province,
//         street: point.address_details.street,
//         postalCode: point.address_details.post_code,
//         houseNumber: "000",
//         apartment: point.address_details.flat_number, }))
     
//       setPaczkomat(point.name); // Зберігаємо ім'я поштомату
//     };

//     document.addEventListener('onpointselect', handlePointSelect);

//     // Видаляємо слухача, коли компонент демонтується
//     return () => {
//       document.removeEventListener('onpointselect', handlePointSelect);
//     };
//   }, [setPaczkomat]);

//   return (
//     <div className={styles.body}>
//       <h4 className={styles.formContItemTitle}>Оберіть поштомат</h4>
//       <div className={styles.paczkomat}>
//           <inpost-geowidget
//             token={token}
//             language="ua"
//             config="parcelcollect"
//           onpoint="onpointselect"
//           country='PL,BE,IT,FR,LU,PT,ES,NL'
//           ></inpost-geowidget>
    
//       </div>
//       {paczkomat && (
//         <div>
//           <p>Вибраний поштомат: {paczkomat}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InPostGeoWidgetInt;





import React, { useEffect, useState } from 'react';
import styles from './inpost.module.css';

interface InPostGeoWidgetProps {
  paczkomat: string;
  setPaczkomat: (paczkomat: string) => void;
  validate: any;
  addressData: any;
  setAddressData: any;
}

const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzQlpXVzFNZzVlQnpDYU1XU3JvTlBjRWFveFpXcW9Ua2FuZVB3X291LWxvIn0.eyJleHAiOjIwNjA2OTk0ODIsImlhdCI6MTc0NTMzOTQ4MiwianRpIjoiNWU5ZmVmYTItMGI5Ny00YmU5LTg5NmUtNDM1NWQyNTQ1NDNhIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5pbnBvc3QucGwvYXV0aC9yZWFsbXMvZXh0ZXJuYWwiLCJzdWIiOiJmOjEyNDc1MDUxLTFjMDMtNGU1OS1iYTBjLTJiNDU2OTVlZjUzNTpnV05US05EV1pqRDBUZGxCNUNDS2NDeGVOSmRPRmFTRmhkSUM5ZG8zTHBJIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2hpcHgiLCJzZXNzaW9uX3N0YXRlIjoiZDJlNTBjZmMtZTNkZi00N2RjLWFlMzMtZWNhYWE2Mzc4NDNmIiwic2NvcGUiOiJvcGVuaWQgYXBpOmFwaXBvaW50cyIsInNpZCI6ImQyZTUwY2ZjLWUzZGYtNDdkYy1hZTMzLWVjYWFhNjM3ODQzZiIsImFsbG93ZWRfcmVmZXJyZXJzIjoid3d3Lml2YW5jb20uZXUiLCJ1dWlkIjoiMjYyMzAwODktZjJmNC00MjFlLWE2MDctNGJhZDJjNDk3NmIyIn0.B_DabqmdeSPX_9wsT2sRFkt8bJfIshL6cJnecoljYJIHT1mRBspLvpDDSo8lxUYnlhtxZlmePdIV_BpC7G52dgMp-JnLVt1w6Nsv4emN91uxeDqbABnVsPQOWSp_FQd2u6SwX8y_hNiR5K2-TgYMzsBBGiWinE27Rg2mlHpA1d_JTS2P-fYQGIYMR0IKt1bUuz_gVu0pt7wmYBgZeCa-p-_Hcbd8rq9EMo-r6U7B9l6omM635MDhBzXy2f2G7VWPiounoO_GQexcGyTve7-rE9RAH0wsOOeJJrhrfy-nR18wwYNtDhG9q-oJoeK6lVSbdCgmRS7lS5-xJVQxkITqHw";

const InPostGeoWidgetInt: React.FC<InPostGeoWidgetProps> = ({
  paczkomat,
  setPaczkomat,
  setAddressData,
}) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'fallback'>('loading');

  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setStatus('fallback');
    }, 5000);

    if (!document.querySelector("link[href='https://geowidget.inpost-group.com/inpost-geowidget.css']")) {
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = 'https://geowidget.inpost-group.com/inpost-geowidget.css';
      document.head.appendChild(styleLink);
    }

    if (!document.querySelector("script[src='https://geowidget.inpost-group.com/inpost-geowidget.js']")) {
      const script = document.createElement('script');
      script.src = 'https://geowidget.inpost-group.com/inpost-geowidget.js';
      script.defer = true;

      script.onload = () => {
        if (status !== 'fallback') setStatus('loaded');
        clearTimeout(fallbackTimer);
      };

      script.onerror = () => {
        setStatus('fallback');
        clearTimeout(fallbackTimer);
      };

      document.body.appendChild(script);
    }

    const handlePointSelect = (event: any) => {
      const point = event.detail;
      setAddressData((prev: any) => ({
        ...prev,
        city: point.address_details.city,
        region: point.address_details.province,
        street: point.address_details.street,
        postalCode: point.address_details.post_code,
        houseNumber: '000',
        apartment: point.address_details.flat_number,
      }));
      setPaczkomat(point.name);
    };

    document.addEventListener('onpointselect', handlePointSelect);

    return () => {
      clearTimeout(fallbackTimer);
      document.removeEventListener('onpointselect', handlePointSelect);
    };
  }, [setPaczkomat, setAddressData]);

  return (
    <div className={styles.body}>
      <h4 className={styles.formContItemTitle}>Оберіть поштомат</h4>
      <div className={styles.paczkomat}>
        {status === 'loading' && <div className={styles.loader}>Завантаження карти поштоматів…</div>}
        {status === 'loaded' && (
          <inpost-geowidget
            token={token}
            language="ua"
            config="parcelcollect"
            onpoint="onpointselect"
            country="PL,BE,IT,FR,LU,PT,ES,NL"
          ></inpost-geowidget>
        )}
        {status === 'fallback' && (
          <div>
            <p style={{ color: 'crimson', fontWeight: 'bold' }}>
              ⚠ На жаль, карта поштоматів InPost тимчасово може не завантажуватися для деяких користувачів з України.
            </p>
            <p>
              Спробуйте пізніше, попросіть знайомого з-за кордону або введіть код поштомату вручну:
            </p>
            <input
              type="text"
              className={styles.fallbackInput}
              placeholder="Наприклад, BE123M"
              value={paczkomat}
              onChange={(e) => setPaczkomat(e.target.value)}
            />
          </div>
        )}
      </div>
      {paczkomat && <p>Вибраний поштомат: {paczkomat}</p>}
    </div>
  );
};

export default InPostGeoWidgetInt;