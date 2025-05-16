import React from 'react';
import { Link, useLocation } from "react-router-dom";
import demo from "../assets/demo.svg";
import { useSite } from '@/context/SiteContext';

const SubNavbar = () => {
  const { language } = useSite();
  const location = useLocation(); // Get current path

  const menuItems = [
    { label: "", path: "/", image: '/subNavbar/image1.png' },
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
    { label: "Promotions", path: "/promotions", image: "/subNavbar/image12.png" }
  ];

  const menuItemsEn = [
    { label: "", path: "/", image: '/subNavbar/image1.png' },
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
    { label: "Promotions", path: "/promotions", image: "/subNavbar/image12.png" }
  ];

  const currentMenu = language === 'turkish' ? menuItems : menuItemsEn;

  return (
    <div className='xl:px-28 bg-white'>
      <div className='flex items-center justify-center overflow-x-auto'>
        {currentMenu.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Link to={item.path} key={index}>
              <div
                className={`flex items-center justify-center whitespace-nowrap cursor-pointer group duration-300 py-3 px-3 gap-3
                  ${isActive ? 'bg-[#C625AC]' : 'hover:bg-[#C625AC]'}
                `}
              >
                <img src={item.image} alt="icon" className="w-6" />
                {item.label && (
                  <p className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>
                    {item.label}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SubNavbar;
