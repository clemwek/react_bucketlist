import * as types from '../actions/actionTypes';
const initialState = {
    authenticated: false,
    loading: false,
    login: true,
    error: false,
    message: '',
    token: null
}

export default function authReducer(state=initialState, action) {
    switch(action.type) {
        case types.LOGIN_SUCCESS:
            return {...state,
                loading: false,
                token: action.payload.token,
                message: action.payload.message,
                authenticated: true,
            }
        case types.LOGOUT_SUCCESS:
            return {...state,
                loading: false,
                token: action.payload.token,
                message: action.payload.message,
                authenticated: false,
            }
        case 'SHOW_LOGIN':
            return {...state,
                login: true
            }
        case 'SHOW_REGISTER':
            return {...state,
                login: false
            }

        default:
            return state;
    }
}