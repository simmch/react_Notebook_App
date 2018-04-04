import { GET_NOTES } from '../actionTypes';


export default function (state={}, {type, payload}){
    switch(type){
        case GET_NOTES:
        return payload;
        default: 
            return state;
    }
}