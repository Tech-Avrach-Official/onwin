import React from "react";
import SportsSidebar from "./SportsSidebar";
import SportsMiddle from "./SportsMiddle";

const SportsBattingUi = () => {
  return (
    <div className="p-5 bg-slate-100 h-screen overflow-hidden">
    <div className="flex justify-between gap-2 w-full h-full">
      {/* Sidebar (scrollable) */}
      <div className="w-[80%] h-full flex gap-5 overflow-y-auto custom-scrollbar">
      <div className="w-[27.5%] h-full">
        <SportsSidebar />
      </div>
  
      {/* Middle (scrollable) */}
      <div className="w-[72.5%] h-full pr-2 min-w-0">
        <SportsMiddle />
      </div>
      </div>
  
      {/* Right - Bet Slip (fixed) */}
      <div className="w-[20%] h-full overflow-hidden">
        <div className="w-full bg-gray-100 rounded h-full flex flex-col">
          {/* Bonuses tab */}
          <div className="bg-[#3B2864] text-white text-sm font-medium py-2 rounded-lg text-center">
            BONUSES
          </div>
  
          {/* Bet slip tab */}
          <div className="bg-[#3B2864] text-white text-sm font-bold w-fit py-4 px-10 mt-2 rounded-t-md">
            Bet slip (0)
          </div>
  
          {/* Bet slip content */}
          <div className="bg-white p-4 rounded-b-md shadow-md">
            <p className="text-sm font-medium text-gray-700 mb-4">
              Você não selecionou , nenhuma aposta .
            </p>
  
            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <button className="bg-gradient-to-b from-[#4a3870] to-[#2b1c4b] text-white font-bold py-2 rounded-md shadow">
                Go to In-Play Bets
              </button>
              <button className="bg-gradient-to-b from-[#4a3870] to-[#2b1c4b] text-white font-bold py-2 rounded-md shadow">
                Go to Esport In-Play Bets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default SportsBattingUi;
