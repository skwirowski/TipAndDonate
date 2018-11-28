import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import CakeIcon from '@material-ui/icons/Cake';
import MoodIcon from '@material-ui/icons/Mood';
import EmailIcon from '@material-ui/icons/Email';
import { homeUserData } from '../../utils/data';
import { styles } from './style';

const renderUsers = (users, props) => users.map((user, index) => {
  const {
    pic, title, name, surname, age, username, email
  } = homeUserData(user);

  return (
    <Grid
      item
      key={index}
      xs={12}
      sm={10}
      md={6}
    >
      <Paper
        className={props.classes.paper}
      >
        <Avatar
          src={pic}
          alt={title + ' ' + name + ' ' + surname}
          className={props.classes.avatar}
        />
        <List>
          <ListItem
            className={props.classes.listItem}
          >
            <ListItemIcon>
              <FaceIcon
                color='secondary'
                fontSize='large'
              />
            </ListItemIcon>
            <ListItemText
              primary={title + ' ' + name + ' ' + surname}
            />
          </ListItem>
          <ListItem
            className={props.classes.listItem}
          >
            <ListItemIcon>
              <CakeIcon
                color='secondary'
                fontSize='large'
              />
            </ListItemIcon>
            <ListItemText
              primary={age}
            />
          </ListItem>
          <ListItem
            className={props.classes.listItem}
          >
            <ListItemIcon>
              <MoodIcon
                color='secondary'
                fontSize='large'
              />
            </ListItemIcon>
            <ListItemText
              primary={username}
            />
          </ListItem>
          <ListItem
            className={props.classes.listItem}
          >
            <ListItemIcon>
              <EmailIcon
                color='secondary'
                fontSize='large'
              />
            </ListItemIcon>
            <ListItemText
              secondary={email}
            />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  )
});

const Home = (props) => {
  return (
    <Grid
      container
      className={props.classes.root}
      justify='space-around'
    >
      {renderUsers(props.usersData, props)}
    </Grid>
  );
};

export default withStyles(styles)(Home);