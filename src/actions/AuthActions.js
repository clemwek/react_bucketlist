import * as types from './actionTypes';
import instance from '../store/axiosConfig';


export function loginSuccess(data) {
    return {
        type: types.LOGIN_SUCCESS,
        data
    }
}

export function login(data) {
    return function (dispatch) {
        return instance
        .post('/auth/login', data)
        .then(resp => {
            dispatch(loginSuccess(resp.data));
        })
        .catch(error => {
            console.log(error.response.data)
        })
    }
}