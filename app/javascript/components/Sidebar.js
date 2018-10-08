import React from "react"
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Drawer from "@material-ui/core/Drawer"
import { withStyles } from '@material-ui/core/styles'
import ItemClasses from "./ItemClasses";
import ListSubheader from "@material-ui/core/ListSubheader/ListSubheader";

const drawerWidth = 20;
const styles = themes => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
});

class Sidebar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            courses: [
                {secNum: 0.0, secName: "HelloWorld", hyperlink: "www.csbyus.com"},
                {secNum: 1.0, secName: "AgainWorld", hyperlink: "www.google.com"}
                ],
        };
    }
    render () {
        // const { classes } = this.props.classes;
        //FIXME: change state to props
        const courses = this.state.courses;
        const courseListFunc = (course) =>
            <ItemClasses secNum={course.secNum} secName={course.secName} hyperlink={course.hyperlink}/>;

        return (
            <Drawer
                variant="permanent"

            >
            <List
                component="nav"
                subheader={<ListSubheader component="div">Course Overview</ListSubheader>}>
                {this.state.courses.map((course) =>
                    <ItemClasses secNum={course.secNum} secName={course.secName} hyperlink={course.hyperlink}/>)
                },
            </List>

        </Drawer>
    );
  }
}

//this array should be in the form of
//const courses = [
//      {secNum： 0.0, secName: "HelloWorld", hyperlink: "www.csbyus.com"},
//      {secNum: ...., secName: ".......",    hyperlink: "......"}
//      ]
Sidebar.propTypes = {
    // classes: PropTypes.object.isRequired,

    courses: PropTypes.array,
};

export default withStyles(styles)(Sidebar)
