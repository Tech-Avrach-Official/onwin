import Carousel from "@/component/Carousel";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import SubNavbar from "@/component/SubNavbar";
import About from "@/pages/About/About";
import Betting from "@/pages/Betting/Betting";
import SportsBahis from "@/pages/Betting/components/MobileView/SportsBahis";
import SportsSearch from "@/pages/Betting/components/MobileView/SportsSearch";
import SpprtsSporlas from "@/pages/Betting/components/MobileView/SportsSporlar";
import Casino from "@/pages/Casino/Casino";
import EsportsSporlar from "@/pages/Esports/components/MobileView/EsportsSporlar";
import Esports from "@/pages/Esports/Esports";
import Games from "@/pages/Games/Games";
import Home from "@/pages/Home/Home";
import LiveCasino from "@/pages/Live-casino/LiveCasino";
import Live from "@/pages/Live/Live";
import Login from "@/pages/Login/Login";
import OnwinX from "@/pages/OnwinX/OnwinX";
import Parlayboy from "@/pages/Parlayboy/Parlayboy";
import Promptions from "@/pages/Promotions/Promotions";
import Register from "@/pages/Register/Register";
import Virtual from "@/pages/Virtual/Virtual";
import { Routes, Route } from "react-router-dom";
import GameScreen from "@/pages/GameScreen/GameScreen";

// home
// Betting
// Live
// LiveCasino
// Casino
// Virtual
// OnwinX
// Games
// Parlayboy
// Register
// Login


const AllRoutes = () => {
    return (

        <>
              {/* <Navbar />
    <SubNavbar />
  <Carousel /> */}

  <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/betting" element={<Betting/>} />
            <Route path="/live" element={<Live/>} />
            <Route path="/live-casino" element={<LiveCasino/>} />
            <Route path="/casino" element={<Casino/>} />
            <Route path="/virtual" element={<Virtual/>} />
            {/* <Route path="/onwinx" element={<OnwinX/>} /> */}
            <Route path="/games" element={<Games/>} />
            <Route path="/parlayboy" element={<Parlayboy/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/esports" element={<Esports/>} />
            <Route path="/promotions" element={<Promptions/>} />
            <Route path="/sportsbook" element={<SpprtsSporlas />} />
            <Route path="/search" element={<SportsSearch />} />
            <Route path="/esportsbook" element={<EsportsSporlar />} />
            <Route path="/bet-slip" element={<SportsBahis />} />
            <Route path="/game-screen" element={<GameScreen />} />
            {/* Catch-all route */}
            <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
        </>
        
    );
};

export default AllRoutes;
