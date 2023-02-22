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
import product4 from "../../assets/products/product4.png";
import product5 from "../../assets/products/product5.png";
import product6 from "../../assets/products/product6.png";
import product7 from "../../assets/products/product7.png";
import product8 from "../../assets/products/product8.png";
import product9 from "../../assets/products/product9.png";
const products = [
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
  {
    image: product9,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:  "80px" ,
    width: "100vw",
    overflow: "hidden",
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

          flexDirection: "column",

          width: {
            md: "100vw",
            xs: "100vw",
          },
          marginTop: { md: "80px", xs: "40px" },
          padding:{xs:"0px 0px 0px 15px" , md:"0px 70px 0px 70px"},

          zIndex: "1000",
          fontWeight: 700,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "unna",
            fontSize: { md: "3rem", xs: "1.8rem" },
            span: {
              color: "#89a963",
            },
            marginBottom: "40px",
          }}
        >
          Product <span>Categories</span>
        </Typography>
        <Box
          className={!isScreenSmall ? classes.root : classes.root1}
          sx={{
            padding: { xs: "0px 0px 0px 0px", md: "0px 60px 0px 60px" },
          }}
        >
          <Grid container spacing={!isScreenSmall ? 4 : 0}>
            {products.map((item) => (
              <Grid item xs={6} md={4}>
                <Box className={classes.paper}>
                  {!isScreenSmall && (
                    <ProductCard
                      name={item.name}
                      image={item.image}
                      description={item.description}
                    ></ProductCard>
                  )}
                  {isScreenSmall && (
                    <ProductCardMob
                      name={item.name}
                      image={item.image}
                      description={item.description}
                    ></ProductCardMob>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </>
  );
}
