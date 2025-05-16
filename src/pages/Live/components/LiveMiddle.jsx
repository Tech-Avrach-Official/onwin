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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import map from "@/assets/map.png";
import soccer from "@/assets/soccer.png";
import LiveCarousel from "./LiveCarousel";

const LiveMiddle = () => {
  const [isTopChampionshipsOpen, setIsTopChampionshipsOpen] = useState(true);
  return (
    <div>
      <div>
        <Collapsible
          open={isTopChampionshipsOpen}
          onOpenChange={setIsTopChampionshipsOpen}
        >
          <CollapsibleTrigger className="flex justify-between rounded-t-md items-center w-full bg-[#3B2864] text-white px-4 py-4">
          
            <div className="flex items-center justify-center gap-5 font-medium text-sm"><p className="text-xs font-medium bg-[#4aff2128] rounded-sm text-green-600 border border-green-600 py-1 px-2">LIVE</p> Sports Betting</div>
            {isTopChampionshipsOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-white border-b overflow-hidden w-full max-w-full ">
            <div>
              {" "}
              <LiveCarousel />
            </div>
            <div>
              <DummyUi />
              <DummyUi />
              <DummyUi />
            </div>
            <div className="flex items-center justify-center mt-10 bg-[#3B2864] rounded-lg text-sm font-medium text-white py-3 pl-3">
                Load More
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default LiveMiddle;

const DummyUi = () => {
  const [favorited, setFavorited] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between bg-[#3B2864] text-white py-2 pl-3">
        <div className="flex items-center">
          <div className="mr-2">
            <img src={soccer} alt="" className="w-5" />
          </div>
          <div className="flex items-center mr-2">
            <img src={map} alt="" className="w-5" />
          </div>
          <span className="font-medium text-xs">Soccer, Super Liga</span>
        </div>
        <div className="flex items-center font-medium text-xs">
          <div className="text-center w-14">1</div>
          <div className="text-center w-14">X</div>
          <div className="text-center w-14">2</div>
          <div className="text-center w-14">1X</div>
          <div className="text-center w-14">X2</div>
          <div className="text-center w-14">12</div>
        </div>
      </div>
      <div>
        <div className="h-full border-b border-gray-200 flex items-center justify-between gap-5">
          <div className="h-16 flex items-center gap-2">
            <div className="-rotate-90">
             <p className="text-xs font-medium bg-[#4aff2128] rounded-md text-green-600 border border-green-600 py-[1px] px-3">LIVE</p>
            </div>
            <div className="w-32 mr-10">
              <p className="text-xs text-[#3B2864] font-medium">Kawasaki Frontale</p>
              <p className="text-xs text-[#3B2864] font-medium line-clamp-1">
                Yokohama FC
              </p>
            </div>
            <div className="mr-3">
             <div className="flex gap-1">
                 <Star size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
             </div>
             <div className="">
               <p className="text-[10px] text-end mt-1 text-green-600 font-semibold"> <span className="text-xs font-bold text-red-500">35'</span>1ST HALF</p>
             </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center w-4 h-4 text-xs font-bold text-white rounded-[2px] bg-pink-600">
                    1
                </div>
                <div className="flex items-center justify-center w-4 h-4 text-xs font-bold text-white rounded-[2px] bg-pink-600">
                    0
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-14">
            <div className="flex items-center justify-center h-full px-4 text-xs font-medium">
                <p>641</p>
                <ChevronDown className="h-4 w-4 ml-1 text-[#3B2864]" />
            </div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
          </div>
        </div>
        <div className="h-full border-b border-gray-200 flex items-center justify-between gap-5">
          <div className="h-16 flex items-center gap-2">
            <div className="-rotate-90">
             <p className="text-xs font-medium bg-[#4aff2128] rounded-md text-green-600 border border-green-600 py-[1px] px-3">LIVE</p>
            </div>
            <div className="w-32 mr-10">
              <p className="text-xs text-[#3B2864] font-medium">Kawasaki Frontale</p>
              <p className="text-xs text-[#3B2864] font-medium line-clamp-1">
                Yokohama FC
              </p>
            </div>
            <div className="mr-3">
             <div className="flex gap-1">
                 <Star size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
             </div>
             <div className="">
               <p className="text-[10px] text-end mt-1 text-green-600 font-semibold"> <span className="text-xs font-bold text-red-500">35'</span>1ST HALF</p>
             </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center w-4 h-4 text-xs font-bold text-white rounded-[2px] bg-pink-600">
                    1
                </div>
                <div className="flex items-center justify-center w-4 h-4 text-xs font-bold text-white rounded-[2px] bg-pink-600">
                    0
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-14">
            <div className="flex items-center justify-center h-full px-4 text-xs font-medium">
                <p>641</p>
                <ChevronDown className="h-4 w-4 ml-1 text-[#3B2864]" />
            </div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
          </div>
        </div>
       
      </div>
    </div>
  );
};
