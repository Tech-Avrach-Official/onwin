import React from 'react'
import JackportImg from '@/assets/casino/jackpot.png'

const TopStripImg = () => {
  return (
    <div className=" flex items-center justify-center pt-8">
      <div className="bg-white p-4 w-[80%] rounded-xl flex items-center justify-center h-[70px]">
        <img src={JackportImg} alt="Jackpot Display" className="w-full" />
      </div>
    </div>
  )
}

export default TopStripImg