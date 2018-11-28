import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import GenderIcon from '@material-ui/icons/Wc';
import PhoneIcon from '@material-ui/icons/PhoneAndroid';
import LocationIcon from '@material-ui/icons/LocationOn';
import { contactUserData } from '../../utils/data';
import { styles } from './style';

//? arr.slice(0).reverse().map(() => ...)
//? this makes shallow copy of an array (I don't want to reverse the oryginal array)
//? then maps of the reversed array,

const renderContacts = (users, props) => users.slice(0).reverse().map((user, index) => {
  const {
    pic, title, name, surname, gender, phone, city, country
  } = contactUserData(user);

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
              <PersonIcon
                color='primary'
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
              <GenderIcon
                color='primary'
                fontSize='large'
              />
            </ListItemIcon>
            <ListItemText
              primary={gender}
            />
          </ListItem>
          <ListItem
            className={props.classes.listItem}
          >
            <ListItemIcon>
              <PhoneIcon
                color='primary'
                fontSize='large'
              />
            </ListItemIcon>
            <ListItemText
              primary={phone}
            />
          </ListItem>
          <ListItem
            className={props.classes.listItem}
          >
            <ListItemIcon>
              <LocationIcon
                color='primary'
                fontSize='large'
              />
            </ListItemIcon>
            <ListItemText
              primary={city + ', ' + country}
            />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  )
});

const Contact = (props) => {
  return (
    <Grid
      container
      className={props.classes.root}
      justify='space-around'
    >
      {renderContacts(props.usersData, props)}
    </Grid>
  );
};

export default withStyles(styles)(Contact);