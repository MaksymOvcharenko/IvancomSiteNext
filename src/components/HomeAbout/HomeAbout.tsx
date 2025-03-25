"use client"
import Image from 'next/image'
import React from 'react'
import styles from "./HomeAbout.module.css"
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
const HomeAbout = () => {
      const  t  = useTranslations("IndexPage.about");
     const { locale } = useParams();
    return (
        <>
            <section className={styles.container}>
                <h2 className={styles.title}>{t("careTrustTitle")}</h2>
                <div className={styles.section}>
    
    
                    <Image src="/image/home/about.jpg" alt={t("courierAlt")} width={600} height={400} />
    
                    <div className={styles.secondCont}>
                        <p>{t("careTrustPart1")}</p>
                        <p>{t("careTrustPart2")}</p>
                        <div className={styles.buttons}>
    
                            
                            <Link className={styles.button1} href={`/${locale}/about`} >{t("learnMore")}</Link>
                        </div>
                    </div>
                    </div>
            </section>
        </>
    )
}

export default HomeAbout
