import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSite } from '@/context/SiteContext';

const sports = {
  en: [
    { icon: '⚽', name: 'Football' },
    { icon: '🏀', name: 'Basketball' },
    { icon: '🏈', name: 'American Football' },
    { icon: '🏐', name: 'Volleyball' },
    { icon: '🏏', name: 'Cricket' },
    { icon: '🏸', name: 'Badminton' },
    { icon: '🥍', name: 'Lacrosse' },
    { icon: '🏓', name: 'Table Tennis' },
    { icon: '🏒', name: 'Hockey' },
    { icon: '🥊', name: 'Boxing' },
  ],
  tr: [
    { icon: '⚽', name: 'Futbol' },
    { icon: '🏀', name: 'Basketbol' },
    { icon: '🏈', name: 'Amerikan Futbolu' },
    { icon: '🏐', name: 'Voleybol' },
    { icon: '🏏', name: 'Kriket' },
    { icon: '🏸', name: 'Badminton' },
    { icon: '🥍', name: 'Lakros' },
    { icon: '🏓', name: 'Masa Tenisi' },
    { icon: '🏒', name: 'Buz Hokeyi' },
    { icon: '🥊', name: 'Boks' },
  ]
};

const LiveMobCarousel = () => {
  const swiperRef = useRef(null);
  const { language } = useSite();

  const slideNext = () => swiperRef.current?.swiper.slideNext();
  const slidePrev = () => swiperRef.current?.swiper.slidePrev();

  const tempSports = language === 'turkish' ? sports.tr : sports.en;

  return (
    <div className="relative w-full py-2 bg-white">
      {/* Left Button */}
      <button
        onClick={slidePrev}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
      >
        <ChevronLeft size={12} />
      </button>

      {/* Swiper */}
      <div className="w-full overflow-hidden px-6">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView="auto"
        >
          {tempSports.map((sport, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              <div className="flex items-center gap-1 text-gray-700">
                <div className="text-lg">{sport.icon}</div>
                <span className="text-[10px] sm:text-sm whitespace-nowrap">{sport.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Button */}
      <button
        onClick={slideNext}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
      >
        <ChevronRight size={12} />
      </button>
    </div>
  );
};

export default LiveMobCarousel;
