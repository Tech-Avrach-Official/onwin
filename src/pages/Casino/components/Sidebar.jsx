import React, { useState } from "react";

const sidebarItems = [
  { name: "Tüm Sağlayıcılar", icon: "/providers/all.png" },
  { name: "Pragmaticplay", count: 347, icon: "/providers/pragmaticplay.png" },
  { name: "Ninijagaming", count: 26, icon: "/providers/ninijagaming.png" },
  { name: "Bolt-Gaming", count: 26, icon: "/providers/bolt-gaming.png" },
  { name: "Playtech", count: 277, icon: "/providers/playtech.png" },
  { name: "Rubyplay", count: 131, icon: "/providers/rubyplay.png" },
  { name: "Bgaming", count: 141, icon: "/providers/bgaming.png" },
  { name: "Exgaming", count: 10, icon: "/providers/exgaming.png" },
  { name: "Yggdrasil", count: 355, icon: "/providers/yggdrasil.png" },
  { name: "Betsoft", count: 173, icon: "/providers/betsoft.png" },
  { name: "Hacksaw", count: 142, icon: "/providers/hacksaw.png" },
  { name: "Octoplay", count: 3, icon: "/providers/octoplay.png" },
  { name: "Fugaso", count: 67, icon: "/providers/fugaso.png" },
  { name: "Platipus", count: 111, icon: "/providers/platipus.png" },
  { name: "Redtiger", count: 300, icon: "/providers/redtiger.png" },
  { name: "Booming", count: 135, icon: "/providers/booming.png" },
  { name: "Redrake", count: 106, icon: "/providers/redrake.png" },
  { name: "Netent", count: 172, icon: "/providers/netent.png" },
  { name: "Bfgames", count: 100, icon: "/providers/bfgames.png" },
  { name: "Swintt", count: 131, icon: "/providers/swintt.png" },
  { name: "Playson", count: 77, icon: "/providers/playson.png" },
  { name: "Nolimitcity", count: 105, icon: "/providers/nolimitcity.png" },
  { name: "Endorphina", count: 145, icon: "/providers/endorphina.png" },
  { name: "Retro", count: 8, icon: "/providers/retro.png" },
  { name: "PG Pgsoft", count: 51, icon: "/providers/pg-pgsoft.png" },
  { name: "Spadegaming", count: 79, icon: "/providers/spadegaming.png" },
  { name: "Quickspin", count: 112, icon: "/providers/quickspin.png" },
  { name: "Leap", count: 28, icon: "/providers/leap.png" },
  { name: "Onetouch", count: 43, icon: "/providers/onetouch.png" },
  { name: "Booongo", count: 33, icon: "/providers/booongo.png" },
  { name: "Habanero", count: 170, icon: "/providers/habanero.png" },
  { name: "Tomhorn", count: 38, icon: "/providers/tomhorn.png" },
  { name: "Relaxgaming", count: 150, icon: "/providers/relaxgaming.png" },
  { name: "Nucleus", count: 55, icon: "/providers/nucleus.png" },
  { name: "Spinomenal", count: 429, icon: "/providers/spinomenal.png" },
  { name: "Sthlm", count: 2, icon: "/providers/sthlm.png" },
  { name: "Smartsoft", count: 3, icon: "/providers/smartsoft.png" },
  { name: "Kalamba", count: 131, icon: "/providers/kalamba.png" },
  { name: "Apollo", count: 42, icon: "/providers/apollo.png" },
  { name: "High5", count: 1, icon: "/providers/high5.png" },
  { name: "Ggames", count: 62, icon: "/providers/ggames.png" },
  { name: "Evoplay", count: 195, icon: "/providers/evoplay.png" },
  { name: "Eurasian", count: 96, icon: "/providers/eurasian.png" },
  { name: "Bigtime", count: 64, icon: "/providers/bigtime.png" },
  { name: "Theear", count: 16, icon: "/providers/theear.png" },
  { name: "Revolver", count: 4, icon: "/providers/revolver.png" },
  { name: "Amatic", count: 106, icon: "/providers/amatic.png" },
  { name: "Vgs", count: 11, icon: "/providers/vgs.png" },
  { name: "Gameart", count: 61, icon: "/providers/gameart.png" },
  { name: "Oryx", count: 9, icon: "/providers/oryx.png" },
  { name: "2by2", count: 15, icon: "/providers/2by2.png" },
  { name: "Reevo", count: 3, icon: "/providers/reevo.png" },
  { name: "Zeus", count: 3, icon: "/providers/zeus.png" },
  { name: "Yolted", count: 15, icon: "/providers/yolted.png" },
  { name: "Rogue", count: 1, icon: "/providers/rogue.png" },
  { name: "Egt digital", count: 148, icon: "/providers/egtdigital.png" },
  { name: "Amusnet", count: 191, icon: "/providers/amusnet.png" },
  { name: "Wazdan", count: 237, icon: "/providers/wazdan.png" },
  { name: "Ezugi", count: 56, icon: "/providers/ezugi.png" }
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
