import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "4rem",
    position:"relative",
    overflow:"hidden"

  },
  heading: {
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: "bold",
    marginTop: "0rem",
    color:"#89A963"
  },
  mainDiv: {
    width: "200vw",
    height: "1000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    height: "5px",
    width: "150%",
    backgroundColor: "#5F5E55",
    position: "relative",
    transform: "rotate(270deg)",

  },
  dot: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#89A963",
    position: "absolute",
    top: "-8px",
  },
  box: {
    width: "135px",
    height: "117px",
    backgroundColor: "#89A963",
     padding:"15px",
    marginTop: "2rem",
    position:"absolute"
  },
  text: {
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  text1: {
    color: "white",
    fontSize: "0.8rem",
    fontWeight: "light",
    marginTop:"15px"
  },
}));

const MilestoneMob = () => {
    const theme = useTheme();
    const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Milestone</h1>
      <div className={classes.mainDiv}>
        <div className={classes.line}>
          <div className={classes.dot} style={{ left: "0%" }}></div>
          <div className={classes.dot} style={{ left: "16.6%" }}></div>
          <div className={classes.dot} style={{ left: "33.2%" }}></div>
          <div className={classes.dot} style={{ left: "49.8%" }}></div>
          <div className={classes.dot} style={{ left: "66.6%" }}></div>
          <div className={classes.dot} style={{ left: "83.2%" }}></div>
          <div className={classes.dot} style={{ left: "100%" }}></div>
        </div>
        <div className={classes.box} style={{

            top:"4rem",
            left:"1rem"
        }}>
          <p className={classes.text}>Maya Kyon</p>
          <p className={classes.text1}>We develop creative solutions for small and big brands</p>
        </div>
        <div className={classes.box} style={{

            top:"12rem",
            left:"15rem"
        }}>
          <p className={classes.text}>Maya Kyon</p>
          <p className={classes.text1}>We develop creative solutions for small and big brands</p>

        </div>
        <div className={classes.box} style={{

              top:"20rem",
            left:"1rem"
        }}>
          <p className={classes.text}>Maya Kyon</p>
          <p className={classes.text1}>We develop creative solutions for small and big brands</p>

        </div>
        <div className={classes.box} style={{

            top:"28rem",
            left:"15rem"
        }}>
          <p className={classes.text}>Maya Kyon</p>
          <p className={classes.text1}>We develop creative solutions for small and big brands</p>

        </div>
        <div className={classes.box} style={{

              top:"36rem",
            left:"1rem"
        }}>
          <p className={classes.text}>Maya Kyon</p>
          <p className={classes.text1}>We develop creative solutions for small and big brands</p>

        </div>
        <div className={classes.box} style={{

              top:"44rem",
            left:"15rem"
        }}>
          <p className={classes.text}>Maya Kyon</p>
          <p className={classes.text1}>We develop creative solutions for small and big brands</p>

        </div>
        <div className={classes.box} style={{

              top:"52rem",
            left:"1rem"
        }}>
          <p className={classes.text}>Maya Kyon</p>
          <p className={classes.text1}>We develop creative solutions for small and big brands</p>

        </div>
      </div>
    </div>
  );
};

export default MilestoneMob;
