import React from "react";
import { useSite } from "@/context/SiteContext";

const providersEn = [
  { name: "Pragmaticplay", count: 349, image: "https://cloudcdn.owcontent.com/assets/svg/providers/pragmaticplay.svg" },
  { name: "Ninja-gaming-lc", count: 10, image: "https://cloudcdn.owcontent.com/assets/svg/providers/ninja-gaming-lc.svg" },
  { name: "Exagaminglive", count: 9, image: "https://cloudcdn.owcontent.com/assets/svg/providers/exagaminglive.svg" },
  { name: "Playtech", count: 32, image: "https://cloudcdn.owcontent.com/assets/svg/providers/playtech.svg" },
  { name: "Luckystreak", count: 9, image: "https://cloudcdn.owcontent.com/assets/svg/providers/luckystreak.svg" },
  { name: "Bgtv", count: 10, image: "https://cloudcdn.owcontent.com/assets/svg/providers/bgtv.svg" },
  { name: "Amusnet", count: 7, image: "https://cloudcdn.owcontent.com/assets/svg/providers/amusnet.svg" },
  { name: "Vivo", count: 28, image: "https://cloudcdn.owcontent.com/assets/svg/providers/vivo.svg" },
  { name: "Xpg", count: 18, image: "https://cloudcdn.owcontent.com/assets/svg/providers/xpg.svg" },
  { name: "Algnet", count: 12, image: "https://cloudcdn.owcontent.com/assets/svg/providers/algnet.svg" },
  { name: "Ezugi", count: 56, image: "https://cloudcdn.owcontent.com/assets/svg/providers/ezugi.svg" },
  { name: "Tapking", count: 25, image: "https://cloudcdn.owcontent.com/assets/svg/providers/tapking.svg" },
  { name: "Evolution", count: 104, image: "https://cloudcdn.owcontent.com/assets/svg/providers/evolution.svg" },
];

const providersTr = [
  { name: "Pragmatik Oyun", count: 349, image: "https://cloudcdn.owcontent.com/assets/svg/providers/pragmaticplay.svg" },
  { name: "Ninja Oyun", count: 10, image: "https://cloudcdn.owcontent.com/assets/svg/providers/ninja-gaming-lc.svg" },
  { name: "Exagaming Canlı", count: 9, image: "https://cloudcdn.owcontent.com/assets/svg/providers/exagaminglive.svg" },
  { name: "Playtech", count: 32, image: "https://cloudcdn.owcontent.com/assets/svg/providers/playtech.svg" },
  { name: "LuckyStreak", count: 9, image: "https://cloudcdn.owcontent.com/assets/svg/providers/luckystreak.svg" },
  { name: "BGTV", count: 10, image: "https://cloudcdn.owcontent.com/assets/svg/providers/bgtv.svg" },
  { name: "Amusnet", count: 7, image: "https://cloudcdn.owcontent.com/assets/svg/providers/amusnet.svg" },
  { name: "Vivo Oyun", count: 28, image: "https://cloudcdn.owcontent.com/assets/svg/providers/vivo.svg" },
  { name: "XPG", count: 18, image: "https://cloudcdn.owcontent.com/assets/svg/providers/xpg.svg" },
  { name: "Algnet", count: 12, image: "https://cloudcdn.owcontent.com/assets/svg/providers/algnet.svg" },
  { name: "Ezugi", count: 56, image: "https://cloudcdn.owcontent.com/assets/svg/providers/ezugi.svg" },
  { name: "Tapking", count: 25, image: "https://cloudcdn.owcontent.com/assets/svg/providers/tapking.svg" },
  { name: "Evrim Oyunları", count: 104, image: "https://cloudcdn.owcontent.com/assets/svg/providers/evolution.svg" },
];

const SubHeader = ({ activeProvider, setActiveProvider }) => {
  const {language}=useSite()
    let providers;
    if(language==='turkish'){
     providers=providersTr
    }else{
      providers=providersEn
    }
  return (
    <div className="bg-white shadow-sm overflow-x-auto scrollbar-hide">
      <div className="flex space-x-2">
        {providers.map((provider) => {
          const isActive = activeProvider === provider.name;

          return (
            <button
              key={provider.name}
              onClick={() => setActiveProvider(provider.name)}
              className={`flex items-center  px-2 py-4 transition-all whitespace-nowrap
                ${isActive ? "bg-[#c625be] text-white" : "bg-white text-[#2f2f44] hover:bg-gray-100"}
              `}
            >
              <img src={provider.image} alt={provider.name} className="w-5 h-5 mr-2" />
              <span className="font-semibold text-sm">{provider.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SubHeader;
