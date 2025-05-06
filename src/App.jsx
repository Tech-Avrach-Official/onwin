import Carousel from "./component/Carousel"
import Navbar from "./component/Navbar"
import SubNavbar from "./component/SubNavbar"
import Home from "./pages/Home/Home"
import LiveCasino from "./pages/Live-casino/LiveCasino"


const App = () => {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <Carousel />
      <LiveCasino />
    </div>
  )
}

export default App

