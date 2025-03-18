declare global {
  namespace JSX {
    interface IntrinsicElements {
      'inpost-geowidget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        token: string;
        language?: string;
        config?: string;
        onpoint?: string;
      };
    }
  }
}

import React, { useEffect } from 'react';
import styles from "./inpost.module.css"
interface InPostGeoWidgetProps {
  paczkomat: string;
  setPaczkomat: (paczkomat: string) => void;
}

const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzQlpXVzFNZzVlQnpDYU1XU3JvTlBjRWFveFpXcW9Ua2FuZVB3X291LWxvIn0.eyJleHAiOjIwNTc2NzYyNjEsImlhdCI6MTc0MjMxNjI2MSwianRpIjoiMTdlMWMxM2YtMzBhZS00NjE5LThiNGEtN2Y5YjMwY2Q0NDBhIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5pbnBvc3QucGwvYXV0aC9yZWFsbXMvZXh0ZXJuYWwiLCJzdWIiOiJmOjEyNDc1MDUxLTFjMDMtNGU1OS1iYTBjLTJiNDU2OTVlZjUzNTpnV05US05EV1pqRDBUZGxCNUNDS2NDeGVOSmRPRmFTRmhkSUM5ZG8zTHBJIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2hpcHgiLCJzZXNzaW9uX3N0YXRlIjoiNGYxMDBmNjQtN2U3OC00Y2JjLWIwYzMtM2NhMzg3Zjk0OGYxIiwic2NvcGUiOiJvcGVuaWQgYXBpOmFwaXBvaW50cyIsInNpZCI6IjRmMTAwZjY0LTdlNzgtNGNiYy1iMGMzLTNjYTM4N2Y5NDhmMSIsImFsbG93ZWRfcmVmZXJyZXJzIjoiaXZhbmNvbS1zaXRlLW5leHQudmVyY2VsLmFwcCIsInV1aWQiOiIyNjIzMDA4OS1mMmY0LTQyMWUtYTYwNy00YmFkMmM0OTc2YjIifQ.NfOP9nKi30tsKLmVMHUVm73k3eaQkF8xyGGaCXOscC_Sq-sJk7GO0xbeojHLASt547aPW_A0JeSUz0YrnGL185DGDhdktjHFmHx9HdUi-xSA5B7QGA4BRpDlV4AtioYzk2KJBUsN7z1Dc5TbyshQnxNyxQwrvYk2rVYf24LKu23gmBVUl4NBuupmCE50N6aW20MbVaHCJyWvIfOACsyOpn0_qw1NOGZrcrHFV7kYvpcFJX4kB4Q6t9usu-1MXAf26Ajlu2N287bNV1KxYcxJd3SOfDdvvM4BZZP-rVqQqeLwf7F_J7Ln4vh0sJErODFThUzsPSX6V66ddwRaoFlDXA";

const InPostGeoWidget: React.FC<InPostGeoWidgetProps> = ({ paczkomat, setPaczkomat }) => {
  useEffect(() => {
    // Додаємо стилі та скрипт до HTML-документу, якщо вони ще не підключені
    if (!document.querySelector("link[href='https://geowidget.inpost.pl/inpost-geowidget.css']")) {
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = 'https://geowidget.inpost.pl/inpost-geowidget.css';
      document.head.appendChild(styleLink);
    }

    if (!document.querySelector("script[src='https://geowidget.inpost.pl/inpost-geowidget.js']")) {
      const script = document.createElement('script');
      script.src = 'https://geowidget.inpost.pl/inpost-geowidget.js';
      script.defer = true;
      document.body.appendChild(script);
    }

    // Додаємо слухача події для вибору пункту
    const handlePointSelect = (event: any) => {
      const point = event.detail;
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

export default InPostGeoWidget;
