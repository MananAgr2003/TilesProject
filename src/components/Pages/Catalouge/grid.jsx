import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import t1 from "../../assets/catalouge/t1.png";
import t2 from "../../assets/catalouge/t2.png";
import t3 from "../../assets/catalouge/t3.png";
import t4 from "../../assets/catalouge/t4.png";
import t5 from "../../assets/catalouge/t5.png";
import t6 from "../../assets/catalouge/t6.png";
import t7 from "../../assets/catalouge/t7.png";
import t8 from "../../assets/catalouge/t8.png";
import t9 from "../../assets/catalouge/t9.png";
import icon from "../../assets/catalouge/dicon.png";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import MovingLine from "../../cards/linegreen";

const useStyles = makeStyles((theme) => ({
  root: {
    Width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    overflow: "hidden",
  },
  gridHead: {
    color: "#89a963",
    fontFamily: "unna",
    fontSize: "50px",
    margin: "40px 50px 0px 50px",
  },
  gridHead1: {
    color: "#89a963",
    fontFamily: "unna",
    fontSize: "30px",
    margin: "0px 50px 0px 50px",
    position: "relative",
    top: "18px",
  },
  gridMainDiv: {
    padding: "0px 44px 0px 44px",
  },
  gridMainDiv1: {
    padding: "0px 5px 0px 5px",
  },
  tallRectangle: {
    width: "100%",
    height: "280px",
    marginTop: "40px",
  },
  tallRectangle1: {
    width: "100%",
    height: "180px",
    marginTop: "40px",
  },
  gridImageTall: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  gridBox: {
    fontFamily: "julius sans one",
    fontSize: "16px",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "white",

    height: "3.5rem",
    width: "100%",
    borderRadius: "0px",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "600",
    position: "relative",
    bottom: "55px",
    opacity: "0.8",
    padding: "0px 10px 0px 10px",
  },
  MovingLine:{

    height: "10px",
            width: "200px",
            overflow: "hidden",

            position:"relative",
          
            top: "5px",
            left: "58px",

  },
  MovingLineMob:{

    height: "10px",
            width: "130px",
            overflow: "hidden",

            position:"relative",
          
            top: "15px",
            left: "50px",

  },
}));

export default function Gridtiles() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box style={{ position: "relative" }}>
        <Typography
          className={!isScreenSmall ? classes.gridHead : classes.gridHead1}
        >
          Floor Tiles
        </Typography>
        <Box

className={!isScreenSmall ? classes.MovingLine : classes.MovingLineMob}

          style={{
            
          }}
        >
          <MovingLine></MovingLine>
        </Box>
      </Box>
      <Grid
        container
        spacing={!isScreenSmall ? 2 : 1}
        className={!isScreenSmall ? classes.gridMainDiv : classes.gridMainDiv1}
      >
        <Grid item xs={6} md={5}>
          <Paper
            className={
              !isScreenSmall ? classes.tallRectangle : classes.tallRectangle1
            }
          >
            <img src={t1} className={classes.gridImageTall} alt="selected" />
            <Box className={classes.gridBox} size="small">
              Wooden Wall Tile <img src={icon} alt="" />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper
            className={
              !isScreenSmall ? classes.tallRectangle : classes.tallRectangle1
            }
          >
            <img src={t2} className={classes.gridImageTall} alt="selected" />
            <Box className={classes.gridBox} size="small">
              Wooden Wall Tile <img src={icon} alt="" />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={4}>
          <Paper
            className={
              !isScreenSmall ? classes.tallRectangle : classes.tallRectangle1
            }
          >
            <img src={t3} className={classes.gridImageTall} alt="selected" />
            <Box className={classes.gridBox} size="small">
              Wooden Wall Tile <img src={icon} alt="" />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper
            className={
              !isScreenSmall ? classes.tallRectangle : classes.tallRectangle1
            }
          >
            <img src={t4} className={classes.gridImageTall} alt="selected" />
            <Box className={classes.gridBox} size="small">
              Wooden Wall Tile <img src={icon} alt="" />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={4}>
          <Paper
            className={
              !isScreenSmall ? classes.tallRectangle : classes.tallRectangle1
            }
          >
            <img src={t5} className={classes.gridImageTall} alt="selected" />
            <Box className={classes.gridBox} size="small">
              Wooden Wall Tile <img src={icon} alt="" />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={5}>
          <Paper
            className={
              !isScreenSmall ? classes.tallRectangle : classes.tallRectangle1
            }
          >
            <img src={t6} className={classes.gridImageTall} alt="selected" />
            <Box className={classes.gridBox} size="small">
              Wooden Wall Tile <img src={icon} alt="" />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={5}>
          <Paper
            className={
              !isScreenSmall ? classes.tallRectangle : classes.tallRectangle1
            }
          >
            <img src={t7} className={classes.gridImageTall} alt="selected" />
            <Box className={classes.gridBox} size="small">
              Wooden Wall Tile <img src={icon} alt="" />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={4}>
          <Paper
            className={
              !isScreenSmall ? classes.tallRectangle : classes.tallRectangle1
            }
          >
            <img src={t8} className={classes.gridImageTall} alt="selected" />
            <Box className={classes.gridBox} size="small">
              Wooden Wall Tile <img src={icon} alt="" />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper
            className={
              !isScreenSmall ? classes.tallRectangle : classes.tallRectangle1
            }
          >
            <img src={t9} className={classes.gridImageTall} alt="selected" />
            <Box className={classes.gridBox} size="small">
              Wooden Wall Tile <img src={icon} alt="" />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
