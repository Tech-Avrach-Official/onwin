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
// import { Input } from '@/components/ui/input';

const LiveSidebar = () => {
  const [isPopularSportsOpen, setIsPopularSportsOpen] = useState(false);

  const [isSoccerOpen, setIsSoccerOpen] = useState(true);
  const [isTurkeyOpen, setIsTurkeyOpen] = useState(true);
  const [isAustraliaOpen, setIsAustraliaOpen] = useState(true);


  return (
    <div className="w-full">
      {/* Header Tabs */}
      <div className="rounded-md overflow-hidden">
        <div className="flex w-full">
          <div className="flex-1 bg-[#3B2864] text-sm text-white py-4 px-6 text-center font-medium">
            Sports (2816)
          </div>
          <div className="flex-1 bg-[#200B4D] text-sm text-white py-4 px-6 text-center font-medium border-l border-purple-800">
            Live (105)
          </div>
        </div>

        {/* Filter Options */}
        <div className="p-4 grid grid-cols-2 bg-white gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="bg-gray-200 h-14 text-purple-900 border-none">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="football">Football</SelectItem>
              <SelectItem value="basketball">Basketball</SelectItem>
              <SelectItem value="tennis">Tennis</SelectItem>
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
            {/* Soccer Section */}
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
                {/* Turkey Amateur Section */}
             <div>
               <Collapsible open={isTurkeyOpen} onOpenChange={setIsTurkeyOpen}>
                  <CollapsibleTrigger className={`flex items-center bg-gray-100 justify-between w-full px-2 py-2  cursor-pointer ${isTurkeyOpen ? 'bg-[#3c2464] text-white rounded-t-md border-b border-black' : 'rounded-md'} `}>
                    <div className="flex items-center space-x-3">
                      <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">28</span>
                      <div className="flex items-center">
                      <img src={map} className="w-3 h-3 mr-4" alt="" />
                        <span className={`text-xs font-medium text-gray-500 ${isTurkeyOpen ? 'text-white' : ''}`}>Turkey Amateur</span>
                      </div>
                    </div>
                    {isTurkeyOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </CollapsibleTrigger>
                  
                    <CollapsibleContent>
          <div>
            <div className="bg-[#3c2464] text-white px-3 py-2 text-xs font-medium flex items-center gap-2">
            <img src={map} alt="U19" className="w-4 h-4" />
            U19 Super Lig
          </div>

          {/* Match Row */}
          <div className="bg-white px-3 py-2 grid grid-cols-5 gap-4 items-center text-center text-sm font-medium border-t border-gray-200">
            <div className="col-span-2 text-gray-600 text-xs text-start">Antalyaspor (U19)</div>
            <div className="col-span-1">
              <span className="text-red-600 text-xs font-semibold">80'</span>
              <div className="flex justify-center items-center gap-3">
                <span className="text-[#3B2864] text-lg font-bold">1</span>
                <span className="border border-gray-200 h-6"></span>
                <span className="text-[#3B2864] text-lg font-bold">2</span>
              </div>
            </div>
            <div className="col-span-2 text-gray-600 text-xs text-end">Trabzonspor (U19)</div>
          </div>

          {/* Betting Odds */}
          <div className="grid grid-cols-3 gap-5 px-3 mt-2 mb-4">
            <div className="bg-gray-200 flex items-center justify-between text-white py-2 px-1  rounded-md">
              <div className="text-[10px] text-gray-700">1</div>
              <div className="text-[10px] text-gray-700">5.00</div>
            </div>
            <div className="bg-gray-200 flex items-center justify-between text-white py-2 px-1  rounded-md">
              <div className="text-[10px] text-gray-700">x</div>
              <div className="text-[10px] text-gray-700">5.00</div>
            </div>
            <div className="bg-gray-200 flex items-center justify-between text-white py-2 px-1  rounded-md">
              <div className="text-[10px] text-gray-700">2</div>
              <div className="text-[10px] text-gray-700">5.00</div>
            </div>
          </div>
          </div>
          <div>
            <div className="bg-[#3c2464] text-white px-3 py-2 text-xs font-medium flex items-center gap-2">
            <img src={map} alt="U19" className="w-4 h-4" />
            U19 Super Lig
          </div>

          {/* Match Row */}
          <div className="bg-white px-3 py-2 grid grid-cols-5 gap-4 items-center text-center text-sm font-medium border-t border-gray-200">
            <div className="col-span-2 text-gray-600 text-xs text-start">Antalyaspor (U19)</div>
            <div className="col-span-1">
              <span className="text-red-600 text-xs font-semibold">80'</span>
              <div className="flex justify-center items-center gap-3">
                <span className="text-[#3B2864] text-lg font-bold">1</span>
                <span className="border border-gray-200 h-6"></span>
                <span className="text-[#3B2864] text-lg font-bold">2</span>
              </div>
            </div>
            <div className="col-span-2 text-gray-600 text-xs text-end">Trabzonspor (U19)</div>
          </div>

          {/* Betting Odds */}
          <div className="grid grid-cols-3 gap-5 px-3 mt-2 mb-4">
            <div className="bg-gray-200 flex items-center justify-between text-white py-2 px-1  rounded-md">
              <div className="text-[10px] text-gray-700">1</div>
              <div className="text-[10px] text-gray-700">5.00</div>
            </div>
            <div className="bg-gray-200 flex items-center justify-between text-white py-2 px-1  rounded-md">
              <div className="text-[10px] text-gray-700">x</div>
              <div className="text-[10px] text-gray-700">5.00</div>
            </div>
            <div className="bg-gray-200 flex items-center justify-between text-white py-2 px-1  rounded-md">
              <div className="text-[10px] text-gray-700">2</div>
              <div className="text-[10px] text-gray-700">5.00</div>
            </div>
          </div>
          </div>
         
        </CollapsibleContent>
                </Collapsible>
               </div>
               {/* Australia */}
             <div>
               <Collapsible open={isAustraliaOpen} onOpenChange={setIsAustraliaOpen}>
                  <CollapsibleTrigger className={`flex items-center bg-gray-100 justify-between w-full px-2 py-2  cursor-pointer ${isAustraliaOpen ? 'bg-[#3c2464] text-white rounded-t-md border-b border-black' : 'rounded-md'} `}>
                    <div className="flex items-center space-x-3">
                      <span className="bg-purple-100 px-2 py-1 rounded-md text-xs text-purple-800 font-medium">28</span>
                      <div className="flex items-center">
                      <img src={map} className="w-3 h-3 mr-4" alt="" />
                        <span className={`text-xs font-medium text-gray-500 ${isAustraliaOpen ? 'text-white' : ''}`}>Australia</span>
                      </div>
                    </div>
                    {isAustraliaOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </CollapsibleTrigger>
                  
                    <CollapsibleContent>
          <div>
            <div className="bg-[#3c2464] text-white px-3 py-2 text-xs font-medium flex items-center gap-2">
            <img src={map} alt="U19" className="w-4 h-4" />
           FFA Cup
          </div>

          {/* Match Row */}
          <div className="bg-white px-3 py-2 grid grid-cols-5 gap-4 items-center text-center text-sm font-medium border-t border-gray-200">
            <div className="col-span-2 text-gray-600 text-xs text-start">Antalyaspor (U19)</div>
            <div className="col-span-1">
              <span className="text-red-600 text-xs font-semibold">80'</span>
              <div className="flex justify-center items-center gap-3">
                <span className="text-[#3B2864] text-lg font-bold">1</span>
                <span className="border border-gray-200 h-6"></span>
                <span className="text-[#3B2864] text-lg font-bold">2</span>
              </div>
            </div>
            <div className="col-span-2 text-gray-600 text-xs text-end">Trabzonspor (U19)</div>
          </div>

          {/* Betting Odds */}
          <div className="grid grid-cols-3 gap-5 px-3 mt-2 mb-4">
            <div className="bg-gray-200 flex items-center justify-between text-white py-2 px-1  rounded-md">
              <div className="text-[10px] text-gray-700">1</div>
              <div className="text-[10px] text-gray-700">5.00</div>
            </div>
            <div className="bg-gray-200 flex items-center justify-between text-white py-2 px-1  rounded-md">
              <div className="text-[10px] text-gray-700">x</div>
              <div className="text-[10px] text-gray-700">5.00</div>
            </div>
            <div className="bg-gray-200 flex items-center justify-between text-white py-2 px-1  rounded-md">
              <div className="text-[10px] text-gray-700">2</div>
              <div className="text-[10px] text-gray-700">5.00</div>
            </div>
          </div>
          </div>
          <div>
            <div className="bg-[#3c2464] text-white px-3 py-2 text-xs font-medium flex items-center gap-2">
            <img src={map} alt="U19" className="w-4 h-4" />
            FFA Cup Qualifying
          </div>

          {/* Match Row */}
          <div className="bg-white px-3 py-2 grid grid-cols-5 gap-4 items-center text-center text-sm font-medium border-t border-gray-200">
            <div className="col-span-2 text-gray-600 text-xs text-start">Antalyaspor (U19)</div>
            <div className="col-span-1">
              <span className="text-red-600 text-xs font-semibold">80'</span>
              <div className="flex justify-center items-center gap-3">
                <span className="text-[#3B2864] text-lg font-bold">1</span>
                <span className="border border-gray-200 h-6"></span>
                <span className="text-[#3B2864] text-lg font-bold">2</span>
              </div>
            </div>
            <div className="col-span-2 text-gray-600 text-xs text-end">Trabzonspor (U19)</div>
          </div>

          {/* Betting Odds */}
          <div className="grid grid-cols-3 gap-5 px-3 mt-2 mb-4">
            <div className="bg-gray-200 flex items-center justify-between text-white py-2 px-1  rounded-md">
              <div className="text-[10px] text-gray-700">1</div>
              <div className="text-[10px] text-gray-700">5.00</div>
            </div>
            <div className="bg-gray-200 flex items-center justify-between text-white py-2 px-1  rounded-md">
              <div className="text-[10px] text-gray-700">x</div>
              <div className="text-[10px] text-gray-700">5.00</div>
            </div>
            <div className="bg-gray-200 flex items-center justify-between text-white py-2 px-1  rounded-md">
              <div className="text-[10px] text-gray-700">2</div>
              <div className="text-[10px] text-gray-700">5.00</div>
            </div>
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
      </div>
    </div>
  );
};

export default LiveSidebar;
