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
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';


const theme = createMuiTheme();

class HeaderAppBar extends React.Component {

  render () {
    const { classes } = this.props;
    const styles = {
      root: {
        flexGrow: 1,
        paddingBottom: "0%",
      },
      grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
    };

    return (
      <React.Fragment>
      <div className={styles.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuDrawer />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              CSbyUs
            </Typography>
            {/*<Button color="inherit" variant="title">Login</Button>*/}
          </Toolbar>
        </AppBar>
      </div>
      </React.Fragment>
    );
  }
}

const HeaderWithRouter = withRouter(HeaderAppBar);
export default withStyles(headerComponentStyles)(HeaderWithRouter);
