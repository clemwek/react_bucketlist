import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
// import TestUtils from 'react-addons-test-utils';

import '../../setuptest';
import RegisterForm from './RegisterForm';

function setup(saving) {
  const props = {
    onSubmit: () => {},
    onChange: () => {},
    titleStyle: {},
  };
  return shallow(<RegisterForm {...props} />);
}

describe('<RegisterForm />' , () => {
  it('renders form', () => {
    const wrapper = setup(false);
    expect(wrapper.find('CardText').length).toBe(1);
  })
});
