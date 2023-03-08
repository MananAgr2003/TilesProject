import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import DetailsTextMob from "./DetailsTextMob";

const MAX_CHARS = 1320;

function DetailsText() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [selected, setSelected] = useState("details");
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [showFullSpecs, setShowFullSpecs] = useState(false);

  const details = `1.The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers. 
  2.Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging. 
  3.65C2 Stand model is at a minimum 39% lighter than the C1 series. 
  4.The 'Reducing CO2' footprint label applies to 65C2 only. All other C2 models feature a 'CO2 Measured' label. 
  5.UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size.
  1.The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers. 
  2.Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging. 
  3.65C2 Stand model is at a minimum 39% lighter than the C1 series. 
  4.The 'Reducing CO2' footprint label applies to 65C2 only. All other C2 models feature a 'CO2 Measured' label. 
  5.UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size`;

  const specs =
    "This is the specifications section. Sed iaculis metus et urna cursus, at interdum dui accumsan. Duis vulputate iaculis euismod. Sed vel tellus sed enim auctor sollicitudin. Pellentesque fringilla lorem non neque iaculis, in porttitor urna blandit.This is the specifications section. Sed iaculis metus et urna cursus, at interdum dui accumsan. Duis vulputate iaculis euismod. Sed vel tellus sed enim auctor sollicitudin. Pellentesque fringilla lorem non neque iaculis, in porttitor urna blandit.This is the specifications section. Sed iaculis metus et urna cursus, at interdum dui accumsan. Duis vulputate iaculis euismod. Sed vel tellus sed enim auctor sollicitudin. Pellentesque fringilla lorem non neque iaculis, in porttitor urna blandit.This is the specifications section. Sed iaculis metus et urna cursus, at interdum dui accumsan. Duis vulputate iaculis euismod. Sed vel tellus sed enim auctor sollicitudin. Pellentesque fringilla lorem non neque iaculis, in porttitor urna blandit.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.This is the details section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui vitae odio gravida eleifend. Donec eu enim ac turpis faucibus dapibus. Fusce vel pharetra risus, nec aliquam augue.";

  const handleDetailsClick = () => {
    setSelected("details");
    setShowFullDetails(false);
  };

  const handleSpecsClick = () => {
    setSelected("specs");
    setShowFullSpecs(false);
  };

  const handleReadMoreClick = () => {
    if (selected === "details") {
      setShowFullDetails(true);
    } else {
      setShowFullSpecs(true);
    }
  };

  return (
    <>
{isScreenSmall && (<DetailsTextMob></DetailsTextMob>)}

{!isScreenSmall && (<> <Box


sx={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "70px"
}}
>
<Box sx={{ display: "flex", justifyContent: "center" }}>
  <Button
    onClick={handleDetailsClick}
    sx={{
      backgroundColor: selected === "details" ? "transparent" : "inherit",
      borderBottom: selected === "details" ? "4px solid #89A963" : "none",
      padding: "10px",
      marginRight: "30px",
      fontWeight: selected === "details" ? "bold" : "normal",
      color: "black",
      fontFamily: "unna",
      textTransform: "none",
      fontSize: "25px",

      "&:hover": {
        backgroundColor: "white",
      },

      borderRadius: "0px",
    }}
  >
    Description
  </Button>

  <Button
    onClick={handleSpecsClick}
    sx={{
      backgroundColor: selected === "specs" ? "transparent" : "inherit",
      borderBottom: selected === "specs" ? "4px solid #89A963" : "none",
      padding: "10px",
      marginRight: "10px",
      fontWeight: selected === "specs" ? "bold" : "normal",
      color: "black",
      fontFamily: "unna",
      textTransform: "none",
      fontSize: "25px",

      "&:hover": {
        backgroundColor: "white",
      },

      borderRadius: "0px",
    }}
  >
    Specification
  </Button>
</Box>
<hr
  style={{
    width: "90vw",
    position:"relative",
    bottom:"1.5px",
    opacity:"0.7"
  }}
></hr>
<Box sx={{ width: "80%", marginTop: "40px", textAlign: "left" }}>
  <Typography variant="body1" sx={{fontFamily:"unna"}}>
    {selected === "details"
      ? showFullDetails
        ? details
        : details.substring(0, MAX_CHARS)
      : showFullSpecs
      ? specs
      : specs.substring(0, MAX_CHARS)}
    {selected === "details" ? (
      !showFullDetails && details.length > MAX_CHARS ? (
        <Button
          onClick={handleReadMoreClick}
          sx={{
            textTransform: "none",
            color: "red",
          }}
        >
          More..
        </Button>
      ) : null
    ) : !showFullSpecs && specs.length > MAX_CHARS ? (
      <Button
        onClick={handleReadMoreClick}
        sx={{
          textTransform: "none",
          color: "red",
        }}
      >
        More..
      </Button>
    ) : null}
  </Typography>
</Box>
</Box></>)}
   
    </>
  );
}

export default DetailsText;
