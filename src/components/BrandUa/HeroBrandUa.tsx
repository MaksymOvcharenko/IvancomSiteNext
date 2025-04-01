


import Image from "next/image"
import s from "./HeroBrandUa.module.css"
const HeroBrandUa = () => {
  return (
      <div className={s.body}>
      <div className={s.main}>
        
          
          <div className={s.textCont}>
            <h1 className={s.title}>BrandUA – українська якість без кордонів!</h1>
            <p className={s.descr}>Ми відкриваємо нові можливості для твоїх покупок!</p>
        </div>
        <div className={s.imgCont}>
          <Image src={"/image/brandUa/brandua.jpg" } alt="BrandUA" width={ 370} height={272} className={s.img}></Image>
        </div>
      </div>
    </div>
  )
}

export default HeroBrandUa