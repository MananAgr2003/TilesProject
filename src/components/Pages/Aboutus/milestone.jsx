import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import MilestoneMob from "./milestoneMob";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "4rem",
    position: "relative",
  },
  heading: {
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: "bold",
    marginTop: "0rem",
    color: "#89A963",
  },
  mainDiv: {
    width: "100vw",
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    height: "5px",
    width: "85vw",
    backgroundColor: "#5F5E55",
    position: "relative",
  },
  dot: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#89A963",
    position: "absolute",
    top: "-12px",
  },
  box: {
    width: "183px",
    height: "158px",
    backgroundColor: "#89A963",
    padding: "15px",
    marginTop: "2rem",
    position: "absolute",
  },
  text: {
    color: "white",
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  text1: {
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "light",
    marginTop: "15px",
  },
}));

const Milestone = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isScreenSmall && <>
      <MilestoneMob></MilestoneMob></>}
      {!isScreenSmall && (
        <>
          <>
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
                <div
                  className={classes.box}
                  style={{
                    top: "8rem",
                    left: "56px",
                  }}
                >
                  <p className={classes.text}>Maya Kyon</p>
                  <p className={classes.text1}>
                    We develop creative solutions for small and big brands
                  </p>
                </div>
                <div
                  className={classes.box}
                  style={{
                    top: "23rem",
                    left: "18%",
                  }}
                >
                  <p className={classes.text}>Maya Kyon</p>
                  <p className={classes.text1}>
                    We develop creative solutions for small and big brands
                  </p>
                </div>
                <div
                  className={classes.box}
                  style={{
                    top: "8rem",
                    left: "32%",
                  }}
                >
                  <p className={classes.text}>Maya Kyon</p>
                  <p className={classes.text1}>
                    We develop creative solutions for small and big brands
                  </p>
                </div>
                <div
                  className={classes.box}
                  style={{
                    top: "23rem",
                    left: "45%",
                  }}
                >
                  <p className={classes.text}>Maya Kyon</p>
                  <p className={classes.text1}>
                    We develop creative solutions for small and big brands
                  </p>
                </div>
                <div
                  className={classes.box}
                  style={{
                    top: "8rem",
                    left: "58%",
                  }}
                >
                  <p className={classes.text}>Maya Kyon</p>
                  <p className={classes.text1}>
                    We develop creative solutions for small and big brands
                  </p>
                </div>
                <div
                  className={classes.box}
                  style={{
                    top: "23rem",
                    left: "72%",
                  }}
                >
                  <p className={classes.text}>Maya Kyon</p>
                  <p className={classes.text1}>
                    We develop creative solutions for small and big brands
                  </p>
                </div>
                <div
                  className={classes.box}
                  style={{
                    top: "8rem",
                    left: "85%",
                  }}
                >
                  <p className={classes.text}>Maya Kyon</p>
                  <p className={classes.text1}>
                    We develop creative solutions for small and big brands
                  </p>
                </div>
              </div>
            </div>
          </>
        </>
      )}
    </>
  );
};

export default Milestone;
