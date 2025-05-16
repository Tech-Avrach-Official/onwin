import React from "react";

const mockCards = [
  {
    image: "/images/cards/blackjack-turkce.png",
    title: "Türkçe Blackjack 1"
  },
  {
    image: "/images/cards/tekbox.png",
    title: "Türkçe Tek Box Blackjack"
  },
  {
    image: "/images/cards/roulette-turkce.png",
    title: "Türkçe Rulet 1"
  },
  {
    image: "/images/cards/roulette-2.png",
    title: "Roulette 2"
  },
  {
    image: "/images/cards/blackjack.png",
    title: "Blackjack 1"
  },
  {
    image: "/images/cards/onebox.png",
    title: "One Box Blackjack 1"
  },
  {
    image: "/images/cards/blackjack2.png",
    title: "Türkçe Blackjack 2"
  },
  {
    image: "/images/cards/blackjack3.png",
    title: "Blackjack 2"
  },
  {
    image: "/images/cards/blackjack4.png",
    title: "Blackjack 3"
  },
  {
    image: "/images/cards/blackjack5.png",
    title: "Blackjack 4"
  }
];

const CardGrid = ({ cards = mockCards }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-sm shadow hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden cursor-pointer"
        >
          <div className="p-2">
  <img src={card.image} alt={card.title} className="w-full h-36 object-cover rounded" />
</div>
          <div className="p-2 text-center text-sm font-semibold">{card.title}</div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
