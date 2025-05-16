import React, { useState } from "react";
import esports from "../../../assets/esports.png";
import esportsMiddle from "../../../assets/esportsMiddle.png";
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

const games = [
  { id: 1, name: "Favourite", count: 0 },
  { id: 2, name: "All Games", count: 239 },
  { id: 3, name: "CS2", count: 44 },
  { id: 4, name: "Dota 2", count: 9 },
  { id: 5, name: "League Of Legends", count: 33 },
  { id: 6, name: "Overwatch", count: 2 },
  { id: 7, name: "Rainbow Six", count: 4 },
  { id: 8, name: "Valorant", count: 13 },
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

const EsportsMiddle = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div className="flex">
        {games.map((game, index) => (
          <div
            key={game.id}
            className={`relative bg-white flex flex-col items-center justify-center w-24 h-20 border`}
          >
            {/* Count Badge */}
            <div className="absolute top-4 right-4 bg-purple-900 text-white text-[10px] px-1.5 py-0.5 rounded-full translate-x-1/2 -translate-y-1/2">
              {game.count}
            </div>

            {/* Icon */}
            <img src={esports} alt={game.name} className="w-7 mb-1" />

            {/* Name */}
            <p className="text-[11px] text-center line-clamp-1 ">{game.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between bg-gradient-to-t from-[#17063c] to-[#2b1065] text-white pr-5 gap-5 rounded-md">
        {/* Left side navigation options */}
        <div className="flex items-center">
          {filters.map((filter) => (
            <div
              key={filter.id}
              className="flex items-center px-3 py-4 border-r border-black space-x-2 cursor-pointer"
            >
              {filter.icon}
              <span className="font-medium text-sm">{filter.label}</span>
            </div>
          ))}
        </div>

        {/* Right side search */}
        <div className="relative max-w-[200px] w-full">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-300" />
          </div>
          <input
            type="text"
            placeholder="Search Event Or Tournament"
            className="pl-10 pr-4 py-1.5 bg-transparent w-full rounded text-white text-xs placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-400"
          />
        </div>
      </div>

      <div>
        <div className="mt-3">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex justify-between h-12 gap-2 rounded-t-md items-center w-full bg-[#200B4D] text-white">
            <div className="w-[65%] pl-2 flex items-center gap-2">
              {isOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
              <div className="flex items-center gap-2">
                <div>
                  <img src={esports} className="w-7" alt="" />
                </div>
                <div>
                  <p className="text-sm text-start font-bold text-white">
                    Arabian League
                  </p>
                  <p className="text-sm font-medium text-white">
                    League of Legends
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[35%] relative h-full flex items-center justify-end">
              <img
                src={esportsMiddle}
                className="w-full h-full object-cover"
                alt=""
              />
              <Star className="h-5 w-5 absolute right-5 text-white" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="w-full">
              {/* Header row with column titles */}
              <div className="flex justify-between items-center bg-gray-200 text-white h-10  pl-3 pr-16">
                <div className="text-indigo-900 text-xs border-r-2 border-gray-500 pr-32 font-medium">
                  Result
                </div>

                <div className="flex">
                  <div className="w-16 text-center text-indigo-900 font-medium">
                    1
                  </div>
                  <div className="w-16 text-center text-indigo-900 font-medium">
                    X
                  </div>
                  <div className="w-16 text-center text-indigo-900 font-medium">
                    2
                  </div>
                </div>
              </div>

              {/* Match details row */}
              <div className="relative hover:shadow-md border-b flex items-center justify-between bg-white rounded-b-md shadow-sm pr-16">
                {/* Time and Teams */}
                <div className="flex items-center gap-4 py-3">
                  {/* Time and date */}
                  <div className="text-center px-3 border-r border-gray-200">
                    <div className="text-sm font-medium">21:20</div>
                    <div className="text-xs font-medium text-indigo-900">Thu, 15 May</div>
                  </div>

                  {/* Teams */}
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-indigo-900">Geekay Esports (LOL)</span>
                    <span className="text-xs font-medium text-indigo-900">Fox Gaming (LOL)</span>
                  </div>
                </div>

                {/* Stats Icon */}
               <div className="flex">
                 <div className="flex justify-center mr-1 items-center">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      width="24"
                      height="24"
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
                  </button>
                </div>

                {/* Odds - First value */}
                <div className="w-16 flex justify-center items-center">
                  <div className="bg-gray-100 text-indigo-900 font-bold py-2 px-4 rounded-md">
                    1.06
                  </div>
                </div>

                <div className="w-16 flex justify-center items-center">
                  <div></div>
                </div>

                {/* Odds - Second value with +2 */}
                <div className="w-16 flex justify-center items-center">
                  <div className="bg-gray-100 text-indigo-900 font-bold py-2 px-4 rounded-md">
                    7.30
                  </div>
                </div>
               </div>

              <div className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center">
                <p className="text-sm font-bold text-blue-500">+2</p>
                <ChevronRight className="text-blue-500 w-4" />
              </div>

              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <div className="mt-3">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex justify-between h-12 gap-2 rounded-t-md items-center w-full bg-[#200B4D] text-white">
            <div className="w-[65%] pl-2 flex items-center gap-2">
              {isOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
              <div className="flex items-center gap-2">
                <div>
                  <img src={esports} className="w-7" alt="" />
                </div>
                <div>
                  <p className="text-sm text-start font-bold text-white">
                    Arabian League
                  </p>
                  <p className="text-sm font-medium text-white">
                    League of Legends
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[35%] relative h-full flex items-center justify-end">
              <img
                src={esportsMiddle}
                className="w-full h-full object-cover"
                alt=""
              />
              <Star className="h-5 w-5 absolute right-5 text-white" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="w-full">
              {/* Header row with column titles */}
              <div className="flex justify-between items-center bg-gray-200 text-white h-10  pl-3 pr-16">
                <div className="text-indigo-900 text-xs border-r-2 border-gray-500 pr-32 font-medium">
                  Result
                </div>

                <div className="flex">
                  <div className="w-16 text-center text-indigo-900 font-medium">
                    1
                  </div>
                  <div className="w-16 text-center text-indigo-900 font-medium">
                    X
                  </div>
                  <div className="w-16 text-center text-indigo-900 font-medium">
                    2
                  </div>
                </div>
              </div>

              {/* Match details row */}
              <div className="relative hover:shadow-md border-b flex items-center justify-between bg-white rounded-b-md shadow-sm pr-16">
                {/* Time and Teams */}
                <div className="flex items-center gap-4 py-3">
                  {/* Time and date */}
                  <div className="text-center px-3 border-r border-gray-200">
                    <div className="text-sm font-medium">21:20</div>
                    <div className="text-xs font-medium text-indigo-900">Thu, 15 May</div>
                  </div>

                  {/* Teams */}
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-indigo-900">Geekay Esports (LOL)</span>
                    <span className="text-xs font-medium text-indigo-900">Fox Gaming (LOL)</span>
                  </div>
                </div>

                {/* Stats Icon */}
               <div className="flex">
                 <div className="flex justify-center mr-1 items-center">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      width="24"
                      height="24"
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
                  </button>
                </div>

                {/* Odds - First value */}
                <div className="w-16 flex justify-center items-center">
                  <div className="bg-gray-100 text-indigo-900 font-bold py-2 px-4 rounded-md">
                    1.06
                  </div>
                </div>

                <div className="w-16 flex justify-center items-center">
                  <div></div>
                </div>

                {/* Odds - Second value with +2 */}
                <div className="w-16 flex justify-center items-center">
                  <div className="bg-gray-100 text-indigo-900 font-bold py-2 px-4 rounded-md">
                    7.30
                  </div>
                </div>
               </div>

              <div className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center">
                <p className="text-sm font-bold text-blue-500">+2</p>
                <ChevronRight className="text-blue-500 w-4" />
              </div>

              </div>
              <div className="relative hover:shadow-md border-b flex items-center justify-between bg-white rounded-b-md shadow-sm pr-16">
                {/* Time and Teams */}
                <div className="flex items-center gap-4 py-3">
                  {/* Time and date */}
                  <div className="text-center px-3 border-r border-gray-200">
                    <div className="text-sm font-medium">21:20</div>
                    <div className="text-xs font-medium text-indigo-900">Thu, 15 May</div>
                  </div>

                  {/* Teams */}
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-indigo-900">Geekay Esports (LOL)</span>
                    <span className="text-xs font-medium text-indigo-900">Fox Gaming (LOL)</span>
                  </div>
                </div>

                {/* Stats Icon */}
               <div className="flex">
                 <div className="flex justify-center mr-1 items-center">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      width="24"
                      height="24"
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
                  </button>
                </div>

                {/* Odds - First value */}
                <div className="w-16 flex justify-center items-center">
                  <div className="bg-gray-100 text-indigo-900 font-bold py-2 px-4 rounded-md">
                    1.06
                  </div>
                </div>

                <div className="w-16 flex justify-center items-center">
                  <div></div>
                </div>

                {/* Odds - Second value with +2 */}
                <div className="w-16 flex justify-center items-center">
                  <div className="bg-gray-100 text-indigo-900 font-bold py-2 px-4 rounded-md">
                    7.30
                  </div>
                </div>
               </div>

              <div className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center">
                <p className="text-sm font-bold text-blue-500">+2</p>
                <ChevronRight className="text-blue-500 w-4" />
              </div>

              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      </div>
    </div>
  );
};

export default EsportsMiddle;
