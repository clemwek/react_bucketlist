import { combineReducers } from 'redux';
import auth from './authReducer';
import bucketlist from './bucketlistReducer';
import ajaxStatusReducer from './ajaxStatusReducer';


const rootReducer = combineReducers({
  auth,
  bucketlist,
  ajaxStatusReducer,
});

export default rootReducer;
