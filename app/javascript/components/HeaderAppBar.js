import React from "react"
import PropTypes from "prop-types"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MainMenu from './MainMenu';
import MenuDrawer from './MenuDrawer';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router-dom';
import headerComponentStyles from "../../assets/javascripts/jss/components/headerComponentStyles.js";
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


const theme = createMuiTheme();

class HeaderAppBar extends React.Component {

  render () {
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
          {/*
          <NavLink to={'/blog'}>
            <ListItem button key={'Blog'}>
              <ListItemIcon> <BookmarkBorderIcon /> </ListItemIcon>
              <ListItemText primary={'Blog'} />
            </ListItem>
          </NavLink>
          */}
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
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            CSbyUs
          </Typography>
          <div>
            {sideList}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const HeaderWithRouter = withRouter(HeaderAppBar);
export default withStyles(headerComponentStyles)(HeaderWithRouter);
