import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import promiseMiddleware from 'redux-promise-middleware';
import reduxImmutableStateIvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            promiseMiddleware(),
            reduxImmutableStateIvariant()
        )
    );
}