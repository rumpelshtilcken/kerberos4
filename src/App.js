import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Client from './client/client';
import Form from './components/form';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <h1>This is Kerberos UI</h1>
        <Form/>
        <div className="box">
          <Client />
          <Client />
          <Client />
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
