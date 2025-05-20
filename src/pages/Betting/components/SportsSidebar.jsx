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
import { useNavigate } from "react-router-dom";
import sportsdummy from "@/assets/sportsdummy.png";
import soccer from "@/assets/soccer.png";
import map from "@/assets/map.png";
import topChampionships from '../topChampionship.json';
import popularSports from '../popularSports.json'
import { useSite } from "@/context/SiteContext";
// import { Input } from '@/components/ui/input';

const SportsSidebar = () => {
  const [isTopChampionshipsOpen, setIsTopChampionshipsOpen] = useState(true);
  const [isPopularSportsOpen, setIsPopularSportsOpen] = useState(true);

  const [isSoccerOpen, setIsSoccerOpen] = useState(true);
  const [isInternationalOpen, setIsInternationalOpen] = useState(true);
  const [isInternationalClubsOpen, setIsInternationalClubsOpen] = useState(false);
  const [isTurkeyOpen, setIsTurkeyOpen] = useState(false);
  const [isTurkeyAmateurOpen, setIsTurkeyAmateurOpen] = useState(false);
  const [isEnglandOpen, setIsEnglandOpen] = useState(false);
  const [isSpainOpen, setIsSpainOpen] = useState(false);
  const navigate = useNavigate();
  const { language } = useSite()
  console.log(topChampionships)

  const translations = {
    all: {
      turkish: "Hepsi",
      english: "All"
    },
    football: {
      turkish: "Futbol",
      english: "Football"
    },
    basketball: {
      turkish: "Basketbol",
      english: "Basketball"
    },
    tennis: {
      turkish: "Tenis",
      english: "Tennis"
    }
  };


  let tempPopularSport;
  let tempTopChampionship;

  if (language === "turkish") {
    tempPopularSport = popularSports.tr;
    tempTopChampionship = topChampionships.tr;
  } else {
    tempPopularSport = popularSports.en;
    tempTopChampionship = topChampionships.en;
  }



  return (
    <div className="w-full">
      {/* Header Tabs */}
      <div className="rounded-md overflow-hidden">
        <div className="flex w-full">
          <div className="flex-1 bg-[#3B2864] text-sm text-white py-4 px-6 text-center font-medium">
            {language === "turkish" ? "Maç Öncesi (2816)" : "Sports (2816)"}
          </div>
          <div className="flex-1 bg-[#200B4D] text-sm text-white py-4 px-6 text-center font-medium border-l border-purple-800">
            {language === "turkish" ? "Canlı (105)" : "Live (105)"}
          </div>
        </div>

        {/* Filter Options */}
        <div className="p-4 grid grid-cols-2 bg-white gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="bg-gray-200 h-14 text-purple-900 border-none">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{translations.all[language]}</SelectItem>
              <SelectItem value="football">{translations.football[language]}</SelectItem>
              <SelectItem value="basketball">{translations.basketball[language]}</SelectItem>
              <SelectItem value="tennis">{translations.tennis[language]}</SelectItem>

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
      <div className="mt-5">
        <Collapsible
          open={isTopChampionshipsOpen}
          onOpenChange={setIsTopChampionshipsOpen}
        >
          <CollapsibleTrigger className="flex justify-between rounded-t-md items-center w-full bg-[#3B2864] text-white px-4 py-4">
            <span className="font-medium text-sm">{language === "turkish" ? "Popüler Ligler" : "Top Championships"}</span>
            {isTopChampionshipsOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-white border-b">
            <div className="py-4 px-4 flex flex-col gap-4">
              {
                tempTopChampionship.map((champion) => (
                  <div
                    onClick={() => navigate('/login')}
                    className="border-b border-gray-200 pb-4 cursor-pointer" key={champion.id}>
                    <div className="flex gap-4 items-center">
                      <img src={champion.image} className="w-8 h-8" alt="" />
                      <p className="text-xs">{champion.title}</p>
                    </div>
                  </div>
                ))
              }

            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Popular Sports*/}
      <div className="mt-5">
        <Collapsible
          open={isPopularSportsOpen}
          onOpenChange={setIsPopularSportsOpen}
        >
          <CollapsibleTrigger className="flex justify-between rounded-t-md items-center w-full bg-[#3B2864] text-white px-4 py-4">
            <span className="font-medium text-sm">{language === "turkish" ? "Popüler Sporlar" : "Popular Sports"}</span>
            {isPopularSportsOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-white border-b">
            <div className="py-4 px-4 flex flex-col gap-4">
              {
                tempPopularSport.map((popular) => (
                  <div
                    onClick={() => navigate('/login')}
                    className="flex border-b border-gray-200 pb-4 cursor-pointer justify-between" key={popular.id}>
                    <div className="flex gap-6 items-center">
                      <img src={popular.image} className="w-8 h-8" alt="" />
                      <p className="text-xs">{popular.title}</p>
                    </div>
                    <p className="text-xs">{popular.numbers}</p>
                  </div>
                ))
              }

            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Popular Sports */}
      {/* <div className="mt-5">
        <Collapsible
          open={isPopularSportsOpen}
          onOpenChange={setIsPopularSportsOpen}
        >
          <CollapsibleTrigger className="flex justify-between items-center rounded-t-md w-full bg-[#3B2864] text-white px-4 py-4">
            <span className="font-medium text-sm">Popular Sports</span>
            {isPopularSportsOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-white">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Football
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Basketball
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Tennis
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Cricket
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Hockey
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Rugby
              </li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </div> */}

      {/* <div className="mt-5">
        <Collapsible
          open={isPopularSportsOpen}
          onOpenChange={setIsPopularSportsOpen}
        >
          <CollapsibleTrigger className="flex justify-between items-center rounded-t-md w-full bg-[#3B2864] text-white px-4 py-4">
            <span className="font-medium text-sm">Popular Sports</span>
            {isPopularSportsOpen ?
              <ChevronUp className="h-5 w-5" /> :
              <ChevronDown className="h-5 w-5" />
            }
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-white px-4">
            <Collapsible open={isSoccerOpen} onOpenChange={setIsSoccerOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 cursor-pointer border-b border-black">
                <div className="flex items-center space-x-3">
                  <img src={soccer} alt="Soccer" className="w-6 h-6 rounded-full" />
                  <span className="font-medium">Soccer</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-200 px-2 py-1 rounded-md text-xs mr-2">1711</span>
                  {isSoccerOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="flex flex-col py-2 gap-2">
                  <div>
                    <Collapsible open={isInternationalOpen} onOpenChange={setIsInternationalOpen}>
                      <CollapsibleTrigger className={`flex items-center bg-gray-100 rounded-md justify-between w-full px-2 py-2  hover:bg-gray-200 cursor-pointer `}>
                        <div className="flex items-center space-x-3">
                          <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">28</span>
                          <div className="flex items-center">
                            <img src={map} className="w-3 h-3 mr-4" alt="" />
                            <span className="text-xs font-medium text-gray-500">International</span>
                          </div>
                        </div>
                        {isInternationalOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <div className="ml-2 ">
                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">24</span>
                              <span className="text-xs font-medium text-gray-500">WC Qualification, UEFA</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">2</span>
                              <span className="text-xs font-medium text-gray-500">UEFA Nations League</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">1</span>
                              <span className="text-xs font-medium text-gray-500">Finalissima</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">1</span>
                              <span className="text-xs font-medium text-gray-500">International Friendly Games</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  <div>
                    <Collapsible open={isInternationalClubsOpen} onOpenChange={setIsInternationalClubsOpen}>
                      <CollapsibleTrigger className={`flex items-center bg-gray-100 rounded-md justify-between w-full px-2 py-2  hover:bg-gray-200 cursor-pointer `}>
                        <div className="flex items-center space-x-3">
                          <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">28</span>
                          <div className="flex items-center">
                            <img src={map} className="w-3 h-3 mr-4" alt="" />
                            <span className="text-xs font-medium text-gray-500">International Clubs</span>
                          </div>
                        </div>
                        {isInternationalClubsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <div className="ml-2 ">
                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">24</span>
                              <span className="text-xs font-medium text-gray-500">WC Qualification, UEFA</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">2</span>
                              <span className="text-xs font-medium text-gray-500">UEFA Nations League</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">1</span>
                              <span className="text-xs font-medium text-gray-500">Finalissima</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">1</span>
                              <span className="text-xs font-medium text-gray-500">International Friendly Games</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  <div>
                    <Collapsible open={isTurkeyOpen} onOpenChange={setIsTurkeyOpen}>
                      <CollapsibleTrigger className={`flex items-center bg-gray-100 rounded-md justify-between w-full px-2 py-2  hover:bg-gray-200 cursor-pointer `}>
                        <div className="flex items-center space-x-3">
                          <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">28</span>
                          <div className="flex items-center">
                            <img src={map} className="w-3 h-3 mr-4" alt="" />
                            <span className="text-xs font-medium text-gray-500">Turkey</span>
                          </div>
                        </div>
                        {isTurkeyOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <div className="ml-2 ">
                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">24</span>
                              <span className="text-xs font-medium text-gray-500">WC Qualification, UEFA</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">2</span>
                              <span className="text-xs font-medium text-gray-500">UEFA Nations League</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">1</span>
                              <span className="text-xs font-medium text-gray-500">Finalissima</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">1</span>
                              <span className="text-xs font-medium text-gray-500">International Friendly Games</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  <div>
                    <Collapsible open={isTurkeyAmateurOpen} onOpenChange={setIsTurkeyAmateurOpen}>
                      <CollapsibleTrigger className={`flex items-center bg-gray-100 rounded-md justify-between w-full px-2 py-2  hover:bg-gray-200 cursor-pointer `}>
                        <div className="flex items-center space-x-3">
                          <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">28</span>
                          <div className="flex items-center">
                            <img src={map} className="w-3 h-3 mr-4" alt="" />
                            <span className="text-xs font-medium text-gray-500">Turkey Amateur</span>
                          </div>
                        </div>
                        {isTurkeyAmateurOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <div className="ml-2 ">
                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">24</span>
                              <span className="text-xs font-medium text-gray-500">WC Qualification, UEFA</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">2</span>
                              <span className="text-xs font-medium text-gray-500">UEFA Nations League</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">1</span>
                              <span className="text-xs font-medium text-gray-500">Finalissima</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">1</span>
                              <span className="text-xs font-medium text-gray-500">International Friendly Games</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  <div>
                    <Collapsible open={isEnglandOpen} onOpenChange={setIsEnglandOpen}>
                      <CollapsibleTrigger className={`flex items-center bg-gray-100 rounded-md justify-between w-full px-2 py-2  hover:bg-gray-200 cursor-pointer `}>
                        <div className="flex items-center space-x-3">
                          <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">28</span>
                          <div className="flex items-center">
                            <img src={map} className="w-3 h-3 mr-4" alt="" />
                            <span className="text-xs font-medium text-gray-500">England</span>
                          </div>
                        </div>
                        {isEnglandOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <div className="ml-2 ">
                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">24</span>
                              <span className="text-xs font-medium text-gray-500">WC Qualification, UEFA</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">2</span>
                              <span className="text-xs font-medium text-gray-500">UEFA Nations League</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">1</span>
                              <span className="text-xs font-medium text-gray-500">Finalissima</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>

                          <div className="flex items-center justify-between py-2">
                            <div className="flex items-center space-x-3">
                              <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">1</span>
                              <span className="text-xs font-medium text-gray-500">International Friendly Games</span>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                </div>

              </CollapsibleContent>
            </Collapsible>

          </CollapsibleContent>
        </Collapsible>
      </div> */}
    </div>
  );
};

export default SportsSidebar;
