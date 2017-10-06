import React from 'react';
import PropTypes from 'prop-types';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import '../../setuptest';
import { EditItem } from './EditItems';

function setup() {
  const props = {
    onSubmitSearch: () => {},
    onChange: () => {},
  };
  const mountWithContext = (node) => mount(node, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: PropTypes.object.isRequired,
    }
  });
  return mount(<EditItem {...props} />, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: PropTypes.object.isRequired,
    },
  });
}

describe('<EditItem />', () => {
  it('renders the search bar', () => {
    const wrapper = setup();
    expect(wrapper.find('Card').length).toBe(1);
  })
});
