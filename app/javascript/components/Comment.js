import React from "react"
import PropTypes from "prop-types"

class Comment extends React.Component {

  render () {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

Comment.propTypes = {
  author: PropTypes.string,
  children: PropTypes.array
};

export default Comment
