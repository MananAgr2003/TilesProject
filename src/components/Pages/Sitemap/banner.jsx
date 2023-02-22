import React from "react";
import { Box , Button, Typography } from "@mui/material";
import banner from "../../assets/sitemap/banner.png";


export default function Banner() {
  return (
    <>
      <Box
        component="img"
        sx={{
          width: "100%",
          height: {md:"463px" , xs:"300px"},
          filter: "brightness(50%)",
        }}
        src={banner}
        alt="banner"
      />
      <Typography
        sx={{
          fontFamily: "julius sans one",
          fontSize: {md:"60px" , xs:"35px"},

          color: "White",

          width: "100%",
          position: "absolute",
          top: {md:"15rem" , xs:"10rem"},
          paddingLeft: {md:"3rem" , xs:"1rem"},
        }}
      >
      LOREM IPSUM
      </Typography>

      <Box
        sx={{
          fontFamily: "julius sans one",
          fontSize: {md:"20px" ,xs:"14px"},

          color: "White",

          width: "100%",
          position: "absolute",
          top: {md:"21rem" , xs:"14rem"},
          paddingLeft: {md:"3rem" , xs:"1rem"},

          fontWeight: "550",
        }}
      >
        <Typography
          sx={{
            fontFamily: "julius sans one",
            fontSize: {md:"25px" ,xs:"18px"},


            color: "White",

            width: "100%",

            fontWeight: "550",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Ut, nisi!
        </Typography>

       

        
      </Box>
    </>
  );
}
