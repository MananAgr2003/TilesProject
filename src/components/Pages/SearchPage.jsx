import React, { useEffect } from "react";

import Caraousel from "./Homepage/Caraousel";
import AboutUs from "./Homepage/AboutUs";
import Brands from "./Homepage/Brands";
import TilesHover from "./Homepage/TilesHover";
import ProductList from "./Homepage/ProductList";
import GptVisualizer from "./Homepage/GptVisualizer";
import GptVisualizerMob from "./Homepage/Visualizermob";

import Categories from "./Homepage/Categories";
import FadeInWrapper from "../AnimationWrapper/FadeIn";
import FadeInBottom from "../AnimationWrapper/FadeBottom";
import MovingLine from "../cards/line";

import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Paper, Box } from "@mui/material";


import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export default function Searchpage() {
  useEffect(() => {
    scrollToTop();
  }, []);

  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <div
        style={{
          height: "100vh",
          overflowX:"hidden"
        }}
      >
        <Box
          sx={{
            height: "10vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            form: {
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              right: "-50px",
              input: {
                width: "100%",
                height: "2.5rem",
                backgroundColor: "#89A963",
                border: "1px solid #89A963",
                borderRadius: "10px",
                position: "relative",
                right: "4rem",
                zIndex: "1000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                paddingLeft: "4rem",
                fontSize: "18px",
                fontWeight: "400",

                "&::placeholder": {
                  color: "white",
                  fontSize: "18px",
                  position: "relative",

                  top: "0rem",
                },

                "&:focus": {
                  border: "0px solid white",
                },

                "&:focus::placeholder": {
                  opacity: 0,
                },
              },
            },
          }}
        >
          <form>
            <SearchIcon
              style={{ fill: "White" }}
              sx={{
                width: "10%",
                zIndex: "1050",
                position:"relative",
                right:"15px"
              }}
            />

            <input
              type="text"
              placeholder="Search For The Products You Like"
              style={{}}
            />
          </form>
        </Box>
      </div>
    </>
  );
}
