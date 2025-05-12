import Carousel from "@/component/Carousel";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import SubNavbar from "@/component/SubNavbar";
import About from "@/pages/About/About";
import Betting from "@/pages/Betting/Betting";
import Casino from "@/pages/Casino/Casino";
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
            <Route path="/onwinx" element={<OnwinX/>} />
            <Route path="/games" element={<Games/>} />
            <Route path="/parlayboy" element={<Parlayboy/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/bonuses" element={<Promptions/>} />
            {/* Catch-all route */}
            <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
        </>
        
    );
};

export default AllRoutes;
