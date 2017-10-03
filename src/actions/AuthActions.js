import * as types from './actionTypes';
import instance from '../store/axiosConfig';
import {beginAjaxCall, ajaxCallError} from './AjaxStatusActions';
import toastr from 'toastr';


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
        dispatch(beginAjaxCall());
        return instance
        .post('/auth/login', data)
        .then(resp => {
            dispatch(loginSuccess(resp.data));
        })
        .then(() => toastr.success('You are loged in'))
        .catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error(error.response.data.error)
        })
    }
}
export function register(data) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return instance
        .post('/auth/register', data)
        .then(resp => {
            dispatch(registerSuccess(resp.data));
        })
        .then(() => toastr.success('You are registered'))
        .catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error(error.response.data.error)
        })
    }
}

export function logout() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return instance
        .post('/auth/logout')
        .then(resp => {
            dispatch(logoutSuccess(resp.data));
        })
        .then(() => toastr.success('You are loged out'))
        .catch(error => {
            dispatch(ajaxCallError(error));
            console.log(error.response.data)
        })
    }
}

export function changePassword(data) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return instance
        .post('/auth/reset-password', data)
        .then(resp => {
            dispatch(changePasswordSuccess(resp.data));
            toastr.success(resp.data.message)
        })
        .catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error(error.response.data.error)
        })
    }
}
