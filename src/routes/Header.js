import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getUser, logout } from '../actions/userAction';
// Navigation

class Header extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom: '20px'}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">NOTEPAGER</Link>
                    </div>
                    
                    <div className="navbar-header">
                    {
                        this.props.user === null ? (
                            <Link className="nav navbar-nav navbar-right" to="/login">Login</Link>
                        ) : (
                            <Link className="nav navbar-nav navbar-right" to="/logout" onClick={() => this.props.logout()}>Logout</Link>
                        )
                    }
                        

                    </div>
                </div>
            </nav>

        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser, logout})(Header);