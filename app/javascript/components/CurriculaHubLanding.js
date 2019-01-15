import React from "react"
import PropTypes from "prop-types"
import CurriculumCard from "./CurriculumCard"
import { withStyles } from '@material-ui/core/styles'
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { NavLink } from "react-router-dom";

class CurriculaHubLanding extends React.Component {

  render () {
      const { classes } = this.props;

      const data =
          [{title:"Mobile Citizens", author:"CSbyUs",
              content:"Mobile app development for middle school age students. Students work in teams to create a mobile app using App Lab. Frequency: 90mins per week for 10 weeks",
              url: 'https://drive.google.com/drive/folders/1qP1H3qu0Vx6NTtcpUucDQxqFgXs_Mj50'},
          {title:"Day of Data", author:"CSbyUs",
              content:"Introduction to the world of data science for middle school age students. In a full day, students and mentors work in teams through the data science process, answering research questions with real-world data.",
              url: 'https://docs.google.com/document/d/1i5TnWBwk2yvZpTetN5yb3ByLC2J2oVcdh71c4XSVHno/edit?usp=sharing'},
          {title:"CS First with Scratch", author:"Google",
              content:"Intro to programming activities created by Google's CS First initiative for students ages 9-14",
              url: 'https://csfirst.withgoogle.com/c/cs-first/en/curriculum.html'},
          {title:"Bootstrap:Data Science", author:"BootstrapWorld.org",
              content:"From BootstrapWorld.org: In Bootstrap:Data Science, students form their own questions about the world around them, analyze data using multiple methods, and write a research paper about their findings. The module covers functions, looping and iteration, data visualization, linear regression, and more.",
              url: 'https://www.bootstrapworld.org/materials/spring2019/courses/data-science/en-us/'},
          {title:"Computer Science Principles", author:"Code.org",
              content:"From code.org: This year-long course can be taught as an AP or non-AP course - no prerequisites required for students or for teachers new to computer science",
              url: 'https://code.org/educate/csp'},
          {title:"Hour of Code", author:"Code.org",
              content:"From code.org: The Hour of Code is a global movement reaching tens of millions of students in 180+ countries. Anyone, anywhere can organize an Hour of Code event or try any of the over 200+ one-hour tutorials, available in over 45 languages.",
              url: 'https://code.org/hourofcode/overview'},
          {title:"Basic Programming in Scratch", author:"MIT Media Lab",
              content:"A collection of detailed guides for teaching basic programming concepts using Scratch, an interactive web-based drag-and-drop coding interface perfect for young learners with no prior experience. Choose from themes like animation, art, music, games, and stories.",
              url: 'https://scratch.mit.edu/ideas'}];

      const cards = data.map((card) =>
          <CurriculumCard title = {card.title} author = {card.author}
                content = {card.content} url = {card.url}/>
      );



    return (
        //TODO: see if this works
        <React.Fragment>
          <div className={classes.layout2}>

            <Paper className={classes.featuredPicture}>
                <Grid container>
                    <Grid item md={12}>
                        <div className={classes.courseName}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                Welcome to CurriculaHub
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                A centralized page for open-access and open-source digital era curricula
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>

            <div>
              <ul>
                  {cards}
              </ul>
            </div>

            {/* Contribute */}
            <Divider/>
            <div className={classes.root2}>
                  <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                    Contribute to CurriculaHub
                  </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <p>
                    Interested in contributing to the CurriculaHub community? We'd love to collaborate with you. Please fill out <NavLink to={'/joinus'}>this form</NavLink> and include the following in your message:
                    the resources you'd like to share or adapt and relevant links so we can view them. Our curriculum team will reach out to you via email after you submit the form as soon as possible.
                  </p>
                </Typography>
            </div>
            {/* End Contribute */}
          </div>
        </React.Fragment>


    );
  }
}

export default withStyles(homeComponentStyles)(CurriculaHubLanding);
