import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { styles } from './style';

class Menu extends PureComponent {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <AppBar
        position='static'
        className={classes.root}
      >
        <Tabs
          value={value}
          onChange={this.handleChange}
          fullWidth
        >
          <Tab
            label='home'
            component={Link}
            to='/'
            className={classes.tab}
          />
          <Tab
            label='data table'
            component={Link}
            to='/table'
            className={classes.tab}
          />
          <Tab
            label='contact'
            component={Link}
            to='/contact'
            className={classes.tab}
          />
        </Tabs>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Menu);