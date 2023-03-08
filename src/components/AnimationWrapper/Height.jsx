import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    height: '1000px',
  },
};

function HeightWrapper(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
}

export default withStyles(styles)(HeightWrapper);