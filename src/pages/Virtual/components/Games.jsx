import React, { useState } from 'react'
import games from '../../../data/virtual/games.json'

const Games = () => {
  const [visibleCount, setVisibleCount] = useState(40)

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 40)
  }

  const visibleGames = games.slice(0, visibleCount)

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleGames.map((game, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-[40%] w-full bg-black bg-opacity-70 text-white text-center p-2 opacity-0 group-hover:opacity-100 transition duration-300">
              {game.name}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < games.length && (
        <div className="mt-6 text-center">
<button
  onClick={handleLoadMore}
  className="bg-gradient-to-b from-white to-blue-100 hover:from-[#150443] hover:to-[#150443] text-black hover:text-white font-medium py-2 px-6 w-[100%] rounded-lg shadow transition duration-300"
>
Daha Fazla Gör
</button>

        </div>
      )}
    </div>
  )
}

export default Games
