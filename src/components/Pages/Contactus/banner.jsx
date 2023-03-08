import React from "react";
import { Box , Button, Typography } from "@mui/material";
import banner from "../../assets/catalouge/banner.png";


export default function Banner() {
  return (

      <Box
        component="img"
        sx={{
          width: "100%",
          height: "468px",
          filter: "brightness(50%)",
        }}
        src={banner}
        alt="banner"
      />

  

        
    
   
  );
}
