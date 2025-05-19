import { useState } from "react";
import { Search } from "lucide-react";
import { useSite } from "@/context/SiteContext";
import image1 from '../../../assets/Games/image1.png'
import image2 from '../../../assets/Games/image2.png'
import image3 from '../../../assets/Games/image3.png'
import image4 from '../../../assets/Games/image4.png'
import image5 from '../../../assets/Games/image5.svg'
import image6 from '../../../assets/Games/image6.svg'
import image7 from '../../../assets/Games/image7.svg'

// const categoriesIcons={
//   "Tümü":(

//   )
// }

// Categories data (top tabs)
const categoriesTr = [
  { name: "Tümü"},
  { name: "NinjaGamming"},
  { name: "SMARTSOFT 6 MİLYON TL"},
  { name: "YENİ OYUNLAR"},
  { name: "%100 - 1000 TL BONUS"},
  { name: "POPÜLER"},
  { name: "5.000.000 EURO TURNUVA"},
];
const categoriesEn = [
  { name: "All" },
  { name: "NinjaGaming" },
  { name: "SMARTSOFT 6 MILLION TL" },
  { name: "NEW GAMES" },
  { name: "100% - 1000 TL BONUS" },
  { name: "POPULAR" },
  { name: "5,000,000 EURO TOURNAMENT" },
];


// Provider box data
const providersTr = [
    { name: "Tüm Sağlayıcılar", icon:image1 },
    { name: "Onwin Originals", icon: image2},
    { name: "Flagcongamming", icon:image3},
    { name: "SmartSoft", icon:image4 },
    { name: "Tombala", icon:image5 },
    { name: "BestSolutions", icon:image6 },
    { name: "Studio21", icon:image7 },
  ];
  // Provider box data (English)
const providersEn = [
  { name: "All Providers", icon: image1 },
  { name: "Onwin Originals", icon: image2 },
  { name: "FlagconGaming", icon: image3 },
  { name: "SmartSoft", icon: image4 },
  { name: "Bingo", icon: image5 },
  { name: "BestSolutions", icon: image6 },
  { name: "Studio21", icon: image7 },
];


export default function Header() {
  const [active, setActive] = useState("Tümü");
  const [showProviderBox, setShowProviderBox] = useState(false);
  const [activeProvider, setActiveProvider] = useState("Tüm Sağlayıcılar");
  const [searchText, setSearchText] = useState("");
  const {language}=useSite();

  let categories;
  let providers;
  if(language==="turkish"){
    categories=categoriesTr;
    providers=providersTr;
  }else{
    categories=categoriesEn;
    providers=providersEn;
  }

  const toggleProviderBox = () => {
    setShowProviderBox((prev) => !prev);
  };

  const filteredProviders = providers.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="hidden md:block relative">
      {/* Top Category Bar */}
      <div className="flex items-center gap-4 py-8 rounded-lg bg-[#f2f2f2] px-28">
  {/* Categories: Takes remaining width */}
  <div className="flex-grow flex gap-4 overflow-x-auto scrollbar-hide bg-white rounded-md">
    {categories.map((cat) => (
      <div
        key={cat.name}
        onClick={() => setActive(cat.name)}
        className={`flex items-center gap-2 px-3 py-3 cursor-pointer whitespace-nowrap border-r
          ${active === cat.name ? "text-pink-600 border-t-2 border-t-pink-600 font-semibold bg-white" : "text-[#524471] font-semibold"}
        `}
      >
        {/* <img src={cat.icon} alt={cat.name} className="w-4 h-4 object-contain" /> */}
        <span className="text-sm">{cat.name}</span>
      </div>
    ))}
  </div>

  {/* Sağlayıcı Button */}
  <div className="relative">
    <button
      onClick={toggleProviderBox}
      className="whitespace-nowrap bg-white px-6 py-3 border text-sm hover:bg-gray-200 rounded-md"
    >
      {language==="turkish"?"Sağlayıcı":"Provider"}
    </button>

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

        {/* Providers Grid */}
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
  <div className="flex items-center bg-white px-6 py-3 border rounded">
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
