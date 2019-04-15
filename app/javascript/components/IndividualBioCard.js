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
import Grid from '@material-ui/core/Grid';
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Hidden from '@material-ui/core/Hidden';
import { NavHashLink as NavHashLink } from 'react-router-hash-link';



class IndividualBioCard extends React.Component {
  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Card className={classes.bioCard}>
        	<div className={classes.bioCardDetails}>
            <CardContent className={classes.postCardContent}>
              <Typography variant="h5" component="h2" className={classes.bioCardContent}>
                {this.props.name}
              </Typography>
              <NavHashLink to={'/about#team-descriptions'}>
                <Typography variant="subtitle2" className={classes.bioCardContent} color="textSecondary" gutterBottom>
                  {this.props.team}
                </Typography>
              </NavHashLink>
              <Typography className={classes.bioCardContent} color="textSecondary" gutterBottom>
                <em>{this.props.study}</em>
              </Typography>
              <Typography component="p" className={classes.bioCardContent}>
                {this.props.caption}
              </Typography>
                <Typography className={classes.bioCardContent} color="textSecondary" gutterBottom>
                  <a href={this.props.emailurl}>
                    {this.props.email}
                  </a>
                </Typography>
                <Typography className={classes.bioCardContent} color="textSecondary" gutterBottom>
                  <a href={this.props.linkedinurl}>
                    LinkedIn
                  </a>
                </Typography>
            </CardContent>
            </div>
            <Hidden xsDown>
            <CardMedia
              className={classes.bioMedia}
              image={this.props.myImage}
            />
          </Hidden>
        </Card>
      </React.Fragment>
    );
  }
}

IndividualBioCard.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  study: PropTypes.string,
  caption: PropTypes.string,
  email: PropTypes.string,
  myImage: PropTypes.string,
  emailurl: PropTypes.string,
  linkedinurl: PropTypes.string
};
export default withStyles(homeComponentStyles)(IndividualBioCard);
