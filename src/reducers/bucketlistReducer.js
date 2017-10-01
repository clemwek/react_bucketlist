import * as types from '../actions/actionTypes';


export default function bucketlistReducer(state=[], action) {
    switch(action.type) {
        case types.GET_BUCKETLIST_SUCCESS:
            return action.bucketlist.bucketlist
        case types.ADD_BUCKETLIST_SUCCESS:
            return [...state,
                Object.assign({}, action.bucketlist)
            ]
        case types.ADD_ITEM_SUCCESS:
            return state.map(bucket => bucket.id === action.bucketlist.bucket_id ?
                {...bucket, items: action.bucketlist} : bucket
            )
        case types.DELETE_BUCKETLIST_SUCCESS:
            return state.filter(bucketlist => bucketlist.id !== action.bucketlist.id)

        default:
            return state;
    }
}