import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav /> 
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
