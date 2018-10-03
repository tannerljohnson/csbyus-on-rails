import React from "react"
import PropTypes from "prop-types"
import SecButton from "./SecButton";
class Sidebar extends React.Component {

  //FIXME: delete the constructor and pass in real data
  constructor(props){
    super(props);
    this.state = {
      courses: [
          {secNum: 0.0, secName: "HelloWorld", hyperlink: "www.csbyus.com"},
          {secNum: 1.0, secName: "AgainWorld", hyperlink: "www.google.com"}
          ],
    }
  }
  render () {
    const courseListFunc = (course) =>
        <li key = {course.secNum}>
            <SecButton secNum={course.secNum} secName={course.secName} hyperlink={course.hyperlink}/>
        </li>;

    return (
        // FIXME: change state to props to use real data
        <ul style = {{listStyleType: "none"}}>
            {this.state.courses.map(courseListFunc)}
        </ul>
    );
  }
}

// Sidebar.PropTypes = {
//   //this array should be in the form of
//     //const courses = [
//     //      {secNum： 0.0, secName: "HelloWorld", hyperlink: "www.csbyus.com"},
//     //      {secNum: ...., secName: ".......",    hyperlink: "......"}
//     //      ]
//   courses: PropTypes.array(),
// };
export default Sidebar
