// import Carousel from "./component/Carousel"
// import Footer from "./component/Footer"
// import Navbar from "./component/Navbar"
// import SubNavbar from "./component/SubNavbar"
// import Home from "./pages/Home/Home"
// import LiveCasino from "./pages/Live-casino/LiveCasino"


// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <SubNavbar />
//       <Carousel />
//       <Home />
//       <Footer />
//             {/* <LiveCasino /> */}
//     </div>
//   )
// }

// export default App

import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
};

export default App;
