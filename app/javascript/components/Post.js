import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';
import Remarkable from 'remarkable';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import {
  Redirect,
  Link,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Post extends React.Component {

  getProcessedMarkup = (markdownString) => {
    var md = new Remarkable();
    return { __html: md.render(markdownString) };
  }

  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline/>
        <div className={classes.postRoot}>
        <NavLink to={'/blog'}>
          <IconButton
            aria-label="More"
            aria-haspopup="true"
          >
            <ArrowBackIcon style={{ fontSize: 30 }}/>
          </IconButton>
        </NavLink>
          <main className={classes.layout2}>
            <Paper className={classes.newFont}>
              <CardContent >
                <Typography variant="h4" component="h2" className={classes.newFont}>
                  {this.props.title}
                </Typography>
                <Typography variant="h6" className={classes.newFont} color="textSecondary" gutterBottom>
                  {this.props.isTeamMember ? <NavLink to={'/about/bios'}>{this.props.author}</NavLink> : this.props.author}
                </Typography>
                <Typography variant="subtitle2" className={classes.newFont} color="textSecondary">
                  {moment(this.props.timestamp).fromNow()}
                </Typography>
                <div
                  className={classes.newFont}
                  dangerouslySetInnerHTML={this.getProcessedMarkup(this.props.content)}
                  />
              </CardContent>
            </Paper>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

Post.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  timestamp: PropTypes.string,
  content: PropTypes.string
};
export default withStyles(homeComponentStyles)(Post);
