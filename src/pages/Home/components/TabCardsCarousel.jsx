// components/ImageCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import tab1 from "../../../assets/home/tab1.jpg";
import tab2 from "../../../assets/home/tab2.jpg";
import tab3 from "../../../assets/home/tab3.jpg";
import tab4 from "../../../assets/home/tab4.jpg";
import tab5 from "../../../assets/home/tab5.jpg";
import tab6 from "../../../assets/home/tab6.jpg";
import tab7 from "../../../assets/home/tab7.jpg";
import tab8 from "../../../assets/home/tab8.jpg";
import tab9 from "../../../assets/home/tab9.jpg";
import tab10 from "../../../assets/home/tab10.jpg";
import tab11 from "../../../assets/home/tab11.jpg";
import tab12 from "../../../assets/home/tab12.jpg";
import tab13 from "../../../assets/home/tab13.jpg";
import tab14 from "../../../assets/home/tab14.jpg";
import tab15 from "../../../assets/home/tab15.jpg";
import tab16 from "../../../assets/home/tab16.jpg";
import tab17 from "../../../assets/home/tab17.jpg";
import tab18 from "../../../assets/home/tab18.jpg";
import tab19 from "../../../assets/home/tab19.jpg";
import tab20 from "../../../assets/home/tab20.jpg";
const TabCardsCarousel = () => {
  const images = [
    tab1,
    tab2,
    tab3,
    tab4,
    tab5,
    tab6,
    tab7,
    tab8,
    tab9,
    tab10,
    tab11,
    tab12,
    tab13,
    tab14,
    tab15,
    tab16,
    tab17,
    tab18,
    tab19,
    tab20
  ];

  return (
    <div className="w-full"> {/* Adjust width as needed */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={4}
        className="rounded-xl overflow-hidden"
      >
        
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded-2xl py-2 px-1 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TabCardsCarousel;
