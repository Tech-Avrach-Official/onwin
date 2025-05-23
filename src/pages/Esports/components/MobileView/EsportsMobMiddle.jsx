import React, { useState } from "react";
import esports from "../../../../assets/esports.png";
import esportsMiddle from "../../../../assets/esportsMiddle.png";
import {
  Search,
  Circle,
  Calendar,
  Clock,
  ChevronUp,
  ChevronDown,
  Star,
  BarChart,
  ChevronRight,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import TabBottomBar from "./TabBottomBar";
import favoriteImg from "../../../../assets/esports/favourite.png";
import cs2Img from "../../../../assets/esports/cs2.png";
import dota2Img from "../../../../assets/esports/dota2.png";
import legendImg from "../../../../assets/esports/legend.png";
import overwatchImg from "../../../../assets/esports/overwatch.png";
import valorantImg from "../../../../assets/esports/valorant.png";
import warcraftImg from "../../../../assets/esports/warcraft.png";
import allImg from "../../../../assets/esports/all.png";

const games = [
  { id: 1, name: "Favourite", count: 0, image: favoriteImg },
  { id: 2, name: "All Games", count: 239, image: allImg },
  { id: 3, name: "CS2", count: 44, image: cs2Img },
  { id: 4, name: "Dota 2", count: 9, image: dota2Img },
  { id: 5, name: "League Of Legends", count: 33, image: legendImg },
  { id: 6, name: "Overwatch", count: 2, image: overwatchImg },
  { id: 7, name: "Valorant", count: 13, image: valorantImg },
  { id: 8, name: "Warcraft III", count: 4, image: warcraftImg },
];
const filters = [
  {
    id: 1,
    label: "Live now",
    icon: <Circle size={15} fill="#ff0000" color="#ff0000" />,
  },
  { id: 2, label: "All", icon: <Calendar size={15} /> },
  { id: 3, label: "Upcoming", icon: <Calendar size={15} /> },
  { id: 4, label: "Today", icon: <Clock size={15} /> },
  { id: 5, label: "Tomorrow", icon: <Clock size={15} /> },
  { id: 6, label: "Next 3 Hr", icon: <Clock size={15} /> },
];

const matchData = {
  time: "21:20",
  date: "Thu, 15 May",
  team1: "Geekay Esports (LOL)",
  team2: "Fox Gaming (LOL)",
  odds: {
    team1: 1.06,
    team2: 7.3,
  },
};

const matchStats = [
  {
    id: 1,
    name: "Favourite",
    oddsData: [
      {
        title: "CBLol",
        image: legendImg,
        game: "league of Legends",
        odds: [
          { team1: "Complexity (CS2)", team2: "OG (CS2)", odds: [1.06, 7.3] },
          { team1: "Heroic (CS2)", team2: "Chinggis Warriors (CS2)", odds: [1.06, 7.3] },
        ]
      },
      {
        title: "WL Insight",
        image: cs2Img,
        game: "CS2",
        odds: [
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
        ]
      },
      {
        title: "Challengers League",
        image: valorantImg,
        game: "Valorant",
        odds: [
          { team1: "Complexity (CS2)", team2: "OG (CS2)", odds: [1.06, 7.3] },
          { team1: "Heroic (CS2)", team2: "Chinggis Warriors (CS2)", odds: [1.06, 7.3] },
        ]
      },
      
      
    ]
  },
  {
    id: 2,
    name: "All",
    oddsData: [
      {
        title: "WL Insight",
        image: cs2Img,
        game: "CS2",
        odds: [
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
        ]
      },
      {
        title: "CBLol",
        image: legendImg,
        game: "league of Legends",
        odds: [
          { team1: "Complexity (CS2)", team2: "OG (CS2)", odds: [1.06, 7.3] },
          { team1: "Heroic (CS2)", team2: "Chinggis Warriors (CS2)", odds: [1.06, 7.3] },
        ]
      },
      {
        title: "Challengers League",
        image: valorantImg,
        game: "Valorant",
        odds: [
          { team1: "Complexity (CS2)", team2: "OG (CS2)", odds: [1.06, 7.3] },
          { team1: "Heroic (CS2)", team2: "Chinggis Warriors (CS2)", odds: [1.06, 7.3] },
        ]
      }
    ]
  },
  {
    id: 3,
    name: "CS2",
    image: favoriteImg,

    oddsData: [
      {
        title: "WL Insight",
        game: "CS2",
        odds: [
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
        ]
      },
      {
        title: "BLAST.tv Auston Major 2023",
        game: "CS2",
        odds: [
          { team1: "Complexity (CS2)", team2: "OG (CS2)", odds: [1.06, 7.3] },
          { team1: "Heroic (CS2)", team2: "Chinggis Warriors (CS2)", odds: [1.06, 7.3] },
        ]
      },
      {
        title: "WL Insight",
        game: "CS2",
        odds: [
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
        ]
      },
      {
        title: "BLAST.tv Auston Major 2023",
        game: "CS2",
        odds: [
          { team1: "Complexity (CS2)", team2: "OG (CS2)", odds: [1.06, 7.3] },
          { team1: "Heroic (CS2)", team2: "Chinggis Warriors (CS2)", odds: [1.06, 7.3] },
        ]
      },
    ]
  },
  {
    id: 4,
    name: "Dota 2",
    image: dota2Img,

    oddsData: [
      {
        title: "DreamLeague",
        game: "Dota 2",
        odds: [
          { team1: "Aurora Esports club (D2)", team2: "BB Team (D2)", odds: [1.06, 7.3] },
          { team1: "Yakults Brothers (D2)", team2: "Team Liquid (D2)", odds: [1.06, 7.3] },
          { team1: "Aurora Esports club (D2)", team2: "BB Team (D2)", odds: [1.06, 7.3] },
          { team1: "Yakults Brothers (D2)", team2: "Team Liquid (D2)", odds: [1.06, 7.3] },
          { team1: "Aurora Esports club (D2)", team2: "BB Team (D2)", odds: [1.06, 7.3] },
          { team1: "Yakults Brothers (D2)", team2: "Team Liquid (D2)", odds: [1.06, 7.3] },
          { team1: "Aurora Esports club (D2)", team2: "BB Team (D2)", odds: [1.06, 7.3] },
          { team1: "Yakults Brothers (D2)", team2: "Team Liquid (D2)", odds: [1.06, 7.3] },
          { team1: "Aurora Esports club (D2)", team2: "BB Team (D2)", odds: [1.06, 7.3] },
          { team1: "Yakults Brothers (D2)", team2: "Team Liquid (D2)", odds: [1.06, 7.3] },
        ]
      },
    ]
  },
  {
    id: 5,
    name: "League Of Legends",
    image: legendImg,

    oddsData: [
      {
        title: "CBLoL",
        game: "League Of Legends",
        odds: [
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
        ]
      },
      {
        title: "CD 2025 Split 1",
        game: "League Of Legends",
        odds: [
          { team1: "Complexity (CS2)", team2: "OG (CS2)", odds: [1.06, 7.3] },
          { team1: "Heroic (CS2)", team2: "Chinggis Warriors (CS2)", odds: [1.06, 7.3] },
          { team1: "Complexity (CS2)", team2: "OG (CS2)", odds: [1.06, 7.3] },
          { team1: "Heroic (CS2)", team2: "Chinggis Warriors (CS2)", odds: [1.06, 7.3] },
        ]
      },
    ]
  },
  {
    id: 6,
    name: "Overwatch",
    image: overwatchImg,

    oddsData: [
      {
        title: "Champions Series",
        game: "Overwatch",
        odds: [
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
        ]
      },
    ]
  },
  {
    id: 7,
    name: "Valorant",
    image: valorantImg,

    oddsData: [
      {
        title: "Challengers League",
        game: "Valorant",
        odds: [
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
        ]
      },
      {
        title: "Champions Tour Masters Toronto",
        game: "Valorant",
        odds: [
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
        ]
      },
    ]
  },
  {
    id: 8,
    name: "Warcraft III",
    image: warcraftImg,
    oddsData: [
      {
        title: "Don't Force me cup",
        game: "Warcraft III",
        odds: [
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
          { team1: "Forze Reload (CS2)", team2: "Mousquetaires (CS2)", odds: [1.06, 7.3] },
          { team1: "UNITY Esports (CS2)", team2: "KubiX (CS2)", odds: [1.06, 7.3] },
        ]
      },
    ]
  },
]
const EsportsMobMiddle = () => {
  const [isOpen, setIsOpen] = useState(true);
  
    const [selectedId, setSelectedId] = useState(3);
  
    const selectedGame = matchStats.find(game => game.id === selectedId);
  return (
    <div>
      <div className="flex overflow-x-auto hide-scrollbar">
        {games.map((game, index) => (
          <div
          onClick={() => setSelectedId(game.id)}
            key={game.id}
            className={`relative bg-white flex flex-col items-center justify-center min-w-20 h-16 border`}
          >
            {/* Count Badge */}
            <div className="absolute top-2 right-4 bg-purple-900 text-white text-[10px] px-1 py-0.2 rounded-full translate-x-1/2 -translate-y-1/2">
              {game.count}
            </div>

            {/* Icon */}
            <img src={game.image} alt={game.name} className="w-7 mb-1" />

            {/* Name */}
            <p className="text-[9px] text-center line-clamp-1 ">{game.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center overflow-x-auto bg-gradient-to-t from-[#17063c] to-[#2b1065] text-white gap-5">
        {/* Left side navigation options */}
        <div className="flex items-center">
          {filters.map((filter) => (
            <div
              key={filter.id}
              className="flex items-center whitespace-nowrap px-3 py-4 border-r border-black space-x-2 cursor-pointer"
            >
              {filter.icon}
              <span className="font-medium text-xs">{filter.label}</span>
            </div>
          ))}
        </div>

        {/* Right side search */}
      </div>

      <div>
        {selectedGame ? (
        <div className="mt-3">
          {selectedGame.oddsData.map((oddData, index) => (
        <Collapsible
        key={index}
        open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex justify-between h-12 gap-2 items-center w-full bg-[#200B4D] text-white">
            <div className="w-[65%] pl-2 flex items-center gap-2">
              {isOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
              <div className="flex items-center gap-2">
                <div>
                  <img
                          src={selectedGame?.image || selectedGame?.oddsData?.[index]?.image}
                          className="w-5"
                          alt={selectedGame?.name || "Game Image"}
                          onError={(e) => {
                            e.currentTarget.onerror = null; // Prevent infinite loop
                            // Fallback to oddsData[0].image if available
                            if (selectedGame?.oddsData?.[index]?.image) {
                              e.currentTarget.src = selectedGame.oddsData[index].image;
                            } else {
                              e.currentTarget.src = "/default-fallback.png"; // Optional global fallback
                            }
                          }}
                        />
                </div>
                <div>
                  <p className="text-xs text-start font-medium text-white">
                  {oddData.title}
                  </p>
                  <p className="text-xs text-white">
                    {oddData.game}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[55%] relative h-full flex items-center justify-end">
              <img
                src={esportsMiddle}
                className="w-full h-full object-cover"
                alt=""
              />
              <Star className="h-4 w-4 absolute right-5 text-white" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="w-full">
              {/* Header row with column titles */}
              <div className="flex justify-between items-center bg-gray-200 text-white h-8  pl-3 pr-3">
                <div className="text-indigo-900 text-xs border-r-2 border-gray-500 pr-20 font-medium">
                  Result
                </div>

                <div className="flex">
                  <div className="w-12 text-xs text-center text-indigo-900 font-medium">
                    1
                  </div>
                  <div className="w-12 text-xs text-center text-indigo-900 font-medium">
                    X
                  </div>
                  <div className="w-12 text-xs text-center text-indigo-900 font-medium">
                    2
                  </div>
                </div>
              </div>

              {/* Match details row */}
              {oddData.odds.map((match, index) => (
              <div
              key={index}
              className="relative hover:shadow-md border-b flex items-center justify-between bg-white rounded-b-md shadow-sm px-3">
                {/* Time and Teams */}
                <div className="flex flex-col gap-2 py-2">
                  {/* Time and date */}
                  <div className="flex flex-col">
                    <span className="text-xs text-indigo-900">{match.team1}</span>
                    <span className="text-xs text-indigo-900">{match.team2}</span>
                  </div>
                  <div className="flex items-start justify-start gap-1">
                    <div className="text-xs text-gray-500 font-medium">  {String(Math.floor(Math.random() * 24)).padStart(2, "0")}:{String(Math.floor(Math.random() * 60)).padStart(2, "0")}</div>
                    <div className="text-xs text-gray-500 font-medium">{new Date().toISOString().split('T')[0]}</div>
                  </div>

                  {/* Teams */}
                </div>

                {/* Stats Icon */}
             <div>
                <div className="flex items-end justify-end">

                {/* Odds - First value */}
                <div className="w-12 flex justify-center items-center">
                  <div className="bg-gray-100 text-indigo-900 font-bold text-xs py-2 px-4 rounded-md">
                    {(Number((Math.random() * 3).toFixed(2)))}
                  </div>
                </div>

                <div className="w-12 flex justify-center items-center">
                  <div></div>
                </div>

                 {/* Odds - Second value with +2 */}
                <div className="w-12 flex justify-center items-center">
                  <div className="bg-gray-100 text-indigo-900 font-bold text-xs py-2 px-4 rounded-md">
                    {(Number((Math.random() * 3).toFixed(2)))}
                  </div>
                </div>
               </div>

                <div className="flex mt-1">
                   <div className="flex justify-center mr-1 items-center">
                  <button className="text-gray-400 flex items-center hover:text-gray-600">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 16H7V21H3V16Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12H14V21H10V12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 8H21V21H17V8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 21H21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs ml-1 text-gray-500">lstatistik</span>
                  </button>
                </div>
              <div className=" flex items-center justify-center">
                <p className="text-xs font-bold text-blue-500">{Math.floor(Math.random() * 51)} <span className="text-blue-500 font-medium">Daha fazla</span></p>
                <ChevronRight className="text-blue-500 w-4" />
              </div>
                </div>
             </div>

              </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
          ))}
      </div>
        ) : (
          <div className="mt-3">
            <p className="text-center text-gray-500">No matches available</p>
          </div>
        )}

     
      </div>
      <div className="sticky bottom-0 left-0 right-0 bg-white z-50">
        <TabBottomBar/>
      </div>
    </div>
  );
};

export default EsportsMobMiddle;
