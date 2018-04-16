import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions/notesAction';

class SubmitComment extends Component {

    constructor(props){
        super(props)
        this.state = {
            commentBody: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            commentBody: e.target.value
        })
    }


    handleSubmit(e){
        e.preventDefault();
        const comment = {
            commentBody: this.state.commentBody,
            uid: this.props.uid
        }
        this.props.saveComment(this.props.id, comment);
        this.setState({commentBody: ''});
    }

    render(){
        return (
            <div>
                <h2>comment box</h2>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea 
                            type="text"
                            name="commentBody"
                            className="form-control no-border"
                            placeholder="Comment here..."
                            onChange={this.handleChange}
                            value={this.state.commentBody}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </form>    
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        uid: state.user.uid
    }
}

export default connect(mapStateToProps, {saveComment})(SubmitComment)