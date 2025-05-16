import { useState } from "react";
import { Search } from "lucide-react";

// Categories data (top tabs)
const categories = [
  { name: "Tümü", icon: "/icons/all.png" },
  { name: "Favorite", icon: "/assets-ow/casino/img/icons/star.png" },
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

export default function Header({ activeProvider, setActiveProvider }) {
  const [active, setActive] = useState("Tümü");
  const [showProviderBox, setShowProviderBox] = useState(false);

  const [searchText, setSearchText] = useState("");

  const toggleProviderBox = () => {
    setShowProviderBox((prev) => !prev);
  };

  const filteredProviders = providers.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="relative">
       <div className="lg:hidden flex items-center bg-white px-6 mt-5 py-3 border rounded">
          <input
            type="text"
            placeholder="Search"
            className="outline-none flex-1 text-sm bg-transparent rounded-md"
          />
          <Search size={18} className="text-pink-600 ml-2" />
        </div>
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
            <img src={provider.image} alt={provider.name} className="w-7 h-7 object-contain" />
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
        <div className="hidden ml-auto lg:flex items-center bg-white px-6 py-3 border rounded">
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
