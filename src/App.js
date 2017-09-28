import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import Navbar from './components/common/Navbar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Navbar />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;
