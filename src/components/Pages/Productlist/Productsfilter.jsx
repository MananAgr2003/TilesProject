import { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
  Container,
  Button,
  Box,
} from "@mui/material";
import ProductCardSqre from "../../cards/ProductCardSqre";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";
import product4 from "../../assets/products/product4.png";
import product5 from "../../assets/products/product5.png";
import product6 from "../../assets/products/product6.png";
import product7 from "../../assets/products/product7.png";
import product8 from "../../assets/products/product8.png";
import product9 from "../../assets/products/product9.png";
import arrowRight from "../../assets/arrow/arrowRight.png";
import arrowLeft from "../../assets/arrow/arrowLeft.png";
const products = 2356; // Total number of products
const brands = [
  "Jaquar",
  "essco",
  "viking",
  "nirali",
  "ACPL",
  "artist",
  "pare",
];
const locations = ["livingroom", "bedroom", "bathroom", "outdoor", "parking"];
const sizes = ["20 x 1000 MM", "35 x 1000 MM", "56 x 1000 MM", "23 x 1000 MM"];

const Products = [
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
  {
    image: product9,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "0rem 1rem 0rem 2rem",
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

function ProductFilter() {
  const classes = useStyles();

  const [pageNumber, setPageNumber] = useState(1);

  const handlePrevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const handleNextPage = () => {
    const lastPage = Math.ceil(products / 20);
    if (pageNumber < lastPage) setPageNumber(pageNumber + 1);
  };

  return (
    <Box sx={{ display: "flex", mt: "2rem", fontFamily: "unna" }}>
      <Box
        sx={{
          width: "20vw",
          padding: "0px 0px 0px 20px",
          backgroundColor: "#F9FAFB",
          margin: "0px 0px 0px 50px",
          height: "1400px",
          position: "relative",
          top: "50px",
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            fontFamily: "unna",
            backgroundColor: "white",
            position: "relative",
            bottom: "50px",
            right: "20px",
          }}
        >
          Showing {(pageNumber - 1) * 20 + 1} -{" "}
          {Math.min(pageNumber * 20, products)} out of {products} Products
        </Typography>
        <Box sx={{ mt: "1rem", display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              fontFamily: "unna",
              marginBottom: "30px",
              marginTop: "20px",
            }}
          >
            BRANDS
          </Typography>
          {brands.map((brand, index) => (
            <FormControlLabel
              sx={{
                fontFamily: "unna",
              }}
              key={index}
              control={
                <Checkbox
                  sx={{
                    "&, & + .MuiFormControlLabel-label": {
                      fontFamily: "unna",
                      fontWeight: "bold",
                      fontSize: "1.4rem",
                    },
                    "&.Mui-checked": {
                      "&, & + .MuiFormControlLabel-label": {
                        color: "#89A963",
                      },
                    },
                  }}
                />
              }
              label={brand}
            />
          ))}
         
        </Box>
        <Box sx={{ mt: "1rem", display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              fontFamily: "unna",
              marginBottom: "30px",
              marginTop: "30px",
            }}
          >
            LOCATION
          </Typography>
          {locations.map((location, index) => (
            <FormControlLabel
              sx={{
                fontFamily: "unna",

                "&.label": {
                  fontFamily: "unna",
                },
              }}
              key={index}
              control={
                <Checkbox
                  sx={{
                    "&, & + .MuiFormControlLabel-label": {
                      fontFamily: "unna",
                      fontWeight: "bold",
                      fontSize: "1.4rem",
                    },
                    "&.Mui-checked": {
                      "&, & + .MuiFormControlLabel-label": {
                        color: "red",
                      },
                    },
                  }}
                />
              }
              label={location}
            />
          ))}
        
        </Box>
        <Box sx={{ mt: "1rem", display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              fontFamily: "unna",
              marginBottom: "30px",
              marginTop: "30px",
            }}
          >
            SIZE
          </Typography>
          {sizes.map((size, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  sx={{
                    "&, & + .MuiFormControlLabel-label": {
                      fontFamily: "unna",
                      fontWeight: "bold",
                      fontSize: "1.4rem",
                    },
                    "&.Mui-checked": {
                      "&, & + .MuiFormControlLabel-label": {
                        color: "red",
                      },
                    },
                  }}
                />
              }
              label={size}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ fontFamily: "unna", width: "75vw" }}>
        <div className={classes.root}>
          <Grid container spacing={4}>
            {Products.map((item) => (
              <Grid item xs={4}>
                <div className={classes.paper}>
                  <ProductCardSqre
                    name={item.name}
                    image={item.image}
                    description={item.description}
                  ></ProductCardSqre>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ mx: "0.5rem" }}>
            <img
              src={arrowLeft}
              alt="Prev Page"
              onClick={handlePrevPage}
              style={{
                height: "35px",
                position: "relative",
                top: "25px",
                left: "35px",
              }}
            />
          </Box>

          <Box sx={{   
                height: "35px",
                width:"35px",
                position: "relative",
                top: "23px",
                left: "35px",
                border:"1px solid grey",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                fontFamily:"unna",
                backgroundColor:"#89A963",
                color:"white"
             }}>
          
            1
          </Box>
          <Box sx={{   
                height: "35px",
                width:"35px",
                position: "relative",
                top: "23px",
                left: "35px",
                border:"1px solid grey",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                fontFamily:"unna",
                marginLeft:"10px"

             }}>
          
            2
          </Box>
          <Box sx={{   
                height: "35px",
                width:"35px",
                position: "relative",
                top: "23px",
                left: "35px",
                border:"1px solid grey",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                fontFamily:"unna",
                marginLeft:"10px"

             }}>
          
            ...
          </Box>
          <Box sx={{   
                height: "35px",
                width:"35px",
                position: "relative",
                top: "23px",
                left: "35px",
                border:"1px solid grey",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                fontFamily:"unna",
                marginLeft:"10px"
             }}>
          
            15
          </Box>
          <Box sx={{ mx: "0.5rem" }}>
            <img
              src={arrowRight}
              alt="Next Page"
              onClick={handleNextPage}
              style={{
                height: "35px",
                position: "relative",
                top: "25px",
                left: "35px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductFilter;
