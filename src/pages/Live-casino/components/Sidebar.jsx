import React, { useState } from "react";

const sidebarItems = [
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

const Sidebar = ({ activeProvider, setActiveProvider }) => {
  

  return (
    <div className="bg-[#f2f2f2f2] h-full overflow-y-auto flex flex-col gap-1">
      <div className="bg-[#c625ac] text-white font-bold p-4 flex items-center gap-2">
        <img src="https://cloudcdn.owcontent.com/assets-ow/casino/img/icons/providers/providers.svg" alt="Sağlayıcılar" className="w-5 h-5" />
        <span>Sağlayıcılar</span>
      </div>

      {sidebarItems.map((item) => (
        <div
          key={item.name}
          onClick={() => setActiveProvider(item.name)}
          className={`flex bg-white items-center justify-between p-3 cursor-pointer border-b 
            ${activeProvider === item.name ? "text-[#c625ac] " : "hover:text-[#c625ac]"}`}
        >
          <div className="flex items-center gap-2">
            <img src={item.image} alt={item.name} className="w-7 h-7" />
            <span className="text-sm font-bold">{item.name}</span>
          </div>
          <span className="text-sm font-semibold text-gray-400">{item.count}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
