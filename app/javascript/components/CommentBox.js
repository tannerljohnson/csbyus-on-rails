import React from "react"
import PropTypes from "prop-types"
import CommentList from './CommentList'
import CommentForm from './CommentForm'

class CommentBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    this.addNewComment = this.addNewComment.bind(this)
  }

  handleCommentSubmit(author, text) {
    console.log(author + " says " + text);

    let body = JSON.stringify({comment: {author: author, text: text} })

    fetch('http://localhost:3000/api/v1/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => { return response.json()
    }).then((comment) => { this.addNewComment(comment) })
  }

  addNewComment(comment) {
    this.setState({
      comments: this.state.comments.concat(comment)
    })
  }

  componentDidMount() {
    fetch('/api/v1/comments.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({ comments: data })
    });
  }

  render () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.comments} />
        <CommentForm handleCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

export default CommentBox
