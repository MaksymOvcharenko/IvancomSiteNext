// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import Image from 'next/image';
// import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

// type SwiperComponentProps = {
//   images: string[];
// };

// const SwiperComponent: React.FC<SwiperComponentProps> = ({ images }) => {
//   return (
//     <div className="swiper-container">
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         slidesPerView={'auto'}
//         spaceBetween={10}
     
//         pagination={{ clickable: true }}
//         navigation={{
//           nextEl: '.custom-next',
//           prevEl: '.custom-prev',
//         }}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//               loop={true}
//               initialSlide={2}
//         breakpoints={{
//           375: { slidesPerView: 1, spaceBetween: 5 },
//           768: { slidesPerView: 2, spaceBetween: 15 },
//           1024: { slidesPerView: 3, spaceBetween: 5 },
//           1440: { slidesPerView: 4, spaceBetween: 20 },
//         }}
//       >
//         {images.map((src, index) => (
//           <SwiperSlide key={index} className="slide">
//             <div className="slide-image">
//               <Image 
//                 src={src} 
//                 alt={`Slide ${index + 1}`} 
//                 layout="fill" 
               
//                 quality={100}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Кнопки навігації */}
//       <div className="custom-prev"><TfiArrowCircleLeft size={48} /></div>
//       <div className="custom-next"><TfiArrowCircleRight size={48} /></div>

      
//     </div>
//   );
// };

// export default SwiperComponent;
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

type SwiperComponentProps = {
  images: string[];
};

const SwiperComponent: React.FC<SwiperComponentProps> = ({ images }) => {
  return (
    <div className="swiper-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={'auto'}
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true}
        initialSlide={2}
        breakpoints={{
          375: { slidesPerView: 1, spaceBetween: 5 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 5 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="slide">
            <div className="slide-image">
              <Image 
                src={src} 
                alt={`Slide ${index + 1}`} 
                layout="intrinsic" 
                width={1000} // Вказуємо розмір для масштабування
                height={600} // Вказуємо висоту для пропорцій
                quality={100}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кнопки навігації */}
      <div className="custom-prev"><TfiArrowCircleLeft size={48} /></div>
      <div className="custom-next"><TfiArrowCircleRight size={48} /></div>
    </div>
  );
};

export default SwiperComponent;

