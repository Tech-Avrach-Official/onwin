import { useState } from "react";
import { Search } from "lucide-react";

// Categories data (top tabs)
const categories = [
  { name: "Tümü", icon: "/icons/all.png" },
  { name: "Favorite", icon: "/icons/favorite.png" },
  { name: "Yeni", icon: "/icons/new.png" },
  { name: "Popüler Oyunlar", icon: "/icons/popular.png" },
  { name: "TURNUVA", icon: "/icons/tournament.png" },
  { name: "BlackJack Black Friday", icon: "/icons/blackjack-bf.png" },
  { name: "Lobiler", icon: "/icons/lobby.png" },
  { name: "Gösteri Oyunları", icon: "/icons/show.png" },
  { name: "Rulet", icon: "/icons/roulette.png" },
  { name: "Blackjack", icon: "/icons/blackjack.png" },
  { name: "Sic Bo", icon: "/icons/sicbo.png" },
  { name: "Poker", icon: "/icons/poker.png" },
];

// Provider box data
const providers = [
  { name: "All Providers", icon: "/providers/all.png" },
  { name: "Examinglive", icon: "/providers/examinglive.png", count: 9 },
  { name: "Bgtv", icon: "/providers/bgtv.png", count: 10 },
  { name: "Xpg", icon: "/providers/xpg.png", count: 18 },
  { name: "Tapking", icon: "/providers/tapking.png", count: 25 },
  { name: "Pragmaticplay", icon: "/providers/pragmaticplay.png", count: 349 },
  { name: "Playtech", icon: "/providers/playtech.png", count: 32 },
  { name: "Amusnet", icon: "/providers/amusnet.png", count: 7 },
  { name: "Algnets", icon: "/providers/algnets.png", count: 12 },
  { name: "Evolution", icon: "/providers/evolution.png", count: 104 },
  { name: "Ninja-Gaming-Lc", icon: "/providers/ninja.png", count: 10 },
  { name: "Luckystreak", icon: "/providers/luckystreak.png", count: 9 },
  { name: "Vivo", icon: "/providers/vivo.png", count: 28 },
  { name: "Ezugi", icon: "/providers/ezugi.png", count: 56 },
];

export default function Header() {
  const [active, setActive] = useState("Tümü");
  const [showProviderBox, setShowProviderBox] = useState(false);
  const [activeProvider, setActiveProvider] = useState("All Providers");
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
