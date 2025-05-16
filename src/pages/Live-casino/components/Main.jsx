import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import SubHeader from "./SubHeader";
import CardGrid from "./CardGrid";
import DummyImg from "../../../assets/live-casino/dummy.png"
import Games from "@/data/live-casino/games.json";

const Main = ({ activeProvider, setActiveProvider }) => {
  

  // You can later dynamically filter cards based on `activeProvider`
  const cards = Games

    const [visibleCount, setVisibleCount] = useState(20)
    const [visibleGames, setVisibleGames] = useState(cards.slice(0, visibleCount))


    useEffect(() => {
      // shuffel the position of the cards
      const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
      setVisibleGames(shuffledCards.slice(0, visibleCount))
    }, [activeProvider])

    useEffect(() => {
      setVisibleGames(cards.slice(0, visibleCount))
    }, [visibleCount])
      
      const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 20)
      }
    

  return (
    <div className="flex gap-2 px-5 h-screen bg-[#f2f2f2] ">
      {/* Sidebar (17%) */}
      <div className="hidden lg:block w-[17%]">
        <Sidebar activeProvider={activeProvider} setActiveProvider={setActiveProvider}/>
      </div>

      {/* Main content (remaining) */}
      <div className="w-full lg:w-[83%] overflow-y-auto">
        {/* Sub-header with filters */}
       <div className="hidden lg:block">
         <SubHeader activeProvider={activeProvider} setActiveProvider={setActiveProvider} />
       </div>

        {/* Game cards grid */}
        <CardGrid cards={visibleGames} />

              {visibleCount < cards.length && (
                <div className="mt-6 text-center">
        <button
          onClick={handleLoadMore}
          className="bg-gradient-to-b from-white to-blue-100 hover:from-[#150443] hover:to-[#150443] text-black hover:text-white font-medium py-2 px-6 w-[100%] rounded-lg shadow transition duration-300 mb-5"
        >
        Daha Fazla Gör
        </button>
        
                </div>
              )}
      </div>
    </div>
  );
};

export default Main;
