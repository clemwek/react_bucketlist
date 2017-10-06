import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
// import TestUtils from 'react-addons-test-utils';

import '../../setuptest';
import LoginForm from './LoginForm';

function setup() {
  const props = {
    onSubmit: () => {},
    onChange: () => {},
    reset: false,
    changePassword: () => {},
    onSubmitChangePassword: () => {},
    titleStyle: {},
  };
  return shallow(<LoginForm {...props} />);
}

describe('<LoginForm />' , () => {
  it('renders form', () => {
    const wrapper = setup(false);
    expect(wrapper.find('CardText').length).toBe(1);
  })
});
