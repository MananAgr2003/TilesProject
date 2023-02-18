import React from "react";
import { makeStyles  } from "@material-ui/core/styles";
import { useMediaQuery  } from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
import Faucets from "./Dropdownlist/faucets";
import Shower from "./Dropdownlist/shower";
import Sanitaryware from "./Dropdownlist/sanitaryware";
import Accessories from "./Dropdownlist/accessories";
import Lighting from "./Dropdownlist/lighting";
import Catalouge from "./Dropdownlist/catalouge";
import Tilevisualizer from "./Dropdownlist/tilevisualizer";
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    width: "80vw",
    color: "white",
  },
  button: {
    color: "white",
    fontFamily: "unna",
    fontSize: "22px",
    textTransform: "none",
    fontWeight: "450",
    "&:hover": {
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.3)",
      backgroundColor: "#5F5E55",
    },
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles(theme);


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const elements = [
    "Faucets",
    "Shower",
    "Sanitaryware",
    "Accessories",
    "Ligthing",
    "Catalouge",
    "Tile Visualizer",
  ];


  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#5F5E55",
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}></Typography>

          <Faucets></Faucets>
          <Shower></Shower>
          <Sanitaryware></Sanitaryware>
          <Accessories></Accessories>
          <Lighting></Lighting>
          <Catalouge></Catalouge>
          <Tilevisualizer></Tilevisualizer>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
