import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Paper, Typography, Container, Button, Box } from "@mui/material";
import banner from "../../assets/banner3.png";
import brand from "../../assets/brand.png";
import ProductCard from "../../cards/ProductCard";
import ProductCardMob from "../../cards/productCardMob";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FadeInBottom from "../../AnimationWrapper/FadeBottom";
import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";
import product4 from "../../assets/products/product4.png";
import product5 from "../../assets/products/product5.png";
import product6 from "../../assets/products/product6.png";
import product7 from "../../assets/products/product7.png";
import product8 from "../../assets/products/product8.png";
import product9 from "../../assets/products/product9.png";
const products = [
  {
      image:  product1 ,
      name: "WOODEN TILE | 20* X 40*",
      description: "We Provide You Quality With Perfect",
  },
  {
      image:  product2 ,
      name: "WOODEN TILE | 20* X 40*",
      description: "We Provide You Quality With Perfect",
  },
  {
      image:  product3 ,
      name: "WOODEN TILE | 20* X 40*",
      description: "We Provide You Quality With Perfect",
  },
  {
      image:  product4 ,
      name: "WOODEN TILE | 20* X 40*",
      description: "We Provide You Quality With Perfect",
  },
  {
      image:  product5 ,
      name: "WOODEN TILE | 20* X 40*",
      description: "We Provide You Quality With Perfect",
  },
  {

      image:  product6 ,
      name: "WOODEN TILE | 20* X 40*",
      description: "We Provide You Quality With Perfect",
  
  },
 
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: {xs:"0rem" , md:"0rem 3rem 0rem 3rem"},
    marginTop: "3rem",
  },
  root1: {
    flexGrow: 1,
    padding: {xs:"0rem" , md:"0rem 3rem 0rem 3rem"},
    marginTop: "2.5rem",
  },
  paper: {
    padding: {md:theme.spacing(2) , xs:theme.spacing(0)},
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridMain: {
    backgroundColor: "black",
  },
}));

export default function ProductList() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
 
  const classes = useStyles();
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          overflow:"hidden",

          flexDirection: "column",

          width: {
            md: "100vw",
            xs: "100vw",
          },
          
          marginTop: {md:"80px" , xs:"40px"},
          padding:{xs:"0px auto" , md:"0px 70px 0px 70px"},
          zIndex: "1000",
          fontWeight: 700,
          justifyContent: "center",
          alignItems: "center",
          overflow:"hidden"
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "unna",
            fontSize: {md:"3rem" , xs:"1.8rem"},
            span:{
              color:"#89a963"
            }
          }}
        >
          Feel <span>The Product</span>
        </Typography>
        <div className={!isScreenSmall ? classes.root : classes.root1}>
          <Grid container spacing={!isScreenSmall ? 4 : 2}>
            

          {products.map((item) => (
            <Grid item md={4} xs={6}>
              
                <div className={classes.paper}>
                {!isScreenSmall && (
                  <ProductCard name={item.name} image={item.image} description={item.description}></ProductCard>

                )}
                {isScreenSmall && (
                  <ProductCardMob name={item.name} image={item.image} description={item.description}></ProductCardMob>

                )}
                  
                </div>
         
            </Grid>))}
            
          </Grid>
        </div>
      </Paper>
    </>
  );
}
