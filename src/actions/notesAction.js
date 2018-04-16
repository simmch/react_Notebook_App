import { GET_NOTES, NOTES_STATUS } from '../actionTypes';
import { database } from '../components/firebase';

export function getNotes(){
    return dispatch => {
        // as soon as this function starts, show loading is true
        dispatch({
            type: NOTES_STATUS, 
            payload: true
        });
        database.on('value', snapshot => {
            dispatch ({
                type: GET_NOTES,
                payload: snapshot.val()
            });
        // when notes are received show loading to false
            dispatch({
            type: NOTES_STATUS, 
            payload: false
            },
        () => {
                dispatch({
                    type: NOTES_STATUS,
                    payload: -1
                })
            });
        });
    };
};

export function saveNotes(note){
    return dispatch => database.push(note)
}

export function deleteNote(id){
    return dispatch => database.child(id).remove();
}

export function updateNote(id, note){
    return dispatch => database.child(id).update(note);
}

export function saveComment(noteId, comment){
    return dispatch => {
        // pushing comments to firebase DB
        database.child(noteId).child('comments').push(comment);
    }
}