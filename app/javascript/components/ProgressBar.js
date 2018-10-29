import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ProgressBar extends React.Component {
  render() {
      const { classes } = this.props;
    const progress = 70;
    return (
      <div className={ classes.root }>
        <LinearProgress variant="determinate" value ={ progress }/>
        The progress is { progress }%
      </div>
    );
  }
}

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ProgressBar);
