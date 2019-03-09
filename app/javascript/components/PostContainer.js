// import { connect } from 'react-redux';
// import { find } from 'lodash';
// import { fetchPost } from '../redux/actions';
import React from "react"
import { capitalizeWords } from '../helpers/utilities';
import faker from 'faker';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';



import Post from './Post';

const {
  date: { past, recent },
  lorem: { paragraph, paragraphs, slug, words },
  random: { uuid },
} = faker;

const paperStyle = { padding: 16 };

var postData = require('../../assets/data/blogPosts.js');

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        title: '',
        content: '',
        summary: '',
        timestamp: '',
        slug: '',
        author: '',
    }
    this.fetchPost = this.fetchPost.bind(this)
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    var intId = parseInt(id);
    const slug = this.props.match.params.slug;
    this.fetchPost(intId, slug);
  }

  fetchPost(id, slug) {
    var samplePost =  this.findPostById(id, slug);

    this.setState({id: samplePost.id});
    this.setState({title: samplePost.title});
    this.setState({content: samplePost.content});
    this.setState({timestamp: samplePost.timestamp});
    this.setState({slug: samplePost.slug});
    this.setState({author: samplePost.author});

  };

  findPostById(id, slug) {
    var post = postData.posts[id];
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
      <Post author={this.state.author} title={this.state.title} timestamp={this.state.timestamp} content={this.state.content}/>
    );
  }
}

export default PostContainer;
