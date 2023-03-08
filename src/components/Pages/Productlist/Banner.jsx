import React from "react";
import { Box , Button, Typography } from "@mui/material";
import banner from "../../assets/newBanner1.png";


export default function Banner() {
  return (
    <>
      <Box
        component="img"
        sx={{
          width: "100%",
          height: {md:"463px" , xs:"280px"},
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

        <Button
          sx={{
            fontFamily: "julius sans one",
            fontSize: {md:"18px" , xs:"14px"},
            backgroundColor: "#89A963",
            color: "white",
            "&:hover": {
              backgroundColor: "#89A963",
            },
            height: {md:"3rem" , xs:"2rem"},
            width: {md:"13rem" ,xs:"8rem"},
            borderRadius: "5px",
            marginRight: "0.7rem",
            position: "absolute",

            top: "4rem",
          }}
          size="small"
        
        >
          Read More
        </Button>



       

        
      </Box>
    </>
  );
}
