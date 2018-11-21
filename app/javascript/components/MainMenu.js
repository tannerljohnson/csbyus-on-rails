import React from "react"
import PropTypes from "prop-types"
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Redirect,
  Link,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


const options = [
  'Home',
  'What We Do',
  'CurriculaHub',
  'Blog',
  'About',
  'Join Us',
];


const ITEM_HEIGHT = 48;

class MainMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render () {

    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton color = 'inherit'
          aria-label="Menu"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
            {options.map(option => (
              <MenuItem key={option} selected={option === 'None'} onClick={this.handleClose}>
                <NavLink to={'/' + String(option).toLowerCase().replace(/ /g,'')}>{option}</NavLink>
              </MenuItem>
            ))}
        </Menu>

      </div>
    );
  }
}


export default MainMenu;
