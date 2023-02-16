import React from "react";
import { Box , Button, Typography } from "@mui/material";
import banner from "../../assets/banner.png"


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
          top: "12rem",
          paddingLeft: "7rem",
        }}
      >
       A Class in itself
      </Typography>

      <Box
        sx={{
          fontFamily: "julius sans one",
          fontSize: "20px",

          color: "White",

          width: "100%",
          position: "absolute",
          top: "18rem",
          paddingLeft: "7rem",
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

        <Button
          sx={{
            fontFamily: "julius sans one",
            fontSize: "18px",
            backgroundColor: "#89A963",
            color: "white",
            "&:hover": {
              backgroundColor: "#89A963",
            },
            height: "3rem",
            width: "13rem",
            borderRadius: "8px",
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
