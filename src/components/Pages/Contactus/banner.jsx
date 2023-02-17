import React from "react";
import { Box , Button, Typography } from "@mui/material";
import banner from "../../assets/catalouge/banner.png";


export default function Banner() {
  return (
    <>
      <Box
        component="img"
        sx={{
          width: "100%",
          height: "463px",
          filter: "brightness(50%)",
        }}
        src={banner}
        alt="banner"
      />
      <Typography
        sx={{
          fontFamily: "julius sans one",
          fontSize: "60px",

          color: "White",

          width: "100%",
          position: "absolute",
          top: "15rem",
          paddingLeft: "3rem",
        }}
      >
      LOREM IPSUM
      </Typography>

      <Box
        sx={{
          fontFamily: "julius sans one",
          fontSize: "20px",

          color: "White",

          width: "100%",
          position: "absolute",
          top: "21rem",
          paddingLeft: "3rem",
          fontWeight: "550",
        }}
      >
        <Typography
          sx={{
            fontFamily: "julius sans one",
            fontSize: "25px",

            color: "White",

            width: "100%",

            fontWeight: "550",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nisi!
        </Typography>

       

        
      </Box>
    </>
  );
}
