import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { bgColor, desc, children } = this.props;
    return (
      <div className="App" style={{ backgroundColor: bgColor }} title={desc}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          {children}
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

/*
export const PI = 3.14;
export const fn = () => {};
*/
/*

let PI = 3.14;
const fn = () => { PI = Number.PI};

export const LOL = 'LOL to fajne lalki'; */

/* const App = (props) => {
  return (
    <div className="App" style={{ backgroundColor: props.bgColor }} title={props.desc}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.desc}
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
} */

/*
export {
  fn,
};
 */
export default App;
