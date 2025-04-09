import CalculateButton from "@/components/CalculateButton2/CalculateButton";
import s from "./Gold.module.css";
import ButtonFormOnPage from "@/components/ButtonFormOnPage2/ButtonFormOnPage";
import DeliveryTable, { DeliveryTableData } from "@/components/DeliveryTable/DeliveryTable";

import { useTranslations } from 'next-intl';
import DeliveryTableFormatted from "../DeliveryTable/DeliveryTable";


const GoldPl = () => {
  const t = useTranslations('UaEu.ParcelsUaEu.Gold.GoldPL');
   const deliveryIvankomPL: DeliveryTableData = {
  title: t('Table.tables.ivankomBranch'),
  country:  t('Table.country.pl'),
  rows: [
    { weight: "до 2 кг", price: "80 zł" },
    { weight: "2–5 кг", price: "100 zł" },
    { weight: "від 5 кг", price: "Перші 5 кг (включно) - 100 zł, кожен наступний кілограм 10 zł/кг" },
    
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
    { weight: "до 2 кг", price: "100 zł" },
    { weight: "2–5 кг", price: "130 zł" },
    { weight: "від 5 кг", price: "Перші 5 кг (включно) - 130 zł, кожен наступний кілограм 11 zł/кг" },
    
  ],
  notes:  [t('Table.tables.inpostNote')],
};
  return (
      <div className={s.body}>
          <DeliveryTableFormatted data={deliveryIvankomPL}/>
     <p className={s.descr}>{t('courier.description')}</p>
          <DeliveryTable data={courierIvankomPrices}/>
<p className={s.descr}>{t('inpost.notice')}</p>
          <DeliveryTableFormatted data={inpostDeliveryPL}/>
      <div className={s.btnCont}>
          <CalculateButton>{t('buttons.calculate')}</CalculateButton>
          <ButtonFormOnPage defaultForm="ukraine">{t('buttons.fillForm')}</ButtonFormOnPage>
      </div>
    </div>
  );
};

export default GoldPl;
