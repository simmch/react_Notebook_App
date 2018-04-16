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
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Header from './routes/Header';
import Login from './components/Login';
import LoadingComponent from './components/LoadingComponent';
import AuthenticatedComponent from './components/AuthenticatedComponent';
import NoteDetail from './components/NoteDetail';
import NoteEdit from './components/NoteEdit';

// Create the store
// We pull in rootReducer from index.js under reducers
// Because it combines all reducers from    the project/reducer directory
// Into the store.
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


// provide the redux store to react
// Additonally, keeping the header inside authenication component
// keeps people from seeing navigation unless they are logged in
ReactDOM.render(
<Provider store={store}> 
    <BrowserRouter>
    <LoadingComponent>
    <div>
        <Switch>
            <Route path="/login" component={Login} exact={true} />
            <Redirect from="/logout" to="/" />
            <AuthenticatedComponent>
            <Header />
            <Route path="/:id/edit" component={NoteEdit} exact={true} />
            <Route path="/:id" component={NoteDetail} exact={true} />
            <Route path="/" component={App} exact={true} />
            </AuthenticatedComponent>
        </Switch>
    </div> 
    </LoadingComponent>
    </BrowserRouter>
</Provider>, 
document.getElementById('root')
);
registerServiceWorker();
