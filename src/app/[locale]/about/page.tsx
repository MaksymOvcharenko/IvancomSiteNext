import HeroAbout from "@/components/About/AboutHero/AboutHero";
import styles from "./page.module.css"
import SwiperComponent from "@/components/Swiper/Swiper";
import { useTranslations } from "next-intl";

const Services = () => {
  // locale тепер у params
  const t = useTranslations("about");
 const images = [
  "/image/about/slide2.jpg",
   "/image/about/slide3.jpg",
  "/image/about/slide1.jpg",
  "/image/about/slide2.jpg",
  "/image/about/slide3.jpg"
];
  return <div className={styles.body}>
    <HeroAbout />
    <section id="photoAbout" className={styles.gallery}>
      <h2>{ t("logistics_journey")}</h2>
      <SwiperComponent images={images} /></section>
  </div>
};

export default Services;
