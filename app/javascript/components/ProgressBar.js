import React from 'react';
import PropTypes from 'prop-types';
import {LinearProgress} from '@material-ui/core/LinearProgress';

class ProgressBar extends React.Component {
  render() {
    const progress = 70;

    return (
      <div>
        <LinearProgress variant="determinate" value ={progress}/>
        The progress is {progress}%
      </div>
    );
  }
}

ProgressBar.propTypes = {
  course: PropTypes.object.isRequired,
};

export default ProgressBar
