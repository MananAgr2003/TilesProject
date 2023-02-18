import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "75px 37px 89px 59px",
    width: "850px",
    height:"720px",

    border: "1px solid #ccc",
    borderRadius: "4px",
    margin: "0 auto",
    position: "absolute",
    top:"370px",
    left:66,
    backgroundColor: "white",
  },
  header: {
    fontSize: "18px",
    color: "red",
    fontFamily: "unna",
    fontWeight: "bold",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "10px",
    fontFamily: "unna",
  },
  paragraph: {
    fontSize: "19px",
    marginBottom: "20px",
    fontFamily: "unna",
  },
  formControl: {
    marginBottom: "20px",
    backgroundColor: "#FDFFFA",
  },
  submitButton: {
    marginTop: "20px",
    backgroundColor:"#89A963"
  },
}));

const GetInTouchForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" className={classes.header}>
        Contact with Us
      </Typography>
      <Typography variant="h4" className={classes.title}>
        Get in touch
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        In hac habitasse platea dictumst. Pellentesque viverra sem nec orci
        lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a,
        pretium lobortis metus. Vivamus consectetur consequat justo.
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              label="Your Name*"
              variant="outlined"
              className={classes.formControl}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              label="Your Email*"
              variant="outlined"
              className={classes.formControl}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Subject*"
              variant="outlined"
              className={classes.formControl}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Your Message*"
              variant="outlined"
              multiline
              rows={4}
              className={classes.formControl}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.submitButton}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default GetInTouchForm;
