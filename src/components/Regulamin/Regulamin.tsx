

import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "./Regulamin.module.css"



export const Regulamin = () => {
    const t = useTranslations('Footer');
// Витягуємо мову з URL
  return (
      <div className={styles.body}>
          <ul className={styles.list}>
            <li>
                <p>{t("rights")}</p>
            </li>
            <li>
                <p>{t("nip")}</p>
            </li>
            <li>
                <p>{t("website")}</p>
            </li>
            <li>
                <Link href={"https://drive.google.com/file/d/18-wj-YuNiLMOWq-2JvAe8OKpRvYSlAA9/view"} target="blank">{t("regulation")}</Link>
            </li>
          </ul>
          
    </div>
  )
}
