import React from "react"
import { withStyles } from '@material-ui/core/styles';
import InfoSegment from "./InfoSegment"
import aboutComponentStyles from "../../assets/javascripts/jss/components/aboutComponentStyles.js";
import TeamCard from "./TeamCard";
import Grid from '@material-ui/core/Grid';

class About extends React.Component {

  render () {

    const { classes } = this.props;
     const data =
          [
          {name:"Curriculum Research and Development",
              content:"The Curriculum Research & Development (CRD) team uses design-based research to create and test inclusive CS curricula. Currently, the curriculum development mini-team is designing a curriculum to self-empower students to take control of their data and act against algorithmic bias. The curriculum research mini-team is collecting data on the efficacy of our Mobile Citizens curriculum, using these insights to inform future curriculum iterations."},
          {name:"Teaching Team",
              content:"The Teaching Team (TT) is a community of mentors invested in building each other to become more excellent, caring mentors for our middle school students at StudentU and Durham Salvation Army Boys & Girls Club. Most members on TT are also involved in TRD and CRD so they use their work within classrooms to build better, respectively, technology and curriculum to improve the learning experiences of our students."},
          {name:"Technology Research and Development",
              content:"The Tech Research & Development team (TRD) created the web application you're currently using. TRD works to scale the CSbyUs mission beyond our classrooms in Durham. CurriculaHub, alongside other resources on this site, is a one-stop shop for fellow educators to explore, adapt, discuss, and teach our CSbyUs curricula and others. In a nutshell, TRD uses technology to make teaching digital era education easier for teachers."}
            ];

    return (
      <React.Fragment> 

        {/* Big picture */}
        <div className={classes.bgimg} >
          {/* insert picture as background here */}
          <div className={classes.title}>
            <subtitle>About<b>Us</b></subtitle>
          </div>
        </div>
        <div className={classes.layout}>
          <InfoSegment />
        </div>

      <Grid container spacing = {24}>
          {data.map(card => (
              <Grid item key={card.name}>
                  <TeamCard name={card.name} content={card.content}/>
              </Grid>
          ))}
      </Grid>

      </React.Fragment>

    );


  }
}

export default withStyles(aboutComponentStyles)(About);
