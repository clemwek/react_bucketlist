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
        case 'LOGIN_PENDING':
            return {...state, loading: true};
        case 'LOGIN_REJECTED':
            return {...state,
                loading: false,
                message: 'action.payload.data.message',
                error: true
            }
        case 'LOGIN_FULFILLED':
            return {...state,
                loading: false,
                token: action.payload.data.token,
                message: action.payload.data.message,
                authenticated: true,
            }
        case 'REGISTER_PENDING':
            return {...state, loading: true};
        case 'REGISTER_REJECTED':
            return {...state,
                loading: false,
                message: 'action.payload.data.message',
                error: true
            }
        case 'REGISTER_FULFILLED':
            return {...state,
                loading: false,
                token: action.payload.data.token,
                message: action.payload.data.message,
                authenticated: true,
            }
        case 'LOGOUT_FULFILLED':
            return {...state,
                loading: false,
                token: action.payload.data.token,
                message: action.payload.data.message,
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