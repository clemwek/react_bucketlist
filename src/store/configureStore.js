import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import reduxImmutableStateIvariant from 'redux-immutable-state-invariant';
// import promiseMiddleware from 'redux-promise-middleware';
import { logger } from 'redux-logger'

import rootReducer from '../reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        reduxImmutableStateIvariant(),
        logger
    ),
    autoRehydrate()
);

persistStore(store)

export default store;