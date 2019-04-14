import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HomeLogoLayout from './HomeLogoLayout';
import Logo from '../../assets/images/csbyuslogo.png';


const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = theme => ({
  background: {
    backgroundImage: `url(${Logo})`,
    backgroundColor: theme.palette.primary.white, // Average color of the background image.
    backgroundPosition: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '60%',
      paddingBottom: '0%',
    },
  },
  h2: {
    fontFamily: theme.Typography.fontFamily[0],
    marginTop: theme.spacing.unit * 20,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 70,
      marginRight: theme.spacing.unit * 55,
      marginLeft: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 10,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
      backgroundColor: theme.palette.primary.white, // Average color of the background image.
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


function HomeLogo(props) {
  const { classes } = props;

  return (
    <HomeLogoLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="" />
      <Typography color="textSecondary" align="center" variant="h2" marked="center" className={classes.h2} >
        Teaching computer science like the future depends on it
      </Typography>
    </HomeLogoLayout>
  );
}

HomeLogo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeLogo);
