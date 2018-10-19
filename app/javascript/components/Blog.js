import React from "react"
import PropTypes from "prop-types"
import Post from "./Post"
class Blog extends React.Component {
  const data = [{title:"Title1", author:"Eliza", content:"Post1", timestamp:"Friday, October 19th at 2:34 pm"}, {title:"Title2", author:"Megan", content:"Post2", timestamp:"Friday, October 19th at 2:34 pm"}. {title:"Title3", author:"Tanner", content:"Post3", timestamp:"Friday, October 19th at 2:34 pm"}]
  render () {
    var postNodes = this.props.data.map(function(post)) {
    //declare nodes
    }
    return (
      <React.Fragment>
      	<div>
      		Welcome to our blog!
          //use function .map()
          {postNodes}
      	</div>
      	<Post title = "First post! " author = "Eliza " content = "I love CSbyUS! " timestamp = "Friday, October 19th at 2:19 pm "/>
      </React.Fragment>
    );
  }
}

export default Blog
 

 //pass an array of objects, Eliza needs to look for React language identifying package