import Image from 'next/image'
import styles from './PromoSocLinks.module.css'
import { useTranslations } from 'next-intl'
import { SocLink } from '@/components/SocLink/SocLink'

const PromoSocLinks = () => {
    const t = useTranslations("promo.soclink")
  return (
      <div className={styles.body}><Image src={"/image/promo/promoSoc.jpg"} alt='' className={styles.image} width={352} height={352}></Image>
      <div className={styles.cont}>
              <h2 className={styles.title}>{t("title")}</h2>
        <div className={styles.socCont}>
                  <p className={styles.descr}>{t("description")}</p>
                  <SocLink/>
        </div>
      </div>
      </div>
  )
}

export default PromoSocLinks