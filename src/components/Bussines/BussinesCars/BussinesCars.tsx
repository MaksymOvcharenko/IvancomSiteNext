import Image from 'next/image'
import styles from './BussinesCars.module.css'
import { useTranslations } from 'next-intl'
import { FiTruck } from "react-icons/fi";
import { LucidePackage2 } from 'lucide-react';
import { TbWeight } from 'react-icons/tb';
const BussinesCars = () => {
    const t = useTranslations("bussines.cars")
  return (
      <div className={styles.body}>
          <h2 className={styles.title}>{ t("title")}</h2>
          <ul className={styles.cars}>
            <li className={styles.carsCard}>
                <Image alt='cars' src={"/image/bussines/renault.jpg"} width={352} height={264} className={styles.img}></Image>
                <h3 className={styles.carsTitle}>Renault Master Extra Long</h3>
                <ul className={styles.carsDesc}>
                    <li className={styles.carsItemDesc}>
                       <FiTruck size={24} /> <p className={styles.descr}>3,7 м * 1,7 м *  2,0 м</p>
                    </li>
                    <li className={styles.carsItemDesc}>
                        <LucidePackage2 size={24} /><p className={styles.descr}>13 м3</p>
                    </li>
                    <li className={styles.carsItemDesc}>
                        <TbWeight size={24}  /><p className={styles.descr}>1448 кг</p>
                    </li>
                </ul>
            </li>
            <li className={styles.carsCard}>
                <Image alt='cars' src={"/image/bussines/mercedes.jpg"} width={352} height={264} className={styles.img}></Image>
                <h3 className={styles.carsTitle}>Mercedes Sprinter 906 Long</h3>
                <ul className={styles.carsDesc}>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>2,6 м * 1,7 м * 2,0 м</p>
                    </li>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>8.8 м3</p>
                    </li>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>1475 кг</p>
                    </li>
                </ul>
            </li>
            <li className={styles.carsCard}>
                <Image alt='cars' src={"/image/bussines/iveco.jpg"} width={352} height={264} className={styles.img}></Image>
                <h3 className={styles.carsTitle}>Iveco Daily 35S21 Furgon</h3>
                <ul className={styles.carsDesc}>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>3,1 м * 1,74 м * 1,9 м</p>
                    </li>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>10,8 м3</p>
                    </li>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>1305 кг</p>
                    </li>
                </ul>
            </li>
            <li className={styles.carsCard}>
                <Image alt='cars' src={"/image/bussines/pragmatec.jpg"} width={352} height={264} className={styles.img}></Image>
                <h3 className={styles.carsTitle}>Pragmatec</h3>
                <ul className={styles.carsDesc}>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>3,8 м * 1,7 м * 2,0 м</p>
                    </li>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>12,9 м3</p>
                    </li>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>1800 кг</p>
                    </li>
                </ul>
            </li>
            <li className={styles.carsCard}>
                <Image alt='cars' src={"/image/bussines/pragmatec.jpg"} width={352} height={264} className={styles.img}></Image>
                <h3 className={styles.carsTitle}>Pragmatec</h3>
                <ul className={styles.carsDesc}>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>3,8 м * 1,7 м * 2,0 м</p>
                    </li>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>12,9 м3</p>
                    </li>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>2800 кг</p>
                    </li>
                </ul>
            </li>
            <li className={styles.carsCard}>
                <Image alt='cars' src={"/image/bussines/pragmatec1.jpg"} width={352} height={264} className={styles.img}></Image>
                <h3 className={styles.carsTitle}>Pragmatec</h3>
                <ul className={styles.carsDesc}>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>3,5 м * 1,7 м * 1,7 м</p>
                    </li>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>10,1 м3</p>
                    </li>
                    <li className={styles.carsItemDesc}>
                        <p className={styles.descr}>400 кг</p>
                    </li>
                </ul>
            </li>
          </ul>
    </div>
  )
}

export default BussinesCars