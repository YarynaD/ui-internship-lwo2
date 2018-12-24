import React, { Component } from 'react';
import httpServices from './services/httpServices';
import logo from './logo.svg';
import './App.css';

//constants for GET method test
const my_baseUrl_init = 'https://jsonplaceholder.typicode.com/';
const my_url_init = 'users';
const my_timeout = 1000;
const my_func = function my_validateStatus(status){
    return status >= 200 && status < 300;
};

class App extends Component {

  componentDidMount() {
    httpServices.get(my_url_init, my_baseUrl_init, my_timeout, my_func, (data) => {
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
