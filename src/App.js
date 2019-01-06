import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Summary from './components/Summary';

class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <Summary/>
      </div>
    );
  }
}

export default App;
