import * as types from './actionTypes';
import instance from '../store/axiosConfig';
import store from '../store/configureStore';

export function getBucketlistSuccess(bucketlist) {
    return {
        type: types.GET_BUCKETLIST_SUCCESS,
        bucketlist
    }
}

export function addBucketlistSuccess(bucketlist) {
    return {
        type: types.ADD_BUCKETLIST_SUCCESS,
        bucketlist
    }
}

export function editBucketlistSuccess(bucketlist) {
    return {
        type: types.EDIT_BUCKETLIST_SUCCESS,
        bucketlist
    }
}

export function deleteBucketlistSuccess(bucketlist) {
    return {
        type: types.DELETE_BUCKETLIST_SUCCESS,
        bucketlist
    }
}

export function deleteBucketlistItemuccess(bucketlist) {
    return {
        type: types.DELETE_BUCKETLIST_ITEM_SUCCESS,
        bucketlist
    }
}

export function addItemSuccess(bucketlist) {
    return {
        type: types.ADD_ITEM_SUCCESS,
        bucketlist
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

export function addItems(data) {
    return function (dispatch) {
        return instance
        .post(`/bucketlists/${data.id}/items`, data)
        .then(resp => {
            dispatch(addItemSuccess(resp.data));
        })
        .catch(error => {
            console.log(error.response.data)
        })
    }
}

export function editBucketlist(data) {
    return function (dispatch) {
        return instance
        .put(`/bucketlists/${data.id}`, data)
        .then(resp => {
            dispatch(editBucketlistSuccess(resp.data));
        })
        .catch(error => {
            console.log(error.response.data)
        })
    }
}

export function deleteBucketlist(id) {
    return function (dispatch) {
        return instance
        .delete(`/bucketlists/${id}`)
        .then(resp => {
            dispatch(deleteBucketlistSuccess(resp.data));
        })
        .catch(error => {
            console.log(error.response.data)
        })
    }
}

export function deleteBucketlistItem(id, item_id) {
    return function (dispatch) {
        return instance
        .delete(`/bucketlists/${id}/items/${item_id}`)
        .then(resp => {
            dispatch(deleteBucketlistItemuccess(resp.data));
        })
        .catch(error => {
            console.log(error.response.data)
        })
    }
}
