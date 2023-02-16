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
  },
}));

const Navbar = () => {
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
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#5F5E55" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}></Typography>
          {elements.map((element, index) => (
            <div key={index}>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.button}
              >
                {element}
                <ArrowDropDown
                  style={{
                    display:
                      element === "Catalouge" || element === "Tile Visualizer"
                        ? "none"
                        : "block",
                  }}
                />
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
                <Link to="/productlist" style={{ textDecoration: "none" }}>
                  <MenuItem
                    onClick={(event) => handleMenuItemClick(event, index)}
                  >
                    Option 1
                  </MenuItem>
                </Link>
                <MenuItem
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  Option 2
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  Option 3
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  Option 4
                </MenuItem>
              </Menu>
            </div>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
