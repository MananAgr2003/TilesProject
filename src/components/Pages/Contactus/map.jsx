import React from "react";

import { Paper, Typography, Container, Button, Box } from "@mui/material";
import banner from "../../assets/contactus/map.png";
import brand from "../../assets/brand.png";

export default function Map() {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          display: "flex",

          flexDirection: "column",

          width: {
            md: "100vw",
            xs: "100vw",
          },
          

          zIndex: "1000",
          fontWeight: 700,
          justifyContent: "center",
          alignItems: "center",
          marginTop:{md:"0px" , xs:"0px"}
          
        }}
      >
       

        <Box
          sx={{
            backgroundImage: `url(${banner})`,
            width: "91.5vw",
            height: "380px",
            backgroundSize: "cover",
            marginTop: "2rem",
            display: "flex",

            flexDirection: "row",
            justifyContent: "center",
            alignItems: "space-between",
            backgroundPosition:"center"
          }}
        >
         
         
        </Box>
      </Paper>
    </>
  );
}
