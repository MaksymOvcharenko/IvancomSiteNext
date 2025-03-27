import React from 'react'
import styles from "./PromoMain.module.css"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
const PromoMain = () => {
    const t = useTranslations("promo.main")
  return (
      <div>
          <h2 className={styles.title}>{ t("title")}</h2>
          <div className={styles.cont}>
            <Image src="/image/promo/promoCard.jpg" alt={ t("title")} className={styles.image} width={300}  height={201}/>
            <div className={styles.textCont}>
                <div className={styles.textCont1}>
                    <p className={styles.text1}>{ t("desc1")}</p>
                    <p className={styles.text1}>{ t("desc2")}</p>
                 
                  </div>
                     <div className={styles.textCont2}>
                        <p className={styles.text2}>{ t("warnDesc1")}</p>
                        <p className={styles.text2}>{ t("warnDesc2")}</p>
                    </div>
            </div>
          </div>
    </div>
  )
}

export default PromoMain