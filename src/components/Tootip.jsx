import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "black",
    color: "white",
    width: "250px",
    height: "50px",

    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    display: "flex",

    right: -100,
    top: 300,
    zIndex: 99999,
    transform: "rotate(270deg)",
    fontSize: "25px",
  },
  containerP: {},
}));
let page = "";

function setHide() {
  page = window.location.pathname === "/contactus" ? "hide" : "display";
}

const VerticalRectangle = (props) => {
  const classes = useStyles();

  useEffect(() => {
    setHide();
  }, []);
  const handleClick = () => {
    console.log(page);
  };

  return (
    <Tooltip title="Tiles" placement="left" onClick={handleClick}>
      <div className={classes.container}>
        <p className={classes.containerP}>Tiles Visualizer</p>
      </div>
    </Tooltip>
  );
};

export default VerticalRectangle;
