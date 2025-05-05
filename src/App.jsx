import Carousel from "./component/Carousel"
import Navbar from "./component/Navbar"
import SubNavbar from "./component/SubNavbar"
import Home from "./pages/Home/Home"


const App = () => {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <Carousel />
      <Home />
    </div>
  )
}

export default App

