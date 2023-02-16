import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import banner from "../../assets/banner4.png";
import { Box } from "@material-ui/core";
import p1 from "../../assets/sitemap/p1.png"
import p2 from "../../assets/sitemap/p2.png"
import p3 from "../../assets/sitemap/p3.png"
import p4 from "../../assets/sitemap/p4.png"
import p5 from "../../assets/sitemap/p5.png"
import p6 from "../../assets/sitemap/p6.png"
import p7 from "../../assets/sitemap/p7.png"
import p8 from "../../assets/sitemap/p8.png"

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#000000",
    padding: "0px 0",

    marginTop: "80px",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    width:"20vw",
    marginLeft:"80px"
   
  },

  heading: {
    fontWeight: "semi-bold",
    marginBottom: "25px",
    fontFamily: "montserrat",
    position: "relative",
    top:"20px",
    
    left:"2rem",

    fontWeight: "light",
    filter: "brightness(100%)",
    color: "#000000",
    width:"15vw"

  },
  link: {
    fontWeight: "light",

    color: "#FFFFFF",
    marginBottom: "15px",
    fontFamily: "montserrat",

    filter: "brightness(100%)",
    color: "#000000",
    width:"15vw"
    
  },
  links: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    color: "#000000",
    left:"2rem",
    top:"7px",
    width:"15vw"
  },
  mainHead:{
    position:"relative",
    bottom:"0rem",

    fontWeight:"bold",
    left:"2rem",
    top:"7px"
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

const Smallcategory = () => {
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

export default Smallcategory;
