
import "./App.css";
import Header from "./components/Header/header";
import Navbar from "./components/navbar/Navbar";
import { useLocation } from "react-router-dom";

import Footer from "./components/footer";
import FooterMob from "./components/footerMob";
import FooterFoot from "./components/FooterFoot";

import Tooltip from "./components/Tootip";
import ToolTip2 from "./components/ToolTip2";
import Homepage from "./components/Pages/Homepage";
import Productpage from "./components/Pages/Productpage";
import RoutesFunc from "./components/Pages/Routes";

import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";


function App() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const displayTooltip = location.pathname !== "/contactus";
  const displayTooltip1 = location.pathname !== "/catalouge";
  const displayTooltip2 = location.pathname !== "/sitemap";
  const displayTooltip3 = (displayTooltip && displayTooltip1 && displayTooltip2);

  return (
    <>
      {displayTooltip3 && (
        <>
          <Tooltip></Tooltip>
          <ToolTip2></ToolTip2>
        </>
      )}

      <Header></Header>

      <Navbar></Navbar>

      <RoutesFunc />
      {!isScreenSmall ? (      <Footer></Footer>) : (    <FooterMob></FooterMob>)}
  
      <FooterFoot></FooterFoot>
    </>
  );
}

export default App;
