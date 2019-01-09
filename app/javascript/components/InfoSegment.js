import React from "react"
import PropTypes from "prop-types"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


class InfoSegment extends React.Component {
  render () {

    const { classes } = this.props;

    return (
      <React.Fragment>

          {/* Mission / vision */}
          <Paper className={classes.mainFeaturedPost}>

            <div className={classes.missionContent} >
              <Typography variant="display1" color="inherit" gutterBottom align="center">
                <b>Mission</b>
              </Typography>
              <Typography variant="headline" color="inherit" paragraph align="center">
                Our mission is to ignite future change-agents by providing quality
                computer science education to students from under-resourced communities.
              </Typography>
            </div>
            <Divider/>
            <div className={classes.missionContent}>
              <Typography variant="display1" color="inherit" gutterBottom align="center">
                <b>Vision</b>
              </Typography>
              <Typography variant="headline" color="inherit" paragraph align="center">
                We envision an educational system in which all students are empowered to learn
                computer science in a way that is relevant to their lives.
              </Typography>
            </div>

          </Paper>
          {/* End mission / vision */}

          {/* Our Story */}
          <div className={classes.root2}>
              <div className={classes.ourImpactTitle}>
                <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                  Our Story
                </Typography>
              </div>
              <Typography variant="h6" gutterBottom>
                <p>
                  Our story begins in Durham, North Carolina, a community home to one of the most robust tech industries and least accessible
                  computer science (CS) education programming. We conducted <a2 href="https://drive.google.com/file/d/1mzQVjkViLtheaF52JBOaxXVTQF5Y6Xyc/view?usp=sharing">award-winning
                  research</a2> on the state of CS education, finding what Durham needs is
                  community-tailored, student-centered CS education. So, we created <a2 href="http://www.dukechronicle.com/article/2017/11/duke-students-develop-after-school-program-to-bring-computer-science-to-low-income-middle-schoolers">Mobile Citizens</a2>, a program that empowers middle school
                  students to create mobile apps relevant to their communities’ needs.
                </p>
                <p>
                  To create the curriculum for Mobile Citizens, we first turned to Code.org’s <a2 href="https://code.org/educate/csd">CS Discoveries</a2> and Google’s <a2 href="https://csfirst.withgoogle.com/en/home">CS First</a2>,
                  but we realized none quite fit the Durham community’s unique needs. With mentorship from the <a2 href="https://ospri.ssri.duke.edu/">OSPRI</a2> (Open Source Pedagogy, Research + Innovation) initiative and Duke
                  professors, we adapted CS Discoveries to make our Mobile Citizens curriculum civically minded and interactive, a curriculum
                  more meaningful than a curriculum that is “one-size-fits-all.”
                </p>
                <p>
                  We are thrilled that our Mobile Citizens curriculum has expanded to three additional Durham communities.
                  However, the problem of access to relevant CS education extends past Durham; every community deserves CS education that
                  complements its diversity and distinctiveness. CSbyUs is extending the pedagogy that served our Durham students to also serve
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
