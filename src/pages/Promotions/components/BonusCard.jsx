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

// ✅ Bonus data array
const bonusCards = [
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

const BonusCard = () => {
  return (
    <div className="w-full px-28 py-5">
      <div className="grid grid-cols-2 gap-5">
        {bonusCards.map((card, index) => (
          <div
            key={index}
            className="p-10 flex flex-col justify-between"
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '200px',
              width: '100%',
            }}
          >
            <h1 className="text-lg text-white max-w-xs font-bold mb-5">{card.title}</h1>
            <button className="bg-[#C625AC] text-white py-2 px-6 rounded-sm font-semibold text-base w-fit">
              Detaylar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BonusCard;
