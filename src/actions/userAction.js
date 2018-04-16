import { auth, googleProvider } from '../components/firebase';
import {GET_USER, USER_STATUS} from '../actionTypes';


export function googleLogin() {
    return dispatch => auth.signInWithPopup(googleProvider);
}

export function logout() {
    return dispatch => auth.signOut();
}

export function getUser() {
    // show loading status before getting user to true

    return dispatch => {
        dispatch({
            type: USER_STATUS, 
            payload: true
        });
        auth.onAuthStateChanged(user => {
            dispatch({
                type: GET_USER,
                payload: user
            });
        // show loading status to false
            dispatch({
                type: USER_STATUS,
                payload: false
            });
        });
    };
}