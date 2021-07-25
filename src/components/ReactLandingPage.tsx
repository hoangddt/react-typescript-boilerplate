import React from 'react';
import logo from '../img/logo.svg';
import '../styles/ReactLandingPage.scss';
import { Button } from 'antd-mobile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is React Landingpage component.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Start</Button>
      </header>
    </div>
  );
}

export default App;
