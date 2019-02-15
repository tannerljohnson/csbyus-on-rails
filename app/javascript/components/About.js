import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Background from '../../assets/images/AboutUs.png';
import InfoSegment from "./InfoSegment"
import aboutComponentStyles from "../../assets/javascripts/jss/components/aboutComponentStyles.js";


class About extends React.Component {

  render () {

    const { classes } = this.props;

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
      </React.Fragment>
    );

    //to do: where to place this so it is below other info?
    const data =
          [
          {name:"Curriculum Research and Development", 
              content:"CRD description",
              url: 'to include'},
          {title:"Teaching Team", 
              content:"The Teaching Team (TT) is a community of mentors invested in building each other to become more excellent, caring mentors for our middle school students at StudentU and Durham Salvation Army Boys & Girls Club. Most members on TT are also involved in TRD and CRD so they use their work within classrooms to build better, respectively, technology and curriculum to improve the learning experiences of our students."
              url: 'to include'},
          {title:"Technology Research and Development",
              content:"The Tech Research & Development team (TRD) created the web application you're currently using. TRD works to scale the CSbyUs mission beyond our classrooms in Durham. CurriculaHub, alongside other resources on this site, is a one-stop shop for fellow educators to explore, adapt, discuss, and teach our CSbyUs curricula and others. In a nutshell, TRD uses technology to make teaching digital era education easier for teachers.",
              url: 'to include'}
            ];

      const cards = data.map((card) =>
          <TeamCard name= {card.name} 
                content = {card.content} url = {card.url}/>
      );

  }
}

export default withStyles(aboutComponentStyles)(About);
