import React from "react";

import { Paper, Box } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import logo from "../assets/logo.png";
import { IconButton, makeStyles } from "@material-ui/core";

import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";

const useStyles = makeStyles({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    width: "30%",
    alignItems: "center",
    position: "relative",
    left: "10%",
  },
  button: {
    color: "#89A963",
    fontSize: "18px",
    margin: "20px",
    fontStyle: "normal",
    '&:hover': {
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.3)',
      backgroundColor:"white"
    },
  },
  p: {
    width: "30px",
    marginLeft: "10px",
  },
});

export default function () {
  const classes = useStyles();
  var searchIcon = IconButton;
  return (
    <>
      <Box
        sx={{
          height: "10vh",
          width: "100vw",
          display: "flex",
        }}
      >
        <Box
          sx={{
            height: "10vh",
            width: "20vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            img: {
              height: "100%",
            },
          }}
        >
          <img src={logo} alt="" />
        </Box>

        <Box
          sx={{
            height: "10vh",
            width: "40vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            form: {
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

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
                color:"white",
                paddingLeft:"4rem",
                fontSize: "18px",
                fontWeight: "400",

                "&::placeholder": {
                  color: "white",
                  fontSize: "18px",
                  position: "relative",
              
                  top: "0rem",
                  
                },

                "&:focus":{
                  border:"0px solid white"
                },

                "&:focus::placeholder":{
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
              }}
            />

            <input
              type="text"
              placeholder="Search For The Products You Like"
              style={{}}
            />
          </form>
        </Box>

        <div className={classes.buttonContainer}>
          <IconButton className={classes.button} aria-label="Home Screen">
            <img src={icon1} alt="" />
            <p className={classes.p}>
              {" "}
              <i
                style={{
                  color: "black",
    fontStyle: "normal",

                }}
              >
                Home{" "}
              </i>
              Screen
            </p>
          </IconButton>
          <IconButton className={classes.button} aria-label="About Us">
            <img src={icon2} alt="" />
            <p className={classes.p}>
              <i
                style={{
                  color: "black",
    fontStyle: "normal",

                }}
              >
                About{" "}
              </i>{" "}
              Us
            </p>
          </IconButton>
          <IconButton className={classes.button} aria-label="Contact Us">
            <img src={icon3} alt="" />
            <p className={classes.p}>
              <i
                style={{
                  color: "black",
    fontStyle: "normal",

                }}
              >
                Contact{" "}
              </i>{" "}
              Us
            </p>
          </IconButton>
        </div>
      </Box>
    </>
  );
}
