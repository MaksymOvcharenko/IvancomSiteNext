import CalculateButton from "@/components/CalculateButton2/CalculateButton";
import s from "./MedicinesPl.module.css";
import ButtonFormOnPage from "@/components/ButtonFormOnPage2/ButtonFormOnPage";
import DeliveryTable, { DeliveryTableData } from "@/components/DeliveryTable/DeliveryTable";

import { useTranslations } from 'next-intl';


const MedicinesPl = () => {
  const t = useTranslations('UaEu.ParcelsUaEu.Silver.SilverPL');
   const deliveryIvankomPL: DeliveryTableData = {
  title: t('Table.tables.ivankomBranch'),
  country:  t('Table.country.pl'),
  rows: [
    { weight: "до 2 кг", price: "40 zł" },
    { weight: "2–5 кг", price: "60 zł" },
    { weight: "5–10 кг", price: "80 zł" },
    { weight: "10–15 кг", price: "100 zł" },
    { weight: "15–20 кг", price: "120 zł" },
    { weight: "20–30 кг", price: "150 zł" },
    { weight: "понад 30 кг", price: "5 zł / кг" },
  ],
  
};

 const courierIvankomPrices: DeliveryTableData = {
  title: t('Table.tables.courier'),
  country: t('Table.country.pl'),
  rows: [
    { weight: "Краків", price: "від 40 zł" },
    { weight: "Варшава", price: "від 30 zł" },
    { weight: "Катовіце", price: "від 30 zł" },
    { weight: "Вроцлав", price: "від 30 zł" },
    { weight: "Кельце", price: "у місті безкоштовно" },
  ],
};

 const inpostDeliveryPL: DeliveryTableData = {
  title: t('Table.tables.inpost'),
  country:  t('Table.country.pl'),
  rows: [
    { weight: "За кожне відправлення", price: "доплата 20 zł" },
   
  ],
  notes:  [t('Table.tables.inpostNote')],
};
  return (
      <div className={s.body}>
      
     <p className={s.descr}>{t('courier.description')}</p>
          <DeliveryTable data={courierIvankomPrices}/>

          <DeliveryTable data={inpostDeliveryPL}/>

    </div>
  );
};

export default MedicinesPl;
