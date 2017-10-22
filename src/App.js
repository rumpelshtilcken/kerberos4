import React, { Component } from 'react';

import Client from './client/client';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is Kerberos UI</h1>
        <Client />
      </div>
    );
  }
}

export default App;
