import React from 'react';
import PropTypes from 'prop-types';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import '../../setuptest';
import SearchBarComponent from './SearchBar';

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
  return mount(<SearchBarComponent {...props} />, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: PropTypes.object.isRequired,
    },
  });
}

describe('<SearchBarComponent />', () => {
  it('renders the search bar', () => {
    const wrapper = setup();
    expect(wrapper.find('SearchBar').length).toBe(1);
  })
});
