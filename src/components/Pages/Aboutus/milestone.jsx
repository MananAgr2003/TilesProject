import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "2rem",
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
    width: "80vw",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
    position:"absolute"
  },
  text: {
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
}));

const Milestone = () => {
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

            top:"2550px",
            left:"56px"
        }}>
          <p className={classes.text}>Text 1</p>
        </div>
        <div className={classes.box} style={{

            top:"2780px",
            left:"18%"
        }}>
          <p className={classes.text}>Text 2</p>
        </div>
        <div className={classes.box} style={{

            top:"2550px",
            left:"32%"
        }}>
          <p className={classes.text}>Text 3</p>
        </div>
        <div className={classes.box} style={{

            top:"2780px",
            left:"45%"
        }}>
          <p className={classes.text}>Text 2</p>
        </div>
        <div className={classes.box} style={{

            top:"2550px",
            left:"58%"
        }}>
          <p className={classes.text}>Text 3</p>
        </div>
        <div className={classes.box} style={{

            top:"2780px",
            left:"72%"
        }}>
          <p className={classes.text}>Text 2</p>
        </div>
        <div className={classes.box} style={{

            top:"2550px",
            left:"85%"
        }}>
          <p className={classes.text}>Text 3</p>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
