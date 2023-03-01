import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  line: {
    width: "100%",
    height: "3px",
    backgroundColor: "#89a963",
    position: "relative",
  },
  line1: {
    width: "30px",
    height: "10px",
    backgroundColor: "#f3f6ef",
    position: "relative",
    animation: "$move 6s infinite",
  },

  dot: {
    width: "20px",
    height: "3px",
  
    backgroundColor: "#89a963",
    position: "absolute",
    top: "0px",
    right: "0",
    left: "5px",
  },
  "@keyframes move": {
    "0%": {
      left: 0,
    },

    "50%": {
      left: "calc(100% - 30px)",
    },

    "100%": {
      left: 0,
    },
  },
});

export default function MovingLine() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.line}>
        <div className={classes.line1}>
          <div className={classes.dot}></div>
        </div>
      </div>
    </div>
  );
}
