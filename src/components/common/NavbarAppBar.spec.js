import React from 'react';
import PropTypes from 'prop-types';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import TestUtils from 'react-addons-test-utils';

import '../../setuptest';
import NavbarAppBar from './NavbarAppBar';

function setup(autheticated) {
  const props = {
    login:() => {},
    logout:() => {},
    register:() => {},
    autheticated: autheticated,
  };
  const mountWithContext = (node) => mount(node, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: PropTypes.object.isRequired,
    }
  });
  return mount(<NavbarAppBar {...props} />, {
    context: {
        muiTheme: getMuiTheme(),
      },
      childContextTypes: {
        muiTheme: PropTypes.object.isRequired,
      },
  });
}

describe('<NavbarAppBar />' , () => {
  it('renders app bar', () => {
    const wrapper = setup(false);
    expect(wrapper.find('AppBar').length).toBe(1);
  })
  it('renders login and register button', () => {
    const wrapper = setup(false);
    expect(wrapper.find('FlatButton').length).toBe(2);
  })
  it('renders logout button', () => {
    const wrapper = setup(true);
    expect(wrapper.find('FlatButton').length).toBe(1);
  })
});
