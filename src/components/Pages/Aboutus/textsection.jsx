import { React, useState } from "react";

import { Paper, Typography, Container, Button, Box } from "@mui/material";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import banner from "../../assets/banner2.png";
import banner1 from "../../assets/aboutuspage/banner5.png";
import FadeInWrapper from "../../AnimationWrapper/FadeIn";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

function Number({ n }) {
  const [inView, setInview] = useState(false);
  const { number } = useSpring({
    from: { number: 0 },
   
      number: inView ? 800 : 0,

    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <Waypoint onEnter={() => setInview(true)} onLeave={() => setInview(false)}>
      <animated.Box>{number.to((n) => n.toFixed(0))}</animated.Box>
    </Waypoint>
  );
}

export default function Textsection() {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          display: "flex",

          flexDirection: "column",

          maxWidth: {
            md: "100vw",
            xs: "100vw",
          },
          margin: {md:"80px 4rem 0rem 4rem" , xs:"0px 0rem 0rem 0rem"},

          zIndex: "1000",
          fontWeight: 700,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {md:"row" , xs:"column-reverse"},
            justifyContent:"center",
             alignItems:"center"
          }}
        >
          <Box
            sx={{
              width: {md:"45vw" , xs:"100vw"},
               height:{xs:"350px" , md:"550px"} ,
               position:"relative",
               top:"50px"
            }}
          >

            <FadeInWrapper>
            <Typography
              variant="body2"
              sx={{
                textAlign: { md: "left", xs: "center" },
                fontSize: {md:"2.5rem" , xs:"1.6rem"},
                marginLeft: {md:"1.5rem" , xs:""},
                fontFamily: "unna",
                color:"#243659",
                lineHeight: {md:"3rem" , xs:"2rem"},
                padding:{
                  md:"0px" , xs:"0px 15px 0px 15px"

                },
                "& span":{
                    color:"#89A963"
                }
              }}
            >
              We are based in <span>India</span>, a country that has become  the perfect spot for 
Hardware nearshoring due to its location and time zone.
            </Typography>
            <br></br>
            </FadeInWrapper>

            <Typography
              variant="body2"
              sx={{
                textAlign: { md: "left", xs: "center" },
                padding:{
                  md:"0px" , xs:"0px 30px 0px 30px"

                },
                marginLeft: { md: "1.5rem", xs: "0rem" },
                lineHeight: {md:"2.5rem" , xs:"1.3rem"},
                fontSize: {md:"1.3rem" , xs:"1rem"},
                fontFamily: "unna",
                color:"#243659",

              }}
            >
              Lorem ipsum dolor sit amet consectetur. Aliquet dignissim ultrices
              libero amet at. Nullam aliquet blandit euismod quis congue. Ut
              sapien nisi fames purus et sit turpis diam nunc. Rhoncus varius
              massa quis sit in sed elit mauris tincidunt. Pellentesque in
              dictumst enim lacus accumsan nisl odio faucibus amet. Pellentesque
              nulla hac nulla interdum sapien lacus sit.
            </Typography>
            <br></br>
           
         

          
          </Box>
          <Box sx={{ width:{md: "39vw" , xs:"90vw"} , height:{md:"550px" , xs:"329px"} , marginLeft:{md: "8rem" , xs:"0rem"} }}>
            <img src={banner1} alt="" style={{ width: "100%"  , height:"100%"}} />
          </Box>
        </Box>
      </Paper>
    </>
  );
}
