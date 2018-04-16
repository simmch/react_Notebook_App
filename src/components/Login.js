import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin } from '../actions/userAction';

class Login extends Component {

    // componentDidMount() {
    //     if(this.props.user === null) {
    //         this.props.history.push('/login');
    //     } 
    // }

    componentWillMount(){
        if(this.props.user !== null) {
            this.props.history.push('/');
        } 
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user !== null) {
            nextProps.history.push('/');
        }
    }

    render(){
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-sm-12 jumbotron" style={{marginTop: '-20px' }}>
                        <h1>NOTE APP - {new Date().getFullYear()}</h1>
                        <h2>Login to your personal Journal App</h2>
                    </div>

                <div className="col-md-6 offset-md-3">
                    <button className="btn btn-success btn-lg" onClick={this.props.googleLogin}>Login with Google</button>
                </div>

                </div>
            </div>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}


// We're not mapping anythign from the state/store
// So instead of mapStateToProps we put
// null
export default connect(mapStateToProps, { googleLogin })(Login);