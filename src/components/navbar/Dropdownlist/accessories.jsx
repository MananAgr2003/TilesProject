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

export default function Accessories() {
  const classes = useStyles();
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
    <>
      <div key={2}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className={classes.button}
        >
          Accessories
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
            <MenuItem onClick={(event) => handleMenuItemClick(event, index)}>
              Option 1
            </MenuItem>
          <MenuItem onClick={(event) => handleMenuItemClick(event, index)}>
            Option 2
          </MenuItem>
          <MenuItem onClick={(event) => handleMenuItemClick(event, index)}>
            Option 3
          </MenuItem>
          <MenuItem onClick={(event) => handleMenuItemClick(event, index)}>
            Option 4
          </MenuItem>
        </Menu>
      </div>
    </>
  );
}
