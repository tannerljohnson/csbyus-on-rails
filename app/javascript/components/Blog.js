import React from "react"
import PropTypes from "prop-types"
import Post from "./Post"
import { withStyles } from '@material-ui/core/styles'
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { NavLink } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';



class Blog extends React.Component {

  render () {
      const { classes } = this.props;

      const data =
          [{title:"The Importance of CS Education", author:"Megan Phibbons",
              content:"This is an interesting blog about why we should be focused on CS education at young ages!",
              timestamp:"Friday, October 19th at 2:34 pm",
              url: 'https://docs.google.com/document/d/19IMnuMVTnc7IGcx7RKxECNn7inCPE2h14FEy7_6tHPY/edit?usp=sharing'}, // TODO: App.js connect these, make components too
          {title:"Reflections on Teaching Computer Science", author:"Eliza Paradise",
              content:"This is a blog from one of our teaching team members and her reflections on how teaching goes.",
              timestamp:"Saturday, October 20th at 8:45 am",
              url: 'https://docs.google.com/document/d/1Y1Vhm027rMMdwGF9AgRa-EBsi1wLtj4_8XWObFEc6kY/edit?usp=sharing'},
          {title:"Get Involved in Open-Source CS Education", author:"Cady Zhou",
              content:"When searching for the “definition of open-source”, results return: “Denoting software for which the original source code is made freely available and may be redistributed and modified.”",
              timestamp:"Sunday, October 21st at 10:52 am",
              url: 'https://docs.google.com/document/d/1ytFHPHpNj_CjN1Eaab-4Za4M1kwUwWKyuvbAZRPdy0Q/edit?usp=sharing'},
          {title:"Equitable CS Education and the Future of Tech", author:"Judyth Estrada Salinas",
              content:"Undergraduate education today is still a luxury reserved to those who can afford it. Even as institutions provide financial aid to students, most of the individuals being admitted are those who have a high-performance track record.",
              timestamp:"Sunday, October 21st at 1:50 am",
              url: 'https://docs.google.com/document/d/1whjAGzFTnvbDTpLJKtHV2A33_F_zc8XVkm09ymzN-jQ/edit?usp=sharing'}];

      const posts = data.map((post) =>
          <Post title = {post.title} author = {post.author}
                content = {post.content} url = {post.url} timestamp = {post.timestamp}/>
      );



    return (
        //TODO: see if this works
        <React.Fragment>
        <CssBaseline/>
        <div className={classes.root2}>
          <main className={classes.layout2}>

            <Paper className={classes.curriculaTitleHeader}>
                <div className={classes.courseName}>
                    <Typography component="h1" className={classes.newFont} variant="h3" color="inherit" gutterBottom>
                        All Things Digital Education
                    </Typography>
                    <Typography variant="h5" className={classes.newFont} color="inherit" paragraph>
                        A blog space for written thoughts gathered throughout our community
                    </Typography>
                </div>
            </Paper>

            <Grid container spacing={24}>
                {posts.map(post => (
                  // change xs setting to 12 for one card per row
                   <Grid item xs={12} sm={6} key={post.toString()}>
                       {post}
                   </Grid>
                 ))}
           </Grid>

            {/* Contribute */}
            <Divider/>
            <div className={classes.root2}>
                  <Typography variant="h3" class={classes.newFont} align="left" color="textPrimary" gutterBottom>
                    Write for Us!
                  </Typography>
                <Typography variant="h4" class={classes.newFont} gutterBottom>
                  <p>
                  Are you interested in digital era education? We'd love to hear from you. If you'd like to contribute to our blog, please fill out <NavLink to={'/joinus'}>this form</NavLink> with 'Blog' in the <b>Subject</b> field and
                  briefly descibe the topic you'd like to write about (or a link if you've already written something).
                  </p>
                </Typography>
            </div>
            {/* End Contribute */}
            </main>
          </div>
        </React.Fragment>


    );
  }
}

export default withStyles(homeComponentStyles)(Blog);


 //pass an array of objects, Eliza needs to look for React language identifying package
