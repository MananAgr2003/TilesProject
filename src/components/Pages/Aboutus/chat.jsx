import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, Typography } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import ceo from "../../assets/aboutuspage/ceo.png.png";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "#89A963",
    color: "#fff",
    fontFamily: "unna",
    display: "flex",
    justifyContent: "top",
    alignItems: "center",
    flexDirection: "column",
    height: 600,
    width: "100vw",
  },
  heading: {
    fontSize: "70px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing(2),
    fontFamily: "unna",
    marginTop: "5rem",
  },
  subHeading: {
    fontSize: "27px",
    textAlign: "center",
    marginBottom: theme.spacing(2),
    fontFamily: "unna",
  },
  paragraph: {
    fontSize: "18px",
    textAlign: "center",
    marginBottom: theme.spacing(2),
    fontFamily: "unna",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 5,
    color: "white",
    height: 45,
    width: 180,
    fontSize: "18px",
    marginBottom: theme.spacing(2),
    "&:hover": {
      backgroundColor: "white",

      color: "#89A963",
    },
    margin: "auto",
    position: "relative",
    top: "50px",
    border: "1.5px solid #5F5E55",
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
  ceoImage: {
    borderRadius: "50%",
    width: 50,
    height: 50,
    objectFit: "cover",
    marginRight: theme.spacing(1),
  },
  ceoName: {
    fontSize: "18px",
    display:"flex",
    flexDirection:"column",
    marginLeft:"15px",
     fontFamily:"unna",
     fontWeight:"bold"
  },
}));

function Chat() {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Container maxWidth="md">
        <Typography variant="h1" className={classes.heading}>
          Let’s chat, we’re user friendly!
        </Typography>
        <Typography variant="h2" className={classes.subHeading}>
          Thinking about starting a team? Need to augment your existing team?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          We’re here to help. We work with US based companies to help them grow!
        </Typography>
        <Button
          variant="contained"
          className={classes.button}
          endIcon={<PhoneIcon className={classes.icon} />}
        >
          Book a call
        </Button>
        <div style={{ display: "flex", alignItems: "center" , justifyContent:"center" , position:"relative" , top:"130px"}}>
          <img src={ceo} alt="CEO Image" className={classes.ceoImage} />
          <Typography variant="body1" className={classes.ceoName}>
           <p>You’ll be talking with</p>  
           <p>Max, our CEO.</p>  
          </Typography>
        </div>
      </Container>
    </Box>
  );
}

export default Chat;
