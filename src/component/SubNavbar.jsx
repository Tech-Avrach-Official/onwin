import React from 'react';
import { Link } from "react-router-dom";
import call from "../assets/call.svg";
import demo from "../assets/demo.svg";

const SubNavbar = () => {
    const menuItems = [
        // { label: "", path: "/" },
        { label: "Bahis", path: "/betting" },
        { label: "Canlı Bahis", path: "/live" },
        { label: "Canlı Casino", path: "/live-casino" },
        { label: "Solt", path: "/casino" },
        { label: "Sanal Bahis", path: "/virtual" },
        { label: "OnwinX", path: "/login" },
        { label: "Oyunlar", path: "/games" },
        { label: "Parlaybay", path: "/parlayboy" },
        { label: "Tombala", path: "/login" }, // Update path if available
        { label: "Esports", path: "/esports" }, // Update path if available
    ];

  return (
    <div className='xl:px-28 bg-white'>
      <div className='flex items-center justify-center'>
        <Link to="/">
        <div className='bg-[#C625AC] text-white p-3'>
          <img src={demo} alt="call" className="w-6" />
        </div>
        </Link>
        <div className='flex items-center justify-center overflow-x-auto'>
          {menuItems.map((item, index) => (
            <Link to={item.path} key={index}>
              <div className='flex items-center justify-center whitespace-nowrap cursor-pointer group hover:bg-[#C625AC] duration-300 py-3 px-3 gap-3'>
                <img src={demo} alt="icon" className="w-6" />
                <p className='text-sm group-hover:text-white font-semibold text-gray-500'>{item.label}</p>
              </div>
            </Link>
          ))}
          <Link to="/promotions"> {/* Adjust path if needed */}
            <div className='cursor-pointer group hover:bg-[#C625AC] duration-300 py-1 px-3'>
              <div className='flex items-center justify-center gap-1 p-1 border border-gray-200 hover:border-[#C625AC] rounded-md'>
                <img src={demo} alt="icon" className="w-6" />
                <p className='text-sm group-hover:text-white font-semibold text-gray-500'>Promotions</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
