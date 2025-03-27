// import React from 'react'
// import styles from "./InpostMain.module.css"
// import { useTranslations } from 'next-intl'
// import { PiPackageThin } from 'react-icons/pi';
// import { LiaCoinsSolid } from 'react-icons/lia';
// const InpostMain = () => {
//     const t = useTranslations("inpost.main");
//   return (
//       <div className={styles.section}>
//           <div className={styles.cont}>
//               <h2 className={styles.title}>Де відправити посилку в Польщі?</h2>
//               <p className={styles.description}>Відправити посилку можна через найближчий поштомат InPost у Польщі. Просто обери зручну локацію, залиш посилку, а ми подбаємо про її доставку в Україну!</p>
//           </div>
//           <div className={styles.cont}>
//                <h2 className={styles.title}>Де отримати посилку в Україні?</h2>
//               <p className={styles.description}>Отримати відправлення в Україні можена:</p>
//               <ul className={styles.list}>
//                 <li className={styles.item}>На відділенні Нової Пошти.</li>
//                 <li className={styles.item}>Кур&apos;єрськоюа доставкою до дверей (+15 зл)</li>
//               </ul>
//           </div>
//           <div className={styles.cont}>
//               <h2 className={styles.title}>Скільки коштує послуга?</h2>
//               <ul className={styles.card}>
//                 <li className={styles.cardItem}>
//                     <h3>Скринька А</h3>
//                       <div className={styles.iconCont}>
//                           <PiPackageThin />
//                           <div className={styles.iconText}>
//                               <p className={styles.iconTextItem}>до 5 кг</p>
//                               <p className={styles.iconTextItem}>8*36*60 см</p>
//                         </div>
                      
//                       </div>
//                         <p className={styles.cardDesc}> <LiaCoinsSolid />50 zł</p>
//                         <p className={styles.cardDes}>Страхування посилки:</p>
//                         <p className={styles.cardDes}>+1% від оголошеної вартості</p>
//                         <button className={styles.cardBtn}>Відправити</button>
//                 </li>
//                 <li className={styles.cardItem}>
//                     <h3>Скринька B</h3>
//                     <div className={styles.iconCont}>
//   <PiPackageThin />
//                           <div className={styles.iconText}>
//                               <p className={styles.iconTextItem}>до 10 кг</p>
//                               <p className={styles.iconTextItem}>19*38*60 см</p>
//                         </div>
                        
//                       </div>
//                       <p className={styles.cardDesc}> <LiaCoinsSolid />80 zł</p>
//                         <p className={styles.cardDes}>Страхування посилки:</p>
//                         <p className={styles.cardDes}>+1% від оголошеної вартості</p>
//                         <button className={styles.cardBtn}>Відправити</button>
//                 </li>
//                 <li className={styles.cardItem}>
//                     <h3>Скринька C</h3>
//                       <div className={styles.iconCont}>
//                             <PiPackageThin />
//                           <div className={styles.iconText}>
//                                <p className={styles.iconTextItem}>до 25 кг</p>
//                               <p className={styles.iconTextItem}>41*38*60 см</p>
//                         </div>
                       
//                       </div>
//                        <p className={styles.cardDesc}> <LiaCoinsSolid />130 zł</p>
//                         <p className={styles.cardDes}>Страхування посилки:</p>
//                         <p className={styles.cardDes}>+1% від оголошеної вартості</p>
//                         <button className={styles.cardBtn}>Відправити</button>
//                 </li>
//               </ul>
//           </div>
//           <div className={styles.cont}>
//               <div className={styles.warnCont}>
//                 <h3 className={styles.warnTitle}>ВАЖЛИВО!</h3>
//                 <p className={styles.warnDescr}>Ці речі заборонені для відправлення через поштомати InPost до України: продукти без заводського пакування, антикваріат, гроші, Ліки без заводського пакування, тютюнові вироби не більш ніж 1 блок, електронні сигарети не більш ніж 2 шт, тютюн не більш ніж 200 гр, балони з газом пропан, товари війсківського призначення, алкоголь (можна до 2 л міцного алкоголю і до 2 л слабоалкогольних напоїв), рослини в горщиках.</p>
//               </div>
//           </div>
//           <div className={styles.cont}>
//             <h3 className={styles.title}>Як відправити посилку?</h3>
//             <p className={styles.description}>Це дуже легко :) Всього декілька простих проків</p>
//             <ul className={styles.instructionList}>
//                 <li className={styles.instItem}>
//                     <div className={styles.iconInstuctions}>1</div>
//                     <div className={styles.textInstructions}>
//                           <h3 className={styles.titleInstructions}>Підготуй посилку до подорожі!</h3>
//                           <p className={styles.descrInstructions}>Обери надійну коробку, захисти крихкі речі та добре її заклей. Ознайомся з нашими порадами, щоб уникнути неприємностей у дорозі!</p>
//                     </div>
//                 </li>
//                 <li className={styles.instItem}>
//                     <div className={styles.iconInstuctions}>2</div>
//                     <div className={styles.textInstructions}>
//                         <h3 className={styles.titleInstructions}><a>Заповни форму</a></h3>
//                     </div>
//                 </li>
//                 <li className={styles.instItem}>
//                     <div className={styles.iconInstuctions}>3</div>
//                     <div className={styles.textInstructions}>
//                         <h3 className={styles.titleInstructions}>Отримай від оператора IVANCOM посилання на оплату та сплати за своє відправлення</h3>
//                     </div>
//                 </li>
//                 <li className={styles.instItem}>
//                     <div className={styles.iconInstuctions}>4</div>
//                     <div className={styles.textInstructions}>
//                         <h3 className={styles.titleInstructions}>За допомогою коду, який тобі надійде на email, вклади свою посилку у найближчий поштомат InPost</h3>
//                     </div>
//                 </li>
//                 <li className={styles.instItem}>
//                     <div className={styles.iconInstuctions}>5</div>
//                     <div className={styles.textInstructions}>
//                         <h3 className={styles.titleInstructions}>Слідкуй за своєю посилкою за допомогою ТТН Нової Пошти, яку тобі надасть оператор IVANCOM</h3>
//                     </div>
//                 </li>
//             </ul>
//           </div>
//     </div>
//   )
// }

// export default InpostMain
"use client"
import React from 'react'
import styles from "./InpostMain.module.css"
import { useTranslations } from 'next-intl'
import { PiPackageThin } from 'react-icons/pi'
import { LiaCoinsSolid } from 'react-icons/lia'
import ButtonFormOnPage from '@/components/ButtonFormOnPage/ButtonFormOnPage'

const InpostMain = () => {
    const t = useTranslations("inpost.main")

    return (
        <div className={styles.section}>
            <div className={styles.cont}>
                <h2 className={styles.title}>{t("sendTitle")}</h2>
                <p className={styles.description}>{t("sendDesc")}</p>
            </div>
            
            <div className={styles.cont}>
                <h2 className={styles.title}>{t("receiveTitle")}</h2>
                <p className={styles.description}>{t("receiveDesc")}</p>
                <ul className={styles.list}>
                    {t.raw("receiveOptions").map((item:any, index:string) => (
                        <li key={index} className={styles.item}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.cont}>
                <h2 className={styles.title}>{t("priceTitle")}</h2>
                <ul className={styles.card}>
                    {["boxA", "boxB", "boxC"].map((boxKey) => {
                        const box = t.raw(boxKey);
                        return (
                            <li key={boxKey} className={styles.cardItem}>
                                <h3 className={styles.title}>{box.title}</h3>
                                <div className={styles.iconCont}>
                                    <PiPackageThin size={46} />
                                    <div className={styles.iconText}>
                                        <p className={styles.iconTextItem}>{box.weight}</p>
                                        <p className={styles.iconTextItem}>{box.size}</p>
                                    </div>
                                </div>
                                <p className={styles.cardDesc}><LiaCoinsSolid  size={24}/>{box.price}</p>
                                <p className={styles.cardDesc}>{t("insurance")}</p>
                                <p className={styles.cardDes}>{t("insuranceNote")}</p>
                                <button className={styles.cardBtn}><ButtonFormOnPage>{t("sendBtn")}</ButtonFormOnPage></button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className={styles.cont}>
                <div className={styles.warnCont}>
                    <h3 className={styles.warnTitle}>{t("warningTitle")}</h3>
                    <p className={styles.warnDescr}>{t("warningDesc")}</p>
                </div>
            </div>

            <div className={styles.cont}>
                <h3 className={styles.title}>{t("stepsTitle")}</h3>
                <p className={styles.description}>{t("stepsDesc")}</p>
                <ul className={styles.instructionList}>
                    {t.raw("steps").map((step:any, index:string) => (
                        <li key={index} className={styles.instItem}>
                            <div className={styles.iconInstuctions}>{index + 1}</div>
                            <div className={styles.textInstructions}>
                                <h3 className={styles.titleInstructions}>{step.title}</h3>
                                {step.desc && <p className={styles.descrInstructions}>{step.desc}</p>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default InpostMain;
