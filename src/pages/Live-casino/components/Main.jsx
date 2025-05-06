import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SubHeader from "./SubHeader";
import CardGrid from "./CardGrid";
import DummyImg from "../../../assets/live-casino/dummy.png"

const Main = () => {
  const [activeProvider, setActiveProvider] = useState("Ninja-gaming-lc");

  // You can later dynamically filter cards based on `activeProvider`
  const cards = [
    {
      image: DummyImg,
      title: "Türkçe Blackjack 1"
    },
    {
      image: DummyImg,
      title: "Türkçe Tek Box Blackjack"
    },
    {
      image: DummyImg,
      title: "Türkçe Rulet 1"
    },
    {
      image: DummyImg,
      title: "Roulette 2"
    },
    {
      image: DummyImg,
      title: "Blackjack 1"
    },
    {
      image: DummyImg,
      title: "One Box Blackjack 1"
    },
    {
      image: DummyImg,
      title: "Türkçe Blackjack 2"
    },
    {
      image: DummyImg,
      title: "Blackjack 2"
    },
    {
      image: DummyImg,
      title: "Blackjack 3"
    },
    {
      image: DummyImg,
      title: "Blackjack 4"
    },
    {
        image: DummyImg,
        title: "Türkçe Blackjack 1"
      },
      {
        image: DummyImg,
        title: "Türkçe Tek Box Blackjack"
      },
      {
        image: DummyImg,
        title: "Türkçe Rulet 1"
      },
      {
        image: DummyImg,
        title: "Roulette 2"
      },
      {
        image: DummyImg,
        title: "Blackjack 1"
      },
      {
        image: DummyImg,
        title: "One Box Blackjack 1"
      },
      {
        image: DummyImg,
        title: "Türkçe Blackjack 2"
      },
      {
        image: DummyImg,
        title: "Blackjack 2"
      },
      {
        image: DummyImg,
        title: "Blackjack 3"
      },
      {
        image: DummyImg,
        title: "Blackjack 4"
      },
      
  ];

  return (
    <div className="flex gap-2 h-screen bg-[#f2f2f2] ">
      {/* Sidebar (17%) */}
      <div className="w-[17%]">
        <Sidebar />
      </div>

      {/* Main content (remaining) */}
      <div className="w-[83%] overflow-y-auto">
        {/* Sub-header with filters */}
        <SubHeader activeProvider={activeProvider} setActiveProvider={setActiveProvider} />

        {/* Game cards grid */}
        <CardGrid cards={cards} />
      </div>
    </div>
  );
};

export default Main;
