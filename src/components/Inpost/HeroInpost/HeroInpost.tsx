"use client"
import Image from 'next/image'
import React from 'react'
import styles from "./HeroInpost.module.css"
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import ButtonFormOnPage from '@/components/ButtonFormOnPage/ButtonFormOnPage'
const HeroInpost = () => {
      const  t  = useTranslations("inpost");
     const { locale } = useParams();
    return (
        <>
            <section className={styles.container}>
                
                <div className={styles.section}>
    
    
                    
    
                    <div className={styles.secondCont}>
                         <h2 className={styles.title}>{t("titleHero")}</h2>
                        <div className={styles.buttons}>
    
                            
                            <ButtonFormOnPage>{"Заповнити форму"}</ButtonFormOnPage>
                        </div>
                    </div>
                    <Image src="/image/inpost/inpostHero.jpg" alt={t("courierAlt")} width={600} height={400} />
                    </div>
            </section>
        </>
    )
}

export default HeroInpost
