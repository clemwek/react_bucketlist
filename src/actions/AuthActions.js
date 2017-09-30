import * as types from './actionTypes';
import instance from '../store/axiosConfig';


export function loginSuccess(payload) {
    return {
        type: types.LOGIN_SUCCESS,
        payload
    }
}

export function registerSuccess(payload) {
    return {
        type: types.REGISTER_SUCCESS,
        payload
    }
}

export function changePasswordSuccess(payload) {
    return {
        type: types.REGISTER_SUCCESS,
        payload
    }
}

export function logoutSuccess(payload) {
    return {
        type: types.LOGOUT_SUCCESS,
        payload
    }
}

export function showLogin() {
    return {
        type: types.SHOW_LOGIN
    }
}

export function showRegister() {
    return {
        type: types.SHOW_REGISTER
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
export function register(data) {
    return function (dispatch) {
        return instance
        .post('/auth/register', data)
        .then(resp => {
            dispatch(registerSuccess(resp.data));
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

export function changePassword(data) {
    return function (dispatch) {
        return instance
        .post('/auth/reset-password', data)
        .then(resp => {
            dispatch(changePasswordSuccess(resp.data));
        })
        .catch(error => {
            console.log(error.response.data)
        })
    }
}
