
import React, { useEffect, useState } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import styles from "./CountryInput.module.css";
import AddressForm from "./AdressForm";
import CityAutocomplete from "./CityInput";
import InPostGeoWidget from "./inpostGeowidget";
import SvgIcon from "@/components/SvgIcon";
import { useDispatch } from "react-redux";
import { setFormData, setPackageData } from "@/store/formUatoWorld";
import InPostGeoWidgetInt from "./inpostGeowidgetInternational";
import { log } from "console";
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
//   const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedSubCity, setSelectedSubCity] = useState<string>("");
  const [deliveryMethod, setDeliveryMethod] = useState<string>("");
  const [inpostMethod, setInpostMethod] = useState<string>("");
  const [paczkomat, setPaczkomat] = useState<string>("");
  const [deliveryTypeInt, setDeliveryTypeInt] = useState<'courier' | 'paczkomat'>('courier');
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
        console.log(country);
        
        const code = countryComponent?.short_name || "";
        setAddressData(() => ({
          country: "",
          city: "",
          region: "",
          street: "",
          postalCode: "",
          houseNumber: "",
          apartment: "",
        }));
        setDeliveryMethod("");
        setIsAddressValid(false);
        setInputValue(country);
        setCountryCode(code);
        setAddressData((prev) => ({ ...prev, country }));
      }
    }
  }; // Викликається, коли змінюється addressData|
  const deliveryCountries = [
  "Belgium",
  "Italy",
  "France",
  "Luxembourg",
  "Portugal",
  "Spain",
  "Netherlands"
];
  const validateAddress = () => {
    const { city, region, street, postalCode, houseNumber } = addressData;
    // Для України і інших країн, окрім Польщі
    if (addressData.country !== "Poland" ) {
      setDeliveryMethod("dhl");
    
      console.log(addressData);
      if (
        city && city.trim().length > 0 &&
        // region && region.trim().length > 0 &&
        street && street.trim().length > 0 &&
        postalCode && postalCode.trim().length > 2 &&
        houseNumber && houseNumber.trim().length > 0 &&
        /^[\p{L}\p{N}\s\-.]+$/u.test(street.trim()) &&  // Допускаем буквы всех языков, цифры, пробелы и тире
        !/^\d+$/.test(street.trim())
      ) {
        setIsAddressValid(true);
      } else {
        setIsAddressValid(false);
      }
    } else {
      
    };
    if (deliveryCountries.includes(addressData.country)) {
      setDeliveryMethod("dhl");
      if (deliveryTypeInt === "paczkomat") {
        if (city &&  street ) {
        setIsAddressValid(true);
    } else {
        setIsAddressValid(false);
    }
      }
       if (deliveryTypeInt === "courier") {
    //     if (city && region && street && postalCode.length > 2 && houseNumber) {
    //     setIsAddressValid(true);
    // } else {
    //     setIsAddressValid(false);
         // }
         if (
          city && city.trim().length > 0 &&
          
          street && street.trim().length > 0 &&
          postalCode && postalCode.trim().length > 2 &&
          houseNumber && houseNumber.trim().length > 0 &&
          /^[\p{L}\p{N}\s\-’'.]+$/u.test(street.trim()) &&  // Допускаем буквы всех языков, цифры, пробелы и тире
          !/^\d+$/.test(street.trim())
        ) {
          setIsAddressValid(true);
        } else {
          setIsAddressValid(false);
        }
      }
    
    };
    
    if (addressData.country === "Poland") {
      if (
        deliveryMethod === "BranchKrakow" ||
        deliveryMethod === "BranchKatowice" ||
        deliveryMethod === "BranchWroclaw" ||
        deliveryMethod === "BranchWarzsawa"
      ) {
        setIsAddressValid(true);
      }
      if (deliveryMethod === "Courier Ivancom") {
        console.log(addressData);
       
        setPaczkomat("");
        console.log(isAddressValid);
        // if (city && region && street && postalCode && houseNumber) {
        //   setIsAddressValid(true);
        // } else {
        //   setIsAddressValid(false);
        // }
        if (
          city && city.trim().length > 0 &&
          region && region.trim().length > 0 &&
          street && street.trim().length > 0 &&
          postalCode && postalCode.trim().length > 2 &&
          houseNumber && houseNumber.trim().length > 0 &&
          /^[\p{L}\p{N}\s\-.]+$/u.test(street.trim()) &&  // Допускаем буквы всех языков, цифры, пробелы и тире
          !/^\d+$/.test(street.trim())
        ) {
          setIsAddressValid(true);
        } else {
          setIsAddressValid(false);
        }
      }
      if (deliveryMethod === "InPost") {
        // if (city && region && street && postalCode && houseNumber) {
        //   setIsAddressValid(true);
        // } else {
     
        console.log   ("setIsAddressValid(false)", isAddressValid);
     
        //   }
       
        if (
          
          city && city.trim().length > 0 &&
          region && region.trim().length > 0 &&
          street && street.trim().length > 0 &&
          postalCode && postalCode.trim().length > 2 &&
          houseNumber && houseNumber.trim().length > 0 &&
          /^[\p{L}\p{N}\s\-.]+$/u.test(street.trim()) &&  // Допускаем буквы всех языков, цифры, пробелы и тире
          !/^\d+$/.test(street.trim())
          
        ) {
          setIsAddressValid(true);
        } else {
          setIsAddressValid(false);
        }
        }
       
      }
       if (inpostMethod === "paczkomat") {
            if (paczkomat) {
            setIsAddressValid(true);
        }
        else {
          setIsAddressValid(false);
          }
        }
  };
  useEffect(() => {
     setIsAddressValid(false);
    validateAddress(); // Викликається після кожної зміни в addressData
  }, [addressData, deliveryMethod,paczkomat, inpostMethod]);

    const dispatch = useDispatch();
    const submit = () => {
        const values = {...addressData,selectedSubCity,paczkomat,deliveryMethod,inpostMethod,deliveryTypeInt}
        dispatch(setPackageData(values));
        nextStep();
    }
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
                      address={addressData}
                      setAddressData={(data: AddressData) => {
                        setAddressData(data);
                        validateAddress();
                      }}
                    />
                  </div>
                </>
              )}
            </>
          )}
        </div>
        {deliveryMethod === "Courier Ivancom" && (
          <>
            <div className={styles.countryCont}>
              <h4 className={styles.formContItemTitle}>Вкажіть адресу</h4>
              <AddressForm
                addressData={addressData}
                validate={validateAddress}
                setAddressData={(data: AddressData) => {
                  setAddressData(data);
                  validateAddress();
                }}
                countryCode={countryCode}
              />
            </div>
          </>
        )}
        {deliveryMethod === "InPost" && (
          <>
            <div className={styles.countryCont}>
              <h4 className={styles.formContItemTitle}>
                Оберіть метод доставки
              </h4>
              <div className={styles.optionsCont}>
                <label className={styles.radioWrapper}>
                  <input
                    type="radio"
                    name="inpostMethod"
                    value="paczkomat"
                    className={styles.radiobtn}
                    checked={inpostMethod === "paczkomat"}
                    onChange={() => {
                      setInpostMethod("paczkomat");
                      setAddressData((prev: any) => ({
                        ...prev,
                        street: "",
                        houseNumber: "",
                        postalCode: ""
                      }));
                    }}
                  />
                  Paczkomat
                </label>
                <label className={styles.radioWrapper}>
                  <input
                    type="radio"
                    name="inpostMethod"
                    value="courier"
                    className={styles.radiobtn}
                    checked={inpostMethod === "courier"}
                    onChange={() => {setInpostMethod("courier"); setPaczkomat(""); console.log("inpostMethod", inpostMethod); console.log("paczkomat", paczkomat);console.log("addressData", addressData); 
                     setAddressData((prev: any) => ({
                        ...prev,
                        street: "",
                        houseNumber: "",
                        postalCode: ""
                      }));
                    }}
                  />
                  Кур&apos;єр
                </label>
              </div>

              {inpostMethod === "courier" && (
                <div>
                  <h4 className={styles.formContItemTitle}>Вкажіть адресу</h4>
                  <AddressForm
                    validate={validateAddress}
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
                <InPostGeoWidget
                  paczkomat={paczkomat}
                  setPaczkomat={setPaczkomat}
                />
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
            {/* {addressData.country !== "Poland" &&
              addressData.country !== "Ukraine" && (
                <div className={styles.countryCont}>
                  <h4 className={styles.formContItemTitle}>
                    Доставка за межі Польщі
                  </h4>
                  <AddressForm
                    validate={validateAddress}
                    addressData={addressData}
                    setAddressData={(data: AddressData) => {
                      setAddressData(data);
                      validateAddress();
                    }}
                    countryCode={countryCode}
                  />
                </div>
              )} */}

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
        {addressData.country && (
          <>
            {
 addressData.country === "Belgium" ||
 addressData.country === "Italy" ||
 addressData.country === "France" ||
 addressData.country === "Luxembourg" ||
 addressData.country === "Portugal" ||
 addressData.country === "Spain" ||
 addressData.country === "Netherlands" ? (
    <div className={styles.countryCont}>
  <h4 className={styles.formContItemTitle}>Оберіть спосіб доставки</h4>

  <div className={styles.optionsCont}>
    <label className={styles.radioWrapper}>
      <input
        type="radio"
        name="deliveryType"
                          value="courier"
                          className={styles.radiobtn}
        checked={deliveryTypeInt === 'courier'}
        onChange={() => setDeliveryTypeInt('courier')}
      />
      Кур`єр
    </label>
    <label className={styles.radioWrapper}>
      <input
        type="radio"
        name="deliveryType"
                          value="paczkomat"
                          className={styles.radiobtn}
        checked={deliveryTypeInt === 'paczkomat'}
        onChange={() => setDeliveryTypeInt('paczkomat')}
      />
      Поштомат
    </label>
  </div>

  {deliveryTypeInt === 'courier' && (
    <AddressForm
      validate={validateAddress}
      addressData={addressData}
      setAddressData={(data: AddressData) => {
        setAddressData(data);
        validateAddress();
      }}
                        countryCode={countryCode}
                        disableCityInput={true}
    />
  )}

  {deliveryTypeInt === 'paczkomat' && (
    <InPostGeoWidgetInt
      paczkomat={paczkomat}
      setPaczkomat={setPaczkomat}
      validate={validateAddress}
      addressData={addressData}
      setAddressData={(data: AddressData) => {
        setAddressData(data);
        validateAddress();
      }}
    />
  )}
</div>
) : addressData.country !== "Poland" && addressData.country !== "Ukraine" && (
    <div className={styles.countryCont}>
      <h4 className={styles.formContItemTitle}>Доставка за межі Польщі</h4>
      <AddressForm
        validate={validateAddress}
        addressData={addressData}
        setAddressData={(data: AddressData) => {
          setAddressData(data);
          validateAddress();
        }}
                      countryCode={countryCode}
                      disableCityInput={true}
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
        {!isAddressValid && (
          <p className={styles.requiredspan}>
            {" "}
            Треба заповнити обов&apos;язкові поля{" "}
            <span className={styles.required}>*</span>{" "}
          </p>
        )}
        <div className={styles.btnCont}>
          <button className={styles.button} onClick={prevStep}>
            Назад
          </button>
          {/* <button
            className={styles.button}
            onClick={() => {
              console.log({ ...addressData, deliveryMethod, selectedSubCity, paczkomat,inpostMethod });
            }}
          >
            Технічна кнопка
          </button> */}
          <button
            className={styles.button}
            onClick={submit}
            disabled={!isAddressValid}
          >
            {isAddressValid ? (
              <>
                Наступний крок <SvgIcon name="sparow" />
              </>
            ) : (
              "Заповніть обов'язкові поля"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryInput;
