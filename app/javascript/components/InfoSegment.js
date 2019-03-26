import React from "react"
import PropTypes from "prop-types"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TeamCard from "./TeamCard"
import Card from '@material-ui/core/Card';
import {
  Redirect,
  Link,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


function generate(element) {
  return [0].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
};

class InfoSegment extends React.Component {

  handleClick = () => {
    console.log("Button clicked!");
  };

  render () {

    const { classes } = this.props;
    const data =
          [
          {name:"Curriculum R&D",
              content:"The Curriculum Research & Development (CRD) team uses design-based research to create and test inclusive CS curricula. Currently, the curriculum development mini-team is designing a curriculum to self-empower students to take control of their data and act against algorithmic bias. The curriculum research mini-team is collecting data on the efficacy of our Mobile Citizens curriculum, using these insights to inform future curriculum iterations."},
          {name:"Teaching Team",
              content:"The Teaching Team (TT) is a community of mentors invested in building each other to become more excellent, caring mentors for our middle school students at StudentU and Durham Salvation Army Boys & Girls Club. Most members on TT are also involved in TRD and CRD so they use their work within classrooms to build better, respectively, technology and curriculum to improve the learning experiences of our students."},
          {name:"Technology R&D",
              content:"The Tech Research & Development team (TRD) created the web application you're currently using. TRD works to scale the CSbyUs mission beyond our classrooms in Durham. CurriculaHub, alongside other resources on this site, is a one-stop shop for fellow educators to explore, adapt, discuss, and teach our CSbyUs curricula and others. In a nutshell, TRD uses technology to make teaching digital era education easier for teachers."}
            ];

    return (
      <React.Fragment>
      <div className={classes.root2}>
        <main className={classes.layout2}>
          {/* Mission / vision */}

          <Paper className={classes.root3}>
            <Grid container spacing={24}>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" className={classes.title2}>
                  <b>Mission</b>
                </Typography>
                <div className={classes.heroUnit2}>
                  <List>
                    {generate(
                      <ListItem>
                        <ListItemText
                          primary={<Typography variant="subtitle1" className={classes.whiteFontMission}>Our mission is to mobilize change-agents from under-resourced learning environments by fostering critical technology skills for thriving in the digital age.</Typography>}
                          align="center"
                        />
                      </ListItem>,
                    )}
                  </List>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" className={classes.title2}>
                  <b>Vision</b>
                </Typography>
                <div className={classes.heroUnit2}>
                  <List>
                    {generate(
                      <ListItem>
                        <ListItemText
                          primary={<Typography variant="subtitle1" className={classes.whiteFontMission}>We envision an educational system in which all students are empowered to learn computer science in a way that is relevant to their lives.</Typography>}
                          align="center"
                        />
                      </ListItem>,
                    )}
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>

          <Divider/>
          {/* End mission / vision */}

          {/* Our Story */}
          <div className={classes.root2}>
              <div className={classes.ourImpactTitle}>
                <Typography variant="h3" className={classes.orangeFont} align="center" color="inherit" gutterBottom>
                  <b>Our Story</b>
                </Typography>
              </div>
              <Typography variant="h6" className={classes.aboutStory} gutterBottom>
                <p>
                  Our story begins in Durham, North Carolina, a community home to one of the most robust tech industries and least accessible
                  computer science (CS) education programming.
                </p>
                <p>
                  We conducted <a href="https://drive.google.com/file/d/1mzQVjkViLtheaF52JBOaxXVTQF5Y6Xyc/view?usp=sharing"  target="_blank">award-winning
                  research</a> on the state of CS education, finding what Durham needs is
                  community-tailored, student-centered CS education. So, we created <a href="http://www.dukechronicle.com/article/2017/11/duke-students-develop-after-school-program-to-bring-computer-science-to-low-income-middle-schoolers" target="_blank">Mobile Citizens</a>, a program that empowers middle school
                  students to create mobile apps relevant to their communities’ needs.
                </p>
                <p>
                  To create the curriculum for Mobile Citizens, we first turned to Code.org’s <a href="https://code.org/educate/csd" target="_blank">CS Discoveries</a> and Google’s <a href="https://csfirst.withgoogle.com/en/home">CS First</a>,
                  but we realized none quite fit the Durham community’s unique needs. With mentorship from the <a href="https://ospri.ssri.duke.edu/" target="_blank">OSPRI</a> (Open Source Pedagogy, Research + Innovation) initiative and Duke
                  professors, we adapted CS Discoveries to make our Mobile Citizens curriculum civically minded and interactive, a curriculum
                  more meaningful than a curriculum that is “one-size-fits-all.”
                </p>
                <p>
                  We are thrilled that our Mobile Citizens curriculum has expanded to three additional Durham communities.
                  However, the problem of access to relevant CS education extends past Durham; every community deserves CS education that
                  complements its diversity and distinctiveness.
                </p>
                <p>
                  CSbyUs is extending the pedagogy that served our Durham students to also serve
                  students in downtown Houston, suburbs of Idaho suburbs, and all other communities. It was undergraduates who created more personalized
                  CS education with our first curriculum, Mobile Citizens, and we believe that CSbyUs can empower more undergraduates to do the same.
                </p>
              </Typography>

               <div className={classes.ourImpactTitle}>
                <Typography variant="h3" className={classes.orangeFont} align="center" color="inherit" gutterBottom>
                  <b>Our Teams</b>
                </Typography>
              </div>

              <Grid container spacing = {24} className={classes.descriptionCardGrid}>
                {data.map(card => (
                  <Grid item key={card.name} style={{ textAlign: 'center' }} xs={12} md={4}>
                      <TeamCard name={card.name} content={card.content}/>
                  </Grid>
              ))}
              </Grid>
               {/* Individual bios button here */}
                    <div className={classes.heroButtons}>
                      <Grid container spacing={16} justify="center" className={classes.heroButtons}>
                        <Grid item>
                          <NavLink to={'/about/bios'}>
                            <Button variant="contained" className={classes.orangeFont} color="inherit" onClick={this.handleClick}>
                              <b>Meet our team members</b>
                            </Button>
                          </NavLink>
                        </Grid>
                      </Grid>
                    </div>
               {/* End individual bios button  */}
              </div>


            </main>
          </div>
      </React.Fragment>
    );
  }
}

export default withStyles(homeComponentStyles)(InfoSegment);
