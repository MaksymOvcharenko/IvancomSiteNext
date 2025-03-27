import { useTranslations } from 'next-intl'
import styles from './HeroBussines.module.css'
import Link from 'next/link'

const HeroBussines = () => {
    const t = useTranslations("bussines.hero")
  return (
      <div className={styles.body}>
          <div className={styles.cont}>
              <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.descr}>{t("description")}</p>
            <Link href={"https://t.me/+48570371048"} className={styles.link}>{t("btn")}</Link>
          </div>
    </div>
  )
}

export default HeroBussines