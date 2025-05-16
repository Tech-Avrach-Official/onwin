import Navbar from "@/component/Navbar"
import Header from "./components/Header"
import MainComponent from "./components/Main"
import SubNavbar from "@/component/SubNavbar"
import Carousel from "@/component/Carousel"

const LiveCasino = () => {
  return (
    <div>
      <Navbar/>
      <SubNavbar/>
      <Carousel/>
        <Header />
        <MainComponent />
    </div>
  )
}

export default LiveCasino