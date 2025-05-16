import { useState } from "react";
import { Search } from "lucide-react";

// Categories data (top tabs)
const categories = [
  { name: "Tümü", icon: "/icons/all.png" },
  { name: "Favorite", icon: "/icons/favorite.png" },
  { name: "YENİ OYUNLAR", icon: "/icons/new.png" },
  { name: "ONWIN'E ÖZEL OYUNLAR", icon: "/icons/popular.png" },
  { name: "EGT Digital Bell Link", icon: "/icons/tournament.png" },
  { name: "FREESPİN AL", icon: "/icons/blackjack-bf.png" },
  { name: "POPÜLER", icon: "/icons/lobby.png" },
  { name: "Yılbaşı Özel", icon: "/icons/show.png" },
  { name: "Endorphina 1 Milyon TL", icon: "/icons/roulette.png" },
  { name: "MEGAWAYS SLOTLAR", icon: "/icons/blackjack.png" },
  { name: "MEYVE TEMALI SLOTLAR", icon: "/icons/sicbo.png" },
  { name: "BİG BASS SERİSİ", icon: "/icons/poker.png" },
  { name: "KORKU TEMALI SLOTLAR", icon: "/icons/poker.png" },
  { name: "Wazdan JacpotRain", icon: "/icons/poker.png" },
  { name: "DROP&WİNS", icon: "/icons/poker.png" },
];

// Provider box data
const providers = [
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
  

export default function Header() {
  const [active, setActive] = useState("Tümü");
  const [showProviderBox, setShowProviderBox] = useState(false);
  const [activeProvider, setActiveProvider] = useState("Tüm Sağlayıcılar");
  const [searchText, setSearchText] = useState("");

  const toggleProviderBox = () => {
    setShowProviderBox((prev) => !prev);
  };

  const filteredProviders = providers.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="relative">
      {/* Top Category Bar */}
      <div className="flex items-center gap-2 pt-8 pb-6 rounded-lg bg-[#f2f2f2]">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide bg-white rounded-md ">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`flex items-center gap-2 px-3 py-3 cursor-pointer whitespace-nowrap border-r
              ${active === cat.name ? "text-pink-600 border-t-2 border-t-pink-600 font-semibold bg-white" : "text-[#524471] font-semibold"}
            `}
            >
              <img src={cat.icon} alt={cat.name} className="w-4 h-4 object-contain" />
              <span className="text-sm">{cat.name}</span>
            </div>
          ))}
        </div>

{/* Sağlayıcı Button + Popup Wrapper */}
<div className="relative">
  {/* Button */}
  <button
    onClick={toggleProviderBox}
    className="whitespace-nowrap bg-white px-6 py-3 border text-sm hover:bg-gray-200 rounded-md"
  >
    Sağlayıcı
  </button>

  {/* Provider Popup */}
  {showProviderBox && (
    <div className="absolute z-50 top-14 right-0 w-[800px] bg-white p-4 shadow-lg rounded-lg border">
      {/* Popup Search */}
      <div className="flex items-center border p-2 rounded mb-4">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
          className="flex-grow bg-transparent outline-none text-sm"
        />
        <Search size={18} className="text-pink-600" />
      </div>

      {/* Grid of Providers */}
      <div className="grid grid-cols-3 gap-3">
        {filteredProviders.map((provider) => (
          <button
            key={provider.name}
            onClick={() => setActiveProvider(provider.name)}
            className={`flex items-center gap-2 border px-3 py-3 rounded text-sm font-medium
              ${activeProvider === provider.name
                ? "bg-[#4d3972] text-white"
                : "bg-white text-[#524471]"}
            `}
          >
            <img src={provider.icon} alt={provider.name} className="w-5 h-5 object-contain" />
            {provider.name}
            {provider.count && (
              <span className="text-xs font-semibold">
                {provider.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )}
</div>



        {/* Search Box */}
        <div className="ml-auto flex items-center bg-white px-6 py-3 border rounded">
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-sm bg-transparent rounded-md"
          />
          <Search size={18} className="text-pink-600 ml-2" />
        </div>
      </div>
    </div>
  );
}
