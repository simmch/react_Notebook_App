import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getNotes, saveNotes, deleteNote } from '../actions/notesAction';
import NoteCard from './NoteCard';

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

// when app loads
componentDidMount(){
  this.props.getNotes();
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
    body: this.state.body
  }
 this.props.saveNotes(note);

  console.log('Data has been pushed to the database!');

  this.setState({
    title: '',
    body: ''
  })
}

renderMessages(){
  return _.map(this.props.notes, (value, key) => {
    return (

      <NoteCard key={key} className="col-sm-6">
        <h2>{value.title}</h2>
        <p>{value.body}</p> 
        <button className="btn btn-danger btn-xs" onClick={() => this.props.deleteNote(key)}>Delete</button>
      </NoteCard>
    );
  });
}

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 offset-sm-4">
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
}

function mapStateToProps(state, ownProps){
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { getNotes, saveNotes, deleteNote })(App);
