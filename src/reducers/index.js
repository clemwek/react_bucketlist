import {combineReducers} from 'redux';
import auth from './authReducer';
import bucketlist from './bucketlistReducer';

const rootReducer = combineReducers({
    auth,
    bucketlist
});

export default rootReducer;