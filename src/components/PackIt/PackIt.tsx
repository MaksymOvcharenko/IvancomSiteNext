// import { IconContext } from 'react-icons';
// import s from './PackIt.module.css'
// import { IoMdClose } from 'react-icons/io';
// import { useTranslations } from 'next-intl';

// interface PackIt {
//   onClose: () => void;
 
// }


// const PackIt: React.FC<PackIt> = ({ onClose }) => {
// const  t  = useTranslations("PackIt");
//   return (
//       <div className={s.body}>
//           <button  onClick={onClose}>
//                   <IconContext.Provider value={{ color: "#black", size: "36px" }}>
//                     <div className={s.closeBtnTop}>
//                       <IoMdClose />
//                     </div>
//                   </IconContext.Provider>
//                 </button>
//           <h2 className={s.title}>Запакуй сам та не плати за повітря!</h2>
//           <div className={s.cont}>
//             <ul className={s.list}>
//                 <li className={s.item}>
//                     <div className={s.step}>1</div>
//                     <p className={s.text}>Вибери міцну коробку відповідного розміру</p>
//                 </li>
//                 <li className={s.item}>
//                     <div className={s.step}>2</div>
//                     <p className={s.text}>Огорни кожен крихкий предмет окремо</p>
//                 </li>
//                 <li className={s.item}>
//                     <div className={s.step}>3</div>
//                     <p className={s.text}>Заповни порожнини між предметами</p>
//                 </li>
//                 <li className={s.item}>
//                     <div className={s.step}>4</div>
//                     <p className={s.text}>Заклей коробку скотчем</p>
//                 </li>
//                 <li className={s.item}>
//                     <div className={s.step}>5</div>
//                       <div>
//                           <p className={s.text}>Заміряй 3 сторони коробки та зваж її</p>
//                           <p className={s.descr}>(це потрібно для розрахунку орієнтовної вартості)</p>
//                       </div>
//                 </li>
//                 <li className={s.item}>
//                     <div className={s.step}>6</div>
//                     <p className={s.text}>Прочитай як це відправити:)</p>
//                 </li>
//               </ul>
//                 <div className={s.videoCont}>
//   <iframe
//     className={s.video}
//     src="https://www.youtube.com/embed/l3lQ6krm6Fk"
//     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//     allowFullScreen
//   ></iframe>
// </div>
//           </div>
          

//   <button className={s.closeBtn} onClick={onClose}>Зрозуміло</button>
//     </div>
//   )
// }

// export default PackIt
import { IconContext } from 'react-icons';
import s from './PackIt.module.css'
import { IoMdClose } from 'react-icons/io';
import { useTranslations } from 'next-intl';

interface PackIt {
  onClose: () => void;
}

const PackIt: React.FC<PackIt> = ({ onClose }) => {
  const t = useTranslations("PackIt");

  return (
    <div className={s.body}>
      <button onClick={onClose}>
        <IconContext.Provider value={{ color: "#black", size: "36px" }}>
          <div className={s.closeBtnTop}>
            <IoMdClose />
          </div>
        </IconContext.Provider>
      </button>
      <h2 className={s.title}>{t("title")}</h2>
      <div className={s.cont}>
        <ul className={s.list}>
          <li className={s.item}>
            <div className={s.step}>1</div>
            <p className={s.text}>{t("step1")}</p>
          </li>
          <li className={s.item}>
            <div className={s.step}>2</div>
            <p className={s.text}>{t("step2")}</p>
          </li>
          <li className={s.item}>
            <div className={s.step}>3</div>
            <p className={s.text}>{t("step3")}</p>
          </li>
          <li className={s.item}>
            <div className={s.step}>4</div>
            <p className={s.text}>{t("step4")}</p>
          </li>
          <li className={s.item}>
            <div className={s.step}>5</div>
            <div>
              <p className={s.text}>{t("step5Main")}</p>
              <p className={s.descr}>{t("step5Desc")}</p>
            </div>
          </li>
          <li className={s.item}>
            <div className={s.step}>6</div>
            <p className={s.text}>{t("step6")}</p>
          </li>
        </ul>
        <div className={s.videoCont}>
          <iframe
            className={s.video}
            src="https://www.youtube.com/embed/l3lQ6krm6Fk"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <button className={s.closeBtn} onClick={onClose}>{t("understood")}</button>
    </div>
  );
};

export default PackIt;
