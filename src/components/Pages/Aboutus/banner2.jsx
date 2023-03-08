import React from "react";

import { Paper, Typography, Container, Button, Box } from "@mui/material";
import banner from "../../assets/banner3.png";
import brand from "../../assets/brand.png";
import section from "../../assets/aboutuspage/section.png";

export default function Banner2() {
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
          marginTop: "80px",

          zIndex: "1000",
          fontWeight: 700,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${section})`,
            width: "100vw",
            height: "450px",
            backgroundSize: {xs:"300% 80%" , md:"cover"},
            marginTop: "0rem",
            display: "flex",
     backgroundPosition:"center",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "space-between",
            backgroundRepeat:"no-repeat"
          }}
        ></Box>
      </Paper>
    </>
  );
}
