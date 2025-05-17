import React, { useState } from "react";

const sidebarItems = [
  
  { name: "Pragmaticplay", count: 351, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/pragmaticplay.svg" },
  { name: "Ninjagaming", count: 29, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/ninjagaming.svg" },
  { name: "Bolt-gaming", count: 27, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/bolt-gaming.svg" },
  { name: "Playtech", count: 277, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/playtech.svg" },
  { name: "Rubyplay", count: 133, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/rubyplay.svg" },
  { name: "Bgaming", count: 143, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/bgaming.svg" },
  { name: "Exagaming", count: 10, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/exagaming.svg" },
  { name: "Yggdrasil", count: 362, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/yggdrasil.svg" },
  { name: "Betsoft", count: 174, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/betsoft.svg" },
  { name: "Hacksaw", count: 142, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/hacksaw.svg" },
  { name: "Octoplay", count: 4, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/octoplay.svg" },
  { name: "Fugaso", count: 67, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/fugaso.svg" },
  { name: "Platipus", count: 112, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/platipus.svg" },
  { name: "Redtiger", count: 301, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/redtiger.svg" },
  { name: "Booming", count: 136, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/booming.svg" },
  { name: "Redrake", count: 106, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/redrake.svg" },
  { name: "Netent", count: 173, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/netent.svg" },
  { name: "Bfgames", count: 102, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/bfgames.svg" },
  { name: "Swintt", count: 131, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/swintt.svg" },
  { name: "Playson", count: 78, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/playson.svg" },
  { name: "Nolimitcity", count: 105, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/nolimitcity.svg" },
  { name: "Endorphina", count: 146, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/endorphina.svg" },
  { name: "Retro", count: 8, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/retro.svg" },
  { name: "Pgsoft", count: 51, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/pgsoft.svg" },
  { name: "Spadegaming", count: 80, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/spadegaming.svg" },
  { name: "Quickspin", count: 112, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/quickspin.svg" },
  { name: "Leap", count: 28, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/leap.svg" },
  { name: "Onetouch", count: 43, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/onetouch.svg" },
  { name: "Booongo", count: 33, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/booongo.svg" },
  { name: "Habanero", count: 170, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/habanero.svg" },
  { name: "Tomhorn", count: 38, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/tomhorn.svg" },
  { name: "Relaxgaming", count: 150, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/relaxgaming.svg" },
  { name: "Nucleus", count: 55, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/nucleus.svg" },
  { name: "Spinomenal", count: 434, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/spinomenal.svg" },
  { name: "Sthlm", count: 2, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/sthlm.svg" },
  { name: "Smartsoft", count: 3, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/smartsoft.svg" },
  { name: "Kalamba", count: 132, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/kalamba.svg" },
  { name: "Apollo", count: 42, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/apollo.svg" },
  { name: "High5", count: 2, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/high5.svg" },
  { name: "Ggames", count: 63, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/ggames.svg" },
  { name: "Evoplay", count: 195, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/evoplay.svg" },
  { name: "Eurasian", count: 96, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/eurasian.svg" },
  { name: "Bigtime", count: 64, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/bigtime.svg" },
  { name: "Theear", count: 16, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/theear.svg" },
  { name: "Revolver", count: 4, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/revolver.svg" },
  { name: "Amatic", count: 106, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/amatic.svg" },
  { name: "Vgs", count: 11, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/vgs.svg" },
  { name: "Gameart", count: 61, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/gameart.svg" },
  { name: "Oryx", count: 9, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/oryx.svg" },
  { name: "Yolted", count: 15, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/yolted.svg" },
  { name: "Rogue", count: 1, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/rogue.svg" },
  { name: "Egtdigital", count: 148, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/egtdigital.svg" },
  { name: "Amusnet", count: 192, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/amusnet.svg" },
  { name: "Wazdan", count: 237, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/wazdan.svg" }
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Pragmaticplay");

  return (
    <div className="bg-[#f2f2f2f2] h-full overflow-y-auto flex flex-col gap-1">
      <div className="bg-[#c625ac] text-white font-bold p-4 flex items-center gap-2">
        <img src="https://www.onwin2400.com/assets-ow/casino/img/icons/providers/providers.svg" alt="Sağlayıcılar" className="w-5 h-5" />
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
            <img src={item.icon} alt={item.name} className="w-5 h-5" />
            <span className="text-sm font-medium">{item.name}</span>
          </div>
          <span className="text-sm font-semibold">{item.count}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
