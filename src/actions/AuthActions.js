import * as types from './actionTypes';
import instance from '../store/axiosConfig';


export function loginSuccess(payload) {
    return {
        type: types.LOGIN_SUCCESS,
        payload
    }
}

export function logoutSuccess(payload) {
    return {
        type: types.LOGOUT_SUCCESS,
        payload
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

export function logout() {
    return function (dispatch) {
        return instance
        .post('/auth/logout')
        .then(resp => {
            dispatch(logoutSuccess(resp.data));
        })
        .catch(error => {
            console.log(error.response.data)
        })
    }
}