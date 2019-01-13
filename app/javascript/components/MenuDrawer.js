import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';


import {
  Redirect,
  Link,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

// dev version
const options = [
  'Home',
  'About',
  'CurriculaHub',
  'Blog',
  'Join Us',
  // 'Donate',
];


const styles = {
  list: {
    width: 256,
  },
  fullList: {
    width: 'auto',
  },
};

class MenuDrawer extends React.Component {
  state = {
    open: false,
  };

  toggleDrawer = (drawer, open) => () => {
    this.setState({
      [drawer]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <NavLink to={'/home'}>
            <ListItem button key={'Home'}>
              <ListItemIcon> <HomeIcon /> </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
          </NavLink>
          <NavLink to={'/about'}>
            <ListItem button key={'About'}>
              <ListItemIcon> <InfoIcon /> </ListItemIcon>
              <ListItemText primary={'About'} />
            </ListItem>
          </NavLink>
          <NavLink to={'/curriculahub'}>
            <ListItem button key={'CurriculaHub'}>
              <ListItemIcon> <CloudDownloadIcon /> </ListItemIcon>
              <ListItemText primary={'CurriculaHub'} />
            </ListItem>
          </NavLink>
          <NavLink to={'/blog'}>
            <ListItem button key={'Blog'}>
              <ListItemIcon> <BookmarkBorderIcon /> </ListItemIcon>
              <ListItemText primary={'Blog'} />
            </ListItem>
          </NavLink>
          <NavLink to={'/joinus'}>
            <ListItem button key={'Join Us'}>
              <ListItemIcon> <FavoriteIcon /> </ListItemIcon>
              <ListItemText primary={'Join Us'} />
            </ListItem>
          </NavLink>
        </List>
      </div>
    );


    return (
      <div>
        <IconButton
          onClick={this.toggleDrawer('open', true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={this.state.open} onClose={this.toggleDrawer('open', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('open', false)}
            onKeyDown={this.toggleDrawer('open', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuDrawer);
