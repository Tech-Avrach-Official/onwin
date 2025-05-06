import React from 'react'
import call from "../assets/call.svg";
import demo from "../assets/demo.svg";

const SubNavbar = () => {
  return (
    <div className='px-28 bg-white '>
        <div className='flex items-center justify-center gap-2'>
            <div className='bg-[#C625AC] text-white p-3'>
                <img src={demo} alt="call" className="w-6" />
            </div>
            <div className='flex items-center justify-center'>
                <div className='flex items-center justify-center whitespace-nowrap cursor-pointer group hover:bg-[#C625AC] duration-300 py-3 px-3 gap-3'>
                    <img src={demo} alt="call" className="w-6" />
                    <p className='text-sm group-hover:text-white font-semibold text-gray-500'>Bahis</p>
                </div>
                <div className='flex items-center justify-center whitespace-nowrap cursor-pointer group hover:bg-[#C625AC] duration-300 py-3 px-3 gap-3'>
                    <img src={demo} alt="call" className="w-6" />
                    <p className='text-sm group-hover:text-white font-semibold text-gray-500'>Canlı Bahis </p>
                </div>
                <div className='flex items-center justify-center whitespace-nowrap cursor-pointer group hover:bg-[#C625AC] duration-300 py-3 px-3 gap-3'>
                    <img src={demo} alt="call" className="w-6" />
                    <p className='text-sm group-hover:text-white font-semibold text-gray-500'>Canlı Casino</p>
                </div>
                <div className='flex items-center justify-center whitespace-nowrap cursor-pointer group hover:bg-[#C625AC] duration-300 py-3 px-3 gap-3'>
                    <img src={demo} alt="call" className="w-6" />
                    <p className='text-sm group-hover:text-white font-semibold text-gray-500'>Solt</p>
                </div>
                <div className='flex items-center justify-center whitespace-nowrap cursor-pointer group hover:bg-[#C625AC] duration-300 py-3 px-3 gap-3'>
                    <img src={demo} alt="call" className="w-6" />
                    <p className='text-sm group-hover:text-white font-semibold text-gray-500'>Sanal Bahis</p>
                </div>
                <div className='flex items-center justify-center whitespace-nowrap cursor-pointer group hover:bg-[#C625AC] duration-300 py-3 px-3 gap-3'>
                    <img src={demo} alt="call" className="w-6" />
                    <p className='text-sm group-hover:text-white font-semibold text-gray-500'>OnwinX</p>
                </div>
                <div className='flex items-center justify-center whitespace-nowrap cursor-pointer group hover:bg-[#C625AC] duration-300 py-3 px-3 gap-3'>
                    <img src={demo} alt="call" className="w-6" />
                    <p className='text-sm group-hover:text-white font-semibold text-gray-500'>Oyunlar</p>
                </div>
                <div className='flex items-center justify-center whitespace-nowrap cursor-pointer group hover:bg-[#C625AC] duration-300 py-3 px-3 gap-3'>
                    <img src={demo} alt="call" className="w-6" />
                    <p className='text-sm group-hover:text-white font-semibold text-gray-500'>Parlaybay</p>
                </div>
                <div className='flex items-center justify-center whitespace-nowrap cursor-pointer group hover:bg-[#C625AC] duration-300 py-3 px-3 gap-3'>
                    <img src={demo} alt="call" className="w-6" />
                    <p className='text-sm group-hover:text-white font-semibold text-gray-500'>Tombala</p>
                </div>
                <div className='flex items-center justify-center whitespace-nowrap cursor-pointer group hover:bg-[#C625AC] duration-300 py-3 px-3 gap-3'>
                    <img src={demo} alt="call" className="w-6" />
                    <p className='text-sm group-hover:text-white font-semibold text-gray-500'>Esports</p>
                </div>
                <div className='cursor-pointer group hover:bg-[#C625AC] duration-300 py-1 px-3'>
                   <div className='flex items-center justify-center gap-1 p-1 border border-gray-200 hover:border-[#C625AC] rounded-md'>
                   <img src={demo} alt="call" className="w-6" />
                   <p className='text-sm group-hover:text-white font-semibold text-gray-500'>Esports</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubNavbar