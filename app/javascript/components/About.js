import React from "react"
import PropTypes from "prop-types"
import CommentBox from './CommentBox'

//Dummy data node you can use, courtesy of Facebook
const data = [];

class About extends React.Component {
  render () {
    return (
      <React.Fragment>
      <h1>
        About us!
      </h1>
      <CommentBox data={data} />
      </React.Fragment>
    );
  }
}

export default About
