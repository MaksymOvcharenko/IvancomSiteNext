import CalculateButton from "@/components/CalculateButton2/CalculateButton";
import s from "./MedicinesEu.module.css";
import ButtonFormOnPage from "@/components/ButtonFormOnPage2/ButtonFormOnPage";
import DeliveryTable, { DeliveryTableData } from "@/components/DeliveryTable/DeliveryTable";

import { useTranslations } from 'next-intl';


const MedicinesEu = () => {
  const t = useTranslations('UaEu.ParcelsUaEu.Silver.SilverPL');
    const t1 = useTranslations('UaEu.MedicinesUaEu');

 const courierIvankomPrices: DeliveryTableData = {
  title: t1('sendEu'),
  country: "Іспанія, Італія, Бельгія, Франція, Нідерлади, Португалія, Люксембург",
  rows: [
    { weight: "Розмір А (8х38х60)", price: "€8 " },
    { weight: "Розмір B (19х38х60)", price: "€13" },
    { weight: "Розмір C (38х41х60)", price: "€14" },
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
