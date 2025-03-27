import React from 'react'
import styles from "./BussinesContacts.module.css"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { CiClock2, CiMail } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { FaViber } from 'react-icons/fa6'
import { PiMapPinLight, PiTelegramLogoLight } from 'react-icons/pi'

const BussinesContacts = () => {
    const t = useTranslations("bussines.contacts")
  return (
      <div className={styles.body}>
          <Image alt="contactCars" src="/image/bussines/carsContacts.jpg" className={styles.img} width={352} height={352}></Image>
          <div className={styles.contactsCont}>
              <h2 className={styles.title}>{ t("title")}</h2>
            
              <ul className={styles.contacts}>
                  <p className={styles.descr}>{ t("description")}</p>
                <li className={styles.contactItem}><CiClock2  size={20} />{ t("grafik")}</li>
               <div className={styles.numberContacts}>
                    <li className={styles.contactItem}><BsTelephone size={20}  /><a href="tel:+48 570 371 048" className={styles.link} target='blank'>+48 570 371 048</a></li>
                    <li className={styles.contactItem}><FaViber  size={20} /><a href="viber://chat?number=%2B48570371048" className={styles.link} target='blank'>Viber</a></li>
                    <li className={styles.contactItem}><PiTelegramLogoLight size={20}  /><a href="http://t.me/+48570371048" className={styles.link} target='blank'>Telegram</a></li>
               </div>
                <li className={styles.contactItem}><CiMail size={20}  /><a href="mailto:ivancom.krakow@gmail.com" className={styles.link} target='blank'>ivancom.krakow@gmail.com</a></li>
                <li className={styles.contactItem}><PiMapPinLight size={24} /><a href="https://maps.app.goo.gl/ykvjW89CuR5ouPYC7" className={styles.link} target='blank'>Jana Pawła II 154, 31-982 Kraków, Polska</a></li>
            </ul>
          </div>
    </div>
  )
}

export default BussinesContacts