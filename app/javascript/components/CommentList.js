import React from "react"
import PropTypes from "prop-types"
import Comment from './Comment'


class CommentList extends React.Component {

  render () {
    // when this is called from within a function, javascript can not reach the variable because this is in an outer scope
    var that = this;

    var commentNodes = this.props.data.map(function(comment) {
      return (
        // <Comment author={comment.author} key={comment.id} text={comment.text} handleDelete={props.handleDelete} />
        <div key={comment.id}>
          <Comment comment={comment} handleDelete={that.props.handleDelete} handleUpdate={that.props.handleUpdate}/>
        </div>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

export default CommentList
