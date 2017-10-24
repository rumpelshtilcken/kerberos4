import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import './App.css';

class App extends Component {
  state = {
    isOpen: false
  }

  handleOpenSignUpModal = ()=> this.setState({ isOpen: true});

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <h1>This is Kerberos UI</h1>
        <SignIn  handleOpenSignUpModal={this.handleOpenSignUpModal}/>
        <SignUp isOpen = {this.state.isOpen}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
