import * as types from './actionTypes';
import instance from '../store/axiosConfig';
import store from '../store/configureStore';
import {beginAjaxCall, ajaxCallError} from './AjaxStatusActions';
import toastr from 'toastr';

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

export function editItemSuccess(bucketlist) {
    return {
        type: types.EDIT_BUCKETLIST_ITEM_SUCCESS,
        bucketlist
    }
}

export function deleteBucketlistSuccess(bucketlist) {
    return {
        type: types.DELETE_BUCKETLIST_SUCCESS,
        bucketlist
    }
}

export function searchBucketlistSuccess(bucketlist) {
    return {
        type: types.SEARCH_BUCKETLIST_SUCCESS,
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
        dispatch(beginAjaxCall());
        return instance
        .get('/bucketlists')
        .then(resp => {
            dispatch(getBucketlistSuccess(resp.data));
        })
        .catch(error => {
            dispatch(ajaxCallError(error));
            console.log(error.response.data)
        })
    }
}

export function addBucketlist(data) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return instance
        .post('/bucketlists', data)
        .then(resp => {
            dispatch(addBucketlistSuccess(resp.data));
        })
        .then(() => toastr.success('Bucketlist add was a success'))
        .catch(error => {
            toastr.error(error.response.data.error)
            dispatch(ajaxCallError(error));
            console.log(error.response.data)
        })
    }
}

export function addItems(data) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return instance
        .post(`/bucketlists/${data.id}/items`, data)
        .then(resp => {
            dispatch(addItemSuccess(resp.data));
        })
        .then(() => toastr.success('Item add was a success'))
        .catch(error => {
            toastr.error(error.response.data.error)
            dispatch(ajaxCallError(error));
            console.log(error)
        })
    }
}

export function editItems(data) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return instance
        .put(`/bucketlists/${data.bucket_id}/items/${data.id}`, data)
        .then(resp => {
            dispatch(editItemSuccess(resp.data));
        })
        .then(() => toastr.success('Item edit was a success'))
        .catch(error => {
            toastr.error(error.response.data.error)
            dispatch(ajaxCallError(error));
            console.log(error.response.data)
        })
    }
}

export function editBucketlist(data) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return instance
        .put(`/bucketlists/${data.id}`, data)
        .then(resp => {
            dispatch(editBucketlistSuccess(resp.data));
        })
        .then(() => toastr.success('Bucketlist edit was a success'))
        .catch(error => {
            toastr.error(error.response.data.error)
            dispatch(ajaxCallError(error));
            console.log(error.response.data)
        })
    }
}

export function deleteBucketlist(id) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return instance
        .delete(`/bucketlists/${id}`)
        .then(resp => {
            dispatch(deleteBucketlistSuccess(resp.data));
        })
        .then(() => toastr.success('Bucketlist deleted was a success'))
        .catch(error => {
            toastr.error(error.response.data.error)
            dispatch(ajaxCallError(error));
            console.log(error.response.data)
        })
    }
}

export function deleteBucketlistItem(id, item_id) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return instance
        .delete(`/bucketlists/${id}/items/${item_id}`)
        .then(resp => {
            dispatch(deleteBucketlistItemuccess(resp.data));
        })
        .then(() => toastr.success('Item deleted was a success'))
        .catch(error => {
            toastr.error(error.response.data.error)
            dispatch(ajaxCallError(error));
            console.log(error)
        })
    }
}

export function searchBucketlist(data) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return instance
        .get(`/bucketlists?q=${data}`)
        .then(resp => {
            dispatch(searchBucketlistSuccess(resp.data));
        })
        .catch(error => {
            toastr.error(error.response.data.error)
            dispatch(ajaxCallError(error));
            console.log(error.response.data)
        })
    }
}
