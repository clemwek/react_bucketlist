import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import Navbar from './components/common/Navbar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Navbar
            loading={this.props.loading}
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

function mapStatusToProps(state, ownProps) {
  return {
    loading: state.ajaxStatusReducer > 0
  };
}

export default connect(mapStatusToProps)(App);
