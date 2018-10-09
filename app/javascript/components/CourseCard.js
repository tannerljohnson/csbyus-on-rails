import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

class CourseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "CSByUs",
        intro: "Go Team! blaahdfjal"
    }
  }

  render() {
      // FIXME: change all the state to props when server is ready
      const { classes } = this.props;
      return (
          <Card className={classes.card}>
              <CardActionArea>
                  <CardMedia
                      component="img"
                      alt= {this.props.img}
                      className={classes.media}
                      height="140"
                      // FIXME: fix the url
                      image="app/images/tanner.jpg"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          {this.state.title}
                      </Typography>
                      <Typography component="p">
                          {this.state.intro}
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
      );
  }
}

CourseCard.propTypes = {
  classes: PropTypes.object.isRequired,
  img: PropTypes.string,
  title: PropTypes.string,
  intro: PropTypes.string,

};

export default withStyles(styles)(CourseCard);
