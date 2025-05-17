import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSite } from '@/context/SiteContext';

const sportsEn = [
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
];
const sportsTr = [
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
];


const LiveCarousel = () => {
  const swiperRef = useRef(null);
  const {language}=useSite()

  const slideNext = () => swiperRef.current?.swiper.slideNext();
  const slidePrev = () => swiperRef.current?.swiper.slidePrev();
 
  let sports;
  if(language==='turkish'){
    sports=sportsTr;
  }else{
    sports=sportsEn;
  }
  return (
    <div className="relative w-full py-4 bg-white">
      <button
        onClick={slidePrev}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      <div className="w-full overflow-hidden">
  <Swiper
    ref={swiperRef}
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView="auto"
    className=""
  >
    {sports.map((sport, index) => (
      <SwiperSlide key={index} style={{ width: 'auto' }}>
        <div className="flex items-center gap-1 text-sm text-gray-700">
          <div className="text-2xl">{sport.icon}</div>
          <span className="text-xs whitespace-nowrap">{sport.name}</span>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      <button
        onClick={slideNext}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default LiveCarousel;
