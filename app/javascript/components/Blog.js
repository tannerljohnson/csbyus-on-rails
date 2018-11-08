import React from "react"
import PropTypes from "prop-types"
import Post from "./Post"


class Blog extends React.Component {

  render () {
      const data =
          [{title:"The Importance of CS Education", author:"Megan Phibbons",
              content:"This is an interesting blog about why we should be focused on CS education at young ages!", 
              timestamp:"Friday, October 19th at 2:34 pm"},
          {title:"Reflections on Teaching Computer Science", author:"Eliza Paradise",
              content:"This is a blog from one of our teaching team members and her reflections on how teaching goes.", 
              timestamp:"Saturday, October 20th at 8:45 am"},
          {title:"Open Source Principles to Develop This Platform", author:"Tanner Johnson",
              content:"This blog details how we used open source principles to develop our platform!", 
              timestamp:"Sunday, October 21st at 10:52 am"}];

      const posts = data.map((post) =>
          <Post title = {post.title} author = {post.author}
                content = {post.content} timestamp = {post.timestamp}/>
      );  

    return (
        //TODO: see if this works
        <React.Fragment>
          <h1>
            Welcome to our blog!
          </h1>
          <div>
            <ul>
                {posts}
            </ul> 
          </div> 
        </React.Fragment>


    );
  }
}

export default Blog


 //pass an array of objects, Eliza needs to look for React language identifying package
