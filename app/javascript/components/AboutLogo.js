import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HomeLogoLayout from './HomeLogoLayout';
import Background from '../../assets/images/AboutUs.png';

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = theme => ({
  background: {
    backgroundImage: `url(${Background})`,
    backgroundColor: theme.palette.secondary.light, // Average color of the background image.
    backgroundPosition: 'center',
  },
  h2: {
    fontFamily: theme.Typography.fontFamily[0],
    marginTop: theme.spacing.unit * 20,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 35,
      marginRight: theme.spacing.unit * 10,
      marginLeft: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 10,
    },
  },
  h5: {
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing.unit * 50,
      marginLeft: theme.spacing.unit * 20,
    },
  },
  more: {
    marginTop: theme.spacing.unit * 2,
  },
});


function AboutLogo(props) {
  const { classes } = props;

  return (
    <HomeLogoLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="" />
      <Typography color="inherit" align="center" variant="h1" marked="center" className={classes.h2} >
        About <b>Us</b>
      </Typography>
    </HomeLogoLayout>
  );
}

AboutLogo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutLogo);
