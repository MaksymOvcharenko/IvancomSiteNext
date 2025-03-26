import { useTranslations } from 'next-intl';
import styles from "./page.module.css"
import ServiceCards from '@/components/ServiceCards/ServiceCards';
import Faq from '@/components/Faq/Faq';
import Partners from '@/components/Partners/Partners';
import SwiperReviewsComponent from '@/components/SwiperReviews/SwiperReviews';
import Delivery from '@/components/DeliveryComponent/DeliveryComponent';
import HomeAbout from '@/components/HomeAbout/HomeAbout';
import HomeHero from '@/components/HomeHero/HomeHero';
import Calendar from '@/components/Calendar/Calendar';
export default function Home() {
  const t = useTranslations('IndexPage');
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
      <section id="hero" className={styles.section}><HomeHero/></section>
      <section id="about" className={styles.section}><HomeAbout/></section>
      <section id="services" className={styles.section}><ServiceCards /></section>
      <section id="calendar" className={styles.section}><Calendar/></section>
       <section id="couriers" className={styles.section}><Delivery/></section>
      <section id="reviews" className={styles.sectionReviews}><SwiperReviewsComponent reviews={reviews} /></section>
      <section id="partners" className={styles.section}><Partners  logos={partnersLogos}/></section>
      <section id="faq" className={styles.section}><div className={styles.faq} ><div className={styles.faqImg}><img src="/image/faq.jpg" width={300} alt="Як відправити з України посилку" /></div><Faq/></div></section>
    </div>
  );
}
