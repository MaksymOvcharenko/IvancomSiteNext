
import Image from 'next/image'
import React from 'react'
import styles from "./HeroInpost.module.css"

import { useTranslations } from 'next-intl'

import ButtonFormOnPage from '@/components/ButtonFormOnPage/ButtonFormOnPage'
const HeroInpost = () => {
      const  t  = useTranslations("inpost");
  
    return (
        <>
            <section className={styles.container}>
                
                <div className={styles.section}>
    
    
                    
    
                    <div className={styles.secondCont}>
                         <h2 className={styles.title}>{t("titleHero")}</h2>
                        <div className={styles.buttons}>
    
                            
                            <ButtonFormOnPage>{t("btnForm")}</ButtonFormOnPage>
                        </div>
                    </div>
                    <Image src="/image/inpost/inpostHero.jpg" alt={t("courierAlt")} width={600} height={400} />
                    </div>
            </section>
        </>
    )
}

export default HeroInpost
