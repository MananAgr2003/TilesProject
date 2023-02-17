import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Typography, 
  TextField, 
  Button, 
  Grid 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 0 0 59px',
    width: '500px',
    height: '500px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    margin: '0 auto',
  },
  header: {
    fontSize: '14px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  formControl: {
    marginBottom: '20px',
  },
  submitButton: {
    marginTop: '20px',
  },
}));

const GetInTouchForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" className={classes.header}>Contact Us</Typography>
      <Typography variant="h4" className={classes.title}>Get in touch</Typography>
      <Typography variant="body1" className={classes.paragraph}>
        In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, 
        in bibendum urna mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. 
        Vivamus consectetur consequat justo.
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
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default GetInTouchForm;
