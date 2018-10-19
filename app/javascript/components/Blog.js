import React from "react"
import PropTypes from "prop-types"
import Post from "./Post"
class Blog extends React.Component {
  render () {
    return (
      <React.Fragment>
      	<div>
      		Welcome to our blog!
      	</div>
      	<Post title = "Mytitle " author = "Eliza " content = "I love CSbyUS! " timestamp = "Friday, October 19th at 2:19 pm "/>
      </React.Fragment>
    );
  }
}

export default Blog
 