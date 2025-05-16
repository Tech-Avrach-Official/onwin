import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Flame,
  Gamepad2,
  DollarSign,
  Dice5,
  Tv,
  CircleDollarSign,
  Plane,
  Triangle,
  CircleDollarSignIcon,
  DollarSignIcon,
} from "lucide-react";

const subItems = [
  {
    icon: <Flame className="text-[#C625AC]" />,
    title: "Canlı Bahisler",
    subtitle: "Canlı karşılaşmalara yüksek oranlar ile bahis yap.",
    path: "/live",
  },
  {
    icon: <Gamepad2 className="text-[#C625AC]" />,
    title: "Esports",
    subtitle: "En sevdiğiniz oyunlara bahis yapın, kazanın!",
    path: "/esports",
  },
  {
    icon: <DollarSignIcon className="text-[#C625AC]" />,
    title: "Sanal Bahisler",
    subtitle: "Golden Race ile sanal bahis dünyasını keşfet.",
    path: "/virtual",
  },
  {
    icon: <DollarSign className="text-[#C625AC]" />,
    title: "Canlı Casino",
    subtitle: "En özel canlı casino oyunlarımız sizleri bekliyor.",
    path: "/live-casino",
  },
  {
    icon: <Dice5 className="text-[#C625AC]" />,
    title: "Casino",
    subtitle: "Slot oyunlar ile eğlenerek kazanın!",
    path: "/casino",
  },
  {
    icon: <CircleDollarSignIcon className="text-[#C625AC]" />,
    title: "Canlı Oyunlar",
    subtitle: "Gerçek krupiyeler ile oyna.",
    path: "/games",
  },
  {
    icon: <CircleDollarSign className="text-[#C625AC]" />,
    title: "Tombala",
    subtitle: "Klasik tombala ile kazançlarınızı katlayın.",
    path: "/bingo",
  },
  {
    icon: <Plane className="text-[#C625AC]" />,
    title: "Zeplin",
    subtitle: "Gözü yükseklere olanlara harika bir deneyim!",
    path: "/zeplin", // update path as needed
  },
  {
    icon: <Triangle className="text-[#C625AC]" />,
    title: "Plinko",
    subtitle: "Piramitlerin kazandıran dünyasını keşfet!",
    path: "/plinko", // update path as needed
  },
  {
    icon: <Tv className="text-[#C625AC]" />,
    title: "Hollywood TV Oyunları",
    subtitle: "Hollywood Tv’ye özel harika oyunlar keşfet.",
    path: "/hollywood-tv", // update path as needed
  },
];

const MobileSubNavbar = () => {
  return (
    <div className="bg-white px-4 py-4 space-y-3">
      {subItems.map((item, idx) => (
        <Link to={item.path} key={idx}>
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md shadow-sm hover:bg-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-full shadow">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
              </div>
            </div>
            <ChevronRight className="text-gray-400" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MobileSubNavbar;
