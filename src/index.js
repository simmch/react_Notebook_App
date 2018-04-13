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
import Header from './routes/Header';
import Login from './components/Login';

// store
// first argument is store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


// provide the store to react
ReactDOM.render(
<Provider store={store}> 
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/login" component={Login} exact={true} />
            <Route path="/" component={App} exact={true} />
        </Switch>
    </div> 
    </BrowserRouter>
</Provider>, 
document.getElementById('root')
);
registerServiceWorker();
