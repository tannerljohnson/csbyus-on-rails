import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Background from '../../assets/images/AboutUs.png';


const styles = theme => ({
  backgroungImg: {
    backgroundImage: `url(${Background})`,
    position: 'relative',
    width: '100%',
    height: 600,
    backgroundRepeat: 'no-repeat',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
  },
  mainFeaturedPostContent: {
    paddingTop: `${theme.spacing.unit * 45}px`,
    marginLeft: theme.spacing.unit * 25,
    marginRight: theme.spacing.unit * 25,
    color: 'white',
  },
  title: {
    paddingTop: `${theme.spacing.unit * 45}px`,
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

class About extends React.Component {

  render () {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <section className={ classes.backgroungImg }>
          <div className={classes.title}>
            <subtitle>About <b>Us</b></subtitle>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(About);
