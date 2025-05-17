import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import dummy from '/subNavbar/image10.png';

const menuItems = [
  { label: "BAHİS", path: "/betting", icon: "fa-solid fa-futbol" },
  { label: "CANLI BAHİS", path: "/live", icon: "fa fa-stopwatch" },
  { label: "Esports", path: "/esports", icon: "fa fa-gamepad" },
  { label: "SANAL BAHİS", path: "/virtual", icon: "fab fa-cloudsmith" },
  { label: "CANLI CASİNO", path: "/live-casino", icon: "fa fa-dice-five" },
  { label: "Slot", path: "/casino", icon: "fa fa-coins" },
  { label: "JetX", path: "/", icon: " fa fa-chess-board" },
  { label: "Raptor", path: "/", icon: "fa fa-chess-board" },
  { label: "Zeplin", path: "/", icon: "fa fa-chess-board" },
  { label: "Spaceman", path: "/", icon: "fa fa-chess-board" },
  { label: "OnwinX", path: "/", icon: "fa fa-chess-board" },
  { label: "Oyunlar", path: "/games", icon: "fa-solid fa-triangle-exclamation" },
  { label: "Lotto", path: "/parlayboy", icon: "fa-brands fa-bots" },
  { label: "TOMBALA", path: "/login", icon: "fa fa-chess-board" },
  { label: "ZEPPELIN", path: "/login", icon: "fab fa-fly" },
  { label: "Spaceman", path: "/", icon: " fa-square" },
  { label: "PROMOSYONLAR", path: "/promotions", icon: "far fa-bullhorn" },
  { label: "Onwin TV", path: "/", icon: "fa fa-tv" },
];

const SideNavbar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="w-5 h-5 cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#201633] text-white">
          <SheetHeader>
            <VisuallyHidden>
              <SheetTitle>Sidebar Menu</SheetTitle>
            </VisuallyHidden>
            <SheetDescription />
          </SheetHeader>

          <div className="overflow-y-auto h-screen  pb-5">
            <p className="text-xs font-semibold">Menu</p>
            <div className="flex flex-col gap-4 mt-5">
              {menuItems.map((item, index) => (
                <Link to={item.path} key={index} className="flex items-center gap-2 hover:opacity-80">
                  {item.icon && <i className={`${item.icon} text-xl`}></i>}
                  <p className="text-sm font-normal">{item.label}</p>
                </Link>
              ))}
            </div>
            <div className="mt-5">
              <p className="text-xs font-semibold">Baglantilar</p>
              <div className="grid grid-cols-2 gap-2 my-5">
                <div className="py-2 text-sm border border-[#3B2864] bg-[#3b286467] rounded-md text-center">
                  Hakkimizda
                </div>
                <div className="py-2 text-sm border border-[#3B2864] bg-[#3b286467] rounded-md text-center">
                  Hakkimizda
                </div>
                <div className="py-2 text-sm border border-[#3B2864] bg-[#3b286467] rounded-md text-center">
                  Hakkimizda
                </div>
                <div className="py-2 text-sm border border-[#3B2864] bg-[#3b286467] rounded-md text-center">
                  Hakkimizda
                </div>
                <div className="py-2 text-sm border border-[#3B2864] bg-[#3b286467] rounded-md text-center">
                  Hakkimizda
                </div>
                <div className="py-2 text-sm border border-[#3B2864] bg-[#3b286467] rounded-md text-center">
                  Hakkimizda
                </div>
              </div>
              <p className="text-xs font-semibold">Sosyal Medya</p>
            </div>
            <div className="bg-white py-4 mt-2 rounded-md">

            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideNavbar;
