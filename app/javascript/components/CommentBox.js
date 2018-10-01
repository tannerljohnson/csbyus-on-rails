import React from "react"
import PropTypes from "prop-types"
import CommentList from './CommentList'
import CommentForm from './CommentForm'

class CommentBox extends React.Component {

  // TODO: loadCommentsFromServer function sets state of data

  state = {
    data: []
  };

  getInitialState = () => {
    return {data: []};
  }

  handleCommentSubmit = (comment) => {
    var comments = this.state.data;
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
  }

  render () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

export default CommentBox
