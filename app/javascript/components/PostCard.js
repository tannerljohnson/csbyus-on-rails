import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Hidden from '@material-ui/core/Hidden';



class PostCard extends React.Component {
  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Card className={classes.postCard}>
          <div className={classes.postCardDetails}>
            <CardActionArea href={this.props.url} className={classes.postCardContent}>
              <CardContent>
                <Typography className={classes.newFont} variant="h5" component="h2">
                  {this.props.title}
                </Typography>
                <Typography className={classes.newFont} color="textSecondary" gutterBottom>
                  {this.props.author}
                </Typography>
                <Typography className={classes.newFont} color="textSecondary">
                  {this.props.timestamp}
                </Typography>
                <Typography variant="subtitle1" component="p" className={classes.newFont}>
                  {this.props.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
            </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.postCardImage}
              image={this.props.image}
            />
          </Hidden>
        </Card>
      </React.Fragment>
    );
  }
}

PostCard.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  timestamp: PropTypes.string,
  content: PropTypes.string,
  summary: PropTypes.string,
};
export default withStyles(homeComponentStyles)(PostCard);


//put card stuff here to make a card
