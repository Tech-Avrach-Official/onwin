import { ClipboardList, Search, TicketsPlane } from 'lucide-react'
import React from 'react'

const TabBottomBar = () => {
  return (
    <div className='bg-[#200B4D] sticky bottom-0 grid grid-cols-5 items-center justify-center py-2 mt-5 w-full'>
        <div>
            <p className='text-white text-center text-sm font-semibold'>AZ</p>
            <p className='text-white text-center text-xs'>Tum Aporlar</p>
        </div>
        <div>
            <Search size={20} className='text-white mx-auto' />
            <p className='text-white text-center text-xs'>Arama Yap</p>
        </div>
        <div className='flex flex-col items-center'>
            <p className='flex justify-center items-center text-white bg-[#C625AC] w-5 h-5 rounded-full border border-white text-center text-xs font-semibold'>2</p>
            <p className='text-white text-center text-xs'>Tum Aporlar</p>
        </div>
        <div>
           <ClipboardList size={20} className='text-white mx-auto'/>
            <p className='text-white text-center text-xs'>Tum Aporlar</p>
        </div>
        <div>
           <TicketsPlane size={20} className='text-white mx-auto -rotate-12' />
            <p className='text-white text-center text-xs'>Canli</p>
        </div>
    </div>
  )
}

export default TabBottomBar