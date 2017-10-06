import React from 'react';
import PropTypes from 'prop-types';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import '../../setuptest';
import { Bucketlist } from './BucketlistPage';

// function setup() {
//   const mountWithContext = (node) => mount(node, {
//     context: {
//       muiTheme: getMuiTheme(),
//     },
//     childContextTypes: {
//       muiTheme: PropTypes.object.isRequired,
//     }
//   });
//   return shallow(<Bucketlist />, {
//     context: {
//       muiTheme: getMuiTheme(),
//     },
//     childContextTypes: {
//       muiTheme: PropTypes.object.isRequired,
//     },
//   });
// }

describe('<Bucketlist />', () => {
  it('renders the card', () => {
    const wrapper = mount(<Bucketlist />)
    
  })
});
