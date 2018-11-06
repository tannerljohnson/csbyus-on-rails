import React from "react"
import PropTypes from "prop-types"
import Card from '@material-ui/core/Card';

class Post extends React.Component {
  render () {
      //use <br/> if you need to go to another line
    return (
      <div>
        fix
      </div>
    );
  }
}

Post.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  timestamp: PropTypes.string,
  content: PropTypes.string
};
export default Post


//put card stuff here to make a card
