import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";

class TeamCard extends React.Component {
  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Card className = {classes.aboutCard}>
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.aboutStory}>
              <b>{this.props.name}</b>
            </Typography>
            <Typography variant="subtitle1" component="p" className={classes.aboutStory}>
              {this.props.content}
            </Typography>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

TeamCard.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string
};
export default withStyles(homeComponentStyles)(TeamCard);
