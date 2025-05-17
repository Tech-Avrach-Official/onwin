import React from 'react';
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
import { useSite } from '@/context/SiteContext';

// ✅ Bonus data array
const bonusCardsTr = [
  { img: car1, title: "İLK 3 YATIRIMA 36.000 TL HOŞ GELDİN BONUSU" },
  { img: car2, title: "750 TL DENEME BONUSU FIRSATI !" },
  { img: car3, title: "HER GÜN HER YATIRIMA 300 FREESPIN HEDİYE!" },
  { img: car4, title: "%20 ÇEVRİMSİZ YATIRIM BONUSU" },
  { img: car5, title: "HER GÜN 100.000 TL SADAKAT BONUSU VERİYORUZ!" },
  { img: car6, title: "%30 ÇEVRİMSİZ KAYIP BONUSU" },
  { img: car7, title: "MAJOR LİGLERE ÖZEL 2500TL %100 İADE" },
  { img: car8, title: "1.000 X ÇARPAN YAKALA 1.500.000 TL NAKİT ÖDÜL" },
  { img: car9, title: "20.500TL + 3.750 FREESPİN DAVET BONUSU!" },
  { img: car10, title: "VIP KULÜBE HOŞ GELDİNİZ!" },
  { img: car11, title: "PLAYSON 6.000.000€ DAĞITIYOR!" },
];

const bonusCardsEn = [
  { img: car1, title: "WELCOME BONUS UP TO 36,000 TL ON FIRST 3 DEPOSITS" },
  { img: car2, title: "750 TL TRIAL BONUS OPPORTUNITY!" },
  { img: car3, title: "300 FREESPINS GIFTED EVERY DAY ON EVERY DEPOSIT!" },
  { img: car4, title: "20% NON-WAGERING DEPOSIT BONUS" },
  { img: car5, title: "WE GIVE 100,000 TL LOYALTY BONUS EVERY DAY!" },
  { img: car6, title: "30% NON-WAGERING LOSS BONUS" },
  { img: car7, title: "2500 TL 100% CASHBACK FOR MAJOR LEAGUES" },
  { img: car8, title: "CATCH 1,000X MULTIPLIER & WIN 1,500,000 TL CASH PRIZE" },
  { img: car9, title: "20,500 TL + 3,750 FREESPIN INVITE BONUS!" },
  { img: car10, title: "WELCOME TO THE VIP CLUB!" },
  { img: car11, title: "PLAYSON IS DISTRIBUTING 6,000,000€!" },
];


const BonusCard = () => {
  const {language}=useSite();
  let bonusCards;
  if(language=='turkish'){
    bonusCards=bonusCardsTr;
  }else{
    bonusCards=bonusCardsEn
  }
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
        {bonusCards.map((card, index) => (
          <div
            key={index}
            className="p-5 sm:p-6 md:p-8 flex flex-col justify-between shadow-md"
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '260px',
            }}
          >
            <h1 className="text-base sm:text-lg md:text-xl text-white font-bold mb-4 max-w-[90%]">
              {card.title}
            </h1>
            <button className="bg-[#C625AC] text-white py-2 px-4 sm:px-6 rounded font-semibold text-sm sm:text-base w-fit">
              {language=== "turkish" ?"Detaylar":"Details"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BonusCard;
