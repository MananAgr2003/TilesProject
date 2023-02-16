import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import banner from "../../../assets/banner4.png";
import { Box } from "@material-ui/core";
import p2 from "../../../assets/sitemap/p8.png"


const useStyles = makeStyles((theme) => ({
  root: {

    background: `url(${p2})`,

    color: "#000000",
    padding: "0px 0",

    marginTop: "80px",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    width:"18.5vw",
    marginLeft:"80px",
    backgroundSize: "110% 110%",
    backgroundPosition: "center",
   
  },

  heading: {
    fontWeight: "semi-bold",
    marginBottom: "25px",
    fontFamily: "montserrat",
    position: "relative",
    top:"20px",
    
    left:"0.7rem",

    fontWeight: "light",
    filter: "brightness(100%)",
    color: "#ffffff",
    width:"15vw"

  },
  link: {
    fontWeight: "light",

    color: "#FFFFFF",
    marginBottom: "15px",
    fontFamily: "montserrat",

    filter: "brightness(100%)",
    color: "#ffffff",
    width:"15vw"
    
  },
  links: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    color: "#000000",
    left:"0.7rem",

    top:"7px",
    width:"15vw"
  },
  mainHead:{
    position:"relative",
    bottom:"0rem",

    fontWeight:"bold",
    left:"0.7rem",

    top:"7px",
    color:"white"
  },
  topBox:{
    width:"100%",
    backgroundColor:"#89A963",
    padding:"10px",
     fontFamily:"unna",
     color:"white",
     marginBottom:"1rem"
  },
  mainGrid:{
    width:"100%"
  }
}));

const Sc8 = () => {
  const classes = useStyles();

  const elements = [
    {
      heading: "Company Info",
      options: ["About Us", "Career", "We Are Hiring", "Blog"],
    },
    
   
  ];

  return (
   
      <Box className={classes.root}>
        <Box className={classes.topBox}>PRODUCTS</Box>
        <Typography className={classes.mainHead}>Tiles By Category</Typography>
        <Grid container spacing={4} className={classes.mainGrid}>
          {elements.map((element, index) => (
            <Grid item xs={12} sm={2} key={index}>
              <Typography className={classes.heading}>
                {element.heading}
              </Typography>
              <div className={classes.links}>
                {element.options.map((option, index) => (
                  <Link
                    href="#"
                    key={index}
                    className={classes.link}
                    sx={{
                      filter: "brightness(100%)",
                    }}
                  >
                    {option}
                  </Link>
                ))}
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>

  );
};

export default Sc8;
