/* eslint-disable react/no-unescaped-entities */
// import React, { useState } from "react";
// import { LoadScript, Autocomplete } from "@react-google-maps/api";

// import styles from "./CountryInput.module.css";
// import AddressForm from "./AdressForm";

// interface AddressData {
//   country: string;
//   city: string;
//   region: string;
//   street: string;
//   postalCode: string;
//   houseNumber: string;
//   apartment: string;
// }

// interface CountryInputProps {
//     nextStep: () => void;
//   prevStep: () => void;  // Функція для переходу до наступного кроку
// }

// const CountryInput: React.FC<CountryInputProps> = ({ nextStep ,prevStep }) => {
//   const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
//   const [inputValue, setInputValue] = useState("");
//   const [addressData, setAddressData] = useState<AddressData>({
//     country: "",
//     city: "",
//     region: "",
//     street: "",
//     postalCode: "",
//       houseNumber: "",
//      apartment: "",
//   });
//   const [countryCode, setCountryCode] = useState<string>("");
//   const [isAddressValid, setIsAddressValid] = useState(false);

//   const handleLoad = (autocompleteInstance: google.maps.places.Autocomplete) => {
//     setAutocomplete(autocompleteInstance);
//   };

//   const handlePlaceChanged = () => {
//     if (autocomplete) {
//       const place = autocomplete.getPlace();
//       if (place.address_components) {
//         const countryComponent = place.address_components.find((comp) => comp.types.includes("country"));
//         const country = countryComponent?.long_name || "";
//         const code = countryComponent?.short_name || "";

//         setInputValue(country);
//         setCountryCode(code);
//         setAddressData((prev) => ({ ...prev, country }));
//       }
//     }
//   };

//   const validateAddress = () => {
//     const { city, region, street, postalCode, houseNumber } = addressData;
//     // Для України і інших країн, окрім Польщі
//     if (addressData.country !== "Poland") {
//       if (city && region && street && postalCode && houseNumber) {
//         setIsAddressValid(true);
//       } else {
//         setIsAddressValid(false);
//       }
//     } else {
//       // Спеціальна валідація для Польщі (можна доповнити за потреби)
//       if (city && region && street && postalCode && houseNumber && addressData.apartment) {
//         setIsAddressValid(true);
//       } else {
//         setIsAddressValid(false);
//       }
//     }
//   };

//   return (
//     <div className={styles.body}>
//       <h4 className={styles.formContTitle}>Крок 1</h4>

//         <div className={styles.countryInput}>
//           <div className={styles.countryCont}>
//             <h4 className={styles.formContItemTitle}>Куди прямує посилка?</h4>
//             <label className={styles.label}>Країна
//               <Autocomplete onLoad={handleLoad} onPlaceChanged={handlePlaceChanged}>
//                 <input
//                   className={styles.input}
//                   type="text"
//                   value={inputValue}
//                   onChange={(e) => setInputValue(e.target.value)}
//                   placeholder="Введіть країну..."
//                 />
//               </Autocomplete>
//             </label>
//           </div>

//           {addressData.country && (
//             <>
//               {addressData.country === "Ukraine" ? (
//                 <div className={styles.countryCont}>
//                   <h4 className={styles.formContItemTitle}>
//                     Данна форма працює для відправлень з України
//                   </h4>
//                 </div>
//               ) : addressData.country !== "Poland" && (
//                 <div className={styles.countryCont}>
//                   <h4 className={styles.formContItemTitle}>
//                     Доставка за межі Польщі
//                   </h4>
//                   <AddressForm
//                     addressData={addressData}
//                     setAddressData={(data: AddressData) => {
//                       setAddressData(data);
//                       validateAddress();
//                     }}
//                     countryCode={countryCode}
//                   />
//                   <button
//                     className={styles.nextStepButton}
//                     onClick={nextStep}
//                     disabled={!isAddressValid}
//                   >
//                     Наступний крок
//                                   </button>
//                                   <button
//                     className={styles.nextStepButton}
//                     onClick={prevStep}

//                   >
//                     Назад
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>

//     </div>
//   );
// };

// export default CountryInput;
import React, { useState } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import styles from "./CountryInput.module.css";
import AddressForm from "./AdressForm";
import CityAutocomplete from "./CityInput";
import InPostGeoWidget from "./inpostGeowidget";
// Новий компонент для вибору міста
// Новий компонент для вибору методу доставки

interface AddressData {
  country: string;
  city: string;
  region: string;
  street: string;
  postalCode: string;
  houseNumber: string;
  apartment: string;
}

interface CountryInputProps {
  nextStep: () => void;
  prevStep: () => void; // Функція для переходу до наступного кроку
}

const CountryInput: React.FC<CountryInputProps> = ({ nextStep, prevStep }) => {
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [addressData, setAddressData] = useState<AddressData>({
    country: "",
    city: "",
    region: "",
    street: "",
    postalCode: "",
    houseNumber: "",
    apartment: "",
  });
  const [countryCode, setCountryCode] = useState<string>("");
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedSubCity, setSelectedSubCity] = useState<string>("");
  const [deliveryMethod, setDeliveryMethod] = useState<string>("");
    const [inpostMethod, setInpostMethod] = useState<string>("");
    const [paczkomat, setPaczkomat]  = useState<string>("");
  const handleLoad = (
    autocompleteInstance: google.maps.places.Autocomplete
  ) => {
    setAutocomplete(autocompleteInstance);
  };

  const handlePlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.address_components) {
        const countryComponent = place.address_components.find((comp) =>
          comp.types.includes("country")
        );
        const country = countryComponent?.long_name || "";
        const code = countryComponent?.short_name || "";

        setInputValue(country);
        setCountryCode(code);
        setAddressData((prev) => ({ ...prev, country }));
      }
    }
  };

  const validateAddress = () => {
    const { city, region, street, postalCode, houseNumber } = addressData;
    // Для України і інших країн, окрім Польщі
    if (addressData.country !== "Poland") {
      setDeliveryMethod("International");
      if (city && region && street && postalCode && houseNumber) {
        setIsAddressValid(true);
      } else {
        setIsAddressValid(false);
      }
    } else {
      // Спеціальна валідація для Польщі
      if (city && region && street && postalCode && houseNumber) {
        setIsAddressValid(true);
      } else {
        setIsAddressValid(false);
      }
    }
  };

  const handleCitySelection = (city: string) => {
    setSelectedCity(city);
    // Тут можна додати логіку для прив'язки методів доставки до міста
  };

  return (
    <div className={styles.body}>
      <h4 className={styles.formContTitle}>Крок 1</h4>

      <div className={styles.countryInput}>
        <div className={styles.countryCont}>
          <h4 className={styles.formContItemTitle}>Куди прямує посилка?</h4>
          <label className={styles.label}>
            Країна
            <Autocomplete
              onLoad={handleLoad}
              onPlaceChanged={handlePlaceChanged}
            >
              <input
                className={styles.input}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Введіть країну..."
              />
            </Autocomplete>
          </label>
          {addressData.country && (
            <>
              {addressData.country === "Poland" && (
                <>
                  <div>
                    <h4 className={styles.label}>Місто</h4>
                    <CityAutocomplete
                      subcity={setSelectedSubCity}
                      delivery={setDeliveryMethod}
                      setAddressData={(data: AddressData) => {
                        setAddressData(data);
                      }}
                    />
                  </div>
                              </>
                              
                          )}
                          
            </>
          )}
        </div>
              {deliveryMethod === "Courier Ivancom" && (<>
                  <div className={styles.countryCont}>
                  <h4 className={styles.formContItemTitle}>
                    Вкажіть адресу
                  </h4><AddressForm
                    addressData={addressData}
                    setAddressData={(data: AddressData) => {
                      setAddressData(data);
                      validateAddress();
                    }}
                    countryCode={countryCode}
                      /></div></>)}
                {deliveryMethod === "InPost" && (
  <>
    <div className={styles.countryCont}>
      <h4 className={styles.formContItemTitle}>Оберіть метод доставки</h4>
      <div>
        <label>
          <input
            type="radio"
            name="inpostMethod"
            value="paczkomat"
            checked={inpostMethod === "paczkomat"}
            onChange={() => setInpostMethod("paczkomat")}
          />
          Paczkomat
        </label>
        <label>
          <input
            type="radio"
            name="inpostMethod"
            value="courier"
            checked={inpostMethod === "courier"}
            onChange={() => setInpostMethod("courier")}
          />
          Кур'єр
        </label>
      </div>
      
      {inpostMethod === "courier" && (
        <div>
          <h4 className={styles.formContItemTitle}>Вкажіть адресу</h4>
          <AddressForm
            addressData={addressData}
            setAddressData={(data: AddressData) => {
              setAddressData(data);
              validateAddress();
            }}
            countryCode={countryCode}
          />
        </div>
                          )}
                          

                          {inpostMethod === "paczkomat" && (
                              <InPostGeoWidget paczkomat={ paczkomat} setPaczkomat={setPaczkomat} />
        // <InPostWidget
        //   paczkomat={paczkomat}
        //   setPaczkomat={setPaczkomat}
        // />
      )}
    </div>
  </>
)}
        {addressData.country && (
          <>
            {addressData.country !== "Poland" &&
              addressData.country !== "Ukraine" && (
                <div className={styles.countryCont}>
                  <h4 className={styles.formContItemTitle}>
                    Доставка за межі Польщі
                  </h4>
                  <AddressForm
                    addressData={addressData}
                    setAddressData={(data: AddressData) => {
                      setAddressData(data);
                      validateAddress();
                    }}
                    countryCode={countryCode}
                  />
                </div>
              )}

            {addressData.country === "Ukraine" && (
              <div className={styles.countryCont}>
                <h4 className={styles.formContItemTitle}>
                  Данна форма доставки з України!
                </h4>
                {/* Інші компоненти для України */}
              </div>
            )}
          </>
        )}

        <button
          className={styles.nextStepButton}
          onClick={nextStep}
          disabled={!isAddressValid}
        >
          Наступний крок
        </button>
        <button
          className={styles.nextStepButton}
          onClick={() => {
            console.log({ ...addressData, deliveryMethod, selectedSubCity });
          }}
        >
          показати
        </button>
        <button className={styles.nextStepButton} onClick={prevStep}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default CountryInput;
