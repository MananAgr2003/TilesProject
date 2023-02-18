import { React, useState } from "react";

import { Paper, Typography, Container, Button, Box } from "@mui/material";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import banner from "../../assets/banner2.png";
import FadeInWrapper from "../../AnimationWrapper/FadeIn";

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
      <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    </Waypoint>
  );
}

export default function AboutUs() {
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
          margin: "60px 4rem 0rem 4rem",

          zIndex: "1000",
          fontWeight: 700,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "53vw",
            }}
          >

            <FadeInWrapper>
            <Typography
              variant="body2"
              sx={{
                textAlign: { md: "left", xs: "center" },
                fontSize: "2.5rem",
                marginLeft: "1.5rem",
                fontFamily: "unna",
                span:{
                  color:"#89a963"
                }
              }}
            >
              Who <span>Are We</span>
            </Typography>
            <br></br>
            </FadeInWrapper>

            <Typography
              variant="body2"
              sx={{
                textAlign: { md: "left", xs: "center" },

                marginLeft: { md: "1.5rem", xs: "0rem" },
                lineHeight: "2rem",
                fontSize: "1.3rem",
                fontFamily: "unna",
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
            <Typography
              variant="body2"
              sx={{
                textAlign: { md: "left", xs: "center" },

                marginLeft: { md: "1.5rem", xs: "0rem" },
                lineHeight: "1.8rem",
                fontSize: "1.3rem",
                fontFamily: "unna",
              }}
            >
              Dui lorem sapien pulvinar vel. Montes viverra tincidunt platea
              dictum justo tincidunt suspendisse. Aenean tellus sed metus
              malesuada. At cras amet feugiat nisl volutpat dignissim. Cras
              tempus facilisis nullam enim nullam nisl blandit. Donec cursus
              vitae luctus donec nisl feugiat lectus
            </Typography>
            <br></br>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "left",
                marginTop: "3rem",
                width: "80vw",
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: { md: "left", xs: "center" },

                    marginLeft: { md: "1.5rem", xs: "0rem" },
                    lineHeight: "1.8rem",
                    fontSize: "1.8rem",
                    fontFamily: "unna",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Number n={961} /> +
                  </div>
                  <div
                    style={{
                      marginTop: "0.7rem",
                      fontSize: "1.4rem",
                    }}
                  >
                    Client Satisfcation
                  </div>
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: { md: "left", xs: "center" },

                    marginLeft: { md: "1.5rem", xs: "0rem" },
                    lineHeight: "1.8rem",
                    fontSize: "1.8rem",
                    fontFamily: "unna",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Number n={961} /> +
                  </div>
                  <div
                    style={{
                      marginTop: "0.7rem",
                      fontSize: "1.4rem",
                    }}
                  >
                    Client Satisfcation
                  </div>
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: { md: "left", xs: "center" },

                    marginLeft: { md: "1.5rem", xs: "0rem" },
                    lineHeight: "1.8rem",
                    fontSize: "1.8rem",
                    fontFamily: "unna",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Number n={961} /> +
                  </div>
                  <div
                    style={{
                      marginTop: "0.7rem",
                      fontSize: "1.4rem",
                    }}
                  >
                    Client Satisfcation
                  </div>
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: { md: "left", xs: "center" },

                    marginLeft: { md: "1.5rem", xs: "0rem" },
                    lineHeight: "1.8rem",
                    fontSize: "1.8rem",
                    fontFamily: "unna",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Number n={961} /> +
                  </div>
                  <div
                    style={{
                      marginTop: "0.7rem",
                      fontSize: "1.4rem",
                    }}
                  >
                    Client Satisfcation
                  </div>
                </Typography>
              </Box>
            </Box>
          </div>
          <div style={{ width: "28vw" , height:"550px" , marginLeft: "8rem" }}>
            <img src={banner} alt="" style={{ width: "100%"  , height:"100%"}} />
          </div>
        </Box>
      </Paper>
    </>
  );
}
