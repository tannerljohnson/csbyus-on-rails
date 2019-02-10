import React from "react"
import PropTypes from "prop-types"
import CourseCard from "./CourseCard";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import courseOverviewComponentStyles from "../../assets/javascripts/jss/components/courseOverviewComponentStyles.js";
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

var info = require('../../assets/data/coursesInfo.js');

function CourseOverview(props) {
    const { classes } = props;
    var coursesInfo = info.courses;
    var csByUsCards = [];
    var otherCards = [];

    for (let i = 0; i < coursesInfo.length; i++) {
        //TODO: check algorithm
        if (coursesInfo[i].id[0] === "9") {
            csByUsCards.push(<CourseCard
                img={coursesInfo[i].img}
                id={coursesInfo[i].id}
                title={coursesInfo[i].title}
                author={coursesInfo[i].author}
                content={coursesInfo[i].content}
                url={coursesInfo[i].url}
            />)
        } else {
            otherCards.push(<CourseCard
                img={coursesInfo[i].img}
                id={coursesInfo[i].id}
                title={coursesInfo[i].title}
                author={coursesInfo[i].author}
                content={coursesInfo[i].content}
                url={coursesInfo[i].url}
            />)
        }
    }

    //TODO: layout change
    return (
        <div className={classes.layout2}>
            <Grid container spacing={40}>
                <Grid item xs={12} md={8}>
                    <Typography gutterBottom variant="h4">
                        CSByUs Courses
                    </Typography>
                    <Typography gutterBottom variant="p" color="textSecondary">
                        This is a line of description
                    </Typography>
                    <Divider component="li"/>
                    <br/>
                    <Grid container spacing = {24}>
                        {csByUsCards.map(card => (
                            <Grid item key={card.id}>
                                {card}
                            </Grid>
                        ))}
                    </Grid>

                </Grid>

                <Grid item xs={12} md={8}>
                    <Typography gutterBottom variant="h4">
                        Other Courses
                    </Typography>
                    <Typography gutterBottom variant="p" color="textSecondary">
                        This is another line of description
                    </Typography>
                    <Divider component="li"/>
                    <br />

                    <Grid container spacing={24}>
                        {otherCards.map(card => (
                        <Grid item key={card.id}>
                            {card}
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

CourseOverview.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(courseOverviewComponentStyles) (CourseOverview);