import { combineReducers } from 'redux';
import noteReducer from './noteReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    // These are States
    notes: noteReducer,
    user: userReducer
});

export default rootReducer;