import { X, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import esports1 from "../../../../assets/esports/image1.png";
import esports2 from "../../../../assets/esports/image2.png";
import esports3 from "../../../../assets/esports/image3.png";
import esports4 from "../../../../assets/esports/image4.png";
import esports5 from "../../../../assets/esports/image5.png";
import esports6 from "../../../../assets/esports/image6.png";
import esports7 from "../../../../assets/esports/image7.png";
import esports8 from "../../../../assets/esports/image8.png";
import esports9 from "../../../../assets/esports/image9.png";
import esports10 from "../../../../assets/esports/image10.png";
import esports11 from "../../../../assets/esports/image11.png";

export default function EsportsSporlar() {

  const popularLeagues = [
      { id: 1, name: "League Of Legends", image: esports1 },
      { id: 2, name: "Dota 2", image: esports2 },
      { id: 3, name: "CS2", image: esports3 },
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

const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="bg-gray-100 min-h-screen z-50 md:hidden overflow-y-auto px-4">
      <div className="flex items-center justify-between pt-4">
        <h2 className="text-xs font-semibold">Tüm Sporlar</h2>
        <button onClick={handleGoBack} >
          <X className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div className="flex flex-col gap-3 py-4">
        <button className="bg-gradient-to-b from-[#4a3870] to-[#2b1c4b] text-white rounded-sm py-2 font-semibold text-sm">
          Canlı Bahis
        </button>
        <button className="bg-gradient-to-b from-[#4a3870] to-[#2b1c4b] text-white rounded-sm py-2 font-semibold text-sm">
          Canlı Yayın Öncesi Bahisler
        </button>
        <button className="bg-gradient-to-b from-[#4a3870] to-[#2b1c4b] text-white rounded-sm py-2 font-semibold text-sm">
          E-spor bahislerine git
        </button>
      </div>

      <div>
        <div className="w-full bg-[#3B2864] text-white text-xs rounded-t-md py-3 px-3">
          Popular Esports Leagues
        </div>
        <div className="bg-white border rounded-b-md">
          {popularLeagues.map((game) => (
            <div
              key={game.id}
              className="py-1 px-2 hover:shadow-md  flex items-center border-b gap-3"
            >
              <img src={game.image} className="w-4" alt={game.name} />
              <p className="text-[10px] font-medium text-[#3B2864]">{game.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* All Esports */}
      <div>
        <div className="w-full bg-[#3B2864] text-white text-xs  py-3 px-3 rounded-t-md">
          All E-sports
        </div>
        <div className="bg-white border rounded-b-md">
          {allEsports.map((game) => (
            <div
              key={game.id}
              className="py-1 px-2 hover:shadow-md  flex items-center border-b gap-3"
            >
              <img src={game.image} className="w-4" alt={game.name} />
              <p className="text-[10px] font-medium text-[#3B2864]">{game.name}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-fuchsia-600 flex items-center justify-center shadow-lg">
        <MessageCircle className="text-white w-5 h-5" />
      </button>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div className="">
      <div className="bg-[#4a3870] rounded-t-sm text-white px-4 py-2 text-xs">{title}</div>
      <ul className="divide-y text-sm bg-white">
        {items.map((item, i) => (
          <li key={i} className="px-4 py-1 text-xs">{item}</li>
        ))}
      </ul>
    </div>
  );
}
