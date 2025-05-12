import React from "react";
import Logo from "../assets/logo.svg";
import call from "../assets/call.svg";
import tv from "../assets/tv.svg";
import tr from "../assets/tr.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-5 md:px-28 border-t-2 border-[#C625AC] flex justify-between items-center py-5 bg-[#201633] text-white">
      <div>
        <img src={Logo} alt="Logo" className="w-28 md:w-36" />
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="hidden md:flex items-center justify-center gap-3">
          <div>
            <a href="#" className="text-lg">
              Kayıp bonusu al
            </a>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <img src={call} alt="call" className="w-9" />
            <a href="#" className="text-xs text-white leading-3">
              sizi <br /> ARAYALIM
            </a>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <img src={tv} alt="call" className="w-9" />
            <a href="#" className="text-xs text-white leading-3">
              ONWIN TV <br /> CANLI İZLE
            </a>
          </div>
          <div>
            <img src={tr} alt="call" className="w-6 rounded-full" />
          </div>
        </div>
        <div className="flex gap-2">
          <Link to="/register">
            <button className="text-sm md:text-base bg-gradient-to-t from-gray-500 to-gray-200 text-black font-bold md:px-8 px-5 py-2 rounded">
              KAYIT OL
            </button>
          </Link>
          <Link to="/login">
            <button className="text-sm md:text-base bg-gradient-to-t from-yellow-600 to-yellow-300 text-black font-bold md:px-8 px-5 py-2 rounded">
              GİRİŞ YAP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
