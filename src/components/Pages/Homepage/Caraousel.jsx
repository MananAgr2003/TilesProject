import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Button, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import banner from "../../assets/banner.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "A Class By itself",
    imgPath: banner,
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquet dignissim.",
  },
  {
    label: "A Class In itself",
    imgPath: banner,
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquet dignissin.",
  },
  {
    label: "A Class By itself",
    imgPath: banner,
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquet dignissim.",
  },
  {
    label: "A Class In itself",
    imgPath: banner,
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquet dignissin.",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        Width: "100vw",
        
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        sx={{
          maxWidth: "100vw",
          height: "auto",
        }}
      >
        {images.map((step, index) => (
          <div
            key={step.label}
            style={{
              zIndex: "99999",
              marginBottom: "5rem",
            }}
          >
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height:"593px",
                    filter: "brightness(50%)",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <Typography
                  sx={{
                    fontFamily: "julius sans one",
                    fontSize: "60px",

                    color: "White",

                    width: "100%",
                    position: "absolute",
                    top: "12rem",
                    paddingLeft: "7rem",
                  }}
                >
                  {step.label}
                </Typography>

                <Box
                  sx={{
                    fontFamily: "julius sans one",
                    fontSize: "20px",

                    color: "White",

                    width: "100%",
                    position: "absolute",
                    top: "18rem",
                    paddingLeft: "7rem",
                    fontWeight: "550",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "julius sans one",
                      fontSize: "25px",

                      color: "White",

                      width: "100%",

                      fontWeight: "550",
                    }}
                  >
                    {step.desc}
                  </Typography>

                  <Button
                    sx={{
                      fontFamily: "julius sans one",
                      fontSize: "18px",
                      backgroundColor: "#89A963",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#89A963",
                      },
                      height: "3rem",
                      width: "13rem",
                      borderRadius: "8px",
                      marginRight: "0.7rem",
                      position: "absolute",

                      top: "4rem",
                    }}
                    size="small"
                    onClick={handleBack}
                  >
                    Read More
                  </Button>

                  <Box
                    sx={{
                      fontFamily: "julius sans one",
                      fontSize: "18px",
                      backgroundColor: "transparent",
                      color: "white",

                      height: "3.5rem",
                      width: "20rem",
                      borderRadius: "0px",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      top: "18.9rem",
                      left: "0rem",
                      zIndex:"9999"
                    }}
                    size="small"
                    onClick={handleBack}
                  >
                    Wooden Wall Tile
                  </Box>
                </Box>
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <Box
                    sx={{
                      fontFamily: "julius sans one",
                      fontSize: "18px",
                      backgroundColor: "#89A963",
                      color: "white",

                      height: "3.5rem",
                      width: "20rem",
                      borderRadius: "0px",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      top: "45.5rem",
                      left: "0rem",
                      zIndex:"-1"
                    }}
                    size="small"
                    onClick={handleBack}
                  >
                    
                  </Box>

      <MobileStepper
        sx={{
          position: "relative",

          padding: "0px",
          justifyContent: "right",

          top: "-50px",
          height: "0rem",
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "black",
              },
              height: "4.5rem",
              width: "4.5rem",
              borderRadius: "0px",
            }}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "black",
              },
              height: "4.5rem",
              width: "4.5rem",
              borderRadius: "0px",
              marginRight: "0.7rem",
            }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
