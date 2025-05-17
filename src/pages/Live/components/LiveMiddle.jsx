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
import { useSite } from "@/context/SiteContext";

const LiveMiddle = () => {
  const [isTopChampionshipsOpen, setIsTopChampionshipsOpen] = useState(true);
  const { language } = useSite()
  return (
    <div>
      <div>
        <Collapsible
          open={isTopChampionshipsOpen}
          onOpenChange={setIsTopChampionshipsOpen}
        >
          <CollapsibleTrigger className="flex justify-between rounded-t-md items-center w-full bg-[#3B2864] text-white px-4 py-4">

            <div className="flex items-center justify-center gap-5 font-medium text-sm"><p className="text-xs font-medium bg-[#4aff2128] rounded-sm text-green-600 border border-green-600 py-1 px-2">LIVE</p> {language === 'turkish' ? 'Spor Bahisleri' : 'Sports Betting'}</div>
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
              {language === 'turkish' ? "Daha Fazla Yükle" : "Load more"}
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
  const {language}=useSite();


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

 

// const DummyUi = () => {
//   const { language } = useSite();

//   const matchData = {
//     sport: {
//       id: "soccer",
//       title: "Soccer, Super Liga",
//       icons: {
//         sport: soccer,
//         country: map,
//       },
//       bettingOptions: ["1", "X", "2", "1X", "X2", "12"],
//       matches: [
//         {
//           id: "match1",
//           status: "LIVE",
//           statusStyle: {
//             bgColor: "#4aff2128",
//             textColor: "text-green-600",
//             borderColor: "border-green-600",
//           },
//           teams: ["Kawasaki Frontale", "Yokohama FC"],
//           scores: [1, 0],
//           time: "35'",
//           period: "1ST HALF",
//           statsIcons: ["Star", "Pin", "Pin", "BarChart3", "BarChart3"],
//           scoreBoxes: [1, 0],
//           betsCount: 641,
//           odds: [2.23, 2.23, 2.23, 2.23, 2.23, 2.23, 2.23],
//         },
//         {
//           id: "match2",
//           status: "LIVE",
//           statusStyle: {
//             bgColor: "#4aff2128",
//             textColor: "text-green-600",
//             borderColor: "border-green-600",
//           },
//           teams: ["Kawasaki Frontale", "Yokohama FC"],
//           scores: [1, 0],
//           time: "35'",
//           period: "1ST HALF",
//           statsIcons: ["Star", "Pin", "Pin", "BarChart3", "BarChart3"],
//           scoreBoxes: [1, 0],
//           betsCount: 641,
//           odds: [2.23, 2.23, 2.23, 2.23, 2.23, 2.23, 2.23],
//         },
//       ],
//     },
//   };

//   const sport = matchData.sport;

//   const iconComponents = {
//     Star: Star,
//     Pin: Pin,
//     BarChart3: BarChart3,
//   };

//   return (
//     <div>
//       {/* Header */}
//       <div className="flex items-center justify-between bg-[#3B2864] text-white py-2 pl-3">
//         <div className="flex items-center">
//           <div className="mr-2">
//             <img src={sport.icons.sport} alt="" className="w-5" />
//           </div>
//           <div className="flex items-center mr-2">
//             <img src={sport.icons.country} alt="" className="w-5" />
//           </div>
//           <span className="font-medium text-xs">{sport.title}</span>
//         </div>
//         <div className="flex items-center font-medium text-xs">
//           {sport.bettingOptions.map((opt) => (
//             <div key={opt} className="text-center w-14">
//               {opt}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Matches */}
//       <div>
//         {sport.matches.map((match) => (
//           <div
//             key={match.id}
//             className="h-full border-b border-gray-200 flex items-center justify-between gap-5"
//           >
//             <div className="h-16 flex items-center gap-2">
//               <div
//                 style={{
//                   backgroundColor: match.statusStyle.bgColor,
//                   borderColor: match.statusStyle.borderColor.replace("border-", ""),
//                 }}
//                 className={`-rotate-90 text-xs font-medium rounded-md py-[1px] px-3 ${match.statusStyle.textColor} border`}
//               >
//                 {match.status}
//               </div>

//               <div className="w-32 mr-10">
//                 <p className="text-xs text-[#3B2864] font-medium">{match.teams[0]}</p>
//                 <p className="text-xs text-[#3B2864] font-medium line-clamp-1">
//                   {match.teams[1]}
//                 </p>
//               </div>

//               <div className="mr-3">
//                 <div className="flex gap-1">
//                   {match.statsIcons.map((iconName, i) => {
//                     const Icon = iconComponents[iconName];
//                     return <Icon key={i} size={19} className="text-[#3B2864]" />;
//                   })}
//                 </div>
//                 <div>
//                   <p className="text-[10px] text-end mt-1 text-green-600 font-semibold">
//                     <span className="text-xs font-bold text-red-500">{match.time}</span>
//                     {match.period}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-1">
//                 {match.scoreBoxes.map((score, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center justify-center w-4 h-4 text-xs font-bold text-white rounded-[2px] bg-pink-600"
//                   >
//                     {score}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex items-center justify-center h-14">
//               <div className="flex items-center justify-center h-full px-4 text-xs font-medium">
//                 <p>{match.betsCount}</p>
//                 <ChevronDown className="h-4 w-4 ml-1 text-[#3B2864]" />
//               </div>
//               {match.odds.map((odd, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center justify-center h-full w-14 text-xs font-medium"
//                 >
//                   {odd}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


