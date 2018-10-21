import React from "react"
import PropTypes from "prop-types"

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

    let author = this.state.editable ? <input type='text'
                                            ref={input => this.author = input}
                                            defaultValue={this.props.comment.author}/>
                                    :<h3>{this.props.comment.author}</h3>
    let text = this.state.editable ? <input type='text'
                                            ref={input => this.text = input}
                                            defaultValue={this.props.comment.text}/>
                                    :<p>{this.props.comment.text}</p>

    return (
      <div className="comment">
        {author}
        {text}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.comment.id)}>Delete</button>
      </div>
    );
  }
}

export default Comment
