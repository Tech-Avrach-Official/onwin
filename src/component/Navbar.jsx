import React from "react";
import Logo from "../assets/logo.svg";
import call from "../assets/call.svg";
import tv from "../assets/tv.svg";
import tr from "../assets/tr.svg";
import en from "../assets/gb.svg";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Contact, Menu } from "lucide-react";
import { useSite } from "@/context/SiteContext";
import SideNavbar from "./SideNavbar";




const Navbar = () => {

  const { language, setLanguage } = useSite();

  const onLanguageChange = (value) => {
    setLanguage(value);
  };
  return (
    <div className="px-5 xl:px-28 border-t-2 border-[#C625AC] flex justify-between items-center py-5 bg-[#201633] text-white">
      <div className="flex items-center justify-center gap-2">
        <div className="md:hidden">
          <SideNavbar />
        </div>
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-20 md:w-36" />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="hidden md:flex items-center justify-center gap-3">
          <div>
            <a href="#" className="text-lg">

              {language === "turkish" ? "Kayıp bonusu al" : "Claim loss bonus"}
            </a>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <img src={call} alt="call" className="w-9" />
            <a href="#" className="text-xs text-white leading-3">
              {language === "turkish" ? (
                <>
                  sizi <br /> ARAYALIM
                </>
              ) : (
                <>
                  Let us <br /> call you
                </>
              )}


            </a>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <img src={tv} alt="call" className="w-9" />
            <a href="#" className="text-xs text-white leading-3">
              {language === "turkish" ? (
                <>
                  ONWIN TV <br /> CANLI İZLE
                </>
              ) : (
                <>
                  ONWIN TV <br /> Watch Live
                </>
              )}

            </a>
          </div>
          <div>
            <Select value={language} onValueChange={onLanguageChange}>
              <SelectTrigger className="w-auto p-0 border-none bg-transparent focus:ring-0 focus:ring-offset-0">
                <img src={language === "turkish" ? tr : en} alt="call" className="w-6 h-6 rounded-full cursor-pointer" />
              </SelectTrigger>
              <SelectContent className="bg-gradient-to-l from-[#3B2864] to-[#200B4D] text-white">
                <SelectItem value="turkish">Turkish</SelectItem>
                <SelectItem value="english">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-2">
          <Link to="/register">
            <button className="text-xs md:text-base bg-gradient-to-t from-gray-500 to-gray-200 text-black font-bold md:px-8 px-3 py-1 rounded">
              {language==="turkish"? "KAYIT OL":"Sign Up"}
            </button>
          </Link>
          <Link to="/login">
            <button className="text-xs md:text-base bg-gradient-to-t from-yellow-600 to-yellow-300 text-black font-bold md:px-8 px-3 py-1 rounded">
               
              {language==="turkish"? "GİRİŞ YAP":"Sign In"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
