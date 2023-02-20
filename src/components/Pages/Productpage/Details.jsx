import { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";

import pImage1 from "../../assets/ProductPageImages/img1.png";
import pImage2 from "../../assets/ProductPageImages/img2.png";
import pImage3 from "../../assets/ProductPageImages/img3.png";
import pImage4 from "../../assets/ProductPageImages/img4.png";
import ImageMagnifier from "../../cards/magnify";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "680px",

    width: "99vw",
    marginLeft: "1vw",
    overflow: "hidden",
    marginTop: "56px",
  },
  smallImageBoxDiv: {
    paddingLeft: "10px",
    paddingRight: "10px",
    height: "100%",
    overflowY: "scroll",
    marginRight: "1rem",
  },
  smallImageBox: {
    height: "25%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginBottom: "2rem",
    "& img": {
      height: "100%",
      width: "auto",
      objectFit: "contain",
    },
  },
  largeImageBox: {
    height: "100%",
    width: "38%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      height: "100%",
      width: "100%",
    },
  },
  detailsContainer: {
    height: "100%",
    width: "40%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: "47px",
    marginTop:"15px",
    fontFamily: "unna",

  },
  topDetails: {
    fontFamily: "unna",
    fontSize: "18px",
    marginBottom: "0.7rem",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    fontFamily: "unna",
  },
  bulletList: {
    marginBottom: theme.spacing(2),
    marginTop: "1rem",
  },
  bulletPoint: {
    display: "flex",
    alignItems: "center",
    "&:before": {
      content: '"\\2022"',
      paddingRight: theme.spacing(1),
      fontWeight: "bold",
    },
    "& span": {
      fontWeight: "bold",
      paddingLeft: theme.spacing(1),
    },
    fontFamily: "unna",
    fontSize: "18px",
    marginBottom: "0.7rem",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "left",
    width: "100%",
    marginTop: theme.spacing(3),

  },
  buttonGroupOne: {
    color: "white",
    backgroundColor: "#89A963",
    borderRadius: "0px",
    height: "3rem",
    width: "15rem",

    "&:hover": {
      backgroundColor: "#89A963",
    },
    fontFamily: "unna",
    fontSize: "20px",
    marginRight:"20px"
  },
  buttonGroupTwo: {
    color: "#89A963",
    backgroundColor: "white",
    borderRadius: "0px",
    height: "3rem",
    width: "15rem",
    border:"1px solid #89A963",

   
    fontFamily: "unna",
    fontSize: "20px",
    marginRight:"20px"
  },
  hr:{

    color:"#89A963",
    backgroundColor: "#89A963",
    border:"2px color #89A963",
    height:"1px",
    position:"relative",
   
    opacity:"0.5",
    margin:"30px 0px 30px 0px"


  }

}));

const ProductDetailSection = () => {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(pImage1);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.smallImageBoxDiv}>
        <Box
          className={classes.smallImageBox}
          onClick={() => setSelectedImage(pImage1)}
        >
          <img src={pImage1} alt="Small Image 1" />
        </Box>
        <Box
          className={classes.smallImageBox}
          onClick={() => setSelectedImage(pImage2)}
        >
          <img src={pImage2} alt="Small Image 2" />
        </Box>
        <Box
          className={classes.smallImageBox}
          onClick={() => setSelectedImage(pImage3)}
        >
          <img src={pImage3} alt="Small Image 3" />
        </Box>
        <Box
          className={classes.smallImageBox}
          onClick={() => setSelectedImage(pImage4)}
        >
          <img src={pImage4} alt="Small Image 4" />
        </Box>
      </Box>
      <Box className={classes.largeImageBox}>
        <ImageMagnifier  imageSrc={selectedImage}   zoomLevel={2}
  size={200}/>
      </Box>
      <Box className={classes.detailsContainer}>
        <Box>
          <Typography variant="body2" className={classes.topDetails}>
            <span>Brand:</span> Jaguar
          </Typography>
          <Typography variant="body2" className={classes.topDetails}>
            <span>Model:</span> OLED42C2PSA
          </Typography>
          <Typography variant="body2" className={classes.topDetails}>
            <span>Availability:</span> Only 2 in Stock
          </Typography>
          <Typography variant="h3" className={classes.heading}>
            GOLDEN WOODEN TILE WITH A THICK TEXTURE
          </Typography>
          <Box className={classes.bulletList}>
            <Typography variant="body1" className={classes.bulletPoint}>
              Collection: <span>Wooden Tile</span>
            </Typography>
            <Typography variant="body1" className={classes.bulletPoint}>
              Size: <span>100 x 1000 MM</span>
            </Typography>
            <Typography variant="body1" className={classes.bulletPoint}>
              Finish: <span>Carving</span>
            </Typography>
            <Typography variant="body1" className={classes.bulletPoint}>
              Color: <span> Wooden Brown</span>
            </Typography>
            <Typography variant="body1" className={classes.bulletPoint}>
              Location:
              <span> Living room, Bedroom, Washroom, Outdoor, Kitchen</span>
            </Typography>
          </Box>
          <Box className={classes.buttonGroup}>
         

            <Button className={classes.buttonGroupOne}>Inquiry</Button>
          </Box>

          <hr className={classes.hr}></hr>
          <Box className={classes.buttonGroup}>
            <Button className={classes.buttonGroupTwo}>
              100 x 1000 MM
            </Button>
            <Button className={classes.buttonGroupTwo}>
              100 x 1000 MM
            </Button>
            <Button className={classes.buttonGroupTwo}>
              100 x 1000 MM
            </Button>
          </Box>
          <Box className={classes.buttonGroup}>
            <Button className={classes.buttonGroupTwo}>
              200 x 3000 MM
            </Button>
            <Button className={classes.buttonGroupTwo}>
              200 x 3000 MM
            </Button>
            <Button className={classes.buttonGroupTwo}>
              200 x 3000 MM
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailSection;
