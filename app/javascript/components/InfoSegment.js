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

function generate(element) {
  return [0].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
};

class InfoSegment extends React.Component {
  render () {

    const { classes } = this.props;

    return (
      <React.Fragment>

          {/* Mission / vision */}

          <div className={classes.root3}>
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

          </div>
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


            </div>

      </React.Fragment>
    );
  }
}

export default withStyles(homeComponentStyles)(InfoSegment);
