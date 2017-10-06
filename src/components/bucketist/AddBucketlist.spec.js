import React from 'react';
import PropTypes from 'prop-types';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import TestUtils from 'react-addons-test-utils';

import '../../setuptest';
import AddBucketlist from './AddBucketlist';

function setup(openAdd) {
  const props = {
    handleCloseAdd: () => {},
    openAdd: openAdd,
    handleOpenAdd: () => {},
    handleChange: () => {},
    onsubmit: () => {},
  };
  const mountWithContext = (node) => mount(node, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: PropTypes.object.isRequired,
    }
  });
  return mount(<AddBucketlist {...props} />, {
    context: {
        muiTheme: getMuiTheme(),
      },
      childContextTypes: {
        muiTheme: PropTypes.object.isRequired,
      },
  });
}

describe('<AddBucketlist />' , () => {
  it('renders FloatingActionButton', () => {
    const wrapper = setup(false);
    expect(wrapper.find('FloatingActionButton').length).toBe(1);
  })
  it('renders Dialog', () => {
    const wrapper = setup(true);
    expect(wrapper.find('Dialog').length).toBe(1);
  })
//   it('renders logout button', () => {
//     const wrapper = setup(true);
//     expect(wrapper.find('FlatButton').length).toBe(1);
//   })
});
