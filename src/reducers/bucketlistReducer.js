import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function bucketlistReducer(state = initialState.bucketlist, action) {
  switch (action.type) {
    case types.GET_BUCKETLIST_SUCCESS:
      return action.bucketlist.bucketlist;

    case types.ADD_BUCKETLIST_SUCCESS:
      return [...state,
        Object.assign({}, action.bucketlist),
      ];

    case types.ADD_BUCKETLIST_ITEM_SUCCESS:
      return [...state,
      ];

    case types.EDIT_BUCKETLIST_SUCCESS:
      return [...state,
      ];

    case types.EDIT_BUCKETLIST_ITEM_SUCCESS:
      return [...state,
      ];

    case types.DELETE_BUCKETLIST_SUCCESS:
      return state.filter(bucketlist => bucketlist.id !== action.bucketlist.id);

    case types.DELETE_BUCKETLIST_ITEM_SUCCESS:
      return [...state];

    case types.SEARCH_BUCKETLIST_SUCCESS:
      return action.bucketlist.bucketlist;

    default:
      return state;
  }
}
