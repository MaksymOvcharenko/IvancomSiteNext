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

import React, { useEffect } from 'react';
import styles from "./inpost.module.css"
interface InPostGeoWidgetProps {
  paczkomat: string;
  setPaczkomat: (paczkomat: string) => void;
  validate: any;
  addressData: any;
  setAddressData: any;
}

const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzQlpXVzFNZzVlQnpDYU1XU3JvTlBjRWFveFpXcW9Ua2FuZVB3X291LWxvIn0.eyJleHAiOjIwNjA2OTc1MTIsImlhdCI6MTc0NTMzNzUxMiwianRpIjoiMTQwNjU5YmUtZDUwNy00Yzg1LWI4NTYtNTZmMTc3YzAyNmZkIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5pbnBvc3QucGwvYXV0aC9yZWFsbXMvZXh0ZXJuYWwiLCJzdWIiOiJmOjEyNDc1MDUxLTFjMDMtNGU1OS1iYTBjLTJiNDU2OTVlZjUzNTpnV05US05EV1pqRDBUZGxCNUNDS2NDeGVOSmRPRmFTRmhkSUM5ZG8zTHBJIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2hpcHgiLCJzZXNzaW9uX3N0YXRlIjoiZWRhMWI1ZmItNzJhNS00MjY3LTk2ODEtNTEyNTNiZWRiMTlkIiwic2NvcGUiOiJvcGVuaWQgYXBpOmFwaXBvaW50cyIsInNpZCI6ImVkYTFiNWZiLTcyYTUtNDI2Ny05NjgxLTUxMjUzYmVkYjE5ZCIsImFsbG93ZWRfcmVmZXJyZXJzIjoiaXZhbmNvbS5ldSIsInV1aWQiOiIyNjIzMDA4OS1mMmY0LTQyMWUtYTYwNy00YmFkMmM0OTc2YjIifQ.nMqG31vTjhLOJ7lQdoiaiMS04zwIV1RNCEhVTApxoyrAHZLWY3-yemIRJzoSRYMZJhPgY8mLe-5peG6-ea5GzgvCUwfV6ryOflrSvzaCfR3efHDCeDLagUdHJN0cjmoZNAvePZFq8TGL9kceSgTFwtVQdkEgDKwDJpE7jDp5Hj6zqpFyuQoMj0Ys8FLnLoETawLLHfMTf2D4YsoMSyeKAgjyeFlwQaHIkMoUMcygVPqx3zLI3nn6T3figXSoJdm4hef50PTuAhZt_FjX05qjG5S-ZbuNaiOsUwK5me6oVZtCA3MCOmIaWgO32dO-uFIfdc9F7Ni0AS_NKHzjAQeRsA";

const InPostGeoWidgetInt: React.FC<InPostGeoWidgetProps> = ({ paczkomat, setPaczkomat,setAddressData }) => {
  useEffect(() => {
    // Додаємо стилі та скрипт до HTML-документу, якщо вони ще не підключені
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
      document.body.appendChild(script);
    }

    // Додаємо слухача події для вибору пункту
    const handlePointSelect = (event: any) => {
      const point = event.detail;
      console.log(point);
      setAddressData((prev: any) => ({ ...prev, city: point.address_details.city,
        region: point.address_details.province,
        street: point.address_details.street,
        postalCode: point.address_details.post_code,
        houseNumber: "000",
        apartment: point.address_details.flat_number, }))
     
      setPaczkomat(point.name); // Зберігаємо ім'я поштомату
    };

    document.addEventListener('onpointselect', handlePointSelect);

    // Видаляємо слухача, коли компонент демонтується
    return () => {
      document.removeEventListener('onpointselect', handlePointSelect);
    };
  }, [setPaczkomat]);

  return (
    <div className={styles.body}>
      <h4 className={styles.formContItemTitle}>Оберіть поштомат</h4>
      <div className={styles.paczkomat}>
          <inpost-geowidget
            token={token}
            language="ua"
            config="parcelcollect"
          onpoint="onpointselect"
          country='PL,BE,IT,FR,LU,PT,ES,NL'
          ></inpost-geowidget>
    
      </div>
      {paczkomat && (
        <div>
          <p>Вибраний поштомат: {paczkomat}</p>
        </div>
      )}
    </div>
  );
};

export default InPostGeoWidgetInt;
