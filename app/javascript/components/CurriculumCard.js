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


class CurriculumCard extends React.Component {
  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Card >
          <CardActionArea href={this.props.url}  target="_blank">
            <CardContent>
              <Typography variant="h5" className={classes.orangeFont} component="h2">
                <b>{this.props.title}</b>
              </Typography>
              <Typography variant="subtitle1" className={this.props.title} className={classes.newFont} color="textSecondary" gutterBottom>
                {this.props.author}
              </Typography>
              <Typography variant="subtitle1" component="p" className={classes.newFont} >
                {this.props.content}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </React.Fragment>
    );
  }
}

CurriculumCard.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  content: PropTypes.string
};
export default withStyles(homeComponentStyles)(CurriculumCard);
