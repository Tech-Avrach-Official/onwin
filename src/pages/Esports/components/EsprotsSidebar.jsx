import React from "react";
import esports from "../../../assets/esports.png";

const EsprotsSidebar = () => {
  const popularLeagues = [
    { id: 1, image: esports },
    { id: 2, image: esports },
    { id: 3, image: esports },
    { id: 4, image: esports },
  ];

  const allEsports = [
    { id: 1, name: "CS2", image: esports },
    { id: 2, name: "Valorant", image: esports },
    { id: 3, name: "Dota 2", image: esports },
    { id: 4, name: "LoL", image: esports },
    { id: 5, name: "PUBG", image: esports },
    { id: 6, name: "Overwatch", image: esports },
  ];

  return (
    <div>
      {/* My Favourite */}
      <div>
        <div className="w-full bg-[#3B2864] text-white text-xs font-medium py-3 px-3 rounded-t-md">
          My Favourite
        </div>
        <div className="py-3 px-3 text-xs font-medium text-[#3B2864]">
          Click on a star for the item to appear here.
        </div>
      </div>

      {/* Popular Esports Leagues */}
      <div>
        <div className="w-full bg-[#3B2864] text-white text-xs font-medium py-3 px-3">
          Popular Esports Leagues
        </div>
        <div className="grid grid-cols-4 bg-white">
          {popularLeagues.map((league, index) => (
            <div
              key={league.id}
              className={`p-3 hover:shadow-md ${
                index % 4 === 0 || index % 4 === 2 ? "border-x" : ""
              } ${index === 3 ? "border-r" : ""}`}
            >
              <img src={league.image} alt={`League ${league.id}`} />
            </div>
          ))}
        </div>
      </div>

      {/* All Esports */}
      <div>
        <div className="w-full bg-[#3B2864] text-white text-xs font-medium py-3 px-3 rounded-t-md">
          All E-sports
        </div>
        <div className="bg-white border rounded-b-md">
          {allEsports.map((game) => (
            <div
              key={game.id}
              className="py-2 px-3 hover:shadow-md  flex items-center border-b gap-3"
            >
              <img src={game.image} className="w-5" alt={game.name} />
              <p className="text-xs font-medium text-gray-500">{game.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EsprotsSidebar;
