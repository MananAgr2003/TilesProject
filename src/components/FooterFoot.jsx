import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: theme.spacing(2),
  },
  text: {
    color: "#bbbbbb",
    fontFamily: "unna",
    marginLeft: "15rem",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      marginRight: theme.spacing(1),
      color: "#89A963",
    },
  },

  iconDiv: {
    marginRight: "15rem",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="body2" className={classes.text}>
        Designed by Clear Concept Solutions All Right Reserved
      </Typography>
      <div className={classes.iconDiv}>
        <Box className={classes.icons}>
          <Facebook />
          <Instagram />
          <Twitter />
        </Box>
      </div>
    </Box>
  );
}
