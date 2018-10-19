import React from "react"
import PropTypes from "prop-types"
class Post extends React.Component {
  render () {
    return (
      <React.Fragment>
        Author: {this.props.author}
        Title: {this.props.title}
        Timestamp: {this.props.timestamp}
        Content: {this.props.content}
      </React.Fragment>
    );
  }
}

Post.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  timestamp: PropTypes.string,
  content: PropTypes.string
};
export default Post


//put card stuff here to make a card
