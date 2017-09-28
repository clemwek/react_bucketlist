import * as types from './actionTypes';
import instance from '../store/axiosConfig';

export function login(data) {
    return {
        type: types.LOGIN,
        payload: instance.post('/auth/login', data),
    }
}

export function showLogin () {
    return {
        type: types.SHOW_LOGIN,
    }
}

export function showRegister () {
    return {
        type: types.SHOW_REGISTER,
    }
}

// export function logout () {
//     return {
//         type: types.LOGOUT,
//         payload: instance.post('/auth/logout'),
//     }
// }

// export function loginSuccess(data) {
//     return {
//         type: types.LOGIN_SUCCESS,
//         data
//     }
// }

// export function login(data) {
//     return function (dispatch) {
//         return instance
//         .post('/auth/login', data)
//         .then(resp => {
//             dispatch(loginSuccess(resp.data));
//         })
//         .catch(error => {
//             console.log(error.response.data)
//         })
//     }
// }