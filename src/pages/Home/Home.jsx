import React from "react";
import TabCards from "./components/TabCards";
import SocialIcons from "./components/SocialIcons";
import Navbar from "@/component/Navbar";
import SubNavbar from "@/component/SubNavbar";
import Carousel from "@/component/Carousel";
import Footer from "@/component/Footer";
import MobileSubNavbar from "@/component/MobileSubNavbar";
import TabCardsCarousel from "./components/TabCardsCarousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hidden lg:block">
        <SubNavbar />
      </div>
      <Carousel />
     <div className="hidden md:block">
       <TabCards />
     </div>
      <div className="md:hidden">
        <TabCardsCarousel/>
      </div>
      <div className="block lg:hidden">
        <MobileSubNavbar />
      </div>
      <SocialIcons />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
