import CalculateButton from "@/components/CalculateButton2/CalculateButton";
import s from "./MedicinesEu.module.css";
import ButtonFormOnPage from "@/components/ButtonFormOnPage2/ButtonFormOnPage";
import DeliveryTable, { DeliveryTableData } from "@/components/DeliveryTable/DeliveryTable";

import { useTranslations } from 'next-intl';


const MedicinesEu = () => {
  const t = useTranslations('UaEu.ParcelsUaEu.Silver.SilverPL');
   

 const courierIvankomPrices: DeliveryTableData = {
  title: t('Table.tables.courier'),
  country: "Іспанія, Італія, Бельгія, Франція, Нідерлади, Португалія, Люксембург",
  rows: [
    { weight: "Розмір А (8х38х60)", price: "€7 " },
    { weight: "Розмір B (19х38х60)", price: "€12" },
    { weight: "Розмір C (38х41х60)", price: "€13" },
    { weight: "Термін доставки*", price: "5 днів" },
  
   ],
  notes:  ["* Термін доставки рахучи з дня рейсу з України"],
};

 const inpostDeliveryPL: DeliveryTableData = {
  title: t('Table.tables.inpost'),
  country:  t('Table.country.pl'),
  rows: [
    { weight: "За кожне відправення", price: "доплата 20 zł" },
   
  ],
  notes:  [t('Table.tables.inpostNote')],
};
  return (
      <div className={s.body}>
      
     
          <DeliveryTable data={courierIvankomPrices}/>

          {/* <DeliveryTable data={inpostDeliveryPL}/> */}

    </div>
  );
};

export default MedicinesEu;
