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
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
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
  "Essco",
  "Viking",
  "Nirali",
  "ACPL",
  "Artist",
  "Pare",
];
const filter = ["Floor Tiles", "Wall Tiles"];
const locations = ["Livingroom", "Bedroom", "Bathroom", "Outdoor", "Parking"];
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
  acc: {
    backgroundColor: "#F9FAFB",
    border: "none",
    position: "relative",
    right: "5px",
    border: "5px solid #F9FAFB",
    "&::before": {
      display: "none", // hides the default border on the AccordionSummary component
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  acc1: {
    padding: "0px 0px",
    height: "50px",
    marginBottom: "-15px",
  },
  acc2: {
    padding: "0px 0px",
    border: "5px solid transparent",
    marginBottom: "-10px",
  },
  icon: {
    position: "relative",
    bottom: "6px",
  },
  icon2: {
    position: "relative",
    top: "4px",
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
  const [expanded, setExpanded] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    if (isExpanded) {
      setExpanded([...expanded, panel]);
    } else {
      setExpanded(expanded.filter((p) => p !== panel));
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        mt: "2rem",
        fontFamily: "unna",
        overflow: "hidden",
        height: "1700px",
      }}
    >
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

        <Accordion
          expanded={expanded.includes("panel1")}
          onChange={handleChange("panel1")}
          elevation={0}
          sx={{
            mt: "1rem",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F9FAFB",
          }}
          className={classes.acc}
        >
          <AccordionSummary
            expandIcon={
              expanded.includes("panel1") ? (
                <RemoveIcon className={classes.icon2}></RemoveIcon>
              ) : (
                <AddIcon className={classes.icon} />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.acc1}
            elevation={0}
          >
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
          </AccordionSummary>

          {brands.map((brand, index) => (
            <AccordionDetails className={classes.acc2}>
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
                        fontSize: "1.2rem",
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
            </AccordionDetails>
          ))}
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel2")}
          onChange={handleChange("panel2")}
          elevation={0}
          sx={{
            mt: "1rem",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F9FAFB",
          }}
          className={classes.acc}
        >
          <AccordionSummary
            expandIcon={
              expanded.includes("panel2") ? (
                <RemoveIcon className={classes.icon2}></RemoveIcon>
              ) : (
                <AddIcon className={classes.icon} />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.acc1}
            elevation={0}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                fontFamily: "unna",
                marginBottom: "30px",
                marginTop: "20px",
              }}
            >
              LOCATIONS
            </Typography>
          </AccordionSummary>

          {locations.map((brand, index) => (
            <AccordionDetails className={classes.acc2}>
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
                        fontSize: "1.2rem",
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
            </AccordionDetails>
          ))}
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel3")}
          onChange={handleChange("panel3")}
          elevation={0}
          sx={{
            mt: "1rem",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F9FAFB",
          }}
          className={classes.acc}
        >
          <AccordionSummary
            expandIcon={
              expanded.includes("panel3") ? (
                <RemoveIcon className={classes.icon2}></RemoveIcon>
              ) : (
                <AddIcon className={classes.icon} />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.acc1}
            elevation={0}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                fontFamily: "unna",
                marginBottom: "30px",
                marginTop: "20px",
              }}
            >
              SIZES
            </Typography>
          </AccordionSummary>

          {sizes.map((brand, index) => (
            <AccordionDetails className={classes.acc2}>
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
                        fontSize: "1.2rem",
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
            </AccordionDetails>
          ))}
        </Accordion>

        <Box
          sx={{
            mt: "1rem",
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            top: -75,
            left: "75vw",
            width: "30vw",
          }}
        >
          {filter.map((size, index) => (
            <FormControlLabel
              sx={{}}
              key={index}
              control={
                <Checkbox
                  sx={{
                    "&, & + .MuiFormControlLabel-label": {
                      fontFamily: "unna",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    },
                    "&.Mui-checked": {
                      "&, & + .MuiFormControlLabel-label": {
                        color: "#89a963",
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

          <Box
            sx={{
              height: "35px",
              width: "35px",
              position: "relative",
              top: "23px",
              left: "35px",
              border: "1px solid grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "unna",
              backgroundColor: "#89A963",
              color: "white",
            }}
          >
            1
          </Box>
          <Box
            sx={{
              height: "35px",
              width: "35px",
              position: "relative",
              top: "23px",
              left: "35px",
              border: "1px solid grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "unna",
              marginLeft: "10px",
            }}
          >
            2
          </Box>
          <Box
            sx={{
              height: "35px",
              width: "35px",
              position: "relative",
              top: "23px",
              left: "35px",
              border: "1px solid grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "unna",
              marginLeft: "10px",
            }}
          >
            ...
          </Box>
          <Box
            sx={{
              height: "35px",
              width: "35px",
              position: "relative",
              top: "23px",
              left: "35px",
              border: "1px solid grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "unna",
              marginLeft: "10px",
            }}
          >
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
