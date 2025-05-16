import React, { useState } from "react";

const sidebarItems = [
  { name: "Pragmaticplay", count: 349, image: "/images/pragmatic.png" },
  { name: "Ninja-gaming-lc", count: 10, image: "/images/ninja.png" },
  { name: "Exagaminglive", count: 9, image: "/images/exagaming.png" },
  { name: "Playtech", count: 32, image: "/images/playtech.png" },
  { name: "Luckystreak", count: 9, image: "/images/luckystreak.png" },
  { name: "Bgtv", count: 10, image: "/images/bgtv.png" },
  { name: "Amusnet", count: 7, image: "/images/amusnet.png" },
  { name: "Vivo", count: 28, image: "/images/vivo.png" },
  { name: "Xpg", count: 18, image: "/images/xpg.png" },
  { name: "Algnet", count: 12, image: "/images/algnet.png" },
  { name: "Ezugi", count: 56, image: "/images/ezugi.png" },
  { name: "Tapking", count: 25, image: "/images/tapking.png" },
  { name: "Evolution", count: 104, image: "/images/evolution.png" },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Pragmaticplay");

  return (
    <div className="bg-[#f2f2f2f2] h-full overflow-y-auto flex flex-col gap-1">
      <div className="bg-[#c625ac] text-white font-bold p-4 flex items-center gap-2">
        <img src="/images/dice-icon.png" alt="Sağlayıcılar" className="w-5 h-5" />
        <span>Sağlayıcılar</span>
      </div>

      {sidebarItems.map((item) => (
        <div
          key={item.name}
          onClick={() => setActiveItem(item.name)}
          className={`flex bg-white items-center justify-between p-3 cursor-pointer border-b 
            ${activeItem === item.name ? "text-[#c625ac] " : "hover:text-[#c625ac]"}`}
        >
          <div className="flex items-center gap-2">
            <img src={item.image} alt={item.name} className="w-5 h-5" />
            <span className="text-sm font-medium">{item.name}</span>
          </div>
          <span className="text-sm font-semibold">{item.count}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
