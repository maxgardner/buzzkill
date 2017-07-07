import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Global/Navbar';
import LandingPage from './LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
