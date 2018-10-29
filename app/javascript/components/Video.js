import React from "react"
import PropTypes from "prop-types"
import ReactPlayer from 'react-player'

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "https://www.youtube.com/watch?v=ckAgAc8paKo&list=RDckAgAc8paKo&start_radio=1"
    }
  }
  render () {
    return (
      <ReactPlayer url={this.state.link}/>
    );
  }
}

Video.propTypes = {
  link: PropTypes.string
};
export default Video
