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

        <div className="col-sm-2 text-center">
        <img src={this.props.user.photoURL} height="150px" className="img img-responsive rounded-circle" style={{ padding: '20px' }}/>
        <h5 className="username">Welcome back, {this.props.user.displayName}!</h5>
        </div>
          <div className="col-sm-8">
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
          {note.uid === this.props.user.uid && (
          <div>
          <button className="btn btn-danger btn-xs" onClick={() => this.props.deleteNote(key)}>
          Delete
          </button>
          <button className="btn btn-info btn-xs float-right">
          <Link className="editt" to={`/${key}/edit`}>Update</Link>
          </button>
          </div>
        )}
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
