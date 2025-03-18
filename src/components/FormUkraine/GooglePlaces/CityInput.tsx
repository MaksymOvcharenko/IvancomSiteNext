import React, { useState, useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";
import styles from './CityInput.module.css';

interface SubCity {
  deliveryOptions: string[];
}

interface City {
  deliveryOptions: string[];
  subCities: Record<string, SubCity>;
}

type LinkedCities = {
  [key in keyof typeof linkedCitiesData]: City;
};
interface CityAutoComplete {
 delivery: React.Dispatch<React.SetStateAction<any>>;
    subcity: React.Dispatch<React.SetStateAction<any>>;
    setAddressData: React.Dispatch<React.SetStateAction<any>>
}
export const linkedCitiesData = {
  Kraków: {
    deliveryOptions: ["BranchKrakow",  "Courier Ivancom","InPost",],
    subCities: {
      Skawina: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Krzeszowice: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Zabierzów: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Liszki: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Zielonki: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Słomniki: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Kocmyrzów_Luborzyca: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Czernichów: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Mogilany: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Jerzmanowice_Przeginia: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Skała: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Wielka_Wieś: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Świątniki_Górne: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Iwanowice: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Igołomia_Wawrzeńczyce: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Michałowice: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Sułoszowa: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      }
    }
  },
  Wrocław: {
    deliveryOptions: ["BranchWrocław",  "Courier Ivancom","InPost",],
    subCities: {
      Oława: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Ostrowiec_Świętokrzyski: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Oleśnica: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Skarżysko_Kamienna: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Trzebnica: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Starachowice: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Brzeg: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Radom: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Kąty_Wrocławskie: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Kielczów: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Dobrzykowice: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Gajków: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Wilkszyn: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Kępice: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Wróblowice: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Krzeptów: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Smolec: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Domasław: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      }
    }
  },
  Warszawa: {
    deliveryOptions: ["BranchWarszawa",  "Courier Ivancom","InPost",],
    subCities: {
      Pruszków: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Ożarów_Mazowiecki: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Piaseczno: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Łomianki: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Ząbki: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Legionowo: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Wołomin: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Marki: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Konstancin_Jeziorna: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Milanówek: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Grodzisk_Mazowiecki: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Nowy_Dwór_Mazowiecki: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Mińsk_Mazowiecki: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      }
    }
  },
  Katowice: {
    deliveryOptions: ["BranchKatowice",  "Courier Ivancom","InPost"],
    subCities: {
      Chorzów: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Mysłowice: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Sosnowiec: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Bytom: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Ruda_Śląska: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Zabrze: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Mikołów: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Tychy: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Jaworzno: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Dąbrowa_Górnicza: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Piekary_Śląskie: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Gliwice: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      }
    }
  },
  Kielce: {
    deliveryOptions: ["Courier Ivancom", "InPost"],
    subCities: {
      Ostrowiec_Świętokrzyski: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Skarżysko_Kamienna: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Starachowice: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      },
      Radom: {
        deliveryOptions: ["Courier Ivancom", "InPost"]
      }
    }
  }
};

const linkedCities: LinkedCities = linkedCitiesData;

const CityAutocomplete: React.FC<CityAutoComplete> = ({subcity , delivery, setAddressData}) => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [deliveryOptions, setDeliveryOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState<string | null>(null); // Стан для вибору доставки
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const handleLoad = (autocomplete: google.maps.places.Autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const handlePlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      const cityName: any = place.name;
        setSelectedCity(cityName);
        setAddressData((prev: any) => ({ ...prev, city: cityName }))
      setInputValue(cityName || "");  // Заповнюємо input значенням вибраного міста

      const city = linkedCities[cityName as keyof typeof linkedCities];

      if (city) {
        // Якщо місто знайдено, оновлюємо варіанти доставки
          console.log(`Вибрано місто: ${cityName}`);
          
        setDeliveryOptions(city.deliveryOptions);
      } else {
        // Перевіряємо, чи є підміст з опціями доставки
        let found = false;
        for (let key in linkedCities) {
          const subCity = linkedCities[key as keyof typeof linkedCities].subCities[cityName];
          if (subCity) {
              console.log(`Вибрано підмісто: ${cityName}, підпорядковується місту: ${key}`);
              subcity(key);
            setDeliveryOptions(subCity.deliveryOptions);
            found = true;
            break;
          }
        }

        // Якщо підмістів або міста не знайдено, очищуємо варіанти доставки
        if (!found) {
          setDeliveryOptions([]);
        }
      }
    }
  };

  const handleDeliveryOptionChange = (option: string) => {
      setSelectedDeliveryOption(option);  // Оновлюємо стан вибраної опції доставки
      delivery(option);
    console.log(`Вибрано опцію доставки: ${option}`);
  };

  const deliveryOptionLabels: { [key: string]: string } = {
    "Branch": "Відділення Іванком",
    "Courier Ivancom": "Адресна доставка кур'єром Ivancom",
    "InPost": "Доставка кур'єром Inpost або поштомат Inpost",
    "BranchKrakow": "Відділення Ivancom Kraków Jana Pawła II 154, 31-982",
    "BranchWarzsawa": "Відділення Ivancom Warszawa Skierniewicka 21/7, 01-230 (станція метро Plocka)",
    "BranchWroclaw": " Відділення Ivancom  Wrocław al. Armii Krajowej 4A/1 Centrum AB Wrocław, Polska",
    "BranchKatowice": "Відділення Ivancom Katowice Jana III Sobieskiego 11/1, 40-082",
  };
  const defaultOption = "Доставка кур'єром Inpost або поштомат Inpost";

  return (
    <div>
      <Autocomplete
        onLoad={handleLoad}
        onPlaceChanged={handlePlaceChanged}
        options={{
          types: ["(cities)"],
          componentRestrictions: { country: "PL" },
        }}
      >
        <input
          className={styles.input}
          type="text"
          value={inputValue}  // Встановлюємо значення input
          onChange={(e) => { setInputValue(e.target.value); }} // Зміна значення input
          placeholder="Введіть місто..."
        />
      </Autocomplete>

          <div className={styles.optionsCont}>
              {selectedCity && <h4 className={styles.formContItemTitle}>
                  Оберіть спосіб доставки
              </h4>}
        {selectedCity && (deliveryOptions.length === 0 || !deliveryOptions) ? (
          <div className={styles.radioWrapper}>
            <input
              className={styles.radiobtn}
              type="radio"
              id={defaultOption}
              name="deliveryOption"
              value={defaultOption}
              checked={selectedDeliveryOption === defaultOption}  // Перевіряємо, чи вибрана ця опція
              onChange={() => handleDeliveryOptionChange(defaultOption)}  // Обробка зміни вибору
            />
            <label htmlFor={defaultOption}>Доставка по Польщі InPost</label>
          </div>
        ) : selectedCity ? (
          deliveryOptions.map((option, index) => (
            <div key={index} className={styles.radioWrapper}>
              <input
                type="radio"
                id={option}
                name="deliveryOption"
                value={option}
                className={styles.radiobtn}
                checked={selectedDeliveryOption === option}
                onChange={() => handleDeliveryOptionChange(option)}
              />
              <label htmlFor={option}>{deliveryOptionLabels[option] || option}</label>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default CityAutocomplete;
