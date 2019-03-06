import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';

class Post extends React.Component {
  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline/>
        <div className={classes.root2}>
          <main className={classes.layout2}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {this.props.title}
                </Typography>
                <Typography className={this.props.title} color="textSecondary" gutterBottom>
                  {this.props.author}
                </Typography>
                <Typography className={this.props.pos} color="textSecondary">
                  {moment(this.props.timestamp).fromNow()}
                </Typography>
                <Typography component="p">
                {this.props.content &&
                  this.props.content
                    .split('\n')
                    .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </Typography>
              </CardContent>
            </Card>
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


//put card stuff here to make a card
