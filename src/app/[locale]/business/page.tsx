
import styles from "./styles.module.css"

import HeroBussines from "@/components/Bussines/HeroBussines/HeroBussines";
import BussinesMain from "@/components/Bussines/BussinesMain/BussinesMain";
import BussinesCars from "@/components/Bussines/BussinesCars/BussinesCars";
import Partners from "@/components/Partners/Partners";
import BussinesContacts from "@/components/Bussines/BussinesContacts/BussinesContacts";

const Bussines = () => {
  const partnersLogos = [
  "/image/about/partners/dhl.png",
  "/image/about/partners/dpd.png",
  "/image/about/partners/fedex.png",
  "/image/about/partners/gls.png",
  "/image/about/partners/inpost.png",
  "/image/about/partners/novaposhta.png",
  "/image/about/partners/poczta.png",
  "/image/about/partners/ups.png"
  ];

  return <div>
    <section id="hero" className={styles.section}>
      <HeroBussines/>
    </section>
    <section id="main" className={styles.section}>
      <BussinesMain/>
    </section>
     <section id="cars" className={styles.section}>
      <BussinesCars/>
    </section>
     <section id="partners" className={styles.section}>
      <Partners logos={partnersLogos} />
    </section>
    <section id="contacts" className={styles.section}>
      <BussinesContacts/>
    </section>
  </div>
};

export default Bussines;
