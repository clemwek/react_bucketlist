import expect from 'expect';
import authReducer from './authReducer';
import * as actions from '../actions/AuthActions';

describe('Auth reducer', () => {
  it('Should register user', () => {
    const initialState = [
      { usernane: 'test' },
      { usernane: 'test2' }
    ];

    const newUser = { usernane: 'test3'  };

    const action = actions.registerSuccess(newUser);

    const newState = authReducer(initialState, action);

    // expect(newState.length).toEqual(3)
  });
});
