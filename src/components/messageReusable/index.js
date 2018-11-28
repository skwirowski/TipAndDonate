import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { styles } from './style';

const GenericMessage = (props) => {
  return (
    <Grid
      className={props.classes.root}
      container
      justify='space-around'
    >
      <Grid
        className={props.classes.item}
        item
      >
        <Typography
          className={props.classes.text}
          color='secondary'
          variant='h3'
        >
          {props.firstMessage}
        </Typography>
        <Typography
          color='secondary'
          variant='h1'
        >
          {props.secondMessage}
        </Typography>
      </Grid>
      <Grid
        className={props.classes.item}
        item
      >
        <Typography
          color='primary'
          variant='h5'
        >
          {props.thirdMessage}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(GenericMessage);