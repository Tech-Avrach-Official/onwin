import React from "react";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import sportsdummy from "@/assets/sportsdummy.png";
import soccer from "@/assets/soccer.png";
import map from "@/assets/map.png";
import { useSite } from "@/context/SiteContext";
// import { Input } from '@/components/ui/input';

const LiveSidebar = () => {
  const [isPopularSportsOpen, setIsPopularSportsOpen] = useState(false);

  const [isSoccerOpen, setIsSoccerOpen] = useState(true);
  const [isTurkeyOpen, setIsTurkeyOpen] = useState(true);
  const [isAustraliaOpen, setIsAustraliaOpen] = useState(true);
  const { language } = useSite();

  const sportsData = {
    popularSports: {
      title: "Popular Sports",
      isOpen: isPopularSportsOpen,
      setIsOpen: setIsPopularSportsOpen,
      sports: [
        {
          id: "soccer",
          title: "Soccer",
          icon: soccer,
          count: 1711,
          isOpen: isSoccerOpen,
          setIsOpen: setIsSoccerOpen,
          countries: [
            {
              id: "turkey",
              title: "Turkey Amateur",
              icon: map,
              count: 28,
              isOpen: isTurkeyOpen,
              setIsOpen: setIsTurkeyOpen,
              leagues: [
                {
                  id: "u19-super-lig",
                  title: "U19 Super Lig",
                  icon: map,
                  matches: [
                    {
                      teams: ["Antalyaspor (U19)", "Trabzonspor (U19)"],
                      score: [1, 2],
                      minute: "80'",
                      odds: [
                        { label: "1", value: "5.00" },
                        { label: "x", value: "5.00" },
                        { label: "2", value: "5.00" },
                      ],
                    },
                    {
                      teams: ["Antalyaspor (U19)", "Trabzonspor (U19)"],
                      score: [1, 2],
                      minute: "80'",
                      odds: [
                        { label: "1", value: "5.00" },
                        { label: "x", value: "5.00" },
                        { label: "2", value: "5.00" },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "australia",
              title: "Australia",
              icon: map,
              count: 28,
              isOpen: isAustraliaOpen,
              setIsOpen: setIsAustraliaOpen,
              leagues: [
                {
                  id: "ffa-cup",
                  title: "FFA Cup",
                  icon: map,
                  matches: [
                    {
                      teams: ["Antalyaspor (U19)", "Trabzonspor (U19)"],
                      score: [1, 2],
                      minute: "80'",
                      odds: [
                        { label: "1", value: "5.00" },
                        { label: "x", value: "5.00" },
                        { label: "2", value: "5.00" },
                      ],
                    },
                  ],
                },
                {
                  id: "ffa-cup-qualifying",
                  title: "FFA Cup Qualifying",
                  icon: map,
                  matches: [
                    {
                      teams: ["Antalyaspor (U19)", "Trabzonspor (U19)"],
                      score: [1, 2],
                      minute: "80'",
                      odds: [
                        { label: "1", value: "5.00" },
                        { label: "x", value: "5.00" },
                        { label: "2", value: "5.00" },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  };

  const sportsDataTR = {
  popularSports: {
    title: "Popüler Sporlar",
    isOpen: isPopularSportsOpen,
    setIsOpen: setIsPopularSportsOpen,
    sports: [
      {
        id: "futbol",
        title: "Futbol",
        icon: soccer,
        count: 1711,
        isOpen: isSoccerOpen,
        setIsOpen: setIsSoccerOpen,
        countries: [
          {
            id: "turkiye-amator",
            title: "Türkiye Amatör",
            icon: map,
            count: 28,
            isOpen: isTurkeyOpen,
            setIsOpen: setIsTurkeyOpen,
            leagues: [
              {
                id: "u19-super-lig",
                title: "U19 Süper Lig",
                icon: map,
                matches: [
                  {
                    teams: ["Antalyaspor (U19)", "Trabzonspor (U19)"],
                    score: [1, 2],
                    minute: "80'",
                    odds: [
                      { label: "1", value: "5.00" },
                      { label: "x", value: "5.00" },
                      { label: "2", value: "5.00" },
                    ],
                  },
                  {
                    teams: ["Antalyaspor (U19)", "Trabzonspor (U19)"],
                    score: [1, 2],
                    minute: "80'",
                    odds: [
                      { label: "1", value: "5.00" },
                      { label: "x", value: "5.00" },
                      { label: "2", value: "5.00" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "avustralya",
            title: "Avustralya",
            icon: map,
            count: 28,
            isOpen: isAustraliaOpen,
            setIsOpen: setIsAustraliaOpen,
            leagues: [
              {
                id: "ffa-cup",
                title: "FFA Kupası",
                icon: map,
                matches: [
                  {
                    teams: ["Antalyaspor (U19)", "Trabzonspor (U19)"],
                    score: [1, 2],
                    minute: "80'",
                    odds: [
                      { label: "1", value: "5.00" },
                      { label: "x", value: "5.00" },
                      { label: "2", value: "5.00" },
                    ],
                  },
                ],
              },
              {
                id: "ffa-cup-qualifying",
                title: "FFA Kupası Elemeleri",
                icon: map,
                matches: [
                  {
                    teams: ["Antalyaspor (U19)", "Trabzonspor (U19)"],
                    score: [1, 2],
                    minute: "80'",
                    odds: [
                      { label: "1", value: "5.00" },
                      { label: "x", value: "5.00" },
                      { label: "2", value: "5.00" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

let tempSportData;
if(language==='turkish'){
  tempSportData=sportsDataTR;
}else{
  tempSportData=sportsData;
}


  return (
    <div className="w-full">
      {/* Header Tabs */}
      <div className="rounded-md overflow-hidden">
        <div className="flex w-full">
          <div className="flex-1 bg-[#3B2864] text-sm text-white py-4 px-6 text-center font-medium">
            {language === 'turkish' ? 'Sporlar (2816)' : 'Sports (2816)'}
          </div>
          <div className="flex-1 bg-[#200B4D] text-sm text-white py-4 px-6 text-center font-medium border-l border-purple-800">
            {language === 'turkish' ? 'Canlı (105)' : 'Live (105)'}
          </div>
        </div>

        {/* Filter Options */}
        <div className="p-4 grid grid-cols-2 bg-white gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="bg-gray-200 h-14 text-purple-900 border-none">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{language === 'turkish' ? 'Hepsi' : 'All'}</SelectItem>
              <SelectItem value="football">{language === 'turkish' ? 'Futbol' : 'Football'}</SelectItem>
              <SelectItem value="basketball">{language === 'turkish' ? 'Basketbol' : 'Basketball'}</SelectItem>
              <SelectItem value="tennis">{language === 'turkish' ? 'Tenis' : 'Tennis'}</SelectItem>
            </SelectContent>

          </Select>
          <div>
            <input
              placeholder="Search"
              type="text"
              className="pl-2 h-full text-sm rounded-md bg-gray-200 border-none w-full"
            // placeholder="Search"
            />
            {/* <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" /> */}
          </div>
        </div>
      </div>

      {/* Top Championships */}
      {/* <div className="mt-5">
        <Collapsible
          open={isTopChampionshipsOpen}
          onOpenChange={setIsTopChampionshipsOpen}
        >
          <CollapsibleTrigger className="flex justify-between rounded-t-md items-center w-full bg-[#3B2864] text-white px-4 py-4">
            <span className="font-medium text-sm">Top Championships</span>
            {isTopChampionshipsOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-white border-b">
            <div className="py-4 px-4 flex flex-col gap-4">
              <div className="border-b border-gray-200 pb-4">
                <div className="flex gap-4 items-center">
                  <img src={sportsdummy} className="w-8 h-8" alt="" />
                  <p className="text-xs"> Türkiye Kupası</p>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="flex gap-4 items-center">
                  <img src={sportsdummy} className="w-8 h-8" alt="" />
                  <p className="text-xs"> Türkiye Kupası</p>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="flex gap-4 items-center">
                  <img src={sportsdummy} className="w-8 h-8" alt="" />
                  <p className="text-xs"> Türkiye Kupası</p>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="flex gap-4 items-center">
                  <img src={sportsdummy} className="w-8 h-8" alt="" />
                  <p className="text-xs"> Türkiye Kupası</p>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="flex gap-4 items-center">
                  <img src={sportsdummy} className="w-8 h-8" alt="" />
                  <p className="text-xs"> Türkiye Kupası</p>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="flex gap-4 items-center">
                  <img src={sportsdummy} className="w-8 h-8" alt="" />
                  <p className="text-xs"> Türkiye Kupası</p>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="flex gap-4 items-center">
                  <img src={sportsdummy} className="w-8 h-8" alt="" />
                  <p className="text-xs"> Türkiye Kupası</p>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div> */}

      <div className="mt-5">
        <Collapsible open={tempSportData.popularSports.isOpen} onOpenChange={tempSportData.popularSports.setIsOpen}>
          <CollapsibleTrigger className="flex justify-between items-center rounded-t-md w-full bg-[#3B2864] text-white px-4 py-4">
            <span className="font-medium text-sm">{tempSportData.popularSports.title}</span>
            {tempSportData.popularSports.isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </CollapsibleTrigger>

          <CollapsibleContent className="bg-white px-4">
            {tempSportData.popularSports.sports.map((sport) => (
              <Collapsible key={sport.id} open={sport.isOpen} onOpenChange={sport.setIsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-3 cursor-pointer border-b border-black">
                  <div className="flex items-center space-x-3">
                    <img src={sport.icon} alt={sport.title} className="w-6 h-6 rounded-full" />
                    <span className="font-medium">{sport.title}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-gray-200 px-2 py-1 rounded-md text-xs mr-2">{sport.count}</span>
                    {sport.isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="flex flex-col py-2 gap-2">
                    {sport.countries.map((country) => (
                      <Collapsible key={country.id} open={country.isOpen} onOpenChange={country.setIsOpen}>
                        <CollapsibleTrigger
                          className={`flex items-center bg-gray-100 justify-between w-full px-2 py-2 cursor-pointer ${country.isOpen ? "bg-[#3c2464] text-white rounded-t-md border-b border-black" : "rounded-md"
                            }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">{country.count}</span>
                            <div className="flex items-center">
                              <img src={country.icon} alt="" className="w-3 h-3 mr-4" />
                              <span className={`text-xs font-medium text-gray-500 ${country.isOpen ? "text-white" : ""}`}>{country.title}</span>
                            </div>
                          </div>
                          {country.isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          {country.leagues.map((league) => (
                            <div key={league.id}>
                              <div className="bg-[#3c2464] text-white px-3 py-2 text-xs font-medium flex items-center gap-2">
                                <img src={league.icon} alt={league.title} className="w-4 h-4" />
                                {league.title}
                              </div>

                              {league.matches.map((match, i) => (
                                <React.Fragment key={i}>
                                  {/* Match Row */}
                                  <div className="bg-white px-3 py-2 grid grid-cols-5 gap-4 items-center text-center text-sm font-medium border-t border-gray-200">
                                    <div className="col-span-2 text-gray-600 text-xs text-start">{match.teams[0]}</div>
                                    <div className="col-span-1">
                                      <span className="text-red-600 text-xs font-semibold">{match.minute}</span>
                                      <div className="flex justify-center items-center gap-3">
                                        <span className="text-[#3B2864] text-lg font-bold">{match.score[0]}</span>
                                        <span className="border border-gray-200 h-6"></span>
                                        <span className="text-[#3B2864] text-lg font-bold">{match.score[1]}</span>
                                      </div>
                                    </div>
                                    <div className="col-span-2 text-gray-600 text-xs text-end">{match.teams[1]}</div>
                                  </div>

                                  {/* Betting Odds */}
                                  <div className="grid grid-cols-3 gap-5 px-3 mt-2 mb-4">
                                    {match.odds.map((odd, j) => (
                                      <div key={j} className="bg-gray-200 flex items-center justify-between text-white py-2 px-1 rounded-md">
                                        <div className="text-[10px] text-gray-700">{odd.label}</div>
                                        <div className="text-[10px] text-gray-700">{odd.value}</div>
                                      </div>
                                    ))}
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>

    </div>
  );
};

export default LiveSidebar;
