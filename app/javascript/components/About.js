import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Background from '../../assets/images/AboutUs.png';
import InfoSegment from "./InfoSegment"
import aboutComponentStyles from "../../assets/javascripts/jss/components/aboutComponentStyles.js";
import CssBaseline from '@material-ui/core/CssBaseline';
import AboutLogo from './AboutLogo';


class About extends React.Component {

  render () {

    const { classes } = this.props;

    return (
      <React.Fragment>
      {/* Use CssBaseline to fix header bar spacing */}
      <CssBaseline/>
        {/* Big picture */}
        <AboutLogo />
        <InfoSegment />
      </React.Fragment>
    );
  }
}

export default withStyles(aboutComponentStyles)(About);
