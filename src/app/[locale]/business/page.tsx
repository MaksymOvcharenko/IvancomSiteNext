import PromoHero from "@/components/Promo/PromoHero/PromoHero";
import styles from "./styles.module.css"
import PromoMain from "@/components/Promo/PromoMain/PromoMain";
import PromoSocLinks from "@/components/Promo/PromoSocLinks/PromoSocLinks";
import HeroBussines from "@/components/Bussines/HeroBussines/HeroBussines";

const Bussines = () => {
 

  return <div>
    <section id="hero" className={styles.section}>
      <HeroBussines/>
    </section>
    {/* <section id="main" className={styles.section}>
      <PromoMain/>
    </section>
    <section id="socLink" className={styles.section}>
      <PromoSocLinks/>
    </section> */}
  </div>
};

export default Bussines;
