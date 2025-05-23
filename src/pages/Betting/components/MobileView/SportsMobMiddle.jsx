import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Flag,
  Star,
  BarChart3,
  Pin,
} from "lucide-react";
// import SportsCarousel from "./SportsCarousel";
import map from "@/assets/map.png";
import soccer from "@/assets/soccer.png";
import { useNavigate } from "react-router-dom";
import { useSite } from "@/context/SiteContext";
import TabBottomBar from "./TabBottomBar";

const SportsMobMiddle = ({ activeLeague, Icon }) => {
  const [isTopChampionshipsOpen, setIsTopChampionshipsOpen] = useState(true);
  const { language } = useSite();

  return (
    <div>
      <div>
        <div className="bg-white border-b overflow-hidden w-full max-w-full ">
          <div className="bg-gray-200 py-1 flex items-center justify-center gap-5 overflow-x-auto hide-scrollbar">
            <p className="text-xs text-center whitespace-nowrap">3 saat</p>
            <p className="text-xs text-center whitespace-nowrap">3 saat</p>
            <p className="text-xs text-center whitespace-nowrap">3 saat</p>
            <p className="text-xs text-center whitespace-nowrap">3 saat</p>
            <p className="text-xs text-center whitespace-nowrap">3 saat</p>
            <p className="text-xs text-center whitespace-nowrap">3 saat</p>
            <p className="text-xs text-center whitespace-nowrap">3 saat</p>
            <p className="text-xs text-center whitespace-nowrap">3 saat</p>
            <p className="text-xs text-center whitespace-nowrap">3 saat</p>
            <p className="text-xs text-center whitespace-nowrap">3 saat</p>
            <p className="text-xs text-center whitespace-nowrap">3 saat</p>

          </div>
          <div>
            {
              activeLeague?.map((league, index) => (
                <DummyUi key={index} league={league} icon={Icon} />
              ))
            }
          </div>
          <div className="flex items-center justify-center mt-6 mx-4 bg-[#3B2864] rounded-sm text-sm font-medium text-white py-3 px-3">
            {language === "turkish" ? "Daha fazla göster" : "Load More"}
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 right-0 bg-white z-50">
        <TabBottomBar />
      </div>
    </div>
  );
};

export default SportsMobMiddle;

const teamNames = [
  "Sivasspor", "Galatasaray", "Fenerbahçe", "Trabzonspor", "Beşiktaş",
  "Başakşehir", "Bursaspor", "Konyaspor", "Altay", "Adanaspor",
  "Gençlerbirliği", "Boluspor", "Kayserispor", "Rizespor", "Ankaragücü",
  "Antalyaspor", "Gaziantep FK", "Karagümrük", "Manisaspor", "Sakaryaspor"
];

const getRandomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomFloat = (min = 1.2, max = 4.5) =>
  (Math.random() * (max - min) + min).toFixed(2);
const getRandomInt = (min = 100, max = 999) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const games = Array.from({ length: 6 }, () => ({
  team1: getRandomFromArray(teamNames),
  team2: getRandomFromArray(teamNames),
  number: getRandomInt(),
  odds: Array.from({ length: 8 }, () => getRandomFloat()),
}));

console.log(games);


// const handler = () => {
//   setCount((prev) => prev + 1);
//   if (count >= 1) navigate("/login");
//   const cards = document.querySelectorAll(".rightSideCards");
//   cards.forEach((card) => {
//     card.classList.remove("hidden");
//     card.classList.add("block");
//   });
// };

const DummyUi = ({ league, icon }) => {
  const [favorited, setFavorited] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { language } = useSite();

  const handler = () => {
    setCount((prev) => prev + 1);
    if (count >= 1) {
      navigate("/login");
    }

    const cards = document.querySelectorAll(".rightSideCards");
    Array.from(cards).forEach((card) => {
      card.classList.remove("hidden");
      card.classList.add("block");
    });
  };

  console.log("League in mobile: ", league['league-en']);



  return (
    <div>
      <div className="flex items-center justify-between bg-[#3B2864] text-white py-2 pl-3">
        <div className="flex items-center">
          <div className="mr-2">
            <span>{icon}</span>
          </div>
          <div className="flex items-center mr-2">
            <img src={league?.flag} alt="" className="w-4" />
          </div>
          <span className="font-medium text-xs">
            {league['league-en']}
          </span>
        </div>
      </div>

      {
        games.map((game, i) => (
          <>
            <div className="py-4 px-4 border-b">
        <div className="flex items-center justify-between gap-5">
          <div className="w-40">
            <p className="text-xs text-[#3B2864]">{game.team1}</p>
            <p className="text-xs text-[#3B2864] line-clamp-1">
              {game.team2}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-2">
              <Star size={15} className="text-[#3B2864]" />
              <Pin size={15} className="text-[#3B2864]" />
              <Pin size={15} className="text-[#3B2864]" />
              <BarChart3 size={15} className="text-[#3B2864]" />
              <BarChart3 size={15} className="text-[#3B2864]" />
            </div>
            <div>
              <p className="text-[8px] text-gray-400">11.05.25</p>
              <p className="text-[8px] text-gray-400">6:00 PM</p>
            </div>
          </div>
        </div>
        <div className="mt-2 overflow-x-auto hide-scrollbar w-full flex gap-2" onClick={handler}>
          {game.odds.map((odd, i) => (
            <div
              key={i}
              className="bg-gray-200 min-w-[48px] rounded-sm flex flex-col items-center justify-center"
            >
              <p className="text-[10px] font-light py-0.5">{parseInt(Math.random() * 10)}</p>
              <p className="text-[10px] font-light py-1 w-full text-center border-t border-gray-300">{odd}</p>
            </div>
          ))}
        </div>

      </div>
          </>
        ))
      }
      <div className="py-4 px-4 border-b">
        <div className="flex items-center justify-between gap-5">
          <div className="w-40">
            <p className="text-xs text-[#3B2864]">Sivasspor</p>
            <p className="text-xs text-[#3B2864] line-clamp-1">
              {language === "turkish"
                ? "Bodrum Belediyesi Bordrums"
                : "Bodrum Municipality Bodrumspor"}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-2">
              <Star size={15} className="text-[#3B2864]" />
              <Pin size={15} className="text-[#3B2864]" />
              <Pin size={15} className="text-[#3B2864]" />
              <BarChart3 size={15} className="text-[#3B2864]" />
              <BarChart3 size={15} className="text-[#3B2864]" />
            </div>
            <div>
              <p className="text-[8px] text-gray-400">11.05.25</p>
              <p className="text-[8px] text-gray-400">6:00 PM</p>
            </div>
          </div>
        </div>
        <div className="mt-2 overflow-x-auto hide-scrollbar w-full flex gap-2">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 min-w-[48px] rounded-sm flex flex-col items-center justify-center"
            >
              <p className="text-[10px] font-light py-0.5">1</p>
              <p className="text-[10px] font-light py-1 w-full text-center border-t border-gray-300">3.20</p>
            </div>
          ))}
        </div>

      </div>


    </div>
  );
};
