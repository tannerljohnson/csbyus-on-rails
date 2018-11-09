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


class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    multiline: 'Controlled',
  };

  handleSubmit = event => {
    console.log("attempting to submit form...");
    // TODO: slack hook integration
    var message = "CSbyUs Interest Form Submission: " + this.state.name +
      " with subject: *" + this.state.subject + "*. They left this message: \n>" + this.state.message + ". \nReach out to them soon at this email address: `" +
      this.state.email + "`!";
    // form into json object for slack post object
    var data = '{"text": "' + message + '" }';
    console.log(data);

    // send post request
    fetch('https://hooks.slack.com/services/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', {
      method: 'POST',
      body: data,
    });

    // reset form
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      multiline: 'Controlled',
    });

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (

      <form className={classes.container} autoComplete="off">
        <Paper elevation={1}>
          <div className={classes.mainTitle}>
            <Typography variant="h4" component="h3" align="center">
              Get in touch with <b>Us</b>
            </Typography>
            <Typography variant="h6" component="p" align="center">
              We're always looking for collaborators.
            </Typography>
          </div>
        </Paper>
        <div className={classes.textFieldContainer}>
          <TextField
            required
            id="standard-name"
            label="Your name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            required
            id="standard-required"
            label="Email"
            className={classes.textField}
            onChange={this.handleChange('email')}
            value={this.state.email}
            margin="normal"
          />
          <TextField
            required
            id="standard-required"
            label="Subject"
            className={classes.textField}
            onChange={this.handleChange('subject')}
            value={this.state.subject}
            margin="normal"
          />
          <TextField
            required
            id="standard-multiline-static"
            label="Message"
            multiline
            rows="4"
            className={classes.textField}
            margin="normal"
            value={this.state.message}
            onChange={this.handleChange('message')}
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
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);
