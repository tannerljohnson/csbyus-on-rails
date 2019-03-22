import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  HashRouter
} from 'react-router-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ContactFormDetails from './ContactFormDetails';
import contactFormComponentStyles from "../../assets/javascripts/jss/components/contactFormComponentStyles.js";


function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      subject: '',
      email: '',
      message: '',
      multiline: 'Controlled',
      open: false,
    };
    // pass this method as prop to ContactFormDetails child
    this.handleChange = this.handleChange.bind(this)
  }

  handleDialogOpen = () => {
    if (!this.state.name || !this.state.subject || ! this.state.email || !this.state.message) {
      return;
    }
    this.setState({ open: true });
  };

  handleDialogClose = () => {
    this.setState({ open: false });
    console.log("attempting to redirect to home");
    this.redirectToHome();
  };

  redirectToHome() {
    window.location = "csbyus.org/"
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = event => {
    console.log("attempting to submit form...");

    var message = "CSbyUs Interest Form Submission:\n*" + this.state.name +
      "* filled the form with subject: *" + this.state.subject + "*.\nThey left this message: \n>" + this.state.message + ". \nReach out to them soon at this email address: `" +
      this.state.email + "`!";
    // form into json object for slack post object
    var data = '{"text": "' + message + '" }';
    console.log(data);

    // send post request
    fetch('https://hooks.slack.com/services/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', {
      method: 'POST',
      body: data,
    }).then((response) => { return response.json() });

    // reset form
    this.setState({
      name: '',
      subject: '',
      email: '',
      message: '',
      multiline: 'Controlled',
      open: false,
    });
    // close dialog
    this.handleDialogClose();
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
      <CssBaseline/>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h4" component="h3" align="center">
              Get in touch with <b>Us</b>
            </Typography>
            <Typography variant="h6" component="p" align="center">
              We're always looking for collaborators.
            </Typography>
            <React.Fragment>
                <React.Fragment>
                  <ContactFormDetails handleChange={this.handleChange} data={this.state}/>
                  <div className={classes.buttons}>
                    <Button
                      variant="contained"
                      onClick={this.handleDialogOpen}
                      className={classes.button}
                    >
                      Submit
                    </Button>
                  </div>
                </React.Fragment>
              </React.Fragment>
            </Paper>
          </main>

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleDialogClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Are you sure you'd like to submit this form?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Please make sure you've written a quick message that explains your interest in collaborating -- this will help us get started :)
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDialogClose} color="secondary">
              Not quite
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Yes, let's do it!
            </Button>
          </DialogActions>
        </Dialog>
    </React.Fragment>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(contactFormComponentStyles)(ContactForm);
