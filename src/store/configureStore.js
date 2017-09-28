import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reduxImmutableStateIvariant from 'redux-immutable-state-invariant';
import { logger } from 'redux-logger'

import rootReducer from '../reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(promiseMiddleware(),
        reduxImmutableStateIvariant(),
        logger
    )
);

export default store;