import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import courseVersionsPageComponentStyles from "../../assets/javascripts/jss/components/courseVersionsPageComponentStyles.js";


//TODO: change all the temporary variables here
const versions = [
    {
        creator: 'Tanner',
        date: 'Nov 12',
        name: 'This is the first version of this course.',
        id: 1,
        url: 'www.google.com',
    },
    {
        creator: 'Tanner v2',
        date: 'Nov 11',
        name: 'This is the second version of this course',
        id: 2,
        url: 'www.google.com',
    },
];
const courseName = 'Title of the Course';
const oneLineDescription = "This is a one line description of the course. Write something attractive here";

function CourseVersionsPage(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.layout2}>
                <Toolbar className={classes.toolbarMain}>
                    <Typography
                        component="h2"
                        variant="h3"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Course
                    </Typography>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Toolbar>

                <main>
                    {/* Main featured post */}
                    <Paper className={classes.featuredPicture}>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.courseName}>
                                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                        {courseName}
                                    </Typography>
                                    <Typography variant="h5" color="inherit" paragraph>
                                        {oneLineDescription}
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* End main picture */}

                    {/* Start main content */}
                    <Grid container spacing={40} className={classes.mainGrid}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6" gutterBottom>
                                Introduction
                            </Typography>
                            <Divider />
                            {/*TODO: transfer in Introduction data*/}
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <Typography variant="h6" gutterBottom>
                                Course Syllabus
                            </Typography>
                            <Divider />
                            {/*TODO: transfer in Introduction data*/}
                        </Grid>
                        {/* End main content */}

                        {/* Sidebar */}
                        <Grid item xs={12} md={4}>
                            <Paper elevation={0} className={classes.sidebarAboutBox}>
                                <Typography variant="h6" gutterBottom>
                                    At a Glance
                                </Typography>
                                <Typography>
                                    Put something about course length/topic/... here
                                </Typography>
                            </Paper>

                            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                                Versions
                            </Typography>
                            {versions.map(version => (
                                <Typography key={version.id}>
                                    {version.name} by {version.creator}
                                </Typography>
                            ))}
                        </Grid>
                        {/* End sidebar */}
                    </Grid>
                </main>
            </div>

        </React.Fragment>
    );
}

CourseVersionsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(courseVersionsPageComponentStyles)(CourseVersionsPage);
