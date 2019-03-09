import React from "react"
import PropTypes from "prop-types"
import PostCard from "./PostCard"
import { withStyles } from '@material-ui/core/styles'
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { NavLink } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { truncate } from '../helpers/utilities';
import moment from 'moment';


const data = require('../../assets/data/blogPosts.js');
const TRUNCATION_LIMIT = 260;

class Blog extends React.Component {

  render () {
      const { classes } = this.props;

      const posts = data.posts.map((post) =>
          <PostCard
                title = {post.title}
                author = {post.author}
                id = {post.id}
                summary = {truncate(post.summary, TRUNCATION_LIMIT) + "..."}
                url = {"/blog/"+ post.id + "/" + post.slug}
                timestamp = {moment(post.timestamp).fromNow()}
                />
      );



    return (
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
