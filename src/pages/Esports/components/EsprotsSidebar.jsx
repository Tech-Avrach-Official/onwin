import React from "react";
import esports1 from "../../../assets/esports/image1.png";
import esports2 from "../../../assets/esports/image2.png";
import esports3 from "../../../assets/esports/image3.png";
import esports4 from "../../../assets/esports/image4.png";
import esports5 from "../../../assets/esports/image5.png";
import esports6 from "../../../assets/esports/image6.png";
import esports7 from "../../../assets/esports/image7.png";
import esports8 from "../../../assets/esports/image8.png";
import esports9 from "../../../assets/esports/image9.png";
import esports10 from "../../../assets/esports/image10.png";
import esports11 from "../../../assets/esports/image11.png";

const EsprotsSidebar = () => {
  const popularLeagues = [
    { id: 1, image: esports1 },
    { id: 2, image: esports2 },
    { id: 3, image: esports3 },
    { id: 4, image: esports4 },
  ];

const allEsports = [
  { id: 1, name: "CS2", image: esports5 },
  { id: 3, name: "Dota 2", image: esports6 },
  { id: 4, name: "League of Legend", image: esports7 },
  { id: 2, name: "Overwatch", image: esports8 },
  { id: 5, name: "Rainbow Six", image: esports9 },
  { id: 5, name: "Rocket Leauge", image: esports10 },
  { id: 6, name: "Overwatch", image: esports11 },
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
