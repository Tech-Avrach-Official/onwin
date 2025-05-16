import React from 'react';
import { Link } from "react-router-dom";
import call from "../assets/call.svg";
import demo from "../assets/demo.svg";

const SubNavbar = () => {
  // Read language from localStorage or default to "turkish"
  const language = localStorage.getItem('language') || 'turkish';

  const menuItems = [
    { label: "Bahis", path: "/betting", image: '/subNavbar/image2.png' },
    { label: "Canlı Bahis", path: "/live", image: '/subNavbar/image3.png' },
    { label: "Canlı Casino", path: "/live-casino", image: '/subNavbar/image4.png' },
    { label: "Solt", path: "/casino", image: '/subNavbar/image5.png' },
    { label: "Sanal Bahis", path: "/virtual", image: '/subNavbar/image7.png' },
    { label: "OnwinX", path: "/login", image: '/subNavbar/image8.png' },
    { label: "Oyunlar", path: "/games", image: '/subNavbar/image9.png' },
    { label: "Parlaybay", path: "/parlayboy", image: '/subNavbar/image10.png' },
    { label: "Tombala", path: "/login", image: demo },
    { label: "Esports", path: "/esports", image: '/subNavbar/image11.png' },
  ];

  const menuItemsEn = [
    { label: "Betting", path: "/betting", image: '/subNavbar/image2.png' },
    { label: "Live Betting", path: "/live", image: '/subNavbar/image3.png' },
    { label: "Live Casino", path: "/live-casino", image: '/subNavbar/image4.png' },
    { label: "Slot", path: "/casino", image: '/subNavbar/image5.png' },
    { label: "Virtual Betting", path: "/virtual", image: '/subNavbar/image7.png' },
    { label: "OnwinX", path: "/login", image: '/subNavbar/image8.png' },
    { label: "Games", path: "/games", image: '/subNavbar/image9.png' },
    { label: "Parlaybay", path: "/parlayboy", image: '/subNavbar/image10.png' },
    { label: "Tombola", path: "/login", image: demo },
    { label: "Esports", path: "/esports", image: '/subNavbar/image11.png' },
  ];


  // Helper to append lang query param
  const withLangParam = (path) => {
    // Check if path already has query params
    const separator = path.includes('?') ? '&' : '?';
    return `${path}${separator}lang=${language}`;
  };
  if (language === 'turkish') {
    return (
      <div className='xl:px-28 bg-white'>
        <div className='flex items-center justify-center'>
          <Link to={withLangParam('/')}>
            <div className='bg-[#C625AC] text-white p-3'>
              <img src={'/subNavbar/image1.png'} alt="call" className="w-6" />
            </div>
          </Link>
          <div className='flex items-center justify-center overflow-x-auto'>
            {menuItems.map((item, index) => (
              <Link to={withLangParam(item.path)} key={index}>
                <div className='flex items-center justify-center whitespace-nowrap cursor-pointer group hover:bg-[#C625AC] duration-300 py-3 px-3 gap-3'>
                  <img src={item.image} alt="icon" className="w-6" />
                  <p className='text-sm group-hover:text-white font-semibold text-gray-500'>{item.label}</p>
                </div>
              </Link>
            ))}
            <Link to={withLangParam('/promotions')}>
              <div className='cursor-pointer group hover:bg-[#C625AC] duration-300 py-1 px-3'>
                <div className='flex items-center justify-center gap-1 p-1 border border-gray-200 hover:border-[#C625AC] rounded-md'>
                  <img src={'/subNavbar/image12.png'} alt="icon" className="w-6" />
                  <p className='text-sm group-hover:text-white font-semibold text-gray-500'>Promotions</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='xl:px-28 bg-white'>
        <div className='flex items-center justify-center'>
          <Link to={withLangParam('/')}>
            <div className='bg-[#C625AC] text-white p-3'>
              <img src={'/subNavbar/image1.png'} alt="call" className="w-6" />
            </div>
          </Link>
          <div className='flex items-center justify-center overflow-x-auto'>
            {menuItemsEn.map((item, index) => (
              <Link to={withLangParam(item.path)} key={index}>
                <div className='flex items-center justify-center whitespace-nowrap cursor-pointer group hover:bg-[#C625AC] duration-300 py-3 px-3 gap-3'>
                  <img src={item.image} alt="icon" className="w-6" />
                  <p className='text-sm group-hover:text-white font-semibold text-gray-500'>{item.label}</p>
                </div>
              </Link>
            ))}
            <Link to={withLangParam('/promotions')}>
              <div className='cursor-pointer group hover:bg-[#C625AC] duration-300 py-1 px-3'>
                <div className='flex items-center justify-center gap-1 p-1 border border-gray-200 hover:border-[#C625AC] rounded-md'>
                  <img src={'/subNavbar/image12.png'} alt="icon" className="w-6" />
                  <p className='text-sm group-hover:text-white font-semibold text-gray-500'>Promotions</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default SubNavbar;
