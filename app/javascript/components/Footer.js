import React from "react"
import PropTypes from "prop-types"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MainMenu from './MainMenu';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 4,
  },
});

const theme = createMuiTheme();

class Footer extends React.Component {

  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="title" align="center" gutterBottom>
            Computer Science by us, for us.
          </Typography>
          <Typography variant="subheading" align="center" color="textSecondary" component="p">
            © 2018 CSbyUs.org. All rights reserved.
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

const FooterWithRouter = withRouter(Footer);
export default withStyles(styles)(FooterWithRouter);
