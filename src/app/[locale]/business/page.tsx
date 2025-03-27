
import styles from "./styles.module.css"

import HeroBussines from "@/components/Bussines/HeroBussines/HeroBussines";
import BussinesMain from "@/components/Bussines/BussinesMain/BussinesMain";
import BussinesCars from "@/components/Bussines/BussinesCars/BussinesCars";

const Bussines = () => {
 

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
  </div>
};

export default Bussines;
