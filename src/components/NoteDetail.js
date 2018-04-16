import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import SubmitComment from './SubmitComment';
import _ from 'lodash';
import Comment from './Comment';

class NoteDetail extends Component {

    renderComments(){
        const {note, name} = this.props;
        return _.map(note.comments, (comment, key) => {
            return <Comment key={key} id={key}>{name} | {comment.commentBody}</Comment>
        })
    }


    render(){
        const { note } = this.props;
        // console.log(note);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                       <h1>{note.title}</h1>
                       <p>{note.body}</p>
                       <SubmitComment id={this.props.match.params.id} />
                       {this.renderComments()}
                       <br />
                       <Link to="/">Back</Link>
                    </div>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state, ownProps) {
    return {
        // This is pulling the key, id
        // from the created note on the homepage
        note: state.notes[ownProps.match.params.id], 
        uid: state.user.uid,
        name: state.user.displayName
   };

}

export default connect(mapStateToProps)(NoteDetail);