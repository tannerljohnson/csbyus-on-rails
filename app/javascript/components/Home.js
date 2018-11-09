import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
// set up drawer dependencies
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import MainMenu from './MainMenu';
import ContactForm from './ContactForm';
import Video from './Video';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const lightText = blue['A200'];

const styles = theme => ({
  appBar: {
    position: 'fixed',
    paddingTop: '0%',
  },
  bgimg: {
    backgroundImage: `url('https://farm2.staticflickr.com/1968/30813166517_2dfdb78b8e_b.jpg')`,
    position: 'relative',
    width: '100%',
    height: 670,
    backgroundRepeat: 'no-repeat',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 15}px`,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  video: {
    position: 'relative',
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
    paddingTop: '5%', // 16:9
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  mainTitle: {
    paddingTop: '10%',
    marginLeft: '10%',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function handleJoinClick() {
  console.log("clicked join us");
  window.smoothScroll(document.getElementById('formTarget'));
};

// use this to scroll from join us button to the form
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 25) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}


function Home(props) {
  const { classes } = props;

    return (
      <React.Fragment>
        <CssBaseline />
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MainMenu/>
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                CSbyUs
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            {/* Big picture */}
            <div className={classes.bgimg} >
              {/* insert picture as background here */}
              <div className={classes.mainTitle}>
              {/* defined in pages.scss */}
                <subtitle>Committed to learning<br/>like the future depends on it</subtitle>
              </div>
            </div>

            {/* Hero unit */}
            <div className={classes.heroUnit}>
              <div className={classes.heroContent}>
                <Typography variant="display4" align="center" color="textPrimary" gutterBottom>
                  CSbyUs
                </Typography>
                <Typography variant="title" align="center" color="textSecondary" paragraph>
                  Developing and sharing justice-oriented education programs in computer science and beyond
                </Typography>
                <div className={classes.video}>
                  {/* Embded video with react component */}
                  <Video link='https://www.youtube.com/watch?v=in1BfwaZ2rU'/>
                </div>
              </div>
            </div>

          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item>
                <div>
                  <div className={classes.mainFeaturedPostContent}>
                    <div>
                      <Typography variant="display1" color="inherit" gutterBottom align="center">
                        <b>Who are we?</b>
                      </Typography>
                      <Typography variant="headline" color="inherit" paragraph align="center">
                        CSbyUs is a nonprofit and affiliate of Duke University working to ignite future change-agents by providing quality
                        computer science education to students from under-resourced communities.
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="display1" color="inherit" gutterBottom align="center">
                        <b>What is CSbyUs?</b>
                      </Typography>
                      <Typography variant="headline" color="inherit" paragraph align="center">
                        CSbyUs envisions an educational system in which all students are empowered to learn
                        computer science in a way that is relevant to their lives. To that end, we customize curricula,
                        train mentors, and provide a platform for justice-minded educators to collaborate.
                      </Typography>
                    </div>
                    {/* Join us button here */}
                    <div className={classes.heroButtons}>
                      <Grid container spacing={16} justify="center">
                        <Grid item>
                          <Button variant="contained" color="primary" onClick={handleJoinClick}>
                            Join us today
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                    {/* End join us button  */}
                  </div>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}

            {/* End hero unit */}
          </main>
          <div id="formTarget">
            <ContactForm />
            
            <aForm href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i>Follow Us</aForm>

            <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"></link>
            <link href='https://fonts.googleapis.com/css?family=Roboto:400' rel='stylesheet' type='text/css'></link>
          </div>
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

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
