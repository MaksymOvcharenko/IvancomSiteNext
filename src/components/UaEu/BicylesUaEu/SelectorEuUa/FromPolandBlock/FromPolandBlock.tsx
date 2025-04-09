
import s from './FromPolandBlock.module.css';
import { useParams } from 'next/navigation';

import Link from 'next/link';
import ButtonFormOnPage from '@/components/ButtonFormOnPage2/ButtonFormOnPage';
import CalculateButton from '@/components/CalculateButton2/CalculateButton';

import PackItButton from '@/components/PackIt/PackItButton/PackItButton';

import { useTranslations } from 'next-intl';
import DeliveryTable from '@/components/DeliveryTable/DeliveryTable';


const FromPolandBlock = () => {
    const { locale } = useParams();
  const t = useTranslations('SelectorEuUABicycles.Pl');
   const table = useTranslations('SelectorEuUABicycles');
    const deliveryWithNotes = {
    title: table('table.title'),
    rows: [
      { weight: table('table.rows.0.weight'), price: table('table.rows.0.price') },
      { weight: table('table.rows.1.weight'), price: table('table.rows.1.price') },
      { weight: table('table.rows.2.weight'), price: table('table.rows.2.price') },
      { weight: table('table.rows.3.weight'), price: table('table.rows.3.price') },
      { weight: table('table.rows.4.weight'), price: table('table.rows.4.price') },
       
    ]
  };

  return (
    <div className={s.block}>
          <div className={s.cont}>
            <ul className={s.list}>
                <li className={s.item}>
                    <div className={s.step}>1</div>
                    <div className={s.textCont}>
                        <p className={s.title}>{t('step1.title')}</p>
                        <p className={s.descr}>{t('step1.desc')}</p>
                    
                      </div>
                </li>
                <li className={s.item}>
                    <div className={s.step}>2</div>
                    <div className={s.textCont}>
              <p className={s.title}>{t('step2.title')}</p>
              <p className={s.descr}>{t('step2.desc')}</p>
                <p className={s.descr}>{t('step2.desc1')}</p>
              <div className={s.faq}>
                
                        </div>
                    </div>
                </li>
                <li className={s.item}>
                    <div className={s.step}>3</div>
                    <div className={s.textCont}>
                        <p className={s.title}>{t('step3.title')}</p>
                        <p className={s.descr}>{t('step3.desc')}</p>
                    </div>
                </li>
              </ul>
              
                 <div className={s.btnCont}>
                      <Link target='blank' href={`/${locale}/contacts`} className={s.link}>{t('step2.btn')}</Link>
                      <ButtonFormOnPage defaultForm="world_to_ukraine" >{t('step3.form')}</ButtonFormOnPage>
                 </div>
              
          </div>
          <div className={s.inpostCont}>
            <h2 className={s.inTitle}>{t('noOffice.title')}</h2>
              <p className={s.inDescr}>{t('noOffice.desc')}</p>
                 <DeliveryTable data={deliveryWithNotes} />
              <div className={s.btnCont}>
              <Link  target='blank' href={`/${locale}/courier`} className={s.link}>{t('noOffice.courier')}</Link></div>
          </div>
    </div>
  );
};

export default FromPolandBlock;

