import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'black',
    color: 'white',
    width: '250px',
    height: '50px',

    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    display:"flex",
  
    right: -100,
    top: 300,
    zIndex: 99999,
    transform:"rotate(270deg)",
    fontSize:"25px"
  },
  containerP:{

    

  }
}));

const VerticalRectangle = () => {
  const classes = useStyles();

  return (
    <Tooltip title="Tiles" placement="left">
      <div className={classes.container}><p  className={classes.containerP}>Tiles Visualizer</p></div>
    </Tooltip>
  );
};

export default VerticalRectangle;
