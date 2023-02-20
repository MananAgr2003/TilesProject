import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactMailIcon from "@material-ui/icons/ContactMail";

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
  drawerList: {
    width: 250,
  },
  toolbar: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    padding:"8px"
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    setIsDrawerOpen(isOpen);
  };

  const drawerItems = [
    { text: "Home", icon: <HomeIcon />, link: "/" },
    { text: "About", icon: <InfoIcon />, link: "/about" },
    { text: "Contact", icon: <ContactMailIcon />, link: "/contact" },
  ];

  const renderDrawer = () => (
    <div
      className={classes.drawerList}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {drawerItems.map((item, index) => (
          <ListItem button key={index} component="a" href={item.link}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const renderAppBar = () => (
    <Box
      sx={{
        height: "10vh",
        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <Box
              sx={{
                height: "100px",
                width: "20vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding:"10px"
              }}
            >
              <img
                src={logo}
                alt=""
                style={{width:"123px" , height: "50px", position: "relative", margin:"0px 0px 0px 20px" }}
              />
            </Box>
          </Link>
          {isMobile && (
            <>
            <img src={icon4} alt="" style={{position:"relative" , left:"85px"}}/>
            <IconButton
              edge="end"
              className={classes.menuButton}
              color="#89a963"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
            <img src={icon5} alt="" style={{position:"relative" , left:"15px"}}/>
             
            </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );

  return (
    <div className={classes.root}>
      {renderAppBar()}
      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {renderDrawer()}
      </SwipeableDrawer>
    </div>
  );
};

export default Navbar;
