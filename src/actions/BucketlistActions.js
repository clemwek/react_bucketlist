import * as types from './actionTypes';
import instance from '../store/axiosConfig';
import store from '../store/configureStore';

export function getBucketlistSuccess(payload) {
    return {
        type: types.GET_BUCKETLIST_SUCCESS,
        payload
    }
}

export function addBucketlistSuccess(payload) {
    return {
        type: types.ADD_BUCKETLIST_SUCCESS,
        payload
    }
}

export function getBucketlist() {
    return function (dispatch) {
        return instance
        .get('/bucketlists')
        .then(resp => {
            dispatch(getBucketlistSuccess(resp.data));
        })
        .catch(error => {
            console.log(error.response.data)
        })
    }
}

export function addBucketlist(data) {
    return function (dispatch) {
        return instance
        .post('/bucketlists', data)
        .then(resp => {
            dispatch(addBucketlistSuccess(resp.data));
        })
        .catch(error => {
            console.log(error.response.data)
        })
    }
}
