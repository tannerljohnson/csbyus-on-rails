import React from "react"
import PropTypes from "prop-types"
import Card from '@material-ui/core/Card';

class Post extends React.Component {
  render () {
      //use <br/> if you need to go to another line
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle><React.Fragment>{this.props.author}</React.Fragment></CardTitle>
            <CardSubtitle><React.Fragment>{this.props.title}</React.Fragment></CardSubtitle>
            <CardText><React.Fragment>{this.props.content}</React.Fragment></CardText>
          </CardBody>
        </Card>
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
