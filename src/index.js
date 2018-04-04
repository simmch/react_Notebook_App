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

// redux store requires
// reducers -> actions - actionType | applyMiddleware()


// store
// first argument is store
// second argument is action
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// provide the store to react

ReactDOM.render(
<Provider store={store}> 
    <App /> 
</Provider>, 
document.getElementById('root')
);
registerServiceWorker();
