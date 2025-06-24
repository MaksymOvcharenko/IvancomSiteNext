import CalculateButton from "@/components/CalculateButton2/CalculateButton";
import s from "./Silver.module.css";
import ButtonFormOnPage from "@/components/ButtonFormOnPage2/ButtonFormOnPage";
import DeliveryTable, { DeliveryRow, DeliveryTableData } from "@/components/DeliveryTable/DeliveryTable";

import { useTranslations } from 'next-intl';


const SilverPl = () => {
  const t = useTranslations('UaEu.ParcelsUaEu.Silver.SilverPL');
   const deliveryIvankomPL: DeliveryTableData = {
  title: t('Table.tables.ivankomBranch'),
  country:  t('Table.country.pl'),
    rows: t.raw('Table.tables.rows') as DeliveryRow[] // ✅ ОБОВʼЯЗКОВ
  
};

 const courierIvankomPrices: DeliveryTableData = {
  title: t('Table.tables.courier'),
  country: t('Table.country.pl'),
  rows: t.raw('Table.tables.rows1') as DeliveryRow[] // ✅ ОБОВʼЯЗКОВ
};

 const inpostDeliveryPL: DeliveryTableData = {
  title: t('Table.tables.inpost'),
  country:  t('Table.country.pl'),
  rows: t.raw('Table.tables.rows2') as DeliveryRow[],
  notes:  [t('Table.tables.inpostNote')],
};
  return (
      <div className={s.body}>
          <DeliveryTable data={deliveryIvankomPL}/>
     <p className={s.descr}>{t('courier.description')}</p>
          <DeliveryTable data={courierIvankomPrices}/>
<p className={s.descr}>{t('inpost.notice')}</p>
          <DeliveryTable data={inpostDeliveryPL}/>
      <div className={s.btnCont}>
          <CalculateButton>{t('buttons.calculate')}</CalculateButton>
          <ButtonFormOnPage defaultForm="ukraine">{t('buttons.fillForm')}</ButtonFormOnPage>
      </div>
    </div>
  );
};

export default SilverPl;
