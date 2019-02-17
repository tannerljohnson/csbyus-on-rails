// import { connect } from 'react-redux';
// import { find } from 'lodash';
// import { fetchPost } from '../redux/actions';
import React from "react"
import { capitalizeWords } from '../helpers/utilities';
import faker from 'faker';


import Post from './Post';

const {
  date: { past, recent },
  lorem: { paragraph, paragraphs, slug, words },
  random: { uuid },
} = faker;

var postData = require('../../assets/data/posts/1.js');

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        title: '',
        content: '',
        timestamp: '',
        slug: '',
    }
    this.fetchPost = this.fetchPost.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const slug = this.props.match.params.slug;
    console.log(this.props);
    this.fetchPost(id, slug);
  }

  fetchPost(id, slug) {
    console.log('fetching!');
    console.log('id is: ' + id);
    const samplePost =  this.findPostById(id, slug);
    console.log(samplePost.title);
    console.log(samplePost.content);

    this.setState({id: samplePost.id});
    this.setState({title: samplePost.title});
    this.setState({content: samplePost.content});
    this.setState({timestamp: samplePost.timestamp});
    this.setState({slug: samplePost.slug});
  };

  findPostById(id, slug) {
    // fetch file
    // TODO: do not assume index will correspond to post id
    const intId = parseInt(id);
    console.log(intId);
    const post = postData.posts[intId];
    return post;
  };

  // returns fake post data
  fakePost(options = {}) {
    const summary = paragraph();
    const post = {
        id: options.id || uuid().split('-')[0],
        title: capitalizeWords(words()),
        summary,
        content: `${summary}\n${paragraphs()}`,
        timestamp: "2008-02-14 20:00",
        slug: options.slug || slug(),
      }
    return post;
  }

  render () {
    return (
        <Post fetchPost={this.fetchPost} id={this.state.id} title={this.state.title} content={this.state.content} timestamp={this.state.timestamp} slug={this.state.slug} />
    );
  }
}

export default PostContainer;
