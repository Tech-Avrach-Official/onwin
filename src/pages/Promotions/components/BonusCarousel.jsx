import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // for fade effect
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

// ✅ Step 1: Slide Data Array
const bonusSlides = [
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

const BonusCarousel = () => {
    return (
        <div className="w-full px-28 flex items-center justify-center relative">
          
          {/* ✅ Move pagination container outside of Swiper */}
          <div className="custom-pagination absolute bottom-10 left-32 z-10" />
      
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
                  <img src={slide.img} alt={`slide-${index}`} className="w-full h-full object-cover" />
                  <div className="absolute top-16 left-32 text-white">
                    <h1 className="text-3xl font-bold mb-2">{slide.title}</h1>
                    <p className="mb-4">{slide.desc}</p>
                    <button className="bg-[#C625AC] text-white py-2 px-4 rounded-md">Detaylar</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
      
};

export default BonusCarousel;
