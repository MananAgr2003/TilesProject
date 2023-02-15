import React from "react";

import { Paper, Typography, Container, Button, Box } from "@mui/material";
import banner from "../../assets/banner3.png";
import brand from "../../assets/brand.png";

export default function Overview() {
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
        <Typography
          variant="h4"
          sx={{
            fontFamily: "unna",
            fontSize: "3rem",
          }}
        >
          Our Major Brands We Deal In
        </Typography>

        <Box
          sx={{
            backgroundImage: `url(${banner})`,
            width: "100vw",
            height: "50vh",
            backgroundSize: "100% 100%",
            marginTop: "2rem",
            display: "flex",

            flexDirection: "row",
            justifyContent: "center",
            alignItems: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "16.6vw",

              img: {
                height: "55%",
                position: "relative",
                bottom: "4rem",
              },
            }}
          >
            <img src={brand} alt="" />
          </Box>
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "16.6vw",

              img: {
                height: "55%",
                position: "relative",
                top: "4rem",
              },
            }}
          >
            <img src={brand} alt="" />
          </Box>
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "16.6vw",

              img: {
                height: "55%",
                position: "relative",
                bottom: "4rem",
              },
            }}
          >
            <img src={brand} alt="" />
          </Box>
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "16.6vw",

              img: {
                height: "55%",
                position: "relative",
                top: "4rem",
              },
            }}
          >
            <img src={brand} alt="" />
          </Box>
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "16.6vw",

              img: {
                height: "55%",
                position: "relative",
                bottom: "4rem",
              },
            }}
          >
            <img src={brand} alt="" />
          </Box>
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "16.6vw",

              img: {
                height: "55%",
                position: "relative",
                top: "4rem",
              },
            }}
          >
            <img src={brand} alt="" />
          </Box>

         
        </Box>
      </Paper>
    </>
  );
}
