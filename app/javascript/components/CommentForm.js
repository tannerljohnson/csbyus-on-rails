import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    width: 'inherit',
    display: 'flex',
    flexWrap: 'wrap',
  },
  textFieldContainer: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
    paddingTop: '5%', // 16:9
    paddingRight: `${theme.spacing.unit * 22}px`,
    paddingLeft: `${theme.spacing.unit * 22}px`,
    width: '100%',
  },
  mainTitle: {
    paddingRight: `${theme.spacing.unit * 10}px`,
    paddingLeft: `${theme.spacing.unit * 10}px`,
    paddingTop: '5%', // 16:9
    paddingBottom: '5%', // 16:9
    backgroundColor: theme.palette.secondary.light,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

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
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container} autoComplete="off">
          <div className={classes.textFieldContainer}>
            <TextField
              required
              id="standard-name"
              label="Your name"
              className={classes.textField}
              value={this.state.author}
              onChange={this.handleAuthorChange}
              margin="normal"
            />
            <TextField
              required
              id="standard-multiline-flexible"
              label="Comment"
              multiline
              rowsMax="4"
              className={classes.textField}
              margin="normal"
              value={this.state.text}
              onChange={this.handleTextChange}
            />
          </div>
          <div className={classes.heroButtons}>
            <Grid container spacing={16} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentForm);
