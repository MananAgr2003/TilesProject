import { React, useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { Paper, Typography, Container, Button, Box } from "@mui/material";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import banner from "../../assets/banner2.png";
import FadeInWrapper from "../../AnimationWrapper/FadeIn";
import MovingLine from "../../cards/linegreen";

function Number({ n }) {
  const [inView, setInview] = useState(false);
  const { number } = useSpring({
    from: { number: 0 },

    number: inView ? n : 0,

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
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));

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
          margin: { md: "60px 4rem 0rem 4rem", xs: "90px 4rem 0rem 4rem" },

          zIndex: "1000",
          fontWeight: 700,
          backgroundColor: { md: "white", xs: "white" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: {
              md: "none",
              xs: "block",
            },
            zIndex: "-1",
            backgroundColor: "#f3f6ef",
            height: "700px",
            width: "100vw",
            left: -65,
            top: -55,
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column-reverse" },
          }}
        >
          <Box
            sx={{
              width: { md: "53vw", xs: "80vw" },
            }}
          >
            <Box
              sx={{
                position: {
                  md: "relative",
                  xs: "absolute",
                },

                top: {
                  xs: "-50px",
                  md: "0px",
                },
                left: {
                  xs: "40px",
                  md: "0px",
                },
              }}
            >
              <FadeInWrapper>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: { md: "left", xs: "center" },
                    fontSize: {
                      xs: "1.7rem",
                      md: "2.5rem",
                    },
                    marginLeft: "1.5rem",
                    fontFamily: "unna",
                    span: {
                      color: "#89a963",
                    },
                  }}
                >
                  Who <span>Are We</span>
                </Typography>
                <br></br>
              </FadeInWrapper>
              <Box
                sx={{
                  height: "50px",
                  width: {md:"200px" , xs:"130px"},
                  overflow: "hidden",
                  position: "absolute",
                  top:{md: "40px" , xs:"15px"},
                  left: "30px",
                }}
              >
                <MovingLine></MovingLine>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{
                textAlign: { md: "left", xs: "center" },

                marginLeft: { md: "1.5rem", xs: "-2rem" },
                lineHeight: { md: "1.8rem", xs: "1.5rem" },

                fontSize: { md: "1.3rem", xs: "1rem" },

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

            {!isScreenSmall && (
              <>
                {" "}
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: { md: "left", xs: "center" },

                    marginLeft: { md: "1.5rem", xs: "-2rem" },
                    lineHeight: { md: "1.8rem", xs: "1.5rem" },
                    fontSize: { md: "1.3rem", xs: "0.9rem" },
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
              </>
            )}

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "left",
                marginTop: { md: "3rem", xs: "0rem" },
                width: "80vw",
                position: "relative",
              }}
            >
              <Box
                sx={{ position: "relative", right: { xs: "20px", md: "0px" } }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: { md: "left", xs: "center" },

                    marginLeft: { md: "1.5rem", xs: "-1.2rem" },
                    lineHeight: "1.8rem",
                    fontSize: { md: "1.8rem", xs: "1.4rem" },
                    fontFamily: "unna",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: {
                      xs: "#89a963",
                      md: "black",
                    },
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
                  <Box
                    sx={{
                      marginTop: "0.7rem",
                      fontSize: { md: "1.4rem", xs: "1.2rem" },
                      color: {
                        xs: "#89a963",
                        md: "black",
                      },
                    }}
                  >
                    Client Satisfcation
                  </Box>
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: { md: "left", xs: "center" },

                    marginLeft: { md: "1.5rem", xs: "1.9rem" },
                    lineHeight: "1.8rem",
                    fontSize: { md: "1.8rem", xs: "1.4rem" },
                    fontFamily: "unna",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: {
                      xs: "#89a963",
                      md: "black",
                    },
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
                  <Box
                    sx={{
                      marginTop: "0.7rem",
                      fontSize: { md: "1.4rem", xs: "1.2rem" },
                      color: {
                        xs: "#89a963",
                        md: "black",
                      },
                    }}
                  >
                    Client Satisfcation
                  </Box>
                </Typography>
              </Box>
              <Box
                sx={{
                  position: { xs: "absolute", md: "relative" },
                  left: { xs: "-20px", md: "0px" },
                  top: { xs: "80px", md: "0px" },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: { md: "left", xs: "center" },

                    marginLeft: { md: "1.5rem", xs: "-1.2rem" },
                    lineHeight: "1.8rem",
                    fontSize: { md: "1.8rem", xs: "1.4rem" },
                    fontFamily: "unna",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: {
                      xs: "#89a963",
                      md: "black",
                    },
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
                  <Box
                    sx={{
                      marginTop: "0.7rem",
                      fontSize: { md: "1.4rem", xs: "1.2rem" },
                      color: {
                        xs: "#89a963",
                        md: "black",
                      },
                    }}
                  >
                    Client Satisfcation
                  </Box>
                </Typography>
              </Box>
              <Box
                sx={{
                  position: { xs: "absolute", md: "relative" },
                  left: { xs: "140px", md: "0px" },
                  top: { xs: "80px", md: "0px" },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: { md: "left", xs: "center" },

                    marginLeft: { md: "1.5rem", xs: "1rem" },
                    lineHeight: "1.8rem",
                    fontSize: { md: "1.8rem", xs: "1.4rem" },
                    fontFamily: "unna",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: {
                      xs: "#89a963",
                      md: "black",
                    },
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
                  <Box
                    sx={{
                      marginTop: "0.7rem",
                      fontSize: { md: "1.4rem", xs: "1.2rem" },
                      color: {
                        xs: "#89a963",
                        md: "black",
                      },
                    }}
                  >
                    Client Satisfcation
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: { md: "28vw", xs: "60vw" },
              height: { md: "550px", xs: "250px" },
              marginLeft: { md: "8rem", xs: "1.2rem" },
            }}
          >
            <img
              src={banner}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
      </Paper>
    </>
  );
}
