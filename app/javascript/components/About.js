import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Background from '../../assets/images/AboutUs.png';
import MediaCard from '../components/MediaCard'

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
  root: {
  flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
},
missionUnit: {
  backgroundColor: theme.palette.background.paper,
  textAlign: 'center',
},
visionUnit: {
  backgroundColor: theme.palette.background.paper,
  textAlign: 'center',
},
visionImg: {
  backgroundImage: "http://wall2born.com/data/out/672/image-43397821-blue-texture-wallpaper.jpg",
  position: 'relative',
  width: '100%',
  height: 600,
  backgroundRepeat: 'no-repeat',
},
sectionContent: {
  maxWidth: 600,
  margin: '0 auto',
  padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
},
meetTeamUnit: {
  backgroundColor: theme.palette.background.paper,
  textAlign: 'center',
},
meetTeamContent: {
  maxWidth: 600,
  margin: '0 auto',
  padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
},
card: {
  maxWidth: 345,
},
media: {
  height: 140,
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

          <div className={classes.missionUnit}>
            <div className={classes.sectionContent}>
              <Typography variant="display4" align="center" color="textPrimary" gutterBottom>
                Mission
              </Typography>
              <Typography variant="title" align="center" color="textSecondary" paragraph>
                Developing and sharing justice-oriented education programs in computer science and beyond
              </Typography>
              </div>
            </div>

            <div className={classes.visionUnit}>
              <div className={classes.sectionContent}>
                <Typography variant="display4" align="center" color="textPrimary" gutterBottom>
                  Vision
                </Typography>
                <Typography variant="title" align="center" color="inherit" paragraph>
                  Developing and sharing justice-oriented education programs in computer science and beyond
                </Typography>
                </div>
              </div>

              <div className={classes.meetTeamUnit}>
                <div className={classes.sectionContent}>
                  <Typography variant="display4" align="center" color="textPrimary" gutterBottom>
                    Our Team
                  </Typography>
                  <Typography variant="title" align="center" color="inherit" paragraph>
                    Developing and sharing justice-oriented education programs in computer science and beyond
                  </Typography>
                  <MediaCard/>
                  <MediaCard/>
                  <MediaCard/>
                  </div>
                </div>
          </section>


      </React.Fragment>

    );
  }
}

export default withStyles(styles)(About);
