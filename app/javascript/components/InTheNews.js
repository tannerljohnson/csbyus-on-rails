import React from "react"
import PropTypes from "prop-types"
import NewsArticleCard from "./NewsArticleCard"
import { withStyles } from '@material-ui/core/styles'
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { NavLink } from "react-router-dom";


class InTheNews extends React.Component {

  render () {
      const { classes } = this.props;

      const data =
          [
            { title:"Duke students develop after-school computer science program",
              source:"Duke Chronicle",
              imageLocation:"https://ds4q8c259towh.cloudfront.net/d38ebfa9f5525e9160d139a11d4f0b96/dist/img/dtc-fb-fallback.jpg",
              content:"Two students have created an after-school program at a nearby middle school intended to broaden participation in computer science. Now, they are trying to expand the curriculum.",
              url: 'https://www.dukechronicle.com/article/2017/11/duke-students-develop-after-school-program-to-bring-computer-science-to-low-income-middle-schoolers'},
            { title:"CSbyUs Awarded 2018 Catalytic Grant from Triangle Learning Network",
              source:"TLN Catalytic Grants",
              imageLocation:"http://box5734.temp.domains/~trianhg9/wp-content/uploads/2018/12/TLN-site-header-1.png",
              content:"CSbyUs was incubated by Duke in Durham; this grant will enable the program to reach new audiences and implement programming in new places.",
              url: 'http://box5734.temp.domains/~trianhg9/catalytic-grants/'},
            { title:"Middle Schoolers Develop Apps in Mobile Citizens Program",
              source:"Duke Computer Science",
              imageLocation:"https://ghc.anitab.org/wp-content/uploads/sites/2/2018/06/duke-university-logo-300x150.png",
              content:"A sense of ethics and community-oriented service are not graduation requirements for a computer science (CS) degree. But in a world becoming more digital - where CS touches everything and everyone - they must be.",
              url: 'https://www.cs.duke.edu/news/articles/3034'},
            { title:"Duke Students Enhance CS Education in Durham Schools, the Open Source Way",
              source:"Duke Social Science Research Institute",
              imageLocation:"https://snworksceo.imgix.net/dtc/e744d28c-e909-4e14-b59a-8b1b90222560.sized-1000x1000.jpg?w=1000",
              content:"In collaboration with Red Hat and local middle schools, a Bass Connections team helps young people build coding skills through a program that other schools can freely adapt",
              url: 'https://bassconnections.duke.edu/about/news/duke-students-enhance-computer-science-education-durham-schools-open-source-way'},
            { title:"Harnessing the Power of Open Source Research and Teaching to Transform Education",
              source:"Duke Today",
              imageLocation:"https://hfactorwater.com/wp-content/uploads/2016/10/press-duke-today.jpg",
              content:"When Carter Zenke observed that computer science students have very few opportunities to gain real-world experience with the concepts they’re learning in the classroom, he decided to do something about it.",
              url: 'https://today.duke.edu/2018/08/harnessing-power-open-source-research-and-teaching-transform-education'},
            { title:"Open Source Pedagogy, Research + Innovation (OSPRI) Lab (2018-2019) | Duke Bass Connections",
              source:"Duke Bass Connections",
              imageLocation:"https://bassconnections.duke.edu/sites/bassconnections.duke.edu/files/styles/large/public/ehd-ospri-fb-v2.png?itok=pdcBKbPO",
              content:"During the 2018-19 academic year, OSPRI Lab’s project will focus on iterating and scaling CSbyUs. Co-founded by three Duke undergraduates and the founder of OSPRI, CSbyUs catalyzes networks of undergraduate students to expand access to quality CS education.",
              url: 'https://bassconnections.duke.edu/project-teams/open-source-pedagogy-research-innovation-ospri-lab-2018-2019'},
          ];

      const cards = data.map((card) =>
          <NewsArticleCard title = {card.title} source = {card.source}
                content = {card.content} url = {card.url} imageLocation = {card.imageLocation}/>
      );



    return (
        //TODO: see if this works
        <React.Fragment>
          <div className={classes.layout}>

            <Paper className={classes.newsTitleHeader}>
                <div className={classes.courseName}>
                    <Typography component="h1" class={classes.newFont} variant="h3" color="inherit" gutterBottom>
                        In the News
                    </Typography>
                    <Typography variant="h2" class={classes.newFont} color="inherit" paragraph>
                        Explore the latest coverage of CSbyUs
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

          </div>
        </React.Fragment>


    );
  }
}

export default withStyles(homeComponentStyles)(InTheNews);
