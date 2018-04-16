import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {updateNote} from '../actions/notesAction';


class NoteEdit extends Component {
        constructor(props){
          super(props);
        
          this.state = {
            title: this.props.note.title,
            body: this.props.note.body
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
            uid: this.props.uid
          }
         this.props.updateNote(this.props.match.params.id, note);
        
          console.log('Data has been pushed to the database!');
        
          this.setState({
            title: '',
            body: ''
          });
          this.props.history.push('/');
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
                
                  </div>
                </div>
              </div>
            );
          }

}

function mapStateToProps(state, ownProps) {
    return {
        // This is pulling the key, id
        // from the created note on the homepage
        note: state.notes[ownProps.match.params.id], 
        uid: state.user.uid
   };

}

export default connect(mapStateToProps, { updateNote })(NoteEdit);