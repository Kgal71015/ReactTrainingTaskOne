import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <div id="first">first</div>
        <div id="second">second</div>
        <div id="third">third</div>
        <div id="fourth">fourth</div>
        </a>
      </header>
    </div>
  );
}

export default App;

// 1. React.CreateElement
// 2. React.Component
// 3. React.PureComponent
// 4. Functional component
