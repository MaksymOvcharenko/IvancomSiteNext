'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import styles from './Swiper.module.css';

type SwiperComponentProps = {
  images: string[];
};

const SwiperComponent: React.FC<SwiperComponentProps> = ({ images }) => {
  return (
    <div className={styles.swiperWrapper}>
      <Swiper
         pagination={{ 
    clickable: true, 
   
  }}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
        className={styles.swiper}
        centeredSlides={false} // Фикс для пробелов
        slidesPerView={1} 
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 10 },
          1280: { slidesPerView: 3, spaceBetween: 10 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.imgWrapper}>
              <Image 
                src={src} 
                alt={`Slide ${index + 1}`} 
                width={342} 
                height={320} 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
