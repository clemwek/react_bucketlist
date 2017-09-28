import * as types from '../actions/actionTypes';


export default function authReducer(state=[], action) {
    switch(action.type) {
        case types.ONE:
            return action.AUTH;

        default:
            return state;
    }
}