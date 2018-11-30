import React from "react"
import PropTypes from "prop-types"
import CourseCard from "./CourseCard";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import courseOverviewComponentStyles from "../../assets/javascripts/jss/components/courseOverviewComponentStyles.js";

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

export default withStyles(courseOverviewComponentStyles) (CourseOverview);
