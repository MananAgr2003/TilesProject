import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Backdrop, CircularProgress, Container } from "@material-ui/core";
import Homepage from "./Homepage";
import Productlist from "./Productlist";
import Product from "./Productpage";
import Aboutus from "./Aboutus";
import Sitemap from "./Sitemap";
import Catalouge from "./Catalouge";
import Contactus from "./Contactus";
import LoadingPageTest from "../cards/loadtest";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const RoutesFunc = () => {

  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
 
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);
  return (
    <>

{isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <LoadingPageTest />
        </div>
      ) : (
     
       
          <Routes
         
        
          >
            <Route exact path="/" element={<Homepage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productlist" element={<Productlist />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/catalouge" element={<Catalouge />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
     
      )}
    </>
  );
};
export default RoutesFunc;
