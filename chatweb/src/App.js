import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatContainer from './containers/ChatContainer';

class App extends Component {
  render() {
    return (
      <ChatContainer/>
    );
  }
}

export default App;
