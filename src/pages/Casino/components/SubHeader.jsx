import React from "react";
import { useSite } from "@/context/SiteContext";

const providersTr = [
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
const providersEn = [
  { name: "Pragmatic Play", count: 351, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/pragmaticplay.svg" },
  { name: "Ninja Gaming", count: 29, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/ninjagaming.svg" },
  { name: "Bolt Gaming", count: 27, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/bolt-gaming.svg" },
  { name: "Playtech", count: 277, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/playtech.svg" },
  { name: "Ruby Play", count: 133, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/rubyplay.svg" },
  { name: "B Gaming", count: 143, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/bgaming.svg" },
  { name: "Exa Gaming", count: 10, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/exagaming.svg" },
  { name: "Yggdrasil", count: 362, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/yggdrasil.svg" },
  { name: "Betsoft", count: 174, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/betsoft.svg" },
  { name: "Hacksaw", count: 142, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/hacksaw.svg" },
  { name: "Octoplay", count: 4, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/octoplay.svg" },
  { name: "Fugaso", count: 67, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/fugaso.svg" },
  { name: "Platipus", count: 112, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/platipus.svg" },
  { name: "Red Tiger", count: 301, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/redtiger.svg" },
  { name: "Booming", count: 136, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/booming.svg" },
  { name: "Red Rake", count: 106, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/redrake.svg" },
  { name: "NetEnt", count: 173, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/netent.svg" },
  { name: "BF Games", count: 102, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/bfgames.svg" },
  { name: "Swintt", count: 131, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/swintt.svg" },
  { name: "Playson", count: 78, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/playson.svg" },
  { name: "NoLimit City", count: 105, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/nolimitcity.svg" },
  { name: "Endorphina", count: 146, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/endorphina.svg" },
  { name: "Retro", count: 8, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/retro.svg" },
  { name: "PG Soft", count: 51, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/pgsoft.svg" },
  { name: "Spade Gaming", count: 80, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/spadegaming.svg" },
  { name: "Quickspin", count: 112, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/quickspin.svg" },
  { name: "Leap", count: 28, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/leap.svg" },
  { name: "OneTouch", count: 43, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/onetouch.svg" },
  { name: "Booongo", count: 33, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/booongo.svg" },
  { name: "Habanero", count: 170, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/habanero.svg" },
  { name: "Tom Horn", count: 38, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/tomhorn.svg" },
  { name: "Relax Gaming", count: 150, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/relaxgaming.svg" },
  { name: "Nucleus", count: 55, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/nucleus.svg" },
  { name: "Spinomenal", count: 434, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/spinomenal.svg" },
  { name: "STHLM", count: 2, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/sthlm.svg" },
  { name: "SmartSoft", count: 3, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/smartsoft.svg" },
  { name: "Kalamba", count: 132, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/kalamba.svg" },
  { name: "Apollo", count: 42, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/apollo.svg" },
  { name: "High 5", count: 2, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/high5.svg" },
  { name: "G Games", count: 63, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/ggames.svg" },
  { name: "Evoplay", count: 195, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/evoplay.svg" },
  { name: "Eurasian", count: 96, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/eurasian.svg" },
  { name: "Big Time", count: 64, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/bigtime.svg" },
  { name: "The Ear", count: 16, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/theear.svg" },
  { name: "Revolver", count: 4, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/revolver.svg" },
  { name: "Amatic", count: 106, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/amatic.svg" },
  { name: "VGS", count: 11, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/vgs.svg" },
  { name: "GameArt", count: 61, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/gameart.svg" },
  { name: "Oryx", count: 9, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/oryx.svg" },
  { name: "Yolted", count: 15, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/yolted.svg" },
  { name: "Rogue", count: 1, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/rogue.svg" },
  { name: "EGT Digital", count: 148, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/egtdigital.svg" },
  { name: "Amusnet", count: 192, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/amusnet.svg" },
  { name: "Wazdan", count: 237, icon: "https://cloudcdn.owcontent.com/assets/svg/providers/wazdan.svg" }
];

const SubHeader = ({ activeProvider, setActiveProvider }) => {
  const {language}=useSite();
  let providers;
  if(language==='turkish'){
    providers=providersTr
  }else{
    providers=providersEn
  }
  return (
    <div className="hidden md:block bg-white shadow-sm overflow-x-auto scrollbar-hide">
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
