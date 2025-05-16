import Navbar from "@/component/Navbar"
import Header from "./components/Header"
import MainComponent from "./components/Main"
import SubNavbar from "@/component/SubNavbar"
import Carousel from "@/component/Carousel"
import { useState } from "react"

const LiveCasino = () => {

  const [activeProvider, setActiveProvider] = useState("Ninja-gaming-lc");

  return (
    <div>
      <Navbar />
      <SubNavbar />
      <Carousel/>
        <Header activeProvider={activeProvider} setActiveProvider={setActiveProvider}/>
        <MainComponent activeProvider={activeProvider} setActiveProvider={setActiveProvider}/>
    </div>
  )
}

export default LiveCasino