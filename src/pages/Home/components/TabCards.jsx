import { useState } from "react";
import tab1 from "../../../assets/home/tab1.jpg";
import tab2 from "../../../assets/home/tab2.jpg";
import tab3 from "../../../assets/home/tab3.jpg";
import tab4 from "../../../assets/home/tab4.jpg";
import tab5 from "../../../assets/home/tab5.jpg";
import tab6 from "../../../assets/home/tab6.jpg";
import tab7 from "../../../assets/home/tab7.jpg";
import tab8 from "../../../assets/home/tab8.jpg";
import tab9 from "../../../assets/home/tab9.jpg";
import tab10 from "../../../assets/home/tab10.jpg";
import tab11 from "../../../assets/home/tab11.jpg";
import tab12 from "../../../assets/home/tab12.jpg";
import tab13 from "../../../assets/home/tab13.jpg";
import tab14 from "../../../assets/home/tab14.jpg";
import tab15 from "../../../assets/home/tab15.jpg";
import tab16 from "../../../assets/home/tab16.jpg";
import tab17 from "../../../assets/home/tab17.jpg";
import tab18 from "../../../assets/home/tab18.jpg";
import tab19 from "../../../assets/home/tab19.jpg";
import tab20 from "../../../assets/home/tab20.jpg";

const TabCards = () => {
  const [activeTab, setActiveTab] = useState("canlicasino");

  const tabs = [
    { id: "canlicasino", name: "Canlı Casino", icon: "♣️" },
    { id: "slotoyunlar", name: "Slot Oyunlar", icon: "🎰" },
    { id: "hollywoodtv", name: "Hollywood TV Oyunları", icon: "📺" },
    { id: "digeroyunlar", name: "Diğer Oyunlar", icon: "🎮" },
  ];

  const games = {
    canlicasino: [
      { id: 1, title: "Crazy Time", provider: "Evolution Gaming", image: tab1 },
      { id: 2, title: "Megaball", provider: "Evolution Gaming", image: tab2 },
      {
        id: 3,
        title: "Monopoly Live",
        provider: "Evolution Gaming",
        image: tab3,
      },
      {
        id: 4,
        title: "Lighning Roulette",
        provider: "Evolution Gaming",
        image: tab4,
      },
      {
        id: 5,
        title: "Immersive Roulette",
        provider: "Evolution Gaming",
        image: tab5,
      },
    ],
    slotoyunlar: [
      {
        id: 1,
        title: "Sweet Bonanza",
        provider: "Pragmatic Play",
        image: tab6,
      },
      {
        id: 2,
        title: "The Dog House",
        provider: "Pragmatic Play",
        image: tab7,
      },
      { 
        id: 3,
         title: "Fruit Party",
          provider: "Pragmatic Play",
           image: tab8 },
      {
        id: 4,
        title: "Release the Kraken",
        provider: "Pragmatic Play",
        image: tab9,
      },
      {
        id: 5,
        title: "Wild West Gold",
        provider: "Pragmatic Play",
        image: tab10,
      },
    ],
    hollywoodtv: [
      {
        id: 1,
        title: "Live 5 Bet",
        provider: "Hollywood TV",
        image: tab11,
      },
      {
        id: 2,
        title: "Live Mega 7",
        provider: "Hollywood TV",
        image: tab12,
      },
      {
        id: 3,
        title: "Live Spin 2 Wheels",
        provider: "Hollywood TV",
        image: tab13,
      },
      {
        id: 4,
        title: "Live Mega 6",
        provider: "Hollywood TV",
        image: tab14,
      },
      {
        id: 5,
        title: "Live Keno",
        provider: "Hollywood TV",
        image: tab15,
      },
    ],
    digeroyunlar: [
      {
        id: 1,
        title: "Canlı Tombala",
        provider: "Tombola CGE",
        image: tab16,
      },
      {
        id: 2,
        title: "Zeppelin",
        provider: "Betsolution",
        image: tab17,
      },
      {
        id: 3,
        title: "Plinks",
        provider: "Betsolution",
        image: tab18,
      },
        {
            id: 4,
            title: "Çarkıfelek",
            provider: "Batgames TV",
            image: tab19,
        },
        {
            id: 5,
            title: "Aviator",
            provider: "Spribe Turbo Games",
            image: tab20,
        },
    ],
  };

  return (
    <div className="bg-gray-100 py-10 px-28">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-3">
        Popüler Oyunlarımız
      </h1>

      {/* Tab Bar */}
      <div className="flex items-center justify-center mb-5 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center px-3 py-3 text-lg font-medium transition-colors duration-300 ${
              activeTab === tab.id
                ? "text-black border-b border-pink-600"
                : "text-gray-400 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="mr-2">{tab.icon}</span>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Game Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {games[activeTab].map((game) => (
          <div key={game.id} className="flex flex-col">
            <div className="group relative rounded-xl border border-[#ff2afb] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-2">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-80 object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-center font-medium text-lg">{game.title}</h3>
            <p className="text-center font-medium text-gray-400 text-sm">
              {game.provider}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabCards;
