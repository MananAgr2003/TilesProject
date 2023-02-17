import "./App.css";
import Header from "./components/Header/header";
import Navbar from "./components/navbar/Navbar";

import Footer from "./components/footer";
import FooterFoot from "./components/FooterFoot";

import Tooltip from "./components/Tootip";
import ToolTip2 from "./components/ToolTip2";
import Homepage from "./components/Pages/Homepage";
import Productpage from "./components/Pages/Productpage";
import RoutesFunc from "./components/Pages/Routes";
import Navbartest from "./components/navbar/Navbartest";

function App() {
  return (
    <>
      <Tooltip></Tooltip>
      <ToolTip2></ToolTip2>
      <Header></Header>

      
      <Navbartest></Navbartest>

      <RoutesFunc />

      <Footer></Footer>
      <FooterFoot></FooterFoot>
    </>
  );
}

export default App;
