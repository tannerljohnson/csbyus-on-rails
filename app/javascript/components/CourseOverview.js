import React from "react"
import PropTypes from "prop-types"
import CourseCard from "./CourseCard";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import courseOverviewComponentStyles from "../../assets/javascripts/jss/components/courseOverviewComponentStyles.js";

var info = require('../../assets/data/coursesInfo.js');

function CourseOverview(props) {
    const { classes } = props;
    var coursesInfo = info.courses;
    var cards = [];

    // TODO: add author attribute and add intro to the database
    for (let i = 0; i < coursesInfo.length; i++) {
        cards.push(<CourseCard
            id={coursesInfo[i].id}
            img={coursesInfo[i].img}
            title={coursesInfo[i].title}
            url={coursesInfo[i].url}
            intro="random"/>)
    }

    return (
        <div className={classes.layout2}>
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