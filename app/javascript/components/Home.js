import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
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
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import Divider from '@material-ui/core/Divider';
import MainMenu from './MainMenu';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Video from './Video';
import HeaderAppBar from './HeaderAppBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import ImpactChart from '../../assets/images/ImpactChart.png';
import ShareIcon from '@material-ui/icons/Share';
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";


const lightText = blue['A200'];
const cards = [1, 2, 3];


function handleJoinClick() {
  console.log("clicked join us");
  window.smoothScroll(document.getElementById('formTarget'));
};

function generate(element) {
  return [0].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
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
        i++; if (i > 27) return;
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
                  CSby<b>Us</b>
                </Typography>
                <Typography variant="title" align="center" color="textSecondary" paragraph>
                  Developing and sharing equity-oriented curricula in computer science and beyond
                </Typography>
                <div className={classes.video}>
                  {/* Embded video with react component */}
                  <Video link='https://www.youtube.com/watch?v=in1BfwaZ2rU'/>
                </div>
              </div>
            </div>

            <div className={classes.root}>
              <Grid container spacing={24}>
                <Grid item xs className={classes.title}>

                  <Typography variant="h4" >
                    Incubate
                  </Typography>
                  <div className={classes.heroUnit}>
                    <List>
                      {generate(
                        <ListItem>
                          <ListItemText
                            primary="We're design thinkers. We start with inspiration for a new curriculum, prototype a solution, test it in North Carolina, and iterate until it's what students need."
                            align="center"
                          />
                        </ListItem>,
                      )}
                    </List>
                  </div>
                </Grid>
                <Grid item xs className={classes.title}>

                  <Typography variant="h4" >
                    Share
                  </Typography>
                  <div className={classes.heroUnit}>
                    <List>
                      {generate(
                        <ListItem>
                          <ListItemText
                            primary="CurriculaHub is your one-stop shop for proven and adaptable curricula. Once our programs are successful, we make them accessible to you."
                            align="center"
                          />
                        </ListItem>,
                      )}
                    </List>
                  </div>
                </Grid>
                <Grid item xs  className={classes.title}>
                  <Typography variant="h4">
                     Support
                  </Typography>
                  <div className={classes.heroUnit}>
                    <List>
                      {generate(
                        <ListItem>
                          <ListItemText
                            primary="We're here for you. Teaching new curricula can be difficult without a community of support. We're building resources and a network to make that easier."
                            align="center"
                          />
                        </ListItem>,
                      )}
                    </List>
                  </div>
                </Grid>
              </Grid>
            </div>



          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item >
                <div className={classes.aboutDiv}>
                    <div className={classes.aboutContent} >
                      <Typography variant="display1" color="inherit" gutterBottom align="center">
                        <b>Who are we?</b>
                      </Typography>
                      <Typography variant="headline" color="inherit" paragraph align="center">
                        We're a team of students, teachers, and professionals spread across the globe with a common goal: <br/>To democratize digital era education.
                      </Typography>
                    </div>
                    <div className={classes.aboutContent}>
                      <Typography variant="display1" color="inherit" gutterBottom align="center">
                        <b>What is CSbyUs?</b>
                      </Typography>
                      <Typography variant="headline" color="inherit" paragraph align="center">
                        We believe that to empower students, we have to empower educators.
                        We do the work of creating and testing curricula that deliver computer science to students in a way that is relevant to their lives.
                        Once we're confident in our work, we share it.
                        Not only do we welcome feedback, we want to help you customize it to fit your needs, because we know learning is personal.
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
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}

          <div className={classes.root2}>
              <div className={classes.ourImpactTitle}>
                <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                  Our Impact
                </Typography>
              </div>

            <div className={classes.video}>
              <img src={ImpactChart} class="img-center"/>
            </div>

            <div className={classes.root}>
              <Grid container spacing={24}>
                <Grid item xs>
                <div className={classes.title}>
                  <Typography variant="h3">
                    196
                  </Typography>
                    <List>
                      {generate(
                        <ListItem>
                          <ListItemText
                            primary="Public school students engaged"
                            secondary="Our teaching team partners with public schools and after-school programs to provide high quality computer science education to students. Currently based in Durham, we are expanding across North Carolina and beyond."
                            align="center"
                          />
                        </ListItem>,
                      )}
                    </List>
                  </div>
                </Grid>
                <Grid item xs>
                <div className={classes.title}>
                  <Typography variant="h3">
                    100%
                  </Typography>
                    <List>
                      {generate(
                        <ListItem>
                          <ListItemText
                            primary="Students believe they can learn CS"
                            secondary="Our largest mark of success is an improvement in self-efficacy. Students who believe they have the ability to learn computer science are more likely to continue learning with confidence."
                            align="center"
                          />
                        </ListItem>,
                      )}
                    </List>
                  </div>
                </Grid>
                <Grid item xs>
                  <div className={classes.title}>
                    <Typography variant="h3">
                      22
                    </Typography>
                    <List>
                      {generate(
                        <ListItem>
                          <ListItemText
                            primary="Active educators"
                            secondary="Informed mentorship is our secret sauce. We find that our students develop meaningful relationships with their trained mentors, which combined with their technical experience, results in final products students are proud of."
                            align="center"
                          />
                        </ListItem>,
                      )}
                    </List>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
            {/* End hero unit */}
          </main>

          <Divider/>

          <div className={classes.root2}>
            <div id="formTarget">
              <ContactForm />
            </div>
          </div>

      </React.Fragment>
    );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(homeComponentStyles)(Home);
