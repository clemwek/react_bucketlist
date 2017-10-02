import * as types from '../actions/actionTypes';


export default function bucketlistReducer(state=[], action) {
    switch(action.type) {
        case types.GET_BUCKETLIST_SUCCESS:
            return action.bucketlist.bucketlist
        case types.ADD_BUCKETLIST_SUCCESS:
            return [...state,
                Object.assign({}, action.bucketlist)
            ]
        case types.EDIT_BUCKETLIST_SUCCESS:
            return [...state.filter(bucketlist => bucketlist.id !== action.bucketlist.id),
                Object.assign({}, action.bucketlist)
            ]
        case types.EDIT_BUCKETLIST_ITEMS_SUCCESS:
            return [...state['items'].filter(bucketlist => bucketlist.id !== action.bucketlist.id),
                Object.assign({}, action.bucketlist)
            ]
        case types.ADD_ITEM_SUCCESS:
            return [...state['items'], 
            Object.assign({}, action.bucketlist)
        ]
        case types.DELETE_BUCKETLIST_SUCCESS:
            return state.filter(bucketlist => bucketlist.id !== action.bucketlist.id)
        case types.DELETE_BUCKETLIST_ITEM_SUCCESS:
            return [...state['items'].filter(bucketlist => bucketlist.id !== action.bucketlist.id),
            ]
        case types.SEARCH_BUCKETLIST_SUCCESS:
            return action.bucketlist.bucketlist
        default:
            return state;
    }
}