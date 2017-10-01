import * as types from '../actions/actionTypes';


export default function bucketlistReducer(state=[], action) {
    switch(action.type) {
        case types.ADD_BUCKETLIST_SUCCESS:
            return [...state,
                Object.assign({}, action.payload)
            ];
        case 'GET_BUCKETLISTREJECTED':
            return {...state,
                loading: false,
                message: 'action.payload.data.message',
                error: true
            }
        case 'GET_BUCKETLIST_FULFILLED':
            return {...state,
                bucketlist: action.payload.data.bucketlist
            }

        default:
            return state;
    }
}