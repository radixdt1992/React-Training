import logo from './logo.svg';
import React from "react";
import './App.css';
import NavigationComponent from './components/NavigationComponent';
import SideBarComponent from './components/SideBarComponent';
import EvenNumbers from './components/EvenNumberComponent'; 
import DataComponent from './components/DataComponent';
import './sidebar.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <NavigationComponent />
      <SideBarComponent />
      <div>
      <EvenNumbers />
      <DataComponent fname="Hardik" lname="Makwana" />
      </div>
    </div>
  );
}

export default App;
