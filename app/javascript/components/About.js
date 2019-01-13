import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Background from '../../assets/images/AboutUs.png';
import InfoSegment from "./InfoSegment"
import aboutComponentStyles from "../../assets/javascripts/jss/components/aboutComponentStyles.js";


class About extends React.Component {

  render () {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <section className={ classes.backgroungImg }>
          <div className={classes.title}>
            <subtitle>About<b>Us</b></subtitle>
          </div>
        </section>

        <div className={classes.layout}>
          <InfoSegment />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(aboutComponentStyles)(About);
