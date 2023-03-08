import React, { useEffect } from "react";
import comingsoon from "../assets/comingsoon.png";
import comingsoonMob from "../assets/comingsoonMob.png";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
export default function comingus() {
  useEffect(() => {
    scrollToTop();
  }, []);

  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return <>

     <div style={{

        width:"100vw",
        height:"100vh"
     }}>

        {isScreenSmall && (<>
        <img src={comingsoonMob} alt="" style={{
                 width:"100%",
                 height:"112%"
        }}/></>)}

        {!isScreenSmall && (<>
        <img src={comingsoon} alt="" style={{
                 width:"100%",
                 height:"112%"
        }} /></>)}
        
     </div>
  
  
  </>;
}
