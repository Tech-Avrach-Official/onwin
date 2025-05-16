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
  { label: "Bahis", path: "/betting", image: dummy },
  { label: "Canli Bahis", path: "/live", image: dummy },
  { label: "Esports", path: "/esports", image: dummy },
  { label: "Casino", path: "/casino", image: dummy },
  { label: "Oyunlar", path: "/games", image: dummy },
  { label: "Tombala", path: "/tombala", image: dummy },
  { label: "Bahis", path: "/betting", image: dummy },
  { label: "Canli Bahis", path: "/live", image: dummy },
  { label: "Esports", path: "/esports", image: dummy },
  { label: "Casino", path: "/casino", image: dummy },
  { label: "Oyunlar", path: "/games", image: dummy },
  { label: "Tombala", path: "/tombala", image: dummy },
  { label: "Tombala", path: "/tombala", image: dummy },
  { label: "Bahis", path: "/betting", image: dummy },
  { label: "Canli Bahis", path: "/live", image: dummy },
  { label: "Esports", path: "/esports", image: dummy },
  { label: "Casino", path: "/casino", image: dummy },
  { label: "Oyunlar", path: "/games", image: dummy },
  { label: "Tombala", path: "/tombala", image: dummy },
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
                  <img src={item.image} alt={item.label} className="w-6" />
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
