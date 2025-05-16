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



const SideNavbar = () => {
  
  return (
    <div>
      <Sheet >
        <SheetTrigger>
         <Menu className="w-6 h-6 cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#201633] text-white">
          <SheetHeader>
            <VisuallyHidden>
              <SheetTitle>Sidebar Menu</SheetTitle>
            </VisuallyHidden>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="">
           <p className="text-xs font-semibold">Menu</p>
            <div className="flex flex-col gap-2">
                <div>
                    <img src="" alt="" />
                </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideNavbar;
