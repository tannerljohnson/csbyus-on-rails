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
    const colors = {
      color: '#FFFFFF',
      fontcolor: '#FFFFFF',
      align: 'center'
    };

    const navLinkStyles = {
      alignItems:"center",
      justifyContent:"center",
    };

    const sideList = (
      <div className={classes.list}>
        <List>
          <NavLink style={navLinkStyles} to={'/home'}>
            <ListItem button key={'Home'}>
              {/*<ListItemIcon style={colors}> <HomeIcon /> </ListItemIcon>*/}
              <ListItemText style={colors} primary={<Typography variant="subtitle" color="inherit">Home</Typography>} />
            </ListItem>
          </NavLink>
          <NavLink style={navLinkStyles} to={'/about'}>
            <ListItem button key={'About'}>
              {/*<ListItemIcon style={colors}> <InfoIcon /> </ListItemIcon>*/}
              <ListItemText style={colors} primary={<Typography variant="subtitle" color="inherit">About Us</Typography>} />
            </ListItem>
          </NavLink>
          <NavLink style={navLinkStyles} to={'/curriculahub'}>
            <ListItem button key={'CurriculaHub'}>
              {/*<ListItemIcon style={colors}> <CloudDownloadIcon /> </ListItemIcon>*/}
              <ListItemText style={colors} primary={<Typography variant="subtitle" color="inherit">Curricula Hub</Typography>} />            </ListItem>
          </NavLink>
          {/*
          <NavLink style={navLinkStyles} to={'/blog'}>
            <ListItem button key={'Blog'}>
              <ListItemText style={colors} primary={<Typography variant="subtitle" color="inherit">Blog</Typography>} />
            </ListItem>
          </NavLink>
          */}
          <NavLink style={navLinkStyles} to={'/joinus'}>
            <ListItem button key={'Join Us'}>
              {/*<ListItemIcon style={colors}> <FavoriteIcon /> </ListItemIcon> */}
              <ListItemText style={colors} primary={<Typography variant="subtitle" color="inherit" noWrap>Join Us</Typography>} />
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
