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
import footerComponentStyles from "../../assets/javascripts/jss/components/footerComponentStyles.js";

// const theme = createMuiTheme();

class Footer extends React.Component {

  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="title" align="center" gutterBottom className={classes.footerText}>
            Computer Science by us, for us.
          </Typography>
          <Typography variant="subheading" align="center" color="textSecondary" component="p" className={classes.footerText}>
            © 2018 CSbyUs.org. All rights reserved.
          </Typography>
          <Typography variant="subheading" align="center" color="textSecondary" component="p" className={classes.footerText}>
            CSbyUs.org publishes all content under a <a href="https://creativecommons.org/licenses/" redirects="_blank">Creative Commons license</a>.
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

const FooterWithRouter = withRouter(Footer);
export default withStyles(footerComponentStyles)(FooterWithRouter);
