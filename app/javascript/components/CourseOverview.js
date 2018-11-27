import React from "react"
import PropTypes from "prop-types"
import CourseCard from "./CourseCard";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";

//TODO: replace state with props when the server is ready
const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 80,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
});

function CourseOverview(props) {
    const { classes } = props;
    const cards = [<CourseCard/>];

    return (
        <div className={classes.root}>
            <Toolbar className={classes.toolbarMain}>
                <Typography
                    component="h2"
                    variant="h3"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    Courses
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </Toolbar>

            <main>
            <Grid container spacing={24}>
                {cards.map(card => (
                    <Grid item key={card.toString()}>
                        {card}
                    </Grid>
                ))}
            </Grid>
            </main>
        </div>
    );
}

CourseOverview.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles) (CourseOverview);
