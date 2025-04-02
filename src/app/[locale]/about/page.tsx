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
    "/image/about/сomands/slide2.png",
    "/image/about/сomands/slide13.png",

    "/image/about/сomands/slide3.png",
    "/image/about/сomands/slide4.png",
    "/image/about/сomands/slide5.png",
    "/image/about/сomands/slide6.png",
     "/image/about/сomands/slide7.png",
    "/image/about/сomands/slide8.png",
    "/image/about/сomands/slide9.png",
    "/image/about/сomands/slide10.png",
     "/image/about/сomands/slide11.png",
    "/image/about/сomands/slide12.png",
    "/image/about/сomands/slide14.png",
    "/image/about/сomands/slide15.png",
      "/image/about/сomands/slide16.png",
    "/image/about/сomands/slide17.png",
      "/image/about/сomands/slide18.png",
   
  ];
  const imagesVolontariusz = [
    "/image/about/volontariusz/1.jpg",
    "/image/about/volontariusz/2.jpg",

    "/image/about/volontariusz/3.jpg",
    "/image/about/volontariusz/4.jpg",
    "/image/about/volontariusz/5.jpg",
    "/image/about/volontariusz/6.jpg",
    "/image/about/volontariusz/7.jpg",
    "/image/about/volontariusz/8.jpg",
   "/image/about/volontariusz/9.jpg",
   
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
  const reviewsImg = [
     "/image/about/reviews/1.png",
    "/image/about/reviews/2.png",

    "/image/about/reviews/3.png",
    "/image/about/reviews/4.png",
    "/image/about/reviews/5.png",
    "/image/about/reviews/6.png",
    "/image/about/reviews/7.png",
    "/image/about/reviews/8.png",
    "/image/about/reviews/9.png",
    "/image/about/reviews/10.png",
    "/image/about/reviews/11.png",
   "/image/about/reviews/12.png",
  ]

  return (
    <div className={styles.body}>
      <HeroAbout />
      <section id="ourTeam" className={styles.team}>
        <h1 className={styles.galleryTitle}>{t("titleTeam")}</h1>
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
        <SwiperComponent images={reviewsImg} />
        {/* <SwiperReviewsComponent reviews={reviews} /> */}
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
        <SwiperComponent images={imagesVolontariusz} />
        <h2 className={styles.galleryTitle}>{t("text1")}</h2>
        <p className={styles.helpDescVideo}>{t("text2")}</p>
        <iframe 
   className={styles.videoIframe}
  src="https://www.youtube.com/embed/xrK5peXBzwU?autoplay=1" 
  title="YouTube video player" 
  frameBorder="0" 
  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
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
