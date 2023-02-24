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
import icon6 from "../assets/icons/icon6.png";
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
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
    overflowX: "hidden",
  },
  toolbar: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
  },

  acc: {
    backgroundColor: "white",
    border: "none",
    position: "relative",
    top: "35px",
    right: "5px",
    border: "5px solid white",
    "&::before": {
      display: "none", // hides the default border on the AccordionSummary component
    },
    "&$expanded": {
      margin: "auto",

      '&.Mui-focused': {
        backgroundColor: 'transparent',
      },
    },
    
  },
  accNew: {
    backgroundColor: "white",
    border: "none",
    position: "relative",
    top: "10px",
    right: "5px",
    border: "5px solid white",
    "&::before": {
      display: "none", // hides the default border on the AccordionSummary component
    },
    "&$expanded": {
      margin: "auto",

      
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
    },
    textDecoration:"none",
    color:"black"
  },
  accNew1: {
    backgroundColor: "white",
    border: "none",
    position: "relative",
    top: "-18px",
    right: "5px",
    border: "5px solid white",
    "&::before": {
      display: "none", // hides the default border on the AccordionSummary component
    },
    "&$expanded": {
      margin: "auto",

      
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
    },
  },
  acc1: {
    padding: "0px 0px",
    height: "50px",
    marginBottom: "-55px",
  },
  acc2: {
    padding: "0px 0px",
    border: "5px solid transparent",
    marginBottom: "-10px",
    display:"flex",
    flexDirection:"column"
  },
  accChev: {
   
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
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <Box>
        <img
          src={logo}
          alt=""
          style={{
            height: "80px",
            width: "200px",
            position: "relative",

            left: "25px",
          
            margin: "55px auto 0px auto",
          }}
        />
        <Typography
          style={{
            height: "10px",
            width: "200px",
            position: "relative",

            left: "38px",
            margin: "5px auto",
            fontFamily: "unna",
          }}
          variant="h5"
        >
          Brand Name
        </Typography>
        <Typography
          style={{
            height: "10px",
            width: "200px",
            position: "relative",

            left: "20px",
            top: "15px",
            margin: "5px auto",
            fontFamily: "unna",
          }}
          variant="h6"
        >
          Tag Line Goes Here
        </Typography>
      </Box>
      <List>
        <ListItem disableRipple button key="5" component="a" href="/" style={{

          position:"relative",
           top:"45px",
           left:"15px"
        }}>
          <img
            src={icon1}
            alt=""
            style={{
              height: "30px",
              width: "30px",
              position: "relative",
              top: "-5px",
              right: "15px",
            }}
          />
          <Typography variant="body1">Home Screen</Typography>
        </ListItem>
        <ListItem disableRipple button key="5" component="a" href="/aboutus" style={{

          position:"relative",
           top:"45px",
           left:"15px"
        }}>
          <img
            src={icon2}
            alt=""
            style={{
              height: "30px",
              width: "30px",
              position: "relative",
              top: "-5px",
              right: "15px",
            }}
          />
          <Typography variant="body1">About Us</Typography>
        </ListItem>
        <ListItem disableRipple button key="5" component="a" href="/contactus" style={{

          position:"relative",
           top:"45px",
           left:"15px",
           marginBottom:"45px"
        }}>
          <img
            src={icon3}
            alt=""
            style={{
              height: "30px",
              width: "30px",
              position: "relative",
              top: "-5px",
              right: "15px",
            }}
          />
          <Typography variant="body1">Contact Us</Typography>
        </ListItem>
       
       
        <ListItem disableRipple button key="5" component="a">
          <Accordion
            elevation={0}
            className={classes.accNew}
            sx={{
              mt: "0rem",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              position: "relative",
              marginTop:"-20px"
            }}
          >
            <AccordionSummary
              className={classes.acc1}
            
              
            >
              <img
                src={icon6}
                alt=""
                style={{
                  height: "20px",
                  width: "20px",
                  position: "relative",
                  top: "-5px",
                  right: "10px",
                }}
              />
              <Typography style={{
                position:"relative",
                bottom:"5px",
                left:"10.5px"
            
              }} variant="body1">Faucets</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.acc2}>
              <ListItem button component="a" href="/Productlist" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option1" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option2" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option4" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option4" />
              </ListItem>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        <ListItem disableRipple button key="5" component="a">
          <Accordion
            elevation={0}
            className={classes.accNew}
            sx={{
              mt: "0rem",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              position: "relative",
              marginTop:"-30px"
            }}
          >
            <AccordionSummary
              className={classes.acc1}
            
              
            >
              <img
                src={icon6}
                alt=""
                style={{
                  height: "20px",
                  width: "20px",
                  position: "relative",
                  top: "-5px",
                  right: "10px",
                }}
              />
              <Typography style={{
                position:"relative",
                bottom:"5px",
                left:"10.5px"
            
              }} variant="body1">Shower</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.acc2}>
              <ListItem button component="a" href="/Productlist" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option1" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option2" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option4" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option4" />
              </ListItem>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        
        <ListItem disableRipple button key="5" component="a">
          <Accordion
            elevation={0}
            className={classes.accNew}
            sx={{
              mt: "0rem",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              position: "relative",
              marginTop:"-30px"
            }}
          >
            <AccordionSummary
              className={classes.acc1}
            
              
            >
              <img
                src={icon6}
                alt=""
                style={{
                  height: "20px",
                  width: "20px",
                  position: "relative",
                  top: "-5px",
                  right: "10px",
                }}
              />
              <Typography style={{
                position:"relative",
                bottom:"5px",
                left:"10.5px"
            
              }} variant="body1">Sanitaryware</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.acc2}>
              <ListItem button component="a" href="/Productlist" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option1" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option2" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option4" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option4" />
              </ListItem>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        <ListItem disableRipple button key="5" component="a">
          <Accordion
            elevation={0}
            className={classes.accNew}
            sx={{
              mt: "0rem",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              position: "relative",
              marginTop:"-30px"
            }}
          >
            <AccordionSummary
              className={classes.acc1}
            
              
            >
              <img
                src={icon6}
                alt=""
                style={{
                  height: "20px",
                  width: "20px",
                  position: "relative",
                  top: "-5px",
                  right: "10px",
                }}
              />
              <Typography style={{
                position:"relative",
                bottom:"5px",
                left:"10.5px"
            
              }} variant="body1">Accessories</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.acc2}>
              <ListItem button component="a" href="/Productlist" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option1" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option2" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option4" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option4" />
              </ListItem>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        
        <ListItem disableRipple button key="5" component="a">
          <Accordion
            elevation={0}
            className={classes.accNew}
            sx={{
              mt: "0rem",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              position: "relative",
              marginTop:"-30px"
            }}
          >
            <AccordionSummary
              className={classes.acc1}
            
              
            >
              <img
                src={icon6}
                alt=""
                style={{
                  height: "20px",
                  width: "20px",
                  position: "relative",
                  top: "-5px",
                  right: "10px",
                }}
              />
              <Typography style={{
                position:"relative",
                bottom:"5px",
                left:"10.5px"
            
              }} variant="body1">Lighting</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.acc2}>
              <ListItem button component="a" href="/Productlist" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option1" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option2" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option4" />
              </ListItem>
              <ListItem button component="a" href="/" style={{
                position:"relative",
                bottom:"20px",
                right:"28px"
              }}>
                {/* <ListItemIcon>
                  {" "}
                  <img
                    src={icon1}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      top: "-5px",
                      right: "15px",
                    }}
                  />
                </ListItemIcon> */}
                <ListItemText primary="Option4" />
              </ListItem>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        
        <ListItem disableRipple button key="5" component="a" sx={{
          
              
            
             
            }}>
          <Box component="a" href="/catalouge"
            elevation={0}
            className={classes.accNew}
            style={{

              marginTop:"-30px"
            }}
            
          >
            <AccordionSummary
              className={classes.acc1}
            
              
            >
              <img
                src={icon6}
                alt=""
                style={{
                  height: "20px",
                  width: "20px",
                  position: "relative",
                  top: "-5px",
                  right: "10px",
                }}
              />
              <Typography style={{
                position:"relative",
                bottom:"5px",
                left:"10.5px"
            
              }} variant="body1">Catalouge</Typography>
            </AccordionSummary>
           
          </Box>
        </ListItem>
        
        <ListItem disableRipple button key="5" component="a" sx={{
          
              
            
             
            }}>
          <Box component="a" href="/catalouge"
            elevation={0}
            className={classes.accNew}
            style={{

              marginTop:"-30px"
            }}
            
          >
            <AccordionSummary
              className={classes.acc1}
            
              
            >
              <img
                src={icon6}
                alt=""
                style={{
                  height: "20px",
                  width: "20px",
                  position: "relative",
                  top: "-5px",
                  right: "10px",
                }}
              />
              <Typography style={{
                position:"relative",
                bottom:"5px",
                left:"10.5px"
            
              }} variant="body1">Tile Visualizer</Typography>
            </AccordionSummary>
           
          </Box>
        </ListItem>
        
      
        
        
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
                padding: "10px",
              }}
            >
              <img
                src={logo}
                alt=""
                style={{
                  width: "123px",
                  height: "50px",
                  position: "relative",
                  margin: "0px 0px 0px 80px",
                }}
              />
            </Box>
          </Link>
          {isMobile && (
            <>
              <img
                src={icon4}
                alt=""
                style={{ position: "relative", left: "115px" }}
              />
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="#89a963"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <img
                  src={icon5}
                  alt=""
                  style={{ position: "relative", left: "15px" }}
                />
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
        disableSwipeToOpen={true}
      >
        {renderDrawer()}
      </SwipeableDrawer>
    </div>
  );
};

export default Navbar;
