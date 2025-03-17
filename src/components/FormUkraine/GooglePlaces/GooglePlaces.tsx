import React, { useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import styles from "./styles.module.css";

interface Address {
  streetNumber?: string;
  route?: string;
}

const GooglePlacesAutocomplete = () => {
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');

  const handleLoad = (autoC: google.maps.places.Autocomplete) => {
    setAutocomplete(autoC);
  };

  const handlePlaceChanged = (type: 'country' | 'city' | 'street') => {
    if (autocomplete) {
      const place = autocomplete.getPlace();

      if (type === 'country') {
        const country = place.address_components?.find(component => component.types.includes('country'))?.long_name || '';
        setSelectedCountry(country);
      } else if (type === 'city') {
        const city = place.address_components?.find(component => component.types.includes('locality'))?.long_name || '';
        setSelectedCity(city);
      } else if (type === 'street') {
        const address: Address = {
          streetNumber: '',
          route: '',
        };

        place.address_components?.forEach(component => {
          const types = component.types;
          const value = component.long_name;

          if (types.includes('street_number')) address.streetNumber = value;
          if (types.includes('route')) address.route = value;
        });
      }
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD5CLvd46yy2iIMRzQBhT873NU45WhUvII"
      libraries={["places"]}
    >
      <div className={styles.body}>
        {/* Вибір країни */}
        <Autocomplete onLoad={handleLoad} onPlaceChanged={() => handlePlaceChanged('country')}>
          <input
            type="text"
            placeholder="Введіть країну"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </Autocomplete>

        {/* Вибір міста */}
        <Autocomplete
          onLoad={handleLoad}
          onPlaceChanged={() => handlePlaceChanged('city')}
          options={{
            componentRestrictions: { country: selectedCountry ? selectedCountry.toLowerCase() : null } // Виправлено: замінили undefined на null
          }}
        >
          <input
            type="text"
            placeholder="Введіть місто"
            className="w-full p-2 border border-gray-300 rounded"
            disabled={!selectedCountry}
          />
        </Autocomplete>

        {/* Вибір вулиці */}
        <Autocomplete
          onLoad={handleLoad}
          onPlaceChanged={() => handlePlaceChanged('street')}
        >
          <input
            type="text"
            placeholder="Введіть вулицю"
            className="w-full p-2 border border-gray-300 rounded"
            disabled={!selectedCity}
          />
        </Autocomplete>
      </div>
    </LoadScript>
  );
};

export default GooglePlacesAutocomplete;
