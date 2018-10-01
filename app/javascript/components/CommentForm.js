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
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  }

  render () {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default CommentForm
