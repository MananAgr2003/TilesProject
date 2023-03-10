import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, Grid , Box , Checkbox} from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { styled } from '@mui/material/styles';

import banner from "../../assets/contactus/captcha.png";

const CustomCheckbox = styled(Checkbox)({
  '&.Mui-checked': {
    color: '#89a963', // change the color when checked
  },

  "&:hover":{

    backgroundColor:"transparent"
  }
});
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "75px 37px 89px 59px",
    width: "850px",
    height: "720px",

    border: "1px solid #ccc",
    borderRadius: "4px",
    margin: "0 auto",
    position: "absolute",
    top: "370px",
    left: 66,
    backgroundColor: "white",
  },
  root1: {
    padding: "20px",
    width: "95vw",
    height: "850px",

    border: "1px solid #ccc",
    borderRadius: "4px",
    margin: "auto auto",
    position: "absolute",
    top: "150px",
    left: 13,
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

   
      color:"black"
    
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
    marginTop: "0px",
    backgroundColor: "#89A963",

    "&:hover":{
      backgroundColor:"#89a963"
    }
  },
  captcha:{

  }
}));

const GetInTouchForm = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={!isScreenSmall ? classes.root : classes.root1}>
      <Typography variant="subtitle1" className={classes.header}>
        Contact with Us
      </Typography>
      <Typography variant="h4" className={classes.title}>
        Get in<span style={{
          color:"#89a963"
        }}> touch</span>
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        In hac habitasse platea dictumst. Pellentesque viverra sem nec orci
        lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a,
        pretium lobortis metus. Vivamus consectetur consequat justo.
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              label="Your Name*"
              variant="outlined"
              className={classes.formControl}
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} style={{

            position:"relative"
          }}>
            <Box
              variant="contained"
              color="primary"
              style={{
          
                height:"50px",
                width:"200px",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"

              }}
            >
             <img src={banner} alt="" style={{

              width:"100%",
              height:"100%"
             }}/>
             <CustomCheckbox style={{

              zIndex:"9999",
              position:"absolute",
              top:11.5,
              left:4,
              "&.Mui-checked": {
              
                  color: "#89A963",
                
              },

             }}/>
            </Box>
        
        
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
