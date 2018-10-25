import React from "react"
import PropTypes from "prop-types"
import Post from "./Post"
class Blog extends React.Component {

  render () {
      const data =
          [{title:"Title1", author:"Eliza",
              content:"Post1", timestamp:"Friday, October 19th at 2:34 pm"},
          {title:"Title2", author:"Megan",
              content:"Post2", timestamp:"Friday, October 19th at 2:34 pm"},
          {title:"Title3", author:"Tanner",
              content:"Post3", timestamp:"Friday, October 19th at 2:34 pm"}];

      const posts = data.map((post) =>
          <Post title = {post.title} author = {post.author}
                content = {post.content} timestamp = {post.timestamp}/>
      );

    return (
        //TODO: see if this works
      	<div>
      		Welcome to our blog!
            <ul>
                {posts}
            </ul>

      	</div>

    );
  }
}

export default Blog
 

 //pass an array of objects, Eliza needs to look for React language identifying package