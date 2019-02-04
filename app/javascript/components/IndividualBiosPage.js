import React from "react"
import PropTypes from "prop-types"
import IndividualBioCard from "./IndividualBioCard"
import { withStyles } from '@material-ui/core/styles'
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { NavLink } from "react-router-dom";

class TechTeam extends React.Component {

  render () {
      const { classes } = this.props;

      const data =
          [
          {name:"Tanner Johnson", position:"Team Leader",
              caption:"Graduated from Duke!"},
          {name:"Cady Zhou", position:"Freshman, CS",
              caption:"Freshman"},
          {name:"Megan Phibbons", position:"Sophomore, CS",
                  caption:""},
          {name:"Judyth Estrada Salinas", position:"Junior, CS & Sociology",
              caption:""},
          {name:"Eliza Paradise", position:"Sophomore, CS",
              caption:""},
          {name:"Vivian Kirby", position:"Sophomore, CS & Math",
              caption:""}
            ];

      const cards = data.map((card) =>
          <IndividualBioCard name = {card.name} position = {card.position}
                caption = {card.caption}/>
      );



    return (
        //TODO: see if this works
        <React.Fragment>
          <div className={classes.layout2}>

            <Paper className={classes.curriculanameHeader}> //figure out this
                <div className={classes.courseName}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        Our Tech Team
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                        These are the wonderful people building the website you're on right now!
                    </Typography>
                </div>
            </Paper>


              <Grid container spacing={24}>
                  {cards.map(card => (
                    // change xs setting to 12 for one card per row
                     <Grid item xs={12} sm={6} key={card.toString()}>
                         {card}
                     </Grid>
                   ))}
             </Grid>

            {/* Join Our Team! */}
            <Divider/>
            <div className={classes.root2}>
                  <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                    Interested in our team?
                  </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <p>
                    We'd love to collaborate with you. Please fill out <NavLink to={'/joinus'}>this form</NavLink> and include the following in your message:
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

export default withStyles(homeComponentStyles)(IndividualBiosPage);
