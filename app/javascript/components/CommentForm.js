import React from "react"
import PropTypes from "prop-types"


class CommentForm extends React.Component {

  state = {
    author: '',
    text: ''
  };

  getInitialState = () => {
    return {author: '', text: ''};
  }

  handleAuthorChange = event => {
    this.setState({ author: event.target.value });
  };

  handleTextChange = event => {
    this.setState({ text: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    // we handed off handleCommentSubmit prop from parent (CommentBox)
    this.props.handleCommentSubmit(author, text);
    this.setState({author: '', text: ''});
  }

  render () {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          placeholder="Your name"
          onChange={this.handleAuthorChange}
        />
        <input
          placeholder="Say something..."
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default CommentForm
