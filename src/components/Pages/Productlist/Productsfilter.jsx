import { useState } from 'react';
import { Checkbox, FormControlLabel,   Paper, Typography, Container, Button, Box } from '@mui/material';
import ProductCard from "../../cards/ProductCard";
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
const products = 2356; // Total number of products
const brands = ["Jaquar", "essco", "viking", "nirali", "ACPL", "artist", "pare"];
const locations = ["livingroom", "bedroom", "bathroom", "outdoor", "parking"];
const sizes = ["20 x 1000 MM", "35 x 1000 MM", "56 x 1000 MM", "23 x 1000 MM"];

const Products = [
    {
        image:  product1 ,
        name: "WOODEN TILE | 20* X 40*",
        description: "We Provide You The Quality With Perfect Credibility",
    },
    {
        image:  product2 ,
        name: "WOODEN TILE | 20* X 40*",
        description: "We Provide You The Quality With Perfect Credibility",
    },
    {
        image:  product3 ,
        name: "WOODEN TILE | 20* X 40*",
        description: "We Provide You The Quality With Perfect Credibility",
    },
    {
        image:  product4 ,
        name: "WOODEN TILE | 20* X 40*",
        description: "We Provide You The Quality With Perfect Credibility",
    },
    {
        image:  product5 ,
        name: "WOODEN TILE | 20* X 40*",
        description: "We Provide You The Quality With Perfect Credibility",
    },
    {
  
        image:  product6 ,
        name: "WOODEN TILE | 20* X 40*",
        description: "We Provide You The Quality With Perfect Credibility",
    
    },
    {
        image:  product7 ,
        name: "WOODEN TILE | 20* X 40*",
        description: "We Provide You The Quality With Perfect Credibility",
    },
    {
        image:  product8 ,
        name: "WOODEN TILE | 20* X 40*",
        description: "We Provide You The Quality With Perfect Credibility",
    },
    {
        image:  product9 ,
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
    <Box sx={{ display: 'flex', mt: '2rem' }}>
      <Box sx={{ width: '20vw' }}>
        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>Showing {((pageNumber - 1) * 20) + 1} - {Math.min(pageNumber * 20, products)} out of {products} Products</Typography>
        <Box sx={{ mt: '1rem' }}>
          <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Brands</Typography>
          {brands.map((brand, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox />}
              label={brand}
            />
          ))}
          <Typography sx={{ fontSize: '0.8rem', color: 'red' }}>+{brands.length - 7} more</Typography>
        </Box>
        <Box sx={{ mt: '1rem' }}>
          <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Location</Typography>
          {locations.map((location, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox />}
              label={location}
            />
          ))}
          <Typography sx={{ fontSize: '0.8rem', color: 'red' }}>+{locations.length - 5} more</Typography>
        </Box>
        <Box sx={{ mt: '1rem' }}>
          <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Size</Typography>
          {sizes.map((size, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox />}
              label={size}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ ml: '2rem', fontFamily: 'unna' , width:"80vw" }}>
      <div className={classes.root}>
          <Grid container spacing={4}>

          {Products.map((item) => (
            <Grid item xs={4}>
              
                <div className={classes.paper}>
                  <ProductCard name={item.name} image={item.image} description={item.description}></ProductCard>
                </div>
         
            </Grid>))}
            
          </Grid>
        </div>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '1rem' }}>{pageNumber}</Typography>
          <Box sx={{ mx: '0.5rem' }}>
            <img src="/left-arrow.svg" alt="Prev Page" onClick={handlePrevPage} />
          </Box>
          <Box sx={{ mx: '0.5rem' }}>
            <img src="/right-arrow.svg" alt="Next Page" onClick={handleNextPage} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductFilter;
