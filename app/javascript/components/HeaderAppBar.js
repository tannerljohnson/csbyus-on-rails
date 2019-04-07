import React from "react"
import PropTypes from "prop-types"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MainMenu from './MainMenu';
import MenuDrawer from './MenuDrawer';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';

import {
  Redirect,
  Link,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


const theme = createMuiTheme({
  Typography: {
    fontFamily: [
      'Avenir Next',
      'Gill Sans',
    ]
  },
});

const options = [
  { title: 'About', src: '/about' },
  { title: 'Team', src: '/about/bios' },
];

class HeaderAppBar extends React.Component {

  state = {
    mobileOpen: false,
    anchorEl: null,
  };

  handleAboutClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleAboutClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  onTitleClick() {
    window.open('https://csbyus.org/')
  };

  render () {

    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const colors = {
      color: '#FFFFFF',
      fontcolor: '#FFFFFF',
      textAlign: 'center',
      padding: '0%'
    };

    const navLinkStyles = {
      paddingLeft: theme.spacing.unit * 1,
      paddingRight: theme.spacing.unit * 1,
    };

    const aboutLinkStyles = {
      paddingLeft: theme.spacing.unit * 1,
      paddingRight: theme.spacing.unit * 1,
    };

    const mainTitleStyles = {
      fontFamily: theme.Typography.fontFamily[0],
      paddingRight: theme.spacing.unit * 3,
      color: '#FFFFFF',
      fontcolor: '#FFFFFF',
    }

    {/* make visible when small screen */}
    const drawer = (
      <div className={classes.list}>
        <List>
          <NavLink to={'/home'}>
            <ListItem className={classes.list} button key={'Home'}>
              <ListItemIcon> <HomeIcon /> </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
          </NavLink>
          <NavLink to={'/about'}>
            <ListItem className={classes.list} button key={'About'}>
              <ListItemIcon> <InfoIcon /> </ListItemIcon>
              <ListItemText primary={'About'} />
            </ListItem>
          </NavLink>
          <NavLink to={'/curriculahub'}>
            <ListItem className={classes.list} button key={'CurriculaHub'}>
              <ListItemIcon> <CloudDownloadIcon /> </ListItemIcon>
              <ListItemText primary={'CurriculaHub'} />
            </ListItem>
          </NavLink>
          <NavLink to={'/news'}>
            <ListItem className={classes.list} button key={'In the News'}>
              <ListItemIcon> <CommentIcon /> </ListItemIcon>
              <ListItemText primary={'In the News'} />
            </ListItem>
          </NavLink>
          <NavLink to={'/blog'}>
            <ListItem className={classes.list} button key={'Blog'}>
              <ListItemIcon> <BookmarkBorderIcon /> </ListItemIcon>
              <ListItemText primary={'Blog'} />
            </ListItem>
           </NavLink>
          <NavLink to={'/joinus'}>
            <ListItem className={classes.list} button key={'Join Us'}>
              <ListItemIcon> <FavoriteIcon /> </ListItemIcon>
              <ListItemText primary={'Join Us'} />
            </ListItem>
          </NavLink>
        </List>
      </div>
    );


    {/* make visible when > small screen */}
    const sideList = (
      <div>
        <List>
        {/*
          <NavLink className={classes.menuOptions} to={'/home'}>
            <ListItem button key={'Home'}>
              <ListItemText style={colors} primary={<Typography variant="subtitle" color="inherit">Home</Typography>} />
            </ListItem>
          </NavLink>
        */}
          {/*
            use this code to reenable dropdown for about us
            <NavLink style={navLinkStyles} to={'/about'}>
              <ListItem button key={'About'} onClick={this.handleAboutClick}>
                <ListItemText style={colors} primary={<Typography variant="subtitle1" color="inherit">About Us</Typography>} />
              </ListItem>
            </NavLink>
            */}
          <NavLink style={navLinkStyles} to={'/about'}>
            <ListItem button key={'About'} >
              <ListItemText style={colors} primary={<Typography variant="subtitle" color="inherit">About Us</Typography>} />
            </ListItem>
          </NavLink>
          {/* below about us menu is hidden until triggered*/}
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleAboutClose}
            PaperProps={{
              style: {
                width: 150,
              },
            }}
          >
            {options.map(option => (
              <NavLink to={option.src} style={aboutLinkStyles} >
                <MenuItem key={option.src} onClick={this.handleAboutClose}>
                  {option.title}
                </MenuItem>
              </NavLink>
            ))}
          </Menu>
          {/* end about us dropdown */}
          <NavLink style={navLinkStyles} to={'/curriculahub'}>
            <ListItem button key={'CurriculaHub'}>
              <ListItemText style={colors} primary={<Typography variant="subtitle" color="inherit">Curricula Hub</Typography>} />
            </ListItem>
          </NavLink>
         <NavLink style={navLinkStyles} to={'/news'}>
            <ListItem button key={'In the News'}>
              <ListItemText style={colors} primary={<Typography variant="subtitle" color="inherit" noWrap>In the News</Typography>} />
            </ListItem>
          </NavLink>
          <NavLink style={navLinkStyles} to={'/blog'}>
             <ListItem button key={'Blog'}>
               <ListItemText style={colors} primary={<Typography variant="subtitle" color="inherit" noWrap>Blog</Typography>} />
             </ListItem>
           </NavLink>
          <NavLink style={navLinkStyles} to={'/joinus'}>
            <ListItem button key={'Join Us'}>
              <ListItemText style={colors} primary={<Typography variant="subtitle" color="inherit" noWrap>Join Us</Typography>} />
            </ListItem>
          </NavLink>
        </List>
      </div>
    );

    return (
      <React.Fragment>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <NavLink to={'/home'}>
              <Typography className={classes.mainTitleStyles} variant="title" color="inherit" noWrap>
                CSbyUs
              </Typography>
            </NavLink>
            <Hidden mdUp>
              <IconButton
                color="inherit" fontsize="large"
                onClick={this.handleDrawerToggle}
                className={classes.drawerMenuButton}
              >
                  <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smUp implementation="css">
              <Drawer
                className={classes.headerDrawer}
                variant="temporary"
                anchor='left'
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
              >
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.handleDrawerToggle}
                  onKeyDown={this.handleDrawerToggle}
                >
                  {drawer}
                </div>
              </Drawer>
            </Hidden>
            <Hidden smDown>
            <div className={classes.headerList}>
              {sideList}
            </div>
            </Hidden>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

const HeaderWithRouter = withRouter(HeaderAppBar);
export default withStyles(headerComponentStyles)(HeaderWithRouter);
