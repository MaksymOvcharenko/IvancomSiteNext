import PromoHero from "@/components/Promo/PromoHero/PromoHero";
import styles from "./styles.module.css"
import PromoMain from "@/components/Promo/PromoMain/PromoMain";
import PromoSocLinks from "@/components/Promo/PromoSocLinks/PromoSocLinks";

const Services = () => {
 

  return <div>
    <section id="hero" className={styles.section}>
      <PromoHero/>
    </section>
    <section id="main" className={styles.section}>
      <PromoMain/>
    </section>
    <section id="socLink" className={styles.section}>
      <PromoSocLinks/>
    </section>
  </div>
};

export default Services;
