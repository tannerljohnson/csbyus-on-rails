import React from "react"
import PropTypes from "prop-types"
import ReactPlayer from 'react-player'

class Video extends React.Component {
  render () {
    return (
      <ReactPlayer url={this.props.link} />
      // <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
    );
  }
}

Video.propTypes = {
  link: PropTypes.string
};
export default Video
