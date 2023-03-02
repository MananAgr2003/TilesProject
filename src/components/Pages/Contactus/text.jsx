import { React, useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
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

export default function Text() {
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
          margin: {md:"80px 4rem 0rem 4rem" , xs:"460px 2rem 0rem 2rem"},

          zIndex: "1000",
          fontWeight: 700,
          height:"420px",
          display:{md:"block" , xs:"block"},
          overflow:{xs:"hidden" , md:"visible"}

        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {md:"row" , xs:"column-reverse"},
          }}
        >
          <div
            style={{
              width: "53vw",
              visibility: "hidden",
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
                  color: "#89A963",
                }}
              >
                Who Are We
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
                    color: "#89A963",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#89A963",
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
                    color: "#89A963",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#89A963",
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
                    color: "#89A963",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#89A963",
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
                    color: "#89A963",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#89A963",
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
          <Box
            sx={{
              width: "300px",
              height: "850px",
              marginLeft: "8rem",
              position: "relative",
              left: {md:"100px" , xs:"-120px"},
              bottom:{md:"50px" , xs:"0px"},
              
            }}
          >
            <Typography
              sx={{
                fontFamily: "unna",
                fontWeight: "bold",
                fontSize: "25px",
                marginBottom: "5px",
              }}
            >
              Our Store ( Pune )
            </Typography>
            <Typography  sx={{
                fontFamily: "unna",
                fontSize: "18px",
                marginBottom: "10px",
                width:"300px",
                 fontWeight:"500",
                  lineHeight:"18px"
              }}>
              Germany — 785 15h Street, Office 478/B Green Mall Berlin, De 81566
            </Typography>
            <Typography sx={{
                fontFamily: "unna",
                fontSize: "18px",
                marginBottom: "-5px",
                width:"300px",
                 fontWeight:"500"
              }} >Phone: +1 1234 567 88</Typography>
            <Typography sx={{
                fontFamily: "unna",
                fontSize: "18px",
                marginBottom: "0px",
                width:"300px",
                 fontWeight:"500",
                 span:{
                    color:"red"
                 }
              }}>Email: <span>contact@example.com</span></Typography>
            <Typography sx={{
                fontFamily: "unna",
                fontSize: "18px",
                marginBottom: "0px",
                width:"300px",
                 fontWeight:"550",
                 span:{
                    color:"red"
                 }
              }}>Opening Hours</Typography>
            <Typography sx={{
                fontFamily: "unna",
                fontSize: "18px",
                marginBottom: "-5px",
                width:"300px",
                 fontWeight:"500",
                 span:{
                    color:"red"
                 }
              }}>Monday - Friday : 9am - 5pm </Typography>
            <Typography sx={{
                fontFamily: "unna",
                fontSize: "18px",
                marginBottom: "15px",
                width:"300px",
                 fontWeight:"500",
                 span:{
                    color:"red"
                 }
              }}> Weekend Closed</Typography>
           
            <Typography
              sx={{
                fontFamily: "unna",
                fontWeight: "bold",
                fontSize: "25px",
                marginBottom: "5px",
              }}
            >
              Our Store ( Mumbai )
            </Typography>
            <Typography  sx={{
                fontFamily: "unna",
                fontSize: "18px",
                marginBottom: "10px",
                width:"300px",
                 fontWeight:"500",
                  lineHeight:"18px"
              }}>
              Germany — 785 15h Street, Office 478/B Green Mall Berlin, De 81566
            </Typography>
            <Typography sx={{
                fontFamily: "unna",
                fontSize: "18px",
                marginBottom: "-5px",
                width:"300px",
                 fontWeight:"500"
              }} >Phone: +1 1234 567 88</Typography>
            <Typography sx={{
                fontFamily: "unna",
                fontSize: "18px",
                marginBottom: "0px",
                width:"300px",
                 fontWeight:"500",
                 span:{
                    color:"red"
                 }
              }}>Email: <span>contact@example.com</span></Typography>
            <Typography sx={{
                fontFamily: "unna",
                fontSize: "18px",
                marginBottom: "0px",
                width:"300px",
                 fontWeight:"550",
                 span:{
                    color:"red"
                 }
              }}>Opening Hours</Typography>
            <Typography sx={{
                fontFamily: "unna",
                fontSize: "18px",
                marginBottom: "-5px",
                width:"300px",
                 fontWeight:"500",
                 span:{
                    color:"red"
                 }
              }}>Monday - Friday : 9am - 5pm </Typography>
            <Typography sx={{
                fontFamily: "unna",
                fontSize: "18px",
                marginBottom: "15px",
                width:"300px",
                 fontWeight:"500",
                 span:{
                    color:"red"
                 }
              }}> </Typography>
           
          </Box>
        </Box>
      </Paper>
    </>
  );
}
