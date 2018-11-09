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
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
    paddingTop: '5%', // 16:9
    paddingRight: `${theme.spacing.unit * 20}px`,
    paddingLeft: `${theme.spacing.unit * 20}px`,
  },
  mainTitle: {
    paddingRight: `${theme.spacing.unit * 15}px`,
    paddingLeft: `${theme.spacing.unit * 15}px`,
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
            <Typography variant="h5" component="h3" align="center">
              Get in touch with us
            </Typography>
            <Typography component="p" align="center">
              We're always looking for collaborators.
            </Typography>
          </div>
        </Paper>
        <div>
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
                Join us today
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
