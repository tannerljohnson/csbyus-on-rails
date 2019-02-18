import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";


class NewsArticleCard extends React.Component {
  render () {

    const { classes } = this.props;

    return (

      <React.Fragment>
        <Card >
          <CardActionArea href={this.props.url} target="_blank">
            <CardMedia
              className={classes.newsMedia}
              image={this.props.imageLocation}
              title={this.props.source}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" class={classes.newFont} component="h2">
                {this.props.title}
              </Typography>
              <Typography component="p" class={classes.newFont}>
                {this.props.content}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </React.Fragment>
    );
  }
}

NewsArticleCard.propTypes = {
  source: PropTypes.string,
  imageLocation: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  content: PropTypes.string
};
export default withStyles(homeComponentStyles)(NewsArticleCard);
