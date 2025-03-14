import HeroAbout from "@/components/About/AboutHero/AboutHero";
import styles from "./page.module.css";
import SwiperComponent from "@/components/Swiper/Swiper";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SwiperReviewsComponent from "@/components/SwiperReviews/SwiperReviews";
import Partners from "@/components/Partners/Partners";

const Services = () => {
  // locale тепер у params
  const t = useTranslations("about");
  const images = [
    "/image/about/slide2.jpg",
    "/image/about/slide1.jpg",

    "/image/about/slide3.jpg",
    "/image/about/slide4.jpg",
    "/image/about/slide5.jpg",
    "/image/about/slide6.jpg",
  ];
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
  const reviews = [
    {
      avatar: "/image/about/ava2.jpg",
      name: "Ольга Ковальчук",
      date: "2025-03-10",
      stars: 4,
      text: "Хороший сервіс, проте були невеликі затримки з доставкою.",
    },
    {
      avatar: "/image/about/ava1.jpg",
      name: "Іван Петренко",
      date: "2025-03-12",
      stars: 5,
      text: "Чудовий сервіс! Все пройшло швидко і без проблем. Рекомендую!",
    },

    {
      avatar: "/image/about/ava3.jpg",
      name: "Андрій Сидоренко",
      date: "2025-03-08",
      stars: 3,
      text: "Загалом нормально, але є куди вдосконалюватись.",
    },
    {
      avatar: "/image/about/ava2.jpg",
      name: "Ольга Ковальчук",
      date: "2025-03-10",
      stars: 4,
      text: "Хороший сервіс, проте були невеликі затримки з доставкою.",
    },
    {
      avatar: "/image/about/ava1.jpg",
      name: "Іван Петренко",
      date: "2025-03-12",
      stars: 5,
      text: "Чудовий сервіс! Все пройшло швидко і без проблем. Рекомендую!",
    },
  ];

  return (
    <div className={styles.body}>
      <HeroAbout />
      <section id="ourTeam" className={styles.team}>
        <h2 className={styles.galleryTitle}>{t("titleTeam")}</h2>
        <div className={styles.teamCont}>
          <Image
            src="/image/about/ourTeam.jpg"
            alt="Логотип IVANCOM"
            width={628}
            height={483}
            className={styles.image}
          />
          <p className={styles.descTeam}>{t("contentTeam")}</p>
        </div>
      </section>
      <section id="photoAbout" className={styles.gallery}>
        <h2 className={styles.galleryTitle}>{t("logistics_journey")}</h2>
        <SwiperComponent images={images} />
      </section>
      <section id="reviews" className={styles.reviews}>
        <h2 className={styles.reviewsTitle}>{t("titleReviews")}</h2>
        <SwiperReviewsComponent reviews={reviews} />
      </section>
      <section id="helpAbout" className={styles.helpAbout}>
        <h2 className={styles.galleryTitle}>{t("titleStrong")}</h2>
        <ul className={styles.helpAboutText}>
          <li>
            <p>{t("part1Strong")}</p></li>
            <li><p>{t("part2Strong")}</p></li>
            <li><p>{t("part3Strong")}</p></li>
            <li><p>{t("part4Strong")}</p></li>
          
        </ul>
        <SwiperComponent images={images} />
        <h2 className={styles.galleryTitle}>{t("text1")}</h2>
        <p className={styles.helpDescVideo}>{t("text2")}</p>
        <iframe 
   className={styles.videoIframe}
  src="https://www.youtube.com/embed/xrK5peXBzwU?autoplay=1" 
  title="YouTube video player" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen>
</iframe>
      </section>
      <section id="partners" className={styles.helpAbout}>
        <Partners logos={partnersLogos}/>
       </section>
    </div>
  );
};

export default Services;
