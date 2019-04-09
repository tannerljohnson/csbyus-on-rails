import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
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
import Logo from '../../assets/images/csbyuslogo.png';
import HomeLogo from './HomeLogo';
import ShareIcon from '@material-ui/icons/Share';
import BuildIcon from '@material-ui/icons/Build';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionCard from './DescriptionCard';
import ImpactCard from './ImpactCard';
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import {
  Redirect,
  Link,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


const lightText = blue['A200'];
const cards = [1, 2, 3];
const incubateText = "We're design thinkers. We start with inspiration for a new curriculum or lesson, prototype a solution, test it in North Carolina, and iterate until it's what students need. Click to read more about our team.";
const shareText = "CurriculaHub is your one-stop shop for proven and adaptable curricula. Once our programs are successful, we make them accessible to you. Click to check out our CurriculaHub.";
const supportText = "We're here for you. Teaching new curricula can be difficult without a community of support. We're building resources and a network to make that easier. Click to contact us!";
const impactText1 = {title: "196", subtitle: "Public school students engaged", content: "Our teaching team partners with public schools and after-school programs to provide high quality computer science education to students. While we are based in Durham, we are constantly looking for new audiences and working to expand across North Carolina and beyond."};
const impactText2 = {title: "100%", subtitle: "of students believe they can learn CS", content: "Our largest mark of success is an improvement in self-efficacy. Students who believe they have the ability to learn computer science are more likely to continue learning with confidence, and we want to keep that learning streak going."};
const impactText3 = {title: "22", subtitle: "Active educators", content: "Informed mentorship is key to increasing engagement and confidence. Our trained mentors have extensive technical experience. We find that when our students develop meaningful relationships with these mentors, they are able to create final products that they are proud of."};

function handleJoinClick() {
  console.log("clicked join us");
  window.smoothScroll(document.getElementById('contact-form'));
};

function generate(element) {
  return [0].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
};

// DEPRECATED -- NO LONGER USED
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
          <div className={classes.homeLayout}>

            <HomeLogo />


            {/* Hero unit */}
            <div className={classes.heroUnit}>
              <div className={classes.heroContent}>
                <div className={classes.video}>
                  {/* Embded video with react component */}
                  <Video link='https://www.youtube.com/watch?v=in1BfwaZ2rU'/>
                </div>
                <Typography variant="title" align="center" className={classes.videoTitle} color="textSecondary" paragraph gutterBottom>
                  We provide a platform for educators across the globe to access, share, discuss, and adapt lesson plans in the field of computer science and beyond.
                </Typography>
              </div>
            </div>

            <div className={classes.root}>
              <Grid container spacing={24} className={classes.descriptionCardGrid} >
                <Grid item xs={12} md={4}>
                  <DescriptionCard avatar="incubate" icon="build" url="https://csbyus.herokuapp.com/about" title="Incubate" content={incubateText} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <DescriptionCard avatar="share" icon="share" url="https://csbyus.herokuapp.com/curriculahub" title="Share" content={shareText} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <DescriptionCard avatar="support" icon="favorite" url="https://csbyus.herokuapp.com/home#contact-form" title="Support" content={supportText} />
                </Grid>
              </Grid>



          {/* Main featured post */}
          <div className={classes.root4}>
          <Paper className={classes.mainFeaturedPost}>
            <Grid container >
              <Grid item >
                <div className={classes.aboutDiv}>
                    <div className={classes.aboutContent} >
                      <Typography variant="display1" className={classes.orangeFont} color="inherit" gutterBottom align="center">
                        <b>Who Are We?</b>
                      </Typography>
                      <Typography variant="headline" className={classes.newFontAbout} color="inherit" paragraph align="center">
                        We're a team of students, teachers, and professionals spread across the globe with a common goal:<br/>To bring quality computer science education to every student.
                      </Typography>
                    </div>
                    <div className={classes.aboutContent}>
                      <Typography variant="display1" className={classes.orangeFont} color="inherit" gutterBottom align="center">
                        <b>What is CSbyUs?</b>
                      </Typography>
                      <Typography variant="headline" className={classes.newFontAbout} color="inherit" paragraph align="center">
                      We believe that to empower students, we have to empower educators.
                      We do the work of creating and testing curricula that deliver computer science
                      lessons to students in a way that is relevant to their lives and interests.
                      Once we're confident in our work, we share it with you. Not only do we welcome your feedback,
                      we want to help you customize it to fit your needs, because we know learning is unique for
                      each learning environment.
                      </Typography>
                    </div>
                    {/* Join us button here */}
                    <div className={classes.heroButtons}>
                      <Grid container spacing={16} justify="center" className={classes.heroButtons}>
                        <Grid item>
                          <NavLink to="/blog/1/get-involved-in-open-source-cs-ed">
                            <Button variant="contained" className={classes.newFont} color="inherit">
                              <b>Learn how to join us</b>
                            </Button>
                          </NavLink>
                        </Grid>
                      </Grid>
                    </div>
                    {/* End join us button  */}
                </div>
              </Grid>
            </Grid>
          </Paper>
          </div>
          {/* End main featured post */}

          <div className={classes.root2}>
              <div className={classes.ourImpactTitle}>
                <Typography variant="h2" className={classes.darkFont} align="center" color="textPrimary" gutterBottom>
                  <b>Our Impact</b>
                </Typography>
              </div>
              </div>


            <div className={classes.impactPicture}>
              <img src={'https://media.licdn.com/dms/image/C4E12AQFgBOhzn56Vjg/article-inline_image-shrink_1500_2232/0?e=1558569600&v=beta&t=DUVgjJhKEp5UVJ_uf-5rLOYkJ3BpkI1ElVaguC06zzg'} className="img-center"/>
            </div>

            <div className={classes.root}>
              <Grid container spacing={24} className={classes.descriptionCardGrid} >
                <Grid item xs={12} md={4}>
                  <ImpactCard title={impactText1.title} subtitle={impactText1.subtitle} content={impactText1.content} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ImpactCard title={impactText2.title} subtitle={impactText2.subtitle} content={impactText2.content} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ImpactCard title={impactText3.title} subtitle={impactText3.subtitle} content={impactText3.content} />
                </Grid>
              </Grid>
            </div>

          </div>
          {/* End hero unit */}
          </div>

          <Divider/>

          <div className={classes.root2}>
            <div id="contact-form">
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
