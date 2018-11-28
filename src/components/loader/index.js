import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircuralProgress from '@material-ui/core/CircularProgress';
import { styles } from './style';

const Loader = (props) => {
  return (
    <Grid
      className={props.classes.root}
    >
      <CircuralProgress
        size={60}
      />
      <Typography
        className={props.classes.loader}
        color='primary'
        variant='h6'
      >Loading...
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(Loader);