import React from "react";

const providers = [
  { name: "Pragmaticplay", icon: "/icons/pragmaticplay.png" },
  { name: "Ninja-gaming-lc", icon: "/icons/ninja.png" },
  { name: "Exagaminglive", icon: "/icons/exa.png" },
  { name: "Playtech", icon: "/icons/playtech.png" },
  { name: "Luckystreak", icon: "/icons/luckystreak.png" },
  { name: "Bgtv", icon: "/icons/bgtv.png" },
  { name: "Amusnet", icon: "/icons/amusnet.png" },
  { name: "Vivo", icon: "/icons/vivo.png" },
  { name: "Xpg", icon: "/icons/xpg.png" },
  { name: "Algnet", icon: "/icons/algnet.png" },
  { name: "Ezugi", icon: "/icons/ezugi.png" },
  { name: "Tapking", icon: "/icons/tapking.png" },
  { name: "Evolution", icon: "/icons/evolution.png" },
];

const SubHeader = ({ activeProvider, setActiveProvider }) => {
  return (
    <div className="bg-white shadow-sm overflow-x-auto scrollbar-hide">
      <div className="flex space-x-2">
        {providers.map((provider) => {
          const isActive = activeProvider === provider.name;

          return (
            <button
              key={provider.name}
              onClick={() => setActiveProvider(provider.name)}
              className={`flex items-center space-x-2 px-3 py-4 transition-all whitespace-nowrap
                ${isActive ? "bg-[#c625be] text-white" : "bg-white text-[#2f2f44] hover:bg-gray-100"}
              `}
            >
              <img src={provider.icon} alt={provider.name} className="w-5 h-5" />
              <span className="font-semibold text-sm">{provider.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SubHeader;
