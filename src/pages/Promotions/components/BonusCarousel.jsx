import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useSite } from '@/context/SiteContext';

import car1 from "../../../assets/bonusimg/car1.webp";
import car2 from "../../../assets/bonusimg/car2.png";
import car3 from "../../../assets/bonusimg/car3.webp";
import car4 from "../../../assets/bonusimg/car4.png";
import car5 from "../../../assets/bonusimg/car5.png";
import car6 from "../../../assets/bonusimg/car6.png";
import car7 from "../../../assets/bonusimg/car7.webp";
import car8 from "../../../assets/bonusimg/car8.png";
import car9 from "../../../assets/bonusimg/car9.png";
import car10 from "../../../assets/bonusimg/car10.png";
import car11 from "../../../assets/bonusimg/car11.png";

const bonusSlidesTr = [
  { img: car1, title: "İLK 3 YATIRIMA 36.000 TL HOŞ GELDİN BONUSU", desc: "İlk 3 Yatırıma %100 Bonus Sizi Bekliyor" },
  { img: car2, title: "750 TL DENEME BONUSU FIRSATI !", desc: "500 TL ÇEKİM İMKANI !" },
  { img: car3, title: "ONWIN'DE HER GÜN HER YATIRIMA 300 FREESPIN HEDİYE!", desc: "YATIRIM TUTARINA GÖRE DEVASA ÖDÜLLER SENİ BEKLİYOR !" },
  { img: car4, title: "%20 ÇEVRİMSİZ YATIRIM BONUSU", desc: "%20 Çevrimsiz Yatırım Bonusu" },
  { img: car5, title: "HER GÜN 100.000 TL SADAKAT BONUSU VERİYORUZ!", desc: "" },
  { img: car6, title: "%30 ÇEVRİMSİZ KAYIP BONUSU", desc: "TEK TUŞLA ANINDA OTOMATİK OLARAK BONUS ALIN" },
  { img: car7, title: "MAJOR LİGLERE ÖZEL 2500TL %100 İADE", desc: "MAJOR LİGLERE BAHİS YAPIN %100 İADE KAZANIN" },
  { img: car8, title: "1.000 X ÇARPAN YAKALA 1.500.000 TL NAKİT ÖDÜL ANINDA HESABINDA !", desc: "" },
  { img: car9, title: "20.500TL + 3.750 FREESPİN DAVET BONUSU!", desc: "20.500TL BONUS + 3.750 FREESPİN KAZANMA FIRSATI!" },
  { img: car10, title: "VIP KULÜBE HOŞ GELDİNİZ!", desc: "ONWİN VIP AVANTAJLARI İLE TANIŞIN" },
  { img: car11, title: "PLAYSON KESİNTİSİZ DÜŞÜŞLER VE YARIŞLAR İLE 6.000.000€ DAĞITIYOR!", desc: "" },
];

const bonusSlidesEn = [
  { img: car1, title: "WELCOME BONUS UP TO 36,000 TRY ON FIRST 3 DEPOSITS", desc: "100% Bonus Awaits You on Your First 3 Deposits" },
  { img: car2, title: "750 TRY TRIAL BONUS OPPORTUNITY!", desc: "500 TRY WITHDRAWAL POSSIBILITY!" },
  { img: car3, title: "EVERY DAY 300 FREESPINS GIFT ON EVERY DEPOSIT AT ONWIN!", desc: "HUGE REWARDS AWAIT BASED ON YOUR DEPOSIT AMOUNT!" },
  { img: car4, title: "20% NON-ROLLING DEPOSIT BONUS", desc: "20% Non-Rollover Deposit Bonus" },
  { img: car5, title: "WE GIVE 100,000 TRY LOYALTY BONUS EVERY DAY!", desc: "" },
  { img: car6, title: "30% NON-ROLLING LOSS BONUS", desc: "GET YOUR BONUS AUTOMATICALLY WITH ONE CLICK" },
  { img: car7, title: "100% CASHBACK UP TO 2,500 TRY FOR MAJOR LEAGUES", desc: "BET ON MAJOR LEAGUES AND WIN 100% CASHBACK" },
  { img: car8, title: "CATCH 1,000X MULTIPLIER AND WIN 1,500,000 TRY CASH PRIZE INSTANTLY!", desc: "" },
  { img: car9, title: "20,500 TRY + 3,750 FREESPINS INVITE BONUS!", desc: "CHANCE TO WIN 20,500 TRY BONUS + 3,750 FREESPINS!" },
  { img: car10, title: "WELCOME TO THE VIP CLUB!", desc: "DISCOVER ONWIN VIP ADVANTAGES" },
  { img: car11, title: "PLAYSON DISTRIBUTES 6,000,000€ WITH CONTINUOUS DROPS AND RACES!", desc: "" },
];


const BonusCarousel = () => {
  const {language}=useSite();

  let bonusSlides;
  if(language==='turkish'){
    bonusSlides=bonusSlidesTr;
  }
  else{
    bonusSlides=bonusSlidesEn;
  }
  return (
    <div className="w-full px-4 sm:px-10 md:px-20 lg:px-28 flex items-center justify-center relative">
      
      {/* Pagination Container */}
      {/* <div className="custom-pagination absolute bottom-5 sm:bottom-8 md:bottom-10 left-4 sm:left-10 md:left-20 z-10" /> */}

      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="fade"
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="bonus-custom-bullet ${className}"></span>`;
          },
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="w-full"
      >
        {bonusSlides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full relative">
              <img src={slide.img} alt={`slide-${index}`} className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute top-8 sm:top-10 md:top-16 left-4 sm:left-10 md:left-20 text-white max-w-[90%] sm:max-w-[80%] md:max-w-[60%]">
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{slide.title}</h1>
                <p className="text-sm sm:text-base md:text-lg mb-4">{slide.desc}</p>
                <button className="bg-[#C625AC] text-white py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base rounded-md">{language=== "turkish" ?"Detaylar":"Details"}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BonusCarousel;
