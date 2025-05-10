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
import SportsCarousel from "./SportsCarousel";
import map from "@/assets/map.png";
import soccer from "@/assets/soccer.png";

const SportsMiddle = () => {
  const [isTopChampionshipsOpen, setIsTopChampionshipsOpen] = useState(true);
  return (
    <div>
      <div>
        <Collapsible
          open={isTopChampionshipsOpen}
          onOpenChange={setIsTopChampionshipsOpen}
        >
          <CollapsibleTrigger className="flex justify-between rounded-t-md items-center w-full bg-[#3B2864] text-white px-4 py-4">
            <span className="font-medium text-sm">Sports Betting</span>
            {isTopChampionshipsOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-white border-b overflow-hidden w-full max-w-full ">
            {/* <div className="py-4 px-4 flex flex-col gap-4">
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
                    </div> */}
            <div>
              {" "}
              <SportsCarousel />
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

export default SportsMiddle;

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
        <div className="border-b h-full border-gray-200 flex items-center justify-between gap-5">
          <div className="h-14 pl-4 flex items-center gap-5">
            <div className="mr-4">
              <p className="text-[10px] text-gray-400">11.05.25</p>
              <p className="text-[10px] text-gray-400">6:00 PM</p>
            </div>
            <div className="w-40">
              <p className="text-xs text-[#3B2864] font-medium">Sivasspor</p>
              <p className="text-xs text-[#3B2864] font-medium line-clamp-1">
                Bodrum Belediyesi Bordrums ddddd
              </p>
            </div>
            <div className="flex gap-1">
              <Star size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
            </div>
          </div>
          <div className="flex items-center justify-center h-14">
            <div className="flex items-center justify-center h-full px-4 text-xs font-medium border-x border-gray-200">
                <p>641</p>
                <ChevronDown className="h-4 w-4 ml-1 text-[#3B2864]" />
            </div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
          </div>
        </div>
        <div className="border-b h-full border-gray-200 flex items-center justify-between gap-5">
          <div className="h-14 pl-4 flex items-center gap-5">
            <div className="mr-4">
              <p className="text-[10px] text-gray-400">11.05.25</p>
              <p className="text-[10px] text-gray-400">6:00 PM</p>
            </div>
            <div className="w-40">
              <p className="text-xs text-[#3B2864] font-medium">Sivasspor</p>
              <p className="text-xs text-[#3B2864] font-medium line-clamp-1">
                Bodrum Belediyesi Bordrums ddddd
              </p>
            </div>
            <div className="flex gap-1">
              <Star size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
            </div>
          </div>
          <div className="flex items-center justify-center h-14">
            <div className="flex items-center justify-center h-full px-4 text-xs font-medium border-x border-gray-200">
                <p>641</p>
                <ChevronDown className="h-4 w-4 ml-1 text-[#3B2864]" />
            </div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
          </div>
        </div>
        <div className="border-b h-full border-gray-200 flex items-center justify-between gap-5">
          <div className="h-14 pl-4 flex items-center gap-5">
            <div className="mr-4">
              <p className="text-[10px] text-gray-400">11.05.25</p>
              <p className="text-[10px] text-gray-400">6:00 PM</p>
            </div>
            <div className="w-40">
              <p className="text-xs text-[#3B2864] font-medium">Sivasspor</p>
              <p className="text-xs text-[#3B2864] font-medium line-clamp-1">
                Bodrum Belediyesi Bordrums ddddd
              </p>
            </div>
            <div className="flex gap-1">
              <Star size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
            </div>
          </div>
          <div className="flex items-center justify-center h-14">
            <div className="flex items-center justify-center h-full px-4 text-xs font-medium border-x border-gray-200">
                <p>641</p>
                <ChevronDown className="h-4 w-4 ml-1 text-[#3B2864]" />
            </div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
          </div>
        </div>
        <div className="border-b h-full border-gray-200 flex items-center justify-between gap-5">
          <div className="h-14 pl-4 flex items-center gap-5">
            <div className="mr-4">
              <p className="text-[10px] text-gray-400">11.05.25</p>
              <p className="text-[10px] text-gray-400">6:00 PM</p>
            </div>
            <div className="w-40">
              <p className="text-xs text-[#3B2864] font-medium">Sivasspor</p>
              <p className="text-xs text-[#3B2864] font-medium line-clamp-1">
                Bodrum Belediyesi Bordrums ddddd
              </p>
            </div>
            <div className="flex gap-1">
              <Star size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
            </div>
          </div>
          <div className="flex items-center justify-center h-14">
            <div className="flex items-center justify-center h-full px-4 text-xs font-medium border-x border-gray-200">
                <p>641</p>
                <ChevronDown className="h-4 w-4 ml-1 text-[#3B2864]" />
            </div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
          </div>
        </div>
        <div className="border-b h-full border-gray-200 flex items-center justify-between gap-5">
          <div className="h-14 pl-4 flex items-center gap-5">
            <div className="mr-4">
              <p className="text-[10px] text-gray-400">11.05.25</p>
              <p className="text-[10px] text-gray-400">6:00 PM</p>
            </div>
            <div className="w-40">
              <p className="text-xs text-[#3B2864] font-medium">Sivasspor</p>
              <p className="text-xs text-[#3B2864] font-medium line-clamp-1">
                Bodrum Belediyesi Bordrums ddddd
              </p>
            </div>
            <div className="flex gap-1">
              <Star size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
            </div>
          </div>
          <div className="flex items-center justify-center h-14">
            <div className="flex items-center justify-center h-full px-4 text-xs font-medium border-x border-gray-200">
                <p>641</p>
                <ChevronDown className="h-4 w-4 ml-1 text-[#3B2864]" />
            </div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
          </div>
        </div>
        <div className="border-b h-full border-gray-200 flex items-center justify-between gap-5">
          <div className="h-14 pl-4 flex items-center gap-5">
            <div className="mr-4">
              <p className="text-[10px] text-gray-400">11.05.25</p>
              <p className="text-[10px] text-gray-400">6:00 PM</p>
            </div>
            <div className="w-40">
              <p className="text-xs text-[#3B2864] font-medium">Sivasspor</p>
              <p className="text-xs text-[#3B2864] font-medium line-clamp-1">
                Bodrum Belediyesi Bordrums ddddd
              </p>
            </div>
            <div className="flex gap-1">
              <Star size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <Pin size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
              <BarChart3 size={19} className="text-[#3B2864]" />
            </div>
          </div>
          <div className="flex items-center justify-center h-14">
            <div className="flex items-center justify-center h-full px-4 text-xs font-medium border-x border-gray-200">
                <p>641</p>
                <ChevronDown className="h-4 w-4 ml-1 text-[#3B2864]" />
            </div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium border-r border-gray-200">2.23</div>
            <div className="flex items-center justify-center h-full w-14 text-xs font-medium">2.23</div>
          </div>
        </div>
      </div>
    </div>
  );
};
