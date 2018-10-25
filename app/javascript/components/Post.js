import React from "react"
import PropTypes from "prop-types"
class Post extends React.Component {
  render () {
      //use <br/> if you need to go to another line
    return (
      <div>
        Author: {this.props.author}
        <br/>
        Title: {this.props.title}
        Timestamp: {this.props.timestamp}
        Content: {this.props.content}
      </div>
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
