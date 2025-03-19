// import React, { useState } from "react";
// import { Autocomplete } from "@react-google-maps/api";
// import styles from "./AdressForm.module.css";

// interface AddressFormProps {
//   addressData: {
//     country: string;
//     city: string;
//     region: string;
//     street: string;
//     postalCode: string;
//     houseNumber: string;
//     apartment: string;
//     };
//     countryCode?: string;
//   setAddressData: React.Dispatch<React.SetStateAction<any>>;
// }

// const AddressForm: React.FC<AddressFormProps> = ({ addressData, setAddressData, countryCode }) => {
//   const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

//   const handleLoad = (autocompleteInstance: google.maps.places.Autocomplete) => {
//     setAutocomplete(autocompleteInstance);
//   };

//   const handlePlaceChanged = () => {
//     if (autocomplete) {
//       const place = autocomplete.getPlace();
//       if (place.address_components) {
//         const city = place.address_components.find((comp) => comp.types.includes("locality"))?.long_name || "";
//         const region = place.address_components.find((comp) => comp.types.includes("administrative_area_level_1"))?.long_name || "";
//         const street = place.address_components.find((comp) => comp.types.includes("route"))?.long_name || "";
//         const postalCode = place.address_components.find((comp) => comp.types.includes("postal_code"))?.long_name || "";
//         const houseNumber = place.address_components.find((comp) => comp.types.includes("street_number"))?.long_name || "";

//         setAddressData((prev: any) => ({
//           ...prev,
//           city,
//           region,
//           street,
//           postalCode,
//           houseNumber,
//         }));
//       }
//     }
//     };
    

//   return (
//     <div className={styles.addressForm}>
//       <label>Місто</label>
//       <Autocomplete onLoad={handleLoad} onPlaceChanged={handlePlaceChanged}>
//         <input
//           type="text"
//           value={addressData.city}
//           onChange={(e) => setAddressData((prev: any) => ({ ...prev, city: e.target.value }))}
//           placeholder="Введіть місто..."
//         />
//       </Autocomplete>

//       <label>Вулиця та будинок</label>
//       <input
//         type="text"
//         value={addressData.street}
//         onChange={(e) => setAddressData((prev: any) => ({ ...prev, street: e.target.value }))}
//         placeholder="Вулиця..."
//       />
//       <input
//         type="text"
//         value={addressData.houseNumber}
//         onChange={(e) => setAddressData((prev: any) => ({ ...prev, houseNumber: e.target.value }))}
//         placeholder="Будинок..."
//       />

//       <label>Поштовий індекс</label>
//       <input
//         type="text"
//         value={addressData.postalCode}
//         onChange={(e) => setAddressData((prev: any) => ({ ...prev, postalCode: e.target.value }))}
//         placeholder="Поштовий індекс..."
//       />

//       <label>Апартаменти</label>
//       <input
//         type="text"
//         value={addressData.apartment}
//         onChange={(e) => setAddressData((prev: any) => ({ ...prev, apartment: e.target.value }))}
//         placeholder="Квартира (необов'язково)"
//       />
//     </div>
//   );
// };

// export default AddressForm;
import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import styles from "./AdressForm.module.css";

interface AddressFormProps {
  addressData: {
    country: string;
    city: string;
    region: string;
    street: string;
    postalCode: string;
    houseNumber: string;
    apartment: string;
  };
  countryCode?: string;
 // Приймаємо countryCode як пропс
  setAddressData: React.Dispatch<React.SetStateAction<any>>;
  validate: any;
}

const AddressForm: React.FC<AddressFormProps> = ({ addressData, setAddressData, countryCode,validate }) => {
  const [cityAutocomplete, setCityAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [streetAutocomplete, setStreetAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [city, setCity] = useState("null");
  const handleCityLoad = (autocompleteInstance: google.maps.places.Autocomplete) => {
    setCityAutocomplete(autocompleteInstance);
  };

  const handleStreetLoad = (autocompleteInstance: google.maps.places.Autocomplete) => {
    setStreetAutocomplete(autocompleteInstance);
  };

  const handleCityChange = () => {
    if (cityAutocomplete) {
      const place = cityAutocomplete.getPlace();
      if (place.address_components) {
        const city = place.address_components.find((comp) => comp.types.includes("locality"))?.long_name || "";
        const region = place.address_components.find((comp) => comp.types.includes("administrative_area_level_1"))?.long_name || "";
        setCity(city)
        setAddressData((prev: any) => ({
          ...prev,
          city,
          region,
          street: "",
          houseNumber: "",
          postalCode: ""
        }));
      }
    }
  };

  const handleStreetChange = () => {
    if (streetAutocomplete) {
      const place = streetAutocomplete.getPlace();
      if (place.address_components) {
        const street = place.address_components.find((comp) => comp.types.includes("route"))?.long_name || "";
        const postalCode = place.address_components.find((comp) => comp.types.includes("postal_code"))?.long_name || "";
        const houseNumber = place.address_components.find((comp) => comp.types.includes("street_number"))?.long_name || "";
        const city = place.address_components.find((comp) => comp.types.includes("locality"))?.long_name || "";
        setAddressData((prev: any) => ({
          ...prev,
          city,
          street,
          houseNumber,
          postalCode
        }));
      }
    }
  };

  return (
    <div className={styles.addressForm}>
      {/* Вибір міста */}
      <label>Місто <span className={styles.required}>*</span>
      <Autocomplete
        onLoad={handleCityLoad}
        onPlaceChanged={handleCityChange}
        options={{
          types: ["(cities)"],
          componentRestrictions: countryCode ? { country: countryCode } : undefined,
        }}
      >
          <input
            className={styles.input}
          type="text"
          value={addressData.city}
            onChange={(e) => {
              setAddressData((prev: any) => ({ ...prev, city: e.target.value }))
            }}
          placeholder="Введіть місто..."
        />
      </Autocomplete>
     </label>
      {/* Вибір вулиці та номеру будинку */}
      {addressData.city && (
        <>
          <label>Вулиця <span className={styles.required}>*</span>
          <Autocomplete
            onLoad={handleStreetLoad}
            onPlaceChanged={handleStreetChange}
            options={{
              types: ["address"],
              componentRestrictions: {
      country: countryCode ?? null, // використовуємо null, якщо countryCode undefined
       // те саме для міста
    },
            }}
          >
            <input
              className={styles.input}
              type="text"
              value={addressData.street}
              onChange={(e) => setAddressData((prev: any) => ({ ...prev, street: e.target.value }))}
              placeholder="Введіть вулицю..."
              />
              
            </Autocomplete>
            </label>
          <label>Будинок <span className={styles.required}>*</span>
          <input
            type="text"
             className={styles.input}
            value={addressData.houseNumber}
             onChange={(e) => {
    // Оновлюємо стан
    const newHouseNumber = e.target.value;
    setAddressData((prev:any) => ({ ...prev, houseNumber: newHouseNumber }));

    // Викликаємо валідацію безпосередньо в callback
    validate();  // Викликає валідацію при зміні значення
  }}
            placeholder="Номер будинку..."
            />
            </label>
        </>
      )}

      {/* Поштовий індекс */}
      <label>Поштовий індекс <span className={styles.required}>*</span>
      <input
        type="text"
         className={styles.input}
        value={addressData.postalCode}
        onChange={(e) => setAddressData((prev: any) => ({ ...prev, postalCode: e.target.value }))}
        placeholder="Поштовий індекс..."
      />
      </label>
      {/* Апартаменти */}
      <label>Апартаменти 
      <input
        type="text"
         className={styles.input}
        value={addressData.apartment}
        onChange={(e) => setAddressData((prev: any) => ({ ...prev, apartment: e.target.value }))}
        placeholder="Квартира (необов'язково)"
        />
        </label>
    </div>
  );
};

export default AddressForm;
