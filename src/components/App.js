import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getNotes, saveNotes, deleteNote } from '../actions/notesAction';
import NoteCard from './NoteCard';
import { getUser } from '../actions/userAction.js';
import { Link } from 'react-router-dom';

class App extends Component {

constructor(props){
  super(props);

  this.state = {
    title: '',
    body: ''
  };

  // bind

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event){
  this.setState({
    [event.target.name]: event.target.value
  }) ;
}

handleSubmit(event){
  event.preventDefault();
  const note = {
    title: this.state.title,
    body: this.state.body,
    uid: this.props.user.uid
  }
 this.props.saveNotes(note);

  console.log('Data has been pushed to the database!');

  this.setState({
    title: '',
    body: ''
  })
}



  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input 
                  onChange={this.handleChange}
                  value={this.state.title}
                  type="text" 
                  name="title" 
                  className="form-control no-border" 
                  placeholder="Note..." 
                  required
                  />
              </div>

              <div className="form-group">
                <textarea 
                  onChange = {this.handleChange}
                  value = {this.state.body}
                  type="text" 
                  name="body" 
                  className="form-control no-border" 
                  required
                  />
              </div>

              <div className="form-group">
                <button className="btn btn-primary col-md-12">Save Me</button>
              </div>
            </form>
            {this.renderMessages()}
          </div>
        </div>
      </div>
    );
  }

  // Listing notes
  renderMessages(){
    return _.map(this.props.notes, (note, key) => {
      return (
  
        <NoteCard key={key}>
        <Link to={`/${key}`}>
          <h2>{note.title}</h2>
        </Link>
          <p>{note.body}</p> 
          {note.uid === this.props.user.uid && 
          (<button className="btn btn-danger btn-xs" onClick={() => this.props.deleteNote(key)}>Delete</button>)}
        </NoteCard>
      );
    });
  }

}

function mapStateToProps(state, ownProps){
  return {
    notes: state.notes,
    user: state.user
  }
}

export default connect(mapStateToProps, { getNotes, saveNotes, deleteNote, getUser })(App);
