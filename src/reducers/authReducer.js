import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function authReducer(state=initialState.auth, action) {
    switch(action.type) {
        case types.LOGIN_SUCCESS:
            return { ...state,
                loading: false,
                token: action.payload.token,
                message: action.payload.message,
                authenticated: true,
            }

        case types.REGISTER_SUCCESS:
            return { ...state,
                loading: false,
                token: action.payload.token,
                message: action.payload.message,
                authenticated: true,
            }

        case types.LOGOUT_SUCCESS:
            return { ...state,
                loading: false,
                token: action.payload.token,
                message: action.payload.message,
                authenticated: false,
            }
            
        case types.CHANGE_PASSWORD_SUCCESS:
            return { ...state,
            }

        case types.SHOW_LOGIN:
            return { ...state,
                login: true
            }

        case types.SHOW_REGISTER:
            return { ...state,
                login: false
            }

        default:
            return state;
    }
}