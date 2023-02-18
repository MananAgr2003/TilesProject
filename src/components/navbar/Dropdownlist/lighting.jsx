import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";

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

export default function Lighting() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);



  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
   
  };
  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMouseOut = () => {
    setAnchorEl(null);
  };
  
  const handleClick = (event) => {
    // Prevent the menu from opening on click
    event.preventDefault();
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const elements = [
    "Lighting",
    "Lighting",
    "Sanitaryware",
    "Accessories",
    "Ligthing",
    "Catalouge",
    "Tile Visualizer",
  ];
  return (
    <>
      <div key={1}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onMouseOver={handleMouseOver}
          
          onClick={handleClick}
          className={classes.button}
        >
          Lighting
          <ArrowDropDown />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
     

          onClose={handleClose}
          className={classes.menu}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}

          
        >

          <div onMouseLeave={handleMouseLeave}>
          
            <MenuItem onClick={(event) => handleMenuItemClick(event, index)}  
          
          >
              Option 1
            </MenuItem>
        
          <MenuItem onClick={(event) => handleMenuItemClick(event, index)}
          
          >
            Option 2
          </MenuItem>
          <MenuItem onClick={(event) => handleMenuItemClick(event, index)}
          
          >
            Option 3
          </MenuItem>
          <MenuItem onClick={(event) => handleMenuItemClick(event, index)}
          
          >
            Option 4
          </MenuItem>
          </div>
        </Menu>
      </div>
    </>
  );
}
