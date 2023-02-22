import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Paper, Typography, Container, Button, Box } from "@mui/material";
import banner from "../../assets/banner3.png";
import brand from "../../assets/brand.png";
import ProductCardSqre from "../../cards/ProductCardSqre";
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
import HeightWrapper from "../../AnimationWrapper/Height";
const products = [
  {
    image: product1,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: product2,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: product3,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: product4,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: product5,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: product6,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: product7,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: product8,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "0rem 3rem 0rem 3rem",
    marginTop: "3rem",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridMain: {
    backgroundColor: "black",
  },
}));

export default function Products() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          display: "flex",

          flexDirection: "column",

          width: {
            md: "100vw",
            xs: "100vw",
          },

          marginTop: {md:"80px" , xs:"20px"},
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
            fontSize: {md:"3rem",xs:"2rem"}
          }}
        >
          Similar Products
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            padding: {xs:"0rem 0rem 0rem 0rem",md:"0rem 3rem 0rem 3rem"},
         
            width:"100vw",
            margin:"auto"

          }}
        >
          <Grid container spacing={!isScreenSmall ? 4 : 0}>
            {products.map((item) => (
              <Grid item xs={6} md={3}>
                <div className={classes.paper}>
                  {isScreenSmall && (
                    <ProductCardMob
                      name={item.name}
                      image={item.image}
                      description={item.description}
                    ></ProductCardMob>
                  )}

                  {!isScreenSmall && (
                    <ProductCardSqre
                      name={item.name}
                      image={item.image}
                      description={item.description}
                    ></ProductCardSqre>
                  )}
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </>
  );
}
