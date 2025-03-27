
import React from 'react'
import styles from "./InpostMain.module.css"
import { useTranslations } from 'next-intl'
import { PiPackageThin } from 'react-icons/pi'
import { LiaCoinsSolid } from 'react-icons/lia'
import ButtonFormOnPage from '@/components/ButtonFormOnPage/ButtonFormOnPage'
import FaqInpost from '../FaqInpost/FaqInpost'

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
