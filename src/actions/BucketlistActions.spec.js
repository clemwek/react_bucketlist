import expect from 'expect';
import * as bucketlistActions from './BucketlistActions';
import * as types from './actionTypes';


// test async actions
describe('Bucketlist Actions', () => {
  describe('get bucketlist succesfull', () => {
    it('Should get bucketlist successful', () => {
      const bucketlist = {
        id: 1,
        name: 'some name',
        item: [],
      };
      const expectedAction = {
        type: types.GET_BUCKETLIST_SUCCESS,
        bucketlist,
      };

      const action = bucketlistActions.getBucketlistSuccess(bucketlist);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('Add bucketlist succesfull', () => {
    it('Should Add bucketlist successful', () => {
      const bucketlist = {
        id: 1,
        name: 'some name',
        item: [],
      };
      const expectedAction = {
        type: types.ADD_BUCKETLIST_SUCCESS,
        bucketlist,
      };

      const action = bucketlistActions.addBucketlistSuccess(bucketlist);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('edit bucketlist succesfull', () => {
    it('Should edit bucketlist successful', () => {
      const bucketlist = {
        id: 1,
        name: 'some name',
        item: [],
      };
      const expectedAction = {
        type: types.EDIT_BUCKETLIST_SUCCESS,
        bucketlist,
      };

      const action = bucketlistActions.editBucketlistSuccess(bucketlist);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('delete bucketlist succesfull', () => {
    it('Should delete bucketlist successful', () => {
      const bucketlist = {
        id: 1,
        delete: 'Delete bucketlis was successful',
      };
      const expectedAction = {
        type: types.DELETE_BUCKETLIST_SUCCESS,
        bucketlist,
      };

      const action = bucketlistActions.deleteBucketlistSuccess(bucketlist);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('Add bucketlist items succesfull', () => {
    it('Should add bucketlist items successful', () => {
      const bucketlist = {
        id: 1,
        name: 'some name',
        bucket_id: 2,
        description: 'test test test',
      };
      const expectedAction = {
        type: types.ADD_ITEM_SUCCESS,
        bucketlist,
      };

      const action = bucketlistActions.addItemSuccess(bucketlist);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('edit bucketlist items succesfull', () => {
    it('Should edit bucketlist items successful', () => {
      const bucketlist = {
        id: 1,
        name: 'some name',
        bucket_id: 2,
        description: 'test test test',
      };
      const expectedAction = {
        type: types.EDIT_BUCKETLIST_ITEM_SUCCESS,
        bucketlist,
      };

      const action = bucketlistActions.editItemSuccess(bucketlist);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('delete bucketlist item succesfull', () => {
    it('Should delete bucketlist item successful', () => {
      const bucketlist = {
        id: 1,
        bucket_id: 2,
        delete: 'Delete bucketlis was successful',
      };
      const expectedAction = {
        type: types.DELETE_BUCKETLIST_ITEM_SUCCESS,
        bucketlist,
      };

      const action = bucketlistActions.deleteBucketlistItemuccess(bucketlist);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('search bucketlist succesfull', () => {
    it('Should search bucketlist successful', () => {
      const bucketlist = {
        id: 1,
        bucket_id: 2,
        delete: 'Delete bucketlis was successful',
      };
      const expectedAction = {
        type: types.SEARCH_BUCKETLIST_SUCCESS,
        bucketlist,
      };

      const action = bucketlistActions.searchBucketlistSuccess(bucketlist);

      expect(action).toEqual(expectedAction);
    });
  });
});
