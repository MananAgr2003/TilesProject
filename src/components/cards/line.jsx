import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
    width:"30vw"
  },
  line: {
    width: "100px",
    height: "2px",
    backgroundColor: "black",
    position: "relative",
    animation: "$move 2s infinite",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "black",
    position: "absolute",
    top: "-4px",
    right: "0",
    left: "0",
    margin: "auto",
  },
  "@keyframes move": {
    "0%": {
      left: 0,
    },
    "50%": {
      left: "calc(100% - 10px)",
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
        <div className={classes.dot}></div>
      </div>
    </div>
  );
}
