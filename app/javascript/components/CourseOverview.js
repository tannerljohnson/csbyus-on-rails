import React from "react"
import PropTypes from "prop-types"
import CourseCard from "./CourseCard";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

//TODO: replace state with props when the server is ready
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
});

function CourseOverview(props) {
    const { classes } = props;
    const cards = [<CourseCard/>, <CourseCard/>, <CourseCard/>, <CourseCard/>, <CourseCard/>];

    return (
       <div>
           <Grid container spacing={24}>
               {cards.map(card => (
                  <Grid item key={card.toString()}>
                      {card}
                  </Grid>
                ))}
                </Grid>
       </div>
    );
  }

CourseOverview.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles) (CourseOverview);
