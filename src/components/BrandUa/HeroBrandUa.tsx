


import Image from "next/image"
import s from "./HeroBrandUa.module.css"
import { useTranslations } from "next-intl"
const HeroBrandUa = () => {
  const t = useTranslations("brandua");
  return (
      <div className={s.body}>
      <div className={s.main}>
        
          
          <div className={s.textCont}>
            <h1 className={s.title}>{t("title")}</h1>
            <p className={s.descr}>{t("subtitle")}</p>
        </div>
        <div className={s.imgCont}>
          <Image src={"/image/brandUa/brandua.jpg" } alt="BrandUA" width={ 370} height={272} className={s.img}></Image>
        </div>
      </div>
    </div>
  )
}

export default HeroBrandUa