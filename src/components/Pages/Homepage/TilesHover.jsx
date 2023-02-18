import { React, useState } from "react";

import { Paper, Typography, Container, Button, Box } from "@mui/material";

import banner from "../../assets/banner4.png";
import hover1 from "../../assets/Hover/hover1.png";
import hover2 from "../../assets/Hover/hover2.png";
import hover3 from "../../assets/Hover/hover3.png";
import hover4 from "../../assets/Hover/hover4.png";
import hover5 from "../../assets/Hover/hover5.png";
import hover6 from "../../assets/Hover/hover6.png";
import hover7 from "../../assets/Hover/hover7.png";
import hover8 from "../../assets/Hover/hover8.png";
import banner1 from "../../assets/banners/banner1.png";
import banner2 from "../../assets/banners/banner2.png";
import banner3 from "../../assets/banners/banner3.png";
import banner4 from "../../assets/banners/banner4.png";
import banner5 from "../../assets/banners/banner5.png";
import banner6 from "../../assets/banners/banner6.png";
import banner7 from "../../assets/banners/banner7.png";
import banner8 from "../../assets/banners/banner8.png";
import banner9 from "../../assets/banners/banner9.png";

export default function Overview() {
  const [imgURL, changeImgURL] = useState(banner);
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
            span:{
              color:"#89a963"
            }
          }}
        >
          Tiles <span>By Space</span>
        </Typography>

        <Box
          sx={{
            transition: "transform 1.5s ease-in-out",
            backgroundImage: `url(${imgURL})`,

            width: "100vw",
            height: "70vh",
            backgroundSize: "100% 100%",
            marginTop: "2rem",
            display: "flex",

            flexDirection: "row",
            justifyContent: "center",
            alignItems: "space-between",
            padding: "0px 8rem 0px 8rem",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "12.5vw",

              img: {
                height: "30%",
                position: "relative",
              },
            }}
          >
            <img
              src={hover1}
              alt=""
              onMouseOver={() => changeImgURL(banner1)}
              onMouseOut={() => changeImgURL(banner)}
            />
          </Box>

          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "12.5vw",

              img: {
                height: "30%",
                position: "relative",
              },
            }}
          >
            <img
              src={hover2}
              alt=""
              onMouseOver={() => changeImgURL(banner2)}
              onMouseOut={() => changeImgURL(banner)}
            />
          </Box>

          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "12.5vw",

              img: {
                height: "30%",
                position: "relative",
              },
            }}
          >
            <img
              src={hover3}
              alt=""
              onMouseOver={() => changeImgURL(banner3)}
              onMouseOut={() => changeImgURL(banner)}
            />
          </Box>

          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "12.5vw",

              img: {
                height: "30%",
                position: "relative",
              },
            }}
          >
            <img
              src={hover4}
              alt=""
              onMouseOver={() => changeImgURL(banner4)}
              onMouseOut={() => changeImgURL(banner)}
            />
          </Box>

          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "12.5vw",

              img: {
                height: "30%",
                position: "relative",
              },
            }}
          >
            <img
              src={hover5}
              alt=""
              onMouseOver={() => changeImgURL(banner5)}
              onMouseOut={() => changeImgURL(banner)}
            />
          </Box>

          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "12.5vw",

              img: {
                height: "30%",
                position: "relative",
              },
            }}
          >
            <img
              src={hover6}
              alt=""
              onMouseOver={() => changeImgURL(banner6)}
              onMouseOut={() => changeImgURL(banner)}
            />
          </Box>

          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "12.5vw",

              img: {
                height: "30%",
                position: "relative",
              },
            }}
          >
            <img
              src={hover7}
              alt=""
              onMouseOver={() => changeImgURL(banner7)}
              onMouseOut={() => changeImgURL(banner)}
            />
          </Box>

          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "12.5vw",

              img: {
                height: "30%",
                position: "relative",
              },
            }}
          >
            <img
              src={hover8}
              alt=""
              onMouseOver={() => changeImgURL(banner2)}
              onMouseOut={() => changeImgURL(banner)}
            />
          </Box>
        </Box>
      </Paper>
    </>
  );
}
