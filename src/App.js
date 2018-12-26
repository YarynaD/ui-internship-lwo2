import React, { Component } from 'react';
import httpServices from './services/httpServices';
import logo from './logo.svg';
import './App.css';

//constants for GET method test
const mainUrl = 'https://jsonplaceholder.typicode.com/';
const resUrl = 'users';
const resTimeout = 1000;
const valFunc = function myValidateStatus(status){
    return status >= 200 && status < 300;
};

class App extends Component {

  componentDidMount() {
    httpServices.get(resUrl, mainUrl, resTimeout, valFunc, (data) => {
      this.setState({persons: data}, () => {
      console.log('state', this.state);
    });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
