import HeroAbout from "@/components/About/AboutHero/AboutHero";
import styles from "./page.module.css"

const Services = () => {
// locale тепер у params

  return <div className={styles.body}>
    <HeroAbout/>
  </div>
};

export default Services;
