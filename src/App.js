// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export function sum(x, y) {
  return x + y;
}

export function getListIds(list) {
  return Object.keys(list);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Tests in React</h3>
        </div>
        <div className="App-content">
          <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small><br/>
          <small>Your app's secret key is: <b>{process.env.REACT_APP_SECRET_CODE}</b></small><br/>
          <small>The sum of <b>1</b> and <b>2</b> is <b>{sum(1,2)}</b></small>
          <form>
            <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
