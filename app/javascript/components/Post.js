import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Post extends React.Component {
  render () {
      //use <br/> if you need to go to another line
    return (
      <React.Fragment>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography className={this.props.title} color="textSecondary" gutterBottom>
              {this.props.author}
            </Typography>
            <Typography className={this.props.pos} color="textSecondary">
              {this.props.timestamp}
            </Typography>
            <Typography component="p">
              {this.props.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
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
export default Post


//put card stuff here to make a card
