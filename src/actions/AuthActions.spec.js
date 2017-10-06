import expect from 'expect';
import * as authActions from './AuthActions';
import * as types from './actionTypes';


// test async actions
describe('Auth Actions', () => {
  describe('Registration succesfull', () => {
    it('Should register new person successful', () => {
      const payload = {
        email: 'test@mail.com',
        message: 'user created',
        token: 'someRandomText',
        username: 'test',
      };
      const expectedAction = {
        type: types.REGISTER_SUCCESS,
        payload,
      };

      const action = authActions.registerSuccess(payload);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('Login succesfull', () => {
    it('Should login a person successful', () => {
      const payload = {
        message: 'user loged in',
        token: 'someRandomText',
        username: 'test',
      };
      const expectedAction = {
        type: types.LOGIN_SUCCESS,
        payload,
      };

      const action = authActions.loginSuccess(payload);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('Change password succesfull', () => {
    it('Should change a persons password successful', () => {
      const payload = {
        email: 'test@mail.com',
        message: 'user loged in',
        token: 'someRandomText',
        username: 'test',
      };
      const expectedAction = {
        type: types.CHANGE_PASSWORD_SUCCESS,
        payload,
      };

      const action = authActions.changePasswordSuccess(payload);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('Logout succesfull', () => {
    it('Should logout a persons successful', () => {
      const payload = {
        message: 'user loged in',
        token: 'someRandomText',
      };
      const expectedAction = {
        type: types.LOGOUT_SUCCESS,
        payload,
      };

      const action = authActions.logoutSuccess(payload);

      expect(action).toEqual(expectedAction);
    });
  });
});
