import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import image1 from "../../assets/tiles/tile1.png";
import image2 from "../../assets/tiles/tile2.png";
import image3 from "../../assets/tiles/tile3.png";
import image4 from "../../assets/tiles/tile4.png";
import image5 from "../../assets/tiles/tile5.png";
import image6 from "../../assets/tiles/tile6.png";
import image7 from "../../assets/tiles/tile7.png";
import image8 from "../../assets/tiles/tile8.png";
import image9 from "../../assets/tiles/tile9.png";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import banner from "../../assets/banner4.png";
import MovingLine from "../../cards/line";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: `url(${banner})`,
    backgroundSize: "cover",
    marginTop: "40px",
    padding: "0px",
    Width: "100vw",
    height: "1000px",
    overflowX: "hidden",
    overflowY: "hidden",
    backgroundPosition:"center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridHeading: {
    textAlign: "left",
    padding: theme.spacing(2),
    fontFamily: "unna",
    color: "white",
    fontSize: "25px",
    display: "flex",
    
    alignItems: "center",
    justifyContent: "left",
    flexDirection: "row",
    position:"relative",
    top:"10px",
    right:"10px"
  },
  gridHeadingLine: {
    width: "100px",
    height: "5px",
    fontWeight: "bold",
    backgroundColor: "white",
    marginLeft: "20px",
  },
  grid: {
    width: "100vw",
    height: "400px",

    margingLeft: "0rem",
    position: "relative",
    top:"1rem",
    left:"0.8rem"
 
  },
  gridImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  gridImageTall: {
    position: "relative",

    height: "90%",
    width: "100%",
    objectFit: "cover",
  },
  wideRectangle: {
    width: "100%",
    height: "100px",
  },
  tallRectangle: {
    height: "400px",
    width: "70vw",
    display: "flex",

    position: "relative",
    left: "4rem",
    top: "8rem",
    border: "5px solid white",
    flexDirection: "column",
  },
  gridBox:{

      fontFamily: "julius sans one",
      fontSize: "18px",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      color: "white",

      height: "3.5rem",
      width: "100%",
      borderRadius: "0px",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight:"600"


  }
}));

function App() {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(image1);
  const [clicked, setClicked] = useState(1);

  const handleClick = (index) => {
    let imageName = "image" + index;
    console.log(imageName);

    let dynamicVariable = eval(imageName);
    console.log(dynamicVariable);

    setSelectedImage(dynamicVariable);
    setClicked(index);
  };

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Grid container className={classes.grid} spacing={3}>
            <Grid item xs={12}>
              <Typography className={classes.gridHeading} variant="h5">
                Tiles Visualizer <hr className={classes.gridHeadingLine}></hr>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Paper
                key={1}
                onClick={() => handleClick(1)}
                className={classes.wideRectangle}
                style={{ border: clicked === 1 ? "5px solid white" : "none" }}
              >
                <img src={image1} className={classes.gridImage} alt="image1" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                key={2}
                onClick={() => handleClick(2)}
                className={classes.wideRectangle}
                style={{ border: clicked === 2 ? "5px solid white" : "none" }}
              >
                <img src={image2} className={classes.gridImage} alt="image2" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                key={3}
                onClick={() => handleClick(3)}
                className={classes.wideRectangle}
                style={{ border: clicked === 3 ? "5px solid white" : "none" }}
              >
                <img src={image3} className={classes.gridImage} alt="image3" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                key={4}
                onClick={() => handleClick(4)}
                className={classes.wideRectangle}
                style={{ border: clicked === 4 ? "5px solid white" : "none" }}
              >
                <img src={image4} className={classes.gridImage} alt="image4" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                key={5}
                onClick={() => handleClick(5)}
                className={classes.wideRectangle}
                style={{ border: clicked === 5 ? "5px solid white" : "none" }}
              >
                <img src={image5} className={classes.gridImage} alt="image5" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                key={6}
                onClick={() => handleClick(6)}
                className={classes.wideRectangle}
                style={{ border: clicked === 6 ? "5px solid white" : "none" }}
              >
                <img src={image6} className={classes.gridImage} alt="image6" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                key={7}
                onClick={() => handleClick(7)}
                className={classes.wideRectangle}
                style={{ border: clicked === 7 ? "5px solid white" : "none" }}
              >
                <img src={image7} className={classes.gridImage} alt="image7" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                key={8}
                onClick={() => handleClick(8)}
                className={classes.wideRectangle}
                style={{ border: clicked === 8 ? "5px solid white" : "none" }}
              >
                <img src={image8} className={classes.gridImage} alt="image8" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                key={9}
                onClick={() => handleClick(9)}
                className={classes.wideRectangle}
                style={{ border: clicked === 9 ? "5px solid white" : "none" }}
              >
                <img src={image9} className={classes.gridImage} alt="image9" />
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} sx={{}}>
          <Paper className={classes.tallRectangle}>
            <img
              src={selectedImage}
              className={classes.gridImageTall}
              alt="selected"
            />
            <Box  className={classes.gridBox}
             
              size="small"
            >
              Wooden Wall Tile
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
