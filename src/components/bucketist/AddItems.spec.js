import React from 'react';
import PropTypes from 'prop-types';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import '../../setuptest';
import { AddItem } from './AddItems';

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
  return mount(<AddItem />, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: PropTypes.object.isRequired,
    },
  });
}

describe('<AddItem />', () => {
  it('renders the card', () => {
    const wrapper = setup();
    expect(wrapper.find('Card').length).toBe(1);
  })
});
