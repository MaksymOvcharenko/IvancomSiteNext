
// import s from './FromEuBlock.module.css';
// import { useParams } from 'next/navigation';

// import Link from 'next/link';
// import ButtonFormOnPage from '@/components/ButtonFormOnPage2/ButtonFormOnPage';
// import CalculateButton from '@/components/CalculateButton2/CalculateButton';

// import PackItButton from '@/components/PackIt/PackItButton/PackItButton';

// import { useTranslations } from 'next-intl';
// import { FiMapPin } from 'react-icons/fi';
// import { IoIosContact } from 'react-icons/io';
// import { BsTelephone } from 'react-icons/bs';
// import { IoMailOutline } from "react-icons/io5";

// const FromEuBlock = () => {
//     const { locale } = useParams();
//      const t = useTranslations('SelectorEuUA.Pl');
//   return (
//     <div className={s.block}>
//       <div className={s.cont}>
//         <p className={s.descrTitle}>Обирай зручну службу доставки (FedEx, DHL, DPD тощо) та надсилай посилку просто на наш центральний склад у Польщі - ми подбаємо про решту.</p>
//             <ul className={s.list}>
//                 <li className={s.item}>
//                     <div className={s.step}>1</div>
//                     <div className={s.textCont}>
//                         <p className={s.title}>{t('step1.title')}</p>
//                         <p className={s.descr}>{t('step1.desc')}</p>
//                     <div className={s.faq}><PackItButton>{t('step1.btn')}</PackItButton></div>
//                       </div>
//                 </li>
//                 <li className={s.item}>
//                     <div className={s.step}>2</div>
//                     <div className={s.textCont}>
//                         <p className={s.title}>Відправляй на наш центральний склад у Кракові</p>
//                         <div className={s.contcatsInfo}>
//                           <p className={s.contactTitle}>Будь-якою кур`єрською службою cюди:</p>
//                           <ul className={s.contactList}>
//                             <li className={s.contactItem}><FiMapPin  size={20}/>al. Jana Pawła II 154, 31-982 Kraków, Polska </li>
//                             <li className={s.contactItem}><IoIosContact size={20}/> Ivan Kysil IVANCOM</li>
//                             <li className={s.contactItem}><BsTelephone size={20}/> +48 570 371 048</li>
//                             <li className={s.contactItem}><IoMailOutline size={20}/> ivancom.krakow@gmail.com</li>
//                           </ul>
//                         </div>
//                     </div>
//                 </li>
//                 <li className={s.item}>
//                     <div className={s.step}>3</div>
//                     <div className={s.textCont}>
//                         <p className={s.title}>Заповни форму</p>
//                          <div className={s.btnCont}>
                 
//                       <ButtonFormOnPage>{t('step3.form')}</ButtonFormOnPage>
//                  </div>
//                     </div>
//           </li>
//              <li className={s.item}>
//                     <div className={s.step}>4</div>
//                     <div className={s.textCont}>
//                         <p className={s.title}>Сплати відправку в Україну</p>
//                         <p className={s.descr}>Коли посилка буде оформлена на центральному складі, ти отримаєш рахунок для сплати відправлення.</p>
                    
//                       </div>
//                 </li>
//               </ul>
              
                
//           </div>
          
//     </div>
//   );
// };

// export default FromEuBlock;

import s from './FromEuBlock.module.css';
import { useParams } from 'next/navigation';

import Link from 'next/link';
import ButtonFormOnPage from '@/components/ButtonFormOnPage2/ButtonFormOnPage';
import CalculateButton from '@/components/CalculateButton2/CalculateButton';
import PackItButton from '@/components/PackIt/PackItButton/PackItButton';

import { useTranslations } from 'next-intl';
import { FiMapPin } from 'react-icons/fi';
import { IoIosContact } from 'react-icons/io';
import { BsTelephone } from 'react-icons/bs';
import { IoMailOutline } from "react-icons/io5";

const FromEuBlock = () => {
  const { locale } = useParams();
  const t = useTranslations('SelectorEuUA.Eu');

  return (
    <div className={s.block}>
      <div className={s.cont}>
        <p className={s.descrTitle}>{t('topText')}</p>

        <ul className={s.list}>
          <li className={s.item}>
            <div className={s.step}>1</div>
            <div className={s.textCont}>
              <p className={s.title}>{t('step1.title')}</p>
              <p className={s.descr}>{t('step1.desc')}</p>
              <div className={s.faq}>
                <PackItButton>{t('step1.btn')}</PackItButton>
              </div>
            </div>
          </li>

          <li className={s.item}>
            <div className={s.step}>2</div>
            <div className={s.textCont}>
              <p className={s.title}>{t('step2.title')}</p>
              <div className={s.contcatsInfo}>
                <p className={s.contactTitle}>{t('step2.desc')}</p>
                <ul className={s.contactList}>
                  <li className={s.contactItem}><FiMapPin size={20} /> al. Jana Pawła II 154, 31-982 Kraków, Polska</li>
                  <li className={s.contactItem}><IoIosContact size={20} /> Ivan Kysil IVANCOM</li>
                  <li className={s.contactItem}><BsTelephone size={20} /> +48 570 371 048</li>
                  <li className={s.contactItem}><IoMailOutline size={20} /> ivancom.krakow@gmail.com</li>
                </ul>
              </div>
            </div>
          </li>

          <li className={s.item}>
            <div className={s.step}>3</div>
            <div className={s.textCont}>
              <p className={s.title}>{t('step3.title')}</p>
              <div className={s.btnCont}>
                <ButtonFormOnPage>{t('step3.form')}</ButtonFormOnPage>
              </div>
            </div>
          </li>

          <li className={s.item}>
            <div className={s.step}>4</div>
            <div className={s.textCont}>
              <p className={s.title}>{t('step4.title')}</p>
              <p className={s.descr}>{t('step4.desc')}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FromEuBlock;
