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
    flexDirection: "column",
    height: "900px",

    width: "99vw",
    marginLeft: "1vw",
    overflow: "hidden",
    marginTop: "40px",
  },
  smallImageBoxDiv: {
    paddingLeft: "10px",
    paddingRight: "10px",
    height: "25%",
    width:"97%",
    overflowX: "scroll",
    marginRight: "1rem",
    position:"absolute",
    display:"flex",
    flexDirection:"row",
    top:"615px",
    marginTop:"15px",
    marginBottom:"15px"
  },
  smallImageBox: {
    height: "50%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginRight: "1rem",
    "& img": {
      height: "100%",
      width: "auto",
      objectFit: "contain",
    },
  },
  largeImageBox: {
    height: "270px",
    width: "98%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      height: "100%",
      width: "100%",
    },
    margin:"auto"
  },
  detailsContainer: {
    height: "100%",
    width: "40%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
     
    fontFamily: "unna",

  },
  topDetails: {
    fontFamily: "unna",
    fontSize: "16px",
    marginBottom: "0.7rem",
  },
  heading: {
    fontSize: "1.6rem",
    fontWeight: "bold",
   
    fontFamily: "unna",
    position:"relative",
    top:"320px",

    width:"90vw",
    left:"10px"
  },
  heading1: {
    fontSize: "1.2rem",
    fontWeight: "light",
   
    fontFamily: "unna",
    position:"relative",
    top:"330px",

    width:"90vw",
    left:"10px"

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
    marginTop: theme.spacing(0),
    width:"90vw",
    position:"relative",
    top:"340px",
    left:"10px"

  },
  buttonGroupOne: {
    color: "white",
    backgroundColor: "#89A963",
    borderRadius: "0px",
    height: "2.5rem",
    width: "12rem",

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
    width:"500px",
    height:"40px",
    border:"1px solid #89A963",
    position:"relative",

   
    fontFamily: "unna",
    fontSize: "12px",
    bottom:"-25px"
 
  },
  hr:{

    color:"#89A963",
    backgroundColor: "#89A963",
    border:"2px color #89A963",
    height:"1px",
    position:"relative",
   
    opacity:"0.5",
    margin:"30px 0px 30px 0px"


  },
  newTop:{

    position:"absolute",
    top:"100px",
    left:"10px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    width:"96vw"
  }

}));

const ProductDetailSectionMob = () => {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(pImage1);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <>
    <Box className={classes.root}>
     <Box className={classes.newTop}>
          <Typography variant="body2" className={classes.topDetails}>
            <span>Brand:</span> Jaguar
          </Typography>
          <Typography variant="body2" className={classes.topDetails}>
            <span>Model:</span> OLED42C2PSA
          </Typography>
         
          </Box>
      <Box className={classes.largeImageBox}>
        <ImageMagnifier  imageSrc={selectedImage}   zoomLevel={2}
  size={200}/>
      </Box>

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
      <Box className={classes.detailsContainer}>
        <Box>
<Box>
          <Typography variant="h3" className={classes.heading}>
            GOLDEN WOODEN TILE WITH A THICK TEXTURE
          </Typography>
        <Typography variant="body2"className={classes.heading1} >
            <span>Availability:</span> Only 2 in Stock
          </Typography>
          </Box>
         
          <Box className={classes.buttonGroup}>
         

            <Button className={classes.buttonGroupOne}>Inquiry</Button>
          </Box>

          
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
    </>
  );
};

export default ProductDetailSectionMob;
