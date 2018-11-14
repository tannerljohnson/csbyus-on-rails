import React from "react"
import PropTypes from "prop-types"
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  commentStyle: {
    width: 'inherit',
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    width: '100%',
    maxWidth: 460,
  },
});

class CommentBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    this.addNewComment = this.addNewComment.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateComment = this.updateComment.bind(this)
  }

  handleUpdate(comment){
    fetch(`http://localhost:3000/api/v1/comments/${comment.id}`,
    {
      method: 'PUT',
      body: JSON.stringify({comment: comment}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.updateComment(comment)
      })
  }
  updateComment(comment){
    let newComments = this.state.comments.filter((c) => c.id !== comment.id)
    newComments.push(comment)
    this.setState({
      comments: newComments
    })
  }

  handleDelete(id){
      fetch(`http://localhost:3000/api/v1/comments/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
          console.log('Item was deleted: ' + id)
          this.deleteComment(id)
        })
    }

  deleteComment(id){
    var newComments = this.state.comments.filter((comment) => comment.id !== id)
    this.setState({
      comments: newComments
    })
  }

  handleCommentSubmit(author, text) {
    console.log(author + " says " + text);

    let body = JSON.stringify({comment: {author: author, text: text} })

    fetch('https://csbyus.herokuapp.com/api/v1/comments', {
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

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.commentStyle}>
          <Typography variant="display1" color="inherit" gutterBottom align="center">
            Comments
          </Typography>
          <CommentList data={this.state.comments} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
          <CommentForm handleCommentSubmit={this.handleCommentSubmit} />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(CommentBox);
