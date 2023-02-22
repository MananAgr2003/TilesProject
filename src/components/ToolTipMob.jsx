import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "black",
    color: "white",
    width: "150px",
    height: "50px",

    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    display: "flex",

    right: -55,
    top: 200,
    zIndex: 99999,
    transform: "rotate(270deg)",
    fontSize: "18px",
  },
  containerP: {},
}));
let page = "";

function setHide() {
  page = window.location.pathname === "/contactus" ? "hide" : "display";
}

const VerticalRectangleMob = (props) => {
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

export default VerticalRectangleMob;
