import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';



const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class Comment extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
     let author = this.author.value
     let text = this.text.value
     let id = this.props.comment.id
     let comment = {id: id, author: author, text: text}
     // do we need to define that?
     this.props.handleUpdate(comment)
    }
   this.setState({
     editable: !this.state.editable
    })
  }

  render () {
    const { classes } = this.props;

    let author = this.state.editable ? <input type='text'
                                            ref={input => this.author = input}
                                            defaultValue={this.props.comment.author}/>
                                    :<h3>{this.props.comment.author}</h3>
    let text = this.state.editable ? <input type='text'
                                            ref={input => this.text = input}
                                            defaultValue={this.props.comment.text}/>
                                    :<p>{this.props.comment.text}</p>

    return (
      <div className={classes.root}>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary={author} secondary={text} />
        </ListItem>
        <Divider inset component="li" />
      </div>
    );
  }
}


export default withStyles(styles)(Comment);
