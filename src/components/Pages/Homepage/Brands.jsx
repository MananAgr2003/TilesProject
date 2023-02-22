import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { Paper, Typography, Container, Button, Box, Grid } from "@mui/material";
import banner from "../../assets/banner3.png";
import brand from "../../assets/brand.png";

export default function Overview() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          display: "flex",

          flexDirection: "column",

          width: {
            md: "100vw",
            xs: "100vw",
          },
          marginTop: { md: "80px", xs: "130px" },

          zIndex: "1000",
          fontWeight: 700,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "unna",
            fontSize: { md: "3rem", xs: "1.8rem" },
            span: {
              color: "#89A963",
            },
          }}
        >
          Our Major <span>Brands We Deal In</span>
        </Typography>

        <Box
          sx={{
            backgroundImage: `url(${banner})`,
            width: "100vw",
            height: "50vh",
            backgroundSize: "cover",
            marginTop: { md: "2rem", xs: "2rem" },
            display: "flex",

            flexDirection: "row",
            justifyContent: "center",
            alignItems: "space-between",
          }}
        >
          {!isScreenSmall && (
            <>
              <Box
                sx={{
                  display: "flex",

                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "16.6vw",

                  img: {
                    height: "55%",
                    position: "relative",
                    bottom: "4rem",
                  },
                }}
              >
                <img src={brand} alt="" />
              </Box>
              <Box
                sx={{
                  display: "flex",

                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "16.6vw",

                  img: {
                    height: "55%",
                    position: "relative",
                    top: "4rem",
                  },
                }}
              >
                <img src={brand} alt="" />
              </Box>
              <Box
                sx={{
                  display: "flex",

                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "16.6vw",

                  img: {
                    height: "55%",
                    position: "relative",
                    bottom: "4rem",
                  },
                }}
              >
                <img src={brand} alt="" />
              </Box>
              <Box
                sx={{
                  display: "flex",

                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "16.6vw",

                  img: {
                    height: "55%",
                    position: "relative",
                    top: "4rem",
                  },
                }}
              >
                <img src={brand} alt="" />
              </Box>
              <Box
                sx={{
                  display: "flex",

                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "16.6vw",

                  img: {
                    height: "55%",
                    position: "relative",
                    bottom: "4rem",
                  },
                }}
              >
                <img src={brand} alt="" />
              </Box>
              <Box
                sx={{
                  display: "flex",

                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "16.6vw",

                  img: {
                    height: "55%",
                    position: "relative",
                    top: "4rem",
                  },
                }}
              >
                <img src={brand} alt="" />
              </Box>
            </>
          )}

          {isScreenSmall && (
            <>
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",

                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height:"100%",

                     
                    }}
                  >
                    <Box component="img" src={brand} alt="" sx={{height:"120px"}}/>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",

                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height:"100%",

                     
                    }}
                  >
                    <Box component="img" src={brand} alt="" sx={{height:"120px"}}/>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",

                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height:"100%",

                     
                    }}
                  >
                    <Box component="img" src={brand} alt="" sx={{height:"120px"}}/>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",

                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height:"100%",

                     
                    }}
                  >
                    <Box component="img" src={brand} alt="" sx={{height:"120px"}}/>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",

                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height:"100%",

                     
                    }}
                  >
                    <Box component="img" src={brand} alt="" sx={{height:"120px"}}/>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",

                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height:"100%",

                     
                    }}
                  >
                    <Box component="img" src={brand} alt="" sx={{height:"120px"}}/>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",

                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height:"100%",

                     
                    }}
                  >
                    <Box component="img" src={brand} alt="" sx={{height:"120px"}}/>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",

                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height:"100%",

                     
                    }}
                  >
                    <Box component="img" src={brand} alt="" sx={{height:"120px"}}/>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      display: "flex",

                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height:"100%",

                     
                    }}
                  >
                    <Box component="img" src={brand} alt="" sx={{height:"120px"}}/>
                  </Box>
                </Grid>
              </Grid>
            </>
          )}
        </Box>
      </Paper>
    </>
  );
}
