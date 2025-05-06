import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from "../assets/home/img1.webp";
import img2 from "../assets/home/img2.png";
import img3 from "../assets/home/img3.webp";
import img4 from "../assets/home/img4.webp";
import img5 from "../assets/home/img5.webp";




const Carousel = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
          }}
        modules={[Autoplay, Pagination]}
        className="w-full "
      >
        <SwiperSlide className="w-full h-full flex items-center justify-center">
          <img src={img1} alt="img1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full flex items-center justify-center">
          <img src={img2} alt="img2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full flex items-center justify-center">
          <img src={img3} alt="img3" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full flex items-center justify-center">
          <img src={img4} alt="img4" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full flex items-center justify-center">
          <img src={img5} alt="img5" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel
