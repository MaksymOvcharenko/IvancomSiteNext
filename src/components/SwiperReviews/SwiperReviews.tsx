'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Star } from 'lucide-react';
import styles from './SwiperReviews.module.css';
import { useTranslations } from 'next-intl';

type Review = {
  avatar: string;
  name: string;
  date: string;
  stars: number;
  text: string;
};

type SwiperComponentProps = {
  reviews: Review[];
};

const SwiperReviewsComponent: React.FC<SwiperComponentProps> = ({ reviews }) => {
  const t = useTranslations("Reviews");
  const renderStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={18} 
          className={i < count ? styles.filledStar : styles.emptyStar}
        />
      );
    }
    return stars;
  };

  return (
    <div>
      <h3 className={styles.title}>{ t("why_choose_us")}</h3>
      <div className={styles.swiperWrapper}>
        
        <Swiper
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          loop={true}
          className={styles.swiper}
          centeredSlides={false}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 10 },
            1280: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.avatarHeader}>
                  <div className={styles.avatarWrapper}>
                    <Image 
                      src={review.avatar} 
                      alt={`${review.name} avatar`} 
                      width={80} 
                      height={80} 
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.name}>{review.name}</div>
                </div>
                <div className={styles.avatarHeader}>
                  <div className={styles.stars}>{renderStars(review.stars)}</div>
                  <div className={styles.date}>{review.date}</div>
                  
                </div>
                <p className={styles.text}>{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperReviewsComponent;
