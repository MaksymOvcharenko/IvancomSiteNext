

import { useTranslations } from "next-intl";
import styles from "./CourierCities.module.css";
import { BsTelephone } from "react-icons/bs";
import { TbCoins } from "react-icons/tb";
import { SiViber } from "react-icons/si";
import { PiTelegramLogoLight } from "react-icons/pi";
const courierCities = [
  {
    city: "Krakow",
    price: "від 40 zł",
    phone: "+48 570 371 048",
    viber: "viber://chat?number=%2B48570371048",
    telegram: "http://t.me/+48570371048",
  },
  {
    city: "Wroclaw",
    price: "від 30 zł",
    phone: "+48 730 567 890",
    viber: "viber://chat?number=%2B48730567890",
    telegram: "http://t.me/+48730567890",
  },
  {
    city: "Warszawa",
    price: "від 30 zł",
    phone: "+48 692 736 603",
    viber: "viber://chat?number=%2B48692736603",
    telegram: "http://t.me/+48692736603",
  },
  {
    city: "Katowice",
    price: "від 30 zł",
    phone: "+48 576 248 744",
    viber: "viber://chat?number=%2B48576248744",
    telegram: "http://t.me/+48576248744",
  },
  {
    city: "Kielce",
    price: "free",
    phone: "+48 576 248 744",
    viber: "viber://chat?number=%2B48730036262",
    telegram: "https://t.me/+48730036262",
  },
];

const CourierLocations = () => {
  const  t  = useTranslations("courier");

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t("title")}</h2>
      <ul className={styles.list}>
        {courierCities.map(({ city, price, phone, viber, telegram }) => (
          <li key={city} className={styles.cityCard}>
            <h3 className={styles.city}>{city}</h3>
                <div className={styles.price}>
                    <p>{t("deliveryAndPickup")} </p>
                    <p className={styles.iconsCont}><TbCoins size={24}/>{price}</p>
                </div>
            <div className={styles.contacts}>
                <p><a href={`tel:${phone}`} className={styles.iconsCont}><BsTelephone size={24}/>{phone}</a></p>
                
                  <a href={viber} target="_blank" rel="noopener noreferrer" className={styles.iconsCont}><SiViber size={24} />Viber</a> 
                  <a href={telegram} target="_blank" rel="noopener noreferrer" className={styles.iconsCont}><PiTelegramLogoLight  size={24}/>Telegram</a>
                
            </div>
          </li>
        ))}
              <p className={styles.description}>{t("description")}</p>
      </ul>
      
    </section>
  );
};

export default CourierLocations;
