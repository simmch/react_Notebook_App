import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Login from './components/Login';

// redux store requires
// reducers -> actions - actionType | applyMiddleware()


// store
// first argument is store
// second argument is action
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


// Navigation

const Header = () => (
    <nav className="navbar navbar-light bg-light justify-content-between">
        <div className="container-fluid">
            <div className="navbar-header">
                {/* <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button> */}

                <Link className="navbar-brand" to="/">NOTEPAGER</Link>
            </div>
            <div className="navbar-header">
                <Link className="nav navbar-nav navbar-right" to="/login">LOGIN</Link>
            </div>

            {/* <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div> */}
        </div>
    </nav>
);

// provide the store to react

ReactDOM.render(
<Provider store={store}> 
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/login" component={Login} exact={true} />
        </Switch>
    </div> 
    </BrowserRouter>
</Provider>, 
document.getElementById('root')
);
registerServiceWorker();
