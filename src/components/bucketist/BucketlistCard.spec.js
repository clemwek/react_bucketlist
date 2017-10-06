import React from 'react';
import PropTypes from 'prop-types';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import '../../setuptest';
import { EditBucketlist } from './EditBucketlist';

function setup() {
  const mountWithContext = (node) => mount(node, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: PropTypes.object.isRequired,
    }
  });
  return shallow(<EditBucketlist />, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: PropTypes.object.isRequired,
    },
  });
}

describe('<EditBucketlist />', () => {
  it('renders the card', () => {
    const wrapper = setup();
    expect(wrapper.find('Card').length).toBe(1);
  })
});
