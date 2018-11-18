import React from "react"
import PropTypes from "prop-types"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MainMenu from './MainMenu';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router-dom';


const styles = theme => ({
  appBar: {
    position: 'fixed',
    paddingTop: '0%',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const theme = createMuiTheme();

class HeaderAppBar extends React.Component {

  render () {
    const { classes } = this.props;

    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MainMenu />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            CSbyUs
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

const HeaderWithRouter = withRouter(HeaderAppBar);
export default withStyles(styles)(HeaderWithRouter);
