import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class ContactFormDetails extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="standard-name"
              label="Your name"
              value={this.props.data.name}
              onChange={this.props.handleChange('name')}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="standard-required"
              label="Email"
              onChange={this.props.handleChange('email')}
              value={this.props.data.email}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="standard-required"
              label="Subject"
              onChange={this.props.handleChange('subject')}
              value={this.props.data.subject}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="standard-multiline-static"
              label="Message"
              multiline
              rows="4"
              fullWidth
              value={this.props.data.message}
              onChange={this.props.handleChange('message')}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ContactFormDetails;
